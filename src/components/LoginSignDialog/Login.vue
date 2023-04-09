<template>
  <div>
    <!-- SVG Sprite -->
    <svg
      style="height: 0; width: 0; display: none"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <symbol id="close" width="22" height="22" viewBox="0 0 16 16">
        <path
          d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
        />
      </symbol>
      <symbol id="envelope" width="16" height="16" viewBox="0 0 16 16">
        <path
          d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
        />
      </symbol>
      <symbol id="user" width="16" height="16" viewBox="0 0 16 16">
        <path
          d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
        />
      </symbol>
      <symbol id="key" width="18" height="18" viewBox="0 0 16 16">
        <path
          d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"
        />
        <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
      </symbol>
      <symbol id="eye-slash-fill" width="16" height="16" viewBox="0 0 16 16">
        <path
          d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"
        />
        <path
          d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"
        />
      </symbol>
      <symbol id="eye-fill" width="16" height="16" viewBox="0 0 16 16">
        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
        <path
          d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
        />
      </symbol>
    </svg>
    <!-- shade layer -->
    <div class="shade"></div>
    <!-- wrap -->
    <div id="wrap_login" v-cloak>
      <!-- login window -->
      <div class="login-content" v-if="isLogin" key="log">
        <!-- shut button -->
        <div class="login-close" @click="$emit('close')">
          <svg class="svg_close">
            <use xlink:href="#close" />
          </svg>
        </div>
        <div class="login-body">
          <div class="login-head">
            <h2>
              <span>Kai</span>
              Journal
            </h2>
          </div>
          <div class="login-form-title">
            <h3>Login</h3>
            <span>
              Not have an account?
              <a href="#" @click="$emit('toggleRegister')">Sign Up</a>
            </span>
          </div>
          <!-- login form -->
          <form>
            <ul class="form-ul">
              <!-- email -->
              <li>
                <i class="input-icon">
                  <svg class="svg_user">
                    <use xlink:href="#user" />
                  </svg>
                </i>
                <input
                  type="text"
                  id="user_email"
                  class="form-input"
                  placeholder="please input username/email"
                  v-model="userEmail"
                />
              </li>
              <!-- psd -->
              <li>
                <i class="input-icon">
                  <svg class="svg_key">
                    <use xlink:href="#key" />
                  </svg>
                </i>
                <span class="wrap_login_showPaswd">
                  <i class="showPaswd" v-if="isShow3">
                    <svg class="svg_eye_slash_fill" @click="showPwd(3)">
                      <use xlink:href="#eye-slash-fill" />
                    </svg>
                  </i>
                  <i class="hidePaswd" v-else>
                    <svg class="svg_eye_fill" @click="hidePwd(3)">
                      <use xlink:href="#eye-fill" />
                    </svg>
                  </i>
                </span>
                <input
                  :type="logPwd"
                  class="form-input"
                  placeholder="please input login password"
                  autocomplete="new-password"
                  v-model="userPwd"
                />
              </li>
            </ul>

            <button type="button" class="login-btn" @click="login">
              login
            </button>
          </form>
          <p class="login-message">{{ loginMessage }}</p>
          <!-- loading animation -->
          <LoginLoad v-if="isLoginSuccess" class="load-animation"></LoginLoad>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from "@/network/netUtils.js";
import cookie from "@/store/myCookie.js";
import LoginLoad from "@/components/Animation/LoginLoad.vue";
export default {
  components: {
    LoginLoad,
  },
  data() {
    return {
      isLogin: true,
      isShow: true,
      isShow2: true,
      isShow3: true,
      firstPwd: "password",
      confirmPwd: "password",
      logPwd: "password",
      userEmail: "",
      userPwd: "",
      loginMessage: "",
      isLoginSuccess: false,
    };
  },
  methods: {
    showPwd(num) {
      if (num === 1) {
        this.isShow = false;
        this.firstPwd = "text";
      } else if (num === 2) {
        this.isShow2 = false;
        this.confirmPwd = "text";
      } else if (num === 3) {
        this.isShow3 = false;
        this.logPwd = "text";
      }
    },
    hidePwd(num) {
      if (num === 1) {
        this.isShow = true;
        this.firstPwd = "password";
      } else if (num === 2) {
        this.isShow2 = true;
        this.confirmPwd = "password";
      } else if (num === 3) {
        this.isShow3 = true;
        this.logPwd = "password";
      }
    },
    login() {
      const config = {
        url: "/api/user/login",
        method: "post",
        data: { userAccount: this.userEmail, userPwd: this.userPwd },
      };
      request(config)
        .then((res) => {
          if (res.data === "LoginFail") {
            this.loginMessage = "请输入正确的账号或密码";
          } else {
            // save token to cookie for two weeks
            const now = new Date();
            const durDay = 14;
            now.setDate(now.getDate() + durDay);
            cookie.setCookie("token", res.data.token, now, "/");
            console.log("token:" + document.cookie);
            // loading animation
            this.isLoginSuccess = true;
            setTimeout(() => {
              this.$store.commit("setLoginStatus", true);
              this.$emit("close");
            }, 1000);
            console.log("login successful!");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scope>
/* 登录框整体样式 */
#wrap_login {
  position: absolute;
  width: 410px;
  left: 50%;
  top: 15%;
  margin-left: -205px;
}

@media screen and (max-width: 800px) {
  #wrap_login {
    position: absolute;
    width: 310px;
    left: 50%;
    top: 15%;
    margin-left: -155px;
  }
}

[v-cloak] {
  display: none;
}
/* 遮罩层 */
.shade {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 998;
  top: 0;
  left: 0;
  background-color: rgba(10, 10, 10, 0.479);
}

/* 登录框次级整体样式 */
.login-content {
  border-radius: 2px;
  background-color: white;
  position: relative;
  z-index: 999;
}
/* 关闭选项 */
.login-close {
  position: absolute;
  right: 10px;
  top: 10px;
}

.svg_close {
  width: 20px;
  height: 20px;
  color: #999;
}

.login-body {
  padding: 50px 25px;
}

.login-head h2 {
  text-align: center;
  color: #999;
}

.login-head span {
  color: rgb(127, 156, 238);
}

.login-form-title {
  margin-top: 40px;
  margin-bottom: 30px;
}

.login-form-title h3 {
  display: inline-block;
  font-size: 16px;
}

.login-form-title span {
  float: right;
  color: rgb(117, 117, 117);
  font-size: 14px;
}

.login-form-title a {
  color: rgb(56, 103, 231);
}

form .form-ul li {
  margin-bottom: 20px;
  position: relative;
}

.form-input {
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  border: 1px solid #dcdfe6;
  padding: 9px 15px 9px 42px;
}

.form-input::-webkit-input-placeholder {
  color: #adadad;
  font-size: 14px;
}

.form-ul li .input-icon {
  display: inline-block;
  width: 42px;
  height: 40px;
  position: absolute;
  text-align: center;
  line-height: 40px;
}

.svg_envelope,
.svg_user {
  width: 16px;
  height: 14px;
  fill: #918f8f;
}

.svg_key {
  width: 18px;
  height: 14px;
  fill: #918f8f;
}

.wrap_login_showPaswd {
  width: 42px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  position: absolute;
  right: 0px;
}

.svg_eye_slash_fill,
.svg_eye_fill {
  width: 18px;
  height: 14px;
  fill: #a7a5a5;
}

.svg_eye_slash_fill:hover,
.svg_eye_fill :hover {
  fill: #08c;
}

.login-btn {
  width: 100%;
  height: 40px;
  color: white;
  background-color: #08c;
  border: #08c;
}

.login-message {
  position: absolute;
  color: red;
  font-size: 12px;
  left: 50%;
  transform: translate(-50%, 30%);
}
/* 加载动画 */
.load-animation {
  position: absolute;
  left: 50%;
  transform: translateX(-19px);
  margin-top: 10px;
}
</style>
