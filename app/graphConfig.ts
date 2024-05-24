const labels = ["Hey", "There", "Bro"];
const data = [20,30,40];

export const currOptions = {
    type: 'bar',
    data: { 
      labels: labels, // Labels: Remember not to hardcode this later
      datasets: [{ label: 'Foo', data: data }]
    },
    options: {
      indexAxis: 'y',
      scales: {
        y: {
          ticks: {
            callback: function(value, index, ticks) {
              // This callback will be overridden by the plugin
              return '';
            }
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      },
      afterDraw: (chart: any) => {
        const { ctx, chartArea: { top, bottom, left, right, width, height }, scales: { y } } = chart;
        console.log(chart);
        y.ticks.forEach((tick: any, index: number) => {
          const image = new Image(); // failing because Next.JS tag instead of react-pdf
          console.log("y tick:", tick);
          image.src = "example.png"
          image.onload = () => {
            const yPosition = y.getPixelForValue(tick.value) - (image.height / 2);
            console.log("yPosition:", yPosition);
            ctx.drawImage(image, left - 30, yPosition);
          };
        });
      }
    },
    
}


export const horizontalOptions = {
    type: 'horizontalBar', // Change the type to horizontalBar
    data: {
      labels: labels,
      datasets: [{ 
        label: 'Foo', 
        data: data 
      }]
    },
    options: {
      scales: {
        xAxes: { 
          display: false,
          beginAtZero: true,
          grid: {
            display: false // Hide grid lines for x-axis
          }
        },
        yAxes: { // Adjust settings for y-axis
          display: false,
          grid: {
            display: false // Hide grid lines for y-axis
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  }

//  V4 API

const multiColorLabels = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];
const multiColorData =[65, 59, 80, 81, 56, 55, 40];

export const multiColorChartData = {
    labels: multiColorLabels,
    datasets: [{
        label: 'My First Dataset',
        data: multiColorData,
        backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
        ],
        borderWidth: 1
    }]
}

export const multiColorOptions = {
    indexAxis: 'y',
    scales: {
      x: {
        grid: {
          display: false // Hide x-axis grid lines
        },
        ticks: {
          display: false // Hide x-axis ticks
        }
      },
      y: {
        grid: {
          display: false // Hide y-axis grid lines
        },
        ticks: {
          display: false // Hide y-axis ticks (labels)
        }
      }
    }
  }

export const crissCrossConfig = {
    type: "line",
    data: {
      datasets: [
        {
          label: "active listening and rapport",
          data: [
            {
              x: "2022-06-23",
              y: 2
            },
            {
              x: "2022-06-13",
              y: 2
            },
            {
              x: "2022-06-01",
              y: 3
            }
          ],
          backgroundColor: "transparent",
          borderColor: "#93007C",
          cubicInterpolationMode: "monotone"
        },
        {
          label: "checked understanding",
          data: [
            {
              x: "2022-06-23",
              y: 3
            },
            {
              x: "2022-06-13",
              y: 4
            },
            {
              x: "2022-06-01",
              y: 3
            }
          ],
          borderColor: "#00E0BE",
          backgroundColor: "transparent",
          cubicInterpolationMode: "monotone",
          tension: 0.4
        },
        {
          label: "clarity of tone/voice",
          data: [
            {
              x: "2022-06-23",
              y: 4
            },
            {
              x: "2022-06-13",
              y: 3
            },
            {
              x: "2022-06-01",
              y: 2
            }
          ],
          backgroundColor: "transparent",
          borderColor: "#FF7F00",
          cubicInterpolationMode: "monotone",
          tension: 0.4
        }
      ]
    },
    options: {
      scales: {
        x: {
          suggestedMin: "2022-06-16",
          suggestedMax: "2022-06-23",
          type: "time",
          time: {
            unit: "month"
          }
        },
        y: {
          min: 0,
          max: 5,
          ticks: {
            stepSize: 1
          }
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }
