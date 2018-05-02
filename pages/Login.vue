<template>
  <div style="padding:100px">
    <el-row type="flex"
            align="middle"
            justify="center">
      <el-col :span="12">
        <clock></clock>
        <div>
          <h1>提示信息：{{message}}</h1>
        </div>
        <div>

          <textarea style="width:1000px;height:50px"
                    v-model="token">

          </textarea>
        </div>
        <el-form>
          <div>
            <el-input placeholder="用户名"
                      v-model="userinfo.username"></el-input>
          </div>
          <div>
            <el-input v-model="userinfo.pwd"
                      placeholder="密码"></el-input>
          </div>
        </el-form>
        <div>
          <el-button type="primary"
                     @click="basicauth">headers登录</el-button>
          <el-button type="primary"
                     @click="login">提交信息</el-button>
          <el-button type="primary"
                     @click="gettoken">获取TOKEN</el-button>
          <el-button type="primary"
                     @click="verfiytoken">验证TOKEN</el-button>
        </div>

      </el-col>
    </el-row>
    <div>
      <span>nihao {{title}}</span>
    </div>
    <div>
      <el-row>
        <el-col :span="2">
          <h1>序号</h1>
        </el-col>
        <el-col :span="5">
          <h1>用户名</h1>
        </el-col>
        <el-col :span="5">
          <h1>昵称</h1>
        </el-col>
        <el-col :span="10">
          <h1>创建日期</h1>
        </el-col>

      </el-row>
      <el-row v-for="(item, index) in items"
              :key="index">
        <el-col :span="2">{{index+1}}</el-col>
        <el-col :span="5"
                style="background:azure">{{item.username}}</el-col>
        <el-col :span="5">{{item.nickname}}</el-col>
        <el-col :span="10">{{item.createdate}}</el-col>
      </el-row>
    </div>
  </div>
</template>
<style scoped>
div {
  padding: 8px;
}
</style>
<script>
import axios from "axios";
import clock from "~/components/clock";
export default {
  components: {
    clock
  },
  data() {
    return {
      title: "这个是用户列表。",
      token: "",
      message: "",
      userinfo: {
        pwd: "",
        username: ""
      }
    };
  },

  methods: {
    login() {
      console.log(this.userinfo.username);
      axios
        .post("http://127.0.0.1:5000/users/login", this.userinfo)
        .then(res => {
          this.message = res.data.code + res.data.messages;
          this.token = res.data.token;
        });
    },
    gettoken() {
      axios
        .get(
          "http://127.0.0.1:5000/users/test?username=" +
            this.userinfo.username +
            "&pwd=" +
            this.userinfo.pwd
        )
        .then(res => {
          this.token = res.data;
        });
    },
    verfiytoken() {
      axios
        .get("http://127.0.0.1:5000/users/test", {
          headers: { Authorization:"Bearer "+ this.token }
        })
        .then(res => {
          console.log(res.data);
        });
    },
    basicauth() {
      axios
        .get("http://127.0.0.1:5000/users/test", {
          auth: {
            username: this.userinfo.username,
            password: this.userinfo.pwd
          }
        })
        .then(res => {
          this.message = res.data;
        });
    },
    mm() {
      this.message = "这是提示信息。";
    }
  },
  asyncData() {
    // We can return a Promise instead of calling the callback
    return axios.get("http://39.104.116.65/users/").then(res => {
      return { items: res.data };
    });
  },
  mounted() {
    (this.title = "mounted"), this.mm();
  }
};
</script>
