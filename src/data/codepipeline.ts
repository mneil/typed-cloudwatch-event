/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface AcknowledgeJob {
  readonly jobId: string;
  readonly nonce: string;
}
export interface AcknowledgeThirdPartyJob {
  readonly jobId: string;
  readonly nonce: string;
  readonly clientToken: string;
}
export interface CreateCustomActionType {
  readonly category: string;
  readonly provider: string;
  readonly version: string;
  readonly settings: ActionTypeSettings;
  readonly configurationProperties: [];
  readonly inputArtifactDetails: ArtifactDetails;
  readonly outputArtifactDetails: ArtifactDetails;
  readonly tags: [];
}
export interface CreatePipeline {
  readonly pipeline: PipelineDeclaration;
  readonly tags: [];
}
export interface DeleteCustomActionType {
  readonly category: string;
  readonly provider: string;
  readonly version: string;
}
export interface DeletePipeline {
  readonly name: string;
}
export interface DeleteWebhook {
  readonly name: string;
}
export interface DeregisterWebhookWithThirdParty {
  readonly webhookName: string;
}
export interface DisableStageTransition {
  readonly pipelineName: string;
  readonly stageName: string;
  readonly transitionType: string;
  readonly reason: string;
}
export interface EnableStageTransition {
  readonly pipelineName: string;
  readonly stageName: string;
  readonly transitionType: string;
}
export interface GetActionType {
  readonly category: string;
  readonly owner: string;
  readonly provider: string;
  readonly version: string;
}
export interface GetJobDetails {
  readonly jobId: string;
}
export interface GetPipeline {
  readonly name: string;
  readonly version: number;
}
export interface GetPipelineExecution {
  readonly pipelineName: string;
  readonly pipelineExecutionId: string;
}
export interface GetPipelineState {
  readonly name: string;
}
export interface GetThirdPartyJobDetails {
  readonly jobId: string;
  readonly clientToken: string;
}
export interface ListActionExecutions {
  readonly pipelineName: string;
  readonly filter: ActionExecutionFilter;
  readonly maxResults: number;
  readonly nextToken: string;
}
export interface ListActionTypes {
  readonly actionOwnerFilter: string;
  readonly nextToken: string;
  readonly regionFilter: string;
}
export interface ListPipelineExecutions {
  readonly pipelineName: string;
  readonly maxResults: number;
  readonly nextToken: string;
}
export interface ListPipelines {
  readonly nextToken: string;
  readonly maxResults: number;
}
export interface ListTagsForResource {
  readonly resourceArn: string;
  readonly nextToken: string;
  readonly maxResults: number;
}
export interface ListWebhooks {
  readonly NextToken: string;
  readonly MaxResults: number;
}
export interface PollForJobs {
  readonly actionTypeId: ActionTypeId;
  readonly maxBatchSize: number;
  readonly queryParam: {[key: string]: any};
}
export interface PollForThirdPartyJobs {
  readonly actionTypeId: ActionTypeId;
  readonly maxBatchSize: number;
}
export interface PutActionRevision {
  readonly pipelineName: string;
  readonly stageName: string;
  readonly actionName: string;
  readonly actionRevision: ActionRevision;
}
export interface PutApprovalResult {
  readonly pipelineName: string;
  readonly stageName: string;
  readonly actionName: string;
  readonly result: ApprovalResult;
  readonly token: string;
}
export interface PutJobFailureResult {
  readonly jobId: string;
  readonly failureDetails: FailureDetails;
}
export interface PutJobSuccessResult {
  readonly jobId: string;
  readonly currentRevision: CurrentRevision;
  readonly continuationToken: string;
  readonly executionDetails: ExecutionDetails;
  readonly outputVariables: {[key: string]: any};
}
export interface PutThirdPartyJobFailureResult {
  readonly jobId: string;
  readonly clientToken: string;
  readonly failureDetails: FailureDetails;
}
export interface PutThirdPartyJobSuccessResult {
  readonly jobId: string;
  readonly clientToken: string;
  readonly currentRevision: CurrentRevision;
  readonly continuationToken: string;
  readonly executionDetails: ExecutionDetails;
}
export interface PutWebhook {
  readonly webhook: WebhookDefinition;
  readonly tags: [];
}
export interface RegisterWebhookWithThirdParty {
  readonly webhookName: string;
}
export interface RetryStageExecution {
  readonly pipelineName: string;
  readonly stageName: string;
  readonly pipelineExecutionId: string;
  readonly retryMode: string;
}
export interface StartPipelineExecution {
  readonly name: string;
  readonly clientRequestToken: string;
}
export interface StopPipelineExecution {
  readonly pipelineName: string;
  readonly pipelineExecutionId: string;
  readonly abandon: boolean;
  readonly reason: string;
}
export interface TagResource {
  readonly resourceArn: string;
  readonly tags: [];
}
export interface UntagResource {
  readonly resourceArn: string;
  readonly tagKeys: [];
}
export interface UpdateActionType {
  readonly actionType: ActionTypeDeclaration;
}
export interface UpdatePipeline {
  readonly pipeline: PipelineDeclaration;
}



interface AWSSessionCredentials {
  readonly accessKeyId: string;
  readonly secretAccessKey: string;
  readonly sessionToken: string;
}

interface AcknowledgeJobInput {
  readonly jobId: string;
  readonly nonce: string;
}

interface AcknowledgeJobOutput {
  readonly status: string;
}

interface AcknowledgeThirdPartyJobInput {
  readonly jobId: string;
  readonly nonce: string;
  readonly clientToken: string;
}

interface AcknowledgeThirdPartyJobOutput {
  readonly status: string;
}

interface ActionConfiguration {
  readonly configuration: {[key: string]: any};
}

interface ActionConfigurationProperty {
  readonly name: string;
  readonly required: boolean;
  readonly key: boolean;
  readonly secret: boolean;
  readonly queryable: boolean;
  readonly description: string;
  readonly type: string;
}

interface ActionContext {
  readonly name: string;
  readonly actionExecutionId: string;
}

interface ActionDeclaration {
  readonly name: string;
  readonly actionTypeId: ActionTypeId;
  readonly runOrder: number;
  readonly configuration: {[key: string]: any};
  readonly outputArtifacts: [];
  readonly inputArtifacts: [];
  readonly roleArn: string;
  readonly region: string;
  readonly namespace: string;
}

interface ActionExecution {
  readonly actionExecutionId: string;
  readonly status: string;
  readonly summary: string;
  readonly lastStatusChange: Date;
  readonly token: string;
  readonly lastUpdatedBy: string;
  readonly externalExecutionId: string;
  readonly externalExecutionUrl: string;
  readonly percentComplete: number;
  readonly errorDetails: ErrorDetails;
}

interface ActionExecutionDetail {
  readonly pipelineExecutionId: string;
  readonly actionExecutionId: string;
  readonly pipelineVersion: number;
  readonly stageName: string;
  readonly actionName: string;
  readonly startTime: Date;
  readonly lastUpdateTime: Date;
  readonly status: string;
  readonly input: ActionExecutionInput;
  readonly output: ActionExecutionOutput;
}

interface ActionExecutionFilter {
  readonly pipelineExecutionId: string;
}

interface ActionExecutionInput {
  readonly actionTypeId: ActionTypeId;
  readonly configuration: {[key: string]: any};
  readonly resolvedConfiguration: {[key: string]: any};
  readonly roleArn: string;
  readonly region: string;
  readonly inputArtifacts: [];
  readonly namespace: string;
}

interface ActionExecutionOutput {
  readonly outputArtifacts: [];
  readonly executionResult: ActionExecutionResult;
  readonly outputVariables: {[key: string]: any};
}

interface ActionExecutionResult {
  readonly externalExecutionId: string;
  readonly externalExecutionSummary: string;
  readonly externalExecutionUrl: string;
}

interface ActionNotFoundException {
}

interface ActionRevision {
  readonly revisionId: string;
  readonly revisionChangeId: string;
  readonly created: Date;
}

interface ActionState {
  readonly actionName: string;
  readonly currentRevision: ActionRevision;
  readonly latestExecution: ActionExecution;
  readonly entityUrl: string;
  readonly revisionUrl: string;
}

interface ActionType {
  readonly id: ActionTypeId;
  readonly settings: ActionTypeSettings;
  readonly actionConfigurationProperties: [];
  readonly inputArtifactDetails: ArtifactDetails;
  readonly outputArtifactDetails: ArtifactDetails;
}

interface ActionTypeAlreadyExistsException {
}

interface ActionTypeArtifactDetails {
  readonly minimumCount: number;
  readonly maximumCount: number;
}

interface ActionTypeDeclaration {
  readonly description: string;
  readonly executor: ActionTypeExecutor;
  readonly id: ActionTypeIdentifier;
  readonly inputArtifactDetails: ActionTypeArtifactDetails;
  readonly outputArtifactDetails: ActionTypeArtifactDetails;
  readonly permissions: ActionTypePermissions;
  readonly properties: [];
  readonly urls: ActionTypeUrls;
}

interface ActionTypeExecutor {
  readonly configuration: ExecutorConfiguration;
  readonly type: string;
  readonly policyStatementsTemplate: string;
  readonly jobTimeout: number;
}

interface ActionTypeId {
  readonly category: string;
  readonly owner: string;
  readonly provider: string;
  readonly version: string;
}

interface ActionTypeIdentifier {
  readonly category: string;
  readonly owner: string;
  readonly provider: string;
  readonly version: string;
}

interface ActionTypeNotFoundException {
}

interface ActionTypePermissions {
  readonly allowedAccounts: [];
}

interface ActionTypeProperty {
  readonly name: string;
  readonly optional: boolean;
  readonly key: boolean;
  readonly noEcho: boolean;
  readonly queryable: boolean;
  readonly description: string;
}

interface ActionTypeSettings {
  readonly thirdPartyConfigurationUrl: string;
  readonly entityUrlTemplate: string;
  readonly executionUrlTemplate: string;
  readonly revisionUrlTemplate: string;
}

interface ActionTypeUrls {
  readonly configurationUrl: string;
  readonly entityUrlTemplate: string;
  readonly executionUrlTemplate: string;
  readonly revisionUrlTemplate: string;
}

interface ApprovalAlreadyCompletedException {
}

interface ApprovalResult {
  readonly summary: string;
  readonly status: string;
}

interface Artifact {
  readonly name: string;
  readonly revision: string;
  readonly location: ArtifactLocation;
}

interface ArtifactDetail {
  readonly name: string;
  readonly s3location: S3Location;
}

interface ArtifactDetails {
  readonly minimumCount: number;
  readonly maximumCount: number;
}

interface ArtifactLocation {
  readonly type: string;
  readonly s3Location: S3ArtifactLocation;
}

interface ArtifactRevision {
  readonly name: string;
  readonly revisionId: string;
  readonly revisionChangeIdentifier: string;
  readonly revisionSummary: string;
  readonly created: Date;
  readonly revisionUrl: string;
}

interface ArtifactStore {
  readonly type: string;
  readonly location: string;
  readonly encryptionKey: EncryptionKey;
}

interface BlockerDeclaration {
  readonly name: string;
  readonly type: string;
}

interface ConcurrentModificationException {
  readonly message: string;
}

interface ConflictException {
  readonly message: string;
}

interface CreateCustomActionTypeInput {
  readonly category: string;
  readonly provider: string;
  readonly version: string;
  readonly settings: ActionTypeSettings;
  readonly configurationProperties: [];
  readonly inputArtifactDetails: ArtifactDetails;
  readonly outputArtifactDetails: ArtifactDetails;
  readonly tags: [];
}

interface CreateCustomActionTypeOutput {
  readonly actionType: ActionType;
  readonly tags: [];
}

interface CreatePipelineInput {
  readonly pipeline: PipelineDeclaration;
  readonly tags: [];
}

interface CreatePipelineOutput {
  readonly pipeline: PipelineDeclaration;
  readonly tags: [];
}

interface CurrentRevision {
  readonly revision: string;
  readonly changeIdentifier: string;
  readonly created: Date;
  readonly revisionSummary: string;
}

interface DeleteCustomActionTypeInput {
  readonly category: string;
  readonly provider: string;
  readonly version: string;
}

interface DeletePipelineInput {
  readonly name: string;
}

interface DeleteWebhookInput {
  readonly name: string;
}

interface DeleteWebhookOutput {
}

interface DeregisterWebhookWithThirdPartyInput {
  readonly webhookName: string;
}

interface DeregisterWebhookWithThirdPartyOutput {
}

interface DisableStageTransitionInput {
  readonly pipelineName: string;
  readonly stageName: string;
  readonly transitionType: string;
  readonly reason: string;
}

interface DuplicatedStopRequestException {
  readonly message: string;
}

interface EnableStageTransitionInput {
  readonly pipelineName: string;
  readonly stageName: string;
  readonly transitionType: string;
}

interface EncryptionKey {
  readonly id: string;
  readonly type: string;
}

interface ErrorDetails {
  readonly code: string;
  readonly message: string;
}

interface ExecutionDetails {
  readonly summary: string;
  readonly externalExecutionId: string;
  readonly percentComplete: number;
}

interface ExecutionTrigger {
  readonly triggerType: string;
  readonly triggerDetail: string;
}

interface ExecutorConfiguration {
  readonly lambdaExecutorConfiguration: LambdaExecutorConfiguration;
  readonly jobWorkerExecutorConfiguration: JobWorkerExecutorConfiguration;
}

interface FailureDetails {
  readonly type: string;
  readonly message: string;
  readonly externalExecutionId: string;
}

interface GetActionTypeInput {
  readonly category: string;
  readonly owner: string;
  readonly provider: string;
  readonly version: string;
}

interface GetActionTypeOutput {
  readonly actionType: ActionTypeDeclaration;
}

interface GetJobDetailsInput {
  readonly jobId: string;
}

interface GetJobDetailsOutput {
  readonly jobDetails: JobDetails;
}

interface GetPipelineExecutionInput {
  readonly pipelineName: string;
  readonly pipelineExecutionId: string;
}

interface GetPipelineExecutionOutput {
  readonly pipelineExecution: PipelineExecution;
}

interface GetPipelineInput {
  readonly name: string;
  readonly version: number;
}

interface GetPipelineOutput {
  readonly pipeline: PipelineDeclaration;
  readonly metadata: PipelineMetadata;
}

interface GetPipelineStateInput {
  readonly name: string;
}

interface GetPipelineStateOutput {
  readonly pipelineName: string;
  readonly pipelineVersion: number;
  readonly stageStates: [];
  readonly created: Date;
  readonly updated: Date;
}

interface GetThirdPartyJobDetailsInput {
  readonly jobId: string;
  readonly clientToken: string;
}

interface GetThirdPartyJobDetailsOutput {
  readonly jobDetails: ThirdPartyJobDetails;
}

interface InputArtifact {
  readonly name: string;
}

interface InvalidActionDeclarationException {
}

interface InvalidApprovalTokenException {
}

interface InvalidArnException {
  readonly message: string;
}

interface InvalidBlockerDeclarationException {
}

interface InvalidClientTokenException {
}

interface InvalidJobException {
}

interface InvalidJobStateException {
}

interface InvalidNextTokenException {
}

interface InvalidNonceException {
}

interface InvalidStageDeclarationException {
}

interface InvalidStructureException {
}

interface InvalidTagsException {
  readonly message: string;
}

interface InvalidWebhookAuthenticationParametersException {
}

interface InvalidWebhookFilterPatternException {
}

interface Job {
  readonly id: string;
  readonly data: JobData;
  readonly nonce: string;
  readonly accountId: string;
}

interface JobData {
  readonly actionTypeId: ActionTypeId;
  readonly actionConfiguration: ActionConfiguration;
  readonly pipelineContext: PipelineContext;
  readonly inputArtifacts: [];
  readonly outputArtifacts: [];
  readonly artifactCredentials: AWSSessionCredentials;
  readonly continuationToken: string;
  readonly encryptionKey: EncryptionKey;
}

interface JobDetails {
  readonly id: string;
  readonly data: JobData;
  readonly accountId: string;
}

interface JobNotFoundException {
}

interface JobWorkerExecutorConfiguration {
  readonly pollingAccounts: [];
  readonly pollingServicePrincipals: [];
}

interface LambdaExecutorConfiguration {
  readonly lambdaFunctionArn: string;
}

interface LimitExceededException {
}

interface ListActionExecutionsInput {
  readonly pipelineName: string;
  readonly filter: ActionExecutionFilter;
  readonly maxResults: number;
  readonly nextToken: string;
}

interface ListActionExecutionsOutput {
  readonly actionExecutionDetails: [];
  readonly nextToken: string;
}

interface ListActionTypesInput {
  readonly actionOwnerFilter: string;
  readonly nextToken: string;
  readonly regionFilter: string;
}

interface ListActionTypesOutput {
  readonly actionTypes: [];
  readonly nextToken: string;
}

interface ListPipelineExecutionsInput {
  readonly pipelineName: string;
  readonly maxResults: number;
  readonly nextToken: string;
}

interface ListPipelineExecutionsOutput {
  readonly pipelineExecutionSummaries: [];
  readonly nextToken: string;
}

interface ListPipelinesInput {
  readonly nextToken: string;
  readonly maxResults: number;
}

interface ListPipelinesOutput {
  readonly pipelines: [];
  readonly nextToken: string;
}

interface ListTagsForResourceInput {
  readonly resourceArn: string;
  readonly nextToken: string;
  readonly maxResults: number;
}

interface ListTagsForResourceOutput {
  readonly tags: [];
  readonly nextToken: string;
}

interface ListWebhookItem {
  readonly definition: WebhookDefinition;
  readonly url: string;
  readonly errorMessage: string;
  readonly errorCode: string;
  readonly lastTriggered: Date;
  readonly arn: string;
  readonly tags: [];
}

interface ListWebhooksInput {
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListWebhooksOutput {
  readonly webhooks: [];
  readonly NextToken: string;
}

interface NotLatestPipelineExecutionException {
}

interface OutputArtifact {
  readonly name: string;
}

interface OutputVariablesSizeExceededException {
  readonly message: string;
}

interface PipelineContext {
  readonly pipelineName: string;
  readonly stage: StageContext;
  readonly action: ActionContext;
  readonly pipelineArn: string;
  readonly pipelineExecutionId: string;
}

interface PipelineDeclaration {
  readonly name: string;
  readonly roleArn: string;
  readonly artifactStore: ArtifactStore;
  readonly artifactStores: {[key: string]: any};
  readonly stages: [];
  readonly version: number;
}

interface PipelineExecution {
  readonly pipelineName: string;
  readonly pipelineVersion: number;
  readonly pipelineExecutionId: string;
  readonly status: string;
  readonly statusSummary: string;
  readonly artifactRevisions: [];
}

interface PipelineExecutionNotFoundException {
}

interface PipelineExecutionNotStoppableException {
  readonly message: string;
}

interface PipelineExecutionSummary {
  readonly pipelineExecutionId: string;
  readonly status: string;
  readonly startTime: Date;
  readonly lastUpdateTime: Date;
  readonly sourceRevisions: [];
  readonly trigger: ExecutionTrigger;
  readonly stopTrigger: StopExecutionTrigger;
}

interface PipelineMetadata {
  readonly pipelineArn: string;
  readonly created: Date;
  readonly updated: Date;
}

interface PipelineNameInUseException {
}

interface PipelineNotFoundException {
}

interface PipelineSummary {
  readonly name: string;
  readonly version: number;
  readonly created: Date;
  readonly updated: Date;
}

interface PipelineVersionNotFoundException {
}

interface PollForJobsInput {
  readonly actionTypeId: ActionTypeId;
  readonly maxBatchSize: number;
  readonly queryParam: {[key: string]: any};
}

interface PollForJobsOutput {
  readonly jobs: [];
}

interface PollForThirdPartyJobsInput {
  readonly actionTypeId: ActionTypeId;
  readonly maxBatchSize: number;
}

interface PollForThirdPartyJobsOutput {
  readonly jobs: [];
}

interface PutActionRevisionInput {
  readonly pipelineName: string;
  readonly stageName: string;
  readonly actionName: string;
  readonly actionRevision: ActionRevision;
}

interface PutActionRevisionOutput {
  readonly newRevision: boolean;
  readonly pipelineExecutionId: string;
}

interface PutApprovalResultInput {
  readonly pipelineName: string;
  readonly stageName: string;
  readonly actionName: string;
  readonly result: ApprovalResult;
  readonly token: string;
}

interface PutApprovalResultOutput {
  readonly approvedAt: Date;
}

interface PutJobFailureResultInput {
  readonly jobId: string;
  readonly failureDetails: FailureDetails;
}

interface PutJobSuccessResultInput {
  readonly jobId: string;
  readonly currentRevision: CurrentRevision;
  readonly continuationToken: string;
  readonly executionDetails: ExecutionDetails;
  readonly outputVariables: {[key: string]: any};
}

interface PutThirdPartyJobFailureResultInput {
  readonly jobId: string;
  readonly clientToken: string;
  readonly failureDetails: FailureDetails;
}

interface PutThirdPartyJobSuccessResultInput {
  readonly jobId: string;
  readonly clientToken: string;
  readonly currentRevision: CurrentRevision;
  readonly continuationToken: string;
  readonly executionDetails: ExecutionDetails;
}

interface PutWebhookInput {
  readonly webhook: WebhookDefinition;
  readonly tags: [];
}

interface PutWebhookOutput {
  readonly webhook: ListWebhookItem;
}

interface RegisterWebhookWithThirdPartyInput {
  readonly webhookName: string;
}

interface RegisterWebhookWithThirdPartyOutput {
}

interface RequestFailedException {
  readonly message: string;
}

interface ResourceNotFoundException {
}

interface RetryStageExecutionInput {
  readonly pipelineName: string;
  readonly stageName: string;
  readonly pipelineExecutionId: string;
  readonly retryMode: string;
}

interface RetryStageExecutionOutput {
  readonly pipelineExecutionId: string;
}

interface S3ArtifactLocation {
  readonly bucketName: string;
  readonly objectKey: string;
}

interface S3Location {
  readonly bucket: string;
  readonly key: string;
}

interface SourceRevision {
  readonly actionName: string;
  readonly revisionId: string;
  readonly revisionSummary: string;
  readonly revisionUrl: string;
}

interface StageContext {
  readonly name: string;
}

interface StageDeclaration {
  readonly name: string;
  readonly blockers: [];
  readonly actions: [];
}

interface StageExecution {
  readonly pipelineExecutionId: string;
  readonly status: string;
}

interface StageNotFoundException {
}

interface StageNotRetryableException {
}

interface StageState {
  readonly stageName: string;
  readonly inboundExecution: StageExecution;
  readonly inboundTransitionState: TransitionState;
  readonly actionStates: [];
  readonly latestExecution: StageExecution;
}

interface StartPipelineExecutionInput {
  readonly name: string;
  readonly clientRequestToken: string;
}

interface StartPipelineExecutionOutput {
  readonly pipelineExecutionId: string;
}

interface StopExecutionTrigger {
  readonly reason: string;
}

interface StopPipelineExecutionInput {
  readonly pipelineName: string;
  readonly pipelineExecutionId: string;
  readonly abandon: boolean;
  readonly reason: string;
}

interface StopPipelineExecutionOutput {
  readonly pipelineExecutionId: string;
}

interface Tag {
  readonly key: string;
  readonly value: string;
}

interface TagResourceInput {
  readonly resourceArn: string;
  readonly tags: [];
}

interface TagResourceOutput {
}

interface ThirdPartyJob {
  readonly clientId: string;
  readonly jobId: string;
}

interface ThirdPartyJobData {
  readonly actionTypeId: ActionTypeId;
  readonly actionConfiguration: ActionConfiguration;
  readonly pipelineContext: PipelineContext;
  readonly inputArtifacts: [];
  readonly outputArtifacts: [];
  readonly artifactCredentials: AWSSessionCredentials;
  readonly continuationToken: string;
  readonly encryptionKey: EncryptionKey;
}

interface ThirdPartyJobDetails {
  readonly id: string;
  readonly data: ThirdPartyJobData;
  readonly nonce: string;
}

interface TooManyTagsException {
  readonly message: string;
}

interface TransitionState {
  readonly enabled: boolean;
  readonly lastChangedBy: string;
  readonly lastChangedAt: Date;
  readonly disabledReason: string;
}

interface UntagResourceInput {
  readonly resourceArn: string;
  readonly tagKeys: [];
}

interface UntagResourceOutput {
}

interface UpdateActionTypeInput {
  readonly actionType: ActionTypeDeclaration;
}

interface UpdatePipelineInput {
  readonly pipeline: PipelineDeclaration;
}

interface UpdatePipelineOutput {
  readonly pipeline: PipelineDeclaration;
}

interface ValidationException {
}

interface WebhookAuthConfiguration {
  readonly AllowedIPRange: string;
  readonly SecretToken: string;
}

interface WebhookDefinition {
  readonly name: string;
  readonly targetPipeline: string;
  readonly targetAction: string;
  readonly filters: [];
  readonly authentication: string;
  readonly authenticationConfiguration: WebhookAuthConfiguration;
}

interface WebhookFilterRule {
  readonly jsonPath: string;
  readonly matchEquals: string;
}

interface WebhookNotFoundException {
}

