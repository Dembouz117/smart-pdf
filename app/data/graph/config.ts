//  file for graph configurations

export const createVaGraphConfig = (labels, data) => {
    return {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
            {
                label: '',
                data: data,
                backgroundColor: '#FB8500',
                barThickness: 8, 
                borderRadius: 10,
                display: false
            },
            ],
        },
        options: {
            scales: {
            x: {
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
    