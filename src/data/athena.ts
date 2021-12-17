/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface BatchGetNamedQuery {
  readonly NamedQueryIds: [];
}
export interface BatchGetQueryExecution {
  readonly QueryExecutionIds: [];
}
export interface CreateDataCatalog {
  readonly Name: string;
  readonly Type: string;
  readonly Description?: string;
  readonly Parameters?: {[key: string]: any};
  readonly Tags?: [];
}
export interface CreateNamedQuery {
  readonly Name: string;
  readonly Description?: string;
  readonly Database: string;
  readonly QueryString: string;
  readonly ClientRequestToken?: string;
  readonly WorkGroup?: string;
}
export interface CreatePreparedStatement {
  readonly StatementName: string;
  readonly WorkGroup: string;
  readonly QueryStatement: string;
  readonly Description?: string;
}
export interface CreateWorkGroup {
  readonly Name: string;
  readonly Configuration?: WorkGroupConfiguration;
  readonly Description?: string;
  readonly Tags?: [];
}
export interface DeleteDataCatalog {
  readonly Name: string;
}
export interface DeleteNamedQuery {
  readonly NamedQueryId: string;
}
export interface DeletePreparedStatement {
  readonly StatementName: string;
  readonly WorkGroup: string;
}
export interface DeleteWorkGroup {
  readonly WorkGroup: string;
  readonly RecursiveDeleteOption?: boolean;
}
export interface GetDataCatalog {
  readonly Name: string;
}
export interface GetDatabase {
  readonly CatalogName: string;
  readonly DatabaseName: string;
}
export interface GetNamedQuery {
  readonly NamedQueryId: string;
}
export interface GetPreparedStatement {
  readonly StatementName: string;
  readonly WorkGroup: string;
}
export interface GetQueryExecution {
  readonly QueryExecutionId: string;
}
export interface GetQueryResults {
  readonly QueryExecutionId: string;
  readonly NextToken?: string;
  readonly MaxResults?: number;
}
export interface GetTableMetadata {
  readonly CatalogName: string;
  readonly DatabaseName: string;
  readonly TableName: string;
}
export interface GetWorkGroup {
  readonly WorkGroup: string;
}
export interface ListDataCatalogs {
  readonly NextToken?: string;
  readonly MaxResults?: number;
}
export interface ListDatabases {
  readonly CatalogName: string;
  readonly NextToken?: string;
  readonly MaxResults?: number;
}
export interface ListEngineVersions {
  readonly NextToken?: string;
  readonly MaxResults?: number;
}
export interface ListNamedQueries {
  readonly NextToken?: string;
  readonly MaxResults?: number;
  readonly WorkGroup?: string;
}
export interface ListPreparedStatements {
  readonly WorkGroup: string;
  readonly NextToken?: string;
  readonly MaxResults?: number;
}
export interface ListQueryExecutions {
  readonly NextToken?: string;
  readonly MaxResults?: number;
  readonly WorkGroup?: string;
}
export interface ListTableMetadata {
  readonly CatalogName: string;
  readonly DatabaseName: string;
  readonly Expression?: string;
  readonly NextToken?: string;
  readonly MaxResults?: number;
}
export interface ListTagsForResource {
  readonly ResourceARN: string;
  readonly NextToken?: string;
  readonly MaxResults?: number;
}
export interface ListWorkGroups {
  readonly NextToken?: string;
  readonly MaxResults?: number;
}
export interface StartQueryExecution {
  readonly QueryString: string;
  readonly ClientRequestToken?: string;
  readonly QueryExecutionContext?: QueryExecutionContext;
  readonly ResultConfiguration?: ResultConfiguration;
  readonly WorkGroup?: string;
}
export interface StopQueryExecution {
  readonly QueryExecutionId: string;
}
export interface TagResource {
  readonly ResourceARN: string;
  readonly Tags: [];
}
export interface UntagResource {
  readonly ResourceARN: string;
  readonly TagKeys: [];
}
export interface UpdateDataCatalog {
  readonly Name: string;
  readonly Type: string;
  readonly Description?: string;
  readonly Parameters?: {[key: string]: any};
}
export interface UpdatePreparedStatement {
  readonly StatementName: string;
  readonly WorkGroup: string;
  readonly QueryStatement: string;
  readonly Description?: string;
}
export interface UpdateWorkGroup {
  readonly WorkGroup: string;
  readonly Description?: string;
  readonly ConfigurationUpdates?: WorkGroupConfigurationUpdates;
  readonly State?: string;
}



interface BatchGetNamedQueryInput {
  readonly NamedQueryIds: [];
}

interface BatchGetNamedQueryOutput {
  readonly NamedQueries: [];
  readonly UnprocessedNamedQueryIds: [];
}

interface BatchGetQueryExecutionInput {
  readonly QueryExecutionIds: [];
}

interface BatchGetQueryExecutionOutput {
  readonly QueryExecutions: [];
  readonly UnprocessedQueryExecutionIds: [];
}

interface Column {
  readonly Name: string;
  readonly Type: string;
  readonly Comment: string;
}

interface ColumnInfo {
  readonly CatalogName: string;
  readonly SchemaName: string;
  readonly TableName: string;
  readonly Name: string;
  readonly Label: string;
  readonly Type: string;
  readonly Precision: number;
  readonly Scale: number;
  readonly Nullable: string;
  readonly CaseSensitive: boolean;
}

interface CreateDataCatalogInput {
  readonly Name: string;
  readonly Type: string;
  readonly Description: string;
  readonly Parameters: {[key: string]: any};
  readonly Tags: [];
}

interface CreateDataCatalogOutput {
}

interface CreateNamedQueryInput {
  readonly Name: string;
  readonly Description: string;
  readonly Database: string;
  readonly QueryString: string;
  readonly ClientRequestToken: string;
  readonly WorkGroup: string;
}

interface CreateNamedQueryOutput {
  readonly NamedQueryId: string;
}

interface CreatePreparedStatementInput {
  readonly StatementName: string;
  readonly WorkGroup: string;
  readonly QueryStatement: string;
  readonly Description: string;
}

interface CreatePreparedStatementOutput {
}

interface CreateWorkGroupInput {
  readonly Name: string;
  readonly Configuration: WorkGroupConfiguration;
  readonly Description: string;
  readonly Tags: [];
}

interface CreateWorkGroupOutput {
}

interface DataCatalog {
  readonly Name: string;
  readonly Description: string;
  readonly Type: string;
  readonly Parameters: {[key: string]: any};
}

interface DataCatalogSummary {
  readonly CatalogName: string;
  readonly Type: string;
}

interface Database {
  readonly Name: string;
  readonly Description: string;
  readonly Parameters: {[key: string]: any};
}

interface Datum {
  readonly VarCharValue: string;
}

interface DeleteDataCatalogInput {
  readonly Name: string;
}

interface DeleteDataCatalogOutput {
}

interface DeleteNamedQueryInput {
  readonly NamedQueryId: string;
}

interface DeleteNamedQueryOutput {
}

interface DeletePreparedStatementInput {
  readonly StatementName: string;
  readonly WorkGroup: string;
}

interface DeletePreparedStatementOutput {
}

interface DeleteWorkGroupInput {
  readonly WorkGroup: string;
  readonly RecursiveDeleteOption: boolean;
}

interface DeleteWorkGroupOutput {
}

interface EncryptionConfiguration {
  readonly EncryptionOption: string;
  readonly KmsKey: string;
}

interface EngineVersion {
  readonly SelectedEngineVersion: string;
  readonly EffectiveEngineVersion: string;
}

interface GetDataCatalogInput {
  readonly Name: string;
}

interface GetDataCatalogOutput {
  readonly DataCatalog: DataCatalog;
}

interface GetDatabaseInput {
  readonly CatalogName: string;
  readonly DatabaseName: string;
}

interface GetDatabaseOutput {
  readonly Database: Database;
}

interface GetNamedQueryInput {
  readonly NamedQueryId: string;
}

interface GetNamedQueryOutput {
  readonly NamedQuery: NamedQuery;
}

interface GetPreparedStatementInput {
  readonly StatementName: string;
  readonly WorkGroup: string;
}

interface GetPreparedStatementOutput {
  readonly PreparedStatement: PreparedStatement;
}

interface GetQueryExecutionInput {
  readonly QueryExecutionId: string;
}

interface GetQueryExecutionOutput {
  readonly QueryExecution: QueryExecution;
}

interface GetQueryResultsInput {
  readonly QueryExecutionId: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface GetQueryResultsOutput {
  readonly UpdateCount: number;
  readonly ResultSet: ResultSet;
  readonly NextToken: string;
}

interface GetTableMetadataInput {
  readonly CatalogName: string;
  readonly DatabaseName: string;
  readonly TableName: string;
}

interface GetTableMetadataOutput {
  readonly TableMetadata: TableMetadata;
}

interface GetWorkGroupInput {
  readonly WorkGroup: string;
}

interface GetWorkGroupOutput {
  readonly WorkGroup: WorkGroup;
}

interface InternalServerException {
  readonly Message: string;
}

interface InvalidRequestException {
  readonly AthenaErrorCode: string;
  readonly Message: string;
}

interface ListDataCatalogsInput {
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListDataCatalogsOutput {
  readonly DataCatalogsSummary: [];
  readonly NextToken: string;
}

interface ListDatabasesInput {
  readonly CatalogName: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListDatabasesOutput {
  readonly DatabaseList: [];
  readonly NextToken: string;
}

interface ListEngineVersionsInput {
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListEngineVersionsOutput {
  readonly EngineVersions: [];
  readonly NextToken: string;
}

interface ListNamedQueriesInput {
  readonly NextToken: string;
  readonly MaxResults: number;
  readonly WorkGroup: string;
}

interface ListNamedQueriesOutput {
  readonly NamedQueryIds: [];
  readonly NextToken: string;
}

interface ListPreparedStatementsInput {
  readonly WorkGroup: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListPreparedStatementsOutput {
  readonly PreparedStatements: [];
  readonly NextToken: string;
}

interface ListQueryExecutionsInput {
  readonly NextToken: string;
  readonly MaxResults: number;
  readonly WorkGroup: string;
}

interface ListQueryExecutionsOutput {
  readonly QueryExecutionIds: [];
  readonly NextToken: string;
}

interface ListTableMetadataInput {
  readonly CatalogName: string;
  readonly DatabaseName: string;
  readonly Expression: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListTableMetadataOutput {
  readonly TableMetadataList: [];
  readonly NextToken: string;
}

interface ListTagsForResourceInput {
  readonly ResourceARN: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListTagsForResourceOutput {
  readonly Tags: [];
  readonly NextToken: string;
}

interface ListWorkGroupsInput {
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListWorkGroupsOutput {
  readonly WorkGroups: [];
  readonly NextToken: string;
}

interface MetadataException {
  readonly Message: string;
}

interface NamedQuery {
  readonly Name: string;
  readonly Description: string;
  readonly Database: string;
  readonly QueryString: string;
  readonly NamedQueryId: string;
  readonly WorkGroup: string;
}

interface PreparedStatement {
  readonly StatementName: string;
  readonly QueryStatement: string;
  readonly WorkGroupName: string;
  readonly Description: string;
  readonly LastModifiedTime: Date;
}

interface PreparedStatementSummary {
  readonly StatementName: string;
  readonly LastModifiedTime: Date;
}

interface QueryExecution {
  readonly QueryExecutionId: string;
  readonly Query: string;
  readonly StatementType: string;
  readonly ResultConfiguration: ResultConfiguration;
  readonly QueryExecutionContext: QueryExecutionContext;
  readonly Status: QueryExecutionStatus;
  readonly Statistics: QueryExecutionStatistics;
  readonly WorkGroup: string;
  readonly EngineVersion: EngineVersion;
}

interface QueryExecutionContext {
  readonly Database: string;
  readonly Catalog: string;
}

interface QueryExecutionStatistics {
  readonly EngineExecutionTimeInMillis: number;
  readonly DataScannedInBytes: number;
  readonly DataManifestLocation: string;
  readonly TotalExecutionTimeInMillis: number;
  readonly QueryQueueTimeInMillis: number;
  readonly QueryPlanningTimeInMillis: number;
  readonly ServiceProcessingTimeInMillis: number;
}

interface QueryExecutionStatus {
  readonly State: string;
  readonly StateChangeReason: string;
  readonly SubmissionDateTime: Date;
  readonly CompletionDateTime: Date;
}

interface ResourceNotFoundException {
  readonly Message: string;
  readonly ResourceName: string;
}

interface ResultConfiguration {
  readonly OutputLocation: string;
  readonly EncryptionConfiguration: EncryptionConfiguration;
}

interface ResultConfigurationUpdates {
  readonly OutputLocation: string;
  readonly RemoveOutputLocation: boolean;
  readonly EncryptionConfiguration: EncryptionConfiguration;
  readonly RemoveEncryptionConfiguration: boolean;
}

interface ResultSet {
  readonly Rows: [];
  readonly ResultSetMetadata: ResultSetMetadata;
}

interface ResultSetMetadata {
  readonly ColumnInfo: [];
}

interface Row {
  readonly Data: [];
}

interface StartQueryExecutionInput {
  readonly QueryString: string;
  readonly ClientRequestToken: string;
  readonly QueryExecutionContext: QueryExecutionContext;
  readonly ResultConfiguration: ResultConfiguration;
  readonly WorkGroup: string;
}

interface StartQueryExecutionOutput {
  readonly QueryExecutionId: string;
}

interface StopQueryExecutionInput {
  readonly QueryExecutionId: string;
}

interface StopQueryExecutionOutput {
}

interface TableMetadata {
  readonly Name: string;
  readonly CreateTime: Date;
  readonly LastAccessTime: Date;
  readonly TableType: string;
  readonly Columns: [];
  readonly PartitionKeys: [];
  readonly Parameters: {[key: string]: any};
}

interface Tag {
  readonly Key: string;
  readonly Value: string;
}

interface TagResourceInput {
  readonly ResourceARN: string;
  readonly Tags: [];
}

interface TagResourceOutput {
}

interface TooManyRequestsException {
  readonly Message: string;
  readonly Reason: string;
}

interface UnprocessedNamedQueryId {
  readonly NamedQueryId: string;
  readonly ErrorCode: string;
  readonly ErrorMessage: string;
}

interface UnprocessedQueryExecutionId {
  readonly QueryExecutionId: string;
  readonly ErrorCode: string;
  readonly ErrorMessage: string;
}

interface UntagResourceInput {
  readonly ResourceARN: string;
  readonly TagKeys: [];
}

interface UntagResourceOutput {
}

interface UpdateDataCatalogInput {
  readonly Name: string;
  readonly Type: string;
  readonly Description: string;
  readonly Parameters: {[key: string]: any};
}

interface UpdateDataCatalogOutput {
}

interface UpdatePreparedStatementInput {
  readonly StatementName: string;
  readonly WorkGroup: string;
  readonly QueryStatement: string;
  readonly Description: string;
}

interface UpdatePreparedStatementOutput {
}

interface UpdateWorkGroupInput {
  readonly WorkGroup: string;
  readonly Description: string;
  readonly ConfigurationUpdates: WorkGroupConfigurationUpdates;
  readonly State: string;
}

interface UpdateWorkGroupOutput {
}

interface WorkGroup {
  readonly Name: string;
  readonly State: string;
  readonly Configuration: WorkGroupConfiguration;
  readonly Description: string;
  readonly CreationTime: Date;
}

interface WorkGroupConfiguration {
  readonly ResultConfiguration: ResultConfiguration;
  readonly EnforceWorkGroupConfiguration: boolean;
  readonly PublishCloudWatchMetricsEnabled: boolean;
  readonly BytesScannedCutoffPerQuery: number;
  readonly RequesterPaysEnabled: boolean;
  readonly EngineVersion: EngineVersion;
}

interface WorkGroupConfigurationUpdates {
  readonly EnforceWorkGroupConfiguration: boolean;
  readonly ResultConfigurationUpdates: ResultConfigurationUpdates;
  readonly PublishCloudWatchMetricsEnabled: boolean;
  readonly BytesScannedCutoffPerQuery: number;
  readonly RemoveBytesScannedCutoffPerQuery: boolean;
  readonly RequesterPaysEnabled: boolean;
  readonly EngineVersion: EngineVersion;
}

interface WorkGroupSummary {
  readonly Name: string;
  readonly State: string;
  readonly Description: string;
  readonly CreationTime: Date;
  readonly EngineVersion: EngineVersion;
}

