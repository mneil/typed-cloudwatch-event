/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface BatchAssociateClientDeviceWithCoreDevice {
  readonly entries?: [];
  readonly coreDeviceThingName: string;
}
export interface BatchDisassociateClientDeviceFromCoreDevice {
  readonly entries?: [];
  readonly coreDeviceThingName: string;
}
export interface CancelDeployment {
  readonly deploymentId: string;
}
export interface CreateComponentVersion {
  readonly inlineRecipe?: unknown;
  readonly lambdaFunction?: LambdaFunctionRecipeSource;
  readonly tags?: {[key: string]: any};
  readonly clientToken?: string;
}
export interface CreateDeployment {
  readonly targetArn: string;
  readonly deploymentName?: string;
  readonly components?: {[key: string]: any};
  readonly iotJobConfiguration?: DeploymentIoTJobConfiguration;
  readonly deploymentPolicies?: DeploymentPolicies;
  readonly tags?: {[key: string]: any};
  readonly clientToken?: string;
}
export interface DeleteComponent {
  readonly arn: string;
}
export interface DeleteCoreDevice {
  readonly coreDeviceThingName: string;
}
export interface DescribeComponent {
  readonly arn: string;
}
export interface GetComponent {
  readonly recipeOutputFormat?: string;
  readonly arn: string;
}
export interface GetComponentVersionArtifact {
  readonly arn: string;
  readonly artifactName: string;
}
export interface GetCoreDevice {
  readonly coreDeviceThingName: string;
}
export interface GetDeployment {
  readonly deploymentId: string;
}
export interface ListClientDevicesAssociatedWithCoreDevice {
  readonly coreDeviceThingName: string;
  readonly maxResults?: number;
  readonly nextToken?: string;
}
export interface ListComponentVersions {
  readonly arn: string;
  readonly maxResults?: number;
  readonly nextToken?: string;
}
export interface ListComponents {
  readonly scope?: string;
  readonly maxResults?: number;
  readonly nextToken?: string;
}
export interface ListCoreDevices {
  readonly thingGroupArn?: string;
  readonly status?: string;
  readonly maxResults?: number;
  readonly nextToken?: string;
}
export interface ListDeployments {
  readonly targetArn?: string;
  readonly historyFilter?: string;
  readonly maxResults?: number;
  readonly nextToken?: string;
}
export interface ListEffectiveDeployments {
  readonly coreDeviceThingName: string;
  readonly maxResults?: number;
  readonly nextToken?: string;
}
export interface ListInstalledComponents {
  readonly coreDeviceThingName: string;
  readonly maxResults?: number;
  readonly nextToken?: string;
}
export interface ListTagsForResource {
  readonly resourceArn: string;
}
export interface ResolveComponentCandidates {
  readonly platform: ComponentPlatform;
  readonly componentCandidates: [];
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

interface AssociateClientDeviceWithCoreDeviceEntry {
  readonly thingName: string;
}

interface AssociateClientDeviceWithCoreDeviceErrorEntry {
  readonly thingName: string;
  readonly code: string;
  readonly message: string;
}

interface AssociatedClientDevice {
  readonly thingName: string;
  readonly associationTimestamp: Date;
}

interface BatchAssociateClientDeviceWithCoreDeviceRequest {
  readonly entries: [];
  readonly coreDeviceThingName: string;
}

interface BatchAssociateClientDeviceWithCoreDeviceResponse {
  readonly errorEntries: [];
}

interface BatchDisassociateClientDeviceFromCoreDeviceRequest {
  readonly entries: [];
  readonly coreDeviceThingName: string;
}

interface BatchDisassociateClientDeviceFromCoreDeviceResponse {
  readonly errorEntries: [];
}

interface CancelDeploymentRequest {
  readonly deploymentId: string;
}

interface CancelDeploymentResponse {
  readonly message: string;
}

interface CloudComponentStatus {
  readonly componentState: string;
  readonly message: string;
  readonly errors: {[key: string]: any};
}

interface Component {
  readonly arn: string;
  readonly componentName: string;
  readonly latestVersion: ComponentLatestVersion;
}

interface ComponentCandidate {
  readonly componentName: string;
  readonly componentVersion: string;
  readonly versionRequirements: {[key: string]: any};
}

interface ComponentConfigurationUpdate {
  readonly merge: string;
  readonly reset: [];
}

interface ComponentDependencyRequirement {
  readonly versionRequirement: string;
  readonly dependencyType: string;
}

interface ComponentDeploymentSpecification {
  readonly componentVersion: string;
  readonly configurationUpdate: ComponentConfigurationUpdate;
  readonly runWith: ComponentRunWith;
}

interface ComponentLatestVersion {
  readonly arn: string;
  readonly componentVersion: string;
  readonly creationTimestamp: Date;
  readonly description: string;
  readonly publisher: string;
  readonly platforms: [];
}

interface ComponentPlatform {
  readonly name: string;
  readonly attributes: {[key: string]: any};
}

interface ComponentRunWith {
  readonly posixUser: string;
  readonly systemResourceLimits: SystemResourceLimits;
  readonly windowsUser: string;
}

interface ComponentVersionListItem {
  readonly componentName: string;
  readonly componentVersion: string;
  readonly arn: string;
}

interface ConflictException {
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}

interface CoreDevice {
  readonly coreDeviceThingName: string;
  readonly status: string;
  readonly lastStatusUpdateTimestamp: Date;
}

interface CreateComponentVersionRequest {
  readonly inlineRecipe: unknown;
  readonly lambdaFunction: LambdaFunctionRecipeSource;
  readonly tags: {[key: string]: any};
  readonly clientToken: string;
}

interface CreateComponentVersionResponse {
  readonly arn: string;
  readonly componentName: string;
  readonly componentVersion: string;
  readonly creationTimestamp: Date;
  readonly status: CloudComponentStatus;
}

interface CreateDeploymentRequest {
  readonly targetArn: string;
  readonly deploymentName: string;
  readonly components: {[key: string]: any};
  readonly iotJobConfiguration: DeploymentIoTJobConfiguration;
  readonly deploymentPolicies: DeploymentPolicies;
  readonly tags: {[key: string]: any};
  readonly clientToken: string;
}

interface CreateDeploymentResponse {
  readonly deploymentId: string;
  readonly iotJobId: string;
  readonly iotJobArn: string;
}

interface DeleteComponentRequest {
  readonly arn: string;
}

interface DeleteCoreDeviceRequest {
  readonly coreDeviceThingName: string;
}

interface Deployment {
  readonly targetArn: string;
  readonly revisionId: string;
  readonly deploymentId: string;
  readonly deploymentName: string;
  readonly creationTimestamp: Date;
  readonly deploymentStatus: string;
  readonly isLatestForTarget: boolean;
}

interface DeploymentComponentUpdatePolicy {
  readonly timeoutInSeconds: number;
  readonly action: string;
}

interface DeploymentConfigurationValidationPolicy {
  readonly timeoutInSeconds: number;
}

interface DeploymentIoTJobConfiguration {
  readonly jobExecutionsRolloutConfig: IoTJobExecutionsRolloutConfig;
  readonly abortConfig: IoTJobAbortConfig;
  readonly timeoutConfig: IoTJobTimeoutConfig;
}

interface DeploymentPolicies {
  readonly failureHandlingPolicy: string;
  readonly componentUpdatePolicy: DeploymentComponentUpdatePolicy;
  readonly configurationValidationPolicy: DeploymentConfigurationValidationPolicy;
}

interface DescribeComponentRequest {
  readonly arn: string;
}

interface DescribeComponentResponse {
  readonly arn: string;
  readonly componentName: string;
  readonly componentVersion: string;
  readonly creationTimestamp: Date;
  readonly publisher: string;
  readonly description: string;
  readonly status: CloudComponentStatus;
  readonly platforms: [];
  readonly tags: {[key: string]: any};
}

interface DisassociateClientDeviceFromCoreDeviceEntry {
  readonly thingName: string;
}

interface DisassociateClientDeviceFromCoreDeviceErrorEntry {
  readonly thingName: string;
  readonly code: string;
  readonly message: string;
}

interface EffectiveDeployment {
  readonly deploymentId: string;
  readonly deploymentName: string;
  readonly iotJobId: string;
  readonly iotJobArn: string;
  readonly description: string;
  readonly targetArn: string;
  readonly coreDeviceExecutionStatus: string;
  readonly reason: string;
  readonly creationTimestamp: Date;
  readonly modifiedTimestamp: Date;
}

interface GetComponentRequest {
  readonly recipeOutputFormat: string;
  readonly arn: string;
}

interface GetComponentResponse {
  readonly recipeOutputFormat: string;
  readonly recipe: unknown;
  readonly tags: {[key: string]: any};
}

interface GetComponentVersionArtifactRequest {
  readonly arn: string;
  readonly artifactName: string;
}

interface GetComponentVersionArtifactResponse {
  readonly preSignedUrl: string;
}

interface GetCoreDeviceRequest {
  readonly coreDeviceThingName: string;
}

interface GetCoreDeviceResponse {
  readonly coreDeviceThingName: string;
  readonly coreVersion: string;
  readonly platform: string;
  readonly architecture: string;
  readonly status: string;
  readonly lastStatusUpdateTimestamp: Date;
  readonly tags: {[key: string]: any};
}

interface GetDeploymentRequest {
  readonly deploymentId: string;
}

interface GetDeploymentResponse {
  readonly targetArn: string;
  readonly revisionId: string;
  readonly deploymentId: string;
  readonly deploymentName: string;
  readonly deploymentStatus: string;
  readonly iotJobId: string;
  readonly iotJobArn: string;
  readonly components: {[key: string]: any};
  readonly deploymentPolicies: DeploymentPolicies;
  readonly iotJobConfiguration: DeploymentIoTJobConfiguration;
  readonly creationTimestamp: Date;
  readonly isLatestForTarget: boolean;
  readonly tags: {[key: string]: any};
}

interface InstalledComponent {
  readonly componentName: string;
  readonly componentVersion: string;
  readonly lifecycleState: string;
  readonly lifecycleStateDetails: string;
  readonly isRoot: boolean;
}

interface InternalServerException {
  readonly message: string;
  readonly retryAfterSeconds: number;
}

interface IoTJobAbortConfig {
  readonly criteriaList: [];
}

interface IoTJobAbortCriteria {
  readonly failureType: string;
  readonly action: string;
  readonly thresholdPercentage: unknown;
  readonly minNumberOfExecutedThings: number;
}

interface IoTJobExecutionsRolloutConfig {
  readonly exponentialRate: IoTJobExponentialRolloutRate;
  readonly maximumPerMinute: number;
}

interface IoTJobExponentialRolloutRate {
  readonly baseRatePerMinute: number;
  readonly incrementFactor: unknown;
  readonly rateIncreaseCriteria: IoTJobRateIncreaseCriteria;
}

interface IoTJobRateIncreaseCriteria {
  readonly numberOfNotifiedThings: number;
  readonly numberOfSucceededThings: number;
}

interface IoTJobTimeoutConfig {
  readonly inProgressTimeoutInMinutes: number;
}

interface LambdaContainerParams {
  readonly memorySizeInKB: number;
  readonly mountROSysfs: boolean;
  readonly volumes: [];
  readonly devices: [];
}

interface LambdaDeviceMount {
  readonly path: string;
  readonly permission: string;
  readonly addGroupOwner: boolean;
}

interface LambdaEventSource {
  readonly topic: string;
  readonly type: string;
}

interface LambdaExecutionParameters {
  readonly eventSources: [];
  readonly maxQueueSize: number;
  readonly maxInstancesCount: number;
  readonly maxIdleTimeInSeconds: number;
  readonly timeoutInSeconds: number;
  readonly statusTimeoutInSeconds: number;
  readonly pinned: boolean;
  readonly inputPayloadEncodingType: string;
  readonly execArgs: [];
  readonly environmentVariables: {[key: string]: any};
  readonly linuxProcessParams: LambdaLinuxProcessParams;
}

interface LambdaFunctionRecipeSource {
  readonly lambdaArn: string;
  readonly componentName: string;
  readonly componentVersion: string;
  readonly componentPlatforms: [];
  readonly componentDependencies: {[key: string]: any};
  readonly componentLambdaParameters: LambdaExecutionParameters;
}

interface LambdaLinuxProcessParams {
  readonly isolationMode: string;
  readonly containerParams: LambdaContainerParams;
}

interface LambdaVolumeMount {
  readonly sourcePath: string;
  readonly destinationPath: string;
  readonly permission: string;
  readonly addGroupOwner: boolean;
}

interface ListClientDevicesAssociatedWithCoreDeviceRequest {
  readonly coreDeviceThingName: string;
  readonly maxResults: number;
  readonly nextToken: string;
}

interface ListClientDevicesAssociatedWithCoreDeviceResponse {
  readonly associatedClientDevices: [];
  readonly nextToken: string;
}

interface ListComponentVersionsRequest {
  readonly arn: string;
  readonly maxResults: number;
  readonly nextToken: string;
}

interface ListComponentVersionsResponse {
  readonly componentVersions: [];
  readonly nextToken: string;
}

interface ListComponentsRequest {
  readonly scope: string;
  readonly maxResults: number;
  readonly nextToken: string;
}

interface ListComponentsResponse {
  readonly components: [];
  readonly nextToken: string;
}

interface ListCoreDevicesRequest {
  readonly thingGroupArn: string;
  readonly status: string;
  readonly maxResults: number;
  readonly nextToken: string;
}

interface ListCoreDevicesResponse {
  readonly coreDevices: [];
  readonly nextToken: string;
}

interface ListDeploymentsRequest {
  readonly targetArn: string;
  readonly historyFilter: string;
  readonly maxResults: number;
  readonly nextToken: string;
}

interface ListDeploymentsResponse {
  readonly deployments: [];
  readonly nextToken: string;
}

interface ListEffectiveDeploymentsRequest {
  readonly coreDeviceThingName: string;
  readonly maxResults: number;
  readonly nextToken: string;
}

interface ListEffectiveDeploymentsResponse {
  readonly effectiveDeployments: [];
  readonly nextToken: string;
}

interface ListInstalledComponentsRequest {
  readonly coreDeviceThingName: string;
  readonly maxResults: number;
  readonly nextToken: string;
}

interface ListInstalledComponentsResponse {
  readonly installedComponents: [];
  readonly nextToken: string;
}

interface ListTagsForResourceRequest {
  readonly resourceArn: string;
}

interface ListTagsForResourceResponse {
  readonly tags: {[key: string]: any};
}

interface RequestAlreadyInProgressException {
  readonly message: string;
}

interface ResolveComponentCandidatesRequest {
  readonly platform: ComponentPlatform;
  readonly componentCandidates: [];
}

interface ResolveComponentCandidatesResponse {
  readonly resolvedComponentVersions: [];
}

interface ResolvedComponentVersion {
  readonly arn: string;
  readonly componentName: string;
  readonly componentVersion: string;
  readonly recipe: unknown;
}

interface ResourceNotFoundException {
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}

interface ServiceQuotaExceededException {
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
  readonly quotaCode: string;
  readonly serviceCode: string;
}

interface SystemResourceLimits {
  readonly memory: number;
  readonly cpus: unknown;
}

interface TagResourceRequest {
  readonly resourceArn: string;
  readonly tags: {[key: string]: any};
}

interface TagResourceResponse {
}

interface ThrottlingException {
  readonly message: string;
  readonly quotaCode: string;
  readonly serviceCode: string;
  readonly retryAfterSeconds: number;
}

interface UntagResourceRequest {
  readonly resourceArn: string;
  readonly tagKeys: [];
}

interface UntagResourceResponse {
}

interface ValidationException {
  readonly message: string;
  readonly reason: string;
  readonly fields: [];
}

interface ValidationExceptionField {
  readonly name: string;
  readonly message: string;
}

