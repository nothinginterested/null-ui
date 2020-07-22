<template>
    <el-form
            :model="registerForm"
            :rules="rules"
            ref="registerForm"
            label-position="right"
            label-width="80px"
            class="demo-ruleForm register-container"
    >
        <h3 class="title">
            用户注册
            <router-link
                    to="/login"
                    class="floatright fs15 warning"
                    style="margin-right:-30px;margin-top:-20px"
            >
                登录
                <i class="fa fa-chevron-circle-right margin-left-5 fs17"></i>
            </router-link>
        </h3>

        <el-form-item prop="name" label="用户姓名">
            <el-input type="text" v-model="registerForm.name" auto-complete="off" placeholder="用户姓名"></el-input>
        </el-form-item>
        <el-form-item prop="status" label="账号级别">
            <el-select v-model="registerForm.status" placeholder="请选择">
                <el-option
                        v-for="item in options"
                        :key="item.label"
                        :label="item.label"
                        :value="item.value"
                ></el-option>
            </el-select>
            <!--<el-input type="text" v-model="registerForm.status" auto-complete="off" placeholder="账号级别"></el-input>-->
        </el-form-item>
        <el-form-item prop="account" label="用户名">
            <el-input type="text" v-model="registerForm.account" auto-complete="off" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="password" label="密码">
            <el-input
                    type="password"
                    v-model="registerForm.password"
                    auto-complete="off"
                    placeholder="密码"
            ></el-input>
        </el-form-item>
        <el-form-item prop="check_password" label="确认密码">
            <el-input
                    type="password"
                    v-model="registerForm.check_password"
                    auto-complete="off"
                    placeholder="确认密码"
            ></el-input>
        </el-form-item>
        <el-form-item prop="email" label="邮箱">
            <el-input type="email" v-model="registerForm.email" auto-complete="off" placeholder="邮箱"></el-input>
        </el-form-item>
        <el-form-item prop="telephone" label="手机号">
            <el-input type="text" v-model="registerForm.telephone" auto-complete="off" placeholder="手机号"></el-input>
        </el-form-item>
        <el-form-item prop="IDcard" label="身份证号">
            <el-input type="text" v-model="registerForm.IDcard" auto-complete="off" placeholder="身份证号"></el-input>
        </el-form-item>
        <el-form-item prop="sex" label="性别">
            <el-input type="text" v-model="registerForm.sex" auto-complete="off" placeholder="性别"></el-input>
        </el-form-item>
        <el-form-item prop="city" label="城市">
            <el-input type="text" v-model="registerForm.city" auto-complete="off" placeholder="城市"></el-input>
        </el-form-item>

        <el-form-item class="text-right">
            <el-button type="primary" @click="registerSubmit()" :loading="registering">提交</el-button>
            <el-button @click="resetForm()">重置</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入密码"));
        } else {
          if (this.registerForm.check_password !== "") {
            this.$refs["registerForm"].validateField("check_password");
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请再次输入密码"));
        } else if (value !== this.registerForm.password) {
          callback(new Error("两次输入密码不一致!"));
        } else {
          callback();
        }
      };
      return {
        options: [{
          value: 1,
          label: '个人用户'
        }, {
          value: 2,
          label: '团体用户'
        }],
        registerForm: {
          name: "",
          status: "",
          account: "",
          password: "",
          check_password: "",
          email: "",
          telephone: "",
          IDcard: "",
          sex: "",
          city: ""
        },
        rules: {
          name: [{required: true, message: "请输入姓名", trigger: "blur"}],
          status: [
            {message: "请选择账号级别", trigger: "blur"}
          ],
          account: [{required: true, message: "请输入账号", trigger: "blur"}],
          email: [
            {type: "email", message: "请输入正确的邮箱地址", trigger: "change"}
          ],
          user_password: [
            {required: true, validator: validatePass, trigger: "blur,change"}
          ],
          check_password: [
            {required: true, validator: validatePass2, trigger: "blur,change"}
          ],
          IDcard: [
            {required: true, message: "请输入身份证号", trigger: "blur"}
          ],
          sex: [{required: true, message: "请输入性别", trigger: "blur"}],
          city: [{required: true, message: "请输入城市", trigger: "blur"}]
        },
        registering: false
      };
    },
    methods: {
      registerSubmit() {
        var _this = this;
        _this.$refs["registerForm"].validate(valid => {
          if (valid) {
            _this.registering = true;
            _this
              .$http({
                method: "POST",
                url: _this.config.baseUrl + "user/register",
                data: _this.registerForm
              })
              .then(function (data) {
                var result = data.data;
                var response = result.code;
                _this.registering = false;
                if (response == 0) {
                  _this.$message({message: "注册成功", type: "success"});
                  _this.$router.push("/login");
                  localStorage.setItem(
                    "user",
                    JSON.stringify(_this.registerForm)
                  );
                } else if (response == 11) {
                  _this.$message.error("用户名冲突");
                } else {
                  _this.$message.error("注册失败");
                }
              });
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      },
      resetForm() {
        this.$refs["registerForm"].resetFields();
      }
    },
    mounted() {
    }
  };
</script>

<style>
    .register-container {
        -webkit-border-radius: 5px;
        border-radius: 5px;
        -moz-border-radius: 5px;
        background-clip: padding-box;
        margin: 50px auto;
        width: 450px;
        padding: 35px 50px 10px 40px;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
    }

    .title {
        margin: 0px auto 40px auto;
        text-align: center;
        color: #505458;
    }
</style>
