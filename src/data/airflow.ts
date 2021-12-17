/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface CreateCliToken {
  readonly Name: string;
}
export interface CreateEnvironment {
  readonly AirflowConfigurationOptions?: {[key: string]: any};
  readonly AirflowVersion?: string;
  readonly DagS3Path: string;
  readonly EnvironmentClass?: string;
  readonly ExecutionRoleArn: string;
  readonly KmsKey?: string;
  readonly LoggingConfiguration?: LoggingConfigurationInput;
  readonly MaxWorkers?: number;
  readonly MinWorkers?: number;
  readonly Name: string;
  readonly NetworkConfiguration: NetworkConfiguration;
  readonly PluginsS3ObjectVersion?: string;
  readonly PluginsS3Path?: string;
  readonly RequirementsS3ObjectVersion?: string;
  readonly RequirementsS3Path?: string;
  readonly Schedulers?: number;
  readonly SourceBucketArn: string;
  readonly Tags?: {[key: string]: any};
  readonly WebserverAccessMode?: string;
  readonly WeeklyMaintenanceWindowStart?: string;
}
export interface CreateWebLoginToken {
  readonly Name: string;
}
export interface DeleteEnvironment {
  readonly Name: string;
}
export interface GetEnvironment {
  readonly Name: string;
}
export interface ListEnvironments {
  readonly MaxResults?: number;
  readonly NextToken?: string;
}
export interface ListTagsForResource {
  readonly ResourceArn: string;
}
export interface PublishMetrics {
  readonly EnvironmentName: string;
  readonly MetricData: [];
}
export interface TagResource {
  readonly ResourceArn: string;
  readonly Tags: {[key: string]: any};
}
export interface UntagResource {
  readonly ResourceArn: string;
  readonly tagKeys: [];
}
export interface UpdateEnvironment {
  readonly AirflowConfigurationOptions?: {[key: string]: any};
  readonly AirflowVersion?: string;
  readonly DagS3Path?: string;
  readonly EnvironmentClass?: string;
  readonly ExecutionRoleArn?: string;
  readonly LoggingConfiguration?: LoggingConfigurationInput;
  readonly MaxWorkers?: number;
  readonly MinWorkers?: number;
  readonly Name: string;
  readonly NetworkConfiguration?: UpdateNetworkConfigurationInput;
  readonly PluginsS3ObjectVersion?: string;
  readonly PluginsS3Path?: string;
  readonly RequirementsS3ObjectVersion?: string;
  readonly RequirementsS3Path?: string;
  readonly Schedulers?: number;
  readonly SourceBucketArn?: string;
  readonly WebserverAccessMode?: string;
  readonly WeeklyMaintenanceWindowStart?: string;
}



interface AccessDeniedException {
  readonly Message: string;
}

interface CreateCliTokenRequest {
  readonly Name: string;
}

interface CreateCliTokenResponse {
  readonly CliToken: string;
  readonly WebServerHostname: string;
}

interface CreateEnvironmentInput {
  readonly AirflowConfigurationOptions: {[key: string]: any};
  readonly AirflowVersion: string;
  readonly DagS3Path: string;
  readonly EnvironmentClass: string;
  readonly ExecutionRoleArn: string;
  readonly KmsKey: string;
  readonly LoggingConfiguration: LoggingConfigurationInput;
  readonly MaxWorkers: number;
  readonly MinWorkers: number;
  readonly Name: string;
  readonly NetworkConfiguration: NetworkConfiguration;
  readonly PluginsS3ObjectVersion: string;
  readonly PluginsS3Path: string;
  readonly RequirementsS3ObjectVersion: string;
  readonly RequirementsS3Path: string;
  readonly Schedulers: number;
  readonly SourceBucketArn: string;
  readonly Tags: {[key: string]: any};
  readonly WebserverAccessMode: string;
  readonly WeeklyMaintenanceWindowStart: string;
}

interface CreateEnvironmentOutput {
  readonly Arn: string;
}

interface CreateWebLoginTokenRequest {
  readonly Name: string;
}

interface CreateWebLoginTokenResponse {
  readonly WebServerHostname: string;
  readonly WebToken: string;
}

interface DeleteEnvironmentInput {
  readonly Name: string;
}

interface DeleteEnvironmentOutput {
}

interface Dimension {
  readonly Name: string;
  readonly Value: string;
}

interface Environment {
  readonly AirflowConfigurationOptions: {[key: string]: any};
  readonly AirflowVersion: string;
  readonly Arn: string;
  readonly CreatedAt: Date;
  readonly DagS3Path: string;
  readonly EnvironmentClass: string;
  readonly ExecutionRoleArn: string;
  readonly KmsKey: string;
  readonly LastUpdate: LastUpdate;
  readonly LoggingConfiguration: LoggingConfiguration;
  readonly MaxWorkers: number;
  readonly MinWorkers: number;
  readonly Name: string;
  readonly NetworkConfiguration: NetworkConfiguration;
  readonly PluginsS3ObjectVersion: string;
  readonly PluginsS3Path: string;
  readonly RequirementsS3ObjectVersion: string;
  readonly RequirementsS3Path: string;
  readonly Schedulers: number;
  readonly ServiceRoleArn: string;
  readonly SourceBucketArn: string;
  readonly Status: string;
  readonly Tags: {[key: string]: any};
  readonly WebserverAccessMode: string;
  readonly WebserverUrl: string;
  readonly WeeklyMaintenanceWindowStart: string;
}

interface GetEnvironmentInput {
  readonly Name: string;
}

interface GetEnvironmentOutput {
  readonly Environment: Environment;
}

interface InternalServerException {
  readonly message: string;
}

interface LastUpdate {
  readonly CreatedAt: Date;
  readonly Error: UpdateError;
  readonly Status: string;
}

interface ListEnvironmentsInput {
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface ListEnvironmentsOutput {
  readonly Environments: [];
  readonly NextToken: string;
}

interface ListTagsForResourceInput {
  readonly ResourceArn: string;
}

interface ListTagsForResourceOutput {
  readonly Tags: {[key: string]: any};
}

interface LoggingConfiguration {
  readonly DagProcessingLogs: ModuleLoggingConfiguration;
  readonly SchedulerLogs: ModuleLoggingConfiguration;
  readonly TaskLogs: ModuleLoggingConfiguration;
  readonly WebserverLogs: ModuleLoggingConfiguration;
  readonly WorkerLogs: ModuleLoggingConfiguration;
}

interface LoggingConfigurationInput {
  readonly DagProcessingLogs: ModuleLoggingConfigurationInput;
  readonly SchedulerLogs: ModuleLoggingConfigurationInput;
  readonly TaskLogs: ModuleLoggingConfigurationInput;
  readonly WebserverLogs: ModuleLoggingConfigurationInput;
  readonly WorkerLogs: ModuleLoggingConfigurationInput;
}

interface MetricDatum {
  readonly Dimensions: [];
  readonly MetricName: string;
  readonly StatisticValues: StatisticSet;
  readonly Timestamp: Date;
  readonly Unit: string;
  readonly Value: unknown;
}

interface ModuleLoggingConfiguration {
  readonly CloudWatchLogGroupArn: string;
  readonly Enabled: boolean;
  readonly LogLevel: string;
}

interface ModuleLoggingConfigurationInput {
  readonly Enabled: boolean;
  readonly LogLevel: string;
}

interface NetworkConfiguration {
  readonly SecurityGroupIds: [];
  readonly SubnetIds: [];
}

interface PublishMetricsInput {
  readonly EnvironmentName: string;
  readonly MetricData: [];
}

interface PublishMetricsOutput {
}

interface ResourceNotFoundException {
  readonly message: string;
}

interface StatisticSet {
  readonly Maximum: unknown;
  readonly Minimum: unknown;
  readonly SampleCount: number;
  readonly Sum: unknown;
}

interface TagResourceInput {
  readonly ResourceArn: string;
  readonly Tags: {[key: string]: any};
}

interface TagResourceOutput {
}

interface UntagResourceInput {
  readonly ResourceArn: string;
  readonly tagKeys: [];
}

interface UntagResourceOutput {
}

interface UpdateEnvironmentInput {
  readonly AirflowConfigurationOptions: {[key: string]: any};
  readonly AirflowVersion: string;
  readonly DagS3Path: string;
  readonly EnvironmentClass: string;
  readonly ExecutionRoleArn: string;
  readonly LoggingConfiguration: LoggingConfigurationInput;
  readonly MaxWorkers: number;
  readonly MinWorkers: number;
  readonly Name: string;
  readonly NetworkConfiguration: UpdateNetworkConfigurationInput;
  readonly PluginsS3ObjectVersion: string;
  readonly PluginsS3Path: string;
  readonly RequirementsS3ObjectVersion: string;
  readonly RequirementsS3Path: string;
  readonly Schedulers: number;
  readonly SourceBucketArn: string;
  readonly WebserverAccessMode: string;
  readonly WeeklyMaintenanceWindowStart: string;
}

interface UpdateEnvironmentOutput {
  readonly Arn: string;
}

interface UpdateError {
  readonly ErrorCode: string;
  readonly ErrorMessage: string;
}

interface UpdateNetworkConfigurationInput {
  readonly SecurityGroupIds: [];
}

interface ValidationException {
  readonly message: string;
}

