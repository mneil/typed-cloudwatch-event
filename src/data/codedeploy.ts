/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface AddTagsToOnPremisesInstances {
  readonly tags: [];
  readonly instanceNames: [];
}

export interface BatchGetApplicationRevisions {
  readonly applicationName: string;
  readonly revisions: [];
}

export interface BatchGetApplications {
  readonly applicationNames: [];
}

export interface BatchGetDeploymentGroups {
  readonly applicationName: string;
  readonly deploymentGroupNames: [];
}

export interface BatchGetDeploymentInstances {
  readonly deploymentId: string;
  readonly instanceIds: [];
}

export interface BatchGetDeploymentTargets {
  readonly deploymentId?: string;
  readonly targetIds?: [];
}

export interface BatchGetDeployments {
  readonly deploymentIds: [];
}

export interface BatchGetOnPremisesInstances {
  readonly instanceNames: [];
}

export interface ContinueDeployment {
  readonly deploymentId?: string;
  readonly deploymentWaitType?: string;
}

export interface CreateApplication {
  readonly applicationName: string;
  readonly computePlatform?: string;
  readonly tags?: [];
}

export interface CreateDeployment {
  readonly applicationName: string;
  readonly deploymentGroupName?: string;
  readonly revision?: RevisionLocation;
  readonly deploymentConfigName?: string;
  readonly description?: string;
  readonly ignoreApplicationStopFailures?: boolean;
  readonly targetInstances?: TargetInstances;
  readonly autoRollbackConfiguration?: AutoRollbackConfiguration;
  readonly updateOutdatedInstancesOnly?: boolean;
  readonly fileExistsBehavior?: string;
}

export interface CreateDeploymentConfig {
  readonly deploymentConfigName: string;
  readonly minimumHealthyHosts?: MinimumHealthyHosts;
  readonly trafficRoutingConfig?: TrafficRoutingConfig;
  readonly computePlatform?: string;
}

export interface CreateDeploymentGroup {
  readonly applicationName: string;
  readonly deploymentGroupName: string;
  readonly deploymentConfigName?: string;
  readonly ec2TagFilters?: [];
  readonly onPremisesInstanceTagFilters?: [];
  readonly autoScalingGroups?: [];
  readonly serviceRoleArn: string;
  readonly triggerConfigurations?: [];
  readonly alarmConfiguration?: AlarmConfiguration;
  readonly autoRollbackConfiguration?: AutoRollbackConfiguration;
  readonly outdatedInstancesStrategy?: string;
  readonly deploymentStyle?: DeploymentStyle;
  readonly blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;
  readonly loadBalancerInfo?: LoadBalancerInfo;
  readonly ec2TagSet?: EC2TagSet;
  readonly ecsServices?: [];
  readonly onPremisesTagSet?: OnPremisesTagSet;
  readonly tags?: [];
}

export interface DeleteApplication {
  readonly applicationName: string;
}

export interface DeleteDeploymentConfig {
  readonly deploymentConfigName: string;
}

export interface DeleteDeploymentGroup {
  readonly applicationName: string;
  readonly deploymentGroupName: string;
}

export interface DeleteGitHubAccountToken {
  readonly tokenName?: string;
}

export interface DeleteResourcesByExternalId {
  readonly externalId?: string;
}

export interface DeregisterOnPremisesInstance {
  readonly instanceName: string;
}

export interface GetApplication {
  readonly applicationName: string;
}

export interface GetApplicationRevision {
  readonly applicationName: string;
  readonly revision: RevisionLocation;
}

export interface GetDeployment {
  readonly deploymentId: string;
}

export interface GetDeploymentConfig {
  readonly deploymentConfigName: string;
}

export interface GetDeploymentGroup {
  readonly applicationName: string;
  readonly deploymentGroupName: string;
}

export interface GetDeploymentInstance {
  readonly deploymentId: string;
  readonly instanceId: string;
}

export interface GetDeploymentTarget {
  readonly deploymentId?: string;
  readonly targetId?: string;
}

export interface GetOnPremisesInstance {
  readonly instanceName: string;
}

export interface ListApplicationRevisions {
  readonly applicationName: string;
  readonly sortBy?: string;
  readonly sortOrder?: string;
  readonly s3Bucket?: string;
  readonly s3KeyPrefix?: string;
  readonly deployed?: string;
  readonly nextToken?: string;
}

export interface ListApplications {
  readonly nextToken?: string;
}

export interface ListDeploymentConfigs {
  readonly nextToken?: string;
}

export interface ListDeploymentGroups {
  readonly applicationName: string;
  readonly nextToken?: string;
}

export interface ListDeploymentInstances {
  readonly deploymentId: string;
  readonly nextToken?: string;
  readonly instanceStatusFilter?: [];
  readonly instanceTypeFilter?: [];
}

export interface ListDeploymentTargets {
  readonly deploymentId?: string;
  readonly nextToken?: string;
  readonly targetFilters?: {[key: string]: any};
}

export interface ListDeployments {
  readonly applicationName?: string;
  readonly deploymentGroupName?: string;
  readonly externalId?: string;
  readonly includeOnlyStatuses?: [];
  readonly createTimeRange?: TimeRange;
  readonly nextToken?: string;
}

export interface ListGitHubAccountTokenNames {
  readonly nextToken?: string;
}

export interface ListOnPremisesInstances {
  readonly registrationStatus?: string;
  readonly tagFilters?: [];
  readonly nextToken?: string;
}

export interface ListTagsForResource {
  readonly ResourceArn: string;
  readonly NextToken?: string;
}

export interface PutLifecycleEventHookExecutionStatus {
  readonly deploymentId?: string;
  readonly lifecycleEventHookExecutionId?: string;
  readonly status?: string;
}

export interface RegisterApplicationRevision {
  readonly applicationName: string;
  readonly description?: string;
  readonly revision: RevisionLocation;
}

export interface RegisterOnPremisesInstance {
  readonly instanceName: string;
  readonly iamSessionArn?: string;
  readonly iamUserArn?: string;
}

export interface RemoveTagsFromOnPremisesInstances {
  readonly tags: [];
  readonly instanceNames: [];
}

export interface SkipWaitTimeForInstanceTermination {
  readonly deploymentId?: string;
}

export interface StopDeployment {
  readonly deploymentId: string;
  readonly autoRollbackEnabled?: boolean;
}

export interface TagResource {
  readonly ResourceArn: string;
  readonly Tags: [];
}

export interface UntagResource {
  readonly ResourceArn: string;
  readonly TagKeys: [];
}

export interface UpdateApplication {
  readonly applicationName?: string;
  readonly newApplicationName?: string;
}

export interface UpdateDeploymentGroup {
  readonly applicationName: string;
  readonly currentDeploymentGroupName: string;
  readonly newDeploymentGroupName?: string;
  readonly deploymentConfigName?: string;
  readonly ec2TagFilters?: [];
  readonly onPremisesInstanceTagFilters?: [];
  readonly autoScalingGroups?: [];
  readonly serviceRoleArn?: string;
  readonly triggerConfigurations?: [];
  readonly alarmConfiguration?: AlarmConfiguration;
  readonly autoRollbackConfiguration?: AutoRollbackConfiguration;
  readonly outdatedInstancesStrategy?: string;
  readonly deploymentStyle?: DeploymentStyle;
  readonly blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;
  readonly loadBalancerInfo?: LoadBalancerInfo;
  readonly ec2TagSet?: EC2TagSet;
  readonly ecsServices?: [];
  readonly onPremisesTagSet?: OnPremisesTagSet;
}

export interface AddTagsToOnPremisesInstancesInput {
  readonly tags: [];
  readonly instanceNames: [];
}

export interface Alarm {
  readonly name?: string;
}

export interface AlarmConfiguration {
  readonly enabled?: boolean;
  readonly ignorePollAlarmFailure?: boolean;
  readonly alarms?: [];
}

export interface AlarmsLimitExceededException {
}

export interface AppSpecContent {
  readonly content?: string;
  readonly sha256?: string;
}

export interface ApplicationAlreadyExistsException {
}

export interface ApplicationDoesNotExistException {
}

export interface ApplicationInfo {
  readonly applicationId?: string;
  readonly applicationName?: string;
  readonly createTime?: Date;
  readonly linkedToGitHub?: boolean;
  readonly gitHubAccountName?: string;
  readonly computePlatform?: string;
}

export interface ApplicationLimitExceededException {
}

export interface ApplicationNameRequiredException {
}

export interface ArnNotSupportedException {
}

export interface AutoRollbackConfiguration {
  readonly enabled?: boolean;
  readonly events?: [];
}

export interface AutoScalingGroup {
  readonly name?: string;
  readonly hook?: string;
}

export interface BatchGetApplicationRevisionsInput {
  readonly applicationName: string;
  readonly revisions: [];
}

export interface BatchGetApplicationRevisionsOutput {
  readonly applicationName?: string;
  readonly errorMessage?: string;
  readonly revisions?: [];
}

export interface BatchGetApplicationsInput {
  readonly applicationNames: [];
}

export interface BatchGetApplicationsOutput {
  readonly applicationsInfo?: [];
}

export interface BatchGetDeploymentGroupsInput {
  readonly applicationName: string;
  readonly deploymentGroupNames: [];
}

export interface BatchGetDeploymentGroupsOutput {
  readonly deploymentGroupsInfo?: [];
  readonly errorMessage?: string;
}

export interface BatchGetDeploymentInstancesInput {
  readonly deploymentId: string;
  readonly instanceIds: [];
}

export interface BatchGetDeploymentInstancesOutput {
  readonly instancesSummary?: [];
  readonly errorMessage?: string;
}

export interface BatchGetDeploymentTargetsInput {
  readonly deploymentId?: string;
  readonly targetIds?: [];
}

export interface BatchGetDeploymentTargetsOutput {
  readonly deploymentTargets?: [];
}

export interface BatchGetDeploymentsInput {
  readonly deploymentIds: [];
}

export interface BatchGetDeploymentsOutput {
  readonly deploymentsInfo?: [];
}

export interface BatchGetOnPremisesInstancesInput {
  readonly instanceNames: [];
}

export interface BatchGetOnPremisesInstancesOutput {
  readonly instanceInfos?: [];
}

export interface BatchLimitExceededException {
}

export interface BlueGreenDeploymentConfiguration {
  readonly terminateBlueInstancesOnDeploymentSuccess?: BlueInstanceTerminationOption;
  readonly deploymentReadyOption?: DeploymentReadyOption;
  readonly greenFleetProvisioningOption?: GreenFleetProvisioningOption;
}

export interface BlueInstanceTerminationOption {
  readonly action?: string;
  readonly terminationWaitTimeInMinutes?: number;
}

export interface BucketNameFilterRequiredException {
}

export interface CloudFormationTarget {
  readonly deploymentId?: string;
  readonly targetId?: string;
  readonly lastUpdatedAt?: Date;
  readonly lifecycleEvents?: [];
  readonly status?: string;
  readonly resourceType?: string;
  readonly targetVersionWeight?: unknown;
}

export interface ContinueDeploymentInput {
  readonly deploymentId?: string;
  readonly deploymentWaitType?: string;
}

export interface CreateApplicationInput {
  readonly applicationName: string;
  readonly computePlatform?: string;
  readonly tags?: [];
}

export interface CreateApplicationOutput {
  readonly applicationId?: string;
}

export interface CreateDeploymentConfigInput {
  readonly deploymentConfigName: string;
  readonly minimumHealthyHosts?: MinimumHealthyHosts;
  readonly trafficRoutingConfig?: TrafficRoutingConfig;
  readonly computePlatform?: string;
}

export interface CreateDeploymentConfigOutput {
  readonly deploymentConfigId?: string;
}

export interface CreateDeploymentGroupInput {
  readonly applicationName: string;
  readonly deploymentGroupName: string;
  readonly deploymentConfigName?: string;
  readonly ec2TagFilters?: [];
  readonly onPremisesInstanceTagFilters?: [];
  readonly autoScalingGroups?: [];
  readonly serviceRoleArn: string;
  readonly triggerConfigurations?: [];
  readonly alarmConfiguration?: AlarmConfiguration;
  readonly autoRollbackConfiguration?: AutoRollbackConfiguration;
  readonly outdatedInstancesStrategy?: string;
  readonly deploymentStyle?: DeploymentStyle;
  readonly blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;
  readonly loadBalancerInfo?: LoadBalancerInfo;
  readonly ec2TagSet?: EC2TagSet;
  readonly ecsServices?: [];
  readonly onPremisesTagSet?: OnPremisesTagSet;
  readonly tags?: [];
}

export interface CreateDeploymentGroupOutput {
  readonly deploymentGroupId?: string;
}

export interface CreateDeploymentInput {
  readonly applicationName: string;
  readonly deploymentGroupName?: string;
  readonly revision?: RevisionLocation;
  readonly deploymentConfigName?: string;
  readonly description?: string;
  readonly ignoreApplicationStopFailures?: boolean;
  readonly targetInstances?: TargetInstances;
  readonly autoRollbackConfiguration?: AutoRollbackConfiguration;
  readonly updateOutdatedInstancesOnly?: boolean;
  readonly fileExistsBehavior?: string;
}

export interface CreateDeploymentOutput {
  readonly deploymentId?: string;
}

export interface DeleteApplicationInput {
  readonly applicationName: string;
}

export interface DeleteDeploymentConfigInput {
  readonly deploymentConfigName: string;
}

export interface DeleteDeploymentGroupInput {
  readonly applicationName: string;
  readonly deploymentGroupName: string;
}

export interface DeleteDeploymentGroupOutput {
  readonly hooksNotCleanedUp?: [];
}

export interface DeleteGitHubAccountTokenInput {
  readonly tokenName?: string;
}

export interface DeleteGitHubAccountTokenOutput {
  readonly tokenName?: string;
}

export interface DeleteResourcesByExternalIdInput {
  readonly externalId?: string;
}

export interface DeleteResourcesByExternalIdOutput {
}

export interface DeploymentAlreadyCompletedException {
}

export interface DeploymentAlreadyStartedException {
}

export interface DeploymentConfigAlreadyExistsException {
}

export interface DeploymentConfigDoesNotExistException {
}

export interface DeploymentConfigInUseException {
}

export interface DeploymentConfigInfo {
  readonly deploymentConfigId?: string;
  readonly deploymentConfigName?: string;
  readonly minimumHealthyHosts?: MinimumHealthyHosts;
  readonly createTime?: Date;
  readonly computePlatform?: string;
  readonly trafficRoutingConfig?: TrafficRoutingConfig;
}

export interface DeploymentConfigLimitExceededException {
}

export interface DeploymentConfigNameRequiredException {
}

export interface DeploymentDoesNotExistException {
}

export interface DeploymentGroupAlreadyExistsException {
}

export interface DeploymentGroupDoesNotExistException {
}

export interface DeploymentGroupInfo {
  readonly applicationName?: string;
  readonly deploymentGroupId?: string;
  readonly deploymentGroupName?: string;
  readonly deploymentConfigName?: string;
  readonly ec2TagFilters?: [];
  readonly onPremisesInstanceTagFilters?: [];
  readonly autoScalingGroups?: [];
  readonly serviceRoleArn?: string;
  readonly targetRevision?: RevisionLocation;
  readonly triggerConfigurations?: [];
  readonly alarmConfiguration?: AlarmConfiguration;
  readonly autoRollbackConfiguration?: AutoRollbackConfiguration;
  readonly deploymentStyle?: DeploymentStyle;
  readonly outdatedInstancesStrategy?: string;
  readonly blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;
  readonly loadBalancerInfo?: LoadBalancerInfo;
  readonly lastSuccessfulDeployment?: LastDeploymentInfo;
  readonly lastAttemptedDeployment?: LastDeploymentInfo;
  readonly ec2TagSet?: EC2TagSet;
  readonly onPremisesTagSet?: OnPremisesTagSet;
  readonly computePlatform?: string;
  readonly ecsServices?: [];
}

export interface DeploymentGroupLimitExceededException {
}

export interface DeploymentGroupNameRequiredException {
}

export interface DeploymentIdRequiredException {
}

export interface DeploymentInfo {
  readonly applicationName?: string;
  readonly deploymentGroupName?: string;
  readonly deploymentConfigName?: string;
  readonly deploymentId?: string;
  readonly previousRevision?: RevisionLocation;
  readonly revision?: RevisionLocation;
  readonly status?: string;
  readonly errorInformation?: ErrorInformation;
  readonly createTime?: Date;
  readonly startTime?: Date;
  readonly completeTime?: Date;
  readonly deploymentOverview?: DeploymentOverview;
  readonly description?: string;
  readonly creator?: string;
  readonly ignoreApplicationStopFailures?: boolean;
  readonly autoRollbackConfiguration?: AutoRollbackConfiguration;
  readonly updateOutdatedInstancesOnly?: boolean;
  readonly rollbackInfo?: RollbackInfo;
  readonly deploymentStyle?: DeploymentStyle;
  readonly targetInstances?: TargetInstances;
  readonly instanceTerminationWaitTimeStarted?: boolean;
  readonly blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;
  readonly loadBalancerInfo?: LoadBalancerInfo;
  readonly additionalDeploymentStatusInfo?: string;
  readonly fileExistsBehavior?: string;
  readonly deploymentStatusMessages?: [];
  readonly computePlatform?: string;
  readonly externalId?: string;
  readonly relatedDeployments?: RelatedDeployments;
}

export interface DeploymentIsNotInReadyStateException {
}

export interface DeploymentLimitExceededException {
}

export interface DeploymentNotStartedException {
}

export interface DeploymentOverview {
  readonly Pending?: number;
  readonly InProgress?: number;
  readonly Succeeded?: number;
  readonly Failed?: number;
  readonly Skipped?: number;
  readonly Ready?: number;
}

export interface DeploymentReadyOption {
  readonly actionOnTimeout?: string;
  readonly waitTimeInMinutes?: number;
}

export interface DeploymentStyle {
  readonly deploymentType?: string;
  readonly deploymentOption?: string;
}

export interface DeploymentTarget {
  readonly deploymentTargetType?: string;
  readonly instanceTarget?: InstanceTarget;
  readonly lambdaTarget?: LambdaTarget;
  readonly ecsTarget?: ECSTarget;
  readonly cloudFormationTarget?: CloudFormationTarget;
}

export interface DeploymentTargetDoesNotExistException {
}

export interface DeploymentTargetIdRequiredException {
}

export interface DeploymentTargetListSizeExceededException {
}

export interface DeregisterOnPremisesInstanceInput {
  readonly instanceName: string;
}

export interface DescriptionTooLongException {
}

export interface Diagnostics {
  readonly errorCode?: string;
  readonly scriptName?: string;
  readonly message?: string;
  readonly logTail?: string;
}

export interface EC2TagFilter {
  readonly Key?: string;
  readonly Value?: string;
  readonly Type?: string;
}

export interface EC2TagSet {
  readonly ec2TagSetList?: [];
}

export interface ECSService {
  readonly serviceName?: string;
  readonly clusterName?: string;
}

export interface ECSServiceMappingLimitExceededException {
}

export interface ECSTarget {
  readonly deploymentId?: string;
  readonly targetId?: string;
  readonly targetArn?: string;
  readonly lastUpdatedAt?: Date;
  readonly lifecycleEvents?: [];
  readonly status?: string;
  readonly taskSetsInfo?: [];
}

export interface ECSTaskSet {
  readonly identifer?: string;
  readonly desiredCount?: number;
  readonly pendingCount?: number;
  readonly runningCount?: number;
  readonly status?: string;
  readonly trafficWeight?: unknown;
  readonly targetGroup?: TargetGroupInfo;
  readonly taskSetLabel?: string;
}

export interface ELBInfo {
  readonly name?: string;
}

export interface ErrorInformation {
  readonly code?: string;
  readonly message?: string;
}

export interface GenericRevisionInfo {
  readonly description?: string;
  readonly deploymentGroups?: [];
  readonly firstUsedTime?: Date;
  readonly lastUsedTime?: Date;
  readonly registerTime?: Date;
}

export interface GetApplicationInput {
  readonly applicationName: string;
}

export interface GetApplicationOutput {
  readonly application?: ApplicationInfo;
}

export interface GetApplicationRevisionInput {
  readonly applicationName: string;
  readonly revision: RevisionLocation;
}

export interface GetApplicationRevisionOutput {
  readonly applicationName?: string;
  readonly revision?: RevisionLocation;
  readonly revisionInfo?: GenericRevisionInfo;
}

export interface GetDeploymentConfigInput {
  readonly deploymentConfigName: string;
}

export interface GetDeploymentConfigOutput {
  readonly deploymentConfigInfo?: DeploymentConfigInfo;
}

export interface GetDeploymentGroupInput {
  readonly applicationName: string;
  readonly deploymentGroupName: string;
}

export interface GetDeploymentGroupOutput {
  readonly deploymentGroupInfo?: DeploymentGroupInfo;
}

export interface GetDeploymentInput {
  readonly deploymentId: string;
}

export interface GetDeploymentInstanceInput {
  readonly deploymentId: string;
  readonly instanceId: string;
}

export interface GetDeploymentInstanceOutput {
  readonly instanceSummary?: InstanceSummary;
}

export interface GetDeploymentOutput {
  readonly deploymentInfo?: DeploymentInfo;
}

export interface GetDeploymentTargetInput {
  readonly deploymentId?: string;
  readonly targetId?: string;
}

export interface GetDeploymentTargetOutput {
  readonly deploymentTarget?: DeploymentTarget;
}

export interface GetOnPremisesInstanceInput {
  readonly instanceName: string;
}

export interface GetOnPremisesInstanceOutput {
  readonly instanceInfo?: InstanceInfo;
}

export interface GitHubAccountTokenDoesNotExistException {
}

export interface GitHubAccountTokenNameRequiredException {
}

export interface GitHubLocation {
  readonly repository?: string;
  readonly commitId?: string;
}

export interface GreenFleetProvisioningOption {
  readonly action?: string;
}

export interface IamArnRequiredException {
}

export interface IamSessionArnAlreadyRegisteredException {
}

export interface IamUserArnAlreadyRegisteredException {
}

export interface IamUserArnRequiredException {
}

export interface InstanceDoesNotExistException {
}

export interface InstanceIdRequiredException {
}

export interface InstanceInfo {
  readonly instanceName?: string;
  readonly iamSessionArn?: string;
  readonly iamUserArn?: string;
  readonly instanceArn?: string;
  readonly registerTime?: Date;
  readonly deregisterTime?: Date;
  readonly tags?: [];
}

export interface InstanceLimitExceededException {
}

export interface InstanceNameAlreadyRegisteredException {
}

export interface InstanceNameRequiredException {
}

export interface InstanceNotRegisteredException {
}

export interface InstanceSummary {
  readonly deploymentId?: string;
  readonly instanceId?: string;
  readonly status?: string;
  readonly lastUpdatedAt?: Date;
  readonly lifecycleEvents?: [];
  readonly instanceType?: string;
}

export interface InstanceTarget {
  readonly deploymentId?: string;
  readonly targetId?: string;
  readonly targetArn?: string;
  readonly status?: string;
  readonly lastUpdatedAt?: Date;
  readonly lifecycleEvents?: [];
  readonly instanceLabel?: string;
}

export interface InvalidAlarmConfigException {
}

export interface InvalidApplicationNameException {
}

export interface InvalidArnException {
}

export interface InvalidAutoRollbackConfigException {
}

export interface InvalidAutoScalingGroupException {
}

export interface InvalidBlueGreenDeploymentConfigurationException {
}

export interface InvalidBucketNameFilterException {
}

export interface InvalidComputePlatformException {
}

export interface InvalidDeployedStateFilterException {
}

export interface InvalidDeploymentConfigNameException {
}

export interface InvalidDeploymentGroupNameException {
}

export interface InvalidDeploymentIdException {
}

export interface InvalidDeploymentInstanceTypeException {
}

export interface InvalidDeploymentStatusException {
}

export interface InvalidDeploymentStyleException {
}

export interface InvalidDeploymentTargetIdException {
}

export interface InvalidDeploymentWaitTypeException {
}

export interface InvalidEC2TagCombinationException {
}

export interface InvalidEC2TagException {
}

export interface InvalidECSServiceException {
}

export interface InvalidExternalIdException {
}

export interface InvalidFileExistsBehaviorException {
}

export interface InvalidGitHubAccountTokenException {
}

export interface InvalidGitHubAccountTokenNameException {
}

export interface InvalidIamSessionArnException {
}

export interface InvalidIamUserArnException {
}

export interface InvalidIgnoreApplicationStopFailuresValueException {
}

export interface InvalidInputException {
}

export interface InvalidInstanceIdException {
}

export interface InvalidInstanceNameException {
}

export interface InvalidInstanceStatusException {
}

export interface InvalidInstanceTypeException {
}

export interface InvalidKeyPrefixFilterException {
}

export interface InvalidLifecycleEventHookExecutionIdException {
}

export interface InvalidLifecycleEventHookExecutionStatusException {
}

export interface InvalidLoadBalancerInfoException {
}

export interface InvalidMinimumHealthyHostValueException {
}

export interface InvalidNextTokenException {
}

export interface InvalidOnPremisesTagCombinationException {
}

export interface InvalidOperationException {
}

export interface InvalidRegistrationStatusException {
}

export interface InvalidRevisionException {
}

export interface InvalidRoleException {
}

export interface InvalidSortByException {
}

export interface InvalidSortOrderException {
}

export interface InvalidTagException {
}

export interface InvalidTagFilterException {
}

export interface InvalidTagsToAddException {
}

export interface InvalidTargetException {
}

export interface InvalidTargetFilterNameException {
}

export interface InvalidTargetGroupPairException {
}

export interface InvalidTargetInstancesException {
}

export interface InvalidTimeRangeException {
}

export interface InvalidTrafficRoutingConfigurationException {
}

export interface InvalidTriggerConfigException {
}

export interface InvalidUpdateOutdatedInstancesOnlyValueException {
}

export interface LambdaFunctionInfo {
  readonly functionName?: string;
  readonly functionAlias?: string;
  readonly currentVersion?: string;
  readonly targetVersion?: string;
  readonly targetVersionWeight?: unknown;
}

export interface LambdaTarget {
  readonly deploymentId?: string;
  readonly targetId?: string;
  readonly targetArn?: string;
  readonly status?: string;
  readonly lastUpdatedAt?: Date;
  readonly lifecycleEvents?: [];
  readonly lambdaFunctionInfo?: LambdaFunctionInfo;
}

export interface LastDeploymentInfo {
  readonly deploymentId?: string;
  readonly status?: string;
  readonly endTime?: Date;
  readonly createTime?: Date;
}

export interface LifecycleEvent {
  readonly lifecycleEventName?: string;
  readonly diagnostics?: Diagnostics;
  readonly startTime?: Date;
  readonly endTime?: Date;
  readonly status?: string;
}

export interface LifecycleEventAlreadyCompletedException {
}

export interface LifecycleHookLimitExceededException {
}

export interface ListApplicationRevisionsInput {
  readonly applicationName: string;
  readonly sortBy?: string;
  readonly sortOrder?: string;
  readonly s3Bucket?: string;
  readonly s3KeyPrefix?: string;
  readonly deployed?: string;
  readonly nextToken?: string;
}

export interface ListApplicationRevisionsOutput {
  readonly revisions?: [];
  readonly nextToken?: string;
}

export interface ListApplicationsInput {
  readonly nextToken?: string;
}

export interface ListApplicationsOutput {
  readonly applications?: [];
  readonly nextToken?: string;
}

export interface ListDeploymentConfigsInput {
  readonly nextToken?: string;
}

export interface ListDeploymentConfigsOutput {
  readonly deploymentConfigsList?: [];
  readonly nextToken?: string;
}

export interface ListDeploymentGroupsInput {
  readonly applicationName: string;
  readonly nextToken?: string;
}

export interface ListDeploymentGroupsOutput {
  readonly applicationName?: string;
  readonly deploymentGroups?: [];
  readonly nextToken?: string;
}

export interface ListDeploymentInstancesInput {
  readonly deploymentId: string;
  readonly nextToken?: string;
  readonly instanceStatusFilter?: [];
  readonly instanceTypeFilter?: [];
}

export interface ListDeploymentInstancesOutput {
  readonly instancesList?: [];
  readonly nextToken?: string;
}

export interface ListDeploymentTargetsInput {
  readonly deploymentId?: string;
  readonly nextToken?: string;
  readonly targetFilters?: {[key: string]: any};
}

export interface ListDeploymentTargetsOutput {
  readonly targetIds?: [];
  readonly nextToken?: string;
}

export interface ListDeploymentsInput {
  readonly applicationName?: string;
  readonly deploymentGroupName?: string;
  readonly externalId?: string;
  readonly includeOnlyStatuses?: [];
  readonly createTimeRange?: TimeRange;
  readonly nextToken?: string;
}

export interface ListDeploymentsOutput {
  readonly deployments?: [];
  readonly nextToken?: string;
}

export interface ListGitHubAccountTokenNamesInput {
  readonly nextToken?: string;
}

export interface ListGitHubAccountTokenNamesOutput {
  readonly tokenNameList?: [];
  readonly nextToken?: string;
}

export interface ListOnPremisesInstancesInput {
  readonly registrationStatus?: string;
  readonly tagFilters?: [];
  readonly nextToken?: string;
}

export interface ListOnPremisesInstancesOutput {
  readonly instanceNames?: [];
  readonly nextToken?: string;
}

export interface ListTagsForResourceInput {
  readonly ResourceArn: string;
  readonly NextToken?: string;
}

export interface ListTagsForResourceOutput {
  readonly Tags?: [];
  readonly NextToken?: string;
}

export interface LoadBalancerInfo {
  readonly elbInfoList?: [];
  readonly targetGroupInfoList?: [];
  readonly targetGroupPairInfoList?: [];
}

export interface MinimumHealthyHosts {
  readonly type?: string;
  readonly value?: number;
}

export interface MultipleIamArnsProvidedException {
}

export interface OnPremisesTagSet {
  readonly onPremisesTagSetList?: [];
}

export interface OperationNotSupportedException {
}

export interface PutLifecycleEventHookExecutionStatusInput {
  readonly deploymentId?: string;
  readonly lifecycleEventHookExecutionId?: string;
  readonly status?: string;
}

export interface PutLifecycleEventHookExecutionStatusOutput {
  readonly lifecycleEventHookExecutionId?: string;
}

export interface RawString {
  readonly content?: string;
  readonly sha256?: string;
}

export interface RegisterApplicationRevisionInput {
  readonly applicationName: string;
  readonly description?: string;
  readonly revision: RevisionLocation;
}

export interface RegisterOnPremisesInstanceInput {
  readonly instanceName: string;
  readonly iamSessionArn?: string;
  readonly iamUserArn?: string;
}

export interface RelatedDeployments {
  readonly autoUpdateOutdatedInstancesRootDeploymentId?: string;
  readonly autoUpdateOutdatedInstancesDeploymentIds?: [];
}

export interface RemoveTagsFromOnPremisesInstancesInput {
  readonly tags: [];
  readonly instanceNames: [];
}

export interface ResourceArnRequiredException {
}

export interface ResourceValidationException {
}

export interface RevisionDoesNotExistException {
}

export interface RevisionInfo {
  readonly revisionLocation?: RevisionLocation;
  readonly genericRevisionInfo?: GenericRevisionInfo;
}

export interface RevisionLocation {
  readonly revisionType?: string;
  readonly s3Location?: S3Location;
  readonly gitHubLocation?: GitHubLocation;
  readonly string?: RawString;
  readonly appSpecContent?: AppSpecContent;
}

export interface RevisionRequiredException {
}

export interface RoleRequiredException {
}

export interface RollbackInfo {
  readonly rollbackDeploymentId?: string;
  readonly rollbackTriggeringDeploymentId?: string;
  readonly rollbackMessage?: string;
}

export interface S3Location {
  readonly bucket?: string;
  readonly key?: string;
  readonly bundleType?: string;
  readonly version?: string;
  readonly eTag?: string;
}

export interface SkipWaitTimeForInstanceTerminationInput {
  readonly deploymentId?: string;
}

export interface StopDeploymentInput {
  readonly deploymentId: string;
  readonly autoRollbackEnabled?: boolean;
}

export interface StopDeploymentOutput {
  readonly status?: string;
  readonly statusMessage?: string;
}

export interface Tag {
  readonly Key?: string;
  readonly Value?: string;
}

export interface TagFilter {
  readonly Key?: string;
  readonly Value?: string;
  readonly Type?: string;
}

export interface TagLimitExceededException {
}

export interface TagRequiredException {
}

export interface TagResourceInput {
  readonly ResourceArn: string;
  readonly Tags: [];
}

export interface TagResourceOutput {
}

export interface TagSetListLimitExceededException {
}

export interface TargetGroupInfo {
  readonly name?: string;
}

export interface TargetGroupPairInfo {
  readonly targetGroups?: [];
  readonly prodTrafficRoute?: TrafficRoute;
  readonly testTrafficRoute?: TrafficRoute;
}

export interface TargetInstances {
  readonly tagFilters?: [];
  readonly autoScalingGroups?: [];
  readonly ec2TagSet?: EC2TagSet;
}

export interface ThrottlingException {
}

export interface TimeBasedCanary {
  readonly canaryPercentage?: number;
  readonly canaryInterval?: number;
}

export interface TimeBasedLinear {
  readonly linearPercentage?: number;
  readonly linearInterval?: number;
}

export interface TimeRange {
  readonly start?: Date;
  readonly end?: Date;
}

export interface TrafficRoute {
  readonly listenerArns?: [];
}

export interface TrafficRoutingConfig {
  readonly type?: string;
  readonly timeBasedCanary?: TimeBasedCanary;
  readonly timeBasedLinear?: TimeBasedLinear;
}

export interface TriggerConfig {
  readonly triggerName?: string;
  readonly triggerTargetArn?: string;
  readonly triggerEvents?: [];
}

export interface TriggerTargetsLimitExceededException {
}

export interface UnsupportedActionForDeploymentTypeException {
}

export interface UntagResourceInput {
  readonly ResourceArn: string;
  readonly TagKeys: [];
}

export interface UntagResourceOutput {
}

export interface UpdateApplicationInput {
  readonly applicationName?: string;
  readonly newApplicationName?: string;
}

export interface UpdateDeploymentGroupInput {
  readonly applicationName: string;
  readonly currentDeploymentGroupName: string;
  readonly newDeploymentGroupName?: string;
  readonly deploymentConfigName?: string;
  readonly ec2TagFilters?: [];
  readonly onPremisesInstanceTagFilters?: [];
  readonly autoScalingGroups?: [];
  readonly serviceRoleArn?: string;
  readonly triggerConfigurations?: [];
  readonly alarmConfiguration?: AlarmConfiguration;
  readonly autoRollbackConfiguration?: AutoRollbackConfiguration;
  readonly outdatedInstancesStrategy?: string;
  readonly deploymentStyle?: DeploymentStyle;
  readonly blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;
  readonly loadBalancerInfo?: LoadBalancerInfo;
  readonly ec2TagSet?: EC2TagSet;
  readonly ecsServices?: [];
  readonly onPremisesTagSet?: OnPremisesTagSet;
}

export interface UpdateDeploymentGroupOutput {
  readonly hooksNotCleanedUp?: [];
}


