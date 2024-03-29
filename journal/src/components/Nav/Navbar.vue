<template>
  <!-- Navbar -->
  <header>
    <nav class="navbar navbar-default" id="navbar">
      <div class="container-fluid" id="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header" id="navbar-header-space">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" id="navbar-brand" @click="backHome"
            ><span class="brand_front_part">Kai</span>Journal</a
          >
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav" id="navbar-nav">
            <li :class="{ active: $route.name === 'home' }">
              <a @click="backHome"
                >Home <span class="sr-only">(current)</span></a
              >
            </li>
            <li class="dropdown">
              <a
                href="#"
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                >Category <span class="caret"></span
              ></a>
              <ul class="dropdown-menu">
                <li @click="goKindPage('fansion')"><a>fansion</a></li>
                <li @click="goKindPage('economic')">
                  <a>economic</a>
                </li>
                <li @click="goKindPage('sport')"><a>sport</a></li>
                <li @click="goKindPage('game')"><a>game</a></li>
              </ul>
            </li>
            <li>
              <a class="btn-help" target="_blank" @click="goHelp"> Help </a>
            </li>
          </ul>
          <ul class="navbar-right" id="log" v-if="!isLogined">
            <li>
              <a class="a_log" href="#" @click="isLogin = true">sign in</a>
            </li>
            <li>
              <a class="a_log" href="#" @click="isSign = true">sign up</a>
            </li>
          </ul>
          <!-- profile img -->
          <div class="dropdown" id="profile-list" v-else-if="isLogined">
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              ><span class="profile-image-wrap"
                ><img src="@/assets/profile.webp" /></span
              >Jack <span class="caret"></span
            ></a>
            <!-- droplist -->
            <ul class="dropdown-menu">
              <li><a href="#" @click="goProfile">profile</a></li>
              <li><a href="#" @click="goOrder">order</a></li>
              <li><a href="#" @click="exitLogin">exit</a></li>
            </ul>
          </div>
        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-fluid -->
    </nav>
    <!-- sign up window -->
    <sign
      @close="isSign = false"
      v-if="isSign"
      @toggleLogin="(isSign = false), (isLogin = true)"
    ></sign>
    <!-- sign in window -->
    <login
      @close="isLogin = false"
      v-if="isLogin"
      @toggleRegister="(isLogin = false), (isSign = true)"
    ></login>
  </header>
</template>

<script>
import Login from "@/components/LoginSignDialog/Login.vue";
import Sign from "@/components/LoginSignDialog/Register.vue";
import request from "@/network/netUtils.js";
import cookie from "@/store/myCookie.js";

export default {
  data() {
    return {
      isSign: false,
      isLogin: false,
    };
  },
  components: { Login, Sign },
  methods: {
    goHelp() {
      window.open("/help");
    },
    backHome() {
      if (this.$route.path != "/") {
        this.$router.push("/");
      }
    },
    // go profile page
    goProfile() {
      window.open("/profile");
    },
    // go order page
    goOrder() {
      window.open("/Order");
    },
    // go category page
    goKindPage(kind) {
      this.$router.push("/kind/journalKind/" + kind);
    },
    // exit sign in，remove cookie
    exitLogin() {
      this.$store.commit("setLoginStatus", false);
      cookie.removeCookie("token", "/");
    },
  },
  computed: {
    isLogined() {
      // console.log("VueX中的登录状态记录:" + this.$store.state.loginStatus);
      return this.$store.state.loginStatus;
    },
  },
  // 组件渲染前，判断是否登录
  beforeMount: function () {
    const config = {
      url: "/api/user/confirmLogin",
      method: "post",
      headers: {
        authorization: "Bearer " + cookie.getKey("token"),
      },
    };
    request(config)
      .then((res) => {
        if (res.data === "isLoginedOK") {
          this.$store.commit("setLoginStatus", true);
          console.log("登录状态ok");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scope>
/* 导航栏 */
#navbar {
  margin: 0;
  width: 100%;
  z-index: 2;
  position: fixed;
  top: 0;
  background-color: white;
}

#container-fluid {
  padding-left: 120px;
  padding-right: 120px;
  font-size: 16px;
}

#navbar-header-space {
  margin-right: 40px;
}

#navbar-brand {
  font-size: 25px;
}

.brand_front_part {
  color: #0088cc;
}

@media (max-width: 768px) {
  #container-fluid {
    padding-left: 20px;
    padding-right: 0px;
  }
  #navbar-header-space {
    margin-right: 0px;
  }
}

/* #navbar-nav li a {
  height: 64px;
  line-height: 32px;
} */

#log li a {
  color: #0088cc;
  border: solid 1px #0088cc;
  border-radius: 5px;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 14px;
}

#log li a:hover,
#log li a:visited,
#log li a:link,
#log li a:active {
  text-decoration: none;
}

#wrap {
  background-color: #e3e3e3;
}

#log li {
  display: inline-block;
}

.navbar-right {
  /* 登录注册容器 */
  padding-top: 10px;
}

.navbar-right li:first-child {
  margin-right: 15px;
}

.btn-help {
  cursor: pointer;
}

/* profile项 */
#profile-list {
  float: right;
  line-height: 50px;
}
#profile-list a {
  text-decoration: none;
  color: gray;
}

.profile-image-wrap {
  padding: 10px;
}

.profile-image-wrap img {
  width: 26px;
  height: 26px;
  border-radius: 100px;
}
</style>
