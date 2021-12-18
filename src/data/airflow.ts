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

export interface AccessDeniedException {
  readonly Message?: string;
}

export interface CreateCliTokenRequest {
  readonly Name: string;
}

export interface CreateCliTokenResponse {
  readonly CliToken?: string;
  readonly WebServerHostname?: string;
}

export interface CreateEnvironmentInput {
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

export interface CreateEnvironmentOutput {
  readonly Arn?: string;
}

export interface CreateWebLoginTokenRequest {
  readonly Name: string;
}

export interface CreateWebLoginTokenResponse {
  readonly WebServerHostname?: string;
  readonly WebToken?: string;
}

export interface DeleteEnvironmentInput {
  readonly Name: string;
}

export interface DeleteEnvironmentOutput {
}

export interface Dimension {
  readonly Name: string;
  readonly Value: string;
}

export interface Environment {
  readonly AirflowConfigurationOptions?: {[key: string]: any};
  readonly AirflowVersion?: string;
  readonly Arn?: string;
  readonly CreatedAt?: Date;
  readonly DagS3Path?: string;
  readonly EnvironmentClass?: string;
  readonly ExecutionRoleArn?: string;
  readonly KmsKey?: string;
  readonly LastUpdate?: LastUpdate;
  readonly LoggingConfiguration?: LoggingConfiguration;
  readonly MaxWorkers?: number;
  readonly MinWorkers?: number;
  readonly Name?: string;
  readonly NetworkConfiguration?: NetworkConfiguration;
  readonly PluginsS3ObjectVersion?: string;
  readonly PluginsS3Path?: string;
  readonly RequirementsS3ObjectVersion?: string;
  readonly RequirementsS3Path?: string;
  readonly Schedulers?: number;
  readonly ServiceRoleArn?: string;
  readonly SourceBucketArn?: string;
  readonly Status?: string;
  readonly Tags?: {[key: string]: any};
  readonly WebserverAccessMode?: string;
  readonly WebserverUrl?: string;
  readonly WeeklyMaintenanceWindowStart?: string;
}

export interface GetEnvironmentInput {
  readonly Name: string;
}

export interface GetEnvironmentOutput {
  readonly Environment?: Environment;
}

export interface InternalServerException {
  readonly message?: string;
}

export interface LastUpdate {
  readonly CreatedAt?: Date;
  readonly Error?: UpdateError;
  readonly Status?: string;
}

export interface ListEnvironmentsInput {
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface ListEnvironmentsOutput {
  readonly Environments: [];
  readonly NextToken?: string;
}

export interface ListTagsForResourceInput {
  readonly ResourceArn: string;
}

export interface ListTagsForResourceOutput {
  readonly Tags?: {[key: string]: any};
}

export interface LoggingConfiguration {
  readonly DagProcessingLogs?: ModuleLoggingConfiguration;
  readonly SchedulerLogs?: ModuleLoggingConfiguration;
  readonly TaskLogs?: ModuleLoggingConfiguration;
  readonly WebserverLogs?: ModuleLoggingConfiguration;
  readonly WorkerLogs?: ModuleLoggingConfiguration;
}

export interface LoggingConfigurationInput {
  readonly DagProcessingLogs?: ModuleLoggingConfigurationInput;
  readonly SchedulerLogs?: ModuleLoggingConfigurationInput;
  readonly TaskLogs?: ModuleLoggingConfigurationInput;
  readonly WebserverLogs?: ModuleLoggingConfigurationInput;
  readonly WorkerLogs?: ModuleLoggingConfigurationInput;
}

export interface MetricDatum {
  readonly Dimensions?: [];
  readonly MetricName: string;
  readonly StatisticValues?: StatisticSet;
  readonly Timestamp: Date;
  readonly Unit?: string;
  readonly Value?: unknown;
}

export interface ModuleLoggingConfiguration {
  readonly CloudWatchLogGroupArn?: string;
  readonly Enabled?: boolean;
  readonly LogLevel?: string;
}

export interface ModuleLoggingConfigurationInput {
  readonly Enabled: boolean;
  readonly LogLevel: string;
}

export interface NetworkConfiguration {
  readonly SecurityGroupIds?: [];
  readonly SubnetIds?: [];
}

export interface PublishMetricsInput {
  readonly EnvironmentName: string;
  readonly MetricData: [];
}

export interface PublishMetricsOutput {
}

export interface ResourceNotFoundException {
  readonly message?: string;
}

export interface StatisticSet {
  readonly Maximum?: unknown;
  readonly Minimum?: unknown;
  readonly SampleCount?: number;
  readonly Sum?: unknown;
}

export interface TagResourceInput {
  readonly ResourceArn: string;
  readonly Tags: {[key: string]: any};
}

export interface TagResourceOutput {
}

export interface UntagResourceInput {
  readonly ResourceArn: string;
  readonly tagKeys: [];
}

export interface UntagResourceOutput {
}

export interface UpdateEnvironmentInput {
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

export interface UpdateEnvironmentOutput {
  readonly Arn?: string;
}

export interface UpdateError {
  readonly ErrorCode?: string;
  readonly ErrorMessage?: string;
}

export interface UpdateNetworkConfigurationInput {
  readonly SecurityGroupIds: [];
}

export interface ValidationException {
  readonly message?: string;
}


