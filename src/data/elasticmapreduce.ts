/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface AddInstanceFleet {
  readonly ClusterId: string;
  readonly InstanceFleet: InstanceFleetConfig;
}
export interface AddInstanceGroups {
  readonly InstanceGroups: [];
  readonly JobFlowId: string;
}
export interface AddJobFlowSteps {
  readonly JobFlowId: string;
  readonly Steps: [];
}
export interface AddTags {
  readonly ResourceId: string;
  readonly Tags: [];
}
export interface CancelSteps {
  readonly ClusterId: string;
  readonly StepIds: [];
  readonly StepCancellationOption?: string;
}
export interface CreateSecurityConfiguration {
  readonly Name: string;
  readonly SecurityConfiguration: string;
}
export interface CreateStudio {
  readonly Name: string;
  readonly Description?: string;
  readonly AuthMode: string;
  readonly VpcId: string;
  readonly SubnetIds: [];
  readonly ServiceRole: string;
  readonly UserRole?: string;
  readonly WorkspaceSecurityGroupId: string;
  readonly EngineSecurityGroupId: string;
  readonly DefaultS3Location: string;
  readonly IdpAuthUrl?: string;
  readonly IdpRelayStateParameterName?: string;
  readonly Tags?: [];
}
export interface CreateStudioSessionMapping {
  readonly StudioId: string;
  readonly IdentityId?: string;
  readonly IdentityName?: string;
  readonly IdentityType: string;
  readonly SessionPolicyArn: string;
}
export interface DeleteSecurityConfiguration {
  readonly Name: string;
}
export interface DeleteStudio {
  readonly StudioId: string;
}
export interface DeleteStudioSessionMapping {
  readonly StudioId: string;
  readonly IdentityId?: string;
  readonly IdentityName?: string;
  readonly IdentityType: string;
}
export interface DescribeCluster {
  readonly ClusterId: string;
}
export interface DescribeJobFlows {
  readonly CreatedAfter?: Date;
  readonly CreatedBefore?: Date;
  readonly JobFlowIds?: [];
  readonly JobFlowStates?: [];
}
export interface DescribeNotebookExecution {
  readonly NotebookExecutionId: string;
}
export interface DescribeReleaseLabel {
  readonly ReleaseLabel?: string;
  readonly NextToken?: string;
  readonly MaxResults?: number;
}
export interface DescribeSecurityConfiguration {
  readonly Name: string;
}
export interface DescribeStep {
  readonly ClusterId: string;
  readonly StepId: string;
}
export interface DescribeStudio {
  readonly StudioId: string;
}
export interface GetAutoTerminationPolicy {
  readonly ClusterId: string;
}
export interface GetBlockPublicAccessConfiguration {
}
export interface GetManagedScalingPolicy {
  readonly ClusterId: string;
}
export interface GetStudioSessionMapping {
  readonly StudioId: string;
  readonly IdentityId?: string;
  readonly IdentityName?: string;
  readonly IdentityType: string;
}
export interface ListBootstrapActions {
  readonly ClusterId: string;
  readonly Marker?: string;
}
export interface ListClusters {
  readonly CreatedAfter?: Date;
  readonly CreatedBefore?: Date;
  readonly ClusterStates?: [];
  readonly Marker?: string;
}
export interface ListInstanceFleets {
  readonly ClusterId: string;
  readonly Marker?: string;
}
export interface ListInstanceGroups {
  readonly ClusterId: string;
  readonly Marker?: string;
}
export interface ListInstances {
  readonly ClusterId: string;
  readonly InstanceGroupId?: string;
  readonly InstanceGroupTypes?: [];
  readonly InstanceFleetId?: string;
  readonly InstanceFleetType?: string;
  readonly InstanceStates?: [];
  readonly Marker?: string;
}
export interface ListNotebookExecutions {
  readonly EditorId?: string;
  readonly Status?: string;
  readonly From?: Date;
  readonly To?: Date;
  readonly Marker?: string;
}
export interface ListReleaseLabels {
  readonly Filters?: ReleaseLabelFilter;
  readonly NextToken?: string;
  readonly MaxResults?: number;
}
export interface ListSecurityConfigurations {
  readonly Marker?: string;
}
export interface ListSteps {
  readonly ClusterId: string;
  readonly StepStates?: [];
  readonly StepIds?: [];
  readonly Marker?: string;
}
export interface ListStudioSessionMappings {
  readonly StudioId?: string;
  readonly IdentityType?: string;
  readonly Marker?: string;
}
export interface ListStudios {
  readonly Marker?: string;
}
export interface ModifyCluster {
  readonly ClusterId: string;
  readonly StepConcurrencyLevel?: number;
}
export interface ModifyInstanceFleet {
  readonly ClusterId: string;
  readonly InstanceFleet: InstanceFleetModifyConfig;
}
export interface ModifyInstanceGroups {
  readonly ClusterId?: string;
  readonly InstanceGroups?: [];
}
export interface PutAutoScalingPolicy {
  readonly ClusterId: string;
  readonly InstanceGroupId: string;
  readonly AutoScalingPolicy: AutoScalingPolicy;
}
export interface PutAutoTerminationPolicy {
  readonly ClusterId: string;
  readonly AutoTerminationPolicy?: AutoTerminationPolicy;
}
export interface PutBlockPublicAccessConfiguration {
  readonly BlockPublicAccessConfiguration: BlockPublicAccessConfiguration;
}
export interface PutManagedScalingPolicy {
  readonly ClusterId: string;
  readonly ManagedScalingPolicy: ManagedScalingPolicy;
}
export interface RemoveAutoScalingPolicy {
  readonly ClusterId: string;
  readonly InstanceGroupId: string;
}
export interface RemoveAutoTerminationPolicy {
  readonly ClusterId: string;
}
export interface RemoveManagedScalingPolicy {
  readonly ClusterId: string;
}
export interface RemoveTags {
  readonly ResourceId: string;
  readonly TagKeys: [];
}
export interface RunJobFlow {
  readonly Name: string;
  readonly LogUri?: string;
  readonly LogEncryptionKmsKeyId?: string;
  readonly AdditionalInfo?: string;
  readonly AmiVersion?: string;
  readonly ReleaseLabel?: string;
  readonly Instances: JobFlowInstancesConfig;
  readonly Steps?: [];
  readonly BootstrapActions?: [];
  readonly SupportedProducts?: [];
  readonly NewSupportedProducts?: [];
  readonly Applications?: [];
  readonly Configurations?: [];
  readonly VisibleToAllUsers?: boolean;
  readonly JobFlowRole?: string;
  readonly ServiceRole?: string;
  readonly Tags?: [];
  readonly SecurityConfiguration?: string;
  readonly AutoScalingRole?: string;
  readonly ScaleDownBehavior?: string;
  readonly CustomAmiId?: string;
  readonly EbsRootVolumeSize?: number;
  readonly RepoUpgradeOnBoot?: string;
  readonly KerberosAttributes?: KerberosAttributes;
  readonly StepConcurrencyLevel?: number;
  readonly ManagedScalingPolicy?: ManagedScalingPolicy;
  readonly PlacementGroupConfigs?: [];
  readonly AutoTerminationPolicy?: AutoTerminationPolicy;
}
export interface SetTerminationProtection {
  readonly JobFlowIds: [];
  readonly TerminationProtected: boolean;
}
export interface SetVisibleToAllUsers {
  readonly JobFlowIds: [];
  readonly VisibleToAllUsers: boolean;
}
export interface StartNotebookExecution {
  readonly EditorId: string;
  readonly RelativePath: string;
  readonly NotebookExecutionName?: string;
  readonly NotebookParams?: string;
  readonly ExecutionEngine: ExecutionEngineConfig;
  readonly ServiceRole: string;
  readonly NotebookInstanceSecurityGroupId?: string;
  readonly Tags?: [];
}
export interface StopNotebookExecution {
  readonly NotebookExecutionId: string;
}
export interface TerminateJobFlows {
  readonly JobFlowIds: [];
}
export interface UpdateStudio {
  readonly StudioId: string;
  readonly Name?: string;
  readonly Description?: string;
  readonly SubnetIds?: [];
  readonly DefaultS3Location?: string;
}
export interface UpdateStudioSessionMapping {
  readonly StudioId: string;
  readonly IdentityId?: string;
  readonly IdentityName?: string;
  readonly IdentityType: string;
  readonly SessionPolicyArn: string;
}



interface AddInstanceFleetInput {
  readonly ClusterId: string;
  readonly InstanceFleet: InstanceFleetConfig;
}

interface AddInstanceFleetOutput {
  readonly ClusterId: string;
  readonly InstanceFleetId: string;
  readonly ClusterArn: string;
}

interface AddInstanceGroupsInput {
  readonly InstanceGroups: [];
  readonly JobFlowId: string;
}

interface AddInstanceGroupsOutput {
  readonly JobFlowId: string;
  readonly InstanceGroupIds: [];
  readonly ClusterArn: string;
}

interface AddJobFlowStepsInput {
  readonly JobFlowId: string;
  readonly Steps: [];
}

interface AddJobFlowStepsOutput {
  readonly StepIds: [];
}

interface AddTagsInput {
  readonly ResourceId: string;
  readonly Tags: [];
}

interface AddTagsOutput {
}

interface Application {
  readonly Name: string;
  readonly Version: string;
  readonly Args: [];
  readonly AdditionalInfo: {[key: string]: any};
}

interface AutoScalingPolicy {
  readonly Constraints: ScalingConstraints;
  readonly Rules: [];
}

interface AutoScalingPolicyDescription {
  readonly Status: AutoScalingPolicyStatus;
  readonly Constraints: ScalingConstraints;
  readonly Rules: [];
}

interface AutoScalingPolicyStateChangeReason {
  readonly Code: string;
  readonly Message: string;
}

interface AutoScalingPolicyStatus {
  readonly State: string;
  readonly StateChangeReason: AutoScalingPolicyStateChangeReason;
}

interface AutoTerminationPolicy {
  readonly IdleTimeout: number;
}

interface BlockPublicAccessConfiguration {
  readonly BlockPublicSecurityGroupRules: boolean;
  readonly PermittedPublicSecurityGroupRuleRanges: [];
}

interface BlockPublicAccessConfigurationMetadata {
  readonly CreationDateTime: Date;
  readonly CreatedByArn: string;
}

interface BootstrapActionConfig {
  readonly Name: string;
  readonly ScriptBootstrapAction: ScriptBootstrapActionConfig;
}

interface BootstrapActionDetail {
  readonly BootstrapActionConfig: BootstrapActionConfig;
}

interface CancelStepsInfo {
  readonly StepId: string;
  readonly Status: string;
  readonly Reason: string;
}

interface CancelStepsInput {
  readonly ClusterId: string;
  readonly StepIds: [];
  readonly StepCancellationOption: string;
}

interface CancelStepsOutput {
  readonly CancelStepsInfoList: [];
}

interface CloudWatchAlarmDefinition {
  readonly ComparisonOperator: string;
  readonly EvaluationPeriods: number;
  readonly MetricName: string;
  readonly Namespace: string;
  readonly Period: number;
  readonly Statistic: string;
  readonly Threshold: unknown;
  readonly Unit: string;
  readonly Dimensions: [];
}

interface Cluster {
  readonly Id: string;
  readonly Name: string;
  readonly Status: ClusterStatus;
  readonly Ec2InstanceAttributes: Ec2InstanceAttributes;
  readonly InstanceCollectionType: string;
  readonly LogUri: string;
  readonly LogEncryptionKmsKeyId: string;
  readonly RequestedAmiVersion: string;
  readonly RunningAmiVersion: string;
  readonly ReleaseLabel: string;
  readonly AutoTerminate: boolean;
  readonly TerminationProtected: boolean;
  readonly VisibleToAllUsers: boolean;
  readonly Applications: [];
  readonly Tags: [];
  readonly ServiceRole: string;
  readonly NormalizedInstanceHours: number;
  readonly MasterPublicDnsName: string;
  readonly Configurations: [];
  readonly SecurityConfiguration: string;
  readonly AutoScalingRole: string;
  readonly ScaleDownBehavior: string;
  readonly CustomAmiId: string;
  readonly EbsRootVolumeSize: number;
  readonly RepoUpgradeOnBoot: string;
  readonly KerberosAttributes: KerberosAttributes;
  readonly ClusterArn: string;
  readonly OutpostArn: string;
  readonly StepConcurrencyLevel: number;
  readonly PlacementGroups: [];
}

interface ClusterStateChangeReason {
  readonly Code: string;
  readonly Message: string;
}

interface ClusterStatus {
  readonly State: string;
  readonly StateChangeReason: ClusterStateChangeReason;
  readonly Timeline: ClusterTimeline;
}

interface ClusterSummary {
  readonly Id: string;
  readonly Name: string;
  readonly Status: ClusterStatus;
  readonly NormalizedInstanceHours: number;
  readonly ClusterArn: string;
  readonly OutpostArn: string;
}

interface ClusterTimeline {
  readonly CreationDateTime: Date;
  readonly ReadyDateTime: Date;
  readonly EndDateTime: Date;
}

interface Command {
  readonly Name: string;
  readonly ScriptPath: string;
  readonly Args: [];
}

interface ComputeLimits {
  readonly UnitType: string;
  readonly MinimumCapacityUnits: number;
  readonly MaximumCapacityUnits: number;
  readonly MaximumOnDemandCapacityUnits: number;
  readonly MaximumCoreCapacityUnits: number;
}

interface Configuration {
  readonly Classification: string;
  readonly Configurations: [];
  readonly Properties: {[key: string]: any};
}

interface CreateSecurityConfigurationInput {
  readonly Name: string;
  readonly SecurityConfiguration: string;
}

interface CreateSecurityConfigurationOutput {
  readonly Name: string;
  readonly CreationDateTime: Date;
}

interface CreateStudioInput {
  readonly Name: string;
  readonly Description: string;
  readonly AuthMode: string;
  readonly VpcId: string;
  readonly SubnetIds: [];
  readonly ServiceRole: string;
  readonly UserRole: string;
  readonly WorkspaceSecurityGroupId: string;
  readonly EngineSecurityGroupId: string;
  readonly DefaultS3Location: string;
  readonly IdpAuthUrl: string;
  readonly IdpRelayStateParameterName: string;
  readonly Tags: [];
}

interface CreateStudioOutput {
  readonly StudioId: string;
  readonly Url: string;
}

interface CreateStudioSessionMappingInput {
  readonly StudioId: string;
  readonly IdentityId: string;
  readonly IdentityName: string;
  readonly IdentityType: string;
  readonly SessionPolicyArn: string;
}

interface DeleteSecurityConfigurationInput {
  readonly Name: string;
}

interface DeleteSecurityConfigurationOutput {
}

interface DeleteStudioInput {
  readonly StudioId: string;
}

interface DeleteStudioSessionMappingInput {
  readonly StudioId: string;
  readonly IdentityId: string;
  readonly IdentityName: string;
  readonly IdentityType: string;
}

interface DescribeClusterInput {
  readonly ClusterId: string;
}

interface DescribeClusterOutput {
  readonly Cluster: Cluster;
}

interface DescribeJobFlowsInput {
  readonly CreatedAfter: Date;
  readonly CreatedBefore: Date;
  readonly JobFlowIds: [];
  readonly JobFlowStates: [];
}

interface DescribeJobFlowsOutput {
  readonly JobFlows: [];
}

interface DescribeNotebookExecutionInput {
  readonly NotebookExecutionId: string;
}

interface DescribeNotebookExecutionOutput {
  readonly NotebookExecution: NotebookExecution;
}

interface DescribeReleaseLabelInput {
  readonly ReleaseLabel: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface DescribeReleaseLabelOutput {
  readonly ReleaseLabel: string;
  readonly Applications: [];
  readonly NextToken: string;
}

interface DescribeSecurityConfigurationInput {
  readonly Name: string;
}

interface DescribeSecurityConfigurationOutput {
  readonly Name: string;
  readonly SecurityConfiguration: string;
  readonly CreationDateTime: Date;
}

interface DescribeStepInput {
  readonly ClusterId: string;
  readonly StepId: string;
}

interface DescribeStepOutput {
  readonly Step: Step;
}

interface DescribeStudioInput {
  readonly StudioId: string;
}

interface DescribeStudioOutput {
  readonly Studio: Studio;
}

interface EbsBlockDevice {
  readonly VolumeSpecification: VolumeSpecification;
  readonly Device: string;
}

interface EbsBlockDeviceConfig {
  readonly VolumeSpecification: VolumeSpecification;
  readonly VolumesPerInstance: number;
}

interface EbsConfiguration {
  readonly EbsBlockDeviceConfigs: [];
  readonly EbsOptimized: boolean;
}

interface EbsVolume {
  readonly Device: string;
  readonly VolumeId: string;
}

interface Ec2InstanceAttributes {
  readonly Ec2KeyName: string;
  readonly Ec2SubnetId: string;
  readonly RequestedEc2SubnetIds: [];
  readonly Ec2AvailabilityZone: string;
  readonly RequestedEc2AvailabilityZones: [];
  readonly IamInstanceProfile: string;
  readonly EmrManagedMasterSecurityGroup: string;
  readonly EmrManagedSlaveSecurityGroup: string;
  readonly ServiceAccessSecurityGroup: string;
  readonly AdditionalMasterSecurityGroups: [];
  readonly AdditionalSlaveSecurityGroups: [];
}

interface ExecutionEngineConfig {
  readonly Id: string;
  readonly Type: string;
  readonly MasterInstanceSecurityGroupId: string;
}

interface FailureDetails {
  readonly Reason: string;
  readonly Message: string;
  readonly LogFile: string;
}

interface GetAutoTerminationPolicyInput {
  readonly ClusterId: string;
}

interface GetAutoTerminationPolicyOutput {
  readonly AutoTerminationPolicy: AutoTerminationPolicy;
}

interface GetBlockPublicAccessConfigurationInput {
}

interface GetBlockPublicAccessConfigurationOutput {
  readonly BlockPublicAccessConfiguration: BlockPublicAccessConfiguration;
  readonly BlockPublicAccessConfigurationMetadata: BlockPublicAccessConfigurationMetadata;
}

interface GetManagedScalingPolicyInput {
  readonly ClusterId: string;
}

interface GetManagedScalingPolicyOutput {
  readonly ManagedScalingPolicy: ManagedScalingPolicy;
}

interface GetStudioSessionMappingInput {
  readonly StudioId: string;
  readonly IdentityId: string;
  readonly IdentityName: string;
  readonly IdentityType: string;
}

interface GetStudioSessionMappingOutput {
  readonly SessionMapping: SessionMappingDetail;
}

interface HadoopJarStepConfig {
  readonly Properties: [];
  readonly Jar: string;
  readonly MainClass: string;
  readonly Args: [];
}

interface HadoopStepConfig {
  readonly Jar: string;
  readonly Properties: {[key: string]: any};
  readonly MainClass: string;
  readonly Args: [];
}

interface Instance {
  readonly Id: string;
  readonly Ec2InstanceId: string;
  readonly PublicDnsName: string;
  readonly PublicIpAddress: string;
  readonly PrivateDnsName: string;
  readonly PrivateIpAddress: string;
  readonly Status: InstanceStatus;
  readonly InstanceGroupId: string;
  readonly InstanceFleetId: string;
  readonly Market: string;
  readonly InstanceType: string;
  readonly EbsVolumes: [];
}

interface InstanceFleet {
  readonly Id: string;
  readonly Name: string;
  readonly Status: InstanceFleetStatus;
  readonly InstanceFleetType: string;
  readonly TargetOnDemandCapacity: number;
  readonly TargetSpotCapacity: number;
  readonly ProvisionedOnDemandCapacity: number;
  readonly ProvisionedSpotCapacity: number;
  readonly InstanceTypeSpecifications: [];
  readonly LaunchSpecifications: InstanceFleetProvisioningSpecifications;
}

interface InstanceFleetConfig {
  readonly Name: string;
  readonly InstanceFleetType: string;
  readonly TargetOnDemandCapacity: number;
  readonly TargetSpotCapacity: number;
  readonly InstanceTypeConfigs: [];
  readonly LaunchSpecifications: InstanceFleetProvisioningSpecifications;
}

interface InstanceFleetModifyConfig {
  readonly InstanceFleetId: string;
  readonly TargetOnDemandCapacity: number;
  readonly TargetSpotCapacity: number;
}

interface InstanceFleetProvisioningSpecifications {
  readonly SpotSpecification: SpotProvisioningSpecification;
  readonly OnDemandSpecification: OnDemandProvisioningSpecification;
}

interface InstanceFleetStateChangeReason {
  readonly Code: string;
  readonly Message: string;
}

interface InstanceFleetStatus {
  readonly State: string;
  readonly StateChangeReason: InstanceFleetStateChangeReason;
  readonly Timeline: InstanceFleetTimeline;
}

interface InstanceFleetTimeline {
  readonly CreationDateTime: Date;
  readonly ReadyDateTime: Date;
  readonly EndDateTime: Date;
}

interface InstanceGroup {
  readonly Id: string;
  readonly Name: string;
  readonly Market: string;
  readonly InstanceGroupType: string;
  readonly BidPrice: string;
  readonly InstanceType: string;
  readonly RequestedInstanceCount: number;
  readonly RunningInstanceCount: number;
  readonly Status: InstanceGroupStatus;
  readonly Configurations: [];
  readonly ConfigurationsVersion: number;
  readonly LastSuccessfullyAppliedConfigurations: [];
  readonly LastSuccessfullyAppliedConfigurationsVersion: number;
  readonly EbsBlockDevices: [];
  readonly EbsOptimized: boolean;
  readonly ShrinkPolicy: ShrinkPolicy;
  readonly AutoScalingPolicy: AutoScalingPolicyDescription;
  readonly CustomAmiId: string;
}

interface InstanceGroupConfig {
  readonly Name: string;
  readonly Market: string;
  readonly InstanceRole: string;
  readonly BidPrice: string;
  readonly InstanceType: string;
  readonly InstanceCount: number;
  readonly Configurations: [];
  readonly EbsConfiguration: EbsConfiguration;
  readonly AutoScalingPolicy: AutoScalingPolicy;
  readonly CustomAmiId: string;
}

interface InstanceGroupDetail {
  readonly InstanceGroupId: string;
  readonly Name: string;
  readonly Market: string;
  readonly InstanceRole: string;
  readonly BidPrice: string;
  readonly InstanceType: string;
  readonly InstanceRequestCount: number;
  readonly InstanceRunningCount: number;
  readonly State: string;
  readonly LastStateChangeReason: string;
  readonly CreationDateTime: Date;
  readonly StartDateTime: Date;
  readonly ReadyDateTime: Date;
  readonly EndDateTime: Date;
  readonly CustomAmiId: string;
}

interface InstanceGroupModifyConfig {
  readonly InstanceGroupId: string;
  readonly InstanceCount: number;
  readonly EC2InstanceIdsToTerminate: [];
  readonly ShrinkPolicy: ShrinkPolicy;
  readonly Configurations: [];
}

interface InstanceGroupStateChangeReason {
  readonly Code: string;
  readonly Message: string;
}

interface InstanceGroupStatus {
  readonly State: string;
  readonly StateChangeReason: InstanceGroupStateChangeReason;
  readonly Timeline: InstanceGroupTimeline;
}

interface InstanceGroupTimeline {
  readonly CreationDateTime: Date;
  readonly ReadyDateTime: Date;
  readonly EndDateTime: Date;
}

interface InstanceResizePolicy {
  readonly InstancesToTerminate: [];
  readonly InstancesToProtect: [];
  readonly InstanceTerminationTimeout: number;
}

interface InstanceStateChangeReason {
  readonly Code: string;
  readonly Message: string;
}

interface InstanceStatus {
  readonly State: string;
  readonly StateChangeReason: InstanceStateChangeReason;
  readonly Timeline: InstanceTimeline;
}

interface InstanceTimeline {
  readonly CreationDateTime: Date;
  readonly ReadyDateTime: Date;
  readonly EndDateTime: Date;
}

interface InstanceTypeConfig {
  readonly InstanceType: string;
  readonly WeightedCapacity: number;
  readonly BidPrice: string;
  readonly BidPriceAsPercentageOfOnDemandPrice: unknown;
  readonly EbsConfiguration: EbsConfiguration;
  readonly Configurations: [];
  readonly CustomAmiId: string;
}

interface InstanceTypeSpecification {
  readonly InstanceType: string;
  readonly WeightedCapacity: number;
  readonly BidPrice: string;
  readonly BidPriceAsPercentageOfOnDemandPrice: unknown;
  readonly Configurations: [];
  readonly EbsBlockDevices: [];
  readonly EbsOptimized: boolean;
  readonly CustomAmiId: string;
}

interface InternalServerError {
}

interface InternalServerException {
  readonly Message: string;
}

interface InvalidRequestException {
  readonly ErrorCode: string;
  readonly Message: string;
}

interface JobFlowDetail {
  readonly JobFlowId: string;
  readonly Name: string;
  readonly LogUri: string;
  readonly LogEncryptionKmsKeyId: string;
  readonly AmiVersion: string;
  readonly ExecutionStatusDetail: JobFlowExecutionStatusDetail;
  readonly Instances: JobFlowInstancesDetail;
  readonly Steps: [];
  readonly BootstrapActions: [];
  readonly SupportedProducts: [];
  readonly VisibleToAllUsers: boolean;
  readonly JobFlowRole: string;
  readonly ServiceRole: string;
  readonly AutoScalingRole: string;
  readonly ScaleDownBehavior: string;
}

interface JobFlowExecutionStatusDetail {
  readonly State: string;
  readonly CreationDateTime: Date;
  readonly StartDateTime: Date;
  readonly ReadyDateTime: Date;
  readonly EndDateTime: Date;
  readonly LastStateChangeReason: string;
}

interface JobFlowInstancesConfig {
  readonly MasterInstanceType: string;
  readonly SlaveInstanceType: string;
  readonly InstanceCount: number;
  readonly InstanceGroups: [];
  readonly InstanceFleets: [];
  readonly Ec2KeyName: string;
  readonly Placement: PlacementType;
  readonly KeepJobFlowAliveWhenNoSteps: boolean;
  readonly TerminationProtected: boolean;
  readonly HadoopVersion: string;
  readonly Ec2SubnetId: string;
  readonly Ec2SubnetIds: [];
  readonly EmrManagedMasterSecurityGroup: string;
  readonly EmrManagedSlaveSecurityGroup: string;
  readonly ServiceAccessSecurityGroup: string;
  readonly AdditionalMasterSecurityGroups: [];
  readonly AdditionalSlaveSecurityGroups: [];
}

interface JobFlowInstancesDetail {
  readonly MasterInstanceType: string;
  readonly MasterPublicDnsName: string;
  readonly MasterInstanceId: string;
  readonly SlaveInstanceType: string;
  readonly InstanceCount: number;
  readonly InstanceGroups: [];
  readonly NormalizedInstanceHours: number;
  readonly Ec2KeyName: string;
  readonly Ec2SubnetId: string;
  readonly Placement: PlacementType;
  readonly KeepJobFlowAliveWhenNoSteps: boolean;
  readonly TerminationProtected: boolean;
  readonly HadoopVersion: string;
}

interface KerberosAttributes {
  readonly Realm: string;
  readonly KdcAdminPassword: string;
  readonly CrossRealmTrustPrincipalPassword: string;
  readonly ADDomainJoinUser: string;
  readonly ADDomainJoinPassword: string;
}

interface KeyValue {
  readonly Key: string;
  readonly Value: string;
}

interface ListBootstrapActionsInput {
  readonly ClusterId: string;
  readonly Marker: string;
}

interface ListBootstrapActionsOutput {
  readonly BootstrapActions: [];
  readonly Marker: string;
}

interface ListClustersInput {
  readonly CreatedAfter: Date;
  readonly CreatedBefore: Date;
  readonly ClusterStates: [];
  readonly Marker: string;
}

interface ListClustersOutput {
  readonly Clusters: [];
  readonly Marker: string;
}

interface ListInstanceFleetsInput {
  readonly ClusterId: string;
  readonly Marker: string;
}

interface ListInstanceFleetsOutput {
  readonly InstanceFleets: [];
  readonly Marker: string;
}

interface ListInstanceGroupsInput {
  readonly ClusterId: string;
  readonly Marker: string;
}

interface ListInstanceGroupsOutput {
  readonly InstanceGroups: [];
  readonly Marker: string;
}

interface ListInstancesInput {
  readonly ClusterId: string;
  readonly InstanceGroupId: string;
  readonly InstanceGroupTypes: [];
  readonly InstanceFleetId: string;
  readonly InstanceFleetType: string;
  readonly InstanceStates: [];
  readonly Marker: string;
}

interface ListInstancesOutput {
  readonly Instances: [];
  readonly Marker: string;
}

interface ListNotebookExecutionsInput {
  readonly EditorId: string;
  readonly Status: string;
  readonly From: Date;
  readonly To: Date;
  readonly Marker: string;
}

interface ListNotebookExecutionsOutput {
  readonly NotebookExecutions: [];
  readonly Marker: string;
}

interface ListReleaseLabelsInput {
  readonly Filters: ReleaseLabelFilter;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListReleaseLabelsOutput {
  readonly ReleaseLabels: [];
  readonly NextToken: string;
}

interface ListSecurityConfigurationsInput {
  readonly Marker: string;
}

interface ListSecurityConfigurationsOutput {
  readonly SecurityConfigurations: [];
  readonly Marker: string;
}

interface ListStepsInput {
  readonly ClusterId: string;
  readonly StepStates: [];
  readonly StepIds: [];
  readonly Marker: string;
}

interface ListStepsOutput {
  readonly Steps: [];
  readonly Marker: string;
}

interface ListStudioSessionMappingsInput {
  readonly StudioId: string;
  readonly IdentityType: string;
  readonly Marker: string;
}

interface ListStudioSessionMappingsOutput {
  readonly SessionMappings: [];
  readonly Marker: string;
}

interface ListStudiosInput {
  readonly Marker: string;
}

interface ListStudiosOutput {
  readonly Studios: [];
  readonly Marker: string;
}

interface ManagedScalingPolicy {
  readonly ComputeLimits: ComputeLimits;
}

interface MetricDimension {
  readonly Key: string;
  readonly Value: string;
}

interface ModifyClusterInput {
  readonly ClusterId: string;
  readonly StepConcurrencyLevel: number;
}

interface ModifyClusterOutput {
  readonly StepConcurrencyLevel: number;
}

interface ModifyInstanceFleetInput {
  readonly ClusterId: string;
  readonly InstanceFleet: InstanceFleetModifyConfig;
}

interface ModifyInstanceGroupsInput {
  readonly ClusterId: string;
  readonly InstanceGroups: [];
}

interface NotebookExecution {
  readonly NotebookExecutionId: string;
  readonly EditorId: string;
  readonly ExecutionEngine: ExecutionEngineConfig;
  readonly NotebookExecutionName: string;
  readonly NotebookParams: string;
  readonly Status: string;
  readonly StartTime: Date;
  readonly EndTime: Date;
  readonly Arn: string;
  readonly OutputNotebookURI: string;
  readonly LastStateChangeReason: string;
  readonly NotebookInstanceSecurityGroupId: string;
  readonly Tags: [];
}

interface NotebookExecutionSummary {
  readonly NotebookExecutionId: string;
  readonly EditorId: string;
  readonly NotebookExecutionName: string;
  readonly Status: string;
  readonly StartTime: Date;
  readonly EndTime: Date;
}

interface OnDemandCapacityReservationOptions {
  readonly UsageStrategy: string;
  readonly CapacityReservationPreference: string;
  readonly CapacityReservationResourceGroupArn: string;
}

interface OnDemandProvisioningSpecification {
  readonly AllocationStrategy: string;
  readonly CapacityReservationOptions: OnDemandCapacityReservationOptions;
}

interface PlacementGroupConfig {
  readonly InstanceRole: string;
  readonly PlacementStrategy: string;
}

interface PlacementType {
  readonly AvailabilityZone: string;
  readonly AvailabilityZones: [];
}

interface PortRange {
  readonly MinRange: number;
  readonly MaxRange: number;
}

interface PutAutoScalingPolicyInput {
  readonly ClusterId: string;
  readonly InstanceGroupId: string;
  readonly AutoScalingPolicy: AutoScalingPolicy;
}

interface PutAutoScalingPolicyOutput {
  readonly ClusterId: string;
  readonly InstanceGroupId: string;
  readonly AutoScalingPolicy: AutoScalingPolicyDescription;
  readonly ClusterArn: string;
}

interface PutAutoTerminationPolicyInput {
  readonly ClusterId: string;
  readonly AutoTerminationPolicy: AutoTerminationPolicy;
}

interface PutAutoTerminationPolicyOutput {
}

interface PutBlockPublicAccessConfigurationInput {
  readonly BlockPublicAccessConfiguration: BlockPublicAccessConfiguration;
}

interface PutBlockPublicAccessConfigurationOutput {
}

interface PutManagedScalingPolicyInput {
  readonly ClusterId: string;
  readonly ManagedScalingPolicy: ManagedScalingPolicy;
}

interface PutManagedScalingPolicyOutput {
}

interface ReleaseLabelFilter {
  readonly Prefix: string;
  readonly Application: string;
}

interface RemoveAutoScalingPolicyInput {
  readonly ClusterId: string;
  readonly InstanceGroupId: string;
}

interface RemoveAutoScalingPolicyOutput {
}

interface RemoveAutoTerminationPolicyInput {
  readonly ClusterId: string;
}

interface RemoveAutoTerminationPolicyOutput {
}

interface RemoveManagedScalingPolicyInput {
  readonly ClusterId: string;
}

interface RemoveManagedScalingPolicyOutput {
}

interface RemoveTagsInput {
  readonly ResourceId: string;
  readonly TagKeys: [];
}

interface RemoveTagsOutput {
}

interface RunJobFlowInput {
  readonly Name: string;
  readonly LogUri: string;
  readonly LogEncryptionKmsKeyId: string;
  readonly AdditionalInfo: string;
  readonly AmiVersion: string;
  readonly ReleaseLabel: string;
  readonly Instances: JobFlowInstancesConfig;
  readonly Steps: [];
  readonly BootstrapActions: [];
  readonly SupportedProducts: [];
  readonly NewSupportedProducts: [];
  readonly Applications: [];
  readonly Configurations: [];
  readonly VisibleToAllUsers: boolean;
  readonly JobFlowRole: string;
  readonly ServiceRole: string;
  readonly Tags: [];
  readonly SecurityConfiguration: string;
  readonly AutoScalingRole: string;
  readonly ScaleDownBehavior: string;
  readonly CustomAmiId: string;
  readonly EbsRootVolumeSize: number;
  readonly RepoUpgradeOnBoot: string;
  readonly KerberosAttributes: KerberosAttributes;
  readonly StepConcurrencyLevel: number;
  readonly ManagedScalingPolicy: ManagedScalingPolicy;
  readonly PlacementGroupConfigs: [];
  readonly AutoTerminationPolicy: AutoTerminationPolicy;
}

interface RunJobFlowOutput {
  readonly JobFlowId: string;
  readonly ClusterArn: string;
}

interface ScalingAction {
  readonly Market: string;
  readonly SimpleScalingPolicyConfiguration: SimpleScalingPolicyConfiguration;
}

interface ScalingConstraints {
  readonly MinCapacity: number;
  readonly MaxCapacity: number;
}

interface ScalingRule {
  readonly Name: string;
  readonly Description: string;
  readonly Action: ScalingAction;
  readonly Trigger: ScalingTrigger;
}

interface ScalingTrigger {
  readonly CloudWatchAlarmDefinition: CloudWatchAlarmDefinition;
}

interface ScriptBootstrapActionConfig {
  readonly Path: string;
  readonly Args: [];
}

interface SecurityConfigurationSummary {
  readonly Name: string;
  readonly CreationDateTime: Date;
}

interface SessionMappingDetail {
  readonly StudioId: string;
  readonly IdentityId: string;
  readonly IdentityName: string;
  readonly IdentityType: string;
  readonly SessionPolicyArn: string;
  readonly CreationTime: Date;
  readonly LastModifiedTime: Date;
}

interface SessionMappingSummary {
  readonly StudioId: string;
  readonly IdentityId: string;
  readonly IdentityName: string;
  readonly IdentityType: string;
  readonly SessionPolicyArn: string;
  readonly CreationTime: Date;
}

interface SetTerminationProtectionInput {
  readonly JobFlowIds: [];
  readonly TerminationProtected: boolean;
}

interface SetVisibleToAllUsersInput {
  readonly JobFlowIds: [];
  readonly VisibleToAllUsers: boolean;
}

interface ShrinkPolicy {
  readonly DecommissionTimeout: number;
  readonly InstanceResizePolicy: InstanceResizePolicy;
}

interface SimpleScalingPolicyConfiguration {
  readonly AdjustmentType: string;
  readonly ScalingAdjustment: number;
  readonly CoolDown: number;
}

interface SimplifiedApplication {
  readonly Name: string;
  readonly Version: string;
}

interface SpotProvisioningSpecification {
  readonly TimeoutDurationMinutes: number;
  readonly TimeoutAction: string;
  readonly BlockDurationMinutes: number;
  readonly AllocationStrategy: string;
}

interface StartNotebookExecutionInput {
  readonly EditorId: string;
  readonly RelativePath: string;
  readonly NotebookExecutionName: string;
  readonly NotebookParams: string;
  readonly ExecutionEngine: ExecutionEngineConfig;
  readonly ServiceRole: string;
  readonly NotebookInstanceSecurityGroupId: string;
  readonly Tags: [];
}

interface StartNotebookExecutionOutput {
  readonly NotebookExecutionId: string;
}

interface Step {
  readonly Id: string;
  readonly Name: string;
  readonly Config: HadoopStepConfig;
  readonly ActionOnFailure: string;
  readonly Status: StepStatus;
}

interface StepConfig {
  readonly Name: string;
  readonly ActionOnFailure: string;
  readonly HadoopJarStep: HadoopJarStepConfig;
}

interface StepDetail {
  readonly StepConfig: StepConfig;
  readonly ExecutionStatusDetail: StepExecutionStatusDetail;
}

interface StepExecutionStatusDetail {
  readonly State: string;
  readonly CreationDateTime: Date;
  readonly StartDateTime: Date;
  readonly EndDateTime: Date;
  readonly LastStateChangeReason: string;
}

interface StepStateChangeReason {
  readonly Code: string;
  readonly Message: string;
}

interface StepStatus {
  readonly State: string;
  readonly StateChangeReason: StepStateChangeReason;
  readonly FailureDetails: FailureDetails;
  readonly Timeline: StepTimeline;
}

interface StepSummary {
  readonly Id: string;
  readonly Name: string;
  readonly Config: HadoopStepConfig;
  readonly ActionOnFailure: string;
  readonly Status: StepStatus;
}

interface StepTimeline {
  readonly CreationDateTime: Date;
  readonly StartDateTime: Date;
  readonly EndDateTime: Date;
}

interface StopNotebookExecutionInput {
  readonly NotebookExecutionId: string;
}

interface Studio {
  readonly StudioId: string;
  readonly StudioArn: string;
  readonly Name: string;
  readonly Description: string;
  readonly AuthMode: string;
  readonly VpcId: string;
  readonly SubnetIds: [];
  readonly ServiceRole: string;
  readonly UserRole: string;
  readonly WorkspaceSecurityGroupId: string;
  readonly EngineSecurityGroupId: string;
  readonly Url: string;
  readonly CreationTime: Date;
  readonly DefaultS3Location: string;
  readonly IdpAuthUrl: string;
  readonly IdpRelayStateParameterName: string;
  readonly Tags: [];
}

interface StudioSummary {
  readonly StudioId: string;
  readonly Name: string;
  readonly VpcId: string;
  readonly Description: string;
  readonly Url: string;
  readonly AuthMode: string;
  readonly CreationTime: Date;
}

interface SupportedProductConfig {
  readonly Name: string;
  readonly Args: [];
}

interface Tag {
  readonly Key: string;
  readonly Value: string;
}

interface TerminateJobFlowsInput {
  readonly JobFlowIds: [];
}

interface UpdateStudioInput {
  readonly StudioId: string;
  readonly Name: string;
  readonly Description: string;
  readonly SubnetIds: [];
  readonly DefaultS3Location: string;
}

interface UpdateStudioSessionMappingInput {
  readonly StudioId: string;
  readonly IdentityId: string;
  readonly IdentityName: string;
  readonly IdentityType: string;
  readonly SessionPolicyArn: string;
}

interface VolumeSpecification {
  readonly VolumeType: string;
  readonly Iops: number;
  readonly SizeInGB: number;
}

