"use strict";
exports.__esModule = true;
var status = 'Unhealthy';
var ClusterStatusEnum;
(function (ClusterStatusEnum) {
    ClusterStatusEnum["removed"] = "Removed";
    ClusterStatusEnum["unhealthy"] = "Unhealthy";
    ClusterStatusEnum["healthy"] = "Healthy";
    ClusterStatusEnum["disconnected"] = "Disconnected";
})(ClusterStatusEnum = exports.ClusterStatusEnum || (exports.ClusterStatusEnum = {}));
var clusters = [ClusterStatusEnum.removed, ClusterStatusEnum.unhealthy];
var dog = { height: 100, weight: 100 };
