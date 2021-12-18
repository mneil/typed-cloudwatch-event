/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface CreateApplication {
  readonly Name: string;
  readonly Description?: string;
  readonly Tags?: {[key: string]: any};
}

export interface CreateConfigurationProfile {
  readonly ApplicationId: string;
  readonly Name: string;
  readonly Description?: string;
  readonly LocationUri: string;
  readonly RetrievalRoleArn?: string;
  readonly Validators?: [];
  readonly Tags?: {[key: string]: any};
  readonly Type?: string;
}

export interface CreateDeploymentStrategy {
  readonly Name: string;
  readonly Description?: string;
  readonly DeploymentDurationInMinutes: number;
  readonly FinalBakeTimeInMinutes?: number;
  readonly GrowthFactor: unknown;
  readonly GrowthType?: string;
  readonly ReplicateTo: string;
  readonly Tags?: {[key: string]: any};
}

export interface CreateEnvironment {
  readonly ApplicationId: string;
  readonly Name: string;
  readonly Description?: string;
  readonly Monitors?: [];
  readonly Tags?: {[key: string]: any};
}

export interface CreateHostedConfigurationVersion {
  readonly ApplicationId: string;
  readonly ConfigurationProfileId: string;
  readonly Description?: string;
  readonly Content: unknown;
  readonly ContentType: string;
  readonly LatestVersionNumber?: number;
}

export interface DeleteApplication {
  readonly ApplicationId: string;
}

export interface DeleteConfigurationProfile {
  readonly ApplicationId: string;
  readonly ConfigurationProfileId: string;
}

export interface DeleteDeploymentStrategy {
  readonly DeploymentStrategyId: string;
}

export interface DeleteEnvironment {
  readonly ApplicationId: string;
  readonly EnvironmentId: string;
}

export interface DeleteHostedConfigurationVersion {
  readonly ApplicationId: string;
  readonly ConfigurationProfileId: string;
  readonly VersionNumber: number;
}

export interface GetApplication {
  readonly ApplicationId: string;
}

export interface GetConfiguration {
  readonly Application: string;
  readonly Environment: string;
  readonly Configuration: string;
  readonly ClientId: string;
  readonly ClientConfigurationVersion?: string;
}

export interface GetConfigurationProfile {
  readonly ApplicationId: string;
  readonly ConfigurationProfileId: string;
}

export interface GetDeployment {
  readonly ApplicationId: string;
  readonly EnvironmentId: string;
  readonly DeploymentNumber: number;
}

export interface GetDeploymentStrategy {
  readonly DeploymentStrategyId: string;
}

export interface GetEnvironment {
  readonly ApplicationId: string;
  readonly EnvironmentId: string;
}

export interface GetHostedConfigurationVersion {
  readonly ApplicationId: string;
  readonly ConfigurationProfileId: string;
  readonly VersionNumber: number;
}

export interface ListApplications {
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface ListConfigurationProfiles {
  readonly ApplicationId: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
  readonly Type?: string;
}

export interface ListDeploymentStrategies {
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface ListDeployments {
  readonly ApplicationId: string;
  readonly EnvironmentId: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface ListEnvironments {
  readonly ApplicationId: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface ListHostedConfigurationVersions {
  readonly ApplicationId: string;
  readonly ConfigurationProfileId: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface ListTagsForResource {
  readonly ResourceArn: string;
}

export interface StartDeployment {
  readonly ApplicationId: string;
  readonly EnvironmentId: string;
  readonly DeploymentStrategyId: string;
  readonly ConfigurationProfileId: string;
  readonly ConfigurationVersion: string;
  readonly Description?: string;
  readonly Tags?: {[key: string]: any};
}

export interface StopDeployment {
  readonly ApplicationId: string;
  readonly EnvironmentId: string;
  readonly DeploymentNumber: number;
}

export interface TagResource {
  readonly ResourceArn: string;
  readonly Tags: {[key: string]: any};
}

export interface UntagResource {
  readonly ResourceArn: string;
  readonly TagKeys: [];
}

export interface UpdateApplication {
  readonly ApplicationId: string;
  readonly Name?: string;
  readonly Description?: string;
}

export interface UpdateConfigurationProfile {
  readonly ApplicationId: string;
  readonly ConfigurationProfileId: string;
  readonly Name?: string;
  readonly Description?: string;
  readonly RetrievalRoleArn?: string;
  readonly Validators?: [];
}

export interface UpdateDeploymentStrategy {
  readonly DeploymentStrategyId: string;
  readonly Description?: string;
  readonly DeploymentDurationInMinutes?: number;
  readonly FinalBakeTimeInMinutes?: number;
  readonly GrowthFactor?: unknown;
  readonly GrowthType?: string;
}

export interface UpdateEnvironment {
  readonly ApplicationId: string;
  readonly EnvironmentId: string;
  readonly Name?: string;
  readonly Description?: string;
  readonly Monitors?: [];
}

export interface ValidateConfiguration {
  readonly ApplicationId: string;
  readonly ConfigurationProfileId: string;
  readonly ConfigurationVersion: string;
}

export interface Application {
  readonly Id?: string;
  readonly Name?: string;
  readonly Description?: string;
}

export interface Applications {
  readonly Items?: [];
  readonly NextToken?: string;
}

export interface BadRequestDetails {
  readonly InvalidConfiguration?: [];
}

export interface BadRequestException {
  readonly Message?: string;
  readonly Reason?: string;
  readonly Details?: BadRequestDetails;
}

export interface Configuration {
  readonly Content?: unknown;
  readonly ConfigurationVersion?: string;
  readonly ContentType?: string;
}

export interface ConfigurationProfile {
  readonly ApplicationId?: string;
  readonly Id?: string;
  readonly Name?: string;
  readonly Description?: string;
  readonly LocationUri?: string;
  readonly RetrievalRoleArn?: string;
  readonly Validators?: [];
  readonly Type?: string;
}

export interface ConfigurationProfileSummary {
  readonly ApplicationId?: string;
  readonly Id?: string;
  readonly Name?: string;
  readonly LocationUri?: string;
  readonly ValidatorTypes?: [];
  readonly Type?: string;
}

export interface ConfigurationProfiles {
  readonly Items?: [];
  readonly NextToken?: string;
}

export interface ConflictException {
  readonly Message?: string;
}

export interface CreateApplicationRequest {
  readonly Name: string;
  readonly Description?: string;
  readonly Tags?: {[key: string]: any};
}

export interface CreateConfigurationProfileRequest {
  readonly ApplicationId: string;
  readonly Name: string;
  readonly Description?: string;
  readonly LocationUri: string;
  readonly RetrievalRoleArn?: string;
  readonly Validators?: [];
  readonly Tags?: {[key: string]: any};
  readonly Type?: string;
}

export interface CreateDeploymentStrategyRequest {
  readonly Name: string;
  readonly Description?: string;
  readonly DeploymentDurationInMinutes: number;
  readonly FinalBakeTimeInMinutes?: number;
  readonly GrowthFactor: unknown;
  readonly GrowthType?: string;
  readonly ReplicateTo: string;
  readonly Tags?: {[key: string]: any};
}

export interface CreateEnvironmentRequest {
  readonly ApplicationId: string;
  readonly Name: string;
  readonly Description?: string;
  readonly Monitors?: [];
  readonly Tags?: {[key: string]: any};
}

export interface CreateHostedConfigurationVersionRequest {
  readonly ApplicationId: string;
  readonly ConfigurationProfileId: string;
  readonly Description?: string;
  readonly Content: unknown;
  readonly ContentType: string;
  readonly LatestVersionNumber?: number;
}

export interface DeleteApplicationRequest {
  readonly ApplicationId: string;
}

export interface DeleteConfigurationProfileRequest {
  readonly ApplicationId: string;
  readonly ConfigurationProfileId: string;
}

export interface DeleteDeploymentStrategyRequest {
  readonly DeploymentStrategyId: string;
}

export interface DeleteEnvironmentRequest {
  readonly ApplicationId: string;
  readonly EnvironmentId: string;
}

export interface DeleteHostedConfigurationVersionRequest {
  readonly ApplicationId: string;
  readonly ConfigurationProfileId: string;
  readonly VersionNumber: number;
}

export interface Deployment {
  readonly ApplicationId?: string;
  readonly EnvironmentId?: string;
  readonly DeploymentStrategyId?: string;
  readonly ConfigurationProfileId?: string;
  readonly DeploymentNumber?: number;
  readonly ConfigurationName?: string;
  readonly ConfigurationLocationUri?: string;
  readonly ConfigurationVersion?: string;
  readonly Description?: string;
  readonly DeploymentDurationInMinutes?: number;
  readonly GrowthType?: string;
  readonly GrowthFactor?: unknown;
  readonly FinalBakeTimeInMinutes?: number;
  readonly State?: string;
  readonly EventLog?: [];
  readonly PercentageComplete?: unknown;
  readonly StartedAt?: Date;
  readonly CompletedAt?: Date;
}

export interface DeploymentEvent {
  readonly EventType?: string;
  readonly TriggeredBy?: string;
  readonly Description?: string;
  readonly OccurredAt?: Date;
}

export interface DeploymentStrategies {
  readonly Items?: [];
  readonly NextToken?: string;
}

export interface DeploymentStrategy {
  readonly Id?: string;
  readonly Name?: string;
  readonly Description?: string;
  readonly DeploymentDurationInMinutes?: number;
  readonly GrowthType?: string;
  readonly GrowthFactor?: unknown;
  readonly FinalBakeTimeInMinutes?: number;
  readonly ReplicateTo?: string;
}

export interface DeploymentSummary {
  readonly DeploymentNumber?: number;
  readonly ConfigurationName?: string;
  readonly ConfigurationVersion?: string;
  readonly DeploymentDurationInMinutes?: number;
  readonly GrowthType?: string;
  readonly GrowthFactor?: unknown;
  readonly FinalBakeTimeInMinutes?: number;
  readonly State?: string;
  readonly PercentageComplete?: unknown;
  readonly StartedAt?: Date;
  readonly CompletedAt?: Date;
}

export interface Deployments {
  readonly Items?: [];
  readonly NextToken?: string;
}

export interface Environment {
  readonly ApplicationId?: string;
  readonly Id?: string;
  readonly Name?: string;
  readonly Description?: string;
  readonly State?: string;
  readonly Monitors?: [];
}

export interface Environments {
  readonly Items?: [];
  readonly NextToken?: string;
}

export interface GetApplicationRequest {
  readonly ApplicationId: string;
}

export interface GetConfigurationProfileRequest {
  readonly ApplicationId: string;
  readonly ConfigurationProfileId: string;
}

export interface GetConfigurationRequest {
  readonly Application: string;
  readonly Environment: string;
  readonly Configuration: string;
  readonly ClientId: string;
  readonly ClientConfigurationVersion?: string;
}

export interface GetDeploymentRequest {
  readonly ApplicationId: string;
  readonly EnvironmentId: string;
  readonly DeploymentNumber: number;
}

export interface GetDeploymentStrategyRequest {
  readonly DeploymentStrategyId: string;
}

export interface GetEnvironmentRequest {
  readonly ApplicationId: string;
  readonly EnvironmentId: string;
}

export interface GetHostedConfigurationVersionRequest {
  readonly ApplicationId: string;
  readonly ConfigurationProfileId: string;
  readonly VersionNumber: number;
}

export interface HostedConfigurationVersion {
  readonly ApplicationId?: string;
  readonly ConfigurationProfileId?: string;
  readonly VersionNumber?: number;
  readonly Description?: string;
  readonly Content?: unknown;
  readonly ContentType?: string;
}

export interface HostedConfigurationVersionSummary {
  readonly ApplicationId?: string;
  readonly ConfigurationProfileId?: string;
  readonly VersionNumber?: number;
  readonly Description?: string;
  readonly ContentType?: string;
}

export interface HostedConfigurationVersions {
  readonly Items?: [];
  readonly NextToken?: string;
}

export interface InternalServerException {
  readonly Message?: string;
}

export interface InvalidConfigurationDetail {
  readonly Constraint?: string;
  readonly Location?: string;
  readonly Reason?: string;
  readonly Type?: string;
}

export interface ListApplicationsRequest {
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface ListConfigurationProfilesRequest {
  readonly ApplicationId: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
  readonly Type?: string;
}

export interface ListDeploymentStrategiesRequest {
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface ListDeploymentsRequest {
  readonly ApplicationId: string;
  readonly EnvironmentId: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface ListEnvironmentsRequest {
  readonly ApplicationId: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface ListHostedConfigurationVersionsRequest {
  readonly ApplicationId: string;
  readonly ConfigurationProfileId: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface ListTagsForResourceRequest {
  readonly ResourceArn: string;
}

export interface Monitor {
  readonly AlarmArn: string;
  readonly AlarmRoleArn?: string;
}

export interface PayloadTooLargeException {
  readonly Message?: string;
  readonly Measure?: string;
  readonly Limit?: unknown;
  readonly Size?: unknown;
}

export interface ResourceNotFoundException {
  readonly Message?: string;
  readonly ResourceName?: string;
}

export interface ResourceTags {
  readonly Tags?: {[key: string]: any};
}

export interface ServiceQuotaExceededException {
  readonly Message?: string;
}

export interface StartDeploymentRequest {
  readonly ApplicationId: string;
  readonly EnvironmentId: string;
  readonly DeploymentStrategyId: string;
  readonly ConfigurationProfileId: string;
  readonly ConfigurationVersion: string;
  readonly Description?: string;
  readonly Tags?: {[key: string]: any};
}

export interface StopDeploymentRequest {
  readonly ApplicationId: string;
  readonly EnvironmentId: string;
  readonly DeploymentNumber: number;
}

export interface TagResourceRequest {
  readonly ResourceArn: string;
  readonly Tags: {[key: string]: any};
}

export interface UntagResourceRequest {
  readonly ResourceArn: string;
  readonly TagKeys: [];
}

export interface UpdateApplicationRequest {
  readonly ApplicationId: string;
  readonly Name?: string;
  readonly Description?: string;
}

export interface UpdateConfigurationProfileRequest {
  readonly ApplicationId: string;
  readonly ConfigurationProfileId: string;
  readonly Name?: string;
  readonly Description?: string;
  readonly RetrievalRoleArn?: string;
  readonly Validators?: [];
}

export interface UpdateDeploymentStrategyRequest {
  readonly DeploymentStrategyId: string;
  readonly Description?: string;
  readonly DeploymentDurationInMinutes?: number;
  readonly FinalBakeTimeInMinutes?: number;
  readonly GrowthFactor?: unknown;
  readonly GrowthType?: string;
}

export interface UpdateEnvironmentRequest {
  readonly ApplicationId: string;
  readonly EnvironmentId: string;
  readonly Name?: string;
  readonly Description?: string;
  readonly Monitors?: [];
}

export interface ValidateConfigurationRequest {
  readonly ApplicationId: string;
  readonly ConfigurationProfileId: string;
  readonly ConfigurationVersion: string;
}

export interface Validator {
  readonly Type: string;
  readonly Content: string;
}


