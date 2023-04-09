// 引入express包, 创建路由实例对象
const express = require("express");
const router = express.Router();
//引入客户端服务操作包
const cServices = require("../services/clientServices");
//引入管理端服务操作包
const mServices = require("../services/managerServices");

/**
 *
 * 客户端路由
 *
 */

// 用户注册路由
router.post("/user/sign", cServices.sign);

// 用户登录路由
router.post("/user/login", cServices.login);

// 用户登录状态查询
router.post("/user/confirmLogin", cServices.confirmLoginStatus);

// 个人Profile路由
router.get("/profile", cServices.profile);

// 用户查询分类杂志组信息
router.post("/journalkind", cServices.askJournalKindInfo);

// 用户查询单个杂志信息
router.post("/journal", cServices.askJournalInfo);

// 增加杂志点击量
router.post("/addClick", cServices.addClick);

/**
 *
 * 管理端路由
 *
 */

// 录入杂志系列
router.post("/upload/journalSeries", mServices.uploadJournalSeries);

// 查询杂志系列信息
router.post("/ask/journalSeries", mServices.askJournalSeries);

// 录入杂志资源
router.post("/upload/journal", mServices.uploadJournal);

module.exports = router;
