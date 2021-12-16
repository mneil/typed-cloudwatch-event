/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface CreateDataset {
  readonly DatasetName: string;
  readonly DatasetSchema: DatasetSchema;
  readonly ServerSideKmsKeyId: string;
  readonly ClientToken: string;
  readonly Tags: [];
}
export interface CreateInferenceScheduler {
  readonly ModelName: string;
  readonly InferenceSchedulerName: string;
  readonly DataDelayOffsetInMinutes: number;
  readonly DataUploadFrequency: string;
  readonly DataInputConfiguration: InferenceInputConfiguration;
  readonly DataOutputConfiguration: InferenceOutputConfiguration;
  readonly RoleArn: string;
  readonly ServerSideKmsKeyId: string;
  readonly ClientToken: string;
  readonly Tags: [];
}
export interface CreateModel {
  readonly ModelName: string;
  readonly DatasetName: string;
  readonly DatasetSchema: DatasetSchema;
  readonly LabelsInputConfiguration: LabelsInputConfiguration;
  readonly ClientToken: string;
  readonly TrainingDataStartTime: Date;
  readonly TrainingDataEndTime: Date;
  readonly EvaluationDataStartTime: Date;
  readonly EvaluationDataEndTime: Date;
  readonly RoleArn: string;
  readonly DataPreProcessingConfiguration: DataPreProcessingConfiguration;
  readonly ServerSideKmsKeyId: string;
  readonly Tags: [];
  readonly OffCondition: string;
}
export interface DeleteDataset {
  readonly DatasetName: string;
}
export interface DeleteInferenceScheduler {
  readonly InferenceSchedulerName: string;
}
export interface DeleteModel {
  readonly ModelName: string;
}
export interface DescribeDataIngestionJob {
  readonly JobId: string;
}
export interface DescribeDataset {
  readonly DatasetName: string;
}
export interface DescribeInferenceScheduler {
  readonly InferenceSchedulerName: string;
}
export interface DescribeModel {
  readonly ModelName: string;
}
export interface ListDataIngestionJobs {
  readonly DatasetName: string;
  readonly NextToken: string;
  readonly MaxResults: number;
  readonly Status: string;
}
export interface ListDatasets {
  readonly NextToken: string;
  readonly MaxResults: number;
  readonly DatasetNameBeginsWith: string;
}
export interface ListInferenceExecutions {
  readonly NextToken: string;
  readonly MaxResults: number;
  readonly InferenceSchedulerName: string;
  readonly DataStartTimeAfter: Date;
  readonly DataEndTimeBefore: Date;
  readonly Status: string;
}
export interface ListInferenceSchedulers {
  readonly NextToken: string;
  readonly MaxResults: number;
  readonly InferenceSchedulerNameBeginsWith: string;
  readonly ModelName: string;
}
export interface ListModels {
  readonly NextToken: string;
  readonly MaxResults: number;
  readonly Status: string;
  readonly ModelNameBeginsWith: string;
  readonly DatasetNameBeginsWith: string;
}
export interface ListTagsForResource {
  readonly ResourceArn: string;
}
export interface StartDataIngestionJob {
  readonly DatasetName: string;
  readonly IngestionInputConfiguration: IngestionInputConfiguration;
  readonly RoleArn: string;
  readonly ClientToken: string;
}
export interface StartInferenceScheduler {
  readonly InferenceSchedulerName: string;
}
export interface StopInferenceScheduler {
  readonly InferenceSchedulerName: string;
}
export interface TagResource {
  readonly ResourceArn: string;
  readonly Tags: [];
}
export interface UntagResource {
  readonly ResourceArn: string;
  readonly TagKeys: [];
}
export interface UpdateInferenceScheduler {
  readonly InferenceSchedulerName: string;
  readonly DataDelayOffsetInMinutes: number;
  readonly DataUploadFrequency: string;
  readonly DataInputConfiguration: InferenceInputConfiguration;
  readonly DataOutputConfiguration: InferenceOutputConfiguration;
  readonly RoleArn: string;
}



interface AccessDeniedException {
  readonly Message: string;
}

interface ConflictException {
  readonly Message: string;
}

interface CreateDatasetRequest {
  readonly DatasetName: string;
  readonly DatasetSchema: DatasetSchema;
  readonly ServerSideKmsKeyId: string;
  readonly ClientToken: string;
  readonly Tags: [];
}

interface CreateDatasetResponse {
  readonly DatasetName: string;
  readonly DatasetArn: string;
  readonly Status: string;
}

interface CreateInferenceSchedulerRequest {
  readonly ModelName: string;
  readonly InferenceSchedulerName: string;
  readonly DataDelayOffsetInMinutes: number;
  readonly DataUploadFrequency: string;
  readonly DataInputConfiguration: InferenceInputConfiguration;
  readonly DataOutputConfiguration: InferenceOutputConfiguration;
  readonly RoleArn: string;
  readonly ServerSideKmsKeyId: string;
  readonly ClientToken: string;
  readonly Tags: [];
}

interface CreateInferenceSchedulerResponse {
  readonly InferenceSchedulerArn: string;
  readonly InferenceSchedulerName: string;
  readonly Status: string;
}

interface CreateModelRequest {
  readonly ModelName: string;
  readonly DatasetName: string;
  readonly DatasetSchema: DatasetSchema;
  readonly LabelsInputConfiguration: LabelsInputConfiguration;
  readonly ClientToken: string;
  readonly TrainingDataStartTime: Date;
  readonly TrainingDataEndTime: Date;
  readonly EvaluationDataStartTime: Date;
  readonly EvaluationDataEndTime: Date;
  readonly RoleArn: string;
  readonly DataPreProcessingConfiguration: DataPreProcessingConfiguration;
  readonly ServerSideKmsKeyId: string;
  readonly Tags: [];
  readonly OffCondition: string;
}

interface CreateModelResponse {
  readonly ModelArn: string;
  readonly Status: string;
}

interface DataIngestionJobSummary {
  readonly JobId: string;
  readonly DatasetName: string;
  readonly DatasetArn: string;
  readonly IngestionInputConfiguration: IngestionInputConfiguration;
  readonly Status: string;
}

interface DataPreProcessingConfiguration {
  readonly TargetSamplingRate: string;
}

interface DatasetSchema {
  readonly InlineDataSchema: string;
}

interface DatasetSummary {
  readonly DatasetName: string;
  readonly DatasetArn: string;
  readonly Status: string;
  readonly CreatedAt: Date;
}

interface DeleteDatasetRequest {
  readonly DatasetName: string;
}

interface DeleteInferenceSchedulerRequest {
  readonly InferenceSchedulerName: string;
}

interface DeleteModelRequest {
  readonly ModelName: string;
}

interface DescribeDataIngestionJobRequest {
  readonly JobId: string;
}

interface DescribeDataIngestionJobResponse {
  readonly JobId: string;
  readonly DatasetArn: string;
  readonly IngestionInputConfiguration: IngestionInputConfiguration;
  readonly RoleArn: string;
  readonly CreatedAt: Date;
  readonly Status: string;
  readonly FailedReason: string;
}

interface DescribeDatasetRequest {
  readonly DatasetName: string;
}

interface DescribeDatasetResponse {
  readonly DatasetName: string;
  readonly DatasetArn: string;
  readonly CreatedAt: Date;
  readonly LastUpdatedAt: Date;
  readonly Status: string;
  readonly Schema: string;
  readonly ServerSideKmsKeyId: string;
  readonly IngestionInputConfiguration: IngestionInputConfiguration;
}

interface DescribeInferenceSchedulerRequest {
  readonly InferenceSchedulerName: string;
}

interface DescribeInferenceSchedulerResponse {
  readonly ModelArn: string;
  readonly ModelName: string;
  readonly InferenceSchedulerName: string;
  readonly InferenceSchedulerArn: string;
  readonly Status: string;
  readonly DataDelayOffsetInMinutes: number;
  readonly DataUploadFrequency: string;
  readonly CreatedAt: Date;
  readonly UpdatedAt: Date;
  readonly DataInputConfiguration: InferenceInputConfiguration;
  readonly DataOutputConfiguration: InferenceOutputConfiguration;
  readonly RoleArn: string;
  readonly ServerSideKmsKeyId: string;
}

interface DescribeModelRequest {
  readonly ModelName: string;
}

interface DescribeModelResponse {
  readonly ModelName: string;
  readonly ModelArn: string;
  readonly DatasetName: string;
  readonly DatasetArn: string;
  readonly Schema: string;
  readonly LabelsInputConfiguration: LabelsInputConfiguration;
  readonly TrainingDataStartTime: Date;
  readonly TrainingDataEndTime: Date;
  readonly EvaluationDataStartTime: Date;
  readonly EvaluationDataEndTime: Date;
  readonly RoleArn: string;
  readonly DataPreProcessingConfiguration: DataPreProcessingConfiguration;
  readonly Status: string;
  readonly TrainingExecutionStartTime: Date;
  readonly TrainingExecutionEndTime: Date;
  readonly FailedReason: string;
  readonly ModelMetrics: string;
  readonly LastUpdatedTime: Date;
  readonly CreatedAt: Date;
  readonly ServerSideKmsKeyId: string;
  readonly OffCondition: string;
}

interface InferenceExecutionSummary {
  readonly ModelName: string;
  readonly ModelArn: string;
  readonly InferenceSchedulerName: string;
  readonly InferenceSchedulerArn: string;
  readonly ScheduledStartTime: Date;
  readonly DataStartTime: Date;
  readonly DataEndTime: Date;
  readonly DataInputConfiguration: InferenceInputConfiguration;
  readonly DataOutputConfiguration: InferenceOutputConfiguration;
  readonly CustomerResultObject: S3Object;
  readonly Status: string;
  readonly FailedReason: string;
}

interface InferenceInputConfiguration {
  readonly S3InputConfiguration: InferenceS3InputConfiguration;
  readonly InputTimeZoneOffset: string;
  readonly InferenceInputNameConfiguration: InferenceInputNameConfiguration;
}

interface InferenceInputNameConfiguration {
  readonly TimestampFormat: string;
  readonly ComponentTimestampDelimiter: string;
}

interface InferenceOutputConfiguration {
  readonly S3OutputConfiguration: InferenceS3OutputConfiguration;
  readonly KmsKeyId: string;
}

interface InferenceS3InputConfiguration {
  readonly Bucket: string;
  readonly Prefix: string;
}

interface InferenceS3OutputConfiguration {
  readonly Bucket: string;
  readonly Prefix: string;
}

interface InferenceSchedulerSummary {
  readonly ModelName: string;
  readonly ModelArn: string;
  readonly InferenceSchedulerName: string;
  readonly InferenceSchedulerArn: string;
  readonly Status: string;
  readonly DataDelayOffsetInMinutes: number;
  readonly DataUploadFrequency: string;
}

interface IngestionInputConfiguration {
  readonly S3InputConfiguration: IngestionS3InputConfiguration;
}

interface IngestionS3InputConfiguration {
  readonly Bucket: string;
  readonly Prefix: string;
}

interface InternalServerException {
  readonly Message: string;
}

interface LabelsInputConfiguration {
  readonly S3InputConfiguration: LabelsS3InputConfiguration;
}

interface LabelsS3InputConfiguration {
  readonly Bucket: string;
  readonly Prefix: string;
}

interface ListDataIngestionJobsRequest {
  readonly DatasetName: string;
  readonly NextToken: string;
  readonly MaxResults: number;
  readonly Status: string;
}

interface ListDataIngestionJobsResponse {
  readonly NextToken: string;
  readonly DataIngestionJobSummaries: [];
}

interface ListDatasetsRequest {
  readonly NextToken: string;
  readonly MaxResults: number;
  readonly DatasetNameBeginsWith: string;
}

interface ListDatasetsResponse {
  readonly NextToken: string;
  readonly DatasetSummaries: [];
}

interface ListInferenceExecutionsRequest {
  readonly NextToken: string;
  readonly MaxResults: number;
  readonly InferenceSchedulerName: string;
  readonly DataStartTimeAfter: Date;
  readonly DataEndTimeBefore: Date;
  readonly Status: string;
}

interface ListInferenceExecutionsResponse {
  readonly NextToken: string;
  readonly InferenceExecutionSummaries: [];
}

interface ListInferenceSchedulersRequest {
  readonly NextToken: string;
  readonly MaxResults: number;
  readonly InferenceSchedulerNameBeginsWith: string;
  readonly ModelName: string;
}

interface ListInferenceSchedulersResponse {
  readonly NextToken: string;
  readonly InferenceSchedulerSummaries: [];
}

interface ListModelsRequest {
  readonly NextToken: string;
  readonly MaxResults: number;
  readonly Status: string;
  readonly ModelNameBeginsWith: string;
  readonly DatasetNameBeginsWith: string;
}

interface ListModelsResponse {
  readonly NextToken: string;
  readonly ModelSummaries: [];
}

interface ListTagsForResourceRequest {
  readonly ResourceArn: string;
}

interface ListTagsForResourceResponse {
  readonly Tags: [];
}

interface ModelSummary {
  readonly ModelName: string;
  readonly ModelArn: string;
  readonly DatasetName: string;
  readonly DatasetArn: string;
  readonly Status: string;
  readonly CreatedAt: Date;
}

interface ResourceNotFoundException {
  readonly Message: string;
}

interface S3Object {
  readonly Bucket: string;
  readonly Key: string;
}

interface ServiceQuotaExceededException {
  readonly Message: string;
}

interface StartDataIngestionJobRequest {
  readonly DatasetName: string;
  readonly IngestionInputConfiguration: IngestionInputConfiguration;
  readonly RoleArn: string;
  readonly ClientToken: string;
}

interface StartDataIngestionJobResponse {
  readonly JobId: string;
  readonly Status: string;
}

interface StartInferenceSchedulerRequest {
  readonly InferenceSchedulerName: string;
}

interface StartInferenceSchedulerResponse {
  readonly ModelArn: string;
  readonly ModelName: string;
  readonly InferenceSchedulerName: string;
  readonly InferenceSchedulerArn: string;
  readonly Status: string;
}

interface StopInferenceSchedulerRequest {
  readonly InferenceSchedulerName: string;
}

interface StopInferenceSchedulerResponse {
  readonly ModelArn: string;
  readonly ModelName: string;
  readonly InferenceSchedulerName: string;
  readonly InferenceSchedulerArn: string;
  readonly Status: string;
}

interface Tag {
  readonly Key: string;
  readonly Value: string;
}

interface TagResourceRequest {
  readonly ResourceArn: string;
  readonly Tags: [];
}

interface TagResourceResponse {
}

interface ThrottlingException {
  readonly Message: string;
}

interface UntagResourceRequest {
  readonly ResourceArn: string;
  readonly TagKeys: [];
}

interface UntagResourceResponse {
}

interface UpdateInferenceSchedulerRequest {
  readonly InferenceSchedulerName: string;
  readonly DataDelayOffsetInMinutes: number;
  readonly DataUploadFrequency: string;
  readonly DataInputConfiguration: InferenceInputConfiguration;
  readonly DataOutputConfiguration: InferenceOutputConfiguration;
  readonly RoleArn: string;
}

interface ValidationException {
  readonly Message: string;
}
