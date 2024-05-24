//  file for graph configurations

export const createVaGraphConfig = (labels, datasets) => {
    return {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
            {
                label: '',
                data: datasets[0],
                backgroundColor: '#FB8500',
                barThickness: 8, 
                borderRadius: 10,
                display: false,
                stack: "Stack 0"
            },
            {
              label: '',
              data: datasets[1],
              backgroundColor: '#F4F4F4',
              barThickness: 8, 
              borderRadius: 10,
              display: false,
              stack: "Stack 0"
          },
            ],
        },
        options: {
            scales: {
            x: {
                stacked: true,
                title: {
                display: true,
                text: 'Date',
                align: 'end',
                },
                grid: {
                    display: false,
                },
            
         
            },
            y: {
                stacked: true,
                title: {
                display: true,
                text: 'No. of VA Detections',
                align: 'end',
                },
                grid: {
                    display: false,
                  },
                  ticks: {
                    display: false,
                  },
                min: 0,
                max: 10,
    
            },
            },
        },
        plugins: {
            legend: {
              display: false, // Hide the legend
            },
          },
        }
}
    