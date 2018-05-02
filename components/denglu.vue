<template>
  <div style="padding:100px">
    <el-row type="flex"
            align="middle"
            justify="center">
      <el-col :span="12">
        <el-form>
          <div>
            <el-input placeholder="用户名"></el-input>
          </div>
          <div>
            <el-input placeholder="密码"></el-input>
          </div>
        </el-form>
        <div>
          <el-button type="primary">提交信息</el-button>
        </div>
      </el-col>
    </el-row>
    <div>
      <span>这是{{title}}页</span>
    </div>

  </div>
</template>
<script>
export default {
  data(){
    return{
     
    }
  },
  props:['title']
  // 这是“注册”页，或者这是“登录”页。
}
</script>

