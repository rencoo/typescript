"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterStatusEnum = void 0;
var status = 'Unhealthy';
var dog = { height: 100, weight: 100 };
// 编译完以对象的方式存在
var ClusterStatusEnum;
(function (ClusterStatusEnum) {
    ClusterStatusEnum["removed"] = "Removed";
    ClusterStatusEnum["unhealthy"] = "Unhealthy";
    ClusterStatusEnum["healthy"] = "Healthy";
    ClusterStatusEnum["disconnected"] = "Disconnected";
})(ClusterStatusEnum = exports.ClusterStatusEnum || (exports.ClusterStatusEnum = {}));
var clusters = [ClusterStatusEnum.removed, ClusterStatusEnum.unhealthy];
