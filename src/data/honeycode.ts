/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface BatchCreateTableRows {
  readonly workbookId: string;
  readonly tableId: string;
  readonly rowsToCreate: [];
  readonly clientRequestToken?: string;
}
export interface BatchDeleteTableRows {
  readonly workbookId: string;
  readonly tableId: string;
  readonly rowIds: [];
  readonly clientRequestToken?: string;
}
export interface BatchUpdateTableRows {
  readonly workbookId: string;
  readonly tableId: string;
  readonly rowsToUpdate: [];
  readonly clientRequestToken?: string;
}
export interface BatchUpsertTableRows {
  readonly workbookId: string;
  readonly tableId: string;
  readonly rowsToUpsert: [];
  readonly clientRequestToken?: string;
}
export interface DescribeTableDataImportJob {
  readonly workbookId: string;
  readonly tableId: string;
  readonly jobId: string;
}
export interface GetScreenData {
  readonly workbookId: string;
  readonly appId: string;
  readonly screenId: string;
  readonly variables?: {[key: string]: any};
  readonly maxResults?: number;
  readonly nextToken?: string;
}
export interface InvokeScreenAutomation {
  readonly workbookId: string;
  readonly appId: string;
  readonly screenId: string;
  readonly screenAutomationId: string;
  readonly variables?: {[key: string]: any};
  readonly rowId?: string;
  readonly clientRequestToken?: string;
}
export interface ListTableColumns {
  readonly workbookId: string;
  readonly tableId: string;
  readonly nextToken?: string;
}
export interface ListTableRows {
  readonly workbookId: string;
  readonly tableId: string;
  readonly rowIds?: [];
  readonly maxResults?: number;
  readonly nextToken?: string;
}
export interface ListTables {
  readonly workbookId: string;
  readonly maxResults?: number;
  readonly nextToken?: string;
}
export interface QueryTableRows {
  readonly workbookId: string;
  readonly tableId: string;
  readonly filterFormula: Filter;
  readonly maxResults?: number;
  readonly nextToken?: string;
}
export interface StartTableDataImportJob {
  readonly workbookId: string;
  readonly dataSource: ImportDataSource;
  readonly dataFormat: string;
  readonly destinationTableId: string;
  readonly importOptions: ImportOptions;
  readonly clientRequestToken: string;
}



interface AccessDeniedException {
  readonly message: string;
}

interface AutomationExecutionException {
  readonly message: string;
}

interface AutomationExecutionTimeoutException {
  readonly message: string;
}

interface BatchCreateTableRowsRequest {
  readonly workbookId: string;
  readonly tableId: string;
  readonly rowsToCreate: [];
  readonly clientRequestToken: string;
}

interface BatchCreateTableRowsResult {
  readonly workbookCursor: number;
  readonly createdRows: {[key: string]: any};
  readonly failedBatchItems: [];
}

interface BatchDeleteTableRowsRequest {
  readonly workbookId: string;
  readonly tableId: string;
  readonly rowIds: [];
  readonly clientRequestToken: string;
}

interface BatchDeleteTableRowsResult {
  readonly workbookCursor: number;
  readonly failedBatchItems: [];
}

interface BatchUpdateTableRowsRequest {
  readonly workbookId: string;
  readonly tableId: string;
  readonly rowsToUpdate: [];
  readonly clientRequestToken: string;
}

interface BatchUpdateTableRowsResult {
  readonly workbookCursor: number;
  readonly failedBatchItems: [];
}

interface BatchUpsertTableRowsRequest {
  readonly workbookId: string;
  readonly tableId: string;
  readonly rowsToUpsert: [];
  readonly clientRequestToken: string;
}

interface BatchUpsertTableRowsResult {
  readonly rows: {[key: string]: any};
  readonly workbookCursor: number;
  readonly failedBatchItems: [];
}

interface Cell {
  readonly formula: string;
  readonly format: string;
  readonly rawValue: string;
  readonly formattedValue: string;
}

interface CellInput {
  readonly fact: string;
}

interface ColumnMetadata {
  readonly name: string;
  readonly format: string;
}

interface CreateRowData {
  readonly batchItemId: string;
  readonly cellsToCreate: {[key: string]: any};
}

interface DataItem {
  readonly overrideFormat: string;
  readonly rawValue: string;
  readonly formattedValue: string;
}

interface DelimitedTextImportOptions {
  readonly delimiter: string;
  readonly hasHeaderRow: boolean;
  readonly ignoreEmptyRows: boolean;
  readonly dataCharacterEncoding: string;
}

interface DescribeTableDataImportJobRequest {
  readonly workbookId: string;
  readonly tableId: string;
  readonly jobId: string;
}

interface DescribeTableDataImportJobResult {
  readonly jobStatus: string;
  readonly message: string;
  readonly jobMetadata: TableDataImportJobMetadata;
}

interface DestinationOptions {
  readonly columnMap: {[key: string]: any};
}

interface FailedBatchItem {
  readonly id: string;
  readonly errorMessage: string;
}

interface Filter {
  readonly formula: string;
  readonly contextRowId: string;
}

interface GetScreenDataRequest {
  readonly workbookId: string;
  readonly appId: string;
  readonly screenId: string;
  readonly variables: {[key: string]: any};
  readonly maxResults: number;
  readonly nextToken: string;
}

interface GetScreenDataResult {
  readonly results: {[key: string]: any};
  readonly workbookCursor: number;
  readonly nextToken: string;
}

interface ImportDataSource {
  readonly dataSourceConfig: ImportDataSourceConfig;
}

interface ImportDataSourceConfig {
  readonly dataSourceUrl: string;
}

interface ImportJobSubmitter {
  readonly email: string;
  readonly userArn: string;
}

interface ImportOptions {
  readonly destinationOptions: DestinationOptions;
  readonly delimitedTextOptions: DelimitedTextImportOptions;
}

interface InternalServerException {
  readonly message: string;
}

interface InvokeScreenAutomationRequest {
  readonly workbookId: string;
  readonly appId: string;
  readonly screenId: string;
  readonly screenAutomationId: string;
  readonly variables: {[key: string]: any};
  readonly rowId: string;
  readonly clientRequestToken: string;
}

interface InvokeScreenAutomationResult {
  readonly workbookCursor: number;
}

interface ListTableColumnsRequest {
  readonly workbookId: string;
  readonly tableId: string;
  readonly nextToken: string;
}

interface ListTableColumnsResult {
  readonly tableColumns: [];
  readonly nextToken: string;
  readonly workbookCursor: number;
}

interface ListTableRowsRequest {
  readonly workbookId: string;
  readonly tableId: string;
  readonly rowIds: [];
  readonly maxResults: number;
  readonly nextToken: string;
}

interface ListTableRowsResult {
  readonly columnIds: [];
  readonly rows: [];
  readonly rowIdsNotFound: [];
  readonly nextToken: string;
  readonly workbookCursor: number;
}

interface ListTablesRequest {
  readonly workbookId: string;
  readonly maxResults: number;
  readonly nextToken: string;
}

interface ListTablesResult {
  readonly tables: [];
  readonly nextToken: string;
  readonly workbookCursor: number;
}

interface QueryTableRowsRequest {
  readonly workbookId: string;
  readonly tableId: string;
  readonly filterFormula: Filter;
  readonly maxResults: number;
  readonly nextToken: string;
}

interface QueryTableRowsResult {
  readonly columnIds: [];
  readonly rows: [];
  readonly nextToken: string;
  readonly workbookCursor: number;
}

interface RequestTimeoutException {
  readonly message: string;
}

interface ResourceNotFoundException {
  readonly message: string;
}

interface ResultRow {
  readonly rowId: string;
  readonly dataItems: [];
}

interface ResultSet {
  readonly headers: [];
  readonly rows: [];
}

interface ServiceQuotaExceededException {
  readonly message: string;
}

interface ServiceUnavailableException {
  readonly message: string;
}

interface SourceDataColumnProperties {
  readonly columnIndex: number;
}

interface StartTableDataImportJobRequest {
  readonly workbookId: string;
  readonly dataSource: ImportDataSource;
  readonly dataFormat: string;
  readonly destinationTableId: string;
  readonly importOptions: ImportOptions;
  readonly clientRequestToken: string;
}

interface StartTableDataImportJobResult {
  readonly jobId: string;
  readonly jobStatus: string;
}

interface Table {
  readonly tableId: string;
  readonly tableName: string;
}

interface TableColumn {
  readonly tableColumnId: string;
  readonly tableColumnName: string;
  readonly format: string;
}

interface TableDataImportJobMetadata {
  readonly submitter: ImportJobSubmitter;
  readonly submitTime: Date;
  readonly importOptions: ImportOptions;
  readonly dataSource: ImportDataSource;
}

interface TableRow {
  readonly rowId: string;
  readonly cells: [];
}

interface ThrottlingException {
  readonly message: string;
}

interface UpdateRowData {
  readonly rowId: string;
  readonly cellsToUpdate: {[key: string]: any};
}

interface UpsertRowData {
  readonly batchItemId: string;
  readonly filter: Filter;
  readonly cellsToUpdate: {[key: string]: any};
}

interface UpsertRowsResult {
  readonly rowIds: [];
  readonly upsertAction: string;
}

interface ValidationException {
  readonly message: string;
}

interface VariableValue {
  readonly rawValue: string;
}

