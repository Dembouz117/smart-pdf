// import { Page, Text, View, Document, renderToStream, Image, renderToBuffer } from '@react-pdf/renderer';
import createPDF from '../components/PDFDocument';
import AWS from 'aws-sdk';

import { Bucket } from "sst/node/bucket"
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3"

export const dynamic = 'force-dynamic' // defaults to auto
// export async function GET(request: Request) {}
let buffer: Buffer;
export async function POST(req: Request) {
    const body = await req.json();
    try{
        const s3Client = new S3Client();

        const fileName = `export-{${new Date().toISOString()}}.pdf`;
        const readablePDFStream = await createPDF();
        const chunks = [];
        for await (const chunk of readablePDFStream) {
            chunks.push(
                typeof chunk === "string" ? Buffer.from(chunk) : chunk
            );
        }
        buffer = Buffer.concat(chunks);
        const command = new PutObjectCommand({
            Bucket: Bucket.bucket.bucketName,
            Key: fileName,
            Body: buffer,
            ContentType: "application/pdf",
            ACL: "public-read",
        });
        

        await s3Client.send(command);

        // Define S3 upload parameters
        
        console.log(`File uploaded successfully at ${Bucket.bucket.bucketName}/${fileName}`);
        return new Response(buffer, {
            headers: {
                "Content-Type": "application/pdf",
                "Content-Disposition": "attachment; filename=export.pdf"
            }
            })


    }
    catch(err){
        console.log(err);

        return new Response(JSON.stringify({
            msg:"Error"
        }), {
        headers: {
            "Content-Type": "application/json",
            "Content-Disposition": "attachment; filename=export.pdf"
        }
        }
        )
    }
    

};