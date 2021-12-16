/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface AssociateCreatedArtifact {
  readonly ProgressUpdateStream: string;
  readonly MigrationTaskName: string;
  readonly CreatedArtifact: CreatedArtifact;
  readonly DryRun: boolean;
}
export interface AssociateDiscoveredResource {
  readonly ProgressUpdateStream: string;
  readonly MigrationTaskName: string;
  readonly DiscoveredResource: DiscoveredResource;
  readonly DryRun: boolean;
}
export interface CreateProgressUpdateStream {
  readonly ProgressUpdateStreamName: string;
  readonly DryRun: boolean;
}
export interface DeleteProgressUpdateStream {
  readonly ProgressUpdateStreamName: string;
  readonly DryRun: boolean;
}
export interface DescribeApplicationState {
  readonly ApplicationId: string;
}
export interface DescribeMigrationTask {
  readonly ProgressUpdateStream: string;
  readonly MigrationTaskName: string;
}
export interface DisassociateCreatedArtifact {
  readonly ProgressUpdateStream: string;
  readonly MigrationTaskName: string;
  readonly CreatedArtifactName: string;
  readonly DryRun: boolean;
}
export interface DisassociateDiscoveredResource {
  readonly ProgressUpdateStream: string;
  readonly MigrationTaskName: string;
  readonly ConfigurationId: string;
  readonly DryRun: boolean;
}
export interface ImportMigrationTask {
  readonly ProgressUpdateStream: string;
  readonly MigrationTaskName: string;
  readonly DryRun: boolean;
}
export interface ListApplicationStates {
  readonly ApplicationIds: [];
  readonly NextToken: string;
  readonly MaxResults: number;
}
export interface ListCreatedArtifacts {
  readonly ProgressUpdateStream: string;
  readonly MigrationTaskName: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}
export interface ListDiscoveredResources {
  readonly ProgressUpdateStream: string;
  readonly MigrationTaskName: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}
export interface ListMigrationTasks {
  readonly NextToken: string;
  readonly MaxResults: number;
  readonly ResourceName: string;
}
export interface ListProgressUpdateStreams {
  readonly NextToken: string;
  readonly MaxResults: number;
}
export interface NotifyApplicationState {
  readonly ApplicationId: string;
  readonly Status: string;
  readonly UpdateDateTime: Date;
  readonly DryRun: boolean;
}
export interface NotifyMigrationTaskState {
  readonly ProgressUpdateStream: string;
  readonly MigrationTaskName: string;
  readonly Task: Task;
  readonly UpdateDateTime: Date;
  readonly NextUpdateSeconds: number;
  readonly DryRun: boolean;
}
export interface PutResourceAttributes {
  readonly ProgressUpdateStream: string;
  readonly MigrationTaskName: string;
  readonly ResourceAttributeList: [];
  readonly DryRun: boolean;
}



interface AccessDeniedException {
  readonly Message: string;
}

interface ApplicationState {
  readonly ApplicationId: string;
  readonly ApplicationStatus: string;
  readonly LastUpdatedTime: Date;
}

interface AssociateCreatedArtifactRequest {
  readonly ProgressUpdateStream: string;
  readonly MigrationTaskName: string;
  readonly CreatedArtifact: CreatedArtifact;
  readonly DryRun: boolean;
}

interface AssociateCreatedArtifactResult {
}

interface AssociateDiscoveredResourceRequest {
  readonly ProgressUpdateStream: string;
  readonly MigrationTaskName: string;
  readonly DiscoveredResource: DiscoveredResource;
  readonly DryRun: boolean;
}

interface AssociateDiscoveredResourceResult {
}

interface CreateProgressUpdateStreamRequest {
  readonly ProgressUpdateStreamName: string;
  readonly DryRun: boolean;
}

interface CreateProgressUpdateStreamResult {
}

interface CreatedArtifact {
  readonly Name: string;
  readonly Description: string;
}

interface DeleteProgressUpdateStreamRequest {
  readonly ProgressUpdateStreamName: string;
  readonly DryRun: boolean;
}

interface DeleteProgressUpdateStreamResult {
}

interface DescribeApplicationStateRequest {
  readonly ApplicationId: string;
}

interface DescribeApplicationStateResult {
  readonly ApplicationStatus: string;
  readonly LastUpdatedTime: Date;
}

interface DescribeMigrationTaskRequest {
  readonly ProgressUpdateStream: string;
  readonly MigrationTaskName: string;
}

interface DescribeMigrationTaskResult {
  readonly MigrationTask: MigrationTask;
}

interface DisassociateCreatedArtifactRequest {
  readonly ProgressUpdateStream: string;
  readonly MigrationTaskName: string;
  readonly CreatedArtifactName: string;
  readonly DryRun: boolean;
}

interface DisassociateCreatedArtifactResult {
}

interface DisassociateDiscoveredResourceRequest {
  readonly ProgressUpdateStream: string;
  readonly MigrationTaskName: string;
  readonly ConfigurationId: string;
  readonly DryRun: boolean;
}

interface DisassociateDiscoveredResourceResult {
}

interface DiscoveredResource {
  readonly ConfigurationId: string;
  readonly Description: string;
}

interface DryRunOperation {
  readonly Message: string;
}

interface HomeRegionNotSetException {
  readonly Message: string;
}

interface ImportMigrationTaskRequest {
  readonly ProgressUpdateStream: string;
  readonly MigrationTaskName: string;
  readonly DryRun: boolean;
}

interface ImportMigrationTaskResult {
}

interface InternalServerError {
  readonly Message: string;
}

interface InvalidInputException {
  readonly Message: string;
}

interface ListApplicationStatesRequest {
  readonly ApplicationIds: [];
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListApplicationStatesResult {
  readonly ApplicationStateList: [];
  readonly NextToken: string;
}

interface ListCreatedArtifactsRequest {
  readonly ProgressUpdateStream: string;
  readonly MigrationTaskName: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListCreatedArtifactsResult {
  readonly NextToken: string;
  readonly CreatedArtifactList: [];
}

interface ListDiscoveredResourcesRequest {
  readonly ProgressUpdateStream: string;
  readonly MigrationTaskName: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListDiscoveredResourcesResult {
  readonly NextToken: string;
  readonly DiscoveredResourceList: [];
}

interface ListMigrationTasksRequest {
  readonly NextToken: string;
  readonly MaxResults: number;
  readonly ResourceName: string;
}

interface ListMigrationTasksResult {
  readonly NextToken: string;
  readonly MigrationTaskSummaryList: [];
}

interface ListProgressUpdateStreamsRequest {
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListProgressUpdateStreamsResult {
  readonly ProgressUpdateStreamSummaryList: [];
  readonly NextToken: string;
}

interface MigrationTask {
  readonly ProgressUpdateStream: string;
  readonly MigrationTaskName: string;
  readonly Task: Task;
  readonly UpdateDateTime: Date;
  readonly ResourceAttributeList: [];
}

interface MigrationTaskSummary {
  readonly ProgressUpdateStream: string;
  readonly MigrationTaskName: string;
  readonly Status: string;
  readonly ProgressPercent: number;
  readonly StatusDetail: string;
  readonly UpdateDateTime: Date;
}

interface NotifyApplicationStateRequest {
  readonly ApplicationId: string;
  readonly Status: string;
  readonly UpdateDateTime: Date;
  readonly DryRun: boolean;
}

interface NotifyApplicationStateResult {
}

interface NotifyMigrationTaskStateRequest {
  readonly ProgressUpdateStream: string;
  readonly MigrationTaskName: string;
  readonly Task: Task;
  readonly UpdateDateTime: Date;
  readonly NextUpdateSeconds: number;
  readonly DryRun: boolean;
}

interface NotifyMigrationTaskStateResult {
}

interface PolicyErrorException {
  readonly Message: string;
}

interface ProgressUpdateStreamSummary {
  readonly ProgressUpdateStreamName: string;
}

interface PutResourceAttributesRequest {
  readonly ProgressUpdateStream: string;
  readonly MigrationTaskName: string;
  readonly ResourceAttributeList: [];
  readonly DryRun: boolean;
}

interface PutResourceAttributesResult {
}

interface ResourceAttribute {
  readonly Type: string;
  readonly Value: string;
}

interface ResourceNotFoundException {
  readonly Message: string;
}

interface ServiceUnavailableException {
  readonly Message: string;
}

interface Task {
  readonly Status: string;
  readonly StatusDetail: string;
  readonly ProgressPercent: number;
}

interface ThrottlingException {
  readonly Message: string;
  readonly RetryAfterSeconds: number;
}

interface UnauthorizedOperation {
  readonly Message: string;
}
