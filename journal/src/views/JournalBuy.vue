<template>
  <div>
    <navbar></navbar>
    <crumbs :kind="crumbKind"></crumbs>
    <div class="wrap-journal-buy">
      <div class="journal-buy-left">
        <div class="journal-buy-image">
          <img :src="coverURL" alt="" />
        </div>
      </div>
      <div class="journal-buy-right">
        <h3>
          {{ theme }}
          <collection-star class="star"></collection-star>
        </h3>
        <!-- tag -->
        <div class="tagList">
          <ul>
            <li
              v-for="(item, index) in journalTag"
              :key="index"
              @click="goKindPage(item)"
            >
              {{ item.value }}
            </li>
          </ul>
        </div>
        <div class="discount">
          <p>
            Opening discount, charge 100 to return 200, charge 100 to start
            shipping!
          </p>
        </div>
        <div class="wrap_price">
          <p class="price">download price: <span>5</span>gold</p>
          <p class="vipPrice">VIP price: <span>3</span>gold</p>
        </div>
        <div class="wrap_btn">
          <button class="btn_buy" @click="buy">Buy</button>
          <button class="btn_cart">Charge</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Nav/Navbar.vue";
import Crumbs from "@/components/Nav/Crumbs.vue";
import CollectionStar from "@/components/CollectionStar.vue";
const askJournalInfo = require("@/network/netService").askJournalInfo;

export default {
  data() {
    return {
      journalName: "",
      coverURL: "",
      theme: "",
      kindId: "",
      kind: "",
      kindName: "",
      location: "",
      language: "",
      journalTypeName: "",
      publishTime: "",
      showPay: false,
    };
  },
  computed: {
    crumbKind() {
      return {
        type: "journalKind",
        value: this.kind,
      };
    },
    journalTag() {
      let journalName = this.journalName;
      let location = this.location;
      let language = this.language;
      let publishTime = this.publishTime;
      let kindName = this.kindName;
      return [
        { value: journalName, type: "journalName" },
        { value: location, type: "location" },
        { value: language, type: "language" },
        { value: kindName, type: "journalKind" },
        { value: publishTime, type: "publishTime" },
      ];
    },
  },
  methods: {
    buy() {
      alert("please charge");
      this.$router.push("/pay");
    },
    // go category page
    goKindPage(item) {
      console.log(item.value);
      this.$router.push("/kind/" + item.type + "/" + item.value);
    },
  },
  components: { Navbar, Crumbs, CollectionStar },
  beforeMount() {
    new Promise((reslove) => {
      askJournalInfo(this.$route.query.id, (res) => {
        reslove(res);
      });
    }).then((res) => {
      this.kindName = res.kindName;
      this.publishTime = res.journalPublishDate;
      this.language = res.language;
      this.location = res.location;
      this.journalName = res.journalName;
      this.kindId = res.kindId;
      this.kind = res.kindName;
      this.coverURL = res.coverURL;
      let publishTime = res.journalPublishDate.split("-");
      let year = publishTime[0];
      let month = parseInt(publishTime[1]);
      this.theme =
        "[" +
        res.journalLocation +
        " version] " +
        res.journalName +
        " " +
        res.journalTag +
        " " +
        year +
        "." +
        month;
    });
  },
  beforeRouteEnter(to, from, next) {
    document.title = "杂志: " + to.query.journalName;
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this` 因为当守卫执行前，组件实例还没被创建
    // 可以通过传一个回调给 next来访问组件实例。在导航被确认的时候执行回调，并且把组件实例作为回调方法的参数。
    next((vm) => {
      // 通过 `vm` 访问组件实例
      // console.log(vm);
    });
  },
};
</script>

<style scoped>
/* 左半部分 */
.wrap-journal-buy .journal-buy-left {
  float: left;
  width: 40%;
}
/* 杂志封面占左半部分的百分比为50% */
.wrap-journal-buy .journal-buy-image {
  width: 55%;
  border: 1.5px solid rgb(187, 186, 186);
  margin: 0 auto;
  margin-top: 20px;
}

.wrap-journal-buy .journal-buy-image img {
  width: 100%;
}

.wrap-journal-buy .journal-buy-right {
  float: left;
  width: 60%;
}

@media screen and (max-width: 500px) {
  .wrap-journal-buy .journal-buy-left {
    float: none;
    width: 100%;
  }
  .wrap-journal-buy .journal-buy-image {
    width: 70%;
    border: 1.5px solid rgb(187, 186, 186);
    margin: 0 auto;
    margin-top: 20px;
  }
  .wrap-journal-buy .journal-buy-right {
    float: none;
    width: 100%;
    padding: 15px;
  }
}

/* 收藏星星 */
.star {
  display: inline-block;
}

.discount {
  width: 95%;
  height: 60px;
  border: dotted 1px rgb(219, 22, 22);
  line-height: 60px;
  padding-left: 30px;
  margin-top: 30px;
}
.discount p {
  font-size: 18px;
  color: red;
}
.wrap_price {
  margin-top: 30px;
}
.wrap_btn {
  margin-top: 30px;
}
.btn_buy {
  width: 160px;
  height: 45px;
  font-size: 16px;
  border: none;
  background-color: rgb(213, 14, 14);
  color: white;
}
.btn_cart {
  width: 160px;
  height: 45px;
  font-size: 16px;
  border: none;
  background-color: rgb(225, 161, 41);
  color: white;
  margin-left: 20px;
}
.price span {
  color: orange;
  font-size: 30px;
}
.vipPrice span {
  color: rgb(214, 32, 32);
  font-size: 24px;
}

/* 标签 */
.tagList {
  margin-top: 15px;
  cursor: pointer;
}

.tagList ul li {
  display: inline-block;
  border: 1px gray solid;
  color: gray;
  padding: 5px 10px;
  border-radius: 5px;
  margin-left: 10px;
}

.tagList ul li:hover {
  color: white;
  background-color: rgb(69, 69, 232);
}

.tagList ul li:first-child {
  margin-left: 0px;
}
</style>
