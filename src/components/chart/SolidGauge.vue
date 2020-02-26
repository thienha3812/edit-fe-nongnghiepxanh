<template>
  <div id="container-speed" class="chart-container"></div>
</template>

<script>
import Highcharts from "highcharts";
import exportingInit from "highcharts/modules/exporting";
import highchartsMoreInit from "highcharts/highcharts-more";
import solidGaugeInit from "highcharts/modules/solid-gauge";
exportingInit(Highcharts);
highchartsMoreInit(Highcharts);
solidGaugeInit(Highcharts);
export default {
  name: "Chart",
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    }
  },
  data: function() {
    return {
      target: undefined
    };
  },
  watch: {
    value: function(newVal) {
      this.target.series[0].setData([newVal]);
      this.target.redraw();
    }
  },
  computed: {
    data() {
      return this.value;
    }
  },
  mounted: function() {
    // eslint-disable-next-line no-unused-vars
    const gaugeOptions = {
      chart: {
        type: "solidgauge"
      },

      title: null,

      pane: {
        center: ["50%", "65%"],
        size: "100%",
        startAngle: -90,
        endAngle: 90,
        background: {
          backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || "#EEE",
          innerRadius: "60%",
          outerRadius: "100%",
          shape: "arc"
        }
      },

      exporting: {
        enabled: false
      },

      tooltip: {
        enabled: false
      },

      // the value axis
      yAxis: {
        stops: [
          [0.1, "#55BF3B"], // green
          [0.5, "#DDDF0D"], // yellow
          [0.9, "#DF5353"] // red
        ],
        lineWidth: 0,
        tickWidth: 0,
        minorTickInterval: null,
        tickAmount: 2,
        title: {
          y: -70
        },
        labels: {
          y: 15
        }
      },

      plotOptions: {
        solidgauge: {
          dataLabels: {
            y: 30, // Dành cho đơn vị
            borderWidth: 0,
            useHTML: true
          }
        }
      }
    };

    // The speed gauge
    this.target = Highcharts.chart(
      this.$el,
      Highcharts.merge(gaugeOptions, {
        yAxis: {
          min: this.min,
          max: this.max,
          title: {
            text: ""
          }
        },

        credits: {
          enabled: false
        },
        // series: this.series
        series: [
          {
            name: "",
            data: [10],
            dataLabels: {
              format:
                '<div style="text-align:center;">' +
                '<span style="font-size:14px">{y}</span><br/>' +
                '<span style="font-size:12px;opacity:0.4">' +
                this.label +
                "</span>" +
                "</div>"
            },
            tooltip: {
              valueSuffix: ""
            }
          }
        ]
      })
    );
  },
  beforeDestroy: function() {
    this.target.destroy();
  }
};
</script>
<style lang="css" scoped>
.chart-container {
  height: 150px;
  width: 100%;
}

@media (max-width: 600px) {
  .highcharts-figure {
    width: 100%;
  }
  .highcharts-figure .chart-container {
    width: 100%;
    float: none;
    margin: 0 auto;
  }
}

.highcharts-figure,
.highcharts-data-table table {
  width: 100%;
  margin: 0 auto;
}

.highcharts-data-table table {
  font-family: Verdana, sans-serif;
  border-collapse: collapse;
  border: 1px solid #ebebeb;
  margin: 10px auto;
  text-align: center;
  width: 100%;
  max-width: 500px;
}
.highcharts-data-table caption {
  padding: 1em 0;
  font-size: 1.2em;
  color: #555;
}
.highcharts-data-table th {
  font-weight: 600;
  padding: 0.5em;
}
.highcharts-data-table td,
.highcharts-data-table th,
.highcharts-data-table caption {
  padding: 0.5em;
}
.highcharts-data-table thead tr,
.highcharts-data-table tr:nth-child(even) {
  background: #f8f8f8;
}
.highcharts-data-table tr:hover {
  background: #f1f7ff;
}
</style>
