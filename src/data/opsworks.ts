/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface AssignInstance {
  readonly InstanceId: string;
  readonly LayerIds: [];
}
export interface AssignVolume {
  readonly VolumeId: string;
  readonly InstanceId?: string;
}
export interface AssociateElasticIp {
  readonly ElasticIp: string;
  readonly InstanceId?: string;
}
export interface AttachElasticLoadBalancer {
  readonly ElasticLoadBalancerName: string;
  readonly LayerId: string;
}
export interface CloneStack {
  readonly SourceStackId: string;
  readonly Name?: string;
  readonly Region?: string;
  readonly VpcId?: string;
  readonly Attributes?: {[key: string]: any};
  readonly ServiceRoleArn: string;
  readonly DefaultInstanceProfileArn?: string;
  readonly DefaultOs?: string;
  readonly HostnameTheme?: string;
  readonly DefaultAvailabilityZone?: string;
  readonly DefaultSubnetId?: string;
  readonly CustomJson?: string;
  readonly ConfigurationManager?: StackConfigurationManager;
  readonly ChefConfiguration?: ChefConfiguration;
  readonly UseCustomCookbooks?: boolean;
  readonly UseOpsworksSecurityGroups?: boolean;
  readonly CustomCookbooksSource?: Source;
  readonly DefaultSshKeyName?: string;
  readonly ClonePermissions?: boolean;
  readonly CloneAppIds?: [];
  readonly DefaultRootDeviceType?: string;
  readonly AgentVersion?: string;
}
export interface CreateApp {
  readonly StackId: string;
  readonly Shortname?: string;
  readonly Name: string;
  readonly Description?: string;
  readonly DataSources?: [];
  readonly Type: string;
  readonly AppSource?: Source;
  readonly Domains?: [];
  readonly EnableSsl?: boolean;
  readonly SslConfiguration?: SslConfiguration;
  readonly Attributes?: {[key: string]: any};
  readonly Environment?: [];
}
export interface CreateDeployment {
  readonly StackId: string;
  readonly AppId?: string;
  readonly InstanceIds?: [];
  readonly LayerIds?: [];
  readonly Command: DeploymentCommand;
  readonly Comment?: string;
  readonly CustomJson?: string;
}
export interface CreateInstance {
  readonly StackId: string;
  readonly LayerIds: [];
  readonly InstanceType: string;
  readonly AutoScalingType?: string;
  readonly Hostname?: string;
  readonly Os?: string;
  readonly AmiId?: string;
  readonly SshKeyName?: string;
  readonly AvailabilityZone?: string;
  readonly VirtualizationType?: string;
  readonly SubnetId?: string;
  readonly Architecture?: string;
  readonly RootDeviceType?: string;
  readonly BlockDeviceMappings?: [];
  readonly InstallUpdatesOnBoot?: boolean;
  readonly EbsOptimized?: boolean;
  readonly AgentVersion?: string;
  readonly Tenancy?: string;
}
export interface CreateLayer {
  readonly StackId: string;
  readonly Type: string;
  readonly Name: string;
  readonly Shortname: string;
  readonly Attributes?: {[key: string]: any};
  readonly CloudWatchLogsConfiguration?: CloudWatchLogsConfiguration;
  readonly CustomInstanceProfileArn?: string;
  readonly CustomJson?: string;
  readonly CustomSecurityGroupIds?: [];
  readonly Packages?: [];
  readonly VolumeConfigurations?: [];
  readonly EnableAutoHealing?: boolean;
  readonly AutoAssignElasticIps?: boolean;
  readonly AutoAssignPublicIps?: boolean;
  readonly CustomRecipes?: Recipes;
  readonly InstallUpdatesOnBoot?: boolean;
  readonly UseEbsOptimizedInstances?: boolean;
  readonly LifecycleEventConfiguration?: LifecycleEventConfiguration;
}
export interface CreateStack {
  readonly Name: string;
  readonly Region: string;
  readonly VpcId?: string;
  readonly Attributes?: {[key: string]: any};
  readonly ServiceRoleArn: string;
  readonly DefaultInstanceProfileArn: string;
  readonly DefaultOs?: string;
  readonly HostnameTheme?: string;
  readonly DefaultAvailabilityZone?: string;
  readonly DefaultSubnetId?: string;
  readonly CustomJson?: string;
  readonly ConfigurationManager?: StackConfigurationManager;
  readonly ChefConfiguration?: ChefConfiguration;
  readonly UseCustomCookbooks?: boolean;
  readonly UseOpsworksSecurityGroups?: boolean;
  readonly CustomCookbooksSource?: Source;
  readonly DefaultSshKeyName?: string;
  readonly DefaultRootDeviceType?: string;
  readonly AgentVersion?: string;
}
export interface CreateUserProfile {
  readonly IamUserArn: string;
  readonly SshUsername?: string;
  readonly SshPublicKey?: string;
  readonly AllowSelfManagement?: boolean;
}
export interface DeleteApp {
  readonly AppId: string;
}
export interface DeleteInstance {
  readonly InstanceId: string;
  readonly DeleteElasticIp?: boolean;
  readonly DeleteVolumes?: boolean;
}
export interface DeleteLayer {
  readonly LayerId: string;
}
export interface DeleteStack {
  readonly StackId: string;
}
export interface DeleteUserProfile {
  readonly IamUserArn: string;
}
export interface DeregisterEcsCluster {
  readonly EcsClusterArn: string;
}
export interface DeregisterElasticIp {
  readonly ElasticIp: string;
}
export interface DeregisterInstance {
  readonly InstanceId: string;
}
export interface DeregisterRdsDbInstance {
  readonly RdsDbInstanceArn: string;
}
export interface DeregisterVolume {
  readonly VolumeId: string;
}
export interface DescribeAgentVersions {
  readonly StackId?: string;
  readonly ConfigurationManager?: StackConfigurationManager;
}
export interface DescribeApps {
  readonly StackId?: string;
  readonly AppIds?: [];
}
export interface DescribeCommands {
  readonly DeploymentId?: string;
  readonly InstanceId?: string;
  readonly CommandIds?: [];
}
export interface DescribeDeployments {
  readonly StackId?: string;
  readonly AppId?: string;
  readonly DeploymentIds?: [];
}
export interface DescribeEcsClusters {
  readonly EcsClusterArns?: [];
  readonly StackId?: string;
  readonly NextToken?: string;
  readonly MaxResults?: number;
}
export interface DescribeElasticIps {
  readonly InstanceId?: string;
  readonly StackId?: string;
  readonly Ips?: [];
}
export interface DescribeElasticLoadBalancers {
  readonly StackId?: string;
  readonly LayerIds?: [];
}
export interface DescribeInstances {
  readonly StackId?: string;
  readonly LayerId?: string;
  readonly InstanceIds?: [];
}
export interface DescribeLayers {
  readonly StackId?: string;
  readonly LayerIds?: [];
}
export interface DescribeLoadBasedAutoScaling {
  readonly LayerIds: [];
}
export interface DescribePermissions {
  readonly IamUserArn?: string;
  readonly StackId?: string;
}
export interface DescribeRaidArrays {
  readonly InstanceId?: string;
  readonly StackId?: string;
  readonly RaidArrayIds?: [];
}
export interface DescribeRdsDbInstances {
  readonly StackId: string;
  readonly RdsDbInstanceArns?: [];
}
export interface DescribeServiceErrors {
  readonly StackId?: string;
  readonly InstanceId?: string;
  readonly ServiceErrorIds?: [];
}
export interface DescribeStackProvisioningParameters {
  readonly StackId: string;
}
export interface DescribeStackSummary {
  readonly StackId: string;
}
export interface DescribeStacks {
  readonly StackIds?: [];
}
export interface DescribeTimeBasedAutoScaling {
  readonly InstanceIds: [];
}
export interface DescribeUserProfiles {
  readonly IamUserArns?: [];
}
export interface DescribeVolumes {
  readonly InstanceId?: string;
  readonly StackId?: string;
  readonly RaidArrayId?: string;
  readonly VolumeIds?: [];
}
export interface DetachElasticLoadBalancer {
  readonly ElasticLoadBalancerName: string;
  readonly LayerId: string;
}
export interface DisassociateElasticIp {
  readonly ElasticIp: string;
}
export interface GetHostnameSuggestion {
  readonly LayerId: string;
}
export interface GrantAccess {
  readonly InstanceId: string;
  readonly ValidForInMinutes?: number;
}
export interface ListTags {
  readonly ResourceArn: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}
export interface RebootInstance {
  readonly InstanceId: string;
}
export interface RegisterEcsCluster {
  readonly EcsClusterArn: string;
  readonly StackId: string;
}
export interface RegisterElasticIp {
  readonly ElasticIp: string;
  readonly StackId: string;
}
export interface RegisterInstance {
  readonly StackId: string;
  readonly Hostname?: string;
  readonly PublicIp?: string;
  readonly PrivateIp?: string;
  readonly RsaPublicKey?: string;
  readonly RsaPublicKeyFingerprint?: string;
  readonly InstanceIdentity?: InstanceIdentity;
}
export interface RegisterRdsDbInstance {
  readonly StackId: string;
  readonly RdsDbInstanceArn: string;
  readonly DbUser: string;
  readonly DbPassword: string;
}
export interface RegisterVolume {
  readonly Ec2VolumeId?: string;
  readonly StackId: string;
}
export interface SetLoadBasedAutoScaling {
  readonly LayerId: string;
  readonly Enable?: boolean;
  readonly UpScaling?: AutoScalingThresholds;
  readonly DownScaling?: AutoScalingThresholds;
}
export interface SetPermission {
  readonly StackId: string;
  readonly IamUserArn: string;
  readonly AllowSsh?: boolean;
  readonly AllowSudo?: boolean;
  readonly Level?: string;
}
export interface SetTimeBasedAutoScaling {
  readonly InstanceId: string;
  readonly AutoScalingSchedule?: WeeklyAutoScalingSchedule;
}
export interface StartInstance {
  readonly InstanceId: string;
}
export interface StartStack {
  readonly StackId: string;
}
export interface StopInstance {
  readonly InstanceId: string;
  readonly Force?: boolean;
}
export interface StopStack {
  readonly StackId: string;
}
export interface TagResource {
  readonly ResourceArn: string;
  readonly Tags: {[key: string]: any};
}
export interface UnassignInstance {
  readonly InstanceId: string;
}
export interface UnassignVolume {
  readonly VolumeId: string;
}
export interface UntagResource {
  readonly ResourceArn: string;
  readonly TagKeys: [];
}
export interface UpdateApp {
  readonly AppId: string;
  readonly Name?: string;
  readonly Description?: string;
  readonly DataSources?: [];
  readonly Type?: string;
  readonly AppSource?: Source;
  readonly Domains?: [];
  readonly EnableSsl?: boolean;
  readonly SslConfiguration?: SslConfiguration;
  readonly Attributes?: {[key: string]: any};
  readonly Environment?: [];
}
export interface UpdateElasticIp {
  readonly ElasticIp: string;
  readonly Name?: string;
}
export interface UpdateInstance {
  readonly InstanceId: string;
  readonly LayerIds?: [];
  readonly InstanceType?: string;
  readonly AutoScalingType?: string;
  readonly Hostname?: string;
  readonly Os?: string;
  readonly AmiId?: string;
  readonly SshKeyName?: string;
  readonly Architecture?: string;
  readonly InstallUpdatesOnBoot?: boolean;
  readonly EbsOptimized?: boolean;
  readonly AgentVersion?: string;
}
export interface UpdateLayer {
  readonly LayerId: string;
  readonly Name?: string;
  readonly Shortname?: string;
  readonly Attributes?: {[key: string]: any};
  readonly CloudWatchLogsConfiguration?: CloudWatchLogsConfiguration;
  readonly CustomInstanceProfileArn?: string;
  readonly CustomJson?: string;
  readonly CustomSecurityGroupIds?: [];
  readonly Packages?: [];
  readonly VolumeConfigurations?: [];
  readonly EnableAutoHealing?: boolean;
  readonly AutoAssignElasticIps?: boolean;
  readonly AutoAssignPublicIps?: boolean;
  readonly CustomRecipes?: Recipes;
  readonly InstallUpdatesOnBoot?: boolean;
  readonly UseEbsOptimizedInstances?: boolean;
  readonly LifecycleEventConfiguration?: LifecycleEventConfiguration;
}
export interface UpdateMyUserProfile {
  readonly SshPublicKey?: string;
}
export interface UpdateRdsDbInstance {
  readonly RdsDbInstanceArn: string;
  readonly DbUser?: string;
  readonly DbPassword?: string;
}
export interface UpdateStack {
  readonly StackId: string;
  readonly Name?: string;
  readonly Attributes?: {[key: string]: any};
  readonly ServiceRoleArn?: string;
  readonly DefaultInstanceProfileArn?: string;
  readonly DefaultOs?: string;
  readonly HostnameTheme?: string;
  readonly DefaultAvailabilityZone?: string;
  readonly DefaultSubnetId?: string;
  readonly CustomJson?: string;
  readonly ConfigurationManager?: StackConfigurationManager;
  readonly ChefConfiguration?: ChefConfiguration;
  readonly UseCustomCookbooks?: boolean;
  readonly CustomCookbooksSource?: Source;
  readonly DefaultSshKeyName?: string;
  readonly DefaultRootDeviceType?: string;
  readonly UseOpsworksSecurityGroups?: boolean;
  readonly AgentVersion?: string;
}
export interface UpdateUserProfile {
  readonly IamUserArn: string;
  readonly SshUsername?: string;
  readonly SshPublicKey?: string;
  readonly AllowSelfManagement?: boolean;
}
export interface UpdateVolume {
  readonly VolumeId: string;
  readonly Name?: string;
  readonly MountPoint?: string;
}



interface AgentVersion {
  readonly Version: string;
  readonly ConfigurationManager: StackConfigurationManager;
}

interface App {
  readonly AppId: string;
  readonly StackId: string;
  readonly Shortname: string;
  readonly Name: string;
  readonly Description: string;
  readonly DataSources: [];
  readonly Type: string;
  readonly AppSource: Source;
  readonly Domains: [];
  readonly EnableSsl: boolean;
  readonly SslConfiguration: SslConfiguration;
  readonly Attributes: {[key: string]: any};
  readonly CreatedAt: string;
  readonly Environment: [];
}

interface AssignInstanceRequest {
  readonly InstanceId: string;
  readonly LayerIds: [];
}

interface AssignVolumeRequest {
  readonly VolumeId: string;
  readonly InstanceId: string;
}

interface AssociateElasticIpRequest {
  readonly ElasticIp: string;
  readonly InstanceId: string;
}

interface AttachElasticLoadBalancerRequest {
  readonly ElasticLoadBalancerName: string;
  readonly LayerId: string;
}

interface AutoScalingThresholds {
  readonly InstanceCount: number;
  readonly ThresholdsWaitTime: number;
  readonly IgnoreMetricsTime: number;
  readonly CpuThreshold: unknown;
  readonly MemoryThreshold: unknown;
  readonly LoadThreshold: unknown;
  readonly Alarms: [];
}

interface BlockDeviceMapping {
  readonly DeviceName: string;
  readonly NoDevice: string;
  readonly VirtualName: string;
  readonly Ebs: EbsBlockDevice;
}

interface ChefConfiguration {
  readonly ManageBerkshelf: boolean;
  readonly BerkshelfVersion: string;
}

interface CloneStackRequest {
  readonly SourceStackId: string;
  readonly Name: string;
  readonly Region: string;
  readonly VpcId: string;
  readonly Attributes: {[key: string]: any};
  readonly ServiceRoleArn: string;
  readonly DefaultInstanceProfileArn: string;
  readonly DefaultOs: string;
  readonly HostnameTheme: string;
  readonly DefaultAvailabilityZone: string;
  readonly DefaultSubnetId: string;
  readonly CustomJson: string;
  readonly ConfigurationManager: StackConfigurationManager;
  readonly ChefConfiguration: ChefConfiguration;
  readonly UseCustomCookbooks: boolean;
  readonly UseOpsworksSecurityGroups: boolean;
  readonly CustomCookbooksSource: Source;
  readonly DefaultSshKeyName: string;
  readonly ClonePermissions: boolean;
  readonly CloneAppIds: [];
  readonly DefaultRootDeviceType: string;
  readonly AgentVersion: string;
}

interface CloneStackResult {
  readonly StackId: string;
}

interface CloudWatchLogsConfiguration {
  readonly Enabled: boolean;
  readonly LogStreams: [];
}

interface CloudWatchLogsLogStream {
  readonly LogGroupName: string;
  readonly DatetimeFormat: string;
  readonly TimeZone: string;
  readonly File: string;
  readonly FileFingerprintLines: string;
  readonly MultiLineStartPattern: string;
  readonly InitialPosition: string;
  readonly Encoding: string;
  readonly BufferDuration: number;
  readonly BatchCount: number;
  readonly BatchSize: number;
}

interface Command {
  readonly CommandId: string;
  readonly InstanceId: string;
  readonly DeploymentId: string;
  readonly CreatedAt: string;
  readonly AcknowledgedAt: string;
  readonly CompletedAt: string;
  readonly Status: string;
  readonly ExitCode: number;
  readonly LogUrl: string;
  readonly Type: string;
}

interface CreateAppRequest {
  readonly StackId: string;
  readonly Shortname: string;
  readonly Name: string;
  readonly Description: string;
  readonly DataSources: [];
  readonly Type: string;
  readonly AppSource: Source;
  readonly Domains: [];
  readonly EnableSsl: boolean;
  readonly SslConfiguration: SslConfiguration;
  readonly Attributes: {[key: string]: any};
  readonly Environment: [];
}

interface CreateAppResult {
  readonly AppId: string;
}

interface CreateDeploymentRequest {
  readonly StackId: string;
  readonly AppId: string;
  readonly InstanceIds: [];
  readonly LayerIds: [];
  readonly Command: DeploymentCommand;
  readonly Comment: string;
  readonly CustomJson: string;
}

interface CreateDeploymentResult {
  readonly DeploymentId: string;
}

interface CreateInstanceRequest {
  readonly StackId: string;
  readonly LayerIds: [];
  readonly InstanceType: string;
  readonly AutoScalingType: string;
  readonly Hostname: string;
  readonly Os: string;
  readonly AmiId: string;
  readonly SshKeyName: string;
  readonly AvailabilityZone: string;
  readonly VirtualizationType: string;
  readonly SubnetId: string;
  readonly Architecture: string;
  readonly RootDeviceType: string;
  readonly BlockDeviceMappings: [];
  readonly InstallUpdatesOnBoot: boolean;
  readonly EbsOptimized: boolean;
  readonly AgentVersion: string;
  readonly Tenancy: string;
}

interface CreateInstanceResult {
  readonly InstanceId: string;
}

interface CreateLayerRequest {
  readonly StackId: string;
  readonly Type: string;
  readonly Name: string;
  readonly Shortname: string;
  readonly Attributes: {[key: string]: any};
  readonly CloudWatchLogsConfiguration: CloudWatchLogsConfiguration;
  readonly CustomInstanceProfileArn: string;
  readonly CustomJson: string;
  readonly CustomSecurityGroupIds: [];
  readonly Packages: [];
  readonly VolumeConfigurations: [];
  readonly EnableAutoHealing: boolean;
  readonly AutoAssignElasticIps: boolean;
  readonly AutoAssignPublicIps: boolean;
  readonly CustomRecipes: Recipes;
  readonly InstallUpdatesOnBoot: boolean;
  readonly UseEbsOptimizedInstances: boolean;
  readonly LifecycleEventConfiguration: LifecycleEventConfiguration;
}

interface CreateLayerResult {
  readonly LayerId: string;
}

interface CreateStackRequest {
  readonly Name: string;
  readonly Region: string;
  readonly VpcId: string;
  readonly Attributes: {[key: string]: any};
  readonly ServiceRoleArn: string;
  readonly DefaultInstanceProfileArn: string;
  readonly DefaultOs: string;
  readonly HostnameTheme: string;
  readonly DefaultAvailabilityZone: string;
  readonly DefaultSubnetId: string;
  readonly CustomJson: string;
  readonly ConfigurationManager: StackConfigurationManager;
  readonly ChefConfiguration: ChefConfiguration;
  readonly UseCustomCookbooks: boolean;
  readonly UseOpsworksSecurityGroups: boolean;
  readonly CustomCookbooksSource: Source;
  readonly DefaultSshKeyName: string;
  readonly DefaultRootDeviceType: string;
  readonly AgentVersion: string;
}

interface CreateStackResult {
  readonly StackId: string;
}

interface CreateUserProfileRequest {
  readonly IamUserArn: string;
  readonly SshUsername: string;
  readonly SshPublicKey: string;
  readonly AllowSelfManagement: boolean;
}

interface CreateUserProfileResult {
  readonly IamUserArn: string;
}

interface DataSource {
  readonly Type: string;
  readonly Arn: string;
  readonly DatabaseName: string;
}

interface DeleteAppRequest {
  readonly AppId: string;
}

interface DeleteInstanceRequest {
  readonly InstanceId: string;
  readonly DeleteElasticIp: boolean;
  readonly DeleteVolumes: boolean;
}

interface DeleteLayerRequest {
  readonly LayerId: string;
}

interface DeleteStackRequest {
  readonly StackId: string;
}

interface DeleteUserProfileRequest {
  readonly IamUserArn: string;
}

interface Deployment {
  readonly DeploymentId: string;
  readonly StackId: string;
  readonly AppId: string;
  readonly CreatedAt: string;
  readonly CompletedAt: string;
  readonly Duration: number;
  readonly IamUserArn: string;
  readonly Comment: string;
  readonly Command: DeploymentCommand;
  readonly Status: string;
  readonly CustomJson: string;
  readonly InstanceIds: [];
}

interface DeploymentCommand {
  readonly Name: string;
  readonly Args: {[key: string]: any};
}

interface DeregisterEcsClusterRequest {
  readonly EcsClusterArn: string;
}

interface DeregisterElasticIpRequest {
  readonly ElasticIp: string;
}

interface DeregisterInstanceRequest {
  readonly InstanceId: string;
}

interface DeregisterRdsDbInstanceRequest {
  readonly RdsDbInstanceArn: string;
}

interface DeregisterVolumeRequest {
  readonly VolumeId: string;
}

interface DescribeAgentVersionsRequest {
  readonly StackId: string;
  readonly ConfigurationManager: StackConfigurationManager;
}

interface DescribeAgentVersionsResult {
  readonly AgentVersions: [];
}

interface DescribeAppsRequest {
  readonly StackId: string;
  readonly AppIds: [];
}

interface DescribeAppsResult {
  readonly Apps: [];
}

interface DescribeCommandsRequest {
  readonly DeploymentId: string;
  readonly InstanceId: string;
  readonly CommandIds: [];
}

interface DescribeCommandsResult {
  readonly Commands: [];
}

interface DescribeDeploymentsRequest {
  readonly StackId: string;
  readonly AppId: string;
  readonly DeploymentIds: [];
}

interface DescribeDeploymentsResult {
  readonly Deployments: [];
}

interface DescribeEcsClustersRequest {
  readonly EcsClusterArns: [];
  readonly StackId: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface DescribeEcsClustersResult {
  readonly EcsClusters: [];
  readonly NextToken: string;
}

interface DescribeElasticIpsRequest {
  readonly InstanceId: string;
  readonly StackId: string;
  readonly Ips: [];
}

interface DescribeElasticIpsResult {
  readonly ElasticIps: [];
}

interface DescribeElasticLoadBalancersRequest {
  readonly StackId: string;
  readonly LayerIds: [];
}

interface DescribeElasticLoadBalancersResult {
  readonly ElasticLoadBalancers: [];
}

interface DescribeInstancesRequest {
  readonly StackId: string;
  readonly LayerId: string;
  readonly InstanceIds: [];
}

interface DescribeInstancesResult {
  readonly Instances: [];
}

interface DescribeLayersRequest {
  readonly StackId: string;
  readonly LayerIds: [];
}

interface DescribeLayersResult {
  readonly Layers: [];
}

interface DescribeLoadBasedAutoScalingRequest {
  readonly LayerIds: [];
}

interface DescribeLoadBasedAutoScalingResult {
  readonly LoadBasedAutoScalingConfigurations: [];
}

interface DescribeMyUserProfileResult {
  readonly UserProfile: SelfUserProfile;
}

interface DescribeOperatingSystemsResponse {
  readonly OperatingSystems: [];
}

interface DescribePermissionsRequest {
  readonly IamUserArn: string;
  readonly StackId: string;
}

interface DescribePermissionsResult {
  readonly Permissions: [];
}

interface DescribeRaidArraysRequest {
  readonly InstanceId: string;
  readonly StackId: string;
  readonly RaidArrayIds: [];
}

interface DescribeRaidArraysResult {
  readonly RaidArrays: [];
}

interface DescribeRdsDbInstancesRequest {
  readonly StackId: string;
  readonly RdsDbInstanceArns: [];
}

interface DescribeRdsDbInstancesResult {
  readonly RdsDbInstances: [];
}

interface DescribeServiceErrorsRequest {
  readonly StackId: string;
  readonly InstanceId: string;
  readonly ServiceErrorIds: [];
}

interface DescribeServiceErrorsResult {
  readonly ServiceErrors: [];
}

interface DescribeStackProvisioningParametersRequest {
  readonly StackId: string;
}

interface DescribeStackProvisioningParametersResult {
  readonly AgentInstallerUrl: string;
  readonly Parameters: {[key: string]: any};
}

interface DescribeStackSummaryRequest {
  readonly StackId: string;
}

interface DescribeStackSummaryResult {
  readonly StackSummary: StackSummary;
}

interface DescribeStacksRequest {
  readonly StackIds: [];
}

interface DescribeStacksResult {
  readonly Stacks: [];
}

interface DescribeTimeBasedAutoScalingRequest {
  readonly InstanceIds: [];
}

interface DescribeTimeBasedAutoScalingResult {
  readonly TimeBasedAutoScalingConfigurations: [];
}

interface DescribeUserProfilesRequest {
  readonly IamUserArns: [];
}

interface DescribeUserProfilesResult {
  readonly UserProfiles: [];
}

interface DescribeVolumesRequest {
  readonly InstanceId: string;
  readonly StackId: string;
  readonly RaidArrayId: string;
  readonly VolumeIds: [];
}

interface DescribeVolumesResult {
  readonly Volumes: [];
}

interface DetachElasticLoadBalancerRequest {
  readonly ElasticLoadBalancerName: string;
  readonly LayerId: string;
}

interface DisassociateElasticIpRequest {
  readonly ElasticIp: string;
}

interface EbsBlockDevice {
  readonly SnapshotId: string;
  readonly Iops: number;
  readonly VolumeSize: number;
  readonly VolumeType: string;
  readonly DeleteOnTermination: boolean;
}

interface EcsCluster {
  readonly EcsClusterArn: string;
  readonly EcsClusterName: string;
  readonly StackId: string;
  readonly RegisteredAt: string;
}

interface ElasticIp {
  readonly Ip: string;
  readonly Name: string;
  readonly Domain: string;
  readonly Region: string;
  readonly InstanceId: string;
}

interface ElasticLoadBalancer {
  readonly ElasticLoadBalancerName: string;
  readonly Region: string;
  readonly DnsName: string;
  readonly StackId: string;
  readonly LayerId: string;
  readonly VpcId: string;
  readonly AvailabilityZones: [];
  readonly SubnetIds: [];
  readonly Ec2InstanceIds: [];
}

interface EnvironmentVariable {
  readonly Key: string;
  readonly Value: string;
  readonly Secure: boolean;
}

interface GetHostnameSuggestionRequest {
  readonly LayerId: string;
}

interface GetHostnameSuggestionResult {
  readonly LayerId: string;
  readonly Hostname: string;
}

interface GrantAccessRequest {
  readonly InstanceId: string;
  readonly ValidForInMinutes: number;
}

interface GrantAccessResult {
  readonly TemporaryCredential: TemporaryCredential;
}

interface Instance {
  readonly AgentVersion: string;
  readonly AmiId: string;
  readonly Architecture: string;
  readonly Arn: string;
  readonly AutoScalingType: string;
  readonly AvailabilityZone: string;
  readonly BlockDeviceMappings: [];
  readonly CreatedAt: string;
  readonly EbsOptimized: boolean;
  readonly Ec2InstanceId: string;
  readonly EcsClusterArn: string;
  readonly EcsContainerInstanceArn: string;
  readonly ElasticIp: string;
  readonly Hostname: string;
  readonly InfrastructureClass: string;
  readonly InstallUpdatesOnBoot: boolean;
  readonly InstanceId: string;
  readonly InstanceProfileArn: string;
  readonly InstanceType: string;
  readonly LastServiceErrorId: string;
  readonly LayerIds: [];
  readonly Os: string;
  readonly Platform: string;
  readonly PrivateDns: string;
  readonly PrivateIp: string;
  readonly PublicDns: string;
  readonly PublicIp: string;
  readonly RegisteredBy: string;
  readonly ReportedAgentVersion: string;
  readonly ReportedOs: ReportedOs;
  readonly RootDeviceType: string;
  readonly RootDeviceVolumeId: string;
  readonly SecurityGroupIds: [];
  readonly SshHostDsaKeyFingerprint: string;
  readonly SshHostRsaKeyFingerprint: string;
  readonly SshKeyName: string;
  readonly StackId: string;
  readonly Status: string;
  readonly SubnetId: string;
  readonly Tenancy: string;
  readonly VirtualizationType: string;
}

interface InstanceIdentity {
  readonly Document: string;
  readonly Signature: string;
}

interface InstancesCount {
  readonly Assigning: number;
  readonly Booting: number;
  readonly ConnectionLost: number;
  readonly Deregistering: number;
  readonly Online: number;
  readonly Pending: number;
  readonly Rebooting: number;
  readonly Registered: number;
  readonly Registering: number;
  readonly Requested: number;
  readonly RunningSetup: number;
  readonly SetupFailed: number;
  readonly ShuttingDown: number;
  readonly StartFailed: number;
  readonly StopFailed: number;
  readonly Stopped: number;
  readonly Stopping: number;
  readonly Terminated: number;
  readonly Terminating: number;
  readonly Unassigning: number;
}

interface Layer {
  readonly Arn: string;
  readonly StackId: string;
  readonly LayerId: string;
  readonly Type: string;
  readonly Name: string;
  readonly Shortname: string;
  readonly Attributes: {[key: string]: any};
  readonly CloudWatchLogsConfiguration: CloudWatchLogsConfiguration;
  readonly CustomInstanceProfileArn: string;
  readonly CustomJson: string;
  readonly CustomSecurityGroupIds: [];
  readonly DefaultSecurityGroupNames: [];
  readonly Packages: [];
  readonly VolumeConfigurations: [];
  readonly EnableAutoHealing: boolean;
  readonly AutoAssignElasticIps: boolean;
  readonly AutoAssignPublicIps: boolean;
  readonly DefaultRecipes: Recipes;
  readonly CustomRecipes: Recipes;
  readonly CreatedAt: string;
  readonly InstallUpdatesOnBoot: boolean;
  readonly UseEbsOptimizedInstances: boolean;
  readonly LifecycleEventConfiguration: LifecycleEventConfiguration;
}

interface LifecycleEventConfiguration {
  readonly Shutdown: ShutdownEventConfiguration;
}

interface ListTagsRequest {
  readonly ResourceArn: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface ListTagsResult {
  readonly Tags: {[key: string]: any};
  readonly NextToken: string;
}

interface LoadBasedAutoScalingConfiguration {
  readonly LayerId: string;
  readonly Enable: boolean;
  readonly UpScaling: AutoScalingThresholds;
  readonly DownScaling: AutoScalingThresholds;
}

interface OperatingSystem {
  readonly Name: string;
  readonly Id: string;
  readonly Type: string;
  readonly ConfigurationManagers: [];
  readonly ReportedName: string;
  readonly ReportedVersion: string;
  readonly Supported: boolean;
}

interface OperatingSystemConfigurationManager {
  readonly Name: string;
  readonly Version: string;
}

interface Permission {
  readonly StackId: string;
  readonly IamUserArn: string;
  readonly AllowSsh: boolean;
  readonly AllowSudo: boolean;
  readonly Level: string;
}

interface RaidArray {
  readonly RaidArrayId: string;
  readonly InstanceId: string;
  readonly Name: string;
  readonly RaidLevel: number;
  readonly NumberOfDisks: number;
  readonly Size: number;
  readonly Device: string;
  readonly MountPoint: string;
  readonly AvailabilityZone: string;
  readonly CreatedAt: string;
  readonly StackId: string;
  readonly VolumeType: string;
  readonly Iops: number;
}

interface RdsDbInstance {
  readonly RdsDbInstanceArn: string;
  readonly DbInstanceIdentifier: string;
  readonly DbUser: string;
  readonly DbPassword: string;
  readonly Region: string;
  readonly Address: string;
  readonly Engine: string;
  readonly StackId: string;
  readonly MissingOnRds: boolean;
}

interface RebootInstanceRequest {
  readonly InstanceId: string;
}

interface Recipes {
  readonly Setup: [];
  readonly Configure: [];
  readonly Deploy: [];
  readonly Undeploy: [];
  readonly Shutdown: [];
}

interface RegisterEcsClusterRequest {
  readonly EcsClusterArn: string;
  readonly StackId: string;
}

interface RegisterEcsClusterResult {
  readonly EcsClusterArn: string;
}

interface RegisterElasticIpRequest {
  readonly ElasticIp: string;
  readonly StackId: string;
}

interface RegisterElasticIpResult {
  readonly ElasticIp: string;
}

interface RegisterInstanceRequest {
  readonly StackId: string;
  readonly Hostname: string;
  readonly PublicIp: string;
  readonly PrivateIp: string;
  readonly RsaPublicKey: string;
  readonly RsaPublicKeyFingerprint: string;
  readonly InstanceIdentity: InstanceIdentity;
}

interface RegisterInstanceResult {
  readonly InstanceId: string;
}

interface RegisterRdsDbInstanceRequest {
  readonly StackId: string;
  readonly RdsDbInstanceArn: string;
  readonly DbUser: string;
  readonly DbPassword: string;
}

interface RegisterVolumeRequest {
  readonly Ec2VolumeId: string;
  readonly StackId: string;
}

interface RegisterVolumeResult {
  readonly VolumeId: string;
}

interface ReportedOs {
  readonly Family: string;
  readonly Name: string;
  readonly Version: string;
}

interface ResourceNotFoundException {
  readonly message: string;
}

interface SelfUserProfile {
  readonly IamUserArn: string;
  readonly Name: string;
  readonly SshUsername: string;
  readonly SshPublicKey: string;
}

interface ServiceError {
  readonly ServiceErrorId: string;
  readonly StackId: string;
  readonly InstanceId: string;
  readonly Type: string;
  readonly Message: string;
  readonly CreatedAt: string;
}

interface SetLoadBasedAutoScalingRequest {
  readonly LayerId: string;
  readonly Enable: boolean;
  readonly UpScaling: AutoScalingThresholds;
  readonly DownScaling: AutoScalingThresholds;
}

interface SetPermissionRequest {
  readonly StackId: string;
  readonly IamUserArn: string;
  readonly AllowSsh: boolean;
  readonly AllowSudo: boolean;
  readonly Level: string;
}

interface SetTimeBasedAutoScalingRequest {
  readonly InstanceId: string;
  readonly AutoScalingSchedule: WeeklyAutoScalingSchedule;
}

interface ShutdownEventConfiguration {
  readonly ExecutionTimeout: number;
  readonly DelayUntilElbConnectionsDrained: boolean;
}

interface Source {
  readonly Type: string;
  readonly Url: string;
  readonly Username: string;
  readonly Password: string;
  readonly SshKey: string;
  readonly Revision: string;
}

interface SslConfiguration {
  readonly Certificate: string;
  readonly PrivateKey: string;
  readonly Chain: string;
}

interface Stack {
  readonly StackId: string;
  readonly Name: string;
  readonly Arn: string;
  readonly Region: string;
  readonly VpcId: string;
  readonly Attributes: {[key: string]: any};
  readonly ServiceRoleArn: string;
  readonly DefaultInstanceProfileArn: string;
  readonly DefaultOs: string;
  readonly HostnameTheme: string;
  readonly DefaultAvailabilityZone: string;
  readonly DefaultSubnetId: string;
  readonly CustomJson: string;
  readonly ConfigurationManager: StackConfigurationManager;
  readonly ChefConfiguration: ChefConfiguration;
  readonly UseCustomCookbooks: boolean;
  readonly UseOpsworksSecurityGroups: boolean;
  readonly CustomCookbooksSource: Source;
  readonly DefaultSshKeyName: string;
  readonly CreatedAt: string;
  readonly DefaultRootDeviceType: string;
  readonly AgentVersion: string;
}

interface StackConfigurationManager {
  readonly Name: string;
  readonly Version: string;
}

interface StackSummary {
  readonly StackId: string;
  readonly Name: string;
  readonly Arn: string;
  readonly LayersCount: number;
  readonly AppsCount: number;
  readonly InstancesCount: InstancesCount;
}

interface StartInstanceRequest {
  readonly InstanceId: string;
}

interface StartStackRequest {
  readonly StackId: string;
}

interface StopInstanceRequest {
  readonly InstanceId: string;
  readonly Force: boolean;
}

interface StopStackRequest {
  readonly StackId: string;
}

interface TagResourceRequest {
  readonly ResourceArn: string;
  readonly Tags: {[key: string]: any};
}

interface TemporaryCredential {
  readonly Username: string;
  readonly Password: string;
  readonly ValidForInMinutes: number;
  readonly InstanceId: string;
}

interface TimeBasedAutoScalingConfiguration {
  readonly InstanceId: string;
  readonly AutoScalingSchedule: WeeklyAutoScalingSchedule;
}

interface UnassignInstanceRequest {
  readonly InstanceId: string;
}

interface UnassignVolumeRequest {
  readonly VolumeId: string;
}

interface UntagResourceRequest {
  readonly ResourceArn: string;
  readonly TagKeys: [];
}

interface UpdateAppRequest {
  readonly AppId: string;
  readonly Name: string;
  readonly Description: string;
  readonly DataSources: [];
  readonly Type: string;
  readonly AppSource: Source;
  readonly Domains: [];
  readonly EnableSsl: boolean;
  readonly SslConfiguration: SslConfiguration;
  readonly Attributes: {[key: string]: any};
  readonly Environment: [];
}

interface UpdateElasticIpRequest {
  readonly ElasticIp: string;
  readonly Name: string;
}

interface UpdateInstanceRequest {
  readonly InstanceId: string;
  readonly LayerIds: [];
  readonly InstanceType: string;
  readonly AutoScalingType: string;
  readonly Hostname: string;
  readonly Os: string;
  readonly AmiId: string;
  readonly SshKeyName: string;
  readonly Architecture: string;
  readonly InstallUpdatesOnBoot: boolean;
  readonly EbsOptimized: boolean;
  readonly AgentVersion: string;
}

interface UpdateLayerRequest {
  readonly LayerId: string;
  readonly Name: string;
  readonly Shortname: string;
  readonly Attributes: {[key: string]: any};
  readonly CloudWatchLogsConfiguration: CloudWatchLogsConfiguration;
  readonly CustomInstanceProfileArn: string;
  readonly CustomJson: string;
  readonly CustomSecurityGroupIds: [];
  readonly Packages: [];
  readonly VolumeConfigurations: [];
  readonly EnableAutoHealing: boolean;
  readonly AutoAssignElasticIps: boolean;
  readonly AutoAssignPublicIps: boolean;
  readonly CustomRecipes: Recipes;
  readonly InstallUpdatesOnBoot: boolean;
  readonly UseEbsOptimizedInstances: boolean;
  readonly LifecycleEventConfiguration: LifecycleEventConfiguration;
}

interface UpdateMyUserProfileRequest {
  readonly SshPublicKey: string;
}

interface UpdateRdsDbInstanceRequest {
  readonly RdsDbInstanceArn: string;
  readonly DbUser: string;
  readonly DbPassword: string;
}

interface UpdateStackRequest {
  readonly StackId: string;
  readonly Name: string;
  readonly Attributes: {[key: string]: any};
  readonly ServiceRoleArn: string;
  readonly DefaultInstanceProfileArn: string;
  readonly DefaultOs: string;
  readonly HostnameTheme: string;
  readonly DefaultAvailabilityZone: string;
  readonly DefaultSubnetId: string;
  readonly CustomJson: string;
  readonly ConfigurationManager: StackConfigurationManager;
  readonly ChefConfiguration: ChefConfiguration;
  readonly UseCustomCookbooks: boolean;
  readonly CustomCookbooksSource: Source;
  readonly DefaultSshKeyName: string;
  readonly DefaultRootDeviceType: string;
  readonly UseOpsworksSecurityGroups: boolean;
  readonly AgentVersion: string;
}

interface UpdateUserProfileRequest {
  readonly IamUserArn: string;
  readonly SshUsername: string;
  readonly SshPublicKey: string;
  readonly AllowSelfManagement: boolean;
}

interface UpdateVolumeRequest {
  readonly VolumeId: string;
  readonly Name: string;
  readonly MountPoint: string;
}

interface UserProfile {
  readonly IamUserArn: string;
  readonly Name: string;
  readonly SshUsername: string;
  readonly SshPublicKey: string;
  readonly AllowSelfManagement: boolean;
}

interface ValidationException {
  readonly message: string;
}

interface Volume {
  readonly VolumeId: string;
  readonly Ec2VolumeId: string;
  readonly Name: string;
  readonly RaidArrayId: string;
  readonly InstanceId: string;
  readonly Status: string;
  readonly Size: number;
  readonly Device: string;
  readonly MountPoint: string;
  readonly Region: string;
  readonly AvailabilityZone: string;
  readonly VolumeType: string;
  readonly Iops: number;
  readonly Encrypted: boolean;
}

interface VolumeConfiguration {
  readonly MountPoint: string;
  readonly RaidLevel: number;
  readonly NumberOfDisks: number;
  readonly Size: number;
  readonly VolumeType: string;
  readonly Iops: number;
  readonly Encrypted: boolean;
}

interface WeeklyAutoScalingSchedule {
  readonly Monday: {[key: string]: any};
  readonly Tuesday: {[key: string]: any};
  readonly Wednesday: {[key: string]: any};
  readonly Thursday: {[key: string]: any};
  readonly Friday: {[key: string]: any};
  readonly Saturday: {[key: string]: any};
  readonly Sunday: {[key: string]: any};
}

