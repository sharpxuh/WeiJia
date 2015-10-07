/*
Navicat MySQL Data Transfer

Source Server         : weijia
Source Server Version : 50537
Source Host           : 127.0.0.1:3306
Source Database       : weijia

Target Server Type    : MYSQL
Target Server Version : 50537
File Encoding         : 65001

Date: 2015-10-08 01:06:03
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for agents
-- ----------------------------
DROP TABLE IF EXISTS `agents`;
CREATE TABLE `agents` (
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
-- Records of agents
-- ----------------------------
INSERT INTO `agents` VALUES ('24b984d1-9763-4d37-9f31-988925e8035a', 'xue', '1', '1', 'this is desc', '187263347', '85637182');
INSERT INTO `agents` VALUES ('33b1795c-98d5-49d8-8d7f-d11012ff9a92', 'hanxue', '1', '1', 'this is desc!!!', '158605567', '66056888');

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
INSERT INTO `house` VALUES ('090d1fd1-0e6d-4df4-98a2-5b3a5c39909', '1', '1', '1', '2', '3500', '橄榄湾3房', '1', '10', '90', null, '0', '2010', '实惠3房', '橄榄湾', null, '园区', '33b1795c-98d5-49d8-8d7f-d11012ff9a92', '2015-10-07 23:39:36', '1444229748859.jpg');
INSERT INTO `house` VALUES ('8578dc63-c361-4212-b70c-fa407578daf9', '1', '1', '1', '2', '3500', '测试', '2', '11', '90', null, '0', '2009', '么么么么', '橄榄湾', null, '相城', '33b1795c-98d5-49d8-8d7f-d11012ff9a92', '2015-10-07 22:55:01', '1444229701168.jpg');

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
  `status` varchar(1) DEFAULT NULL,
  `createtime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`guid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order
-- ----------------------------
INSERT INTO `order` VALUES ('09e7bb17-fbf7-49fc-8668-366799b0c95b', '0', '0', '4', '4444', '4444', '0', '44', '44', '1444219691291.jpg;1444219691475.jpg', '444', '1', '2015-10-07 22:22:25');
INSERT INTO `order` VALUES ('124b1c8b-5178-498d-9213-8264c16aab4a', '1', '1', 'rr', 'rr', '444', '1', '3', '45', '5555555', 'rrr', '1', '2015-10-07 22:22:34');
INSERT INTO `order` VALUES ('36ea582d-c3eb-49c4-99e7-1d493f5eaaf5', '0', '0', 'dr', '3333', 'sdd', '0', '', '', '', '', '1', '2015-10-07 22:22:41');
INSERT INTO `order` VALUES ('4334a722-5027-4b8e-8b3d-e45ef0690358', '1', '0', '', '', '', '0', '', '', '1444237269277.jpg', '', '1', '2015-10-08 01:01:09');
INSERT INTO `order` VALUES ('6e22fc6e-a678-4f33-82ef-215160a0e1f2', '0', '1', 'to', '11', null, '1', null, null, '', '12', '1', '2015-10-07 22:29:06');
INSERT INTO `order` VALUES ('7d75b486-ae95-4c0d-a486-1b6bb3cdde15', '0', '1', '', '', null, null, null, null, '', '', '0', '2015-10-08 01:04:53');
INSERT INTO `order` VALUES ('8134f89f-1e68-479c-acb1-312787f4559c', '1', '0', '', '', '', '0', '', '', '1444222980664.jpg;1444222980441.jpg', '', '1', '2015-10-07 22:45:03');
INSERT INTO `order` VALUES ('a78b91c0-e96f-453d-9845-c619393017bf', '1', '0', null, null, null, null, null, null, null, null, '0', '2015-10-08 01:04:40');
INSERT INTO `order` VALUES ('ae0b2a39-fd11-4060-9cb7-c06ee1febe51', '1', '1', '1111', '11', null, null, null, null, '', '11', '1', '2015-10-08 01:00:48');
INSERT INTO `order` VALUES ('dff66d0e-eccc-47c8-8e58-4c5c5771be44', null, null, null, null, null, null, null, null, null, null, '1', '2015-10-08 00:38:32');
INSERT INTO `order` VALUES ('eb822fd0-a06f-4ced-ba12-079a0273de8f', '0', '1', 'tom', '11111', null, '1', null, null, '', '11111', '1', '2015-10-07 22:29:08');

-- ----------------------------
-- Table structure for recruit
-- ----------------------------
DROP TABLE IF EXISTS `recruit`;
CREATE TABLE `recruit` (
  `guid` char(36) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT '',
  `duty` varchar(400) DEFAULT NULL,
  `require` varchar(400) DEFAULT NULL,
  `number` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`guid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of recruit
-- ----------------------------
INSERT INTO `recruit` VALUES ('8578dc63-c361-4212-b70c-fa407578dafa', '1111111111111111112', '1111111111133', '12');

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
