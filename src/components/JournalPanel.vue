<template>
  <!-- journal card area -->
  <div id="card-box">
    <journal-card
      v-for="imageInfo in imageInfos"
      :key="imageInfo.journalId"
      :image-info="imageInfo"
    ></journal-card>
    <p v-if="noResult">no result</p>
  </div>
</template>

<script>
import JournalCard from "@/components/JournalCard";
const askJournalKindInfo = require("@/network/netService").askJournalKindInfo;
export default {
  data() {
    return {
      imageInfos: [],
      noResult: false,
    };
  },
  props: {
    columnKind: Object,
  },
  methods: {},
  watch: {
    columnKind: function () {
      new Promise((reslove) => {
        askJournalKindInfo(this.columnKind, (res) => {
          reslove(res);
        });
      }).then((res) => {
        if (res === "No") {
          this.noResult = true;
        } else {
          this.imageInfos = res;
        }
      });
    },
  },
  mounted() {
    new Promise((reslove) => {
      askJournalKindInfo(this.columnKind, (res) => {
        reslove(res);
      });
    }).then((res) => {
      if (res === "No") {
        this.noResult = true;
      } else {
        this.imageInfos = res;
      }
    });
  },
  components: {
    JournalCard,
  },
};
</script>

<style scope>
/* 杂志卡片panel */
#card-box {
  width: 85%;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 0 auto;
  margin-top: 40px;
  /* justify-content: center; */
}
@media (max-width: 768px) {
  #card-box {
    grid-template-columns: 1fr;
  }
}
</style>
