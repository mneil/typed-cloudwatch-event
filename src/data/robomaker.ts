/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface BatchDeleteWorlds {
  readonly worlds: [];
}
export interface BatchDescribeSimulationJob {
  readonly jobs: [];
}
export interface CancelDeploymentJob {
  readonly job: string;
}
export interface CancelSimulationJob {
  readonly job: string;
}
export interface CancelSimulationJobBatch {
  readonly batch: string;
}
export interface CancelWorldExportJob {
  readonly job: string;
}
export interface CancelWorldGenerationJob {
  readonly job: string;
}
export interface CreateDeploymentJob {
  readonly deploymentConfig?: DeploymentConfig;
  readonly clientRequestToken: string;
  readonly fleet: string;
  readonly deploymentApplicationConfigs: [];
  readonly tags?: {[key: string]: any};
}
export interface CreateFleet {
  readonly name: string;
  readonly tags?: {[key: string]: any};
}
export interface CreateRobot {
  readonly name: string;
  readonly architecture: string;
  readonly greengrassGroupId: string;
  readonly tags?: {[key: string]: any};
}
export interface CreateRobotApplication {
  readonly name: string;
  readonly sources?: [];
  readonly robotSoftwareSuite: RobotSoftwareSuite;
  readonly tags?: {[key: string]: any};
  readonly environment?: Environment;
}
export interface CreateRobotApplicationVersion {
  readonly application: string;
  readonly currentRevisionId?: string;
  readonly s3Etags?: [];
  readonly imageDigest?: string;
}
export interface CreateSimulationApplication {
  readonly name: string;
  readonly sources?: [];
  readonly simulationSoftwareSuite: SimulationSoftwareSuite;
  readonly robotSoftwareSuite: RobotSoftwareSuite;
  readonly renderingEngine?: RenderingEngine;
  readonly tags?: {[key: string]: any};
  readonly environment?: Environment;
}
export interface CreateSimulationApplicationVersion {
  readonly application: string;
  readonly currentRevisionId?: string;
  readonly s3Etags?: [];
  readonly imageDigest?: string;
}
export interface CreateSimulationJob {
  readonly clientRequestToken?: string;
  readonly outputLocation?: OutputLocation;
  readonly loggingConfig?: LoggingConfig;
  readonly maxJobDurationInSeconds: number;
  readonly iamRole: string;
  readonly failureBehavior?: string;
  readonly robotApplications?: [];
  readonly simulationApplications?: [];
  readonly dataSources?: [];
  readonly tags?: {[key: string]: any};
  readonly vpcConfig?: VPCConfig;
  readonly compute?: Compute;
}
export interface CreateWorldExportJob {
  readonly clientRequestToken?: string;
  readonly worlds: [];
  readonly outputLocation: OutputLocation;
  readonly iamRole: string;
  readonly tags?: {[key: string]: any};
}
export interface CreateWorldGenerationJob {
  readonly clientRequestToken?: string;
  readonly template: string;
  readonly worldCount: WorldCount;
  readonly tags?: {[key: string]: any};
  readonly worldTags?: {[key: string]: any};
}
export interface CreateWorldTemplate {
  readonly clientRequestToken?: string;
  readonly name?: string;
  readonly templateBody?: string;
  readonly templateLocation?: TemplateLocation;
  readonly tags?: {[key: string]: any};
}
export interface DeleteFleet {
  readonly fleet: string;
}
export interface DeleteRobot {
  readonly robot: string;
}
export interface DeleteRobotApplication {
  readonly application: string;
  readonly applicationVersion?: string;
}
export interface DeleteSimulationApplication {
  readonly application: string;
  readonly applicationVersion?: string;
}
export interface DeleteWorldTemplate {
  readonly template: string;
}
export interface DeregisterRobot {
  readonly fleet: string;
  readonly robot: string;
}
export interface DescribeDeploymentJob {
  readonly job: string;
}
export interface DescribeFleet {
  readonly fleet: string;
}
export interface DescribeRobot {
  readonly robot: string;
}
export interface DescribeRobotApplication {
  readonly application: string;
  readonly applicationVersion?: string;
}
export interface DescribeSimulationApplication {
  readonly application: string;
  readonly applicationVersion?: string;
}
export interface DescribeSimulationJob {
  readonly job: string;
}
export interface DescribeSimulationJobBatch {
  readonly batch: string;
}
export interface DescribeWorld {
  readonly world: string;
}
export interface DescribeWorldExportJob {
  readonly job: string;
}
export interface DescribeWorldGenerationJob {
  readonly job: string;
}
export interface DescribeWorldTemplate {
  readonly template: string;
}
export interface GetWorldTemplateBody {
  readonly template?: string;
  readonly generationJob?: string;
}
export interface ListDeploymentJobs {
  readonly filters?: [];
  readonly nextToken?: string;
  readonly maxResults?: number;
}
export interface ListFleets {
  readonly nextToken?: string;
  readonly maxResults?: number;
  readonly filters?: [];
}
export interface ListRobotApplications {
  readonly versionQualifier?: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
  readonly filters?: [];
}
export interface ListRobots {
  readonly nextToken?: string;
  readonly maxResults?: number;
  readonly filters?: [];
}
export interface ListSimulationApplications {
  readonly versionQualifier?: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
  readonly filters?: [];
}
export interface ListSimulationJobBatches {
  readonly nextToken?: string;
  readonly maxResults?: number;
  readonly filters?: [];
}
export interface ListSimulationJobs {
  readonly nextToken?: string;
  readonly maxResults?: number;
  readonly filters?: [];
}
export interface ListTagsForResource {
  readonly resourceArn: string;
}
export interface ListWorldExportJobs {
  readonly nextToken?: string;
  readonly maxResults?: number;
  readonly filters?: [];
}
export interface ListWorldGenerationJobs {
  readonly nextToken?: string;
  readonly maxResults?: number;
  readonly filters?: [];
}
export interface ListWorldTemplates {
  readonly nextToken?: string;
  readonly maxResults?: number;
}
export interface ListWorlds {
  readonly nextToken?: string;
  readonly maxResults?: number;
  readonly filters?: [];
}
export interface RegisterRobot {
  readonly fleet: string;
  readonly robot: string;
}
export interface RestartSimulationJob {
  readonly job: string;
}
export interface StartSimulationJobBatch {
  readonly clientRequestToken?: string;
  readonly batchPolicy?: BatchPolicy;
  readonly createSimulationJobRequests: [];
  readonly tags?: {[key: string]: any};
}
export interface SyncDeploymentJob {
  readonly clientRequestToken: string;
  readonly fleet: string;
}
export interface TagResource {
  readonly resourceArn: string;
  readonly tags: {[key: string]: any};
}
export interface UntagResource {
  readonly resourceArn: string;
  readonly tagKeys: [];
}
export interface UpdateRobotApplication {
  readonly application: string;
  readonly sources?: [];
  readonly robotSoftwareSuite: RobotSoftwareSuite;
  readonly currentRevisionId?: string;
  readonly environment?: Environment;
}
export interface UpdateSimulationApplication {
  readonly application: string;
  readonly sources?: [];
  readonly simulationSoftwareSuite: SimulationSoftwareSuite;
  readonly robotSoftwareSuite: RobotSoftwareSuite;
  readonly renderingEngine?: RenderingEngine;
  readonly currentRevisionId?: string;
  readonly environment?: Environment;
}
export interface UpdateWorldTemplate {
  readonly template: string;
  readonly name?: string;
  readonly templateBody?: string;
  readonly templateLocation?: TemplateLocation;
}



interface BatchDeleteWorldsRequest {
  readonly worlds: [];
}

interface BatchDeleteWorldsResponse {
  readonly unprocessedWorlds: [];
}

interface BatchDescribeSimulationJobRequest {
  readonly jobs: [];
}

interface BatchDescribeSimulationJobResponse {
  readonly jobs: [];
  readonly unprocessedJobs: [];
}

interface BatchPolicy {
  readonly timeoutInSeconds: number;
  readonly maxConcurrency: number;
}

interface CancelDeploymentJobRequest {
  readonly job: string;
}

interface CancelDeploymentJobResponse {
}

interface CancelSimulationJobBatchRequest {
  readonly batch: string;
}

interface CancelSimulationJobBatchResponse {
}

interface CancelSimulationJobRequest {
  readonly job: string;
}

interface CancelSimulationJobResponse {
}

interface CancelWorldExportJobRequest {
  readonly job: string;
}

interface CancelWorldExportJobResponse {
}

interface CancelWorldGenerationJobRequest {
  readonly job: string;
}

interface CancelWorldGenerationJobResponse {
}

interface Compute {
  readonly simulationUnitLimit: number;
  readonly computeType: string;
  readonly gpuUnitLimit: number;
}

interface ComputeResponse {
  readonly simulationUnitLimit: number;
  readonly computeType: string;
  readonly gpuUnitLimit: number;
}

interface ConcurrentDeploymentException {
  readonly message: string;
}

interface CreateDeploymentJobRequest {
  readonly deploymentConfig: DeploymentConfig;
  readonly clientRequestToken: string;
  readonly fleet: string;
  readonly deploymentApplicationConfigs: [];
  readonly tags: {[key: string]: any};
}

interface CreateDeploymentJobResponse {
  readonly arn: string;
  readonly fleet: string;
  readonly status: string;
  readonly deploymentApplicationConfigs: [];
  readonly failureReason: string;
  readonly failureCode: string;
  readonly createdAt: Date;
  readonly deploymentConfig: DeploymentConfig;
  readonly tags: {[key: string]: any};
}

interface CreateFleetRequest {
  readonly name: string;
  readonly tags: {[key: string]: any};
}

interface CreateFleetResponse {
  readonly arn: string;
  readonly name: string;
  readonly createdAt: Date;
  readonly tags: {[key: string]: any};
}

interface CreateRobotApplicationRequest {
  readonly name: string;
  readonly sources: [];
  readonly robotSoftwareSuite: RobotSoftwareSuite;
  readonly tags: {[key: string]: any};
  readonly environment: Environment;
}

interface CreateRobotApplicationResponse {
  readonly arn: string;
  readonly name: string;
  readonly version: string;
  readonly sources: [];
  readonly robotSoftwareSuite: RobotSoftwareSuite;
  readonly lastUpdatedAt: Date;
  readonly revisionId: string;
  readonly tags: {[key: string]: any};
  readonly environment: Environment;
}

interface CreateRobotApplicationVersionRequest {
  readonly application: string;
  readonly currentRevisionId: string;
  readonly s3Etags: [];
  readonly imageDigest: string;
}

interface CreateRobotApplicationVersionResponse {
  readonly arn: string;
  readonly name: string;
  readonly version: string;
  readonly sources: [];
  readonly robotSoftwareSuite: RobotSoftwareSuite;
  readonly lastUpdatedAt: Date;
  readonly revisionId: string;
  readonly environment: Environment;
}

interface CreateRobotRequest {
  readonly name: string;
  readonly architecture: string;
  readonly greengrassGroupId: string;
  readonly tags: {[key: string]: any};
}

interface CreateRobotResponse {
  readonly arn: string;
  readonly name: string;
  readonly createdAt: Date;
  readonly greengrassGroupId: string;
  readonly architecture: string;
  readonly tags: {[key: string]: any};
}

interface CreateSimulationApplicationRequest {
  readonly name: string;
  readonly sources: [];
  readonly simulationSoftwareSuite: SimulationSoftwareSuite;
  readonly robotSoftwareSuite: RobotSoftwareSuite;
  readonly renderingEngine: RenderingEngine;
  readonly tags: {[key: string]: any};
  readonly environment: Environment;
}

interface CreateSimulationApplicationResponse {
  readonly arn: string;
  readonly name: string;
  readonly version: string;
  readonly sources: [];
  readonly simulationSoftwareSuite: SimulationSoftwareSuite;
  readonly robotSoftwareSuite: RobotSoftwareSuite;
  readonly renderingEngine: RenderingEngine;
  readonly lastUpdatedAt: Date;
  readonly revisionId: string;
  readonly tags: {[key: string]: any};
  readonly environment: Environment;
}

interface CreateSimulationApplicationVersionRequest {
  readonly application: string;
  readonly currentRevisionId: string;
  readonly s3Etags: [];
  readonly imageDigest: string;
}

interface CreateSimulationApplicationVersionResponse {
  readonly arn: string;
  readonly name: string;
  readonly version: string;
  readonly sources: [];
  readonly simulationSoftwareSuite: SimulationSoftwareSuite;
  readonly robotSoftwareSuite: RobotSoftwareSuite;
  readonly renderingEngine: RenderingEngine;
  readonly lastUpdatedAt: Date;
  readonly revisionId: string;
  readonly environment: Environment;
}

interface CreateSimulationJobRequest {
  readonly clientRequestToken: string;
  readonly outputLocation: OutputLocation;
  readonly loggingConfig: LoggingConfig;
  readonly maxJobDurationInSeconds: number;
  readonly iamRole: string;
  readonly failureBehavior: string;
  readonly robotApplications: [];
  readonly simulationApplications: [];
  readonly dataSources: [];
  readonly tags: {[key: string]: any};
  readonly vpcConfig: VPCConfig;
  readonly compute: Compute;
}

interface CreateSimulationJobResponse {
  readonly arn: string;
  readonly status: string;
  readonly lastStartedAt: Date;
  readonly lastUpdatedAt: Date;
  readonly failureBehavior: string;
  readonly failureCode: string;
  readonly clientRequestToken: string;
  readonly outputLocation: OutputLocation;
  readonly loggingConfig: LoggingConfig;
  readonly maxJobDurationInSeconds: number;
  readonly simulationTimeMillis: number;
  readonly iamRole: string;
  readonly robotApplications: [];
  readonly simulationApplications: [];
  readonly dataSources: [];
  readonly tags: {[key: string]: any};
  readonly vpcConfig: VPCConfigResponse;
  readonly compute: ComputeResponse;
}

interface CreateWorldExportJobRequest {
  readonly clientRequestToken: string;
  readonly worlds: [];
  readonly outputLocation: OutputLocation;
  readonly iamRole: string;
  readonly tags: {[key: string]: any};
}

interface CreateWorldExportJobResponse {
  readonly arn: string;
  readonly status: string;
  readonly createdAt: Date;
  readonly failureCode: string;
  readonly clientRequestToken: string;
  readonly outputLocation: OutputLocation;
  readonly iamRole: string;
  readonly tags: {[key: string]: any};
}

interface CreateWorldGenerationJobRequest {
  readonly clientRequestToken: string;
  readonly template: string;
  readonly worldCount: WorldCount;
  readonly tags: {[key: string]: any};
  readonly worldTags: {[key: string]: any};
}

interface CreateWorldGenerationJobResponse {
  readonly arn: string;
  readonly status: string;
  readonly createdAt: Date;
  readonly failureCode: string;
  readonly clientRequestToken: string;
  readonly template: string;
  readonly worldCount: WorldCount;
  readonly tags: {[key: string]: any};
  readonly worldTags: {[key: string]: any};
}

interface CreateWorldTemplateRequest {
  readonly clientRequestToken: string;
  readonly name: string;
  readonly templateBody: string;
  readonly templateLocation: TemplateLocation;
  readonly tags: {[key: string]: any};
}

interface CreateWorldTemplateResponse {
  readonly arn: string;
  readonly clientRequestToken: string;
  readonly createdAt: Date;
  readonly name: string;
  readonly tags: {[key: string]: any};
}

interface DataSource {
  readonly name: string;
  readonly s3Bucket: string;
  readonly s3Keys: [];
  readonly type: string;
  readonly destination: string;
}

interface DataSourceConfig {
  readonly name: string;
  readonly s3Bucket: string;
  readonly s3Keys: [];
  readonly type: string;
  readonly destination: string;
}

interface DeleteFleetRequest {
  readonly fleet: string;
}

interface DeleteFleetResponse {
}

interface DeleteRobotApplicationRequest {
  readonly application: string;
  readonly applicationVersion: string;
}

interface DeleteRobotApplicationResponse {
}

interface DeleteRobotRequest {
  readonly robot: string;
}

interface DeleteRobotResponse {
}

interface DeleteSimulationApplicationRequest {
  readonly application: string;
  readonly applicationVersion: string;
}

interface DeleteSimulationApplicationResponse {
}

interface DeleteWorldTemplateRequest {
  readonly template: string;
}

interface DeleteWorldTemplateResponse {
}

interface DeploymentApplicationConfig {
  readonly application: string;
  readonly applicationVersion: string;
  readonly launchConfig: DeploymentLaunchConfig;
}

interface DeploymentConfig {
  readonly concurrentDeploymentPercentage: number;
  readonly failureThresholdPercentage: number;
  readonly robotDeploymentTimeoutInSeconds: number;
  readonly downloadConditionFile: S3Object;
}

interface DeploymentJob {
  readonly arn: string;
  readonly fleet: string;
  readonly status: string;
  readonly deploymentApplicationConfigs: [];
  readonly deploymentConfig: DeploymentConfig;
  readonly failureReason: string;
  readonly failureCode: string;
  readonly createdAt: Date;
}

interface DeploymentLaunchConfig {
  readonly packageName: string;
  readonly preLaunchFile: string;
  readonly launchFile: string;
  readonly postLaunchFile: string;
  readonly environmentVariables: {[key: string]: any};
}

interface DeregisterRobotRequest {
  readonly fleet: string;
  readonly robot: string;
}

interface DeregisterRobotResponse {
  readonly fleet: string;
  readonly robot: string;
}

interface DescribeDeploymentJobRequest {
  readonly job: string;
}

interface DescribeDeploymentJobResponse {
  readonly arn: string;
  readonly fleet: string;
  readonly status: string;
  readonly deploymentConfig: DeploymentConfig;
  readonly deploymentApplicationConfigs: [];
  readonly failureReason: string;
  readonly failureCode: string;
  readonly createdAt: Date;
  readonly robotDeploymentSummary: [];
  readonly tags: {[key: string]: any};
}

interface DescribeFleetRequest {
  readonly fleet: string;
}

interface DescribeFleetResponse {
  readonly name: string;
  readonly arn: string;
  readonly robots: [];
  readonly createdAt: Date;
  readonly lastDeploymentStatus: string;
  readonly lastDeploymentJob: string;
  readonly lastDeploymentTime: Date;
  readonly tags: {[key: string]: any};
}

interface DescribeRobotApplicationRequest {
  readonly application: string;
  readonly applicationVersion: string;
}

interface DescribeRobotApplicationResponse {
  readonly arn: string;
  readonly name: string;
  readonly version: string;
  readonly sources: [];
  readonly robotSoftwareSuite: RobotSoftwareSuite;
  readonly revisionId: string;
  readonly lastUpdatedAt: Date;
  readonly tags: {[key: string]: any};
  readonly environment: Environment;
  readonly imageDigest: string;
}

interface DescribeRobotRequest {
  readonly robot: string;
}

interface DescribeRobotResponse {
  readonly arn: string;
  readonly name: string;
  readonly fleetArn: string;
  readonly status: string;
  readonly greengrassGroupId: string;
  readonly createdAt: Date;
  readonly architecture: string;
  readonly lastDeploymentJob: string;
  readonly lastDeploymentTime: Date;
  readonly tags: {[key: string]: any};
}

interface DescribeSimulationApplicationRequest {
  readonly application: string;
  readonly applicationVersion: string;
}

interface DescribeSimulationApplicationResponse {
  readonly arn: string;
  readonly name: string;
  readonly version: string;
  readonly sources: [];
  readonly simulationSoftwareSuite: SimulationSoftwareSuite;
  readonly robotSoftwareSuite: RobotSoftwareSuite;
  readonly renderingEngine: RenderingEngine;
  readonly revisionId: string;
  readonly lastUpdatedAt: Date;
  readonly tags: {[key: string]: any};
  readonly environment: Environment;
  readonly imageDigest: string;
}

interface DescribeSimulationJobBatchRequest {
  readonly batch: string;
}

interface DescribeSimulationJobBatchResponse {
  readonly arn: string;
  readonly status: string;
  readonly lastUpdatedAt: Date;
  readonly createdAt: Date;
  readonly clientRequestToken: string;
  readonly batchPolicy: BatchPolicy;
  readonly failureCode: string;
  readonly failureReason: string;
  readonly failedRequests: [];
  readonly pendingRequests: [];
  readonly createdRequests: [];
  readonly tags: {[key: string]: any};
}

interface DescribeSimulationJobRequest {
  readonly job: string;
}

interface DescribeSimulationJobResponse {
  readonly arn: string;
  readonly name: string;
  readonly status: string;
  readonly lastStartedAt: Date;
  readonly lastUpdatedAt: Date;
  readonly failureBehavior: string;
  readonly failureCode: string;
  readonly failureReason: string;
  readonly clientRequestToken: string;
  readonly outputLocation: OutputLocation;
  readonly loggingConfig: LoggingConfig;
  readonly maxJobDurationInSeconds: number;
  readonly simulationTimeMillis: number;
  readonly iamRole: string;
  readonly robotApplications: [];
  readonly simulationApplications: [];
  readonly dataSources: [];
  readonly tags: {[key: string]: any};
  readonly vpcConfig: VPCConfigResponse;
  readonly networkInterface: NetworkInterface;
  readonly compute: ComputeResponse;
}

interface DescribeWorldExportJobRequest {
  readonly job: string;
}

interface DescribeWorldExportJobResponse {
  readonly arn: string;
  readonly status: string;
  readonly createdAt: Date;
  readonly failureCode: string;
  readonly failureReason: string;
  readonly clientRequestToken: string;
  readonly worlds: [];
  readonly outputLocation: OutputLocation;
  readonly iamRole: string;
  readonly tags: {[key: string]: any};
}

interface DescribeWorldGenerationJobRequest {
  readonly job: string;
}

interface DescribeWorldGenerationJobResponse {
  readonly arn: string;
  readonly status: string;
  readonly createdAt: Date;
  readonly failureCode: string;
  readonly failureReason: string;
  readonly clientRequestToken: string;
  readonly template: string;
  readonly worldCount: WorldCount;
  readonly finishedWorldsSummary: FinishedWorldsSummary;
  readonly tags: {[key: string]: any};
  readonly worldTags: {[key: string]: any};
}

interface DescribeWorldRequest {
  readonly world: string;
}

interface DescribeWorldResponse {
  readonly arn: string;
  readonly generationJob: string;
  readonly template: string;
  readonly createdAt: Date;
  readonly tags: {[key: string]: any};
  readonly worldDescriptionBody: string;
}

interface DescribeWorldTemplateRequest {
  readonly template: string;
}

interface DescribeWorldTemplateResponse {
  readonly arn: string;
  readonly clientRequestToken: string;
  readonly name: string;
  readonly createdAt: Date;
  readonly lastUpdatedAt: Date;
  readonly tags: {[key: string]: any};
  readonly version: string;
}

interface Environment {
  readonly uri: string;
}

interface FailedCreateSimulationJobRequest {
  readonly request: SimulationJobRequest;
  readonly failureReason: string;
  readonly failureCode: string;
  readonly failedAt: Date;
}

interface FailureSummary {
  readonly totalFailureCount: number;
  readonly failures: [];
}

interface Filter {
  readonly name: string;
  readonly values: [];
}

interface FinishedWorldsSummary {
  readonly finishedCount: number;
  readonly succeededWorlds: [];
  readonly failureSummary: FailureSummary;
}

interface Fleet {
  readonly name: string;
  readonly arn: string;
  readonly createdAt: Date;
  readonly lastDeploymentStatus: string;
  readonly lastDeploymentJob: string;
  readonly lastDeploymentTime: Date;
}

interface GetWorldTemplateBodyRequest {
  readonly template: string;
  readonly generationJob: string;
}

interface GetWorldTemplateBodyResponse {
  readonly templateBody: string;
}

interface IdempotentParameterMismatchException {
  readonly message: string;
}

interface InternalServerException {
  readonly message: string;
}

interface InvalidParameterException {
  readonly message: string;
}

interface LaunchConfig {
  readonly packageName: string;
  readonly launchFile: string;
  readonly environmentVariables: {[key: string]: any};
  readonly portForwardingConfig: PortForwardingConfig;
  readonly streamUI: boolean;
  readonly command: [];
}

interface LimitExceededException {
  readonly message: string;
}

interface ListDeploymentJobsRequest {
  readonly filters: [];
  readonly nextToken: string;
  readonly maxResults: number;
}

interface ListDeploymentJobsResponse {
  readonly deploymentJobs: [];
  readonly nextToken: string;
}

interface ListFleetsRequest {
  readonly nextToken: string;
  readonly maxResults: number;
  readonly filters: [];
}

interface ListFleetsResponse {
  readonly fleetDetails: [];
  readonly nextToken: string;
}

interface ListRobotApplicationsRequest {
  readonly versionQualifier: string;
  readonly nextToken: string;
  readonly maxResults: number;
  readonly filters: [];
}

interface ListRobotApplicationsResponse {
  readonly robotApplicationSummaries: [];
  readonly nextToken: string;
}

interface ListRobotsRequest {
  readonly nextToken: string;
  readonly maxResults: number;
  readonly filters: [];
}

interface ListRobotsResponse {
  readonly robots: [];
  readonly nextToken: string;
}

interface ListSimulationApplicationsRequest {
  readonly versionQualifier: string;
  readonly nextToken: string;
  readonly maxResults: number;
  readonly filters: [];
}

interface ListSimulationApplicationsResponse {
  readonly simulationApplicationSummaries: [];
  readonly nextToken: string;
}

interface ListSimulationJobBatchesRequest {
  readonly nextToken: string;
  readonly maxResults: number;
  readonly filters: [];
}

interface ListSimulationJobBatchesResponse {
  readonly simulationJobBatchSummaries: [];
  readonly nextToken: string;
}

interface ListSimulationJobsRequest {
  readonly nextToken: string;
  readonly maxResults: number;
  readonly filters: [];
}

interface ListSimulationJobsResponse {
  readonly simulationJobSummaries: [];
  readonly nextToken: string;
}

interface ListTagsForResourceRequest {
  readonly resourceArn: string;
}

interface ListTagsForResourceResponse {
  readonly tags: {[key: string]: any};
}

interface ListWorldExportJobsRequest {
  readonly nextToken: string;
  readonly maxResults: number;
  readonly filters: [];
}

interface ListWorldExportJobsResponse {
  readonly worldExportJobSummaries: [];
  readonly nextToken: string;
}

interface ListWorldGenerationJobsRequest {
  readonly nextToken: string;
  readonly maxResults: number;
  readonly filters: [];
}

interface ListWorldGenerationJobsResponse {
  readonly worldGenerationJobSummaries: [];
  readonly nextToken: string;
}

interface ListWorldTemplatesRequest {
  readonly nextToken: string;
  readonly maxResults: number;
}

interface ListWorldTemplatesResponse {
  readonly templateSummaries: [];
  readonly nextToken: string;
}

interface ListWorldsRequest {
  readonly nextToken: string;
  readonly maxResults: number;
  readonly filters: [];
}

interface ListWorldsResponse {
  readonly worldSummaries: [];
  readonly nextToken: string;
}

interface LoggingConfig {
  readonly recordAllRosTopics: boolean;
}

interface NetworkInterface {
  readonly networkInterfaceId: string;
  readonly privateIpAddress: string;
  readonly publicIpAddress: string;
}

interface OutputLocation {
  readonly s3Bucket: string;
  readonly s3Prefix: string;
}

interface PortForwardingConfig {
  readonly portMappings: [];
}

interface PortMapping {
  readonly jobPort: number;
  readonly applicationPort: number;
  readonly enableOnPublicIp: boolean;
}

interface ProgressDetail {
  readonly currentProgress: string;
  readonly percentDone: unknown;
  readonly estimatedTimeRemainingSeconds: number;
  readonly targetResource: string;
}

interface RegisterRobotRequest {
  readonly fleet: string;
  readonly robot: string;
}

interface RegisterRobotResponse {
  readonly fleet: string;
  readonly robot: string;
}

interface RenderingEngine {
  readonly name: string;
  readonly version: string;
}

interface ResourceAlreadyExistsException {
  readonly message: string;
}

interface ResourceNotFoundException {
  readonly message: string;
}

interface RestartSimulationJobRequest {
  readonly job: string;
}

interface RestartSimulationJobResponse {
}

interface Robot {
  readonly arn: string;
  readonly name: string;
  readonly fleetArn: string;
  readonly status: string;
  readonly greenGrassGroupId: string;
  readonly createdAt: Date;
  readonly architecture: string;
  readonly lastDeploymentJob: string;
  readonly lastDeploymentTime: Date;
}

interface RobotApplicationConfig {
  readonly application: string;
  readonly applicationVersion: string;
  readonly launchConfig: LaunchConfig;
  readonly uploadConfigurations: [];
  readonly useDefaultUploadConfigurations: boolean;
  readonly tools: [];
  readonly useDefaultTools: boolean;
}

interface RobotApplicationSummary {
  readonly name: string;
  readonly arn: string;
  readonly version: string;
  readonly lastUpdatedAt: Date;
  readonly robotSoftwareSuite: RobotSoftwareSuite;
}

interface RobotDeployment {
  readonly arn: string;
  readonly deploymentStartTime: Date;
  readonly deploymentFinishTime: Date;
  readonly status: string;
  readonly progressDetail: ProgressDetail;
  readonly failureReason: string;
  readonly failureCode: string;
}

interface RobotSoftwareSuite {
  readonly name: string;
  readonly version: string;
}

interface S3KeyOutput {
  readonly s3Key: string;
  readonly etag: string;
}

interface S3Object {
  readonly bucket: string;
  readonly key: string;
  readonly etag: string;
}

interface ServiceUnavailableException {
  readonly message: string;
}

interface SimulationApplicationConfig {
  readonly application: string;
  readonly applicationVersion: string;
  readonly launchConfig: LaunchConfig;
  readonly uploadConfigurations: [];
  readonly worldConfigs: [];
  readonly useDefaultUploadConfigurations: boolean;
  readonly tools: [];
  readonly useDefaultTools: boolean;
}

interface SimulationApplicationSummary {
  readonly name: string;
  readonly arn: string;
  readonly version: string;
  readonly lastUpdatedAt: Date;
  readonly robotSoftwareSuite: RobotSoftwareSuite;
  readonly simulationSoftwareSuite: SimulationSoftwareSuite;
}

interface SimulationJob {
  readonly arn: string;
  readonly name: string;
  readonly status: string;
  readonly lastStartedAt: Date;
  readonly lastUpdatedAt: Date;
  readonly failureBehavior: string;
  readonly failureCode: string;
  readonly failureReason: string;
  readonly clientRequestToken: string;
  readonly outputLocation: OutputLocation;
  readonly loggingConfig: LoggingConfig;
  readonly maxJobDurationInSeconds: number;
  readonly simulationTimeMillis: number;
  readonly iamRole: string;
  readonly robotApplications: [];
  readonly simulationApplications: [];
  readonly dataSources: [];
  readonly tags: {[key: string]: any};
  readonly vpcConfig: VPCConfigResponse;
  readonly networkInterface: NetworkInterface;
  readonly compute: ComputeResponse;
}

interface SimulationJobBatchSummary {
  readonly arn: string;
  readonly lastUpdatedAt: Date;
  readonly createdAt: Date;
  readonly status: string;
  readonly failedRequestCount: number;
  readonly pendingRequestCount: number;
  readonly createdRequestCount: number;
}

interface SimulationJobRequest {
  readonly outputLocation: OutputLocation;
  readonly loggingConfig: LoggingConfig;
  readonly maxJobDurationInSeconds: number;
  readonly iamRole: string;
  readonly failureBehavior: string;
  readonly useDefaultApplications: boolean;
  readonly robotApplications: [];
  readonly simulationApplications: [];
  readonly dataSources: [];
  readonly vpcConfig: VPCConfig;
  readonly compute: Compute;
  readonly tags: {[key: string]: any};
}

interface SimulationJobSummary {
  readonly arn: string;
  readonly lastUpdatedAt: Date;
  readonly name: string;
  readonly status: string;
  readonly simulationApplicationNames: [];
  readonly robotApplicationNames: [];
  readonly dataSourceNames: [];
  readonly computeType: string;
}

interface SimulationSoftwareSuite {
  readonly name: string;
  readonly version: string;
}

interface Source {
  readonly s3Bucket: string;
  readonly s3Key: string;
  readonly etag: string;
  readonly architecture: string;
}

interface SourceConfig {
  readonly s3Bucket: string;
  readonly s3Key: string;
  readonly architecture: string;
}

interface StartSimulationJobBatchRequest {
  readonly clientRequestToken: string;
  readonly batchPolicy: BatchPolicy;
  readonly createSimulationJobRequests: [];
  readonly tags: {[key: string]: any};
}

interface StartSimulationJobBatchResponse {
  readonly arn: string;
  readonly status: string;
  readonly createdAt: Date;
  readonly clientRequestToken: string;
  readonly batchPolicy: BatchPolicy;
  readonly failureCode: string;
  readonly failureReason: string;
  readonly failedRequests: [];
  readonly pendingRequests: [];
  readonly createdRequests: [];
  readonly tags: {[key: string]: any};
}

interface SyncDeploymentJobRequest {
  readonly clientRequestToken: string;
  readonly fleet: string;
}

interface SyncDeploymentJobResponse {
  readonly arn: string;
  readonly fleet: string;
  readonly status: string;
  readonly deploymentConfig: DeploymentConfig;
  readonly deploymentApplicationConfigs: [];
  readonly failureReason: string;
  readonly failureCode: string;
  readonly createdAt: Date;
}

interface TagResourceRequest {
  readonly resourceArn: string;
  readonly tags: {[key: string]: any};
}

interface TagResourceResponse {
}

interface TemplateLocation {
  readonly s3Bucket: string;
  readonly s3Key: string;
}

interface TemplateSummary {
  readonly arn: string;
  readonly createdAt: Date;
  readonly lastUpdatedAt: Date;
  readonly name: string;
  readonly version: string;
}

interface ThrottlingException {
  readonly message: string;
}

interface Tool {
  readonly streamUI: boolean;
  readonly name: string;
  readonly command: string;
  readonly streamOutputToCloudWatch: boolean;
  readonly exitBehavior: string;
}

interface UntagResourceRequest {
  readonly resourceArn: string;
  readonly tagKeys: [];
}

interface UntagResourceResponse {
}

interface UpdateRobotApplicationRequest {
  readonly application: string;
  readonly sources: [];
  readonly robotSoftwareSuite: RobotSoftwareSuite;
  readonly currentRevisionId: string;
  readonly environment: Environment;
}

interface UpdateRobotApplicationResponse {
  readonly arn: string;
  readonly name: string;
  readonly version: string;
  readonly sources: [];
  readonly robotSoftwareSuite: RobotSoftwareSuite;
  readonly lastUpdatedAt: Date;
  readonly revisionId: string;
  readonly environment: Environment;
}

interface UpdateSimulationApplicationRequest {
  readonly application: string;
  readonly sources: [];
  readonly simulationSoftwareSuite: SimulationSoftwareSuite;
  readonly robotSoftwareSuite: RobotSoftwareSuite;
  readonly renderingEngine: RenderingEngine;
  readonly currentRevisionId: string;
  readonly environment: Environment;
}

interface UpdateSimulationApplicationResponse {
  readonly arn: string;
  readonly name: string;
  readonly version: string;
  readonly sources: [];
  readonly simulationSoftwareSuite: SimulationSoftwareSuite;
  readonly robotSoftwareSuite: RobotSoftwareSuite;
  readonly renderingEngine: RenderingEngine;
  readonly lastUpdatedAt: Date;
  readonly revisionId: string;
  readonly environment: Environment;
}

interface UpdateWorldTemplateRequest {
  readonly template: string;
  readonly name: string;
  readonly templateBody: string;
  readonly templateLocation: TemplateLocation;
}

interface UpdateWorldTemplateResponse {
  readonly arn: string;
  readonly name: string;
  readonly createdAt: Date;
  readonly lastUpdatedAt: Date;
}

interface UploadConfiguration {
  readonly name: string;
  readonly path: string;
  readonly uploadBehavior: string;
}

interface VPCConfig {
  readonly subnets: [];
  readonly securityGroups: [];
  readonly assignPublicIp: boolean;
}

interface VPCConfigResponse {
  readonly subnets: [];
  readonly securityGroups: [];
  readonly vpcId: string;
  readonly assignPublicIp: boolean;
}

interface WorldConfig {
  readonly world: string;
}

interface WorldCount {
  readonly floorplanCount: number;
  readonly interiorCountPerFloorplan: number;
}

interface WorldExportJobSummary {
  readonly arn: string;
  readonly status: string;
  readonly createdAt: Date;
  readonly worlds: [];
}

interface WorldFailure {
  readonly failureCode: string;
  readonly sampleFailureReason: string;
  readonly failureCount: number;
}

interface WorldGenerationJobSummary {
  readonly arn: string;
  readonly template: string;
  readonly createdAt: Date;
  readonly status: string;
  readonly worldCount: WorldCount;
  readonly succeededWorldCount: number;
  readonly failedWorldCount: number;
}

interface WorldSummary {
  readonly arn: string;
  readonly createdAt: Date;
  readonly generationJob: string;
  readonly template: string;
}

