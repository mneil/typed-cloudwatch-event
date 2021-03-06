/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface DeleteReportDefinition {
  readonly ReportName?: string;
}
export interface DescribeReportDefinitions {
  readonly MaxResults?: number;
  readonly NextToken?: string;
}
export interface ModifyReportDefinition {
  readonly ReportName: string;
  readonly ReportDefinition: ReportDefinition;
}
export interface PutReportDefinition {
  readonly ReportDefinition: ReportDefinition;
}



interface DeleteReportDefinitionRequest {
  readonly ReportName: string;
}

interface DeleteReportDefinitionResponse {
  readonly ResponseMessage: string;
}

interface DescribeReportDefinitionsRequest {
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface DescribeReportDefinitionsResponse {
  readonly ReportDefinitions: [];
  readonly NextToken: string;
}

interface DuplicateReportNameException {
  readonly Message: string;
}

interface InternalErrorException {
  readonly Message: string;
}

interface ModifyReportDefinitionRequest {
  readonly ReportName: string;
  readonly ReportDefinition: ReportDefinition;
}

interface ModifyReportDefinitionResponse {
}

interface PutReportDefinitionRequest {
  readonly ReportDefinition: ReportDefinition;
}

interface PutReportDefinitionResponse {
}

interface ReportDefinition {
  readonly ReportName: string;
  readonly TimeUnit: string;
  readonly Format: string;
  readonly Compression: string;
  readonly AdditionalSchemaElements: [];
  readonly S3Bucket: string;
  readonly S3Prefix: string;
  readonly S3Region: string;
  readonly AdditionalArtifacts: [];
  readonly RefreshClosedReports: boolean;
  readonly ReportVersioning: string;
  readonly BillingViewArn: string;
}

interface ReportLimitReachedException {
  readonly Message: string;
}

interface ValidationException {
  readonly Message: string;
}

