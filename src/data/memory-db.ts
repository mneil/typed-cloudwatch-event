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

export interface ACL {
  readonly Name?: string;
  readonly Status?: string;
  readonly UserNames?: [];
  readonly MinimumEngineVersion?: string;
  readonly PendingChanges?: ACLPendingChanges;
  readonly Clusters?: [];
  readonly ARN?: string;
}

export interface ACLAlreadyExistsFault {
}

export interface ACLNotFoundFault {
}

export interface ACLPendingChanges {
  readonly UserNamesToRemove?: [];
  readonly UserNamesToAdd?: [];
}

export interface ACLQuotaExceededFault {
}

export interface ACLsUpdateStatus {
  readonly ACLToApply?: string;
}

export interface APICallRateForCustomerExceededFault {
}

export interface Authentication {
  readonly Type?: string;
  readonly PasswordCount?: number;
}

export interface AuthenticationMode {
  readonly Type?: string;
  readonly Passwords?: [];
}

export interface AvailabilityZone {
  readonly Name?: string;
}

export interface BatchUpdateClusterRequest {
  readonly ClusterNames: [];
  readonly ServiceUpdate?: ServiceUpdateRequest;
}

export interface BatchUpdateClusterResponse {
  readonly ProcessedClusters?: [];
  readonly UnprocessedClusters?: [];
}

export interface Cluster {
  readonly Name?: string;
  readonly Description?: string;
  readonly Status?: string;
  readonly PendingUpdates?: ClusterPendingUpdates;
  readonly NumberOfShards?: number;
  readonly Shards?: [];
  readonly AvailabilityMode?: string;
  readonly ClusterEndpoint?: Endpoint;
  readonly NodeType?: string;
  readonly EngineVersion?: string;
  readonly EnginePatchVersion?: string;
  readonly ParameterGroupName?: string;
  readonly ParameterGroupStatus?: string;
  readonly SecurityGroups?: [];
  readonly SubnetGroupName?: string;
  readonly TLSEnabled?: boolean;
  readonly KmsKeyId?: string;
  readonly ARN?: string;
  readonly SnsTopicArn?: string;
  readonly SnsTopicStatus?: string;
  readonly SnapshotRetentionLimit?: number;
  readonly MaintenanceWindow?: string;
  readonly SnapshotWindow?: string;
  readonly ACLName?: string;
  readonly AutoMinorVersionUpgrade?: boolean;
}

export interface ClusterAlreadyExistsFault {
}

export interface ClusterConfiguration {
  readonly Name?: string;
  readonly Description?: string;
  readonly NodeType?: string;
  readonly EngineVersion?: string;
  readonly MaintenanceWindow?: string;
  readonly TopicArn?: string;
  readonly Port?: number;
  readonly ParameterGroupName?: string;
  readonly SubnetGroupName?: string;
  readonly VpcId?: string;
  readonly SnapshotRetentionLimit?: number;
  readonly SnapshotWindow?: string;
  readonly NumShards?: number;
  readonly Shards?: [];
}

export interface ClusterNotFoundFault {
}

export interface ClusterPendingUpdates {
  readonly Resharding?: ReshardingStatus;
  readonly ACLs?: ACLsUpdateStatus;
  readonly ServiceUpdates?: [];
}

export interface ClusterQuotaForCustomerExceededFault {
}

export interface CopySnapshotRequest {
  readonly SourceSnapshotName: string;
  readonly TargetSnapshotName: string;
  readonly TargetBucket?: string;
  readonly KmsKeyId?: string;
  readonly Tags?: [];
}

export interface CopySnapshotResponse {
  readonly Snapshot?: Snapshot;
}

export interface CreateACLRequest {
  readonly ACLName: string;
  readonly UserNames?: [];
  readonly Tags?: [];
}

export interface CreateACLResponse {
  readonly ACL?: ACL;
}

export interface CreateClusterRequest {
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

export interface CreateClusterResponse {
  readonly Cluster?: Cluster;
}

export interface CreateParameterGroupRequest {
  readonly ParameterGroupName: string;
  readonly Family: string;
  readonly Description?: string;
  readonly Tags?: [];
}

export interface CreateParameterGroupResponse {
  readonly ParameterGroup?: ParameterGroup;
}

export interface CreateSnapshotRequest {
  readonly ClusterName: string;
  readonly SnapshotName: string;
  readonly KmsKeyId?: string;
  readonly Tags?: [];
}

export interface CreateSnapshotResponse {
  readonly Snapshot?: Snapshot;
}

export interface CreateSubnetGroupRequest {
  readonly SubnetGroupName: string;
  readonly Description?: string;
  readonly SubnetIds: [];
  readonly Tags?: [];
}

export interface CreateSubnetGroupResponse {
  readonly SubnetGroup?: SubnetGroup;
}

export interface CreateUserRequest {
  readonly UserName: string;
  readonly AuthenticationMode: AuthenticationMode;
  readonly AccessString: string;
  readonly Tags?: [];
}

export interface CreateUserResponse {
  readonly User?: User;
}

export interface DefaultUserRequired {
}

export interface DeleteACLRequest {
  readonly ACLName: string;
}

export interface DeleteACLResponse {
  readonly ACL?: ACL;
}

export interface DeleteClusterRequest {
  readonly ClusterName: string;
  readonly FinalSnapshotName?: string;
}

export interface DeleteClusterResponse {
  readonly Cluster?: Cluster;
}

export interface DeleteParameterGroupRequest {
  readonly ParameterGroupName: string;
}

export interface DeleteParameterGroupResponse {
  readonly ParameterGroup?: ParameterGroup;
}

export interface DeleteSnapshotRequest {
  readonly SnapshotName: string;
}

export interface DeleteSnapshotResponse {
  readonly Snapshot?: Snapshot;
}

export interface DeleteSubnetGroupRequest {
  readonly SubnetGroupName: string;
}

export interface DeleteSubnetGroupResponse {
  readonly SubnetGroup?: SubnetGroup;
}

export interface DeleteUserRequest {
  readonly UserName: string;
}

export interface DeleteUserResponse {
  readonly User?: User;
}

export interface DescribeACLsRequest {
  readonly ACLName?: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface DescribeACLsResponse {
  readonly ACLs?: [];
  readonly NextToken?: string;
}

export interface DescribeClustersRequest {
  readonly ClusterName?: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
  readonly ShowShardDetails?: boolean;
}

export interface DescribeClustersResponse {
  readonly NextToken?: string;
  readonly Clusters?: [];
}

export interface DescribeEngineVersionsRequest {
  readonly EngineVersion?: string;
  readonly ParameterGroupFamily?: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
  readonly DefaultOnly?: boolean;
}

export interface DescribeEngineVersionsResponse {
  readonly NextToken?: string;
  readonly EngineVersions?: [];
}

export interface DescribeEventsRequest {
  readonly SourceName?: string;
  readonly SourceType?: string;
  readonly StartTime?: Date;
  readonly EndTime?: Date;
  readonly Duration?: number;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface DescribeEventsResponse {
  readonly NextToken?: string;
  readonly Events?: [];
}

export interface DescribeParameterGroupsRequest {
  readonly ParameterGroupName?: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface DescribeParameterGroupsResponse {
  readonly NextToken?: string;
  readonly ParameterGroups?: [];
}

export interface DescribeParametersRequest {
  readonly ParameterGroupName: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface DescribeParametersResponse {
  readonly NextToken?: string;
  readonly Parameters?: [];
}

export interface DescribeServiceUpdatesRequest {
  readonly ServiceUpdateName?: string;
  readonly ClusterNames?: [];
  readonly Status?: [];
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface DescribeServiceUpdatesResponse {
  readonly NextToken?: string;
  readonly ServiceUpdates?: [];
}

export interface DescribeSnapshotsRequest {
  readonly ClusterName?: string;
  readonly SnapshotName?: string;
  readonly Source?: string;
  readonly NextToken?: string;
  readonly MaxResults?: number;
  readonly ShowDetail?: boolean;
}

export interface DescribeSnapshotsResponse {
  readonly NextToken?: string;
  readonly Snapshots?: [];
}

export interface DescribeSubnetGroupsRequest {
  readonly SubnetGroupName?: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface DescribeSubnetGroupsResponse {
  readonly NextToken?: string;
  readonly SubnetGroups?: [];
}

export interface DescribeUsersRequest {
  readonly UserName?: string;
  readonly Filters?: [];
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface DescribeUsersResponse {
  readonly Users?: [];
  readonly NextToken?: string;
}

export interface DuplicateUserNameFault {
}

export interface Endpoint {
  readonly Address?: string;
  readonly Port?: number;
}

export interface EngineVersionInfo {
  readonly EngineVersion?: string;
  readonly EnginePatchVersion?: string;
  readonly ParameterGroupFamily?: string;
}

export interface Event {
  readonly SourceName?: string;
  readonly SourceType?: string;
  readonly Message?: string;
  readonly Date?: Date;
}

export interface FailoverShardRequest {
  readonly ClusterName: string;
  readonly ShardName: string;
}

export interface FailoverShardResponse {
  readonly Cluster?: Cluster;
}

export interface Filter {
  readonly Name: string;
  readonly Values: [];
}

export interface InsufficientClusterCapacityFault {
}

export interface InvalidACLStateFault {
}

export interface InvalidARNFault {
}

export interface InvalidClusterStateFault {
}

export interface InvalidCredentialsException {
}

export interface InvalidKMSKeyFault {
}

export interface InvalidNodeStateFault {
}

export interface InvalidParameterCombinationException {
  readonly message?: string;
}

export interface InvalidParameterGroupStateFault {
}

export interface InvalidParameterValueException {
  readonly message?: string;
}

export interface InvalidSnapshotStateFault {
}

export interface InvalidSubnet {
}

export interface InvalidUserStateFault {
}

export interface InvalidVPCNetworkStateFault {
}

export interface ListAllowedNodeTypeUpdatesRequest {
  readonly ClusterName: string;
}

export interface ListAllowedNodeTypeUpdatesResponse {
  readonly ScaleUpNodeTypes?: [];
  readonly ScaleDownNodeTypes?: [];
}

export interface ListTagsRequest {
  readonly ResourceArn: string;
}

export interface ListTagsResponse {
  readonly TagList?: [];
}

export interface NoOperationFault {
}

export interface Node {
  readonly Name?: string;
  readonly Status?: string;
  readonly AvailabilityZone?: string;
  readonly CreateTime?: Date;
  readonly Endpoint?: Endpoint;
}

export interface NodeQuotaForClusterExceededFault {
}

export interface NodeQuotaForCustomerExceededFault {
}

export interface Parameter {
  readonly Name?: string;
  readonly Value?: string;
  readonly Description?: string;
  readonly DataType?: string;
  readonly AllowedValues?: string;
  readonly MinimumEngineVersion?: string;
}

export interface ParameterGroup {
  readonly Name?: string;
  readonly Family?: string;
  readonly Description?: string;
  readonly ARN?: string;
}

export interface ParameterGroupAlreadyExistsFault {
}

export interface ParameterGroupNotFoundFault {
}

export interface ParameterGroupQuotaExceededFault {
}

export interface ParameterNameValue {
  readonly ParameterName?: string;
  readonly ParameterValue?: string;
}

export interface PendingModifiedServiceUpdate {
  readonly ServiceUpdateName?: string;
  readonly Status?: string;
}

export interface ReplicaConfigurationRequest {
  readonly ReplicaCount?: number;
}

export interface ResetParameterGroupRequest {
  readonly ParameterGroupName: string;
  readonly AllParameters?: boolean;
  readonly ParameterNames?: [];
}

export interface ResetParameterGroupResponse {
  readonly ParameterGroup?: ParameterGroup;
}

export interface ReshardingStatus {
  readonly SlotMigration?: SlotMigration;
}

export interface SecurityGroupMembership {
  readonly SecurityGroupId?: string;
  readonly Status?: string;
}

export interface ServiceLinkedRoleNotFoundFault {
}

export interface ServiceUpdate {
  readonly ClusterName?: string;
  readonly ServiceUpdateName?: string;
  readonly ReleaseDate?: Date;
  readonly Description?: string;
  readonly Status?: string;
  readonly Type?: string;
  readonly NodesUpdated?: string;
  readonly AutoUpdateStartDate?: Date;
}

export interface ServiceUpdateNotFoundFault {
}

export interface ServiceUpdateRequest {
  readonly ServiceUpdateNameToApply?: string;
}

export interface Shard {
  readonly Name?: string;
  readonly Status?: string;
  readonly Slots?: string;
  readonly Nodes?: [];
  readonly NumberOfNodes?: number;
}

export interface ShardConfiguration {
  readonly Slots?: string;
  readonly ReplicaCount?: number;
}

export interface ShardConfigurationRequest {
  readonly ShardCount?: number;
}

export interface ShardDetail {
  readonly Name?: string;
  readonly Configuration?: ShardConfiguration;
  readonly Size?: string;
  readonly SnapshotCreationTime?: Date;
}

export interface ShardNotFoundFault {
}

export interface ShardsPerClusterQuotaExceededFault {
}

export interface SlotMigration {
  readonly ProgressPercentage?: unknown;
}

export interface Snapshot {
  readonly Name?: string;
  readonly Status?: string;
  readonly Source?: string;
  readonly KmsKeyId?: string;
  readonly ARN?: string;
  readonly ClusterConfiguration?: ClusterConfiguration;
}

export interface SnapshotAlreadyExistsFault {
}

export interface SnapshotNotFoundFault {
}

export interface SnapshotQuotaExceededFault {
}

export interface Subnet {
  readonly Identifier?: string;
  readonly AvailabilityZone?: AvailabilityZone;
}

export interface SubnetGroup {
  readonly Name?: string;
  readonly Description?: string;
  readonly VpcId?: string;
  readonly Subnets?: [];
  readonly ARN?: string;
}

export interface SubnetGroupAlreadyExistsFault {
}

export interface SubnetGroupInUseFault {
}

export interface SubnetGroupNotFoundFault {
}

export interface SubnetGroupQuotaExceededFault {
}

export interface SubnetInUse {
}

export interface SubnetNotAllowedFault {
}

export interface SubnetQuotaExceededFault {
}

export interface Tag {
  readonly Key?: string;
  readonly Value?: string;
}

export interface TagNotFoundFault {
}

export interface TagQuotaPerResourceExceeded {
}

export interface TagResourceRequest {
  readonly ResourceArn: string;
  readonly Tags: [];
}

export interface TagResourceResponse {
  readonly TagList?: [];
}

export interface TestFailoverNotAvailableFault {
}

export interface UnprocessedCluster {
  readonly ClusterName?: string;
  readonly ErrorType?: string;
  readonly ErrorMessage?: string;
}

export interface UntagResourceRequest {
  readonly ResourceArn: string;
  readonly TagKeys: [];
}

export interface UntagResourceResponse {
  readonly TagList?: [];
}

export interface UpdateACLRequest {
  readonly ACLName: string;
  readonly UserNamesToAdd?: [];
  readonly UserNamesToRemove?: [];
}

export interface UpdateACLResponse {
  readonly ACL?: ACL;
}

export interface UpdateClusterRequest {
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

export interface UpdateClusterResponse {
  readonly Cluster?: Cluster;
}

export interface UpdateParameterGroupRequest {
  readonly ParameterGroupName: string;
  readonly ParameterNameValues: [];
}

export interface UpdateParameterGroupResponse {
  readonly ParameterGroup?: ParameterGroup;
}

export interface UpdateSubnetGroupRequest {
  readonly SubnetGroupName: string;
  readonly Description?: string;
  readonly SubnetIds?: [];
}

export interface UpdateSubnetGroupResponse {
  readonly SubnetGroup?: SubnetGroup;
}

export interface UpdateUserRequest {
  readonly UserName: string;
  readonly AuthenticationMode?: AuthenticationMode;
  readonly AccessString?: string;
}

export interface UpdateUserResponse {
  readonly User?: User;
}

export interface User {
  readonly Name?: string;
  readonly Status?: string;
  readonly AccessString?: string;
  readonly ACLNames?: [];
  readonly MinimumEngineVersion?: string;
  readonly Authentication?: Authentication;
  readonly ARN?: string;
}

export interface UserAlreadyExistsFault {
}

export interface UserNotFoundFault {
}

export interface UserQuotaExceededFault {
}


