/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface CreateReplicationConfigurationTemplate {
  readonly associateDefaultSecurityGroup: boolean;
  readonly bandwidthThrottling: number;
  readonly createPublicIP: boolean;
  readonly dataPlaneRouting: string;
  readonly defaultLargeStagingDiskType: string;
  readonly ebsEncryption: string;
  readonly ebsEncryptionKeyArn?: string;
  readonly pitPolicy: [];
  readonly replicationServerInstanceType: string;
  readonly replicationServersSecurityGroupsIDs: [];
  readonly stagingAreaSubnetId: string;
  readonly stagingAreaTags: {[key: string]: any};
  readonly tags?: {[key: string]: any};
  readonly useDedicatedReplicationServer: boolean;
}
export interface DeleteJob {
  readonly jobID: string;
}
export interface DeleteRecoveryInstance {
  readonly recoveryInstanceID: string;
}
export interface DeleteReplicationConfigurationTemplate {
  readonly replicationConfigurationTemplateID: string;
}
export interface DeleteSourceServer {
  readonly sourceServerID: string;
}
export interface DescribeJobLogItems {
  readonly jobID: string;
  readonly maxResults?: number;
  readonly nextToken?: string;
}
export interface DescribeJobs {
  readonly filters: DescribeJobsRequestFilters;
  readonly maxResults?: number;
  readonly nextToken?: string;
}
export interface DescribeRecoveryInstances {
  readonly filters: DescribeRecoveryInstancesRequestFilters;
  readonly maxResults?: number;
  readonly nextToken?: string;
}
export interface DescribeRecoverySnapshots {
  readonly filters?: DescribeRecoverySnapshotsRequestFilters;
  readonly maxResults?: number;
  readonly nextToken?: string;
  readonly order?: string;
  readonly sourceServerID: string;
}
export interface DescribeReplicationConfigurationTemplates {
  readonly maxResults?: number;
  readonly nextToken?: string;
  readonly replicationConfigurationTemplateIDs: [];
}
export interface DescribeSourceServers {
  readonly filters: DescribeSourceServersRequestFilters;
  readonly maxResults?: number;
  readonly nextToken?: string;
}
export interface DisconnectRecoveryInstance {
  readonly recoveryInstanceID: string;
}
export interface DisconnectSourceServer {
  readonly sourceServerID: string;
}
export interface GetFailbackReplicationConfiguration {
  readonly recoveryInstanceID: string;
}
export interface GetLaunchConfiguration {
  readonly sourceServerID: string;
}
export interface GetReplicationConfiguration {
  readonly sourceServerID: string;
}
export interface InitializeService {
}
export interface ListTagsForResource {
  readonly resourceArn: string;
}
export interface RetryDataReplication {
  readonly sourceServerID: string;
}
export interface StartFailbackLaunch {
  readonly recoveryInstanceIDs: [];
  readonly tags?: {[key: string]: any};
}
export interface StartRecovery {
  readonly isDrill?: boolean;
  readonly sourceServers: [];
  readonly tags?: {[key: string]: any};
}
export interface StopFailback {
  readonly recoveryInstanceID: string;
}
export interface TagResource {
  readonly resourceArn: string;
  readonly tags: {[key: string]: any};
}
export interface TerminateRecoveryInstances {
  readonly recoveryInstanceIDs: [];
}
export interface UntagResource {
  readonly resourceArn: string;
  readonly tagKeys: [];
}
export interface UpdateFailbackReplicationConfiguration {
  readonly bandwidthThrottling?: number;
  readonly name?: string;
  readonly recoveryInstanceID: string;
  readonly usePrivateIP?: boolean;
}
export interface UpdateLaunchConfiguration {
  readonly copyPrivateIp?: boolean;
  readonly copyTags?: boolean;
  readonly launchDisposition?: string;
  readonly licensing?: Licensing;
  readonly name?: string;
  readonly sourceServerID: string;
  readonly targetInstanceTypeRightSizingMethod?: string;
}
export interface UpdateReplicationConfiguration {
  readonly associateDefaultSecurityGroup?: boolean;
  readonly bandwidthThrottling?: number;
  readonly createPublicIP?: boolean;
  readonly dataPlaneRouting?: string;
  readonly defaultLargeStagingDiskType?: string;
  readonly ebsEncryption?: string;
  readonly ebsEncryptionKeyArn?: string;
  readonly name?: string;
  readonly pitPolicy?: [];
  readonly replicatedDisks?: [];
  readonly replicationServerInstanceType?: string;
  readonly replicationServersSecurityGroupsIDs?: [];
  readonly sourceServerID: string;
  readonly stagingAreaSubnetId?: string;
  readonly stagingAreaTags?: {[key: string]: any};
  readonly useDedicatedReplicationServer?: boolean;
}
export interface UpdateReplicationConfigurationTemplate {
  readonly arn?: string;
  readonly associateDefaultSecurityGroup?: boolean;
  readonly bandwidthThrottling?: number;
  readonly createPublicIP?: boolean;
  readonly dataPlaneRouting?: string;
  readonly defaultLargeStagingDiskType?: string;
  readonly ebsEncryption?: string;
  readonly ebsEncryptionKeyArn?: string;
  readonly pitPolicy?: [];
  readonly replicationConfigurationTemplateID: string;
  readonly replicationServerInstanceType?: string;
  readonly replicationServersSecurityGroupsIDs?: [];
  readonly stagingAreaSubnetId?: string;
  readonly stagingAreaTags?: {[key: string]: any};
  readonly useDedicatedReplicationServer?: boolean;
}



interface AccessDeniedException {
  readonly code: string;
  readonly message: string;
}

interface CPU {
  readonly cores: number;
  readonly modelName: string;
}

interface ConflictException {
  readonly code: string;
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}

interface CreateReplicationConfigurationTemplateRequest {
  readonly associateDefaultSecurityGroup: boolean;
  readonly bandwidthThrottling: number;
  readonly createPublicIP: boolean;
  readonly dataPlaneRouting: string;
  readonly defaultLargeStagingDiskType: string;
  readonly ebsEncryption: string;
  readonly ebsEncryptionKeyArn: string;
  readonly pitPolicy: [];
  readonly replicationServerInstanceType: string;
  readonly replicationServersSecurityGroupsIDs: [];
  readonly stagingAreaSubnetId: string;
  readonly stagingAreaTags: {[key: string]: any};
  readonly tags: {[key: string]: any};
  readonly useDedicatedReplicationServer: boolean;
}

interface DataReplicationError {
  readonly error: string;
  readonly rawError: string;
}

interface DataReplicationInfo {
  readonly dataReplicationError: DataReplicationError;
  readonly dataReplicationInitiation: DataReplicationInitiation;
  readonly dataReplicationState: string;
  readonly etaDateTime: string;
  readonly lagDuration: string;
  readonly replicatedDisks: [];
}

interface DataReplicationInfoReplicatedDisk {
  readonly backloggedStorageBytes: number;
  readonly deviceName: string;
  readonly replicatedStorageBytes: number;
  readonly rescannedStorageBytes: number;
  readonly totalStorageBytes: number;
}

interface DataReplicationInitiation {
  readonly nextAttemptDateTime: string;
  readonly startDateTime: string;
  readonly steps: [];
}

interface DataReplicationInitiationStep {
  readonly name: string;
  readonly status: string;
}

interface DeleteJobRequest {
  readonly jobID: string;
}

interface DeleteJobResponse {
}

interface DeleteRecoveryInstanceRequest {
  readonly recoveryInstanceID: string;
}

interface DeleteReplicationConfigurationTemplateRequest {
  readonly replicationConfigurationTemplateID: string;
}

interface DeleteReplicationConfigurationTemplateResponse {
}

interface DeleteSourceServerRequest {
  readonly sourceServerID: string;
}

interface DeleteSourceServerResponse {
}

interface DescribeJobLogItemsRequest {
  readonly jobID: string;
  readonly maxResults: number;
  readonly nextToken: string;
}

interface DescribeJobLogItemsResponse {
  readonly items: [];
  readonly nextToken: string;
}

interface DescribeJobsRequest {
  readonly filters: DescribeJobsRequestFilters;
  readonly maxResults: number;
  readonly nextToken: string;
}

interface DescribeJobsRequestFilters {
  readonly fromDate: string;
  readonly jobIDs: [];
  readonly toDate: string;
}

interface DescribeJobsResponse {
  readonly items: [];
  readonly nextToken: string;
}

interface DescribeRecoveryInstancesRequest {
  readonly filters: DescribeRecoveryInstancesRequestFilters;
  readonly maxResults: number;
  readonly nextToken: string;
}

interface DescribeRecoveryInstancesRequestFilters {
  readonly recoveryInstanceIDs: [];
  readonly sourceServerIDs: [];
}

interface DescribeRecoveryInstancesResponse {
  readonly items: [];
  readonly nextToken: string;
}

interface DescribeRecoverySnapshotsRequest {
  readonly filters: DescribeRecoverySnapshotsRequestFilters;
  readonly maxResults: number;
  readonly nextToken: string;
  readonly order: string;
  readonly sourceServerID: string;
}

interface DescribeRecoverySnapshotsRequestFilters {
  readonly fromDateTime: string;
  readonly toDateTime: string;
}

interface DescribeRecoverySnapshotsResponse {
  readonly items: [];
  readonly nextToken: string;
}

interface DescribeReplicationConfigurationTemplatesRequest {
  readonly maxResults: number;
  readonly nextToken: string;
  readonly replicationConfigurationTemplateIDs: [];
}

interface DescribeReplicationConfigurationTemplatesResponse {
  readonly items: [];
  readonly nextToken: string;
}

interface DescribeSourceServersRequest {
  readonly filters: DescribeSourceServersRequestFilters;
  readonly maxResults: number;
  readonly nextToken: string;
}

interface DescribeSourceServersRequestFilters {
  readonly hardwareId: string;
  readonly sourceServerIDs: [];
}

interface DescribeSourceServersResponse {
  readonly items: [];
  readonly nextToken: string;
}

interface DisconnectRecoveryInstanceRequest {
  readonly recoveryInstanceID: string;
}

interface DisconnectSourceServerRequest {
  readonly sourceServerID: string;
}

interface Disk {
  readonly bytes: number;
  readonly deviceName: string;
}

interface GetFailbackReplicationConfigurationRequest {
  readonly recoveryInstanceID: string;
}

interface GetFailbackReplicationConfigurationResponse {
  readonly bandwidthThrottling: number;
  readonly name: string;
  readonly recoveryInstanceID: string;
  readonly usePrivateIP: boolean;
}

interface GetLaunchConfigurationRequest {
  readonly sourceServerID: string;
}

interface GetReplicationConfigurationRequest {
  readonly sourceServerID: string;
}

interface IdentificationHints {
  readonly awsInstanceID: string;
  readonly fqdn: string;
  readonly hostname: string;
  readonly vmWareUuid: string;
}

interface InitializeServiceRequest {
}

interface InitializeServiceResponse {
}

interface InternalServerException {
  readonly message: string;
  readonly retryAfterSeconds: number;
}

interface Job {
  readonly arn: string;
  readonly creationDateTime: string;
  readonly endDateTime: string;
  readonly initiatedBy: string;
  readonly jobID: string;
  readonly participatingServers: [];
  readonly status: string;
  readonly tags: {[key: string]: any};
  readonly type: string;
}

interface JobLog {
  readonly event: string;
  readonly eventData: JobLogEventData;
  readonly logDateTime: string;
}

interface JobLogEventData {
  readonly conversionServerID: string;
  readonly rawError: string;
  readonly sourceServerID: string;
  readonly targetInstanceID: string;
}

interface LaunchConfiguration {
  readonly copyPrivateIp: boolean;
  readonly copyTags: boolean;
  readonly ec2LaunchTemplateID: string;
  readonly launchDisposition: string;
  readonly licensing: Licensing;
  readonly name: string;
  readonly sourceServerID: string;
  readonly targetInstanceTypeRightSizingMethod: string;
}

interface Licensing {
  readonly osByol: boolean;
}

interface LifeCycle {
  readonly addedToServiceDateTime: string;
  readonly elapsedReplicationDuration: string;
  readonly firstByteDateTime: string;
  readonly lastLaunch: LifeCycleLastLaunch;
  readonly lastSeenByServiceDateTime: string;
}

interface LifeCycleLastLaunch {
  readonly initiated: LifeCycleLastLaunchInitiated;
}

interface LifeCycleLastLaunchInitiated {
  readonly apiCallDateTime: string;
  readonly jobID: string;
  readonly type: string;
}

interface ListTagsForResourceRequest {
  readonly resourceArn: string;
}

interface ListTagsForResourceResponse {
  readonly tags: {[key: string]: any};
}

interface NetworkInterface {
  readonly ips: [];
  readonly isPrimary: boolean;
  readonly macAddress: string;
}

interface OS {
  readonly fullString: string;
}

interface PITPolicyRule {
  readonly enabled: boolean;
  readonly interval: number;
  readonly retentionDuration: number;
  readonly ruleID: number;
  readonly units: string;
}

interface ParticipatingServer {
  readonly launchStatus: string;
  readonly recoveryInstanceID: string;
  readonly sourceServerID: string;
}

interface RecoveryInstance {
  readonly arn: string;
  readonly dataReplicationInfo: RecoveryInstanceDataReplicationInfo;
  readonly ec2InstanceID: string;
  readonly ec2InstanceState: string;
  readonly failback: RecoveryInstanceFailback;
  readonly isDrill: boolean;
  readonly jobID: string;
  readonly pointInTimeSnapshotDateTime: string;
  readonly recoveryInstanceID: string;
  readonly recoveryInstanceProperties: RecoveryInstanceProperties;
  readonly sourceServerID: string;
  readonly tags: {[key: string]: any};
}

interface RecoveryInstanceDataReplicationError {
  readonly error: string;
  readonly rawError: string;
}

interface RecoveryInstanceDataReplicationInfo {
  readonly dataReplicationError: RecoveryInstanceDataReplicationError;
  readonly dataReplicationInitiation: RecoveryInstanceDataReplicationInitiation;
  readonly dataReplicationState: string;
  readonly etaDateTime: string;
  readonly lagDuration: string;
  readonly replicatedDisks: [];
}

interface RecoveryInstanceDataReplicationInfoReplicatedDisk {
  readonly backloggedStorageBytes: number;
  readonly deviceName: string;
  readonly replicatedStorageBytes: number;
  readonly rescannedStorageBytes: number;
  readonly totalStorageBytes: number;
}

interface RecoveryInstanceDataReplicationInitiation {
  readonly startDateTime: string;
  readonly steps: [];
}

interface RecoveryInstanceDataReplicationInitiationStep {
  readonly name: string;
  readonly status: string;
}

interface RecoveryInstanceDisk {
  readonly bytes: number;
  readonly ebsVolumeID: string;
  readonly internalDeviceName: string;
}

interface RecoveryInstanceFailback {
  readonly agentLastSeenByServiceDateTime: string;
  readonly elapsedReplicationDuration: string;
  readonly failbackClientID: string;
  readonly failbackClientLastSeenByServiceDateTime: string;
  readonly failbackInitiationTime: string;
  readonly failbackJobID: string;
  readonly failbackToOriginalServer: boolean;
  readonly firstByteDateTime: string;
  readonly state: string;
}

interface RecoveryInstanceProperties {
  readonly cpus: [];
  readonly disks: [];
  readonly identificationHints: IdentificationHints;
  readonly lastUpdatedDateTime: string;
  readonly networkInterfaces: [];
  readonly os: OS;
  readonly ramBytes: number;
}

interface RecoverySnapshot {
  readonly ebsSnapshots: [];
  readonly expectedTimestamp: string;
  readonly snapshotID: string;
  readonly sourceServerID: string;
  readonly timestamp: string;
}

interface ReplicationConfiguration {
  readonly associateDefaultSecurityGroup: boolean;
  readonly bandwidthThrottling: number;
  readonly createPublicIP: boolean;
  readonly dataPlaneRouting: string;
  readonly defaultLargeStagingDiskType: string;
  readonly ebsEncryption: string;
  readonly ebsEncryptionKeyArn: string;
  readonly name: string;
  readonly pitPolicy: [];
  readonly replicatedDisks: [];
  readonly replicationServerInstanceType: string;
  readonly replicationServersSecurityGroupsIDs: [];
  readonly sourceServerID: string;
  readonly stagingAreaSubnetId: string;
  readonly stagingAreaTags: {[key: string]: any};
  readonly useDedicatedReplicationServer: boolean;
}

interface ReplicationConfigurationReplicatedDisk {
  readonly deviceName: string;
  readonly iops: number;
  readonly isBootDisk: boolean;
  readonly stagingDiskType: string;
  readonly throughput: number;
}

interface ReplicationConfigurationTemplate {
  readonly arn: string;
  readonly associateDefaultSecurityGroup: boolean;
  readonly bandwidthThrottling: number;
  readonly createPublicIP: boolean;
  readonly dataPlaneRouting: string;
  readonly defaultLargeStagingDiskType: string;
  readonly ebsEncryption: string;
  readonly ebsEncryptionKeyArn: string;
  readonly pitPolicy: [];
  readonly replicationConfigurationTemplateID: string;
  readonly replicationServerInstanceType: string;
  readonly replicationServersSecurityGroupsIDs: [];
  readonly stagingAreaSubnetId: string;
  readonly stagingAreaTags: {[key: string]: any};
  readonly tags: {[key: string]: any};
  readonly useDedicatedReplicationServer: boolean;
}

interface ResourceNotFoundException {
  readonly code: string;
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}

interface RetryDataReplicationRequest {
  readonly sourceServerID: string;
}

interface ServiceQuotaExceededException {
  readonly code: string;
  readonly message: string;
  readonly quotaCode: string;
  readonly resourceId: string;
  readonly resourceType: string;
  readonly serviceCode: string;
}

interface SourceProperties {
  readonly cpus: [];
  readonly disks: [];
  readonly identificationHints: IdentificationHints;
  readonly lastUpdatedDateTime: string;
  readonly networkInterfaces: [];
  readonly os: OS;
  readonly ramBytes: number;
  readonly recommendedInstanceType: string;
}

interface SourceServer {
  readonly arn: string;
  readonly dataReplicationInfo: DataReplicationInfo;
  readonly lastLaunchResult: string;
  readonly lifeCycle: LifeCycle;
  readonly recoveryInstanceId: string;
  readonly sourceProperties: SourceProperties;
  readonly sourceServerID: string;
  readonly tags: {[key: string]: any};
}

interface StartFailbackLaunchRequest {
  readonly recoveryInstanceIDs: [];
  readonly tags: {[key: string]: any};
}

interface StartFailbackLaunchResponse {
  readonly job: Job;
}

interface StartRecoveryRequest {
  readonly isDrill: boolean;
  readonly sourceServers: [];
  readonly tags: {[key: string]: any};
}

interface StartRecoveryRequestSourceServer {
  readonly recoverySnapshotID: string;
  readonly sourceServerID: string;
}

interface StartRecoveryResponse {
  readonly job: Job;
}

interface StopFailbackRequest {
  readonly recoveryInstanceID: string;
}

interface TagResourceRequest {
  readonly resourceArn: string;
  readonly tags: {[key: string]: any};
}

interface TerminateRecoveryInstancesRequest {
  readonly recoveryInstanceIDs: [];
}

interface TerminateRecoveryInstancesResponse {
  readonly job: Job;
}

interface ThrottlingException {
  readonly message: string;
  readonly quotaCode: string;
  readonly retryAfterSeconds: string;
  readonly serviceCode: string;
}

interface UninitializedAccountException {
  readonly code: string;
  readonly message: string;
}

interface UntagResourceRequest {
  readonly resourceArn: string;
  readonly tagKeys: [];
}

interface UpdateFailbackReplicationConfigurationRequest {
  readonly bandwidthThrottling: number;
  readonly name: string;
  readonly recoveryInstanceID: string;
  readonly usePrivateIP: boolean;
}

interface UpdateLaunchConfigurationRequest {
  readonly copyPrivateIp: boolean;
  readonly copyTags: boolean;
  readonly launchDisposition: string;
  readonly licensing: Licensing;
  readonly name: string;
  readonly sourceServerID: string;
  readonly targetInstanceTypeRightSizingMethod: string;
}

interface UpdateReplicationConfigurationRequest {
  readonly associateDefaultSecurityGroup: boolean;
  readonly bandwidthThrottling: number;
  readonly createPublicIP: boolean;
  readonly dataPlaneRouting: string;
  readonly defaultLargeStagingDiskType: string;
  readonly ebsEncryption: string;
  readonly ebsEncryptionKeyArn: string;
  readonly name: string;
  readonly pitPolicy: [];
  readonly replicatedDisks: [];
  readonly replicationServerInstanceType: string;
  readonly replicationServersSecurityGroupsIDs: [];
  readonly sourceServerID: string;
  readonly stagingAreaSubnetId: string;
  readonly stagingAreaTags: {[key: string]: any};
  readonly useDedicatedReplicationServer: boolean;
}

interface UpdateReplicationConfigurationTemplateRequest {
  readonly arn: string;
  readonly associateDefaultSecurityGroup: boolean;
  readonly bandwidthThrottling: number;
  readonly createPublicIP: boolean;
  readonly dataPlaneRouting: string;
  readonly defaultLargeStagingDiskType: string;
  readonly ebsEncryption: string;
  readonly ebsEncryptionKeyArn: string;
  readonly pitPolicy: [];
  readonly replicationConfigurationTemplateID: string;
  readonly replicationServerInstanceType: string;
  readonly replicationServersSecurityGroupsIDs: [];
  readonly stagingAreaSubnetId: string;
  readonly stagingAreaTags: {[key: string]: any};
  readonly useDedicatedReplicationServer: boolean;
}

interface ValidationException {
  readonly code: string;
  readonly fieldList: [];
  readonly message: string;
  readonly reason: string;
}

interface ValidationExceptionField {
  readonly message: string;
  readonly name: string;
}

