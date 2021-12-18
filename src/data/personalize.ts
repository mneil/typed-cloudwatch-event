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

export interface Algorithm {
  readonly name?: string;
  readonly algorithmArn?: string;
  readonly algorithmImage?: AlgorithmImage;
  readonly defaultHyperParameters?: {[key: string]: any};
  readonly defaultHyperParameterRanges?: DefaultHyperParameterRanges;
  readonly defaultResourceConfig?: {[key: string]: any};
  readonly trainingInputMode?: string;
  readonly roleArn?: string;
  readonly creationDateTime?: Date;
  readonly lastUpdatedDateTime?: Date;
}

export interface AlgorithmImage {
  readonly name?: string;
  readonly dockerURI: string;
}

export interface AutoMLConfig {
  readonly metricName?: string;
  readonly recipeList?: [];
}

export interface AutoMLResult {
  readonly bestRecipeArn?: string;
}

export interface BatchInferenceJob {
  readonly jobName?: string;
  readonly batchInferenceJobArn?: string;
  readonly filterArn?: string;
  readonly failureReason?: string;
  readonly solutionVersionArn?: string;
  readonly numResults?: number;
  readonly jobInput?: BatchInferenceJobInput;
  readonly jobOutput?: BatchInferenceJobOutput;
  readonly batchInferenceJobConfig?: BatchInferenceJobConfig;
  readonly roleArn?: string;
  readonly status?: string;
  readonly creationDateTime?: Date;
  readonly lastUpdatedDateTime?: Date;
}

export interface BatchInferenceJobConfig {
  readonly itemExplorationConfig?: {[key: string]: any};
}

export interface BatchInferenceJobInput {
  readonly s3DataSource: S3DataConfig;
}

export interface BatchInferenceJobOutput {
  readonly s3DataDestination: S3DataConfig;
}

export interface BatchInferenceJobSummary {
  readonly batchInferenceJobArn?: string;
  readonly jobName?: string;
  readonly status?: string;
  readonly creationDateTime?: Date;
  readonly lastUpdatedDateTime?: Date;
  readonly failureReason?: string;
  readonly solutionVersionArn?: string;
}

export interface BatchSegmentJob {
  readonly jobName?: string;
  readonly batchSegmentJobArn?: string;
  readonly filterArn?: string;
  readonly failureReason?: string;
  readonly solutionVersionArn?: string;
  readonly numResults?: number;
  readonly jobInput?: BatchSegmentJobInput;
  readonly jobOutput?: BatchSegmentJobOutput;
  readonly roleArn?: string;
  readonly status?: string;
  readonly creationDateTime?: Date;
  readonly lastUpdatedDateTime?: Date;
}

export interface BatchSegmentJobInput {
  readonly s3DataSource: S3DataConfig;
}

export interface BatchSegmentJobOutput {
  readonly s3DataDestination: S3DataConfig;
}

export interface BatchSegmentJobSummary {
  readonly batchSegmentJobArn?: string;
  readonly jobName?: string;
  readonly status?: string;
  readonly creationDateTime?: Date;
  readonly lastUpdatedDateTime?: Date;
  readonly failureReason?: string;
  readonly solutionVersionArn?: string;
}

export interface Campaign {
  readonly name?: string;
  readonly campaignArn?: string;
  readonly solutionVersionArn?: string;
  readonly minProvisionedTPS?: number;
  readonly campaignConfig?: CampaignConfig;
  readonly status?: string;
  readonly failureReason?: string;
  readonly creationDateTime?: Date;
  readonly lastUpdatedDateTime?: Date;
  readonly latestCampaignUpdate?: CampaignUpdateSummary;
}

export interface CampaignConfig {
  readonly itemExplorationConfig?: {[key: string]: any};
}

export interface CampaignSummary {
  readonly name?: string;
  readonly campaignArn?: string;
  readonly status?: string;
  readonly creationDateTime?: Date;
  readonly lastUpdatedDateTime?: Date;
  readonly failureReason?: string;
}

export interface CampaignUpdateSummary {
  readonly solutionVersionArn?: string;
  readonly minProvisionedTPS?: number;
  readonly campaignConfig?: CampaignConfig;
  readonly status?: string;
  readonly failureReason?: string;
  readonly creationDateTime?: Date;
  readonly lastUpdatedDateTime?: Date;
}

export interface CategoricalHyperParameterRange {
  readonly name?: string;
  readonly values?: [];
}

export interface ContinuousHyperParameterRange {
  readonly name?: string;
  readonly minValue?: unknown;
  readonly maxValue?: unknown;
}

export interface CreateBatchInferenceJobRequest {
  readonly jobName: string;
  readonly solutionVersionArn: string;
  readonly filterArn?: string;
  readonly numResults?: number;
  readonly jobInput: BatchInferenceJobInput;
  readonly jobOutput: BatchInferenceJobOutput;
  readonly roleArn: string;
  readonly batchInferenceJobConfig?: BatchInferenceJobConfig;
}

export interface CreateBatchInferenceJobResponse {
  readonly batchInferenceJobArn?: string;
}

export interface CreateBatchSegmentJobRequest {
  readonly jobName: string;
  readonly solutionVersionArn: string;
  readonly filterArn?: string;
  readonly numResults?: number;
  readonly jobInput: BatchSegmentJobInput;
  readonly jobOutput: BatchSegmentJobOutput;
  readonly roleArn: string;
}

export interface CreateBatchSegmentJobResponse {
  readonly batchSegmentJobArn?: string;
}

export interface CreateCampaignRequest {
  readonly name: string;
  readonly solutionVersionArn: string;
  readonly minProvisionedTPS?: number;
  readonly campaignConfig?: CampaignConfig;
}

export interface CreateCampaignResponse {
  readonly campaignArn?: string;
}

export interface CreateDatasetExportJobRequest {
  readonly jobName: string;
  readonly datasetArn: string;
  readonly ingestionMode?: string;
  readonly roleArn: string;
  readonly jobOutput: DatasetExportJobOutput;
}

export interface CreateDatasetExportJobResponse {
  readonly datasetExportJobArn?: string;
}

export interface CreateDatasetGroupRequest {
  readonly name: string;
  readonly roleArn?: string;
  readonly kmsKeyArn?: string;
  readonly domain?: string;
}

export interface CreateDatasetGroupResponse {
  readonly datasetGroupArn?: string;
  readonly domain?: string;
}

export interface CreateDatasetImportJobRequest {
  readonly jobName: string;
  readonly datasetArn: string;
  readonly dataSource: DataSource;
  readonly roleArn: string;
}

export interface CreateDatasetImportJobResponse {
  readonly datasetImportJobArn?: string;
}

export interface CreateDatasetRequest {
  readonly name: string;
  readonly schemaArn: string;
  readonly datasetGroupArn: string;
  readonly datasetType: string;
}

export interface CreateDatasetResponse {
  readonly datasetArn?: string;
}

export interface CreateEventTrackerRequest {
  readonly name: string;
  readonly datasetGroupArn: string;
}

export interface CreateEventTrackerResponse {
  readonly eventTrackerArn?: string;
  readonly trackingId?: string;
}

export interface CreateFilterRequest {
  readonly name: string;
  readonly datasetGroupArn: string;
  readonly filterExpression: string;
}

export interface CreateFilterResponse {
  readonly filterArn?: string;
}

export interface CreateRecommenderRequest {
  readonly name: string;
  readonly datasetGroupArn: string;
  readonly recipeArn: string;
  readonly recommenderConfig?: RecommenderConfig;
}

export interface CreateRecommenderResponse {
  readonly recommenderArn?: string;
}

export interface CreateSchemaRequest {
  readonly name: string;
  readonly schema: string;
  readonly domain?: string;
}

export interface CreateSchemaResponse {
  readonly schemaArn?: string;
}

export interface CreateSolutionRequest {
  readonly name: string;
  readonly performHPO?: boolean;
  readonly performAutoML?: boolean;
  readonly recipeArn?: string;
  readonly datasetGroupArn: string;
  readonly eventType?: string;
  readonly solutionConfig?: SolutionConfig;
}

export interface CreateSolutionResponse {
  readonly solutionArn?: string;
}

export interface CreateSolutionVersionRequest {
  readonly solutionArn: string;
  readonly trainingMode?: string;
}

export interface CreateSolutionVersionResponse {
  readonly solutionVersionArn?: string;
}

export interface DataSource {
  readonly dataLocation?: string;
}

export interface Dataset {
  readonly name?: string;
  readonly datasetArn?: string;
  readonly datasetGroupArn?: string;
  readonly datasetType?: string;
  readonly schemaArn?: string;
  readonly status?: string;
  readonly creationDateTime?: Date;
  readonly lastUpdatedDateTime?: Date;
}

export interface DatasetExportJob {
  readonly jobName?: string;
  readonly datasetExportJobArn?: string;
  readonly datasetArn?: string;
  readonly ingestionMode?: string;
  readonly roleArn?: string;
  readonly status?: string;
  readonly jobOutput?: DatasetExportJobOutput;
  readonly creationDateTime?: Date;
  readonly lastUpdatedDateTime?: Date;
  readonly failureReason?: string;
}

export interface DatasetExportJobOutput {
  readonly s3DataDestination: S3DataConfig;
}

export interface DatasetExportJobSummary {
  readonly datasetExportJobArn?: string;
  readonly jobName?: string;
  readonly status?: string;
  readonly creationDateTime?: Date;
  readonly lastUpdatedDateTime?: Date;
  readonly failureReason?: string;
}

export interface DatasetGroup {
  readonly name?: string;
  readonly datasetGroupArn?: string;
  readonly status?: string;
  readonly roleArn?: string;
  readonly kmsKeyArn?: string;
  readonly creationDateTime?: Date;
  readonly lastUpdatedDateTime?: Date;
  readonly failureReason?: string;
  readonly domain?: string;
}

export interface DatasetGroupSummary {
  readonly name?: string;
  readonly datasetGroupArn?: string;
  readonly status?: string;
  readonly creationDateTime?: Date;
  readonly lastUpdatedDateTime?: Date;
  readonly failureReason?: string;
  readonly domain?: string;
}

export interface DatasetImportJob {
  readonly jobName?: string;
  readonly datasetImportJobArn?: string;
  readonly datasetArn?: string;
  readonly dataSource?: DataSource;
  readonly roleArn?: string;
  readonly status?: string;
  readonly creationDateTime?: Date;
  readonly lastUpdatedDateTime?: Date;
  readonly failureReason?: string;
}

export interface DatasetImportJobSummary {
  readonly datasetImportJobArn?: string;
  readonly jobName?: string;
  readonly status?: string;
  readonly creationDateTime?: Date;
  readonly lastUpdatedDateTime?: Date;
  readonly failureReason?: string;
}

export interface DatasetSchema {
  readonly name?: string;
  readonly schemaArn?: string;
  readonly schema?: string;
  readonly creationDateTime?: Date;
  readonly lastUpdatedDateTime?: Date;
  readonly domain?: string;
}

export interface DatasetSchemaSummary {
  readonly name?: string;
  readonly schemaArn?: string;
  readonly creationDateTime?: Date;
  readonly lastUpdatedDateTime?: Date;
  readonly domain?: string;
}

export interface DatasetSummary {
  readonly name?: string;
  readonly datasetArn?: string;
  readonly datasetType?: string;
  readonly status?: string;
  readonly creationDateTime?: Date;
  readonly lastUpdatedDateTime?: Date;
}

export interface DefaultCategoricalHyperParameterRange {
  readonly name?: string;
  readonly values?: [];
  readonly isTunable?: boolean;
}

export interface DefaultContinuousHyperParameterRange {
  readonly name?: string;
  readonly minValue?: unknown;
  readonly maxValue?: unknown;
  readonly isTunable?: boolean;
}

export interface DefaultHyperParameterRanges {
  readonly integerHyperParameterRanges?: [];
  readonly continuousHyperParameterRanges?: [];
  readonly categoricalHyperParameterRanges?: [];
}

export interface DefaultIntegerHyperParameterRange {
  readonly name?: string;
  readonly minValue?: number;
  readonly maxValue?: number;
  readonly isTunable?: boolean;
}

export interface DeleteCampaignRequest {
  readonly campaignArn: string;
}

export interface DeleteDatasetGroupRequest {
  readonly datasetGroupArn: string;
}

export interface DeleteDatasetRequest {
  readonly datasetArn: string;
}

export interface DeleteEventTrackerRequest {
  readonly eventTrackerArn: string;
}

export interface DeleteFilterRequest {
  readonly filterArn: string;
}

export interface DeleteRecommenderRequest {
  readonly recommenderArn: string;
}

export interface DeleteSchemaRequest {
  readonly schemaArn: string;
}

export interface DeleteSolutionRequest {
  readonly solutionArn: string;
}

export interface DescribeAlgorithmRequest {
  readonly algorithmArn: string;
}

export interface DescribeAlgorithmResponse {
  readonly algorithm?: Algorithm;
}

export interface DescribeBatchInferenceJobRequest {
  readonly batchInferenceJobArn: string;
}

export interface DescribeBatchInferenceJobResponse {
  readonly batchInferenceJob?: BatchInferenceJob;
}

export interface DescribeBatchSegmentJobRequest {
  readonly batchSegmentJobArn: string;
}

export interface DescribeBatchSegmentJobResponse {
  readonly batchSegmentJob?: BatchSegmentJob;
}

export interface DescribeCampaignRequest {
  readonly campaignArn: string;
}

export interface DescribeCampaignResponse {
  readonly campaign?: Campaign;
}

export interface DescribeDatasetExportJobRequest {
  readonly datasetExportJobArn: string;
}

export interface DescribeDatasetExportJobResponse {
  readonly datasetExportJob?: DatasetExportJob;
}

export interface DescribeDatasetGroupRequest {
  readonly datasetGroupArn: string;
}

export interface DescribeDatasetGroupResponse {
  readonly datasetGroup?: DatasetGroup;
}

export interface DescribeDatasetImportJobRequest {
  readonly datasetImportJobArn: string;
}

export interface DescribeDatasetImportJobResponse {
  readonly datasetImportJob?: DatasetImportJob;
}

export interface DescribeDatasetRequest {
  readonly datasetArn: string;
}

export interface DescribeDatasetResponse {
  readonly dataset?: Dataset;
}

export interface DescribeEventTrackerRequest {
  readonly eventTrackerArn: string;
}

export interface DescribeEventTrackerResponse {
  readonly eventTracker?: EventTracker;
}

export interface DescribeFeatureTransformationRequest {
  readonly featureTransformationArn: string;
}

export interface DescribeFeatureTransformationResponse {
  readonly featureTransformation?: FeatureTransformation;
}

export interface DescribeFilterRequest {
  readonly filterArn: string;
}

export interface DescribeFilterResponse {
  readonly filter?: Filter;
}

export interface DescribeRecipeRequest {
  readonly recipeArn: string;
}

export interface DescribeRecipeResponse {
  readonly recipe?: Recipe;
}

export interface DescribeRecommenderRequest {
  readonly recommenderArn: string;
}

export interface DescribeRecommenderResponse {
  readonly recommender?: Recommender;
}

export interface DescribeSchemaRequest {
  readonly schemaArn: string;
}

export interface DescribeSchemaResponse {
  readonly schema?: DatasetSchema;
}

export interface DescribeSolutionRequest {
  readonly solutionArn: string;
}

export interface DescribeSolutionResponse {
  readonly solution?: Solution;
}

export interface DescribeSolutionVersionRequest {
  readonly solutionVersionArn: string;
}

export interface DescribeSolutionVersionResponse {
  readonly solutionVersion?: SolutionVersion;
}

export interface EventTracker {
  readonly name?: string;
  readonly eventTrackerArn?: string;
  readonly accountId?: string;
  readonly trackingId?: string;
  readonly datasetGroupArn?: string;
  readonly status?: string;
  readonly creationDateTime?: Date;
  readonly lastUpdatedDateTime?: Date;
}

export interface EventTrackerSummary {
  readonly name?: string;
  readonly eventTrackerArn?: string;
  readonly status?: string;
  readonly creationDateTime?: Date;
  readonly lastUpdatedDateTime?: Date;
}

export interface FeatureTransformation {
  readonly name?: string;
  readonly featureTransformationArn?: string;
  readonly defaultParameters?: {[key: string]: any};
  readonly creationDateTime?: Date;
  readonly lastUpdatedDateTime?: Date;
  readonly status?: string;
}

export interface Filter {
  readonly name?: string;
  readonly filterArn?: string;
  readonly creationDateTime?: Date;
  readonly lastUpdatedDateTime?: Date;
  readonly datasetGroupArn?: string;
  readonly failureReason?: string;
  readonly filterExpression?: string;
  readonly status?: string;
}

export interface FilterSummary {
  readonly name?: string;
  readonly filterArn?: string;
  readonly creationDateTime?: Date;
  readonly lastUpdatedDateTime?: Date;
  readonly datasetGroupArn?: string;
  readonly failureReason?: string;
  readonly status?: string;
}

export interface GetSolutionMetricsRequest {
  readonly solutionVersionArn: string;
}

export interface GetSolutionMetricsResponse {
  readonly solutionVersionArn?: string;
  readonly metrics?: {[key: string]: any};
}

export interface HPOConfig {
  readonly hpoObjective?: HPOObjective;
  readonly hpoResourceConfig?: HPOResourceConfig;
  readonly algorithmHyperParameterRanges?: HyperParameterRanges;
}

export interface HPOObjective {
  readonly type?: string;
  readonly metricName?: string;
  readonly metricRegex?: string;
}

export interface HPOResourceConfig {
  readonly maxNumberOfTrainingJobs?: string;
  readonly maxParallelTrainingJobs?: string;
}

export interface HyperParameterRanges {
  readonly integerHyperParameterRanges?: [];
  readonly continuousHyperParameterRanges?: [];
  readonly categoricalHyperParameterRanges?: [];
}

export interface IntegerHyperParameterRange {
  readonly name?: string;
  readonly minValue?: number;
  readonly maxValue?: number;
}

export interface InvalidInputException {
  readonly message?: string;
}

export interface InvalidNextTokenException {
  readonly message?: string;
}

export interface LimitExceededException {
  readonly message?: string;
}

export interface ListBatchInferenceJobsRequest {
  readonly solutionVersionArn?: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface ListBatchInferenceJobsResponse {
  readonly batchInferenceJobs?: [];
  readonly nextToken?: string;
}

export interface ListBatchSegmentJobsRequest {
  readonly solutionVersionArn?: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface ListBatchSegmentJobsResponse {
  readonly batchSegmentJobs?: [];
  readonly nextToken?: string;
}

export interface ListCampaignsRequest {
  readonly solutionArn?: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface ListCampaignsResponse {
  readonly campaigns?: [];
  readonly nextToken?: string;
}

export interface ListDatasetExportJobsRequest {
  readonly datasetArn?: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface ListDatasetExportJobsResponse {
  readonly datasetExportJobs?: [];
  readonly nextToken?: string;
}

export interface ListDatasetGroupsRequest {
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface ListDatasetGroupsResponse {
  readonly datasetGroups?: [];
  readonly nextToken?: string;
}

export interface ListDatasetImportJobsRequest {
  readonly datasetArn?: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface ListDatasetImportJobsResponse {
  readonly datasetImportJobs?: [];
  readonly nextToken?: string;
}

export interface ListDatasetsRequest {
  readonly datasetGroupArn?: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface ListDatasetsResponse {
  readonly datasets?: [];
  readonly nextToken?: string;
}

export interface ListEventTrackersRequest {
  readonly datasetGroupArn?: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface ListEventTrackersResponse {
  readonly eventTrackers?: [];
  readonly nextToken?: string;
}

export interface ListFiltersRequest {
  readonly datasetGroupArn?: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface ListFiltersResponse {
  readonly Filters?: [];
  readonly nextToken?: string;
}

export interface ListRecipesRequest {
  readonly recipeProvider?: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
  readonly domain?: string;
}

export interface ListRecipesResponse {
  readonly recipes?: [];
  readonly nextToken?: string;
}

export interface ListRecommendersRequest {
  readonly datasetGroupArn?: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface ListRecommendersResponse {
  readonly recommenders?: [];
  readonly nextToken?: string;
}

export interface ListSchemasRequest {
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface ListSchemasResponse {
  readonly schemas?: [];
  readonly nextToken?: string;
}

export interface ListSolutionVersionsRequest {
  readonly solutionArn?: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface ListSolutionVersionsResponse {
  readonly solutionVersions?: [];
  readonly nextToken?: string;
}

export interface ListSolutionsRequest {
  readonly datasetGroupArn?: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface ListSolutionsResponse {
  readonly solutions?: [];
  readonly nextToken?: string;
}

export interface OptimizationObjective {
  readonly itemAttribute?: string;
  readonly objectiveSensitivity?: string;
}

export interface Recipe {
  readonly name?: string;
  readonly recipeArn?: string;
  readonly algorithmArn?: string;
  readonly featureTransformationArn?: string;
  readonly status?: string;
  readonly description?: string;
  readonly creationDateTime?: Date;
  readonly recipeType?: string;
  readonly lastUpdatedDateTime?: Date;
}

export interface RecipeSummary {
  readonly name?: string;
  readonly recipeArn?: string;
  readonly status?: string;
  readonly creationDateTime?: Date;
  readonly lastUpdatedDateTime?: Date;
  readonly domain?: string;
}

export interface Recommender {
  readonly recommenderArn?: string;
  readonly datasetGroupArn?: string;
  readonly name?: string;
  readonly recipeArn?: string;
  readonly recommenderConfig?: RecommenderConfig;
  readonly creationDateTime?: Date;
  readonly lastUpdatedDateTime?: Date;
  readonly status?: string;
  readonly failureReason?: string;
  readonly latestRecommenderUpdate?: RecommenderUpdateSummary;
}

export interface RecommenderConfig {
  readonly itemExplorationConfig?: {[key: string]: any};
}

export interface RecommenderSummary {
  readonly name?: string;
  readonly recommenderArn?: string;
  readonly datasetGroupArn?: string;
  readonly recipeArn?: string;
  readonly recommenderConfig?: RecommenderConfig;
  readonly status?: string;
  readonly creationDateTime?: Date;
  readonly lastUpdatedDateTime?: Date;
}

export interface RecommenderUpdateSummary {
  readonly recommenderConfig?: RecommenderConfig;
  readonly creationDateTime?: Date;
  readonly lastUpdatedDateTime?: Date;
  readonly status?: string;
  readonly failureReason?: string;
}

export interface ResourceAlreadyExistsException {
  readonly message?: string;
}

export interface ResourceInUseException {
  readonly message?: string;
}

export interface ResourceNotFoundException {
  readonly message?: string;
}

export interface S3DataConfig {
  readonly path: string;
  readonly kmsKeyArn?: string;
}

export interface Solution {
  readonly name?: string;
  readonly solutionArn?: string;
  readonly performHPO?: boolean;
  readonly performAutoML?: boolean;
  readonly recipeArn?: string;
  readonly datasetGroupArn?: string;
  readonly eventType?: string;
  readonly solutionConfig?: SolutionConfig;
  readonly autoMLResult?: AutoMLResult;
  readonly status?: string;
  readonly creationDateTime?: Date;
  readonly lastUpdatedDateTime?: Date;
  readonly latestSolutionVersion?: SolutionVersionSummary;
}

export interface SolutionConfig {
  readonly eventValueThreshold?: string;
  readonly hpoConfig?: HPOConfig;
  readonly algorithmHyperParameters?: {[key: string]: any};
  readonly featureTransformationParameters?: {[key: string]: any};
  readonly autoMLConfig?: AutoMLConfig;
  readonly optimizationObjective?: OptimizationObjective;
}

export interface SolutionSummary {
  readonly name?: string;
  readonly solutionArn?: string;
  readonly status?: string;
  readonly creationDateTime?: Date;
  readonly lastUpdatedDateTime?: Date;
}

export interface SolutionVersion {
  readonly solutionVersionArn?: string;
  readonly solutionArn?: string;
  readonly performHPO?: boolean;
  readonly performAutoML?: boolean;
  readonly recipeArn?: string;
  readonly eventType?: string;
  readonly datasetGroupArn?: string;
  readonly solutionConfig?: SolutionConfig;
  readonly trainingHours?: unknown;
  readonly trainingMode?: string;
  readonly tunedHPOParams?: TunedHPOParams;
  readonly status?: string;
  readonly failureReason?: string;
  readonly creationDateTime?: Date;
  readonly lastUpdatedDateTime?: Date;
}

export interface SolutionVersionSummary {
  readonly solutionVersionArn?: string;
  readonly status?: string;
  readonly creationDateTime?: Date;
  readonly lastUpdatedDateTime?: Date;
  readonly failureReason?: string;
}

export interface StopSolutionVersionCreationRequest {
  readonly solutionVersionArn: string;
}

export interface TunedHPOParams {
  readonly algorithmHyperParameters?: {[key: string]: any};
}

export interface UpdateCampaignRequest {
  readonly campaignArn: string;
  readonly solutionVersionArn?: string;
  readonly minProvisionedTPS?: number;
  readonly campaignConfig?: CampaignConfig;
}

export interface UpdateCampaignResponse {
  readonly campaignArn?: string;
}

export interface UpdateRecommenderRequest {
  readonly recommenderArn: string;
  readonly recommenderConfig: RecommenderConfig;
}

export interface UpdateRecommenderResponse {
  readonly recommenderArn?: string;
}


