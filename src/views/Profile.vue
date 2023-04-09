<template>
  <div class="content-wrap">
    <!-- svg sprite -->
    <svg
      style="height: 0; width: 0; display: none"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <symbol width="23" height="23" id="person" viewBox="0 0 16 16">
        <path
          d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
        />
      </symbol>
      <symbol width="23" height="23" id="notify" viewBox="0 0 16 16">
        <path
          d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"
        />
      </symbol>
      <symbol width="23" height="23" id="modify" viewBox="0 0 16 16">
        <path
          d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"
        />
      </symbol>
      <symbol width="23" height="23" id="exit" viewBox="0 0 16 16">
        <path
          fill-rule="evenodd"
          d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
        />
        <path
          fill-rule="evenodd"
          d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
        />
      </symbol>
    </svg>
    <Navbar></Navbar>
    <div class="wrap-white">
      <div class="wrap">
        <!-- left -->
        <div class="left">
          <div class="simple-profile">
            <div class="face-image">
              <img src="@/assets/profile.webp" alt="" />
            </div>
            <h2>18553523055</h2>
            <p>lazy man...</p>
          </div>
          <ul class="functionList">
            <li>
              <svg class="svg-person">
                <use xlink:href="#person"></use>
              </svg>
              <span> basic profile </span>
            </li>
            <li>
              <svg class="svg-notify">
                <use xlink:href="#notify"></use>
              </svg>
              <span> system notification </span>
            </li>
            <li>
              <svg class="svg-modify">
                <use xlink:href="#modify"></use>
              </svg>
              <span> change password </span>
            </li>
            <li>
              <svg class="svg-exit">
                <use xlink:href="#exit"></use>
              </svg>
              <span> exit </span>
            </li>
          </ul>
        </div>
        <!-- right -->
        <div class="right">
          <h3>basic info</h3>
          <hr />
          <ul>
            <li>
              <label class="light">email</label>
              <div>
                <span class="email">18553523055@163.com</span>
                <a class="editEmail">edit</a>
              </div>
            </li>
            <li>
              <label class="light">nick name</label>
              <div>
                <input type="text" />
              </div>
            </li>
            <li>
              <label class="light">personal intro</label>
              <div>
                <textarea
                  name=""
                  id=""
                  maxlength="200"
                  rows="3"
                  placeholder="lazy man~"
                ></textarea>
                <p>less than 200 words</p>
              </div>
            </li>
            <li class="wrap-btn">
              <label class="light"></label>
              <button>save settings</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from "@/network/netUtils.js";
import Navbar from "@/components/Nav/Navbar.vue";

export default {
  data() {
    return {
      birth: "",
    };
  },
  components: { Navbar },
  methods: {
    // getBirth() {
    //   const config = {
    //     url: "api/profile",
    //     method: "get",
    //     headers: {
    //       authorization: "Bearer " + document.cookie,
    //     },
    //   };
    // console.log(config.headers.authorization);
    // request(config)
    //   .then((res) => {
    //     console.log(res.data);
    //     this.birth = res.data.birth;
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // },
  },
};
</script>

<style scoped>
.wrap {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  margin-top: 90px;
  flex-wrap: wrap;
  /* justify-content: center; */
  gap: 10px 30px;
  background-color: rgb(249, 249, 249);
}
.wrap-white {
  background-color: rgb(249, 249, 249);
}
.wrap :nth-child(1) {
  flex-grow: 1;
  /* flex-basis: 100px; */
}
.wrap :nth-child(2) {
  /* flex-basis: 200px; */
  flex-grow: 3;
}
/* 左半部分 */
.left {
}
/* 个人头像简介 */
.simple-profile {
  background-color: white;
  text-align: center;
  height: 249px;
}
.simple-profile .face-image {
  padding-top: 30px;
  margin-bottom: 30px;
}
.simple-profile .face-image img {
  border-radius: 100px;
  width: 78px;
  height: 78px;
}
.simple-profile h2 {
  margin-top: 10px;
  font-weight: 200;
}
.simple-profile p {
  margin-top: 5px;
  color: rgb(151, 148, 148);
}
/* 功能列表 */
.functionList {
  background-color: white;
  list-style: none;
  padding: 0;
}
.functionList li {
  display: block;
  /* text-align: center; */
  padding: 20px 30px;
  cursor: pointer;
}
.functionList li:hover {
  color: rgb(104, 162, 223);
  background-color: rgb(249, 249, 249);
}
/* 右半部分 */
.right {
  background-color: white;
}
.right h3 {
  padding: 20px 30px;
}
.right hr {
  border-color: rgba(181, 179, 179, 0.5);
}
.right ul li {
  padding: 20px 30px;
}
.light {
  color: rgb(147, 144, 144);
  width: 120px;
  display: inline-block;
}
.editEmail {
  color: rgb(88, 88, 227);
}
.right ul li:nth-child(1) div {
  display: inline-block;
}
.right ul li:nth-child(1) a {
  margin-left: 10px;
}
.right ul li:nth-child(2) div,
li:nth-child(3) div {
  width: 508px;
  display: inline-block;
}
.right ul li:nth-child(2) div input {
  width: 100%;
  line-height: 18px;
  padding: 10px 15px;
  border-radius: 4px;
  border: 1px solid rgb(160, 160, 160);
}
.right ul li:nth-child(3) {
  display: flex;
  flex-wrap: wrap;
}
.right ul li:nth-child(3) div {
  flex-grow: 0;
  width: 540px;
}
.right ul li:nth-child(3) label {
  flex-grow: 0;
}
.right ul li:nth-child(3) div textarea {
  padding: 10px 15px;
  width: 100%;
  font-size: 14px;
  color: #606266;
  border: 1px solid rgb(160, 160, 160);
  line-height: 18px;
  outline: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background: 0 0;
  border-radius: 4px;
}
.right ul li:nth-child(3) div p {
  font-size: 14px;
  color: rgb(164, 162, 162);
}
.wrap-btn button {
  color: #fff;
  background-color: rgb(88, 88, 227);
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
}
/* svg图片 */
svg {
  width: 25px;
  height: 25px;
  transform: translateY(5px);
  stroke: rgb(104, 162, 223);
  stroke-width: 0.8px;
}
/* 适配手机端 */
@media screen and (max-width: 767px) {
  .wrap {
    margin-top: 80px;
    flex-direction: column;
    align-items: center;
  }
  .left {
    width: 100%;
  }
  .right {
    width: 100%;
  }
  .right ul li:nth-child(2) div {
    width: 90%;
    display: inline-block;
  }
  .wrap-btn label {
    width: 0;
    padding: 0;
  }
}
</style>
