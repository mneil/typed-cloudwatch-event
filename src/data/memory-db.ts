/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface BatchUpdateCluster {
  readonly ClusterNames: [];
  readonly ServiceUpdate?: ServiceUpdateRequest;
}
export interface CopySnapshot {
  readonly SourceSnapshotName: string;
  readonly TargetSnapshotName: string;
  readonly TargetBucket?: string;
  readonly KmsKeyId?: string;
  readonly Tags?: [];
}
export interface CreateACL {
  readonly ACLName: string;
  readonly UserNames?: [];
  readonly Tags?: [];
}
export interface CreateCluster {
  readonly ClusterName: string;
  readonly NodeType: string;
  readonly ParameterGroupName?: string;
  readonly Description?: string;
  readonly NumShards?: number;
  readonly NumReplicasPerShard?: number;
  readonly SubnetGroupName?: string;
  readonly SecurityGroupIds?: [];
  readonly MaintenanceWindow?: string;
  readonly Port?: number;
  readonly SnsTopicArn?: string;
  readonly TLSEnabled?: boolean;
  readonly KmsKeyId?: string;
  readonly SnapshotArns?: [];
  readonly SnapshotName?: string;
  readonly SnapshotRetentionLimit?: number;
  readonly Tags?: [];
  readonly SnapshotWindow?: string;
  readonly ACLName: string;
  readonly EngineVersion?: string;
  readonly AutoMinorVersionUpgrade?: boolean;
}
export interface CreateParameterGroup {
  readonly ParameterGroupName: string;
  readonly Family: string;
  readonly Description?: string;
  readonly Tags?: [];
}
export interface CreateSnapshot {
  readonly ClusterName: string;
  readonly SnapshotName: string;
  readonly KmsKeyId?: string;
  readonly Tags?: [];
}
export interface CreateSubnetGroup {
  readonly SubnetGroupName: string;
  readonly Description?: string;
  readonly SubnetIds: [];
  readonly Tags?: [];
}
export interface CreateUser {
  readonly UserName: string;
  readonly AuthenticationMode: AuthenticationMode;
  readonly AccessString: string;
  readonly Tags?: [];
}
export interface DeleteACL {
  readonly ACLName: string;
}
export interface DeleteCluster {
  readonly ClusterName: string;
  readonly FinalSnapshotName?: string;
}
export interface DeleteParameterGroup {
  readonly ParameterGroupName: string;
}
export interface DeleteSnapshot {
  readonly SnapshotName: string;
}
export interface DeleteSubnetGroup {
  readonly SubnetGroupName: string;
}
export interface DeleteUser {
  readonly UserName: string;
}
export interface DescribeACLs {
  readonly ACLName?: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}
export interface DescribeClusters {
  readonly ClusterName?: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
  readonly ShowShardDetails?: boolean;
}
export interface DescribeEngineVersions {
  readonly EngineVersion?: string;
  readonly ParameterGroupFamily?: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
  readonly DefaultOnly?: boolean;
}
export interface DescribeEvents {
  readonly SourceName?: string;
  readonly SourceType?: string;
  readonly StartTime?: Date;
  readonly EndTime?: Date;
  readonly Duration?: number;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}
export interface DescribeParameterGroups {
  readonly ParameterGroupName?: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}
export interface DescribeParameters {
  readonly ParameterGroupName: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}
export interface DescribeServiceUpdates {
  readonly ServiceUpdateName?: string;
  readonly ClusterNames?: [];
  readonly Status?: [];
  readonly MaxResults?: number;
  readonly NextToken?: string;
}
export interface DescribeSnapshots {
  readonly ClusterName?: string;
  readonly SnapshotName?: string;
  readonly Source?: string;
  readonly NextToken?: string;
  readonly MaxResults?: number;
  readonly ShowDetail?: boolean;
}
export interface DescribeSubnetGroups {
  readonly SubnetGroupName?: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}
export interface DescribeUsers {
  readonly UserName?: string;
  readonly Filters?: [];
  readonly MaxResults?: number;
  readonly NextToken?: string;
}
export interface FailoverShard {
  readonly ClusterName: string;
  readonly ShardName: string;
}
export interface ListAllowedNodeTypeUpdates {
  readonly ClusterName: string;
}
export interface ListTags {
  readonly ResourceArn: string;
}
export interface ResetParameterGroup {
  readonly ParameterGroupName: string;
  readonly AllParameters?: boolean;
  readonly ParameterNames?: [];
}
export interface TagResource {
  readonly ResourceArn: string;
  readonly Tags: [];
}
export interface UntagResource {
  readonly ResourceArn: string;
  readonly TagKeys: [];
}
export interface UpdateACL {
  readonly ACLName: string;
  readonly UserNamesToAdd?: [];
  readonly UserNamesToRemove?: [];
}
export interface UpdateCluster {
  readonly ClusterName: string;
  readonly Description?: string;
  readonly SecurityGroupIds?: [];
  readonly MaintenanceWindow?: string;
  readonly SnsTopicArn?: string;
  readonly SnsTopicStatus?: string;
  readonly ParameterGroupName?: string;
  readonly SnapshotWindow?: string;
  readonly SnapshotRetentionLimit?: number;
  readonly NodeType?: string;
  readonly EngineVersion?: string;
  readonly ReplicaConfiguration?: ReplicaConfigurationRequest;
  readonly ShardConfiguration?: ShardConfigurationRequest;
  readonly ACLName?: string;
}
export interface UpdateParameterGroup {
  readonly ParameterGroupName: string;
  readonly ParameterNameValues: [];
}
export interface UpdateSubnetGroup {
  readonly SubnetGroupName: string;
  readonly Description?: string;
  readonly SubnetIds?: [];
}
export interface UpdateUser {
  readonly UserName: string;
  readonly AuthenticationMode?: AuthenticationMode;
  readonly AccessString?: string;
}



interface ACL {
  readonly Name: string;
  readonly Status: string;
  readonly UserNames: [];
  readonly MinimumEngineVersion: string;
  readonly PendingChanges: ACLPendingChanges;
  readonly Clusters: [];
  readonly ARN: string;
}

interface ACLAlreadyExistsFault {
}

interface ACLNotFoundFault {
}

interface ACLPendingChanges {
  readonly UserNamesToRemove: [];
  readonly UserNamesToAdd: [];
}

interface ACLQuotaExceededFault {
}

interface ACLsUpdateStatus {
  readonly ACLToApply: string;
}

interface APICallRateForCustomerExceededFault {
}

interface Authentication {
  readonly Type: string;
  readonly PasswordCount: number;
}

interface AuthenticationMode {
  readonly Type: string;
  readonly Passwords: [];
}

interface AvailabilityZone {
  readonly Name: string;
}

interface BatchUpdateClusterRequest {
  readonly ClusterNames: [];
  readonly ServiceUpdate: ServiceUpdateRequest;
}

interface BatchUpdateClusterResponse {
  readonly ProcessedClusters: [];
  readonly UnprocessedClusters: [];
}

interface Cluster {
  readonly Name: string;
  readonly Description: string;
  readonly Status: string;
  readonly PendingUpdates: ClusterPendingUpdates;
  readonly NumberOfShards: number;
  readonly Shards: [];
  readonly AvailabilityMode: string;
  readonly ClusterEndpoint: Endpoint;
  readonly NodeType: string;
  readonly EngineVersion: string;
  readonly EnginePatchVersion: string;
  readonly ParameterGroupName: string;
  readonly ParameterGroupStatus: string;
  readonly SecurityGroups: [];
  readonly SubnetGroupName: string;
  readonly TLSEnabled: boolean;
  readonly KmsKeyId: string;
  readonly ARN: string;
  readonly SnsTopicArn: string;
  readonly SnsTopicStatus: string;
  readonly SnapshotRetentionLimit: number;
  readonly MaintenanceWindow: string;
  readonly SnapshotWindow: string;
  readonly ACLName: string;
  readonly AutoMinorVersionUpgrade: boolean;
}

interface ClusterAlreadyExistsFault {
}

interface ClusterConfiguration {
  readonly Name: string;
  readonly Description: string;
  readonly NodeType: string;
  readonly EngineVersion: string;
  readonly MaintenanceWindow: string;
  readonly TopicArn: string;
  readonly Port: number;
  readonly ParameterGroupName: string;
  readonly SubnetGroupName: string;
  readonly VpcId: string;
  readonly SnapshotRetentionLimit: number;
  readonly SnapshotWindow: string;
  readonly NumShards: number;
  readonly Shards: [];
}

interface ClusterNotFoundFault {
}

interface ClusterPendingUpdates {
  readonly Resharding: ReshardingStatus;
  readonly ACLs: ACLsUpdateStatus;
  readonly ServiceUpdates: [];
}

interface ClusterQuotaForCustomerExceededFault {
}

interface CopySnapshotRequest {
  readonly SourceSnapshotName: string;
  readonly TargetSnapshotName: string;
  readonly TargetBucket: string;
  readonly KmsKeyId: string;
  readonly Tags: [];
}

interface CopySnapshotResponse {
  readonly Snapshot: Snapshot;
}

interface CreateACLRequest {
  readonly ACLName: string;
  readonly UserNames: [];
  readonly Tags: [];
}

interface CreateACLResponse {
  readonly ACL: ACL;
}

interface CreateClusterRequest {
  readonly ClusterName: string;
  readonly NodeType: string;
  readonly ParameterGroupName: string;
  readonly Description: string;
  readonly NumShards: number;
  readonly NumReplicasPerShard: number;
  readonly SubnetGroupName: string;
  readonly SecurityGroupIds: [];
  readonly MaintenanceWindow: string;
  readonly Port: number;
  readonly SnsTopicArn: string;
  readonly TLSEnabled: boolean;
  readonly KmsKeyId: string;
  readonly SnapshotArns: [];
  readonly SnapshotName: string;
  readonly SnapshotRetentionLimit: number;
  readonly Tags: [];
  readonly SnapshotWindow: string;
  readonly ACLName: string;
  readonly EngineVersion: string;
  readonly AutoMinorVersionUpgrade: boolean;
}

interface CreateClusterResponse {
  readonly Cluster: Cluster;
}

interface CreateParameterGroupRequest {
  readonly ParameterGroupName: string;
  readonly Family: string;
  readonly Description: string;
  readonly Tags: [];
}

interface CreateParameterGroupResponse {
  readonly ParameterGroup: ParameterGroup;
}

interface CreateSnapshotRequest {
  readonly ClusterName: string;
  readonly SnapshotName: string;
  readonly KmsKeyId: string;
  readonly Tags: [];
}

interface CreateSnapshotResponse {
  readonly Snapshot: Snapshot;
}

interface CreateSubnetGroupRequest {
  readonly SubnetGroupName: string;
  readonly Description: string;
  readonly SubnetIds: [];
  readonly Tags: [];
}

interface CreateSubnetGroupResponse {
  readonly SubnetGroup: SubnetGroup;
}

interface CreateUserRequest {
  readonly UserName: string;
  readonly AuthenticationMode: AuthenticationMode;
  readonly AccessString: string;
  readonly Tags: [];
}

interface CreateUserResponse {
  readonly User: User;
}

interface DefaultUserRequired {
}

interface DeleteACLRequest {
  readonly ACLName: string;
}

interface DeleteACLResponse {
  readonly ACL: ACL;
}

interface DeleteClusterRequest {
  readonly ClusterName: string;
  readonly FinalSnapshotName: string;
}

interface DeleteClusterResponse {
  readonly Cluster: Cluster;
}

interface DeleteParameterGroupRequest {
  readonly ParameterGroupName: string;
}

interface DeleteParameterGroupResponse {
  readonly ParameterGroup: ParameterGroup;
}

interface DeleteSnapshotRequest {
  readonly SnapshotName: string;
}

interface DeleteSnapshotResponse {
  readonly Snapshot: Snapshot;
}

interface DeleteSubnetGroupRequest {
  readonly SubnetGroupName: string;
}

interface DeleteSubnetGroupResponse {
  readonly SubnetGroup: SubnetGroup;
}

interface DeleteUserRequest {
  readonly UserName: string;
}

interface DeleteUserResponse {
  readonly User: User;
}

interface DescribeACLsRequest {
  readonly ACLName: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface DescribeACLsResponse {
  readonly ACLs: [];
  readonly NextToken: string;
}

interface DescribeClustersRequest {
  readonly ClusterName: string;
  readonly MaxResults: number;
  readonly NextToken: string;
  readonly ShowShardDetails: boolean;
}

interface DescribeClustersResponse {
  readonly NextToken: string;
  readonly Clusters: [];
}

interface DescribeEngineVersionsRequest {
  readonly EngineVersion: string;
  readonly ParameterGroupFamily: string;
  readonly MaxResults: number;
  readonly NextToken: string;
  readonly DefaultOnly: boolean;
}

interface DescribeEngineVersionsResponse {
  readonly NextToken: string;
  readonly EngineVersions: [];
}

interface DescribeEventsRequest {
  readonly SourceName: string;
  readonly SourceType: string;
  readonly StartTime: Date;
  readonly EndTime: Date;
  readonly Duration: number;
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface DescribeEventsResponse {
  readonly NextToken: string;
  readonly Events: [];
}

interface DescribeParameterGroupsRequest {
  readonly ParameterGroupName: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface DescribeParameterGroupsResponse {
  readonly NextToken: string;
  readonly ParameterGroups: [];
}

interface DescribeParametersRequest {
  readonly ParameterGroupName: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface DescribeParametersResponse {
  readonly NextToken: string;
  readonly Parameters: [];
}

interface DescribeServiceUpdatesRequest {
  readonly ServiceUpdateName: string;
  readonly ClusterNames: [];
  readonly Status: [];
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface DescribeServiceUpdatesResponse {
  readonly NextToken: string;
  readonly ServiceUpdates: [];
}

interface DescribeSnapshotsRequest {
  readonly ClusterName: string;
  readonly SnapshotName: string;
  readonly Source: string;
  readonly NextToken: string;
  readonly MaxResults: number;
  readonly ShowDetail: boolean;
}

interface DescribeSnapshotsResponse {
  readonly NextToken: string;
  readonly Snapshots: [];
}

interface DescribeSubnetGroupsRequest {
  readonly SubnetGroupName: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface DescribeSubnetGroupsResponse {
  readonly NextToken: string;
  readonly SubnetGroups: [];
}

interface DescribeUsersRequest {
  readonly UserName: string;
  readonly Filters: [];
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface DescribeUsersResponse {
  readonly Users: [];
  readonly NextToken: string;
}

interface DuplicateUserNameFault {
}

interface Endpoint {
  readonly Address: string;
  readonly Port: number;
}

interface EngineVersionInfo {
  readonly EngineVersion: string;
  readonly EnginePatchVersion: string;
  readonly ParameterGroupFamily: string;
}

interface Event {
  readonly SourceName: string;
  readonly SourceType: string;
  readonly Message: string;
  readonly Date: Date;
}

interface FailoverShardRequest {
  readonly ClusterName: string;
  readonly ShardName: string;
}

interface FailoverShardResponse {
  readonly Cluster: Cluster;
}

interface Filter {
  readonly Name: string;
  readonly Values: [];
}

interface InsufficientClusterCapacityFault {
}

interface InvalidACLStateFault {
}

interface InvalidARNFault {
}

interface InvalidClusterStateFault {
}

interface InvalidCredentialsException {
}

interface InvalidKMSKeyFault {
}

interface InvalidNodeStateFault {
}

interface InvalidParameterCombinationException {
  readonly message: string;
}

interface InvalidParameterGroupStateFault {
}

interface InvalidParameterValueException {
  readonly message: string;
}

interface InvalidSnapshotStateFault {
}

interface InvalidSubnet {
}

interface InvalidUserStateFault {
}

interface InvalidVPCNetworkStateFault {
}

interface ListAllowedNodeTypeUpdatesRequest {
  readonly ClusterName: string;
}

interface ListAllowedNodeTypeUpdatesResponse {
  readonly ScaleUpNodeTypes: [];
  readonly ScaleDownNodeTypes: [];
}

interface ListTagsRequest {
  readonly ResourceArn: string;
}

interface ListTagsResponse {
  readonly TagList: [];
}

interface NoOperationFault {
}

interface Node {
  readonly Name: string;
  readonly Status: string;
  readonly AvailabilityZone: string;
  readonly CreateTime: Date;
  readonly Endpoint: Endpoint;
}

interface NodeQuotaForClusterExceededFault {
}

interface NodeQuotaForCustomerExceededFault {
}

interface Parameter {
  readonly Name: string;
  readonly Value: string;
  readonly Description: string;
  readonly DataType: string;
  readonly AllowedValues: string;
  readonly MinimumEngineVersion: string;
}

interface ParameterGroup {
  readonly Name: string;
  readonly Family: string;
  readonly Description: string;
  readonly ARN: string;
}

interface ParameterGroupAlreadyExistsFault {
}

interface ParameterGroupNotFoundFault {
}

interface ParameterGroupQuotaExceededFault {
}

interface ParameterNameValue {
  readonly ParameterName: string;
  readonly ParameterValue: string;
}

interface PendingModifiedServiceUpdate {
  readonly ServiceUpdateName: string;
  readonly Status: string;
}

interface ReplicaConfigurationRequest {
  readonly ReplicaCount: number;
}

interface ResetParameterGroupRequest {
  readonly ParameterGroupName: string;
  readonly AllParameters: boolean;
  readonly ParameterNames: [];
}

interface ResetParameterGroupResponse {
  readonly ParameterGroup: ParameterGroup;
}

interface ReshardingStatus {
  readonly SlotMigration: SlotMigration;
}

interface SecurityGroupMembership {
  readonly SecurityGroupId: string;
  readonly Status: string;
}

interface ServiceLinkedRoleNotFoundFault {
}

interface ServiceUpdate {
  readonly ClusterName: string;
  readonly ServiceUpdateName: string;
  readonly ReleaseDate: Date;
  readonly Description: string;
  readonly Status: string;
  readonly Type: string;
  readonly NodesUpdated: string;
  readonly AutoUpdateStartDate: Date;
}

interface ServiceUpdateNotFoundFault {
}

interface ServiceUpdateRequest {
  readonly ServiceUpdateNameToApply: string;
}

interface Shard {
  readonly Name: string;
  readonly Status: string;
  readonly Slots: string;
  readonly Nodes: [];
  readonly NumberOfNodes: number;
}

interface ShardConfiguration {
  readonly Slots: string;
  readonly ReplicaCount: number;
}

interface ShardConfigurationRequest {
  readonly ShardCount: number;
}

interface ShardDetail {
  readonly Name: string;
  readonly Configuration: ShardConfiguration;
  readonly Size: string;
  readonly SnapshotCreationTime: Date;
}

interface ShardNotFoundFault {
}

interface ShardsPerClusterQuotaExceededFault {
}

interface SlotMigration {
  readonly ProgressPercentage: unknown;
}

interface Snapshot {
  readonly Name: string;
  readonly Status: string;
  readonly Source: string;
  readonly KmsKeyId: string;
  readonly ARN: string;
  readonly ClusterConfiguration: ClusterConfiguration;
}

interface SnapshotAlreadyExistsFault {
}

interface SnapshotNotFoundFault {
}

interface SnapshotQuotaExceededFault {
}

interface Subnet {
  readonly Identifier: string;
  readonly AvailabilityZone: AvailabilityZone;
}

interface SubnetGroup {
  readonly Name: string;
  readonly Description: string;
  readonly VpcId: string;
  readonly Subnets: [];
  readonly ARN: string;
}

interface SubnetGroupAlreadyExistsFault {
}

interface SubnetGroupInUseFault {
}

interface SubnetGroupNotFoundFault {
}

interface SubnetGroupQuotaExceededFault {
}

interface SubnetInUse {
}

interface SubnetNotAllowedFault {
}

interface SubnetQuotaExceededFault {
}

interface Tag {
  readonly Key: string;
  readonly Value: string;
}

interface TagNotFoundFault {
}

interface TagQuotaPerResourceExceeded {
}

interface TagResourceRequest {
  readonly ResourceArn: string;
  readonly Tags: [];
}

interface TagResourceResponse {
  readonly TagList: [];
}

interface TestFailoverNotAvailableFault {
}

interface UnprocessedCluster {
  readonly ClusterName: string;
  readonly ErrorType: string;
  readonly ErrorMessage: string;
}

interface UntagResourceRequest {
  readonly ResourceArn: string;
  readonly TagKeys: [];
}

interface UntagResourceResponse {
  readonly TagList: [];
}

interface UpdateACLRequest {
  readonly ACLName: string;
  readonly UserNamesToAdd: [];
  readonly UserNamesToRemove: [];
}

interface UpdateACLResponse {
  readonly ACL: ACL;
}

interface UpdateClusterRequest {
  readonly ClusterName: string;
  readonly Description: string;
  readonly SecurityGroupIds: [];
  readonly MaintenanceWindow: string;
  readonly SnsTopicArn: string;
  readonly SnsTopicStatus: string;
  readonly ParameterGroupName: string;
  readonly SnapshotWindow: string;
  readonly SnapshotRetentionLimit: number;
  readonly NodeType: string;
  readonly EngineVersion: string;
  readonly ReplicaConfiguration: ReplicaConfigurationRequest;
  readonly ShardConfiguration: ShardConfigurationRequest;
  readonly ACLName: string;
}

interface UpdateClusterResponse {
  readonly Cluster: Cluster;
}

interface UpdateParameterGroupRequest {
  readonly ParameterGroupName: string;
  readonly ParameterNameValues: [];
}

interface UpdateParameterGroupResponse {
  readonly ParameterGroup: ParameterGroup;
}

interface UpdateSubnetGroupRequest {
  readonly SubnetGroupName: string;
  readonly Description: string;
  readonly SubnetIds: [];
}

interface UpdateSubnetGroupResponse {
  readonly SubnetGroup: SubnetGroup;
}

interface UpdateUserRequest {
  readonly UserName: string;
  readonly AuthenticationMode: AuthenticationMode;
  readonly AccessString: string;
}

interface UpdateUserResponse {
  readonly User: User;
}

interface User {
  readonly Name: string;
  readonly Status: string;
  readonly AccessString: string;
  readonly ACLNames: [];
  readonly MinimumEngineVersion: string;
  readonly Authentication: Authentication;
  readonly ARN: string;
}

interface UserAlreadyExistsFault {
}

interface UserNotFoundFault {
}

interface UserQuotaExceededFault {
}

