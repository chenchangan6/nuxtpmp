<template>
  <div>
<pmp-logo/>
<clock></clock>
  </div>
</template>
<script>
import clock from "~/components/clock";
import PmpLogo from "~/components/PmpLogo";
export default {
components: {
    PmpLogo,
    clock
  }
};
</script>
<style>
html{
    background: white;
    }
</style>

