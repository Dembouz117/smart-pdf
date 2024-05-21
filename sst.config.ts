import { SSTConfig } from "sst";
import { NextjsSite, Bucket, Table } from "sst/constructs";


export default {
  config(_input) {
    return {
      name: "smart-pdf",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const bucket = new Bucket(stack, "bucket");

      const site = new NextjsSite(stack, "site", {
        permissions: [bucket],
        bind: [bucket]
      });

      site.attachPermissions([bucket])

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;


