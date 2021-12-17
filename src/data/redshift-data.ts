/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface BatchExecuteStatement {
  readonly ClusterIdentifier?: string;
  readonly Database: string;
  readonly DbUser?: string;
  readonly SecretArn?: string;
  readonly Sqls: [];
  readonly StatementName?: string;
  readonly WithEvent?: boolean;
}
export interface CancelStatement {
  readonly Id: string;
}
export interface DescribeStatement {
  readonly Id: string;
}
export interface DescribeTable {
  readonly ClusterIdentifier?: string;
  readonly ConnectedDatabase?: string;
  readonly Database: string;
  readonly DbUser?: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
  readonly Schema?: string;
  readonly SecretArn?: string;
  readonly Table?: string;
}
export interface ExecuteStatement {
  readonly ClusterIdentifier?: string;
  readonly Database: string;
  readonly DbUser?: string;
  readonly Parameters?: [];
  readonly SecretArn?: string;
  readonly Sql: string;
  readonly StatementName?: string;
  readonly WithEvent?: boolean;
}
export interface GetStatementResult {
  readonly Id: string;
  readonly NextToken?: string;
}
export interface ListDatabases {
  readonly ClusterIdentifier?: string;
  readonly Database: string;
  readonly DbUser?: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
  readonly SecretArn?: string;
}
export interface ListSchemas {
  readonly ClusterIdentifier?: string;
  readonly ConnectedDatabase?: string;
  readonly Database: string;
  readonly DbUser?: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
  readonly SchemaPattern?: string;
  readonly SecretArn?: string;
}
export interface ListStatements {
  readonly MaxResults?: number;
  readonly NextToken?: string;
  readonly RoleLevel?: boolean;
  readonly StatementName?: string;
  readonly Status?: string;
}
export interface ListTables {
  readonly ClusterIdentifier?: string;
  readonly ConnectedDatabase?: string;
  readonly Database: string;
  readonly DbUser?: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
  readonly SchemaPattern?: string;
  readonly SecretArn?: string;
  readonly TablePattern?: string;
}



interface ActiveStatementsExceededException {
  readonly Message: string;
}

interface BatchExecuteStatementException {
  readonly Message: string;
  readonly StatementId: string;
}

interface BatchExecuteStatementInput {
  readonly ClusterIdentifier: string;
  readonly Database: string;
  readonly DbUser: string;
  readonly SecretArn: string;
  readonly Sqls: [];
  readonly StatementName: string;
  readonly WithEvent: boolean;
}

interface BatchExecuteStatementOutput {
  readonly ClusterIdentifier: string;
  readonly CreatedAt: Date;
  readonly Database: string;
  readonly DbUser: string;
  readonly Id: string;
  readonly SecretArn: string;
}

interface CancelStatementRequest {
  readonly Id: string;
}

interface CancelStatementResponse {
  readonly Status: boolean;
}

interface ColumnMetadata {
  readonly columnDefault: string;
  readonly isCaseSensitive: boolean;
  readonly isCurrency: boolean;
  readonly isSigned: boolean;
  readonly label: string;
  readonly length: number;
  readonly name: string;
  readonly nullable: number;
  readonly precision: number;
  readonly scale: number;
  readonly schemaName: string;
  readonly tableName: string;
  readonly typeName: string;
}

interface DatabaseConnectionException {
  readonly Message: string;
}

interface DescribeStatementRequest {
  readonly Id: string;
}

interface DescribeStatementResponse {
  readonly ClusterIdentifier: string;
  readonly CreatedAt: Date;
  readonly Database: string;
  readonly DbUser: string;
  readonly Duration: number;
  readonly Error: string;
  readonly HasResultSet: boolean;
  readonly Id: string;
  readonly QueryParameters: [];
  readonly QueryString: string;
  readonly RedshiftPid: number;
  readonly RedshiftQueryId: number;
  readonly ResultRows: number;
  readonly ResultSize: number;
  readonly SecretArn: string;
  readonly Status: string;
  readonly SubStatements: [];
  readonly UpdatedAt: Date;
}

interface DescribeTableRequest {
  readonly ClusterIdentifier: string;
  readonly ConnectedDatabase: string;
  readonly Database: string;
  readonly DbUser: string;
  readonly MaxResults: number;
  readonly NextToken: string;
  readonly Schema: string;
  readonly SecretArn: string;
  readonly Table: string;
}

interface DescribeTableResponse {
  readonly ColumnList: [];
  readonly NextToken: string;
  readonly TableName: string;
}

interface ExecuteStatementException {
  readonly Message: string;
  readonly StatementId: string;
}

interface ExecuteStatementInput {
  readonly ClusterIdentifier: string;
  readonly Database: string;
  readonly DbUser: string;
  readonly Parameters: [];
  readonly SecretArn: string;
  readonly Sql: string;
  readonly StatementName: string;
  readonly WithEvent: boolean;
}

interface ExecuteStatementOutput {
  readonly ClusterIdentifier: string;
  readonly CreatedAt: Date;
  readonly Database: string;
  readonly DbUser: string;
  readonly Id: string;
  readonly SecretArn: string;
}

interface Field {
  readonly blobValue: unknown;
  readonly booleanValue: boolean;
  readonly doubleValue: unknown;
  readonly isNull: boolean;
  readonly longValue: number;
  readonly stringValue: string;
}

interface GetStatementResultRequest {
  readonly Id: string;
  readonly NextToken: string;
}

interface GetStatementResultResponse {
  readonly ColumnMetadata: [];
  readonly NextToken: string;
  readonly Records: [];
  readonly TotalNumRows: number;
}

interface InternalServerException {
  readonly Message: string;
}

interface ListDatabasesRequest {
  readonly ClusterIdentifier: string;
  readonly Database: string;
  readonly DbUser: string;
  readonly MaxResults: number;
  readonly NextToken: string;
  readonly SecretArn: string;
}

interface ListDatabasesResponse {
  readonly Databases: [];
  readonly NextToken: string;
}

interface ListSchemasRequest {
  readonly ClusterIdentifier: string;
  readonly ConnectedDatabase: string;
  readonly Database: string;
  readonly DbUser: string;
  readonly MaxResults: number;
  readonly NextToken: string;
  readonly SchemaPattern: string;
  readonly SecretArn: string;
}

interface ListSchemasResponse {
  readonly NextToken: string;
  readonly Schemas: [];
}

interface ListStatementsRequest {
  readonly MaxResults: number;
  readonly NextToken: string;
  readonly RoleLevel: boolean;
  readonly StatementName: string;
  readonly Status: string;
}

interface ListStatementsResponse {
  readonly NextToken: string;
  readonly Statements: [];
}

interface ListTablesRequest {
  readonly ClusterIdentifier: string;
  readonly ConnectedDatabase: string;
  readonly Database: string;
  readonly DbUser: string;
  readonly MaxResults: number;
  readonly NextToken: string;
  readonly SchemaPattern: string;
  readonly SecretArn: string;
  readonly TablePattern: string;
}

interface ListTablesResponse {
  readonly NextToken: string;
  readonly Tables: [];
}

interface ResourceNotFoundException {
  readonly Message: string;
  readonly ResourceId: string;
}

interface SqlParameter {
  readonly name: string;
  readonly value: string;
}

interface StatementData {
  readonly CreatedAt: Date;
  readonly Id: string;
  readonly IsBatchStatement: boolean;
  readonly QueryParameters: [];
  readonly QueryString: string;
  readonly QueryStrings: [];
  readonly SecretArn: string;
  readonly StatementName: string;
  readonly Status: string;
  readonly UpdatedAt: Date;
}

interface SubStatementData {
  readonly CreatedAt: Date;
  readonly Duration: number;
  readonly Error: string;
  readonly HasResultSet: boolean;
  readonly Id: string;
  readonly QueryString: string;
  readonly RedshiftQueryId: number;
  readonly ResultRows: number;
  readonly ResultSize: number;
  readonly Status: string;
  readonly UpdatedAt: Date;
}

interface TableMember {
  readonly name: string;
  readonly schema: string;
  readonly type: string;
}

interface ValidationException {
  readonly Message: string;
}

