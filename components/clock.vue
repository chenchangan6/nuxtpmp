// 计时组件--时钟
<template>
  <div>
    <h1>用时：{{time.showtimes}}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      time: {
        hour: 0,
        minute: 0,
        secnd: 1,
        showtimes: "00:00:00"
      }
    };
  },
  mounted() {
    this.uptimes();
  },
  methods: {
    uptimes() {
      // setTimeout(this.uptime,1000)
      setInterval(this.uptime, 1000);
    },
    uptime() {
      this.time.secnd += 1;
      if (this.time.secnd == 60) {
        this.time.minute += 1;
        this.time.secnd = 0;
        if (this.time.minute == 60) {
          this.time.hour += 1;
          this.time.minute = 0;
        }
      }
      this.showtimes();
    },
    showtimes() {
      this.time.showtimes =
        this.buling(this.time.hour) +
        ":" +
        this.buling(this.time.minute) +
        ":" +
        this.buling(this.time.secnd);
    },
    //补零
    buling(data) {
      if (data < 10) {
        data = "0" + data;
      }
      return data;
    }
  }
};
</script>

