/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface CreateDataset {
  readonly ProjectName: string;
  readonly DatasetType: string;
  readonly DatasetSource: DatasetSource;
  readonly ClientToken: string;
}
export interface CreateModel {
  readonly ProjectName: string;
  readonly Description: string;
  readonly ClientToken: string;
  readonly OutputConfig: OutputConfig;
  readonly KmsKeyId: string;
  readonly Tags: [];
}
export interface CreateProject {
  readonly ProjectName: string;
  readonly ClientToken: string;
}
export interface DeleteDataset {
  readonly ProjectName: string;
  readonly DatasetType: string;
  readonly ClientToken: string;
}
export interface DeleteModel {
  readonly ProjectName: string;
  readonly ModelVersion: string;
  readonly ClientToken: string;
}
export interface DeleteProject {
  readonly ProjectName: string;
  readonly ClientToken: string;
}
export interface DescribeDataset {
  readonly ProjectName: string;
  readonly DatasetType: string;
}
export interface DescribeModel {
  readonly ProjectName: string;
  readonly ModelVersion: string;
}
export interface DescribeModelPackagingJob {
  readonly ProjectName: string;
  readonly JobName: string;
}
export interface DescribeProject {
  readonly ProjectName: string;
}
export interface DetectAnomalies {
  readonly ProjectName: string;
  readonly ModelVersion: string;
  readonly Body: unknown;
  readonly ContentType: string;
}
export interface ListDatasetEntries {
  readonly ProjectName: string;
  readonly DatasetType: string;
  readonly Labeled: boolean;
  readonly AnomalyClass: string;
  readonly BeforeCreationDate: Date;
  readonly AfterCreationDate: Date;
  readonly NextToken: string;
  readonly MaxResults: number;
  readonly SourceRefContains: string;
}
export interface ListModelPackagingJobs {
  readonly ProjectName: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}
export interface ListModels {
  readonly ProjectName: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}
export interface ListProjects {
  readonly NextToken: string;
  readonly MaxResults: number;
}
export interface ListTagsForResource {
  readonly ResourceArn: string;
}
export interface StartModel {
  readonly ProjectName: string;
  readonly ModelVersion: string;
  readonly MinInferenceUnits: number;
  readonly ClientToken: string;
}
export interface StartModelPackagingJob {
  readonly ProjectName: string;
  readonly ModelVersion: string;
  readonly JobName: string;
  readonly Configuration: ModelPackagingConfiguration;
  readonly Description: string;
  readonly ClientToken: string;
}
export interface StopModel {
  readonly ProjectName: string;
  readonly ModelVersion: string;
  readonly ClientToken: string;
}
export interface TagResource {
  readonly ResourceArn: string;
  readonly Tags: [];
}
export interface UntagResource {
  readonly ResourceArn: string;
  readonly TagKeys: [];
}
export interface UpdateDatasetEntries {
  readonly ProjectName: string;
  readonly DatasetType: string;
  readonly Changes: unknown;
  readonly ClientToken: string;
}



interface AccessDeniedException {
  readonly Message: string;
}

interface ConflictException {
  readonly Message: string;
  readonly ResourceId: string;
  readonly ResourceType: string;
}

interface CreateDatasetRequest {
  readonly ProjectName: string;
  readonly DatasetType: string;
  readonly DatasetSource: DatasetSource;
  readonly ClientToken: string;
}

interface CreateDatasetResponse {
  readonly DatasetMetadata: DatasetMetadata;
}

interface CreateModelRequest {
  readonly ProjectName: string;
  readonly Description: string;
  readonly ClientToken: string;
  readonly OutputConfig: OutputConfig;
  readonly KmsKeyId: string;
  readonly Tags: [];
}

interface CreateModelResponse {
  readonly ModelMetadata: ModelMetadata;
}

interface CreateProjectRequest {
  readonly ProjectName: string;
  readonly ClientToken: string;
}

interface CreateProjectResponse {
  readonly ProjectMetadata: ProjectMetadata;
}

interface DatasetDescription {
  readonly ProjectName: string;
  readonly DatasetType: string;
  readonly CreationTimestamp: Date;
  readonly LastUpdatedTimestamp: Date;
  readonly Status: string;
  readonly StatusMessage: string;
  readonly ImageStats: DatasetImageStats;
}

interface DatasetGroundTruthManifest {
  readonly S3Object: InputS3Object;
}

interface DatasetImageStats {
  readonly Total: number;
  readonly Labeled: number;
  readonly Normal: number;
  readonly Anomaly: number;
}

interface DatasetMetadata {
  readonly DatasetType: string;
  readonly CreationTimestamp: Date;
  readonly Status: string;
  readonly StatusMessage: string;
}

interface DatasetSource {
  readonly GroundTruthManifest: DatasetGroundTruthManifest;
}

interface DeleteDatasetRequest {
  readonly ProjectName: string;
  readonly DatasetType: string;
  readonly ClientToken: string;
}

interface DeleteDatasetResponse {
}

interface DeleteModelRequest {
  readonly ProjectName: string;
  readonly ModelVersion: string;
  readonly ClientToken: string;
}

interface DeleteModelResponse {
  readonly ModelArn: string;
}

interface DeleteProjectRequest {
  readonly ProjectName: string;
  readonly ClientToken: string;
}

interface DeleteProjectResponse {
  readonly ProjectArn: string;
}

interface DescribeDatasetRequest {
  readonly ProjectName: string;
  readonly DatasetType: string;
}

interface DescribeDatasetResponse {
  readonly DatasetDescription: DatasetDescription;
}

interface DescribeModelPackagingJobRequest {
  readonly ProjectName: string;
  readonly JobName: string;
}

interface DescribeModelPackagingJobResponse {
  readonly ModelPackagingDescription: ModelPackagingDescription;
}

interface DescribeModelRequest {
  readonly ProjectName: string;
  readonly ModelVersion: string;
}

interface DescribeModelResponse {
  readonly ModelDescription: ModelDescription;
}

interface DescribeProjectRequest {
  readonly ProjectName: string;
}

interface DescribeProjectResponse {
  readonly ProjectDescription: ProjectDescription;
}

interface DetectAnomaliesRequest {
  readonly ProjectName: string;
  readonly ModelVersion: string;
  readonly Body: unknown;
  readonly ContentType: string;
}

interface DetectAnomaliesResponse {
  readonly DetectAnomalyResult: DetectAnomalyResult;
}

interface DetectAnomalyResult {
  readonly Source: ImageSource;
  readonly IsAnomalous: boolean;
  readonly Confidence: unknown;
}

interface GreengrassConfiguration {
  readonly CompilerOptions: string;
  readonly TargetDevice: string;
  readonly TargetPlatform: TargetPlatform;
  readonly S3OutputLocation: S3Location;
  readonly ComponentName: string;
  readonly ComponentVersion: string;
  readonly ComponentDescription: string;
  readonly Tags: [];
}

interface GreengrassOutputDetails {
  readonly ComponentVersionArn: string;
  readonly ComponentName: string;
  readonly ComponentVersion: string;
}

interface ImageSource {
  readonly Type: string;
}

interface InputS3Object {
  readonly Bucket: string;
  readonly Key: string;
  readonly VersionId: string;
}

interface InternalServerException {
  readonly Message: string;
  readonly RetryAfterSeconds: number;
}

interface ListDatasetEntriesRequest {
  readonly ProjectName: string;
  readonly DatasetType: string;
  readonly Labeled: boolean;
  readonly AnomalyClass: string;
  readonly BeforeCreationDate: Date;
  readonly AfterCreationDate: Date;
  readonly NextToken: string;
  readonly MaxResults: number;
  readonly SourceRefContains: string;
}

interface ListDatasetEntriesResponse {
  readonly DatasetEntries: [];
  readonly NextToken: string;
}

interface ListModelPackagingJobsRequest {
  readonly ProjectName: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListModelPackagingJobsResponse {
  readonly ModelPackagingJobs: [];
  readonly NextToken: string;
}

interface ListModelsRequest {
  readonly ProjectName: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListModelsResponse {
  readonly Models: [];
  readonly NextToken: string;
}

interface ListProjectsRequest {
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListProjectsResponse {
  readonly Projects: [];
  readonly NextToken: string;
}

interface ListTagsForResourceRequest {
  readonly ResourceArn: string;
}

interface ListTagsForResourceResponse {
  readonly Tags: [];
}

interface ModelDescription {
  readonly ModelVersion: string;
  readonly ModelArn: string;
  readonly CreationTimestamp: Date;
  readonly Description: string;
  readonly Status: string;
  readonly StatusMessage: string;
  readonly Performance: ModelPerformance;
  readonly OutputConfig: OutputConfig;
  readonly EvaluationManifest: OutputS3Object;
  readonly EvaluationResult: OutputS3Object;
  readonly EvaluationEndTimestamp: Date;
  readonly KmsKeyId: string;
}

interface ModelMetadata {
  readonly CreationTimestamp: Date;
  readonly ModelVersion: string;
  readonly ModelArn: string;
  readonly Description: string;
  readonly Status: string;
  readonly StatusMessage: string;
  readonly Performance: ModelPerformance;
}

interface ModelPackagingConfiguration {
  readonly Greengrass: GreengrassConfiguration;
}

interface ModelPackagingDescription {
  readonly JobName: string;
  readonly ProjectName: string;
  readonly ModelVersion: string;
  readonly ModelPackagingConfiguration: ModelPackagingConfiguration;
  readonly ModelPackagingJobDescription: string;
  readonly ModelPackagingMethod: string;
  readonly ModelPackagingOutputDetails: ModelPackagingOutputDetails;
  readonly Status: string;
  readonly StatusMessage: string;
  readonly CreationTimestamp: Date;
  readonly LastUpdatedTimestamp: Date;
}

interface ModelPackagingJobMetadata {
  readonly JobName: string;
  readonly ProjectName: string;
  readonly ModelVersion: string;
  readonly ModelPackagingJobDescription: string;
  readonly ModelPackagingMethod: string;
  readonly Status: string;
  readonly StatusMessage: string;
  readonly CreationTimestamp: Date;
  readonly LastUpdatedTimestamp: Date;
}

interface ModelPackagingOutputDetails {
  readonly Greengrass: GreengrassOutputDetails;
}

interface ModelPerformance {
  readonly F1Score: unknown;
  readonly Recall: unknown;
  readonly Precision: unknown;
}

interface OutputConfig {
  readonly S3Location: S3Location;
}

interface OutputS3Object {
  readonly Bucket: string;
  readonly Key: string;
}

interface ProjectDescription {
  readonly ProjectArn: string;
  readonly ProjectName: string;
  readonly CreationTimestamp: Date;
  readonly Datasets: [];
}

interface ProjectMetadata {
  readonly ProjectArn: string;
  readonly ProjectName: string;
  readonly CreationTimestamp: Date;
}

interface ResourceNotFoundException {
  readonly Message: string;
  readonly ResourceId: string;
  readonly ResourceType: string;
}

interface S3Location {
  readonly Bucket: string;
  readonly Prefix: string;
}

interface ServiceQuotaExceededException {
  readonly Message: string;
  readonly ResourceId: string;
  readonly ResourceType: string;
  readonly QuotaCode: string;
  readonly ServiceCode: string;
}

interface StartModelPackagingJobRequest {
  readonly ProjectName: string;
  readonly ModelVersion: string;
  readonly JobName: string;
  readonly Configuration: ModelPackagingConfiguration;
  readonly Description: string;
  readonly ClientToken: string;
}

interface StartModelPackagingJobResponse {
  readonly JobName: string;
}

interface StartModelRequest {
  readonly ProjectName: string;
  readonly ModelVersion: string;
  readonly MinInferenceUnits: number;
  readonly ClientToken: string;
}

interface StartModelResponse {
  readonly Status: string;
}

interface StopModelRequest {
  readonly ProjectName: string;
  readonly ModelVersion: string;
  readonly ClientToken: string;
}

interface StopModelResponse {
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

interface TargetPlatform {
  readonly Os: string;
  readonly Arch: string;
  readonly Accelerator: string;
}

interface ThrottlingException {
  readonly Message: string;
  readonly QuotaCode: string;
  readonly ServiceCode: string;
  readonly RetryAfterSeconds: number;
}

interface UntagResourceRequest {
  readonly ResourceArn: string;
  readonly TagKeys: [];
}

interface UntagResourceResponse {
}

interface UpdateDatasetEntriesRequest {
  readonly ProjectName: string;
  readonly DatasetType: string;
  readonly Changes: unknown;
  readonly ClientToken: string;
}

interface UpdateDatasetEntriesResponse {
  readonly Status: string;
}

interface ValidationException {
  readonly Message: string;
}

