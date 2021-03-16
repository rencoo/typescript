// 仅编译时存在, 编译完没有了
export type Status = 'Unhealthy' | 'Disconnected';
const status: Status = 'Unhealthy';

// 仅编译时存在, 编译完没有了
export interface Animal {
  height: number;
  weight: number;
}
const dog: Animal = { height: 100, weight: 100 };

// 编译完以对象的方式存在
export enum ClusterStatusEnum {
  removed = 'Removed',
  unhealthy = 'Unhealthy',
  healthy = 'Healthy',
  disconnected = 'Disconnected'
}
const clusters = [ ClusterStatusEnum.removed, ClusterStatusEnum.unhealthy ];

