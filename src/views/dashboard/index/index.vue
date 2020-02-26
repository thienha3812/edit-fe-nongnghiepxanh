<template>
  <div class="Index">
    <Row :style="{ display: 'flex', justifyContent: 'space-between' }">
      <Col span="7">
        <div>
          <Card :bordered="true">
            <div :style="{ textAlign: 'center' }" slot="title">
              <h2>Orp level</h2>
            </div>
            <solid-gauge label="°C" :value="orp" />
          </Card>
        </div>
      </Col>
      <Col span="7">
        <div>
          <Card :bordered="true">
            <div :style="{ textAlign: 'center' }" slot="title">
              <h2>Ph level</h2>
            </div>
            <solid-gauge label="°C" :value="ph" />
          </Card>
        </div>
      </Col>
      <Col span="7">
        <div>
          <Card :bordered="true">
            <div :style="{ textAlign: 'center' }" slot="title">
              <h2>Temperature</h2>
            </div>
            <solid-gauge label="°C" :value="temp" />
          </Card>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script lang="ts">
import GaugeChart from "@/components/chart/Gauge-chart.vue";
import SolidGauge from "@/components/chart/SolidGauge.vue";
import io from "socket.io-client";
const socket = io("http://localhost:3000");
export default {
  components: {
    SolidGauge
  },
  data(): object {
    return {
      orp: 0 as number,
      temp: 0 as number,
      ph: 0 as number
    };
  },
  created(): void {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const vm: any = this;
    socket.on("connect", function() {
      console.log("Connected to socke-io");
    });
    socket.on("CLIENT_RECEIVER", function(data: any) {
      vm.$store.dispatch("UPDATE_TEMP", data.temp);
      vm.ph = data.ph;
      vm.temp = data.temp;
      vm.orp = data.orp;
    });
  }
};
</script>
