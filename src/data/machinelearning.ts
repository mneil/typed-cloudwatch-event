/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface AddTags {
  readonly Tags: [];
  readonly ResourceId: string;
  readonly ResourceType: string;
}

export interface CreateBatchPrediction {
  readonly BatchPredictionId: string;
  readonly BatchPredictionName?: string;
  readonly MLModelId: string;
  readonly BatchPredictionDataSourceId: string;
  readonly OutputUri: string;
}

export interface CreateDataSourceFromRDS {
  readonly DataSourceId: string;
  readonly DataSourceName?: string;
  readonly RDSData: RDSDataSpec;
  readonly RoleARN: string;
  readonly ComputeStatistics?: boolean;
}

export interface CreateDataSourceFromRedshift {
  readonly DataSourceId: string;
  readonly DataSourceName?: string;
  readonly DataSpec: RedshiftDataSpec;
  readonly RoleARN: string;
  readonly ComputeStatistics?: boolean;
}

export interface CreateDataSourceFromS3 {
  readonly DataSourceId: string;
  readonly DataSourceName?: string;
  readonly DataSpec: S3DataSpec;
  readonly ComputeStatistics?: boolean;
}

export interface CreateEvaluation {
  readonly EvaluationId: string;
  readonly EvaluationName?: string;
  readonly MLModelId: string;
  readonly EvaluationDataSourceId: string;
}

export interface CreateMLModel {
  readonly MLModelId: string;
  readonly MLModelName?: string;
  readonly MLModelType: string;
  readonly Parameters?: {[key: string]: any};
  readonly TrainingDataSourceId: string;
  readonly Recipe?: string;
  readonly RecipeUri?: string;
}

export interface CreateRealtimeEndpoint {
  readonly MLModelId: string;
}

export interface DeleteBatchPrediction {
  readonly BatchPredictionId: string;
}

export interface DeleteDataSource {
  readonly DataSourceId: string;
}

export interface DeleteEvaluation {
  readonly EvaluationId: string;
}

export interface DeleteMLModel {
  readonly MLModelId: string;
}

export interface DeleteRealtimeEndpoint {
  readonly MLModelId: string;
}

export interface DeleteTags {
  readonly TagKeys: [];
  readonly ResourceId: string;
  readonly ResourceType: string;
}

export interface DescribeBatchPredictions {
  readonly FilterVariable?: string;
  readonly EQ?: string;
  readonly GT?: string;
  readonly LT?: string;
  readonly GE?: string;
  readonly LE?: string;
  readonly NE?: string;
  readonly Prefix?: string;
  readonly SortOrder?: string;
  readonly NextToken?: string;
  readonly Limit?: number;
}

export interface DescribeDataSources {
  readonly FilterVariable?: string;
  readonly EQ?: string;
  readonly GT?: string;
  readonly LT?: string;
  readonly GE?: string;
  readonly LE?: string;
  readonly NE?: string;
  readonly Prefix?: string;
  readonly SortOrder?: string;
  readonly NextToken?: string;
  readonly Limit?: number;
}

export interface DescribeEvaluations {
  readonly FilterVariable?: string;
  readonly EQ?: string;
  readonly GT?: string;
  readonly LT?: string;
  readonly GE?: string;
  readonly LE?: string;
  readonly NE?: string;
  readonly Prefix?: string;
  readonly SortOrder?: string;
  readonly NextToken?: string;
  readonly Limit?: number;
}

export interface DescribeMLModels {
  readonly FilterVariable?: string;
  readonly EQ?: string;
  readonly GT?: string;
  readonly LT?: string;
  readonly GE?: string;
  readonly LE?: string;
  readonly NE?: string;
  readonly Prefix?: string;
  readonly SortOrder?: string;
  readonly NextToken?: string;
  readonly Limit?: number;
}

export interface DescribeTags {
  readonly ResourceId: string;
  readonly ResourceType: string;
}

export interface GetBatchPrediction {
  readonly BatchPredictionId: string;
}

export interface GetDataSource {
  readonly DataSourceId: string;
  readonly Verbose?: boolean;
}

export interface GetEvaluation {
  readonly EvaluationId: string;
}

export interface GetMLModel {
  readonly MLModelId: string;
  readonly Verbose?: boolean;
}

export interface Predict {
  readonly MLModelId: string;
  readonly Record: {[key: string]: any};
  readonly PredictEndpoint: string;
}

export interface UpdateBatchPrediction {
  readonly BatchPredictionId: string;
  readonly BatchPredictionName: string;
}

export interface UpdateDataSource {
  readonly DataSourceId: string;
  readonly DataSourceName: string;
}

export interface UpdateEvaluation {
  readonly EvaluationId: string;
  readonly EvaluationName: string;
}

export interface UpdateMLModel {
  readonly MLModelId: string;
  readonly MLModelName?: string;
  readonly ScoreThreshold?: unknown;
}

export interface AddTagsInput {
  readonly Tags: [];
  readonly ResourceId: string;
  readonly ResourceType: string;
}

export interface AddTagsOutput {
  readonly ResourceId?: string;
  readonly ResourceType?: string;
}

export interface BatchPrediction {
  readonly BatchPredictionId?: string;
  readonly MLModelId?: string;
  readonly BatchPredictionDataSourceId?: string;
  readonly InputDataLocationS3?: string;
  readonly CreatedByIamUser?: string;
  readonly CreatedAt?: Date;
  readonly LastUpdatedAt?: Date;
  readonly Name?: string;
  readonly Status?: string;
  readonly OutputUri?: string;
  readonly Message?: string;
  readonly ComputeTime?: number;
  readonly FinishedAt?: Date;
  readonly StartedAt?: Date;
  readonly TotalRecordCount?: number;
  readonly InvalidRecordCount?: number;
}

export interface CreateBatchPredictionInput {
  readonly BatchPredictionId: string;
  readonly BatchPredictionName?: string;
  readonly MLModelId: string;
  readonly BatchPredictionDataSourceId: string;
  readonly OutputUri: string;
}

export interface CreateBatchPredictionOutput {
  readonly BatchPredictionId?: string;
}

export interface CreateDataSourceFromRDSInput {
  readonly DataSourceId: string;
  readonly DataSourceName?: string;
  readonly RDSData: RDSDataSpec;
  readonly RoleARN: string;
  readonly ComputeStatistics?: boolean;
}

export interface CreateDataSourceFromRDSOutput {
  readonly DataSourceId?: string;
}

export interface CreateDataSourceFromRedshiftInput {
  readonly DataSourceId: string;
  readonly DataSourceName?: string;
  readonly DataSpec: RedshiftDataSpec;
  readonly RoleARN: string;
  readonly ComputeStatistics?: boolean;
}

export interface CreateDataSourceFromRedshiftOutput {
  readonly DataSourceId?: string;
}

export interface CreateDataSourceFromS3Input {
  readonly DataSourceId: string;
  readonly DataSourceName?: string;
  readonly DataSpec: S3DataSpec;
  readonly ComputeStatistics?: boolean;
}

export interface CreateDataSourceFromS3Output {
  readonly DataSourceId?: string;
}

export interface CreateEvaluationInput {
  readonly EvaluationId: string;
  readonly EvaluationName?: string;
  readonly MLModelId: string;
  readonly EvaluationDataSourceId: string;
}

export interface CreateEvaluationOutput {
  readonly EvaluationId?: string;
}

export interface CreateMLModelInput {
  readonly MLModelId: string;
  readonly MLModelName?: string;
  readonly MLModelType: string;
  readonly Parameters?: {[key: string]: any};
  readonly TrainingDataSourceId: string;
  readonly Recipe?: string;
  readonly RecipeUri?: string;
}

export interface CreateMLModelOutput {
  readonly MLModelId?: string;
}

export interface CreateRealtimeEndpointInput {
  readonly MLModelId: string;
}

export interface CreateRealtimeEndpointOutput {
  readonly MLModelId?: string;
  readonly RealtimeEndpointInfo?: RealtimeEndpointInfo;
}

export interface DataSource {
  readonly DataSourceId?: string;
  readonly DataLocationS3?: string;
  readonly DataRearrangement?: string;
  readonly CreatedByIamUser?: string;
  readonly CreatedAt?: Date;
  readonly LastUpdatedAt?: Date;
  readonly DataSizeInBytes?: number;
  readonly NumberOfFiles?: number;
  readonly Name?: string;
  readonly Status?: string;
  readonly Message?: string;
  readonly RedshiftMetadata?: RedshiftMetadata;
  readonly RDSMetadata?: RDSMetadata;
  readonly RoleARN?: string;
  readonly ComputeStatistics?: boolean;
  readonly ComputeTime?: number;
  readonly FinishedAt?: Date;
  readonly StartedAt?: Date;
}

export interface DeleteBatchPredictionInput {
  readonly BatchPredictionId: string;
}

export interface DeleteBatchPredictionOutput {
  readonly BatchPredictionId?: string;
}

export interface DeleteDataSourceInput {
  readonly DataSourceId: string;
}

export interface DeleteDataSourceOutput {
  readonly DataSourceId?: string;
}

export interface DeleteEvaluationInput {
  readonly EvaluationId: string;
}

export interface DeleteEvaluationOutput {
  readonly EvaluationId?: string;
}

export interface DeleteMLModelInput {
  readonly MLModelId: string;
}

export interface DeleteMLModelOutput {
  readonly MLModelId?: string;
}

export interface DeleteRealtimeEndpointInput {
  readonly MLModelId: string;
}

export interface DeleteRealtimeEndpointOutput {
  readonly MLModelId?: string;
  readonly RealtimeEndpointInfo?: RealtimeEndpointInfo;
}

export interface DeleteTagsInput {
  readonly TagKeys: [];
  readonly ResourceId: string;
  readonly ResourceType: string;
}

export interface DeleteTagsOutput {
  readonly ResourceId?: string;
  readonly ResourceType?: string;
}

export interface DescribeBatchPredictionsInput {
  readonly FilterVariable?: string;
  readonly EQ?: string;
  readonly GT?: string;
  readonly LT?: string;
  readonly GE?: string;
  readonly LE?: string;
  readonly NE?: string;
  readonly Prefix?: string;
  readonly SortOrder?: string;
  readonly NextToken?: string;
  readonly Limit?: number;
}

export interface DescribeBatchPredictionsOutput {
  readonly Results?: [];
  readonly NextToken?: string;
}

export interface DescribeDataSourcesInput {
  readonly FilterVariable?: string;
  readonly EQ?: string;
  readonly GT?: string;
  readonly LT?: string;
  readonly GE?: string;
  readonly LE?: string;
  readonly NE?: string;
  readonly Prefix?: string;
  readonly SortOrder?: string;
  readonly NextToken?: string;
  readonly Limit?: number;
}

export interface DescribeDataSourcesOutput {
  readonly Results?: [];
  readonly NextToken?: string;
}

export interface DescribeEvaluationsInput {
  readonly FilterVariable?: string;
  readonly EQ?: string;
  readonly GT?: string;
  readonly LT?: string;
  readonly GE?: string;
  readonly LE?: string;
  readonly NE?: string;
  readonly Prefix?: string;
  readonly SortOrder?: string;
  readonly NextToken?: string;
  readonly Limit?: number;
}

export interface DescribeEvaluationsOutput {
  readonly Results?: [];
  readonly NextToken?: string;
}

export interface DescribeMLModelsInput {
  readonly FilterVariable?: string;
  readonly EQ?: string;
  readonly GT?: string;
  readonly LT?: string;
  readonly GE?: string;
  readonly LE?: string;
  readonly NE?: string;
  readonly Prefix?: string;
  readonly SortOrder?: string;
  readonly NextToken?: string;
  readonly Limit?: number;
}

export interface DescribeMLModelsOutput {
  readonly Results?: [];
  readonly NextToken?: string;
}

export interface DescribeTagsInput {
  readonly ResourceId: string;
  readonly ResourceType: string;
}

export interface DescribeTagsOutput {
  readonly ResourceId?: string;
  readonly ResourceType?: string;
  readonly Tags?: [];
}

export interface Evaluation {
  readonly EvaluationId?: string;
  readonly MLModelId?: string;
  readonly EvaluationDataSourceId?: string;
  readonly InputDataLocationS3?: string;
  readonly CreatedByIamUser?: string;
  readonly CreatedAt?: Date;
  readonly LastUpdatedAt?: Date;
  readonly Name?: string;
  readonly Status?: string;
  readonly PerformanceMetrics?: PerformanceMetrics;
  readonly Message?: string;
  readonly ComputeTime?: number;
  readonly FinishedAt?: Date;
  readonly StartedAt?: Date;
}

export interface GetBatchPredictionInput {
  readonly BatchPredictionId: string;
}

export interface GetBatchPredictionOutput {
  readonly BatchPredictionId?: string;
  readonly MLModelId?: string;
  readonly BatchPredictionDataSourceId?: string;
  readonly InputDataLocationS3?: string;
  readonly CreatedByIamUser?: string;
  readonly CreatedAt?: Date;
  readonly LastUpdatedAt?: Date;
  readonly Name?: string;
  readonly Status?: string;
  readonly OutputUri?: string;
  readonly LogUri?: string;
  readonly Message?: string;
  readonly ComputeTime?: number;
  readonly FinishedAt?: Date;
  readonly StartedAt?: Date;
  readonly TotalRecordCount?: number;
  readonly InvalidRecordCount?: number;
}

export interface GetDataSourceInput {
  readonly DataSourceId: string;
  readonly Verbose?: boolean;
}

export interface GetDataSourceOutput {
  readonly DataSourceId?: string;
  readonly DataLocationS3?: string;
  readonly DataRearrangement?: string;
  readonly CreatedByIamUser?: string;
  readonly CreatedAt?: Date;
  readonly LastUpdatedAt?: Date;
  readonly DataSizeInBytes?: number;
  readonly NumberOfFiles?: number;
  readonly Name?: string;
  readonly Status?: string;
  readonly LogUri?: string;
  readonly Message?: string;
  readonly RedshiftMetadata?: RedshiftMetadata;
  readonly RDSMetadata?: RDSMetadata;
  readonly RoleARN?: string;
  readonly ComputeStatistics?: boolean;
  readonly ComputeTime?: number;
  readonly FinishedAt?: Date;
  readonly StartedAt?: Date;
  readonly DataSourceSchema?: string;
}

export interface GetEvaluationInput {
  readonly EvaluationId: string;
}

export interface GetEvaluationOutput {
  readonly EvaluationId?: string;
  readonly MLModelId?: string;
  readonly EvaluationDataSourceId?: string;
  readonly InputDataLocationS3?: string;
  readonly CreatedByIamUser?: string;
  readonly CreatedAt?: Date;
  readonly LastUpdatedAt?: Date;
  readonly Name?: string;
  readonly Status?: string;
  readonly PerformanceMetrics?: PerformanceMetrics;
  readonly LogUri?: string;
  readonly Message?: string;
  readonly ComputeTime?: number;
  readonly FinishedAt?: Date;
  readonly StartedAt?: Date;
}

export interface GetMLModelInput {
  readonly MLModelId: string;
  readonly Verbose?: boolean;
}

export interface GetMLModelOutput {
  readonly MLModelId?: string;
  readonly TrainingDataSourceId?: string;
  readonly CreatedByIamUser?: string;
  readonly CreatedAt?: Date;
  readonly LastUpdatedAt?: Date;
  readonly Name?: string;
  readonly Status?: string;
  readonly SizeInBytes?: number;
  readonly EndpointInfo?: RealtimeEndpointInfo;
  readonly TrainingParameters?: {[key: string]: any};
  readonly InputDataLocationS3?: string;
  readonly MLModelType?: string;
  readonly ScoreThreshold?: unknown;
  readonly ScoreThresholdLastUpdatedAt?: Date;
  readonly LogUri?: string;
  readonly Message?: string;
  readonly ComputeTime?: number;
  readonly FinishedAt?: Date;
  readonly StartedAt?: Date;
  readonly Recipe?: string;
  readonly Schema?: string;
}

export interface IdempotentParameterMismatchException {
  readonly message?: string;
  readonly code?: number;
}

export interface InternalServerException {
  readonly message?: string;
  readonly code?: number;
}

export interface InvalidInputException {
  readonly message?: string;
  readonly code?: number;
}

export interface InvalidTagException {
  readonly message?: string;
}

export interface LimitExceededException {
  readonly message?: string;
  readonly code?: number;
}

export interface MLModel {
  readonly MLModelId?: string;
  readonly TrainingDataSourceId?: string;
  readonly CreatedByIamUser?: string;
  readonly CreatedAt?: Date;
  readonly LastUpdatedAt?: Date;
  readonly Name?: string;
  readonly Status?: string;
  readonly SizeInBytes?: number;
  readonly EndpointInfo?: RealtimeEndpointInfo;
  readonly TrainingParameters?: {[key: string]: any};
  readonly InputDataLocationS3?: string;
  readonly Algorithm?: string;
  readonly MLModelType?: string;
  readonly ScoreThreshold?: unknown;
  readonly ScoreThresholdLastUpdatedAt?: Date;
  readonly Message?: string;
  readonly ComputeTime?: number;
  readonly FinishedAt?: Date;
  readonly StartedAt?: Date;
}

export interface PerformanceMetrics {
  readonly Properties?: {[key: string]: any};
}

export interface PredictInput {
  readonly MLModelId: string;
  readonly Record: {[key: string]: any};
  readonly PredictEndpoint: string;
}

export interface PredictOutput {
  readonly Prediction?: Prediction;
}

export interface Prediction {
  readonly predictedLabel?: string;
  readonly predictedValue?: unknown;
  readonly predictedScores?: {[key: string]: any};
  readonly details?: {[key: string]: any};
}

export interface PredictorNotMountedException {
  readonly message?: string;
}

export interface RDSDataSpec {
  readonly DatabaseInformation: RDSDatabase;
  readonly SelectSqlQuery: string;
  readonly DatabaseCredentials: RDSDatabaseCredentials;
  readonly S3StagingLocation: string;
  readonly DataRearrangement?: string;
  readonly DataSchema?: string;
  readonly DataSchemaUri?: string;
  readonly ResourceRole: string;
  readonly ServiceRole: string;
  readonly SubnetId: string;
  readonly SecurityGroupIds: [];
}

export interface RDSDatabase {
  readonly InstanceIdentifier: string;
  readonly DatabaseName: string;
}

export interface RDSDatabaseCredentials {
  readonly Username: string;
  readonly Password: string;
}

export interface RDSMetadata {
  readonly Database?: RDSDatabase;
  readonly DatabaseUserName?: string;
  readonly SelectSqlQuery?: string;
  readonly ResourceRole?: string;
  readonly ServiceRole?: string;
  readonly DataPipelineId?: string;
}

export interface RealtimeEndpointInfo {
  readonly PeakRequestsPerSecond?: number;
  readonly CreatedAt?: Date;
  readonly EndpointUrl?: string;
  readonly EndpointStatus?: string;
}

export interface RedshiftDataSpec {
  readonly DatabaseInformation: RedshiftDatabase;
  readonly SelectSqlQuery: string;
  readonly DatabaseCredentials: RedshiftDatabaseCredentials;
  readonly S3StagingLocation: string;
  readonly DataRearrangement?: string;
  readonly DataSchema?: string;
  readonly DataSchemaUri?: string;
}

export interface RedshiftDatabase {
  readonly DatabaseName: string;
  readonly ClusterIdentifier: string;
}

export interface RedshiftDatabaseCredentials {
  readonly Username: string;
  readonly Password: string;
}

export interface RedshiftMetadata {
  readonly RedshiftDatabase?: RedshiftDatabase;
  readonly DatabaseUserName?: string;
  readonly SelectSqlQuery?: string;
}

export interface ResourceNotFoundException {
  readonly message?: string;
  readonly code?: number;
}

export interface S3DataSpec {
  readonly DataLocationS3: string;
  readonly DataRearrangement?: string;
  readonly DataSchema?: string;
  readonly DataSchemaLocationS3?: string;
}

export interface Tag {
  readonly Key?: string;
  readonly Value?: string;
}

export interface TagLimitExceededException {
  readonly message?: string;
}

export interface UpdateBatchPredictionInput {
  readonly BatchPredictionId: string;
  readonly BatchPredictionName: string;
}

export interface UpdateBatchPredictionOutput {
  readonly BatchPredictionId?: string;
}

export interface UpdateDataSourceInput {
  readonly DataSourceId: string;
  readonly DataSourceName: string;
}

export interface UpdateDataSourceOutput {
  readonly DataSourceId?: string;
}

export interface UpdateEvaluationInput {
  readonly EvaluationId: string;
  readonly EvaluationName: string;
}

export interface UpdateEvaluationOutput {
  readonly EvaluationId?: string;
}

export interface UpdateMLModelInput {
  readonly MLModelId: string;
  readonly MLModelName?: string;
  readonly ScoreThreshold?: unknown;
}

export interface UpdateMLModelOutput {
  readonly MLModelId?: string;
}


