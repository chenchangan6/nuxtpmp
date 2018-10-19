<template>
  <div class="yanzhengma">
    <el-row :gutter="10">
      <el-col :span="20">
        <el-input placeholder='请输入11位手机号,例如：137****7777'
                  v-model="phonenumber"></el-input>
      </el-col>
      <el-col :span="4">
        <el-button @click="getverifycode()">获取验证码</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="20">
        <el-input v-model="verifycode" placeholder='请输入验证码'></el-input>
      </el-col>
      <el-col :span="4">
        <el-button @click="verifyverifycode()" class="el-icon-question tishi
"></el-button>
      </el-col>
    </el-row>
  </div>
</template>
<style scoped>
.tishi {
  color: dodgerblue;
  font-size: 2em;
  padding: 5%;
}
.yanzhengma {
  width: 500px;
}
</style>
<script>
import axios from "axios";
export default {
  data() {
    return {
      phonenumber: 13718190584,
      verifycode: 123456
    };
  },
  methods: {
    getverifycode() {
      axios
        .post("http://127.0.0.1:5000/users/verifycode", {
          'phonenumber': this.phonenumber
        })
        .then(res => {
          console.log(res.data);
        });
      console.log(this.phonenumber);
    },
    verifyverifycode(){
      axios.get('http://127.0.0.1:5000/users/verifycode?phonenumber='+this.phonenumber+'&phoneverifycode='+this.verifycode)
      .then(res=>{
        console.log(res.data)
      })
    }
  }
};
</script>

