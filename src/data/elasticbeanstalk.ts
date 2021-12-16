/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface AbortEnvironmentUpdate {
  readonly EnvironmentId: string;
  readonly EnvironmentName: string;
}
export interface ApplyEnvironmentManagedAction {
  readonly EnvironmentName: string;
  readonly EnvironmentId: string;
  readonly ActionId: string;
}
export interface AssociateEnvironmentOperationsRole {
  readonly EnvironmentName: string;
  readonly OperationsRole: string;
}
export interface CheckDNSAvailability {
  readonly CNAMEPrefix: string;
}
export interface ComposeEnvironments {
  readonly ApplicationName: string;
  readonly GroupName: string;
  readonly VersionLabels: [];
}
export interface CreateApplication {
  readonly ApplicationName: string;
  readonly Description: string;
  readonly ResourceLifecycleConfig: ApplicationResourceLifecycleConfig;
  readonly Tags: [];
}
export interface CreateApplicationVersion {
  readonly ApplicationName: string;
  readonly VersionLabel: string;
  readonly Description: string;
  readonly SourceBuildInformation: SourceBuildInformation;
  readonly SourceBundle: S3Location;
  readonly BuildConfiguration: BuildConfiguration;
  readonly AutoCreateApplication: boolean;
  readonly Process: boolean;
  readonly Tags: [];
}
export interface CreateConfigurationTemplate {
  readonly ApplicationName: string;
  readonly TemplateName: string;
  readonly SolutionStackName: string;
  readonly PlatformArn: string;
  readonly SourceConfiguration: SourceConfiguration;
  readonly EnvironmentId: string;
  readonly Description: string;
  readonly OptionSettings: [];
  readonly Tags: [];
}
export interface CreateEnvironment {
  readonly ApplicationName: string;
  readonly EnvironmentName: string;
  readonly GroupName: string;
  readonly Description: string;
  readonly CNAMEPrefix: string;
  readonly Tier: EnvironmentTier;
  readonly Tags: [];
  readonly VersionLabel: string;
  readonly TemplateName: string;
  readonly SolutionStackName: string;
  readonly PlatformArn: string;
  readonly OptionSettings: [];
  readonly OptionsToRemove: [];
  readonly OperationsRole: string;
}
export interface CreatePlatformVersion {
  readonly PlatformName: string;
  readonly PlatformVersion: string;
  readonly PlatformDefinitionBundle: S3Location;
  readonly EnvironmentName: string;
  readonly OptionSettings: [];
  readonly Tags: [];
}
export interface DeleteApplication {
  readonly ApplicationName: string;
  readonly TerminateEnvByForce: boolean;
}
export interface DeleteApplicationVersion {
  readonly ApplicationName: string;
  readonly VersionLabel: string;
  readonly DeleteSourceBundle: boolean;
}
export interface DeleteConfigurationTemplate {
  readonly ApplicationName: string;
  readonly TemplateName: string;
}
export interface DeleteEnvironmentConfiguration {
  readonly ApplicationName: string;
  readonly EnvironmentName: string;
}
export interface DeletePlatformVersion {
  readonly PlatformArn: string;
}
export interface DescribeApplicationVersions {
  readonly ApplicationName: string;
  readonly VersionLabels: [];
  readonly MaxRecords: number;
  readonly NextToken: string;
}
export interface DescribeApplications {
  readonly ApplicationNames: [];
}
export interface DescribeConfigurationOptions {
  readonly ApplicationName: string;
  readonly TemplateName: string;
  readonly EnvironmentName: string;
  readonly SolutionStackName: string;
  readonly PlatformArn: string;
  readonly Options: [];
}
export interface DescribeConfigurationSettings {
  readonly ApplicationName: string;
  readonly TemplateName: string;
  readonly EnvironmentName: string;
}
export interface DescribeEnvironmentHealth {
  readonly EnvironmentName: string;
  readonly EnvironmentId: string;
  readonly AttributeNames: [];
}
export interface DescribeEnvironmentManagedActionHistory {
  readonly EnvironmentId: string;
  readonly EnvironmentName: string;
  readonly NextToken: string;
  readonly MaxItems: number;
}
export interface DescribeEnvironmentManagedActions {
  readonly EnvironmentName: string;
  readonly EnvironmentId: string;
  readonly Status: string;
}
export interface DescribeEnvironmentResources {
  readonly EnvironmentId: string;
  readonly EnvironmentName: string;
}
export interface DescribeEnvironments {
  readonly ApplicationName: string;
  readonly VersionLabel: string;
  readonly EnvironmentIds: [];
  readonly EnvironmentNames: [];
  readonly IncludeDeleted: boolean;
  readonly IncludedDeletedBackTo: Date;
  readonly MaxRecords: number;
  readonly NextToken: string;
}
export interface DescribeEvents {
  readonly ApplicationName: string;
  readonly VersionLabel: string;
  readonly TemplateName: string;
  readonly EnvironmentId: string;
  readonly EnvironmentName: string;
  readonly PlatformArn: string;
  readonly RequestId: string;
  readonly Severity: string;
  readonly StartTime: Date;
  readonly EndTime: Date;
  readonly MaxRecords: number;
  readonly NextToken: string;
}
export interface DescribeInstancesHealth {
  readonly EnvironmentName: string;
  readonly EnvironmentId: string;
  readonly AttributeNames: [];
  readonly NextToken: string;
}
export interface DescribePlatformVersion {
  readonly PlatformArn: string;
}
export interface DisassociateEnvironmentOperationsRole {
  readonly EnvironmentName: string;
}
export interface ListPlatformBranches {
  readonly Filters: [];
  readonly MaxRecords: number;
  readonly NextToken: string;
}
export interface ListPlatformVersions {
  readonly Filters: [];
  readonly MaxRecords: number;
  readonly NextToken: string;
}
export interface ListTagsForResource {
  readonly ResourceArn: string;
}
export interface RebuildEnvironment {
  readonly EnvironmentId: string;
  readonly EnvironmentName: string;
}
export interface RequestEnvironmentInfo {
  readonly EnvironmentId: string;
  readonly EnvironmentName: string;
  readonly InfoType: string;
}
export interface RestartAppServer {
  readonly EnvironmentId: string;
  readonly EnvironmentName: string;
}
export interface RetrieveEnvironmentInfo {
  readonly EnvironmentId: string;
  readonly EnvironmentName: string;
  readonly InfoType: string;
}
export interface SwapEnvironmentCNAMEs {
  readonly SourceEnvironmentId: string;
  readonly SourceEnvironmentName: string;
  readonly DestinationEnvironmentId: string;
  readonly DestinationEnvironmentName: string;
}
export interface TerminateEnvironment {
  readonly EnvironmentId: string;
  readonly EnvironmentName: string;
  readonly TerminateResources: boolean;
  readonly ForceTerminate: boolean;
}
export interface UpdateApplication {
  readonly ApplicationName: string;
  readonly Description: string;
}
export interface UpdateApplicationResourceLifecycle {
  readonly ApplicationName: string;
  readonly ResourceLifecycleConfig: ApplicationResourceLifecycleConfig;
}
export interface UpdateApplicationVersion {
  readonly ApplicationName: string;
  readonly VersionLabel: string;
  readonly Description: string;
}
export interface UpdateConfigurationTemplate {
  readonly ApplicationName: string;
  readonly TemplateName: string;
  readonly Description: string;
  readonly OptionSettings: [];
  readonly OptionsToRemove: [];
}
export interface UpdateEnvironment {
  readonly ApplicationName: string;
  readonly EnvironmentId: string;
  readonly EnvironmentName: string;
  readonly GroupName: string;
  readonly Description: string;
  readonly Tier: EnvironmentTier;
  readonly VersionLabel: string;
  readonly TemplateName: string;
  readonly SolutionStackName: string;
  readonly PlatformArn: string;
  readonly OptionSettings: [];
  readonly OptionsToRemove: [];
}
export interface UpdateTagsForResource {
  readonly ResourceArn: string;
  readonly TagsToAdd: [];
  readonly TagsToRemove: [];
}
export interface ValidateConfigurationSettings {
  readonly ApplicationName: string;
  readonly TemplateName: string;
  readonly EnvironmentName: string;
  readonly OptionSettings: [];
}



interface AbortEnvironmentUpdateMessage {
  readonly EnvironmentId: string;
  readonly EnvironmentName: string;
}

interface ApplicationDescription {
  readonly ApplicationArn: string;
  readonly ApplicationName: string;
  readonly Description: string;
  readonly DateCreated: Date;
  readonly DateUpdated: Date;
  readonly Versions: [];
  readonly ConfigurationTemplates: [];
  readonly ResourceLifecycleConfig: ApplicationResourceLifecycleConfig;
}

interface ApplicationDescriptionMessage {
  readonly Application: ApplicationDescription;
}

interface ApplicationDescriptionsMessage {
  readonly Applications: [];
}

interface ApplicationMetrics {
  readonly Duration: number;
  readonly RequestCount: number;
  readonly StatusCodes: StatusCodes;
  readonly Latency: Latency;
}

interface ApplicationResourceLifecycleConfig {
  readonly ServiceRole: string;
  readonly VersionLifecycleConfig: ApplicationVersionLifecycleConfig;
}

interface ApplicationResourceLifecycleDescriptionMessage {
  readonly ApplicationName: string;
  readonly ResourceLifecycleConfig: ApplicationResourceLifecycleConfig;
}

interface ApplicationVersionDescription {
  readonly ApplicationVersionArn: string;
  readonly ApplicationName: string;
  readonly Description: string;
  readonly VersionLabel: string;
  readonly SourceBuildInformation: SourceBuildInformation;
  readonly BuildArn: string;
  readonly SourceBundle: S3Location;
  readonly DateCreated: Date;
  readonly DateUpdated: Date;
  readonly Status: string;
}

interface ApplicationVersionDescriptionMessage {
  readonly ApplicationVersion: ApplicationVersionDescription;
}

interface ApplicationVersionDescriptionsMessage {
  readonly ApplicationVersions: [];
  readonly NextToken: string;
}

interface ApplicationVersionLifecycleConfig {
  readonly MaxCountRule: MaxCountRule;
  readonly MaxAgeRule: MaxAgeRule;
}

interface ApplyEnvironmentManagedActionRequest {
  readonly EnvironmentName: string;
  readonly EnvironmentId: string;
  readonly ActionId: string;
}

interface ApplyEnvironmentManagedActionResult {
  readonly ActionId: string;
  readonly ActionDescription: string;
  readonly ActionType: string;
  readonly Status: string;
}

interface AssociateEnvironmentOperationsRoleMessage {
  readonly EnvironmentName: string;
  readonly OperationsRole: string;
}

interface AutoScalingGroup {
  readonly Name: string;
}

interface BuildConfiguration {
  readonly ArtifactName: string;
  readonly CodeBuildServiceRole: string;
  readonly ComputeType: string;
  readonly Image: string;
  readonly TimeoutInMinutes: number;
}

interface Builder {
  readonly ARN: string;
}

interface CPUUtilization {
  readonly User: unknown;
  readonly Nice: unknown;
  readonly System: unknown;
  readonly Idle: unknown;
  readonly IOWait: unknown;
  readonly IRQ: unknown;
  readonly SoftIRQ: unknown;
  readonly Privileged: unknown;
}

interface CheckDNSAvailabilityMessage {
  readonly CNAMEPrefix: string;
}

interface CheckDNSAvailabilityResultMessage {
  readonly Available: boolean;
  readonly FullyQualifiedCNAME: string;
}

interface CodeBuildNotInServiceRegionException {
}

interface ComposeEnvironmentsMessage {
  readonly ApplicationName: string;
  readonly GroupName: string;
  readonly VersionLabels: [];
}

interface ConfigurationOptionDescription {
  readonly Namespace: string;
  readonly Name: string;
  readonly DefaultValue: string;
  readonly ChangeSeverity: string;
  readonly UserDefined: boolean;
  readonly ValueType: string;
  readonly ValueOptions: [];
  readonly MinValue: number;
  readonly MaxValue: number;
  readonly MaxLength: number;
  readonly Regex: OptionRestrictionRegex;
}

interface ConfigurationOptionSetting {
  readonly ResourceName: string;
  readonly Namespace: string;
  readonly OptionName: string;
  readonly Value: string;
}

interface ConfigurationOptionsDescription {
  readonly SolutionStackName: string;
  readonly PlatformArn: string;
  readonly Options: [];
}

interface ConfigurationSettingsDescription {
  readonly SolutionStackName: string;
  readonly PlatformArn: string;
  readonly ApplicationName: string;
  readonly TemplateName: string;
  readonly Description: string;
  readonly EnvironmentName: string;
  readonly DeploymentStatus: string;
  readonly DateCreated: Date;
  readonly DateUpdated: Date;
  readonly OptionSettings: [];
}

interface ConfigurationSettingsDescriptions {
  readonly ConfigurationSettings: [];
}

interface ConfigurationSettingsValidationMessages {
  readonly Messages: [];
}

interface CreateApplicationMessage {
  readonly ApplicationName: string;
  readonly Description: string;
  readonly ResourceLifecycleConfig: ApplicationResourceLifecycleConfig;
  readonly Tags: [];
}

interface CreateApplicationVersionMessage {
  readonly ApplicationName: string;
  readonly VersionLabel: string;
  readonly Description: string;
  readonly SourceBuildInformation: SourceBuildInformation;
  readonly SourceBundle: S3Location;
  readonly BuildConfiguration: BuildConfiguration;
  readonly AutoCreateApplication: boolean;
  readonly Process: boolean;
  readonly Tags: [];
}

interface CreateConfigurationTemplateMessage {
  readonly ApplicationName: string;
  readonly TemplateName: string;
  readonly SolutionStackName: string;
  readonly PlatformArn: string;
  readonly SourceConfiguration: SourceConfiguration;
  readonly EnvironmentId: string;
  readonly Description: string;
  readonly OptionSettings: [];
  readonly Tags: [];
}

interface CreateEnvironmentMessage {
  readonly ApplicationName: string;
  readonly EnvironmentName: string;
  readonly GroupName: string;
  readonly Description: string;
  readonly CNAMEPrefix: string;
  readonly Tier: EnvironmentTier;
  readonly Tags: [];
  readonly VersionLabel: string;
  readonly TemplateName: string;
  readonly SolutionStackName: string;
  readonly PlatformArn: string;
  readonly OptionSettings: [];
  readonly OptionsToRemove: [];
  readonly OperationsRole: string;
}

interface CreatePlatformVersionRequest {
  readonly PlatformName: string;
  readonly PlatformVersion: string;
  readonly PlatformDefinitionBundle: S3Location;
  readonly EnvironmentName: string;
  readonly OptionSettings: [];
  readonly Tags: [];
}

interface CreatePlatformVersionResult {
  readonly PlatformSummary: PlatformSummary;
  readonly Builder: Builder;
}

interface CreateStorageLocationResultMessage {
  readonly S3Bucket: string;
}

interface CustomAmi {
  readonly VirtualizationType: string;
  readonly ImageId: string;
}

interface DeleteApplicationMessage {
  readonly ApplicationName: string;
  readonly TerminateEnvByForce: boolean;
}

interface DeleteApplicationVersionMessage {
  readonly ApplicationName: string;
  readonly VersionLabel: string;
  readonly DeleteSourceBundle: boolean;
}

interface DeleteConfigurationTemplateMessage {
  readonly ApplicationName: string;
  readonly TemplateName: string;
}

interface DeleteEnvironmentConfigurationMessage {
  readonly ApplicationName: string;
  readonly EnvironmentName: string;
}

interface DeletePlatformVersionRequest {
  readonly PlatformArn: string;
}

interface DeletePlatformVersionResult {
  readonly PlatformSummary: PlatformSummary;
}

interface Deployment {
  readonly VersionLabel: string;
  readonly DeploymentId: number;
  readonly Status: string;
  readonly DeploymentTime: Date;
}

interface DescribeAccountAttributesResult {
  readonly ResourceQuotas: ResourceQuotas;
}

interface DescribeApplicationVersionsMessage {
  readonly ApplicationName: string;
  readonly VersionLabels: [];
  readonly MaxRecords: number;
  readonly NextToken: string;
}

interface DescribeApplicationsMessage {
  readonly ApplicationNames: [];
}

interface DescribeConfigurationOptionsMessage {
  readonly ApplicationName: string;
  readonly TemplateName: string;
  readonly EnvironmentName: string;
  readonly SolutionStackName: string;
  readonly PlatformArn: string;
  readonly Options: [];
}

interface DescribeConfigurationSettingsMessage {
  readonly ApplicationName: string;
  readonly TemplateName: string;
  readonly EnvironmentName: string;
}

interface DescribeEnvironmentHealthRequest {
  readonly EnvironmentName: string;
  readonly EnvironmentId: string;
  readonly AttributeNames: [];
}

interface DescribeEnvironmentHealthResult {
  readonly EnvironmentName: string;
  readonly HealthStatus: string;
  readonly Status: string;
  readonly Color: string;
  readonly Causes: [];
  readonly ApplicationMetrics: ApplicationMetrics;
  readonly InstancesHealth: InstanceHealthSummary;
  readonly RefreshedAt: Date;
}

interface DescribeEnvironmentManagedActionHistoryRequest {
  readonly EnvironmentId: string;
  readonly EnvironmentName: string;
  readonly NextToken: string;
  readonly MaxItems: number;
}

interface DescribeEnvironmentManagedActionHistoryResult {
  readonly ManagedActionHistoryItems: [];
  readonly NextToken: string;
}

interface DescribeEnvironmentManagedActionsRequest {
  readonly EnvironmentName: string;
  readonly EnvironmentId: string;
  readonly Status: string;
}

interface DescribeEnvironmentManagedActionsResult {
  readonly ManagedActions: [];
}

interface DescribeEnvironmentResourcesMessage {
  readonly EnvironmentId: string;
  readonly EnvironmentName: string;
}

interface DescribeEnvironmentsMessage {
  readonly ApplicationName: string;
  readonly VersionLabel: string;
  readonly EnvironmentIds: [];
  readonly EnvironmentNames: [];
  readonly IncludeDeleted: boolean;
  readonly IncludedDeletedBackTo: Date;
  readonly MaxRecords: number;
  readonly NextToken: string;
}

interface DescribeEventsMessage {
  readonly ApplicationName: string;
  readonly VersionLabel: string;
  readonly TemplateName: string;
  readonly EnvironmentId: string;
  readonly EnvironmentName: string;
  readonly PlatformArn: string;
  readonly RequestId: string;
  readonly Severity: string;
  readonly StartTime: Date;
  readonly EndTime: Date;
  readonly MaxRecords: number;
  readonly NextToken: string;
}

interface DescribeInstancesHealthRequest {
  readonly EnvironmentName: string;
  readonly EnvironmentId: string;
  readonly AttributeNames: [];
  readonly NextToken: string;
}

interface DescribeInstancesHealthResult {
  readonly InstanceHealthList: [];
  readonly RefreshedAt: Date;
  readonly NextToken: string;
}

interface DescribePlatformVersionRequest {
  readonly PlatformArn: string;
}

interface DescribePlatformVersionResult {
  readonly PlatformDescription: PlatformDescription;
}

interface DisassociateEnvironmentOperationsRoleMessage {
  readonly EnvironmentName: string;
}

interface ElasticBeanstalkServiceException {
  readonly message: string;
}

interface EnvironmentDescription {
  readonly EnvironmentName: string;
  readonly EnvironmentId: string;
  readonly ApplicationName: string;
  readonly VersionLabel: string;
  readonly SolutionStackName: string;
  readonly PlatformArn: string;
  readonly TemplateName: string;
  readonly Description: string;
  readonly EndpointURL: string;
  readonly CNAME: string;
  readonly DateCreated: Date;
  readonly DateUpdated: Date;
  readonly Status: string;
  readonly AbortableOperationInProgress: boolean;
  readonly Health: string;
  readonly HealthStatus: string;
  readonly Resources: EnvironmentResourcesDescription;
  readonly Tier: EnvironmentTier;
  readonly EnvironmentLinks: [];
  readonly EnvironmentArn: string;
  readonly OperationsRole: string;
}

interface EnvironmentDescriptionsMessage {
  readonly Environments: [];
  readonly NextToken: string;
}

interface EnvironmentInfoDescription {
  readonly InfoType: string;
  readonly Ec2InstanceId: string;
  readonly SampleTimestamp: Date;
  readonly Message: string;
}

interface EnvironmentLink {
  readonly LinkName: string;
  readonly EnvironmentName: string;
}

interface EnvironmentResourceDescription {
  readonly EnvironmentName: string;
  readonly AutoScalingGroups: [];
  readonly Instances: [];
  readonly LaunchConfigurations: [];
  readonly LaunchTemplates: [];
  readonly LoadBalancers: [];
  readonly Triggers: [];
  readonly Queues: [];
}

interface EnvironmentResourceDescriptionsMessage {
  readonly EnvironmentResources: EnvironmentResourceDescription;
}

interface EnvironmentResourcesDescription {
  readonly LoadBalancer: LoadBalancerDescription;
}

interface EnvironmentTier {
  readonly Name: string;
  readonly Type: string;
  readonly Version: string;
}

interface EventDescription {
  readonly EventDate: Date;
  readonly Message: string;
  readonly ApplicationName: string;
  readonly VersionLabel: string;
  readonly TemplateName: string;
  readonly EnvironmentName: string;
  readonly PlatformArn: string;
  readonly RequestId: string;
  readonly Severity: string;
}

interface EventDescriptionsMessage {
  readonly Events: [];
  readonly NextToken: string;
}

interface Instance {
  readonly Id: string;
}

interface InstanceHealthSummary {
  readonly NoData: number;
  readonly Unknown: number;
  readonly Pending: number;
  readonly Ok: number;
  readonly Info: number;
  readonly Warning: number;
  readonly Degraded: number;
  readonly Severe: number;
}

interface InsufficientPrivilegesException {
}

interface InvalidRequestException {
}

interface Latency {
  readonly P999: unknown;
  readonly P99: unknown;
  readonly P95: unknown;
  readonly P90: unknown;
  readonly P85: unknown;
  readonly P75: unknown;
  readonly P50: unknown;
  readonly P10: unknown;
}

interface LaunchConfiguration {
  readonly Name: string;
}

interface LaunchTemplate {
  readonly Id: string;
}

interface ListAvailableSolutionStacksResultMessage {
  readonly SolutionStacks: [];
  readonly SolutionStackDetails: [];
}

interface ListPlatformBranchesRequest {
  readonly Filters: [];
  readonly MaxRecords: number;
  readonly NextToken: string;
}

interface ListPlatformBranchesResult {
  readonly PlatformBranchSummaryList: [];
  readonly NextToken: string;
}

interface ListPlatformVersionsRequest {
  readonly Filters: [];
  readonly MaxRecords: number;
  readonly NextToken: string;
}

interface ListPlatformVersionsResult {
  readonly PlatformSummaryList: [];
  readonly NextToken: string;
}

interface ListTagsForResourceMessage {
  readonly ResourceArn: string;
}

interface Listener {
  readonly Protocol: string;
  readonly Port: number;
}

interface LoadBalancer {
  readonly Name: string;
}

interface LoadBalancerDescription {
  readonly LoadBalancerName: string;
  readonly Domain: string;
  readonly Listeners: [];
}

interface ManagedAction {
  readonly ActionId: string;
  readonly ActionDescription: string;
  readonly ActionType: string;
  readonly Status: string;
  readonly WindowStartTime: Date;
}

interface ManagedActionHistoryItem {
  readonly ActionId: string;
  readonly ActionType: string;
  readonly ActionDescription: string;
  readonly FailureType: string;
  readonly Status: string;
  readonly FailureDescription: string;
  readonly ExecutedTime: Date;
  readonly FinishedTime: Date;
}

interface ManagedActionInvalidStateException {
}

interface MaxAgeRule {
  readonly Enabled: boolean;
  readonly MaxAgeInDays: number;
  readonly DeleteSourceFromS3: boolean;
}

interface MaxCountRule {
  readonly Enabled: boolean;
  readonly MaxCount: number;
  readonly DeleteSourceFromS3: boolean;
}

interface OperationInProgressException {
}

interface OptionRestrictionRegex {
  readonly Pattern: string;
  readonly Label: string;
}

interface OptionSpecification {
  readonly ResourceName: string;
  readonly Namespace: string;
  readonly OptionName: string;
}

interface PlatformBranchSummary {
  readonly PlatformName: string;
  readonly BranchName: string;
  readonly LifecycleState: string;
  readonly BranchOrder: number;
  readonly SupportedTierList: [];
}

interface PlatformDescription {
  readonly PlatformArn: string;
  readonly PlatformOwner: string;
  readonly PlatformName: string;
  readonly PlatformVersion: string;
  readonly SolutionStackName: string;
  readonly PlatformStatus: string;
  readonly DateCreated: Date;
  readonly DateUpdated: Date;
  readonly PlatformCategory: string;
  readonly Description: string;
  readonly Maintainer: string;
  readonly OperatingSystemName: string;
  readonly OperatingSystemVersion: string;
  readonly ProgrammingLanguages: [];
  readonly Frameworks: [];
  readonly CustomAmiList: [];
  readonly SupportedTierList: [];
  readonly SupportedAddonList: [];
  readonly PlatformLifecycleState: string;
  readonly PlatformBranchName: string;
  readonly PlatformBranchLifecycleState: string;
}

interface PlatformFilter {
  readonly Type: string;
  readonly Operator: string;
  readonly Values: [];
}

interface PlatformFramework {
  readonly Name: string;
  readonly Version: string;
}

interface PlatformProgrammingLanguage {
  readonly Name: string;
  readonly Version: string;
}

interface PlatformSummary {
  readonly PlatformArn: string;
  readonly PlatformOwner: string;
  readonly PlatformStatus: string;
  readonly PlatformCategory: string;
  readonly OperatingSystemName: string;
  readonly OperatingSystemVersion: string;
  readonly SupportedTierList: [];
  readonly SupportedAddonList: [];
  readonly PlatformLifecycleState: string;
  readonly PlatformVersion: string;
  readonly PlatformBranchName: string;
  readonly PlatformBranchLifecycleState: string;
}

interface PlatformVersionStillReferencedException {
}

interface Queue {
  readonly Name: string;
  readonly URL: string;
}

interface RebuildEnvironmentMessage {
  readonly EnvironmentId: string;
  readonly EnvironmentName: string;
}

interface RequestEnvironmentInfoMessage {
  readonly EnvironmentId: string;
  readonly EnvironmentName: string;
  readonly InfoType: string;
}

interface ResourceNotFoundException {
}

interface ResourceQuota {
  readonly Maximum: number;
}

interface ResourceQuotas {
  readonly ApplicationQuota: ResourceQuota;
  readonly ApplicationVersionQuota: ResourceQuota;
  readonly EnvironmentQuota: ResourceQuota;
  readonly ConfigurationTemplateQuota: ResourceQuota;
  readonly CustomPlatformQuota: ResourceQuota;
}

interface ResourceTagsDescriptionMessage {
  readonly ResourceArn: string;
  readonly ResourceTags: [];
}

interface ResourceTypeNotSupportedException {
}

interface RestartAppServerMessage {
  readonly EnvironmentId: string;
  readonly EnvironmentName: string;
}

interface RetrieveEnvironmentInfoMessage {
  readonly EnvironmentId: string;
  readonly EnvironmentName: string;
  readonly InfoType: string;
}

interface RetrieveEnvironmentInfoResultMessage {
  readonly EnvironmentInfo: [];
}

interface S3Location {
  readonly S3Bucket: string;
  readonly S3Key: string;
}

interface S3LocationNotInServiceRegionException {
}

interface S3SubscriptionRequiredException {
}

interface SearchFilter {
  readonly Attribute: string;
  readonly Operator: string;
  readonly Values: [];
}

interface SingleInstanceHealth {
  readonly InstanceId: string;
  readonly HealthStatus: string;
  readonly Color: string;
  readonly Causes: [];
  readonly LaunchedAt: Date;
  readonly ApplicationMetrics: ApplicationMetrics;
  readonly System: SystemStatus;
  readonly Deployment: Deployment;
  readonly AvailabilityZone: string;
  readonly InstanceType: string;
}

interface SolutionStackDescription {
  readonly SolutionStackName: string;
  readonly PermittedFileTypes: [];
}

interface SourceBuildInformation {
  readonly SourceType: string;
  readonly SourceRepository: string;
  readonly SourceLocation: string;
}

interface SourceBundleDeletionException {
}

interface SourceConfiguration {
  readonly ApplicationName: string;
  readonly TemplateName: string;
}

interface StatusCodes {
  readonly Status2xx: number;
  readonly Status3xx: number;
  readonly Status4xx: number;
  readonly Status5xx: number;
}

interface SwapEnvironmentCNAMEsMessage {
  readonly SourceEnvironmentId: string;
  readonly SourceEnvironmentName: string;
  readonly DestinationEnvironmentId: string;
  readonly DestinationEnvironmentName: string;
}

interface SystemStatus {
  readonly CPUUtilization: CPUUtilization;
  readonly LoadAverage: [];
}

interface Tag {
  readonly Key: string;
  readonly Value: string;
}

interface TerminateEnvironmentMessage {
  readonly EnvironmentId: string;
  readonly EnvironmentName: string;
  readonly TerminateResources: boolean;
  readonly ForceTerminate: boolean;
}

interface TooManyApplicationVersionsException {
}

interface TooManyApplicationsException {
}

interface TooManyBucketsException {
}

interface TooManyConfigurationTemplatesException {
}

interface TooManyEnvironmentsException {
}

interface TooManyPlatformsException {
}

interface TooManyTagsException {
}

interface Trigger {
  readonly Name: string;
}

interface UpdateApplicationMessage {
  readonly ApplicationName: string;
  readonly Description: string;
}

interface UpdateApplicationResourceLifecycleMessage {
  readonly ApplicationName: string;
  readonly ResourceLifecycleConfig: ApplicationResourceLifecycleConfig;
}

interface UpdateApplicationVersionMessage {
  readonly ApplicationName: string;
  readonly VersionLabel: string;
  readonly Description: string;
}

interface UpdateConfigurationTemplateMessage {
  readonly ApplicationName: string;
  readonly TemplateName: string;
  readonly Description: string;
  readonly OptionSettings: [];
  readonly OptionsToRemove: [];
}

interface UpdateEnvironmentMessage {
  readonly ApplicationName: string;
  readonly EnvironmentId: string;
  readonly EnvironmentName: string;
  readonly GroupName: string;
  readonly Description: string;
  readonly Tier: EnvironmentTier;
  readonly VersionLabel: string;
  readonly TemplateName: string;
  readonly SolutionStackName: string;
  readonly PlatformArn: string;
  readonly OptionSettings: [];
  readonly OptionsToRemove: [];
}

interface UpdateTagsForResourceMessage {
  readonly ResourceArn: string;
  readonly TagsToAdd: [];
  readonly TagsToRemove: [];
}

interface ValidateConfigurationSettingsMessage {
  readonly ApplicationName: string;
  readonly TemplateName: string;
  readonly EnvironmentName: string;
  readonly OptionSettings: [];
}

interface ValidationMessage {
  readonly Message: string;
  readonly Severity: string;
  readonly Namespace: string;
  readonly OptionName: string;
}

