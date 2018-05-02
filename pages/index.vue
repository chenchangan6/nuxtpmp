<template>
  <el-container>
    <el-header></el-header>
    <el-main>
      <el-row type="flex"
              align="middle">
        <el-col :span="12"
                align="middle">
          <div>
            <pmp-logo/>
            <h1>欢迎来到PMPtiku.com </h1>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="shuxian"></div>
        </el-col>
        <el-col :span="6"
                align="middle">
          <div>
            <a href="/login"><el-button type="primary">进入网站</el-button></a>
              <a href="/singup"><el-button type="primary">注册用户</el-button></a>
          </div>
        </el-col>
      </el-row>
    </el-main>
    <el-footer>
      <div style="text-align:center">copyright@ 2018 by CHUANGGONGTI CO.LTD</div>
    </el-footer>
  </el-container>
</template>


<script>
import PmpLogo from "~/components/PmpLogo";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
export default {
  components: {
    PmpLogo
  }
};
</script>
<style>
html {
  background-color: #282828;
}
.shuxian {
  height: 100px;
  border-right: solid 1px black;
}
</style>

