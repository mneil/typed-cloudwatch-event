/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface CreateCanary {
  readonly Name: string;
  readonly Code: CanaryCodeInput;
  readonly ArtifactS3Location: string;
  readonly ExecutionRoleArn: string;
  readonly Schedule: CanaryScheduleInput;
  readonly RunConfig?: CanaryRunConfigInput;
  readonly SuccessRetentionPeriodInDays?: number;
  readonly FailureRetentionPeriodInDays?: number;
  readonly RuntimeVersion: string;
  readonly VpcConfig?: VpcConfigInput;
  readonly Tags?: {[key: string]: any};
  readonly ArtifactConfig?: ArtifactConfigInput;
}

export interface DeleteCanary {
  readonly Name: string;
}

export interface DescribeCanaries {
  readonly NextToken?: string;
  readonly MaxResults?: number;
}

export interface DescribeCanariesLastRun {
  readonly NextToken?: string;
  readonly MaxResults?: number;
}

export interface DescribeRuntimeVersions {
  readonly NextToken?: string;
  readonly MaxResults?: number;
}

export interface GetCanary {
  readonly Name: string;
}

export interface GetCanaryRuns {
  readonly Name: string;
  readonly NextToken?: string;
  readonly MaxResults?: number;
}

export interface ListTagsForResource {
  readonly ResourceArn: string;
}

export interface StartCanary {
  readonly Name: string;
}

export interface StopCanary {
  readonly Name: string;
}

export interface TagResource {
  readonly ResourceArn: string;
  readonly Tags: {[key: string]: any};
}

export interface UntagResource {
  readonly ResourceArn: string;
  readonly TagKeys: [];
}

export interface UpdateCanary {
  readonly Name: string;
  readonly Code?: CanaryCodeInput;
  readonly ExecutionRoleArn?: string;
  readonly RuntimeVersion?: string;
  readonly Schedule?: CanaryScheduleInput;
  readonly RunConfig?: CanaryRunConfigInput;
  readonly SuccessRetentionPeriodInDays?: number;
  readonly FailureRetentionPeriodInDays?: number;
  readonly VpcConfig?: VpcConfigInput;
  readonly VisualReference?: VisualReferenceInput;
  readonly ArtifactS3Location?: string;
  readonly ArtifactConfig?: ArtifactConfigInput;
}

export interface ArtifactConfigInput {
  readonly S3Encryption?: S3EncryptionConfig;
}

export interface ArtifactConfigOutput {
  readonly S3Encryption?: S3EncryptionConfig;
}

export interface BaseScreenshot {
  readonly ScreenshotName: string;
  readonly IgnoreCoordinates?: [];
}

export interface Canary {
  readonly Id?: string;
  readonly Name?: string;
  readonly Code?: CanaryCodeOutput;
  readonly ExecutionRoleArn?: string;
  readonly Schedule?: CanaryScheduleOutput;
  readonly RunConfig?: CanaryRunConfigOutput;
  readonly SuccessRetentionPeriodInDays?: number;
  readonly FailureRetentionPeriodInDays?: number;
  readonly Status?: CanaryStatus;
  readonly Timeline?: CanaryTimeline;
  readonly ArtifactS3Location?: string;
  readonly EngineArn?: string;
  readonly RuntimeVersion?: string;
  readonly VpcConfig?: VpcConfigOutput;
  readonly VisualReference?: VisualReferenceOutput;
  readonly Tags?: {[key: string]: any};
  readonly ArtifactConfig?: ArtifactConfigOutput;
}

export interface CanaryCodeInput {
  readonly S3Bucket?: string;
  readonly S3Key?: string;
  readonly S3Version?: string;
  readonly ZipFile?: unknown;
  readonly Handler: string;
}

export interface CanaryCodeOutput {
  readonly SourceLocationArn?: string;
  readonly Handler?: string;
}

export interface CanaryLastRun {
  readonly CanaryName?: string;
  readonly LastRun?: CanaryRun;
}

export interface CanaryRun {
  readonly Id?: string;
  readonly Name?: string;
  readonly Status?: CanaryRunStatus;
  readonly Timeline?: CanaryRunTimeline;
  readonly ArtifactS3Location?: string;
}

export interface CanaryRunConfigInput {
  readonly TimeoutInSeconds?: number;
  readonly MemoryInMB?: number;
  readonly ActiveTracing?: boolean;
  readonly EnvironmentVariables?: {[key: string]: any};
}

export interface CanaryRunConfigOutput {
  readonly TimeoutInSeconds?: number;
  readonly MemoryInMB?: number;
  readonly ActiveTracing?: boolean;
}

export interface CanaryRunStatus {
  readonly State?: string;
  readonly StateReason?: string;
  readonly StateReasonCode?: string;
}

export interface CanaryRunTimeline {
  readonly Started?: Date;
  readonly Completed?: Date;
}

export interface CanaryScheduleInput {
  readonly Expression: string;
  readonly DurationInSeconds?: number;
}

export interface CanaryScheduleOutput {
  readonly Expression?: string;
  readonly DurationInSeconds?: number;
}

export interface CanaryStatus {
  readonly State?: string;
  readonly StateReason?: string;
  readonly StateReasonCode?: string;
}

export interface CanaryTimeline {
  readonly Created?: Date;
  readonly LastModified?: Date;
  readonly LastStarted?: Date;
  readonly LastStopped?: Date;
}

export interface ConflictException {
  readonly Message?: string;
}

export interface CreateCanaryRequest {
  readonly Name: string;
  readonly Code: CanaryCodeInput;
  readonly ArtifactS3Location: string;
  readonly ExecutionRoleArn: string;
  readonly Schedule: CanaryScheduleInput;
  readonly RunConfig?: CanaryRunConfigInput;
  readonly SuccessRetentionPeriodInDays?: number;
  readonly FailureRetentionPeriodInDays?: number;
  readonly RuntimeVersion: string;
  readonly VpcConfig?: VpcConfigInput;
  readonly Tags?: {[key: string]: any};
  readonly ArtifactConfig?: ArtifactConfigInput;
}

export interface CreateCanaryResponse {
  readonly Canary?: Canary;
}

export interface DeleteCanaryRequest {
  readonly Name: string;
}

export interface DeleteCanaryResponse {
}

export interface DescribeCanariesLastRunRequest {
  readonly NextToken?: string;
  readonly MaxResults?: number;
}

export interface DescribeCanariesLastRunResponse {
  readonly CanariesLastRun?: [];
  readonly NextToken?: string;
}

export interface DescribeCanariesRequest {
  readonly NextToken?: string;
  readonly MaxResults?: number;
}

export interface DescribeCanariesResponse {
  readonly Canaries?: [];
  readonly NextToken?: string;
}

export interface DescribeRuntimeVersionsRequest {
  readonly NextToken?: string;
  readonly MaxResults?: number;
}

export interface DescribeRuntimeVersionsResponse {
  readonly RuntimeVersions?: [];
  readonly NextToken?: string;
}

export interface GetCanaryRequest {
  readonly Name: string;
}

export interface GetCanaryResponse {
  readonly Canary?: Canary;
}

export interface GetCanaryRunsRequest {
  readonly Name: string;
  readonly NextToken?: string;
  readonly MaxResults?: number;
}

export interface GetCanaryRunsResponse {
  readonly CanaryRuns?: [];
  readonly NextToken?: string;
}

export interface InternalServerException {
  readonly Message?: string;
}

export interface ListTagsForResourceRequest {
  readonly ResourceArn: string;
}

export interface ListTagsForResourceResponse {
  readonly Tags?: {[key: string]: any};
}

export interface ResourceNotFoundException {
  readonly Message?: string;
}

export interface RuntimeVersion {
  readonly VersionName?: string;
  readonly Description?: string;
  readonly ReleaseDate?: Date;
  readonly DeprecationDate?: Date;
}

export interface S3EncryptionConfig {
  readonly EncryptionMode?: string;
  readonly KmsKeyArn?: string;
}

export interface StartCanaryRequest {
  readonly Name: string;
}

export interface StartCanaryResponse {
}

export interface StopCanaryRequest {
  readonly Name: string;
}

export interface StopCanaryResponse {
}

export interface TagResourceRequest {
  readonly ResourceArn: string;
  readonly Tags: {[key: string]: any};
}

export interface TagResourceResponse {
}

export interface UntagResourceRequest {
  readonly ResourceArn: string;
  readonly TagKeys: [];
}

export interface UntagResourceResponse {
}

export interface UpdateCanaryRequest {
  readonly Name: string;
  readonly Code?: CanaryCodeInput;
  readonly ExecutionRoleArn?: string;
  readonly RuntimeVersion?: string;
  readonly Schedule?: CanaryScheduleInput;
  readonly RunConfig?: CanaryRunConfigInput;
  readonly SuccessRetentionPeriodInDays?: number;
  readonly FailureRetentionPeriodInDays?: number;
  readonly VpcConfig?: VpcConfigInput;
  readonly VisualReference?: VisualReferenceInput;
  readonly ArtifactS3Location?: string;
  readonly ArtifactConfig?: ArtifactConfigInput;
}

export interface UpdateCanaryResponse {
}

export interface ValidationException {
  readonly Message?: string;
}

export interface VisualReferenceInput {
  readonly BaseScreenshots?: [];
  readonly BaseCanaryRunId: string;
}

export interface VisualReferenceOutput {
  readonly BaseScreenshots?: [];
  readonly BaseCanaryRunId?: string;
}

export interface VpcConfigInput {
  readonly SubnetIds?: [];
  readonly SecurityGroupIds?: [];
}

export interface VpcConfigOutput {
  readonly VpcId?: string;
  readonly SubnetIds?: [];
  readonly SecurityGroupIds?: [];
}


