<script>
import Vue from "vue";
import VueFusionCharts from "vue-fusioncharts";
import FusionCharts from "fusioncharts";
import AngularGauge from "fusioncharts/fusioncharts.widgets";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

Vue.use(VueFusionCharts, FusionCharts, AngularGauge, FusionTheme);
export default {
  name: "app",
  props: {},
  data() {
    return {
      type: "angulargauge",
      renderAt: "chart-container",
      dataFormat: "json",
      datasource: {
        chart: {
          lowerLimit: "0",
          upperLimit: "100",
          showValue: "1",
          numberSuffix: "°C",
          theme: "fusion",
          showToolTip: "0"
        },
        // Chart Data
        colorRange: {
          color: [
            {
              minValue: "0",
              maxValue: "50",
              code: "#62B58F"
            },
            {
              minValue: "50",
              maxValue: "75",
              code: "#FFC533"
            },
            {
              minValue: "75",
              maxValue: "100",
              code: "#F2726F"
            }
          ]
        },
        dials: {
          dial: [
            {
              value: "81"
            }
          ]
        }
      }
    };
  }
};
</script>

<template>
  <div id="app">
    <div id="chart-container">
      <fusioncharts
        :type="type"
        :height="200"
        :width="300"
        :datasource="datasource"
      >
      </fusioncharts>
    </div>
  </div>
</template>
