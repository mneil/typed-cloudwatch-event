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
  readonly settings?: ActionTypeSettings;
  readonly configurationProperties?: [];
  readonly inputArtifactDetails: ArtifactDetails;
  readonly outputArtifactDetails: ArtifactDetails;
  readonly tags?: [];
}

export interface CreatePipeline {
  readonly pipeline: PipelineDeclaration;
  readonly tags?: [];
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
  readonly webhookName?: string;
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
  readonly version?: number;
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
  readonly filter?: ActionExecutionFilter;
  readonly maxResults?: number;
  readonly nextToken?: string;
}

export interface ListActionTypes {
  readonly actionOwnerFilter?: string;
  readonly nextToken?: string;
  readonly regionFilter?: string;
}

export interface ListPipelineExecutions {
  readonly pipelineName: string;
  readonly maxResults?: number;
  readonly nextToken?: string;
}

export interface ListPipelines {
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface ListTagsForResource {
  readonly resourceArn: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface ListWebhooks {
  readonly NextToken?: string;
  readonly MaxResults?: number;
}

export interface PollForJobs {
  readonly actionTypeId: ActionTypeId;
  readonly maxBatchSize?: number;
  readonly queryParam?: {[key: string]: any};
}

export interface PollForThirdPartyJobs {
  readonly actionTypeId: ActionTypeId;
  readonly maxBatchSize?: number;
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
  readonly currentRevision?: CurrentRevision;
  readonly continuationToken?: string;
  readonly executionDetails?: ExecutionDetails;
  readonly outputVariables?: {[key: string]: any};
}

export interface PutThirdPartyJobFailureResult {
  readonly jobId: string;
  readonly clientToken: string;
  readonly failureDetails: FailureDetails;
}

export interface PutThirdPartyJobSuccessResult {
  readonly jobId: string;
  readonly clientToken: string;
  readonly currentRevision?: CurrentRevision;
  readonly continuationToken?: string;
  readonly executionDetails?: ExecutionDetails;
}

export interface PutWebhook {
  readonly webhook: WebhookDefinition;
  readonly tags?: [];
}

export interface RegisterWebhookWithThirdParty {
  readonly webhookName?: string;
}

export interface RetryStageExecution {
  readonly pipelineName: string;
  readonly stageName: string;
  readonly pipelineExecutionId: string;
  readonly retryMode: string;
}

export interface StartPipelineExecution {
  readonly name: string;
  readonly clientRequestToken?: string;
}

export interface StopPipelineExecution {
  readonly pipelineName: string;
  readonly pipelineExecutionId: string;
  readonly abandon?: boolean;
  readonly reason?: string;
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

export interface AWSSessionCredentials {
  readonly accessKeyId: string;
  readonly secretAccessKey: string;
  readonly sessionToken: string;
}

export interface AcknowledgeJobInput {
  readonly jobId: string;
  readonly nonce: string;
}

export interface AcknowledgeJobOutput {
  readonly status?: string;
}

export interface AcknowledgeThirdPartyJobInput {
  readonly jobId: string;
  readonly nonce: string;
  readonly clientToken: string;
}

export interface AcknowledgeThirdPartyJobOutput {
  readonly status?: string;
}

export interface ActionConfiguration {
  readonly configuration?: {[key: string]: any};
}

export interface ActionConfigurationProperty {
  readonly name: string;
  readonly required: boolean;
  readonly key: boolean;
  readonly secret: boolean;
  readonly queryable?: boolean;
  readonly description?: string;
  readonly type?: string;
}

export interface ActionContext {
  readonly name?: string;
  readonly actionExecutionId?: string;
}

export interface ActionDeclaration {
  readonly name: string;
  readonly actionTypeId: ActionTypeId;
  readonly runOrder?: number;
  readonly configuration?: {[key: string]: any};
  readonly outputArtifacts?: [];
  readonly inputArtifacts?: [];
  readonly roleArn?: string;
  readonly region?: string;
  readonly namespace?: string;
}

export interface ActionExecution {
  readonly actionExecutionId?: string;
  readonly status?: string;
  readonly summary?: string;
  readonly lastStatusChange?: Date;
  readonly token?: string;
  readonly lastUpdatedBy?: string;
  readonly externalExecutionId?: string;
  readonly externalExecutionUrl?: string;
  readonly percentComplete?: number;
  readonly errorDetails?: ErrorDetails;
}

export interface ActionExecutionDetail {
  readonly pipelineExecutionId?: string;
  readonly actionExecutionId?: string;
  readonly pipelineVersion?: number;
  readonly stageName?: string;
  readonly actionName?: string;
  readonly startTime?: Date;
  readonly lastUpdateTime?: Date;
  readonly status?: string;
  readonly input?: ActionExecutionInput;
  readonly output?: ActionExecutionOutput;
}

export interface ActionExecutionFilter {
  readonly pipelineExecutionId?: string;
}

export interface ActionExecutionInput {
  readonly actionTypeId?: ActionTypeId;
  readonly configuration?: {[key: string]: any};
  readonly resolvedConfiguration?: {[key: string]: any};
  readonly roleArn?: string;
  readonly region?: string;
  readonly inputArtifacts?: [];
  readonly namespace?: string;
}

export interface ActionExecutionOutput {
  readonly outputArtifacts?: [];
  readonly executionResult?: ActionExecutionResult;
  readonly outputVariables?: {[key: string]: any};
}

export interface ActionExecutionResult {
  readonly externalExecutionId?: string;
  readonly externalExecutionSummary?: string;
  readonly externalExecutionUrl?: string;
}

export interface ActionNotFoundException {
}

export interface ActionRevision {
  readonly revisionId: string;
  readonly revisionChangeId: string;
  readonly created: Date;
}

export interface ActionState {
  readonly actionName?: string;
  readonly currentRevision?: ActionRevision;
  readonly latestExecution?: ActionExecution;
  readonly entityUrl?: string;
  readonly revisionUrl?: string;
}

export interface ActionType {
  readonly id: ActionTypeId;
  readonly settings?: ActionTypeSettings;
  readonly actionConfigurationProperties?: [];
  readonly inputArtifactDetails: ArtifactDetails;
  readonly outputArtifactDetails: ArtifactDetails;
}

export interface ActionTypeAlreadyExistsException {
}

export interface ActionTypeArtifactDetails {
  readonly minimumCount: number;
  readonly maximumCount: number;
}

export interface ActionTypeDeclaration {
  readonly description?: string;
  readonly executor: ActionTypeExecutor;
  readonly id: ActionTypeIdentifier;
  readonly inputArtifactDetails: ActionTypeArtifactDetails;
  readonly outputArtifactDetails: ActionTypeArtifactDetails;
  readonly permissions?: ActionTypePermissions;
  readonly properties?: [];
  readonly urls?: ActionTypeUrls;
}

export interface ActionTypeExecutor {
  readonly configuration: ExecutorConfiguration;
  readonly type: string;
  readonly policyStatementsTemplate?: string;
  readonly jobTimeout?: number;
}

export interface ActionTypeId {
  readonly category: string;
  readonly owner: string;
  readonly provider: string;
  readonly version: string;
}

export interface ActionTypeIdentifier {
  readonly category: string;
  readonly owner: string;
  readonly provider: string;
  readonly version: string;
}

export interface ActionTypeNotFoundException {
}

export interface ActionTypePermissions {
  readonly allowedAccounts: [];
}

export interface ActionTypeProperty {
  readonly name: string;
  readonly optional: boolean;
  readonly key: boolean;
  readonly noEcho: boolean;
  readonly queryable?: boolean;
  readonly description?: string;
}

export interface ActionTypeSettings {
  readonly thirdPartyConfigurationUrl?: string;
  readonly entityUrlTemplate?: string;
  readonly executionUrlTemplate?: string;
  readonly revisionUrlTemplate?: string;
}

export interface ActionTypeUrls {
  readonly configurationUrl?: string;
  readonly entityUrlTemplate?: string;
  readonly executionUrlTemplate?: string;
  readonly revisionUrlTemplate?: string;
}

export interface ApprovalAlreadyCompletedException {
}

export interface ApprovalResult {
  readonly summary: string;
  readonly status: string;
}

export interface Artifact {
  readonly name?: string;
  readonly revision?: string;
  readonly location?: ArtifactLocation;
}

export interface ArtifactDetail {
  readonly name?: string;
  readonly s3location?: S3Location;
}

export interface ArtifactDetails {
  readonly minimumCount: number;
  readonly maximumCount: number;
}

export interface ArtifactLocation {
  readonly type?: string;
  readonly s3Location?: S3ArtifactLocation;
}

export interface ArtifactRevision {
  readonly name?: string;
  readonly revisionId?: string;
  readonly revisionChangeIdentifier?: string;
  readonly revisionSummary?: string;
  readonly created?: Date;
  readonly revisionUrl?: string;
}

export interface ArtifactStore {
  readonly type: string;
  readonly location: string;
  readonly encryptionKey?: EncryptionKey;
}

export interface BlockerDeclaration {
  readonly name: string;
  readonly type: string;
}

export interface ConcurrentModificationException {
  readonly message?: string;
}

export interface ConflictException {
  readonly message?: string;
}

export interface CreateCustomActionTypeInput {
  readonly category: string;
  readonly provider: string;
  readonly version: string;
  readonly settings?: ActionTypeSettings;
  readonly configurationProperties?: [];
  readonly inputArtifactDetails: ArtifactDetails;
  readonly outputArtifactDetails: ArtifactDetails;
  readonly tags?: [];
}

export interface CreateCustomActionTypeOutput {
  readonly actionType: ActionType;
  readonly tags?: [];
}

export interface CreatePipelineInput {
  readonly pipeline: PipelineDeclaration;
  readonly tags?: [];
}

export interface CreatePipelineOutput {
  readonly pipeline?: PipelineDeclaration;
  readonly tags?: [];
}

export interface CurrentRevision {
  readonly revision: string;
  readonly changeIdentifier: string;
  readonly created?: Date;
  readonly revisionSummary?: string;
}

export interface DeleteCustomActionTypeInput {
  readonly category: string;
  readonly provider: string;
  readonly version: string;
}

export interface DeletePipelineInput {
  readonly name: string;
}

export interface DeleteWebhookInput {
  readonly name: string;
}

export interface DeleteWebhookOutput {
}

export interface DeregisterWebhookWithThirdPartyInput {
  readonly webhookName?: string;
}

export interface DeregisterWebhookWithThirdPartyOutput {
}

export interface DisableStageTransitionInput {
  readonly pipelineName: string;
  readonly stageName: string;
  readonly transitionType: string;
  readonly reason: string;
}

export interface DuplicatedStopRequestException {
  readonly message?: string;
}

export interface EnableStageTransitionInput {
  readonly pipelineName: string;
  readonly stageName: string;
  readonly transitionType: string;
}

export interface EncryptionKey {
  readonly id: string;
  readonly type: string;
}

export interface ErrorDetails {
  readonly code?: string;
  readonly message?: string;
}

export interface ExecutionDetails {
  readonly summary?: string;
  readonly externalExecutionId?: string;
  readonly percentComplete?: number;
}

export interface ExecutionTrigger {
  readonly triggerType?: string;
  readonly triggerDetail?: string;
}

export interface ExecutorConfiguration {
  readonly lambdaExecutorConfiguration?: LambdaExecutorConfiguration;
  readonly jobWorkerExecutorConfiguration?: JobWorkerExecutorConfiguration;
}

export interface FailureDetails {
  readonly type: string;
  readonly message: string;
  readonly externalExecutionId?: string;
}

export interface GetActionTypeInput {
  readonly category: string;
  readonly owner: string;
  readonly provider: string;
  readonly version: string;
}

export interface GetActionTypeOutput {
  readonly actionType?: ActionTypeDeclaration;
}

export interface GetJobDetailsInput {
  readonly jobId: string;
}

export interface GetJobDetailsOutput {
  readonly jobDetails?: JobDetails;
}

export interface GetPipelineExecutionInput {
  readonly pipelineName: string;
  readonly pipelineExecutionId: string;
}

export interface GetPipelineExecutionOutput {
  readonly pipelineExecution?: PipelineExecution;
}

export interface GetPipelineInput {
  readonly name: string;
  readonly version?: number;
}

export interface GetPipelineOutput {
  readonly pipeline?: PipelineDeclaration;
  readonly metadata?: PipelineMetadata;
}

export interface GetPipelineStateInput {
  readonly name: string;
}

export interface GetPipelineStateOutput {
  readonly pipelineName?: string;
  readonly pipelineVersion?: number;
  readonly stageStates?: [];
  readonly created?: Date;
  readonly updated?: Date;
}

export interface GetThirdPartyJobDetailsInput {
  readonly jobId: string;
  readonly clientToken: string;
}

export interface GetThirdPartyJobDetailsOutput {
  readonly jobDetails?: ThirdPartyJobDetails;
}

export interface InputArtifact {
  readonly name: string;
}

export interface InvalidActionDeclarationException {
}

export interface InvalidApprovalTokenException {
}

export interface InvalidArnException {
  readonly message?: string;
}

export interface InvalidBlockerDeclarationException {
}

export interface InvalidClientTokenException {
}

export interface InvalidJobException {
}

export interface InvalidJobStateException {
}

export interface InvalidNextTokenException {
}

export interface InvalidNonceException {
}

export interface InvalidStageDeclarationException {
}

export interface InvalidStructureException {
}

export interface InvalidTagsException {
  readonly message?: string;
}

export interface InvalidWebhookAuthenticationParametersException {
}

export interface InvalidWebhookFilterPatternException {
}

export interface Job {
  readonly id?: string;
  readonly data?: JobData;
  readonly nonce?: string;
  readonly accountId?: string;
}

export interface JobData {
  readonly actionTypeId?: ActionTypeId;
  readonly actionConfiguration?: ActionConfiguration;
  readonly pipelineContext?: PipelineContext;
  readonly inputArtifacts?: [];
  readonly outputArtifacts?: [];
  readonly artifactCredentials?: AWSSessionCredentials;
  readonly continuationToken?: string;
  readonly encryptionKey?: EncryptionKey;
}

export interface JobDetails {
  readonly id?: string;
  readonly data?: JobData;
  readonly accountId?: string;
}

export interface JobNotFoundException {
}

export interface JobWorkerExecutorConfiguration {
  readonly pollingAccounts?: [];
  readonly pollingServicePrincipals?: [];
}

export interface LambdaExecutorConfiguration {
  readonly lambdaFunctionArn: string;
}

export interface LimitExceededException {
}

export interface ListActionExecutionsInput {
  readonly pipelineName: string;
  readonly filter?: ActionExecutionFilter;
  readonly maxResults?: number;
  readonly nextToken?: string;
}

export interface ListActionExecutionsOutput {
  readonly actionExecutionDetails?: [];
  readonly nextToken?: string;
}

export interface ListActionTypesInput {
  readonly actionOwnerFilter?: string;
  readonly nextToken?: string;
  readonly regionFilter?: string;
}

export interface ListActionTypesOutput {
  readonly actionTypes: [];
  readonly nextToken?: string;
}

export interface ListPipelineExecutionsInput {
  readonly pipelineName: string;
  readonly maxResults?: number;
  readonly nextToken?: string;
}

export interface ListPipelineExecutionsOutput {
  readonly pipelineExecutionSummaries?: [];
  readonly nextToken?: string;
}

export interface ListPipelinesInput {
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface ListPipelinesOutput {
  readonly pipelines?: [];
  readonly nextToken?: string;
}

export interface ListTagsForResourceInput {
  readonly resourceArn: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface ListTagsForResourceOutput {
  readonly tags?: [];
  readonly nextToken?: string;
}

export interface ListWebhookItem {
  readonly definition: WebhookDefinition;
  readonly url: string;
  readonly errorMessage?: string;
  readonly errorCode?: string;
  readonly lastTriggered?: Date;
  readonly arn?: string;
  readonly tags?: [];
}

export interface ListWebhooksInput {
  readonly NextToken?: string;
  readonly MaxResults?: number;
}

export interface ListWebhooksOutput {
  readonly webhooks?: [];
  readonly NextToken?: string;
}

export interface NotLatestPipelineExecutionException {
}

export interface OutputArtifact {
  readonly name: string;
}

export interface OutputVariablesSizeExceededException {
  readonly message?: string;
}

export interface PipelineContext {
  readonly pipelineName?: string;
  readonly stage?: StageContext;
  readonly action?: ActionContext;
  readonly pipelineArn?: string;
  readonly pipelineExecutionId?: string;
}

export interface PipelineDeclaration {
  readonly name: string;
  readonly roleArn: string;
  readonly artifactStore?: ArtifactStore;
  readonly artifactStores?: {[key: string]: any};
  readonly stages: [];
  readonly version?: number;
}

export interface PipelineExecution {
  readonly pipelineName?: string;
  readonly pipelineVersion?: number;
  readonly pipelineExecutionId?: string;
  readonly status?: string;
  readonly statusSummary?: string;
  readonly artifactRevisions?: [];
}

export interface PipelineExecutionNotFoundException {
}

export interface PipelineExecutionNotStoppableException {
  readonly message?: string;
}

export interface PipelineExecutionSummary {
  readonly pipelineExecutionId?: string;
  readonly status?: string;
  readonly startTime?: Date;
  readonly lastUpdateTime?: Date;
  readonly sourceRevisions?: [];
  readonly trigger?: ExecutionTrigger;
  readonly stopTrigger?: StopExecutionTrigger;
}

export interface PipelineMetadata {
  readonly pipelineArn?: string;
  readonly created?: Date;
  readonly updated?: Date;
}

export interface PipelineNameInUseException {
}

export interface PipelineNotFoundException {
}

export interface PipelineSummary {
  readonly name?: string;
  readonly version?: number;
  readonly created?: Date;
  readonly updated?: Date;
}

export interface PipelineVersionNotFoundException {
}

export interface PollForJobsInput {
  readonly actionTypeId: ActionTypeId;
  readonly maxBatchSize?: number;
  readonly queryParam?: {[key: string]: any};
}

export interface PollForJobsOutput {
  readonly jobs?: [];
}

export interface PollForThirdPartyJobsInput {
  readonly actionTypeId: ActionTypeId;
  readonly maxBatchSize?: number;
}

export interface PollForThirdPartyJobsOutput {
  readonly jobs?: [];
}

export interface PutActionRevisionInput {
  readonly pipelineName: string;
  readonly stageName: string;
  readonly actionName: string;
  readonly actionRevision: ActionRevision;
}

export interface PutActionRevisionOutput {
  readonly newRevision?: boolean;
  readonly pipelineExecutionId?: string;
}

export interface PutApprovalResultInput {
  readonly pipelineName: string;
  readonly stageName: string;
  readonly actionName: string;
  readonly result: ApprovalResult;
  readonly token: string;
}

export interface PutApprovalResultOutput {
  readonly approvedAt?: Date;
}

export interface PutJobFailureResultInput {
  readonly jobId: string;
  readonly failureDetails: FailureDetails;
}

export interface PutJobSuccessResultInput {
  readonly jobId: string;
  readonly currentRevision?: CurrentRevision;
  readonly continuationToken?: string;
  readonly executionDetails?: ExecutionDetails;
  readonly outputVariables?: {[key: string]: any};
}

export interface PutThirdPartyJobFailureResultInput {
  readonly jobId: string;
  readonly clientToken: string;
  readonly failureDetails: FailureDetails;
}

export interface PutThirdPartyJobSuccessResultInput {
  readonly jobId: string;
  readonly clientToken: string;
  readonly currentRevision?: CurrentRevision;
  readonly continuationToken?: string;
  readonly executionDetails?: ExecutionDetails;
}

export interface PutWebhookInput {
  readonly webhook: WebhookDefinition;
  readonly tags?: [];
}

export interface PutWebhookOutput {
  readonly webhook?: ListWebhookItem;
}

export interface RegisterWebhookWithThirdPartyInput {
  readonly webhookName?: string;
}

export interface RegisterWebhookWithThirdPartyOutput {
}

export interface RequestFailedException {
  readonly message?: string;
}

export interface ResourceNotFoundException {
}

export interface RetryStageExecutionInput {
  readonly pipelineName: string;
  readonly stageName: string;
  readonly pipelineExecutionId: string;
  readonly retryMode: string;
}

export interface RetryStageExecutionOutput {
  readonly pipelineExecutionId?: string;
}

export interface S3ArtifactLocation {
  readonly bucketName: string;
  readonly objectKey: string;
}

export interface S3Location {
  readonly bucket?: string;
  readonly key?: string;
}

export interface SourceRevision {
  readonly actionName: string;
  readonly revisionId?: string;
  readonly revisionSummary?: string;
  readonly revisionUrl?: string;
}

export interface StageContext {
  readonly name?: string;
}

export interface StageDeclaration {
  readonly name: string;
  readonly blockers?: [];
  readonly actions: [];
}

export interface StageExecution {
  readonly pipelineExecutionId: string;
  readonly status: string;
}

export interface StageNotFoundException {
}

export interface StageNotRetryableException {
}

export interface StageState {
  readonly stageName?: string;
  readonly inboundExecution?: StageExecution;
  readonly inboundTransitionState?: TransitionState;
  readonly actionStates?: [];
  readonly latestExecution?: StageExecution;
}

export interface StartPipelineExecutionInput {
  readonly name: string;
  readonly clientRequestToken?: string;
}

export interface StartPipelineExecutionOutput {
  readonly pipelineExecutionId?: string;
}

export interface StopExecutionTrigger {
  readonly reason?: string;
}

export interface StopPipelineExecutionInput {
  readonly pipelineName: string;
  readonly pipelineExecutionId: string;
  readonly abandon?: boolean;
  readonly reason?: string;
}

export interface StopPipelineExecutionOutput {
  readonly pipelineExecutionId?: string;
}

export interface Tag {
  readonly key: string;
  readonly value: string;
}

export interface TagResourceInput {
  readonly resourceArn: string;
  readonly tags: [];
}

export interface TagResourceOutput {
}

export interface ThirdPartyJob {
  readonly clientId?: string;
  readonly jobId?: string;
}

export interface ThirdPartyJobData {
  readonly actionTypeId?: ActionTypeId;
  readonly actionConfiguration?: ActionConfiguration;
  readonly pipelineContext?: PipelineContext;
  readonly inputArtifacts?: [];
  readonly outputArtifacts?: [];
  readonly artifactCredentials?: AWSSessionCredentials;
  readonly continuationToken?: string;
  readonly encryptionKey?: EncryptionKey;
}

export interface ThirdPartyJobDetails {
  readonly id?: string;
  readonly data?: ThirdPartyJobData;
  readonly nonce?: string;
}

export interface TooManyTagsException {
  readonly message?: string;
}

export interface TransitionState {
  readonly enabled?: boolean;
  readonly lastChangedBy?: string;
  readonly lastChangedAt?: Date;
  readonly disabledReason?: string;
}

export interface UntagResourceInput {
  readonly resourceArn: string;
  readonly tagKeys: [];
}

export interface UntagResourceOutput {
}

export interface UpdateActionTypeInput {
  readonly actionType: ActionTypeDeclaration;
}

export interface UpdatePipelineInput {
  readonly pipeline: PipelineDeclaration;
}

export interface UpdatePipelineOutput {
  readonly pipeline?: PipelineDeclaration;
}

export interface ValidationException {
}

export interface WebhookAuthConfiguration {
  readonly AllowedIPRange?: string;
  readonly SecretToken?: string;
}

export interface WebhookDefinition {
  readonly name: string;
  readonly targetPipeline: string;
  readonly targetAction: string;
  readonly filters: [];
  readonly authentication: string;
  readonly authenticationConfiguration: WebhookAuthConfiguration;
}

export interface WebhookFilterRule {
  readonly jsonPath: string;
  readonly matchEquals?: string;
}

export interface WebhookNotFoundException {
}


