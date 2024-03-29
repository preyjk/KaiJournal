<template>
  <div>
    <!-- 
      **
      * 杂志系列录入
      **
     -->
    <ul>
      <!-- 杂志名称上传 -->
      <li>
        <label for="journalName">请输入杂志名称</label>
        <input type="text" id="journalName" v-model="journalName" />
      </li>
      <!-- 杂志类别 -->
      <li>
        <select v-model="journalKind">
          <option disabled value="">请选择杂志类别</option>
          <option value="1">时尚生活</option>
          <option value="2">财经管理</option>
          <option value="3">运动健康</option>
          <option value="4">电子游戏</option>
        </select>
        <span>Selected: {{ journalKind }}</span>
      </li>
      <!-- 杂志标签 -->
      <li>
        <label for="tag">请输入杂志标签名</label>
        <input type="text" id="tag" v-model="tag" />
      </li>
      <!-- 杂志类型: 年刊、月刊、半月刊、周刊 -->
      <li>
        <select v-model="journalType">
          <option disabled value="">请选择杂志类型</option>
          <option value="1">年刊</option>
          <option value="2">月刊</option>
          <option value="3">半月刊</option>
          <option value="4">周刊</option>
        </select>
        <span>Selected: {{ journalType }}</span>
      </li>
      <!-- 杂志地域 -->
      <li>
        <label for="location">请输入地域</label>
        <input type="text" id="location" v-model="location" />
      </li>
      <!-- 杂志语言 -->
      <li>
        <label for="language">请输入语言</label>
        <input type="text" id="language" v-model="language" />
      </li>
      <!-- 杂志价格 -->
      <li>
        <label for="price">请输入杂志价格</label>
        <input type="number" id="price" v-model="price" />
      </li>
      <!-- 杂志描述 -->
      <li>
        <label for="description">请输入杂志描述(120字数内)</label>
        <textarea
          name=""
          id="description"
          cols="30"
          rows="10"
          maxlength="120"
          v-model="description"
        ></textarea>
      </li>
    </ul>
    <button @click="uploadJournalSeries()">上传</button>
    <hr />
    <!--
      ** 
      * 单个杂志上传
      **
     -->
    <ul>
      <!-- 库内杂志系列搜索 -->
      <li>
        <label for="searchJournalSeries">输入杂志系列名称, 搜索杂志序号</label>
        <input
          type="text"
          id="searchJournalSeries"
          v-model="searchedJournalName"
        />
        <button @click="searchJournalSeries">搜索</button>
        <span>{{ bindJournalSeries }}</span>
        <ul v-show="isSearched" id="journalSeriesList">
          <li
            v-for="item in journalSeriesInfos"
            :key="item.collect_id"
            @click="selectJournalSeries(item)"
          >
            {{ item }}
          </li>
        </ul>
      </li>
      <!-- 库内杂志系列选择 -->
      <li>
        <label for="">请输入杂志系列的序号</label>
        <input type="number" v-model="bindCollectId" />
      </li>
      <!-- 封面图片上传 -->
      <li>
        <label for="loadFile">请选择封面图片</label>
        <input type="file" @change="read($event)" name="loadFile" />
      </li>
      <!-- 杂志url -->
      <li>
        <label>请输入杂志url</label>
        <input type="text" v-model="url" />
      </li>
      <!-- 杂志出版日期 -->
      <li>
        <label>请输入出版日期</label>
        <input type="date" v-model="publishDate" />
      </li>
    </ul>
    <button @click="upload()">上传</button>
    <p>{{ publishDate }}</p>
    <hr />
    <!-- 
      **
      --批量上传 
      **
    -->
    <ul>
      <li>
        <label>请选择封面图片</label>
        <input type="file" @change="readAll($event)" multiple />
      </li>
    </ul>
    <button @click="multiUpload()">批量上传</button>
  </div>
</template>

<script>
const uploadJournal = require("@/network/netService.js").uploadJournal;
const uploadJournalSeries =
  require("@/network/netService.js").uploadJournalSeries;
const askJournalSeries = require("@/network/netService.js").askJournalSeries;
export default {
  data() {
    return {
      journalName: "",
      journalKind: 1,
      journalType: 1,
      location: "",
      language: "",
      tag: "",
      description: "",
      searchedJournalName: "",
      journalSeriesInfos: [],
      price: 0,
      bindJournalSeries: "",
      isSearched: false,
      bindCollectId: 0,
      url: "",
      dataURL: "",
      publishDate: "",
      journalInfos: [],
      time: null,
    };
  },
  computed: {
    journalKindName() {
      if (this.journalKind == 1) {
        return "fansion";
      } else if (this.journalKind == 2) {
        return "economic";
      } else if (this.journalKind == 3) {
        return "sport";
      } else if (this.journalKind == 4) {
        return "game";
      }
    },
    journalKindNameCN() {
      if (this.journalKind == 1) {
        return "时尚生活";
      } else if (this.journalKind == 2) {
        return "财务管理";
      } else if (this.journalKind == 3) {
        return "运动健康";
      } else if (this.journalKind == 4) {
        return "电子游戏";
      }
    },
    journalTypeName() {
      if (this.journalType == 1) {
        return "年刊";
      } else if (this.journalType == 2) {
        return "月刊";
      } else if (this.journalType == 3) {
        return "半月刊";
      } else if (this.journalType == 4) {
        return "周刊";
      }
    },
    test() {
      return this.selected;
    },
  },
  methods: {
    selectJournalSeries(item) {
      this.isSearched = false;
      this.bindCollectId = item.collect_id;
      this.bindJournalSeries = item;
    },
    searchJournalSeries() {
      // // 清除还未执行的杂志系列异步请求
      // clearTimeout(this.time);
      // // 如果输入内容不为空，则等待两秒后发起一个服务器请求，请求杂志系列的信息
      // if (this.searchedJournalSeries) {
      //   this.time = setTimeout(() => {
      //     askJournalSeriesInfo(this.searchedJournalName);
      //   }, 2000);
      // }
      askJournalSeries(this.searchedJournalName, (journalSeriesInfos) => {
        console.log(journalSeriesInfos);
        this.journalSeriesInfos = journalSeriesInfos;
        this.isSearched = true;
      });
    },
    // 存储单个杂志封面
    read(event) {
      let files = event.target.files;
      let reader = new FileReader();
      if (files[0]) {
        if (/image/.test(files[0].type)) {
          new Promise((reslove, reject) => {
            reader.readAsDataURL(files[0]);
            reader.onload = function () {
              reslove(reader.result);
            };
          }).then((res) => {
            this.dataURL = res;
          });
        }
      }
    },
    // 存储一组杂志封面
    readAll(event) {
      const files = event.target.files;
      // 匹配尾缀名的正则表达式
      const reg = /\.webp/;
      for (let i = 0; i < files.length; i++) {
        let reader = new FileReader();
        if (/image/.test(files[i].type)) {
          new Promise((reslove, reject) => {
            reader.readAsDataURL(files[i]);
            reader.onload = function () {
              reslove(reader.result);
            };
          }).then((res) => {
            this.journalInfos[i] = {
              cover: res,
              journalName: files[i].name.replace(reg, ""),
            };
          });
        }
      }
    },
    // 上传杂志系列信息
    uploadJournalSeries() {
      const journalSeriesInfo = {
        journalName: this.journalName,
        journalKind: this.journalKind,
        journalType: this.journalType,
        location: this.location,
        description: this.description,
        tag: this.tag,
        language: this.language,
        price: this.price,
        journalKindName: this.journalKindName,
        journalKindNameCN: this.journalKindNameCN,
        journalTypeName: this.journalTypeName,
      };
      uploadJournalSeries(journalSeriesInfo);
    },
    // 上传杂志信息
    upload() {
      const journalInfo = {
        collectId: this.bindCollectId,
        cover: this.dataURL,
        url: this.url,
        publishDate: this.publishDate,
      };
      uploadJournal(journalInfo);
    },
    // 批量上传杂志信息
    multiUpload() {
      for (let i = 0; i < this.journalInfos.length; i++) {
        this.journalInfos[i].journalKind = this.selected2;
        uploadJournal(this.journalInfos[i]);
      }
      this.journalInfos = [];
    },
  },
};
</script>

<style scope>
ul {
  padding: 0px;
}

ul li {
  padding: 10px;
}

#journalSeriesList li {
  background-color: rgb(228, 226, 226);
}

#journalSeriesList li:hover {
  background-color: rgb(203, 197, 197);
}
</style>
