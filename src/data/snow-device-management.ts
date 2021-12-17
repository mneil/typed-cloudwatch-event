/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface CancelTask {
  readonly taskId: string;
}
export interface CreateTask {
  readonly clientToken?: string;
  readonly command: Command;
  readonly description?: string;
  readonly tags?: {[key: string]: any};
  readonly targets: [];
}
export interface DescribeDevice {
  readonly managedDeviceId: string;
}
export interface DescribeDeviceEc2Instances {
  readonly instanceIds: [];
  readonly managedDeviceId: string;
}
export interface DescribeExecution {
  readonly managedDeviceId: string;
  readonly taskId: string;
}
export interface DescribeTask {
  readonly taskId: string;
}
export interface ListDeviceResources {
  readonly managedDeviceId: string;
  readonly maxResults?: number;
  readonly nextToken?: string;
  readonly type?: string;
}
export interface ListDevices {
  readonly jobId?: string;
  readonly maxResults?: number;
  readonly nextToken?: string;
}
export interface ListExecutions {
  readonly maxResults?: number;
  readonly nextToken?: string;
  readonly state?: string;
  readonly taskId: string;
}
export interface ListTagsForResource {
  readonly resourceArn: string;
}
export interface ListTasks {
  readonly maxResults?: number;
  readonly nextToken?: string;
  readonly state?: string;
}
export interface TagResource {
  readonly resourceArn: string;
  readonly tags: {[key: string]: any};
}
export interface UntagResource {
  readonly resourceArn: string;
  readonly tagKeys: [];
}



interface AccessDeniedException {
  readonly message: string;
}

interface CancelTaskInput {
  readonly taskId: string;
}

interface CancelTaskOutput {
  readonly taskId: string;
}

interface Capacity {
  readonly available: number;
  readonly name: string;
  readonly total: number;
  readonly unit: string;
  readonly used: number;
}

interface Command {
  readonly reboot: Reboot;
  readonly unlock: Unlock;
}

interface CpuOptions {
  readonly coreCount: number;
  readonly threadsPerCore: number;
}

interface CreateTaskInput {
  readonly clientToken: string;
  readonly command: Command;
  readonly description: string;
  readonly tags: {[key: string]: any};
  readonly targets: [];
}

interface CreateTaskOutput {
  readonly taskArn: string;
  readonly taskId: string;
}

interface DescribeDeviceEc2Input {
  readonly instanceIds: [];
  readonly managedDeviceId: string;
}

interface DescribeDeviceEc2Output {
  readonly instances: [];
}

interface DescribeDeviceInput {
  readonly managedDeviceId: string;
}

interface DescribeDeviceOutput {
  readonly associatedWithJob: string;
  readonly deviceCapacities: [];
  readonly deviceState: string;
  readonly deviceType: string;
  readonly lastReachedOutAt: Date;
  readonly lastUpdatedAt: Date;
  readonly managedDeviceArn: string;
  readonly managedDeviceId: string;
  readonly physicalNetworkInterfaces: [];
  readonly software: SoftwareInformation;
  readonly tags: {[key: string]: any};
}

interface DescribeExecutionInput {
  readonly managedDeviceId: string;
  readonly taskId: string;
}

interface DescribeExecutionOutput {
  readonly executionId: string;
  readonly lastUpdatedAt: Date;
  readonly managedDeviceId: string;
  readonly startedAt: Date;
  readonly state: string;
  readonly taskId: string;
}

interface DescribeTaskInput {
  readonly taskId: string;
}

interface DescribeTaskOutput {
  readonly completedAt: Date;
  readonly createdAt: Date;
  readonly description: string;
  readonly lastUpdatedAt: Date;
  readonly state: string;
  readonly tags: {[key: string]: any};
  readonly targets: [];
  readonly taskArn: string;
  readonly taskId: string;
}

interface DeviceSummary {
  readonly associatedWithJob: string;
  readonly managedDeviceArn: string;
  readonly managedDeviceId: string;
  readonly tags: {[key: string]: any};
}

interface EbsInstanceBlockDevice {
  readonly attachTime: Date;
  readonly deleteOnTermination: boolean;
  readonly status: string;
  readonly volumeId: string;
}

interface ExecutionSummary {
  readonly executionId: string;
  readonly managedDeviceId: string;
  readonly state: string;
  readonly taskId: string;
}

interface Instance {
  readonly amiLaunchIndex: number;
  readonly blockDeviceMappings: [];
  readonly cpuOptions: CpuOptions;
  readonly createdAt: Date;
  readonly imageId: string;
  readonly instanceId: string;
  readonly instanceType: string;
  readonly privateIpAddress: string;
  readonly publicIpAddress: string;
  readonly rootDeviceName: string;
  readonly securityGroups: [];
  readonly state: InstanceState;
  readonly updatedAt: Date;
}

interface InstanceBlockDeviceMapping {
  readonly deviceName: string;
  readonly ebs: EbsInstanceBlockDevice;
}

interface InstanceState {
  readonly code: number;
  readonly name: string;
}

interface InstanceSummary {
  readonly instance: Instance;
  readonly lastUpdatedAt: Date;
}

interface InternalServerException {
  readonly message: string;
}

interface ListDeviceResourcesInput {
  readonly managedDeviceId: string;
  readonly maxResults: number;
  readonly nextToken: string;
  readonly type: string;
}

interface ListDeviceResourcesOutput {
  readonly nextToken: string;
  readonly resources: [];
}

interface ListDevicesInput {
  readonly jobId: string;
  readonly maxResults: number;
  readonly nextToken: string;
}

interface ListDevicesOutput {
  readonly devices: [];
  readonly nextToken: string;
}

interface ListExecutionsInput {
  readonly maxResults: number;
  readonly nextToken: string;
  readonly state: string;
  readonly taskId: string;
}

interface ListExecutionsOutput {
  readonly executions: [];
  readonly nextToken: string;
}

interface ListTagsForResourceInput {
  readonly resourceArn: string;
}

interface ListTagsForResourceOutput {
  readonly tags: {[key: string]: any};
}

interface ListTasksInput {
  readonly maxResults: number;
  readonly nextToken: string;
  readonly state: string;
}

interface ListTasksOutput {
  readonly nextToken: string;
  readonly tasks: [];
}

interface PhysicalNetworkInterface {
  readonly defaultGateway: string;
  readonly ipAddress: string;
  readonly ipAddressAssignment: string;
  readonly macAddress: string;
  readonly netmask: string;
  readonly physicalConnectorType: string;
  readonly physicalNetworkInterfaceId: string;
}

interface Reboot {
}

interface ResourceNotFoundException {
  readonly message: string;
}

interface ResourceSummary {
  readonly arn: string;
  readonly id: string;
  readonly resourceType: string;
}

interface SecurityGroupIdentifier {
  readonly groupId: string;
  readonly groupName: string;
}

interface ServiceQuotaExceededException {
  readonly message: string;
}

interface SoftwareInformation {
  readonly installState: string;
  readonly installedVersion: string;
  readonly installingVersion: string;
}

interface TagResourceInput {
  readonly resourceArn: string;
  readonly tags: {[key: string]: any};
}

interface TaskSummary {
  readonly state: string;
  readonly tags: {[key: string]: any};
  readonly taskArn: string;
  readonly taskId: string;
}

interface ThrottlingException {
  readonly message: string;
}

interface Unlock {
}

interface UntagResourceInput {
  readonly resourceArn: string;
  readonly tagKeys: [];
}

interface ValidationException {
  readonly message: string;
}

