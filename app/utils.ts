export const createChartOptions = (max: number) => {
    const footer = (tooltipItems: any) => {
      let footer = 0;
      if (tooltipItems.length === 2) {
        footer = tooltipItems[1].parsed.r - tooltipItems[0].parsed.r;
        return `Gap: ${footer}`;
      }
      return;
    };
    const titleFunc = (context: any) => {
      if (typeof context[0].label === "string") {
        return;
      }
      // .map((word: any) => word.trim())
      return context[0].label.join("");
    };
    const chartOptions: any = {
      maintainAspectRatio: false,
      responsive: true,
      interaction: {
        mode: "index"
      },
      scales: {
        r: {
          type: "derivedRadialLinearScale",
          suggestedMax: max,
          pointLabels: {
            display: true,
            centerPointLabels: true,
            font: {
              size: 12
            }
          },
          angleLines: {
            display: true
          },
          ticks: {
            font: {
              size: 13
            },
            stepSize: 1,
            labelOffset: 10,
            z: 2,
            backdropColor: "rgba(0,0,0,0)"
          }
        }
      },
      layout: {
        padding: 20
      },
      plugins: {
        filler: {
          propagate: true
        },
        tooltip: {
          padding: 10,
          displayColors: false,
          boxWidth: 10,
          titleFont: {
            family: "GT Walsheim Pro",
            weight: "700",
            size: 15
          },
          bodyFont: {
            family: "GT Walsheim Pro",
            weight: "400",
            size: 15
          },
          footerFont: {
            family: "GT Walsheim Pro",
            weight: "400",
            size: 15
          },
          footerMarginTop: 1,
          callbacks: {
            footer: footer,
            title: titleFunc
          }
        }
      },
      elements: {
        arc: {
          borderWidth: 0,
          hoverBorderColor: "transparent",
          hoverBorderWidth: 2
        }
      },
      animation: false
    };
  
    return chartOptions;
  };
  