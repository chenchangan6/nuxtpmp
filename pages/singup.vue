<template>
  <div style="padding:100px">
    <el-row type="flex"
            align="middle"
            justify="center">
      <el-col :span="12">
        <div>
          <span>{{userinfo}}</span>
        </div>
        <div>
          <span>usr:{{userinfo.username}}</span>
        </div>
        <div>
          <span>pwd:{{userinfo.pwd}}</span>
        </div>
        <div>
          <span>nickname:{{userinfo.nickname}}</span>
        </div>
        <div>
          <span>
            <h1>{{mobilenumber}}</h1>
          </span>
        </div>
        <el-form>
          <div>
            <el-input placeholder="用户名"
                      v-model="userinfo.username"
                      name="user"></el-input>
          </div>
          <div>
            <el-input placeholder="密码"
                      v-model="userinfo.pwd"></el-input>
          </div>
          <div>
            <el-input placeholder="昵称"
                      v-model="userinfo.nickname"></el-input>
          </div>
        </el-form>
        <div>
          <el-button type="primary"
                     @click="add()">提交信息</el-button>
        </div>
        <div>
          <el-button type="primary"
                     @click="test()">测试信息</el-button>
        </div>
        <div>
          <el-button type="primary"
                     @click="testuptitle">更新title</el-button>
        </div>
        <div>
          <el-button type="primary"
                     @click="refresh()">刷新注册</el-button>
        </div>
      </el-col>
    </el-row>
    <div>
      <div>
        <span>报告：{{zhucemesages}}</span>
      </div>
      <div>
        <span>这是{{title}}页</span>
      </div>

      <div>
        <span>这是store.title:{{$store.state.title}}页</span>
      </div>
    </div>
    <div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      userinfo: {
        pwd: "",
        username: "",
        nickname: ""
      },
      zhucemesages: "",
      mobilenumber: ""
    };
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    },
    title() {
      return this.$store.state.title;
    },
    message() {
      return [];
    }
  },
  //   asyncData() {
  //     return axios.get("http://39.104.116.65/users/").then(res => {
  //       return { items: res.data };
  //     });

  //   },
mounted(){
this.test()
},
  methods: {
    add() {
      axios
        .post("http://127.0.0.1:5000/users/singup", this.userinfo)
        .then(res => {
          console.log(res.data);
          this.zhucemesages = res.data.code + res.data.messages;
        });
    },
    test() {
      this.mobilenumber = "";
      this.userinfo.username = "";
      this.userinfo.pwd = "";
      this.userinfo.nickname = "";
      this.zhucemesages = "等待注册";
    },
    testuptitle() {
      this.$store.commit("uptitle", this.userinfo.username);
    },
    refresh() {
      var mokemoblienumber = Math.random()
        .toString()
        .substr(2, 11);
      console.log(mokemoblienumber, this.mobilenumber);
      this.mobilenumber = mokemoblienumber;
      this.userinfo.username = mokemoblienumber;
      this.userinfo.pwd = mokemoblienumber;
      this.userinfo.nickname = mokemoblienumber;
      this.zhucemesages = "等待注册";
    }
  },
};
</script>
