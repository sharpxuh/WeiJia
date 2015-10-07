/*
Navicat MySQL Data Transfer

Source Server         : weijia
Source Server Version : 50537
Source Host           : 127.0.0.1:3306
Source Database       : weijia

Target Server Type    : MYSQL
Target Server Version : 50537
File Encoding         : 65001

Date: 2015-10-07 20:27:59
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for agent
-- ----------------------------
DROP TABLE IF EXISTS `agent`;
CREATE TABLE `agent` (
  `guid` varchar(50) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `sex` varchar(2) DEFAULT NULL,
  `status` varchar(2) DEFAULT NULL,
  `desc` varchar(200) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `tel` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`guid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of agent
-- ----------------------------
INSERT INTO `agent` VALUES ('24b984d1-9763-4d37-9f31-988925e8035a', 'xue ', '0', '1', 'this is desc', '187263347', '85637182');
INSERT INTO `agent` VALUES ('33b1795c-98d5-49d8-8d7f-d11012ff9a92', 'hanxue', '1', '1', 'this is desc!!!', '158605567', '66056888');

-- ----------------------------
-- Table structure for house
-- ----------------------------
DROP TABLE IF EXISTS `house`;
CREATE TABLE `house` (
  `guid` char(36) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT '',
  `isRent` varchar(1) DEFAULT NULL,
  `isIn` varchar(1) DEFAULT NULL,
  `status` varchar(1) DEFAULT NULL,
  `fitment` varchar(10) DEFAULT NULL,
  `price` varchar(20) DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `type` varchar(10) DEFAULT NULL,
  `floor` varchar(10) DEFAULT NULL,
  `area` varchar(20) DEFAULT NULL,
  `startdate` varchar(50) DEFAULT NULL,
  `forward` varchar(10) DEFAULT NULL,
  `createyear` varchar(10) DEFAULT NULL,
  `desc` varchar(512) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `hascarport` varchar(1) DEFAULT NULL,
  `region` varchar(100) DEFAULT NULL,
  `agentid` char(36) DEFAULT NULL,
  `createtime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `photourl` varchar(400) DEFAULT '',
  PRIMARY KEY (`guid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of house
-- ----------------------------
INSERT INTO `house` VALUES ('090d1fd1-0e6d-4df4-98a2-5b3a5c39909d', '1', '1', '1', '2', '3500', '橄榄湾3房', '1', '10', '90', null, '0', '2010', '实惠3房', '橄榄湾', null, '园区', '33b1795c-98d5-49d8-8d7f-d11012ff9a92', '2015-10-07 20:18:54', '1444220333813.jpg;1444220334011.jpg');
INSERT INTO `house` VALUES ('8578dc63-c361-4212-b70c-fa407578daf9', '1', '1', '1', '2', '3500', '测试', '2', '11', '90', null, '0', '2009', '么么么么', '橄榄湾', null, '相城', '33b1795c-98d5-49d8-8d7f-d11012ff9a92', '2015-10-07 20:18:43', '1444220323033.jpg;1444220323347.jpg');

-- ----------------------------
-- Table structure for order
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `guid` char(36) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT '',
  `isrent` varchar(1) DEFAULT NULL,
  `isin` varchar(1) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `tel` varchar(50) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `type` varchar(2) DEFAULT NULL,
  `floor` varchar(10) DEFAULT NULL,
  `area` varchar(10) DEFAULT NULL,
  `photourl` varchar(400) DEFAULT NULL,
  `desc` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`guid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order
-- ----------------------------
INSERT INTO `order` VALUES ('09e7bb17-fbf7-49fc-8668-366799b0c95b', '0', '0', '', '', '', '0', '', '', '1444219691291.jpg;1444219691475.jpg', '');
INSERT INTO `order` VALUES ('124b1c8b-5178-498d-9213-8264c16aab4a', '1', '1', 'rr', 'rr', null, null, null, null, '', 'rrr');
INSERT INTO `order` VALUES ('36ea582d-c3eb-49c4-99e7-1d493f5eaaf5', '0', '0', '', '', '', '0', '', '', '', '');
INSERT INTO `order` VALUES ('8134f89f-1e68-479c-acb1-312787f4559c', '1', '0', '', '', '', '0', '', '', '', '');
INSERT INTO `order` VALUES ('eb822fd0-a06f-4ced-ba12-079a0273de8f', '0', '1', 'tom', '11111', null, null, null, null, '', '11111');

-- ----------------------------
-- Table structure for typelist
-- ----------------------------
DROP TABLE IF EXISTS `typelist`;
CREATE TABLE `typelist` (
  `typeid` varchar(2) NOT NULL DEFAULT '',
  `label` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`typeid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of typelist
-- ----------------------------
INSERT INTO `typelist` VALUES ('0', '一室一厅一卫');
INSERT INTO `typelist` VALUES ('1', '两室一厅一卫');
INSERT INTO `typelist` VALUES ('2', '三室一厅一卫');
INSERT INTO `typelist` VALUES ('3', '四室一厅一卫');
INSERT INTO `typelist` VALUES ('4', '两室两厅一卫');
INSERT INTO `typelist` VALUES ('5', '两室两厅两卫');
INSERT INTO `typelist` VALUES ('6', '三室两厅一卫');
INSERT INTO `typelist` VALUES ('7', '三室两厅两卫');
INSERT INTO `typelist` VALUES ('8', '四室两厅一卫');
INSERT INTO `typelist` VALUES ('9', '四室两厅两卫');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `guid` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT '',
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `status` varchar(1) DEFAULT NULL,
  `role` varchar(10) DEFAULT NULL,
  `desc` varchar(200) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`guid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('47649443-5389-45b6-9c3b-ac5873802f80', 'tom', '111111', '1', '1', '222222', 'hao');
INSERT INTO `user` VALUES ('47649443-5389-45b6-9c3b-ac5873802f81', 'jack', '111111', '0', '0', '222111', 'jay');
INSERT INTO `user` VALUES ('784b8efa-4f92-4772-b99c-f3a5a9c4fd65', null, null, '1', null, 'miaosu ', 'xue');
INSERT INTO `user` VALUES ('9a5bc21b-4a5c-476a-86ae-841185f49d5c', 'jimmy', '111111', '1', '0', '4444444', 'jj');
INSERT INTO `user` VALUES ('d5c3eafe-3e44-45aa-a64b-6850d5a7ef7e', 'jack', '111111', '1', '1', '2222', 'jee');
