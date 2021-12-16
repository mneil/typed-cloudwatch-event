/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface BatchDeleteRecipeVersion {
  readonly Name: string;
  readonly RecipeVersions: [];
}
export interface CreateDataset {
  readonly Name: string;
  readonly Format: string;
  readonly FormatOptions: FormatOptions;
  readonly Input: Input;
  readonly PathOptions: PathOptions;
  readonly Tags: {[key: string]: any};
}
export interface CreateProfileJob {
  readonly DatasetName: string;
  readonly EncryptionKeyArn: string;
  readonly EncryptionMode: string;
  readonly Name: string;
  readonly LogSubscription: string;
  readonly MaxCapacity: number;
  readonly MaxRetries: number;
  readonly OutputLocation: S3Location;
  readonly Configuration: ProfileConfiguration;
  readonly ValidationConfigurations: [];
  readonly RoleArn: string;
  readonly Tags: {[key: string]: any};
  readonly Timeout: number;
  readonly JobSample: JobSample;
}
export interface CreateProject {
  readonly DatasetName: string;
  readonly Name: string;
  readonly RecipeName: string;
  readonly Sample: Sample;
  readonly RoleArn: string;
  readonly Tags: {[key: string]: any};
}
export interface CreateRecipe {
  readonly Description: string;
  readonly Name: string;
  readonly Steps: [];
  readonly Tags: {[key: string]: any};
}
export interface CreateRecipeJob {
  readonly DatasetName: string;
  readonly EncryptionKeyArn: string;
  readonly EncryptionMode: string;
  readonly Name: string;
  readonly LogSubscription: string;
  readonly MaxCapacity: number;
  readonly MaxRetries: number;
  readonly Outputs: [];
  readonly DataCatalogOutputs: [];
  readonly DatabaseOutputs: [];
  readonly ProjectName: string;
  readonly RecipeReference: RecipeReference;
  readonly RoleArn: string;
  readonly Tags: {[key: string]: any};
  readonly Timeout: number;
}
export interface CreateRuleset {
  readonly Name: string;
  readonly Description: string;
  readonly TargetArn: string;
  readonly Rules: [];
  readonly Tags: {[key: string]: any};
}
export interface CreateSchedule {
  readonly JobNames: [];
  readonly CronExpression: string;
  readonly Tags: {[key: string]: any};
  readonly Name: string;
}
export interface DeleteDataset {
  readonly Name: string;
}
export interface DeleteJob {
  readonly Name: string;
}
export interface DeleteProject {
  readonly Name: string;
}
export interface DeleteRecipeVersion {
  readonly Name: string;
  readonly RecipeVersion: string;
}
export interface DeleteRuleset {
  readonly Name: string;
}
export interface DeleteSchedule {
  readonly Name: string;
}
export interface DescribeDataset {
  readonly Name: string;
}
export interface DescribeJob {
  readonly Name: string;
}
export interface DescribeJobRun {
  readonly Name: string;
  readonly RunId: string;
}
export interface DescribeProject {
  readonly Name: string;
}
export interface DescribeRecipe {
  readonly Name: string;
  readonly RecipeVersion: string;
}
export interface DescribeRuleset {
  readonly Name: string;
}
export interface DescribeSchedule {
  readonly Name: string;
}
export interface ListDatasets {
  readonly MaxResults: number;
  readonly NextToken: string;
}
export interface ListJobRuns {
  readonly Name: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}
export interface ListJobs {
  readonly DatasetName: string;
  readonly MaxResults: number;
  readonly NextToken: string;
  readonly ProjectName: string;
}
export interface ListProjects {
  readonly NextToken: string;
  readonly MaxResults: number;
}
export interface ListRecipeVersions {
  readonly MaxResults: number;
  readonly NextToken: string;
  readonly Name: string;
}
export interface ListRecipes {
  readonly MaxResults: number;
  readonly NextToken: string;
  readonly RecipeVersion: string;
}
export interface ListRulesets {
  readonly TargetArn: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}
export interface ListSchedules {
  readonly JobName: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}
export interface ListTagsForResource {
  readonly ResourceArn: string;
}
export interface PublishRecipe {
  readonly Description: string;
  readonly Name: string;
}
export interface SendProjectSessionAction {
  readonly Preview: boolean;
  readonly Name: string;
  readonly RecipeStep: RecipeStep;
  readonly StepIndex: number;
  readonly ClientSessionId: string;
  readonly ViewFrame: ViewFrame;
}
export interface StartJobRun {
  readonly Name: string;
}
export interface StartProjectSession {
  readonly Name: string;
  readonly AssumeControl: boolean;
}
export interface StopJobRun {
  readonly Name: string;
  readonly RunId: string;
}
export interface TagResource {
  readonly ResourceArn: string;
  readonly Tags: {[key: string]: any};
}
export interface UntagResource {
  readonly ResourceArn: string;
  readonly TagKeys: [];
}
export interface UpdateDataset {
  readonly Name: string;
  readonly Format: string;
  readonly FormatOptions: FormatOptions;
  readonly Input: Input;
  readonly PathOptions: PathOptions;
}
export interface UpdateProfileJob {
  readonly Configuration: ProfileConfiguration;
  readonly EncryptionKeyArn: string;
  readonly EncryptionMode: string;
  readonly Name: string;
  readonly LogSubscription: string;
  readonly MaxCapacity: number;
  readonly MaxRetries: number;
  readonly OutputLocation: S3Location;
  readonly ValidationConfigurations: [];
  readonly RoleArn: string;
  readonly Timeout: number;
  readonly JobSample: JobSample;
}
export interface UpdateProject {
  readonly Sample: Sample;
  readonly RoleArn: string;
  readonly Name: string;
}
export interface UpdateRecipe {
  readonly Description: string;
  readonly Name: string;
  readonly Steps: [];
}
export interface UpdateRecipeJob {
  readonly EncryptionKeyArn: string;
  readonly EncryptionMode: string;
  readonly Name: string;
  readonly LogSubscription: string;
  readonly MaxCapacity: number;
  readonly MaxRetries: number;
  readonly Outputs: [];
  readonly DataCatalogOutputs: [];
  readonly DatabaseOutputs: [];
  readonly RoleArn: string;
  readonly Timeout: number;
}
export interface UpdateRuleset {
  readonly Name: string;
  readonly Description: string;
  readonly Rules: [];
}
export interface UpdateSchedule {
  readonly JobNames: [];
  readonly CronExpression: string;
  readonly Name: string;
}



interface AccessDeniedException {
  readonly Message: string;
}

interface AllowedStatistics {
  readonly Statistics: [];
}

interface BatchDeleteRecipeVersionRequest {
  readonly Name: string;
  readonly RecipeVersions: [];
}

interface BatchDeleteRecipeVersionResponse {
  readonly Name: string;
  readonly Errors: [];
}

interface ColumnSelector {
  readonly Regex: string;
  readonly Name: string;
}

interface ColumnStatisticsConfiguration {
  readonly Selectors: [];
  readonly Statistics: StatisticsConfiguration;
}

interface ConditionExpression {
  readonly Condition: string;
  readonly Value: string;
  readonly TargetColumn: string;
}

interface ConflictException {
  readonly Message: string;
}

interface CreateDatasetRequest {
  readonly Name: string;
  readonly Format: string;
  readonly FormatOptions: FormatOptions;
  readonly Input: Input;
  readonly PathOptions: PathOptions;
  readonly Tags: {[key: string]: any};
}

interface CreateDatasetResponse {
  readonly Name: string;
}

interface CreateProfileJobRequest {
  readonly DatasetName: string;
  readonly EncryptionKeyArn: string;
  readonly EncryptionMode: string;
  readonly Name: string;
  readonly LogSubscription: string;
  readonly MaxCapacity: number;
  readonly MaxRetries: number;
  readonly OutputLocation: S3Location;
  readonly Configuration: ProfileConfiguration;
  readonly ValidationConfigurations: [];
  readonly RoleArn: string;
  readonly Tags: {[key: string]: any};
  readonly Timeout: number;
  readonly JobSample: JobSample;
}

interface CreateProfileJobResponse {
  readonly Name: string;
}

interface CreateProjectRequest {
  readonly DatasetName: string;
  readonly Name: string;
  readonly RecipeName: string;
  readonly Sample: Sample;
  readonly RoleArn: string;
  readonly Tags: {[key: string]: any};
}

interface CreateProjectResponse {
  readonly Name: string;
}

interface CreateRecipeJobRequest {
  readonly DatasetName: string;
  readonly EncryptionKeyArn: string;
  readonly EncryptionMode: string;
  readonly Name: string;
  readonly LogSubscription: string;
  readonly MaxCapacity: number;
  readonly MaxRetries: number;
  readonly Outputs: [];
  readonly DataCatalogOutputs: [];
  readonly DatabaseOutputs: [];
  readonly ProjectName: string;
  readonly RecipeReference: RecipeReference;
  readonly RoleArn: string;
  readonly Tags: {[key: string]: any};
  readonly Timeout: number;
}

interface CreateRecipeJobResponse {
  readonly Name: string;
}

interface CreateRecipeRequest {
  readonly Description: string;
  readonly Name: string;
  readonly Steps: [];
  readonly Tags: {[key: string]: any};
}

interface CreateRecipeResponse {
  readonly Name: string;
}

interface CreateRulesetRequest {
  readonly Name: string;
  readonly Description: string;
  readonly TargetArn: string;
  readonly Rules: [];
  readonly Tags: {[key: string]: any};
}

interface CreateRulesetResponse {
  readonly Name: string;
}

interface CreateScheduleRequest {
  readonly JobNames: [];
  readonly CronExpression: string;
  readonly Tags: {[key: string]: any};
  readonly Name: string;
}

interface CreateScheduleResponse {
  readonly Name: string;
}

interface CsvOptions {
  readonly Delimiter: string;
  readonly HeaderRow: boolean;
}

interface CsvOutputOptions {
  readonly Delimiter: string;
}

interface DataCatalogInputDefinition {
  readonly CatalogId: string;
  readonly DatabaseName: string;
  readonly TableName: string;
  readonly TempDirectory: S3Location;
}

interface DataCatalogOutput {
  readonly CatalogId: string;
  readonly DatabaseName: string;
  readonly TableName: string;
  readonly S3Options: S3TableOutputOptions;
  readonly DatabaseOptions: DatabaseTableOutputOptions;
  readonly Overwrite: boolean;
}

interface DatabaseInputDefinition {
  readonly GlueConnectionName: string;
  readonly DatabaseTableName: string;
  readonly TempDirectory: S3Location;
  readonly QueryString: string;
}

interface DatabaseOutput {
  readonly GlueConnectionName: string;
  readonly DatabaseOptions: DatabaseTableOutputOptions;
  readonly DatabaseOutputMode: string;
}

interface DatabaseTableOutputOptions {
  readonly TempDirectory: S3Location;
  readonly TableName: string;
}

interface Dataset {
  readonly AccountId: string;
  readonly CreatedBy: string;
  readonly CreateDate: Date;
  readonly Name: string;
  readonly Format: string;
  readonly FormatOptions: FormatOptions;
  readonly Input: Input;
  readonly LastModifiedDate: Date;
  readonly LastModifiedBy: string;
  readonly Source: string;
  readonly PathOptions: PathOptions;
  readonly Tags: {[key: string]: any};
  readonly ResourceArn: string;
}

interface DatasetParameter {
  readonly Name: string;
  readonly Type: string;
  readonly DatetimeOptions: DatetimeOptions;
  readonly CreateColumn: boolean;
  readonly Filter: FilterExpression;
}

interface DatetimeOptions {
  readonly Format: string;
  readonly TimezoneOffset: string;
  readonly LocaleCode: string;
}

interface DeleteDatasetRequest {
  readonly Name: string;
}

interface DeleteDatasetResponse {
  readonly Name: string;
}

interface DeleteJobRequest {
  readonly Name: string;
}

interface DeleteJobResponse {
  readonly Name: string;
}

interface DeleteProjectRequest {
  readonly Name: string;
}

interface DeleteProjectResponse {
  readonly Name: string;
}

interface DeleteRecipeVersionRequest {
  readonly Name: string;
  readonly RecipeVersion: string;
}

interface DeleteRecipeVersionResponse {
  readonly Name: string;
  readonly RecipeVersion: string;
}

interface DeleteRulesetRequest {
  readonly Name: string;
}

interface DeleteRulesetResponse {
  readonly Name: string;
}

interface DeleteScheduleRequest {
  readonly Name: string;
}

interface DeleteScheduleResponse {
  readonly Name: string;
}

interface DescribeDatasetRequest {
  readonly Name: string;
}

interface DescribeDatasetResponse {
  readonly CreatedBy: string;
  readonly CreateDate: Date;
  readonly Name: string;
  readonly Format: string;
  readonly FormatOptions: FormatOptions;
  readonly Input: Input;
  readonly LastModifiedDate: Date;
  readonly LastModifiedBy: string;
  readonly Source: string;
  readonly PathOptions: PathOptions;
  readonly Tags: {[key: string]: any};
  readonly ResourceArn: string;
}

interface DescribeJobRequest {
  readonly Name: string;
}

interface DescribeJobResponse {
  readonly CreateDate: Date;
  readonly CreatedBy: string;
  readonly DatasetName: string;
  readonly EncryptionKeyArn: string;
  readonly EncryptionMode: string;
  readonly Name: string;
  readonly Type: string;
  readonly LastModifiedBy: string;
  readonly LastModifiedDate: Date;
  readonly LogSubscription: string;
  readonly MaxCapacity: number;
  readonly MaxRetries: number;
  readonly Outputs: [];
  readonly DataCatalogOutputs: [];
  readonly DatabaseOutputs: [];
  readonly ProjectName: string;
  readonly ProfileConfiguration: ProfileConfiguration;
  readonly ValidationConfigurations: [];
  readonly RecipeReference: RecipeReference;
  readonly ResourceArn: string;
  readonly RoleArn: string;
  readonly Tags: {[key: string]: any};
  readonly Timeout: number;
  readonly JobSample: JobSample;
}

interface DescribeJobRunRequest {
  readonly Name: string;
  readonly RunId: string;
}

interface DescribeJobRunResponse {
  readonly Attempt: number;
  readonly CompletedOn: Date;
  readonly DatasetName: string;
  readonly ErrorMessage: string;
  readonly ExecutionTime: number;
  readonly JobName: string;
  readonly ProfileConfiguration: ProfileConfiguration;
  readonly ValidationConfigurations: [];
  readonly RunId: string;
  readonly State: string;
  readonly LogSubscription: string;
  readonly LogGroupName: string;
  readonly Outputs: [];
  readonly DataCatalogOutputs: [];
  readonly DatabaseOutputs: [];
  readonly RecipeReference: RecipeReference;
  readonly StartedBy: string;
  readonly StartedOn: Date;
  readonly JobSample: JobSample;
}

interface DescribeProjectRequest {
  readonly Name: string;
}

interface DescribeProjectResponse {
  readonly CreateDate: Date;
  readonly CreatedBy: string;
  readonly DatasetName: string;
  readonly LastModifiedDate: Date;
  readonly LastModifiedBy: string;
  readonly Name: string;
  readonly RecipeName: string;
  readonly ResourceArn: string;
  readonly Sample: Sample;
  readonly RoleArn: string;
  readonly Tags: {[key: string]: any};
  readonly SessionStatus: string;
  readonly OpenedBy: string;
  readonly OpenDate: Date;
}

interface DescribeRecipeRequest {
  readonly Name: string;
  readonly RecipeVersion: string;
}

interface DescribeRecipeResponse {
  readonly CreatedBy: string;
  readonly CreateDate: Date;
  readonly LastModifiedBy: string;
  readonly LastModifiedDate: Date;
  readonly ProjectName: string;
  readonly PublishedBy: string;
  readonly PublishedDate: Date;
  readonly Description: string;
  readonly Name: string;
  readonly Steps: [];
  readonly Tags: {[key: string]: any};
  readonly ResourceArn: string;
  readonly RecipeVersion: string;
}

interface DescribeRulesetRequest {
  readonly Name: string;
}

interface DescribeRulesetResponse {
  readonly Name: string;
  readonly Description: string;
  readonly TargetArn: string;
  readonly Rules: [];
  readonly CreateDate: Date;
  readonly CreatedBy: string;
  readonly LastModifiedBy: string;
  readonly LastModifiedDate: Date;
  readonly ResourceArn: string;
  readonly Tags: {[key: string]: any};
}

interface DescribeScheduleRequest {
  readonly Name: string;
}

interface DescribeScheduleResponse {
  readonly CreateDate: Date;
  readonly CreatedBy: string;
  readonly JobNames: [];
  readonly LastModifiedBy: string;
  readonly LastModifiedDate: Date;
  readonly ResourceArn: string;
  readonly CronExpression: string;
  readonly Tags: {[key: string]: any};
  readonly Name: string;
}

interface EntityDetectorConfiguration {
  readonly EntityTypes: [];
  readonly AllowedStatistics: [];
}

interface ExcelOptions {
  readonly SheetNames: [];
  readonly SheetIndexes: [];
  readonly HeaderRow: boolean;
}

interface FilesLimit {
  readonly MaxFiles: number;
  readonly OrderedBy: string;
  readonly Order: string;
}

interface FilterExpression {
  readonly Expression: string;
  readonly ValuesMap: {[key: string]: any};
}

interface FormatOptions {
  readonly Json: JsonOptions;
  readonly Excel: ExcelOptions;
  readonly Csv: CsvOptions;
}

interface Input {
  readonly S3InputDefinition: S3Location;
  readonly DataCatalogInputDefinition: DataCatalogInputDefinition;
  readonly DatabaseInputDefinition: DatabaseInputDefinition;
  readonly Metadata: Metadata;
}

interface InternalServerException {
  readonly Message: string;
}

interface Job {
  readonly AccountId: string;
  readonly CreatedBy: string;
  readonly CreateDate: Date;
  readonly DatasetName: string;
  readonly EncryptionKeyArn: string;
  readonly EncryptionMode: string;
  readonly Name: string;
  readonly Type: string;
  readonly LastModifiedBy: string;
  readonly LastModifiedDate: Date;
  readonly LogSubscription: string;
  readonly MaxCapacity: number;
  readonly MaxRetries: number;
  readonly Outputs: [];
  readonly DataCatalogOutputs: [];
  readonly DatabaseOutputs: [];
  readonly ProjectName: string;
  readonly RecipeReference: RecipeReference;
  readonly ResourceArn: string;
  readonly RoleArn: string;
  readonly Timeout: number;
  readonly Tags: {[key: string]: any};
  readonly JobSample: JobSample;
  readonly ValidationConfigurations: [];
}

interface JobRun {
  readonly Attempt: number;
  readonly CompletedOn: Date;
  readonly DatasetName: string;
  readonly ErrorMessage: string;
  readonly ExecutionTime: number;
  readonly JobName: string;
  readonly RunId: string;
  readonly State: string;
  readonly LogSubscription: string;
  readonly LogGroupName: string;
  readonly Outputs: [];
  readonly DataCatalogOutputs: [];
  readonly DatabaseOutputs: [];
  readonly RecipeReference: RecipeReference;
  readonly StartedBy: string;
  readonly StartedOn: Date;
  readonly JobSample: JobSample;
  readonly ValidationConfigurations: [];
}

interface JobSample {
  readonly Mode: string;
  readonly Size: number;
}

interface JsonOptions {
  readonly MultiLine: boolean;
}

interface ListDatasetsRequest {
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface ListDatasetsResponse {
  readonly Datasets: [];
  readonly NextToken: string;
}

interface ListJobRunsRequest {
  readonly Name: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface ListJobRunsResponse {
  readonly JobRuns: [];
  readonly NextToken: string;
}

interface ListJobsRequest {
  readonly DatasetName: string;
  readonly MaxResults: number;
  readonly NextToken: string;
  readonly ProjectName: string;
}

interface ListJobsResponse {
  readonly Jobs: [];
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

interface ListRecipeVersionsRequest {
  readonly MaxResults: number;
  readonly NextToken: string;
  readonly Name: string;
}

interface ListRecipeVersionsResponse {
  readonly NextToken: string;
  readonly Recipes: [];
}

interface ListRecipesRequest {
  readonly MaxResults: number;
  readonly NextToken: string;
  readonly RecipeVersion: string;
}

interface ListRecipesResponse {
  readonly Recipes: [];
  readonly NextToken: string;
}

interface ListRulesetsRequest {
  readonly TargetArn: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface ListRulesetsResponse {
  readonly Rulesets: [];
  readonly NextToken: string;
}

interface ListSchedulesRequest {
  readonly JobName: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface ListSchedulesResponse {
  readonly Schedules: [];
  readonly NextToken: string;
}

interface ListTagsForResourceRequest {
  readonly ResourceArn: string;
}

interface ListTagsForResourceResponse {
  readonly Tags: {[key: string]: any};
}

interface Metadata {
  readonly SourceArn: string;
}

interface Output {
  readonly CompressionFormat: string;
  readonly Format: string;
  readonly PartitionColumns: [];
  readonly Location: S3Location;
  readonly Overwrite: boolean;
  readonly FormatOptions: OutputFormatOptions;
}

interface OutputFormatOptions {
  readonly Csv: CsvOutputOptions;
}

interface PathOptions {
  readonly LastModifiedDateCondition: FilterExpression;
  readonly FilesLimit: FilesLimit;
  readonly Parameters: {[key: string]: any};
}

interface ProfileConfiguration {
  readonly DatasetStatisticsConfiguration: StatisticsConfiguration;
  readonly ProfileColumns: [];
  readonly ColumnStatisticsConfigurations: [];
  readonly EntityDetectorConfiguration: EntityDetectorConfiguration;
}

interface Project {
  readonly AccountId: string;
  readonly CreateDate: Date;
  readonly CreatedBy: string;
  readonly DatasetName: string;
  readonly LastModifiedDate: Date;
  readonly LastModifiedBy: string;
  readonly Name: string;
  readonly RecipeName: string;
  readonly ResourceArn: string;
  readonly Sample: Sample;
  readonly Tags: {[key: string]: any};
  readonly RoleArn: string;
  readonly OpenedBy: string;
  readonly OpenDate: Date;
}

interface PublishRecipeRequest {
  readonly Description: string;
  readonly Name: string;
}

interface PublishRecipeResponse {
  readonly Name: string;
}

interface Recipe {
  readonly CreatedBy: string;
  readonly CreateDate: Date;
  readonly LastModifiedBy: string;
  readonly LastModifiedDate: Date;
  readonly ProjectName: string;
  readonly PublishedBy: string;
  readonly PublishedDate: Date;
  readonly Description: string;
  readonly Name: string;
  readonly ResourceArn: string;
  readonly Steps: [];
  readonly Tags: {[key: string]: any};
  readonly RecipeVersion: string;
}

interface RecipeAction {
  readonly Operation: string;
  readonly Parameters: {[key: string]: any};
}

interface RecipeReference {
  readonly Name: string;
  readonly RecipeVersion: string;
}

interface RecipeStep {
  readonly Action: RecipeAction;
  readonly ConditionExpressions: [];
}

interface RecipeVersionErrorDetail {
  readonly ErrorCode: string;
  readonly ErrorMessage: string;
  readonly RecipeVersion: string;
}

interface ResourceNotFoundException {
  readonly Message: string;
}

interface Rule {
  readonly Name: string;
  readonly Disabled: boolean;
  readonly CheckExpression: string;
  readonly SubstitutionMap: {[key: string]: any};
  readonly Threshold: Threshold;
  readonly ColumnSelectors: [];
}

interface RulesetItem {
  readonly AccountId: string;
  readonly CreatedBy: string;
  readonly CreateDate: Date;
  readonly Description: string;
  readonly LastModifiedBy: string;
  readonly LastModifiedDate: Date;
  readonly Name: string;
  readonly ResourceArn: string;
  readonly RuleCount: number;
  readonly Tags: {[key: string]: any};
  readonly TargetArn: string;
}

interface S3Location {
  readonly Bucket: string;
  readonly Key: string;
}

interface S3TableOutputOptions {
  readonly Location: S3Location;
}

interface Sample {
  readonly Size: number;
  readonly Type: string;
}

interface Schedule {
  readonly AccountId: string;
  readonly CreatedBy: string;
  readonly CreateDate: Date;
  readonly JobNames: [];
  readonly LastModifiedBy: string;
  readonly LastModifiedDate: Date;
  readonly ResourceArn: string;
  readonly CronExpression: string;
  readonly Tags: {[key: string]: any};
  readonly Name: string;
}

interface SendProjectSessionActionRequest {
  readonly Preview: boolean;
  readonly Name: string;
  readonly RecipeStep: RecipeStep;
  readonly StepIndex: number;
  readonly ClientSessionId: string;
  readonly ViewFrame: ViewFrame;
}

interface SendProjectSessionActionResponse {
  readonly Result: string;
  readonly Name: string;
  readonly ActionId: number;
}

interface ServiceQuotaExceededException {
  readonly Message: string;
}

interface StartJobRunRequest {
  readonly Name: string;
}

interface StartJobRunResponse {
  readonly RunId: string;
}

interface StartProjectSessionRequest {
  readonly Name: string;
  readonly AssumeControl: boolean;
}

interface StartProjectSessionResponse {
  readonly Name: string;
  readonly ClientSessionId: string;
}

interface StatisticOverride {
  readonly Statistic: string;
  readonly Parameters: {[key: string]: any};
}

interface StatisticsConfiguration {
  readonly IncludedStatistics: [];
  readonly Overrides: [];
}

interface StopJobRunRequest {
  readonly Name: string;
  readonly RunId: string;
}

interface StopJobRunResponse {
  readonly RunId: string;
}

interface TagResourceRequest {
  readonly ResourceArn: string;
  readonly Tags: {[key: string]: any};
}

interface TagResourceResponse {
}

interface Threshold {
  readonly Value: unknown;
  readonly Type: string;
  readonly Unit: string;
}

interface UntagResourceRequest {
  readonly ResourceArn: string;
  readonly TagKeys: [];
}

interface UntagResourceResponse {
}

interface UpdateDatasetRequest {
  readonly Name: string;
  readonly Format: string;
  readonly FormatOptions: FormatOptions;
  readonly Input: Input;
  readonly PathOptions: PathOptions;
}

interface UpdateDatasetResponse {
  readonly Name: string;
}

interface UpdateProfileJobRequest {
  readonly Configuration: ProfileConfiguration;
  readonly EncryptionKeyArn: string;
  readonly EncryptionMode: string;
  readonly Name: string;
  readonly LogSubscription: string;
  readonly MaxCapacity: number;
  readonly MaxRetries: number;
  readonly OutputLocation: S3Location;
  readonly ValidationConfigurations: [];
  readonly RoleArn: string;
  readonly Timeout: number;
  readonly JobSample: JobSample;
}

interface UpdateProfileJobResponse {
  readonly Name: string;
}

interface UpdateProjectRequest {
  readonly Sample: Sample;
  readonly RoleArn: string;
  readonly Name: string;
}

interface UpdateProjectResponse {
  readonly LastModifiedDate: Date;
  readonly Name: string;
}

interface UpdateRecipeJobRequest {
  readonly EncryptionKeyArn: string;
  readonly EncryptionMode: string;
  readonly Name: string;
  readonly LogSubscription: string;
  readonly MaxCapacity: number;
  readonly MaxRetries: number;
  readonly Outputs: [];
  readonly DataCatalogOutputs: [];
  readonly DatabaseOutputs: [];
  readonly RoleArn: string;
  readonly Timeout: number;
}

interface UpdateRecipeJobResponse {
  readonly Name: string;
}

interface UpdateRecipeRequest {
  readonly Description: string;
  readonly Name: string;
  readonly Steps: [];
}

interface UpdateRecipeResponse {
  readonly Name: string;
}

interface UpdateRulesetRequest {
  readonly Name: string;
  readonly Description: string;
  readonly Rules: [];
}

interface UpdateRulesetResponse {
  readonly Name: string;
}

interface UpdateScheduleRequest {
  readonly JobNames: [];
  readonly CronExpression: string;
  readonly Name: string;
}

interface UpdateScheduleResponse {
  readonly Name: string;
}

interface ValidationConfiguration {
  readonly RulesetArn: string;
  readonly ValidationMode: string;
}

interface ValidationException {
  readonly Message: string;
}

interface ViewFrame {
  readonly StartColumnIndex: number;
  readonly ColumnRange: number;
  readonly HiddenColumns: [];
  readonly StartRowIndex: number;
  readonly RowRange: number;
  readonly Analytics: string;
}

