/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface CreateBatchInferenceJob {
  readonly jobName: string;
  readonly solutionVersionArn: string;
  readonly filterArn?: string;
  readonly numResults?: number;
  readonly jobInput: BatchInferenceJobInput;
  readonly jobOutput: BatchInferenceJobOutput;
  readonly roleArn: string;
  readonly batchInferenceJobConfig?: BatchInferenceJobConfig;
}
export interface CreateBatchSegmentJob {
  readonly jobName: string;
  readonly solutionVersionArn: string;
  readonly filterArn?: string;
  readonly numResults?: number;
  readonly jobInput: BatchSegmentJobInput;
  readonly jobOutput: BatchSegmentJobOutput;
  readonly roleArn: string;
}
export interface CreateCampaign {
  readonly name: string;
  readonly solutionVersionArn: string;
  readonly minProvisionedTPS?: number;
  readonly campaignConfig?: CampaignConfig;
}
export interface CreateDataset {
  readonly name: string;
  readonly schemaArn: string;
  readonly datasetGroupArn: string;
  readonly datasetType: string;
}
export interface CreateDatasetExportJob {
  readonly jobName: string;
  readonly datasetArn: string;
  readonly ingestionMode?: string;
  readonly roleArn: string;
  readonly jobOutput: DatasetExportJobOutput;
}
export interface CreateDatasetGroup {
  readonly name: string;
  readonly roleArn?: string;
  readonly kmsKeyArn?: string;
  readonly domain?: string;
}
export interface CreateDatasetImportJob {
  readonly jobName: string;
  readonly datasetArn: string;
  readonly dataSource: DataSource;
  readonly roleArn: string;
}
export interface CreateEventTracker {
  readonly name: string;
  readonly datasetGroupArn: string;
}
export interface CreateFilter {
  readonly name: string;
  readonly datasetGroupArn: string;
  readonly filterExpression: string;
}
export interface CreateRecommender {
  readonly name: string;
  readonly datasetGroupArn: string;
  readonly recipeArn: string;
  readonly recommenderConfig?: RecommenderConfig;
}
export interface CreateSchema {
  readonly name: string;
  readonly schema: string;
  readonly domain?: string;
}
export interface CreateSolution {
  readonly name: string;
  readonly performHPO?: boolean;
  readonly performAutoML?: boolean;
  readonly recipeArn?: string;
  readonly datasetGroupArn: string;
  readonly eventType?: string;
  readonly solutionConfig?: SolutionConfig;
}
export interface CreateSolutionVersion {
  readonly solutionArn: string;
  readonly trainingMode?: string;
}
export interface DeleteCampaign {
  readonly campaignArn: string;
}
export interface DeleteDataset {
  readonly datasetArn: string;
}
export interface DeleteDatasetGroup {
  readonly datasetGroupArn: string;
}
export interface DeleteEventTracker {
  readonly eventTrackerArn: string;
}
export interface DeleteFilter {
  readonly filterArn: string;
}
export interface DeleteRecommender {
  readonly recommenderArn: string;
}
export interface DeleteSchema {
  readonly schemaArn: string;
}
export interface DeleteSolution {
  readonly solutionArn: string;
}
export interface DescribeAlgorithm {
  readonly algorithmArn: string;
}
export interface DescribeBatchInferenceJob {
  readonly batchInferenceJobArn: string;
}
export interface DescribeBatchSegmentJob {
  readonly batchSegmentJobArn: string;
}
export interface DescribeCampaign {
  readonly campaignArn: string;
}
export interface DescribeDataset {
  readonly datasetArn: string;
}
export interface DescribeDatasetExportJob {
  readonly datasetExportJobArn: string;
}
export interface DescribeDatasetGroup {
  readonly datasetGroupArn: string;
}
export interface DescribeDatasetImportJob {
  readonly datasetImportJobArn: string;
}
export interface DescribeEventTracker {
  readonly eventTrackerArn: string;
}
export interface DescribeFeatureTransformation {
  readonly featureTransformationArn: string;
}
export interface DescribeFilter {
  readonly filterArn: string;
}
export interface DescribeRecipe {
  readonly recipeArn: string;
}
export interface DescribeRecommender {
  readonly recommenderArn: string;
}
export interface DescribeSchema {
  readonly schemaArn: string;
}
export interface DescribeSolution {
  readonly solutionArn: string;
}
export interface DescribeSolutionVersion {
  readonly solutionVersionArn: string;
}
export interface GetSolutionMetrics {
  readonly solutionVersionArn: string;
}
export interface ListBatchInferenceJobs {
  readonly solutionVersionArn?: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}
export interface ListBatchSegmentJobs {
  readonly solutionVersionArn?: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}
export interface ListCampaigns {
  readonly solutionArn?: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}
export interface ListDatasetExportJobs {
  readonly datasetArn?: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}
export interface ListDatasetGroups {
  readonly nextToken?: string;
  readonly maxResults?: number;
}
export interface ListDatasetImportJobs {
  readonly datasetArn?: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}
export interface ListDatasets {
  readonly datasetGroupArn?: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}
export interface ListEventTrackers {
  readonly datasetGroupArn?: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}
export interface ListFilters {
  readonly datasetGroupArn?: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}
export interface ListRecipes {
  readonly recipeProvider?: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
  readonly domain?: string;
}
export interface ListRecommenders {
  readonly datasetGroupArn?: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}
export interface ListSchemas {
  readonly nextToken?: string;
  readonly maxResults?: number;
}
export interface ListSolutionVersions {
  readonly solutionArn?: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}
export interface ListSolutions {
  readonly datasetGroupArn?: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}
export interface StopSolutionVersionCreation {
  readonly solutionVersionArn: string;
}
export interface UpdateCampaign {
  readonly campaignArn: string;
  readonly solutionVersionArn?: string;
  readonly minProvisionedTPS?: number;
  readonly campaignConfig?: CampaignConfig;
}
export interface UpdateRecommender {
  readonly recommenderArn: string;
  readonly recommenderConfig: RecommenderConfig;
}



interface Algorithm {
  readonly name: string;
  readonly algorithmArn: string;
  readonly algorithmImage: AlgorithmImage;
  readonly defaultHyperParameters: {[key: string]: any};
  readonly defaultHyperParameterRanges: DefaultHyperParameterRanges;
  readonly defaultResourceConfig: {[key: string]: any};
  readonly trainingInputMode: string;
  readonly roleArn: string;
  readonly creationDateTime: Date;
  readonly lastUpdatedDateTime: Date;
}

interface AlgorithmImage {
  readonly name: string;
  readonly dockerURI: string;
}

interface AutoMLConfig {
  readonly metricName: string;
  readonly recipeList: [];
}

interface AutoMLResult {
  readonly bestRecipeArn: string;
}

interface BatchInferenceJob {
  readonly jobName: string;
  readonly batchInferenceJobArn: string;
  readonly filterArn: string;
  readonly failureReason: string;
  readonly solutionVersionArn: string;
  readonly numResults: number;
  readonly jobInput: BatchInferenceJobInput;
  readonly jobOutput: BatchInferenceJobOutput;
  readonly batchInferenceJobConfig: BatchInferenceJobConfig;
  readonly roleArn: string;
  readonly status: string;
  readonly creationDateTime: Date;
  readonly lastUpdatedDateTime: Date;
}

interface BatchInferenceJobConfig {
  readonly itemExplorationConfig: {[key: string]: any};
}

interface BatchInferenceJobInput {
  readonly s3DataSource: S3DataConfig;
}

interface BatchInferenceJobOutput {
  readonly s3DataDestination: S3DataConfig;
}

interface BatchInferenceJobSummary {
  readonly batchInferenceJobArn: string;
  readonly jobName: string;
  readonly status: string;
  readonly creationDateTime: Date;
  readonly lastUpdatedDateTime: Date;
  readonly failureReason: string;
  readonly solutionVersionArn: string;
}

interface BatchSegmentJob {
  readonly jobName: string;
  readonly batchSegmentJobArn: string;
  readonly filterArn: string;
  readonly failureReason: string;
  readonly solutionVersionArn: string;
  readonly numResults: number;
  readonly jobInput: BatchSegmentJobInput;
  readonly jobOutput: BatchSegmentJobOutput;
  readonly roleArn: string;
  readonly status: string;
  readonly creationDateTime: Date;
  readonly lastUpdatedDateTime: Date;
}

interface BatchSegmentJobInput {
  readonly s3DataSource: S3DataConfig;
}

interface BatchSegmentJobOutput {
  readonly s3DataDestination: S3DataConfig;
}

interface BatchSegmentJobSummary {
  readonly batchSegmentJobArn: string;
  readonly jobName: string;
  readonly status: string;
  readonly creationDateTime: Date;
  readonly lastUpdatedDateTime: Date;
  readonly failureReason: string;
  readonly solutionVersionArn: string;
}

interface Campaign {
  readonly name: string;
  readonly campaignArn: string;
  readonly solutionVersionArn: string;
  readonly minProvisionedTPS: number;
  readonly campaignConfig: CampaignConfig;
  readonly status: string;
  readonly failureReason: string;
  readonly creationDateTime: Date;
  readonly lastUpdatedDateTime: Date;
  readonly latestCampaignUpdate: CampaignUpdateSummary;
}

interface CampaignConfig {
  readonly itemExplorationConfig: {[key: string]: any};
}

interface CampaignSummary {
  readonly name: string;
  readonly campaignArn: string;
  readonly status: string;
  readonly creationDateTime: Date;
  readonly lastUpdatedDateTime: Date;
  readonly failureReason: string;
}

interface CampaignUpdateSummary {
  readonly solutionVersionArn: string;
  readonly minProvisionedTPS: number;
  readonly campaignConfig: CampaignConfig;
  readonly status: string;
  readonly failureReason: string;
  readonly creationDateTime: Date;
  readonly lastUpdatedDateTime: Date;
}

interface CategoricalHyperParameterRange {
  readonly name: string;
  readonly values: [];
}

interface ContinuousHyperParameterRange {
  readonly name: string;
  readonly minValue: unknown;
  readonly maxValue: unknown;
}

interface CreateBatchInferenceJobRequest {
  readonly jobName: string;
  readonly solutionVersionArn: string;
  readonly filterArn: string;
  readonly numResults: number;
  readonly jobInput: BatchInferenceJobInput;
  readonly jobOutput: BatchInferenceJobOutput;
  readonly roleArn: string;
  readonly batchInferenceJobConfig: BatchInferenceJobConfig;
}

interface CreateBatchInferenceJobResponse {
  readonly batchInferenceJobArn: string;
}

interface CreateBatchSegmentJobRequest {
  readonly jobName: string;
  readonly solutionVersionArn: string;
  readonly filterArn: string;
  readonly numResults: number;
  readonly jobInput: BatchSegmentJobInput;
  readonly jobOutput: BatchSegmentJobOutput;
  readonly roleArn: string;
}

interface CreateBatchSegmentJobResponse {
  readonly batchSegmentJobArn: string;
}

interface CreateCampaignRequest {
  readonly name: string;
  readonly solutionVersionArn: string;
  readonly minProvisionedTPS: number;
  readonly campaignConfig: CampaignConfig;
}

interface CreateCampaignResponse {
  readonly campaignArn: string;
}

interface CreateDatasetExportJobRequest {
  readonly jobName: string;
  readonly datasetArn: string;
  readonly ingestionMode: string;
  readonly roleArn: string;
  readonly jobOutput: DatasetExportJobOutput;
}

interface CreateDatasetExportJobResponse {
  readonly datasetExportJobArn: string;
}

interface CreateDatasetGroupRequest {
  readonly name: string;
  readonly roleArn: string;
  readonly kmsKeyArn: string;
  readonly domain: string;
}

interface CreateDatasetGroupResponse {
  readonly datasetGroupArn: string;
  readonly domain: string;
}

interface CreateDatasetImportJobRequest {
  readonly jobName: string;
  readonly datasetArn: string;
  readonly dataSource: DataSource;
  readonly roleArn: string;
}

interface CreateDatasetImportJobResponse {
  readonly datasetImportJobArn: string;
}

interface CreateDatasetRequest {
  readonly name: string;
  readonly schemaArn: string;
  readonly datasetGroupArn: string;
  readonly datasetType: string;
}

interface CreateDatasetResponse {
  readonly datasetArn: string;
}

interface CreateEventTrackerRequest {
  readonly name: string;
  readonly datasetGroupArn: string;
}

interface CreateEventTrackerResponse {
  readonly eventTrackerArn: string;
  readonly trackingId: string;
}

interface CreateFilterRequest {
  readonly name: string;
  readonly datasetGroupArn: string;
  readonly filterExpression: string;
}

interface CreateFilterResponse {
  readonly filterArn: string;
}

interface CreateRecommenderRequest {
  readonly name: string;
  readonly datasetGroupArn: string;
  readonly recipeArn: string;
  readonly recommenderConfig: RecommenderConfig;
}

interface CreateRecommenderResponse {
  readonly recommenderArn: string;
}

interface CreateSchemaRequest {
  readonly name: string;
  readonly schema: string;
  readonly domain: string;
}

interface CreateSchemaResponse {
  readonly schemaArn: string;
}

interface CreateSolutionRequest {
  readonly name: string;
  readonly performHPO: boolean;
  readonly performAutoML: boolean;
  readonly recipeArn: string;
  readonly datasetGroupArn: string;
  readonly eventType: string;
  readonly solutionConfig: SolutionConfig;
}

interface CreateSolutionResponse {
  readonly solutionArn: string;
}

interface CreateSolutionVersionRequest {
  readonly solutionArn: string;
  readonly trainingMode: string;
}

interface CreateSolutionVersionResponse {
  readonly solutionVersionArn: string;
}

interface DataSource {
  readonly dataLocation: string;
}

interface Dataset {
  readonly name: string;
  readonly datasetArn: string;
  readonly datasetGroupArn: string;
  readonly datasetType: string;
  readonly schemaArn: string;
  readonly status: string;
  readonly creationDateTime: Date;
  readonly lastUpdatedDateTime: Date;
}

interface DatasetExportJob {
  readonly jobName: string;
  readonly datasetExportJobArn: string;
  readonly datasetArn: string;
  readonly ingestionMode: string;
  readonly roleArn: string;
  readonly status: string;
  readonly jobOutput: DatasetExportJobOutput;
  readonly creationDateTime: Date;
  readonly lastUpdatedDateTime: Date;
  readonly failureReason: string;
}

interface DatasetExportJobOutput {
  readonly s3DataDestination: S3DataConfig;
}

interface DatasetExportJobSummary {
  readonly datasetExportJobArn: string;
  readonly jobName: string;
  readonly status: string;
  readonly creationDateTime: Date;
  readonly lastUpdatedDateTime: Date;
  readonly failureReason: string;
}

interface DatasetGroup {
  readonly name: string;
  readonly datasetGroupArn: string;
  readonly status: string;
  readonly roleArn: string;
  readonly kmsKeyArn: string;
  readonly creationDateTime: Date;
  readonly lastUpdatedDateTime: Date;
  readonly failureReason: string;
  readonly domain: string;
}

interface DatasetGroupSummary {
  readonly name: string;
  readonly datasetGroupArn: string;
  readonly status: string;
  readonly creationDateTime: Date;
  readonly lastUpdatedDateTime: Date;
  readonly failureReason: string;
  readonly domain: string;
}

interface DatasetImportJob {
  readonly jobName: string;
  readonly datasetImportJobArn: string;
  readonly datasetArn: string;
  readonly dataSource: DataSource;
  readonly roleArn: string;
  readonly status: string;
  readonly creationDateTime: Date;
  readonly lastUpdatedDateTime: Date;
  readonly failureReason: string;
}

interface DatasetImportJobSummary {
  readonly datasetImportJobArn: string;
  readonly jobName: string;
  readonly status: string;
  readonly creationDateTime: Date;
  readonly lastUpdatedDateTime: Date;
  readonly failureReason: string;
}

interface DatasetSchema {
  readonly name: string;
  readonly schemaArn: string;
  readonly schema: string;
  readonly creationDateTime: Date;
  readonly lastUpdatedDateTime: Date;
  readonly domain: string;
}

interface DatasetSchemaSummary {
  readonly name: string;
  readonly schemaArn: string;
  readonly creationDateTime: Date;
  readonly lastUpdatedDateTime: Date;
  readonly domain: string;
}

interface DatasetSummary {
  readonly name: string;
  readonly datasetArn: string;
  readonly datasetType: string;
  readonly status: string;
  readonly creationDateTime: Date;
  readonly lastUpdatedDateTime: Date;
}

interface DefaultCategoricalHyperParameterRange {
  readonly name: string;
  readonly values: [];
  readonly isTunable: boolean;
}

interface DefaultContinuousHyperParameterRange {
  readonly name: string;
  readonly minValue: unknown;
  readonly maxValue: unknown;
  readonly isTunable: boolean;
}

interface DefaultHyperParameterRanges {
  readonly integerHyperParameterRanges: [];
  readonly continuousHyperParameterRanges: [];
  readonly categoricalHyperParameterRanges: [];
}

interface DefaultIntegerHyperParameterRange {
  readonly name: string;
  readonly minValue: number;
  readonly maxValue: number;
  readonly isTunable: boolean;
}

interface DeleteCampaignRequest {
  readonly campaignArn: string;
}

interface DeleteDatasetGroupRequest {
  readonly datasetGroupArn: string;
}

interface DeleteDatasetRequest {
  readonly datasetArn: string;
}

interface DeleteEventTrackerRequest {
  readonly eventTrackerArn: string;
}

interface DeleteFilterRequest {
  readonly filterArn: string;
}

interface DeleteRecommenderRequest {
  readonly recommenderArn: string;
}

interface DeleteSchemaRequest {
  readonly schemaArn: string;
}

interface DeleteSolutionRequest {
  readonly solutionArn: string;
}

interface DescribeAlgorithmRequest {
  readonly algorithmArn: string;
}

interface DescribeAlgorithmResponse {
  readonly algorithm: Algorithm;
}

interface DescribeBatchInferenceJobRequest {
  readonly batchInferenceJobArn: string;
}

interface DescribeBatchInferenceJobResponse {
  readonly batchInferenceJob: BatchInferenceJob;
}

interface DescribeBatchSegmentJobRequest {
  readonly batchSegmentJobArn: string;
}

interface DescribeBatchSegmentJobResponse {
  readonly batchSegmentJob: BatchSegmentJob;
}

interface DescribeCampaignRequest {
  readonly campaignArn: string;
}

interface DescribeCampaignResponse {
  readonly campaign: Campaign;
}

interface DescribeDatasetExportJobRequest {
  readonly datasetExportJobArn: string;
}

interface DescribeDatasetExportJobResponse {
  readonly datasetExportJob: DatasetExportJob;
}

interface DescribeDatasetGroupRequest {
  readonly datasetGroupArn: string;
}

interface DescribeDatasetGroupResponse {
  readonly datasetGroup: DatasetGroup;
}

interface DescribeDatasetImportJobRequest {
  readonly datasetImportJobArn: string;
}

interface DescribeDatasetImportJobResponse {
  readonly datasetImportJob: DatasetImportJob;
}

interface DescribeDatasetRequest {
  readonly datasetArn: string;
}

interface DescribeDatasetResponse {
  readonly dataset: Dataset;
}

interface DescribeEventTrackerRequest {
  readonly eventTrackerArn: string;
}

interface DescribeEventTrackerResponse {
  readonly eventTracker: EventTracker;
}

interface DescribeFeatureTransformationRequest {
  readonly featureTransformationArn: string;
}

interface DescribeFeatureTransformationResponse {
  readonly featureTransformation: FeatureTransformation;
}

interface DescribeFilterRequest {
  readonly filterArn: string;
}

interface DescribeFilterResponse {
  readonly filter: Filter;
}

interface DescribeRecipeRequest {
  readonly recipeArn: string;
}

interface DescribeRecipeResponse {
  readonly recipe: Recipe;
}

interface DescribeRecommenderRequest {
  readonly recommenderArn: string;
}

interface DescribeRecommenderResponse {
  readonly recommender: Recommender;
}

interface DescribeSchemaRequest {
  readonly schemaArn: string;
}

interface DescribeSchemaResponse {
  readonly schema: DatasetSchema;
}

interface DescribeSolutionRequest {
  readonly solutionArn: string;
}

interface DescribeSolutionResponse {
  readonly solution: Solution;
}

interface DescribeSolutionVersionRequest {
  readonly solutionVersionArn: string;
}

interface DescribeSolutionVersionResponse {
  readonly solutionVersion: SolutionVersion;
}

interface EventTracker {
  readonly name: string;
  readonly eventTrackerArn: string;
  readonly accountId: string;
  readonly trackingId: string;
  readonly datasetGroupArn: string;
  readonly status: string;
  readonly creationDateTime: Date;
  readonly lastUpdatedDateTime: Date;
}

interface EventTrackerSummary {
  readonly name: string;
  readonly eventTrackerArn: string;
  readonly status: string;
  readonly creationDateTime: Date;
  readonly lastUpdatedDateTime: Date;
}

interface FeatureTransformation {
  readonly name: string;
  readonly featureTransformationArn: string;
  readonly defaultParameters: {[key: string]: any};
  readonly creationDateTime: Date;
  readonly lastUpdatedDateTime: Date;
  readonly status: string;
}

interface Filter {
  readonly name: string;
  readonly filterArn: string;
  readonly creationDateTime: Date;
  readonly lastUpdatedDateTime: Date;
  readonly datasetGroupArn: string;
  readonly failureReason: string;
  readonly filterExpression: string;
  readonly status: string;
}

interface FilterSummary {
  readonly name: string;
  readonly filterArn: string;
  readonly creationDateTime: Date;
  readonly lastUpdatedDateTime: Date;
  readonly datasetGroupArn: string;
  readonly failureReason: string;
  readonly status: string;
}

interface GetSolutionMetricsRequest {
  readonly solutionVersionArn: string;
}

interface GetSolutionMetricsResponse {
  readonly solutionVersionArn: string;
  readonly metrics: {[key: string]: any};
}

interface HPOConfig {
  readonly hpoObjective: HPOObjective;
  readonly hpoResourceConfig: HPOResourceConfig;
  readonly algorithmHyperParameterRanges: HyperParameterRanges;
}

interface HPOObjective {
  readonly type: string;
  readonly metricName: string;
  readonly metricRegex: string;
}

interface HPOResourceConfig {
  readonly maxNumberOfTrainingJobs: string;
  readonly maxParallelTrainingJobs: string;
}

interface HyperParameterRanges {
  readonly integerHyperParameterRanges: [];
  readonly continuousHyperParameterRanges: [];
  readonly categoricalHyperParameterRanges: [];
}

interface IntegerHyperParameterRange {
  readonly name: string;
  readonly minValue: number;
  readonly maxValue: number;
}

interface InvalidInputException {
  readonly message: string;
}

interface InvalidNextTokenException {
  readonly message: string;
}

interface LimitExceededException {
  readonly message: string;
}

interface ListBatchInferenceJobsRequest {
  readonly solutionVersionArn: string;
  readonly nextToken: string;
  readonly maxResults: number;
}

interface ListBatchInferenceJobsResponse {
  readonly batchInferenceJobs: [];
  readonly nextToken: string;
}

interface ListBatchSegmentJobsRequest {
  readonly solutionVersionArn: string;
  readonly nextToken: string;
  readonly maxResults: number;
}

interface ListBatchSegmentJobsResponse {
  readonly batchSegmentJobs: [];
  readonly nextToken: string;
}

interface ListCampaignsRequest {
  readonly solutionArn: string;
  readonly nextToken: string;
  readonly maxResults: number;
}

interface ListCampaignsResponse {
  readonly campaigns: [];
  readonly nextToken: string;
}

interface ListDatasetExportJobsRequest {
  readonly datasetArn: string;
  readonly nextToken: string;
  readonly maxResults: number;
}

interface ListDatasetExportJobsResponse {
  readonly datasetExportJobs: [];
  readonly nextToken: string;
}

interface ListDatasetGroupsRequest {
  readonly nextToken: string;
  readonly maxResults: number;
}

interface ListDatasetGroupsResponse {
  readonly datasetGroups: [];
  readonly nextToken: string;
}

interface ListDatasetImportJobsRequest {
  readonly datasetArn: string;
  readonly nextToken: string;
  readonly maxResults: number;
}

interface ListDatasetImportJobsResponse {
  readonly datasetImportJobs: [];
  readonly nextToken: string;
}

interface ListDatasetsRequest {
  readonly datasetGroupArn: string;
  readonly nextToken: string;
  readonly maxResults: number;
}

interface ListDatasetsResponse {
  readonly datasets: [];
  readonly nextToken: string;
}

interface ListEventTrackersRequest {
  readonly datasetGroupArn: string;
  readonly nextToken: string;
  readonly maxResults: number;
}

interface ListEventTrackersResponse {
  readonly eventTrackers: [];
  readonly nextToken: string;
}

interface ListFiltersRequest {
  readonly datasetGroupArn: string;
  readonly nextToken: string;
  readonly maxResults: number;
}

interface ListFiltersResponse {
  readonly Filters: [];
  readonly nextToken: string;
}

interface ListRecipesRequest {
  readonly recipeProvider: string;
  readonly nextToken: string;
  readonly maxResults: number;
  readonly domain: string;
}

interface ListRecipesResponse {
  readonly recipes: [];
  readonly nextToken: string;
}

interface ListRecommendersRequest {
  readonly datasetGroupArn: string;
  readonly nextToken: string;
  readonly maxResults: number;
}

interface ListRecommendersResponse {
  readonly recommenders: [];
  readonly nextToken: string;
}

interface ListSchemasRequest {
  readonly nextToken: string;
  readonly maxResults: number;
}

interface ListSchemasResponse {
  readonly schemas: [];
  readonly nextToken: string;
}

interface ListSolutionVersionsRequest {
  readonly solutionArn: string;
  readonly nextToken: string;
  readonly maxResults: number;
}

interface ListSolutionVersionsResponse {
  readonly solutionVersions: [];
  readonly nextToken: string;
}

interface ListSolutionsRequest {
  readonly datasetGroupArn: string;
  readonly nextToken: string;
  readonly maxResults: number;
}

interface ListSolutionsResponse {
  readonly solutions: [];
  readonly nextToken: string;
}

interface OptimizationObjective {
  readonly itemAttribute: string;
  readonly objectiveSensitivity: string;
}

interface Recipe {
  readonly name: string;
  readonly recipeArn: string;
  readonly algorithmArn: string;
  readonly featureTransformationArn: string;
  readonly status: string;
  readonly description: string;
  readonly creationDateTime: Date;
  readonly recipeType: string;
  readonly lastUpdatedDateTime: Date;
}

interface RecipeSummary {
  readonly name: string;
  readonly recipeArn: string;
  readonly status: string;
  readonly creationDateTime: Date;
  readonly lastUpdatedDateTime: Date;
  readonly domain: string;
}

interface Recommender {
  readonly recommenderArn: string;
  readonly datasetGroupArn: string;
  readonly name: string;
  readonly recipeArn: string;
  readonly recommenderConfig: RecommenderConfig;
  readonly creationDateTime: Date;
  readonly lastUpdatedDateTime: Date;
  readonly status: string;
  readonly failureReason: string;
  readonly latestRecommenderUpdate: RecommenderUpdateSummary;
}

interface RecommenderConfig {
  readonly itemExplorationConfig: {[key: string]: any};
}

interface RecommenderSummary {
  readonly name: string;
  readonly recommenderArn: string;
  readonly datasetGroupArn: string;
  readonly recipeArn: string;
  readonly recommenderConfig: RecommenderConfig;
  readonly status: string;
  readonly creationDateTime: Date;
  readonly lastUpdatedDateTime: Date;
}

interface RecommenderUpdateSummary {
  readonly recommenderConfig: RecommenderConfig;
  readonly creationDateTime: Date;
  readonly lastUpdatedDateTime: Date;
  readonly status: string;
  readonly failureReason: string;
}

interface ResourceAlreadyExistsException {
  readonly message: string;
}

interface ResourceInUseException {
  readonly message: string;
}

interface ResourceNotFoundException {
  readonly message: string;
}

interface S3DataConfig {
  readonly path: string;
  readonly kmsKeyArn: string;
}

interface Solution {
  readonly name: string;
  readonly solutionArn: string;
  readonly performHPO: boolean;
  readonly performAutoML: boolean;
  readonly recipeArn: string;
  readonly datasetGroupArn: string;
  readonly eventType: string;
  readonly solutionConfig: SolutionConfig;
  readonly autoMLResult: AutoMLResult;
  readonly status: string;
  readonly creationDateTime: Date;
  readonly lastUpdatedDateTime: Date;
  readonly latestSolutionVersion: SolutionVersionSummary;
}

interface SolutionConfig {
  readonly eventValueThreshold: string;
  readonly hpoConfig: HPOConfig;
  readonly algorithmHyperParameters: {[key: string]: any};
  readonly featureTransformationParameters: {[key: string]: any};
  readonly autoMLConfig: AutoMLConfig;
  readonly optimizationObjective: OptimizationObjective;
}

interface SolutionSummary {
  readonly name: string;
  readonly solutionArn: string;
  readonly status: string;
  readonly creationDateTime: Date;
  readonly lastUpdatedDateTime: Date;
}

interface SolutionVersion {
  readonly solutionVersionArn: string;
  readonly solutionArn: string;
  readonly performHPO: boolean;
  readonly performAutoML: boolean;
  readonly recipeArn: string;
  readonly eventType: string;
  readonly datasetGroupArn: string;
  readonly solutionConfig: SolutionConfig;
  readonly trainingHours: unknown;
  readonly trainingMode: string;
  readonly tunedHPOParams: TunedHPOParams;
  readonly status: string;
  readonly failureReason: string;
  readonly creationDateTime: Date;
  readonly lastUpdatedDateTime: Date;
}

interface SolutionVersionSummary {
  readonly solutionVersionArn: string;
  readonly status: string;
  readonly creationDateTime: Date;
  readonly lastUpdatedDateTime: Date;
  readonly failureReason: string;
}

interface StopSolutionVersionCreationRequest {
  readonly solutionVersionArn: string;
}

interface TunedHPOParams {
  readonly algorithmHyperParameters: {[key: string]: any};
}

interface UpdateCampaignRequest {
  readonly campaignArn: string;
  readonly solutionVersionArn: string;
  readonly minProvisionedTPS: number;
  readonly campaignConfig: CampaignConfig;
}

interface UpdateCampaignResponse {
  readonly campaignArn: string;
}

interface UpdateRecommenderRequest {
  readonly recommenderArn: string;
  readonly recommenderConfig: RecommenderConfig;
}

interface UpdateRecommenderResponse {
  readonly recommenderArn: string;
}

