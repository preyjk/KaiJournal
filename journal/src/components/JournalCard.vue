<template>
  <div>
    <!-- Icon -->
    <svg
      style="height: 0; width: 0; display: none"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- eye icon -->
      <symbol id="eye" width="12" height="12" viewBox="0 0 16 16">
        <path
          d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
        />
        <path
          d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
        />
      </symbol>
    </svg>
    <!-- card -->
    <div class="card">
      <!-- journal cover -->
      <a class="journal_img_a" @click="goJournalBuy">
        <img :src="imageInfo.url" alt="" />
      </a>
      <!-- journal des -->
      <h3 class="journal_des">
        <a class="journal_title_a" @click="goJournalBuy">{{ theme }}</a>
      </h3>
      <!-- gold and eye -->
      <div class="item-meta">
        <span class="item-meta-left">
          <span>{{ imageInfo.price }} gold</span>
        </span>
        <div class="item-meta-right">
          <span>
            <svg class="eye" aria-hidden="true">
              <use xlink:href="#eye" />
            </svg>
            {{ imageInfo.countClick }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const addClick = require("@/network/netService").addClick;
export default {
  data() {
    return {
      theme: "",
    };
  },
  props: {
    imageInfo: Object,
  },
  methods: {
    goJournalBuy() {
      // click count + 1
      addClick(this.imageInfo.journalId);
      // go journal buy page
      this.$router.push({
        path: "/journal/",
        query: {
          id: this.imageInfo.journalId,
          journalName: this.imageInfo.journalName,
        },
      });
    },
  },
  mounted() {
    let publishTime = this.imageInfo.journalPublishDate.split("-");
    let year = publishTime[0];
    let month = parseInt(publishTime[1]);
    this.theme =
      "[" +
      this.imageInfo.journalLocation +
      " version] " +
      this.imageInfo.journalName +
      " " +
      year +
      "." +
      month;
  },
};
</script>

<style scoped>
.card {
  background-color: white;
  border-radius: 6px;
  border: 1px solid rgba(239, 239, 239, 0.9);
  overflow: hidden;
}

.card:hover {
  box-shadow: 0px 8px 16px 0px rgba(34, 39, 46, 0.15);
  transform: translate(0, -5px);
  transition: all 300ms cubic-bezier(0.02, 0.01, 0.47, 1);
}
.journal_des {
  min-height: 46px;
  padding: 10px 0 0 0;
}
.journal_img_a {
  display: block;
  font-size: 0;
}

.card img {
  /* position: absolute; */
  width: 100%;
  clip: rect(0, 10px, 0px, 0px);
}

.card h3 {
  font-size: 16px;
}

.journal_title_a {
  display: block;
  width: 100%;
  text-decoration: none;
  color: #333;
  font-weight: 500;
  padding: 0 20px;
}

.item-meta {
  padding: 5px;
  color: #999;
  font-size: 12px;
}

.item-meta-right {
  float: right;
}

.eye {
  width: 12px;
  height: 12px;
  fill: #999;
}
</style>
