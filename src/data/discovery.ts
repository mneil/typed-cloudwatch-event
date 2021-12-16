/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface AssociateConfigurationItemsToApplication {
  readonly applicationConfigurationId: string;
  readonly configurationIds: [];
}
export interface BatchDeleteImportData {
  readonly importTaskIds: [];
}
export interface CreateApplication {
  readonly name: string;
  readonly description: string;
}
export interface CreateTags {
  readonly configurationIds: [];
  readonly tags: [];
}
export interface DeleteApplications {
  readonly configurationIds: [];
}
export interface DeleteTags {
  readonly configurationIds: [];
  readonly tags: [];
}
export interface DescribeAgents {
  readonly agentIds: [];
  readonly filters: [];
  readonly maxResults: number;
  readonly nextToken: string;
}
export interface DescribeConfigurations {
  readonly configurationIds: [];
}
export interface DescribeContinuousExports {
  readonly exportIds: [];
  readonly maxResults: number;
  readonly nextToken: string;
}
export interface DescribeExportConfigurations {
  readonly exportIds: [];
  readonly maxResults: number;
  readonly nextToken: string;
}
export interface DescribeExportTasks {
  readonly exportIds: [];
  readonly filters: [];
  readonly maxResults: number;
  readonly nextToken: string;
}
export interface DescribeImportTasks {
  readonly filters: [];
  readonly maxResults: number;
  readonly nextToken: string;
}
export interface DescribeTags {
  readonly filters: [];
  readonly maxResults: number;
  readonly nextToken: string;
}
export interface DisassociateConfigurationItemsFromApplication {
  readonly applicationConfigurationId: string;
  readonly configurationIds: [];
}
export interface GetDiscoverySummary {
}
export interface ListConfigurations {
  readonly configurationType: string;
  readonly filters: [];
  readonly maxResults: number;
  readonly nextToken: string;
  readonly orderBy: [];
}
export interface ListServerNeighbors {
  readonly configurationId: string;
  readonly portInformationNeeded: boolean;
  readonly neighborConfigurationIds: [];
  readonly maxResults: number;
  readonly nextToken: string;
}
export interface StartContinuousExport {
}
export interface StartDataCollectionByAgentIds {
  readonly agentIds: [];
}
export interface StartExportTask {
  readonly exportDataFormat: [];
  readonly filters: [];
  readonly startTime: Date;
  readonly endTime: Date;
}
export interface StartImportTask {
  readonly clientRequestToken: string;
  readonly name: string;
  readonly importUrl: string;
}
export interface StopContinuousExport {
  readonly exportId: string;
}
export interface StopDataCollectionByAgentIds {
  readonly agentIds: [];
}
export interface UpdateApplication {
  readonly configurationId: string;
  readonly name: string;
  readonly description: string;
}



interface AgentConfigurationStatus {
  readonly agentId: string;
  readonly operationSucceeded: boolean;
  readonly description: string;
}

interface AgentInfo {
  readonly agentId: string;
  readonly hostName: string;
  readonly agentNetworkInfoList: [];
  readonly connectorId: string;
  readonly version: string;
  readonly health: string;
  readonly lastHealthPingTime: string;
  readonly collectionStatus: string;
  readonly agentType: string;
  readonly registeredTime: string;
}

interface AgentNetworkInfo {
  readonly ipAddress: string;
  readonly macAddress: string;
}

interface AssociateConfigurationItemsToApplicationRequest {
  readonly applicationConfigurationId: string;
  readonly configurationIds: [];
}

interface AssociateConfigurationItemsToApplicationResponse {
}

interface AuthorizationErrorException {
  readonly message: string;
}

interface BatchDeleteImportDataError {
  readonly importTaskId: string;
  readonly errorCode: string;
  readonly errorDescription: string;
}

interface BatchDeleteImportDataRequest {
  readonly importTaskIds: [];
}

interface BatchDeleteImportDataResponse {
  readonly errors: [];
}

interface ConfigurationTag {
  readonly configurationType: string;
  readonly configurationId: string;
  readonly key: string;
  readonly value: string;
  readonly timeOfCreation: Date;
}

interface ConflictErrorException {
  readonly message: string;
}

interface ContinuousExportDescription {
  readonly exportId: string;
  readonly status: string;
  readonly statusDetail: string;
  readonly s3Bucket: string;
  readonly startTime: Date;
  readonly stopTime: Date;
  readonly dataSource: string;
  readonly schemaStorageConfig: {[key: string]: any};
}

interface CreateApplicationRequest {
  readonly name: string;
  readonly description: string;
}

interface CreateApplicationResponse {
  readonly configurationId: string;
}

interface CreateTagsRequest {
  readonly configurationIds: [];
  readonly tags: [];
}

interface CreateTagsResponse {
}

interface CustomerAgentInfo {
  readonly activeAgents: number;
  readonly healthyAgents: number;
  readonly blackListedAgents: number;
  readonly shutdownAgents: number;
  readonly unhealthyAgents: number;
  readonly totalAgents: number;
  readonly unknownAgents: number;
}

interface CustomerConnectorInfo {
  readonly activeConnectors: number;
  readonly healthyConnectors: number;
  readonly blackListedConnectors: number;
  readonly shutdownConnectors: number;
  readonly unhealthyConnectors: number;
  readonly totalConnectors: number;
  readonly unknownConnectors: number;
}

interface DeleteApplicationsRequest {
  readonly configurationIds: [];
}

interface DeleteApplicationsResponse {
}

interface DeleteTagsRequest {
  readonly configurationIds: [];
  readonly tags: [];
}

interface DeleteTagsResponse {
}

interface DescribeAgentsRequest {
  readonly agentIds: [];
  readonly filters: [];
  readonly maxResults: number;
  readonly nextToken: string;
}

interface DescribeAgentsResponse {
  readonly agentsInfo: [];
  readonly nextToken: string;
}

interface DescribeConfigurationsRequest {
  readonly configurationIds: [];
}

interface DescribeConfigurationsResponse {
  readonly configurations: [];
}

interface DescribeContinuousExportsRequest {
  readonly exportIds: [];
  readonly maxResults: number;
  readonly nextToken: string;
}

interface DescribeContinuousExportsResponse {
  readonly descriptions: [];
  readonly nextToken: string;
}

interface DescribeExportConfigurationsRequest {
  readonly exportIds: [];
  readonly maxResults: number;
  readonly nextToken: string;
}

interface DescribeExportConfigurationsResponse {
  readonly exportsInfo: [];
  readonly nextToken: string;
}

interface DescribeExportTasksRequest {
  readonly exportIds: [];
  readonly filters: [];
  readonly maxResults: number;
  readonly nextToken: string;
}

interface DescribeExportTasksResponse {
  readonly exportsInfo: [];
  readonly nextToken: string;
}

interface DescribeImportTasksRequest {
  readonly filters: [];
  readonly maxResults: number;
  readonly nextToken: string;
}

interface DescribeImportTasksResponse {
  readonly nextToken: string;
  readonly tasks: [];
}

interface DescribeTagsRequest {
  readonly filters: [];
  readonly maxResults: number;
  readonly nextToken: string;
}

interface DescribeTagsResponse {
  readonly tags: [];
  readonly nextToken: string;
}

interface DisassociateConfigurationItemsFromApplicationRequest {
  readonly applicationConfigurationId: string;
  readonly configurationIds: [];
}

interface DisassociateConfigurationItemsFromApplicationResponse {
}

interface ExportConfigurationsResponse {
  readonly exportId: string;
}

interface ExportFilter {
  readonly name: string;
  readonly values: [];
  readonly condition: string;
}

interface ExportInfo {
  readonly exportId: string;
  readonly exportStatus: string;
  readonly statusMessage: string;
  readonly configurationsDownloadUrl: string;
  readonly exportRequestTime: Date;
  readonly isTruncated: boolean;
  readonly requestedStartTime: Date;
  readonly requestedEndTime: Date;
}

interface Filter {
  readonly name: string;
  readonly values: [];
  readonly condition: string;
}

interface GetDiscoverySummaryRequest {
}

interface GetDiscoverySummaryResponse {
  readonly servers: number;
  readonly applications: number;
  readonly serversMappedToApplications: number;
  readonly serversMappedtoTags: number;
  readonly agentSummary: CustomerAgentInfo;
  readonly connectorSummary: CustomerConnectorInfo;
}

interface HomeRegionNotSetException {
  readonly message: string;
}

interface ImportTask {
  readonly importTaskId: string;
  readonly clientRequestToken: string;
  readonly name: string;
  readonly importUrl: string;
  readonly status: string;
  readonly importRequestTime: Date;
  readonly importCompletionTime: Date;
  readonly importDeletedTime: Date;
  readonly serverImportSuccess: number;
  readonly serverImportFailure: number;
  readonly applicationImportSuccess: number;
  readonly applicationImportFailure: number;
  readonly errorsAndFailedEntriesZip: string;
}

interface ImportTaskFilter {
  readonly name: string;
  readonly values: [];
}

interface InvalidParameterException {
  readonly message: string;
}

interface InvalidParameterValueException {
  readonly message: string;
}

interface ListConfigurationsRequest {
  readonly configurationType: string;
  readonly filters: [];
  readonly maxResults: number;
  readonly nextToken: string;
  readonly orderBy: [];
}

interface ListConfigurationsResponse {
  readonly configurations: [];
  readonly nextToken: string;
}

interface ListServerNeighborsRequest {
  readonly configurationId: string;
  readonly portInformationNeeded: boolean;
  readonly neighborConfigurationIds: [];
  readonly maxResults: number;
  readonly nextToken: string;
}

interface ListServerNeighborsResponse {
  readonly neighbors: [];
  readonly nextToken: string;
  readonly knownDependencyCount: number;
}

interface NeighborConnectionDetail {
  readonly sourceServerId: string;
  readonly destinationServerId: string;
  readonly destinationPort: number;
  readonly transportProtocol: string;
  readonly connectionsCount: number;
}

interface OperationNotPermittedException {
  readonly message: string;
}

interface OrderByElement {
  readonly fieldName: string;
  readonly sortOrder: string;
}

interface ResourceInUseException {
  readonly message: string;
}

interface ResourceNotFoundException {
  readonly message: string;
}

interface ServerInternalErrorException {
  readonly message: string;
}

interface StartContinuousExportRequest {
}

interface StartContinuousExportResponse {
  readonly exportId: string;
  readonly s3Bucket: string;
  readonly startTime: Date;
  readonly dataSource: string;
  readonly schemaStorageConfig: {[key: string]: any};
}

interface StartDataCollectionByAgentIdsRequest {
  readonly agentIds: [];
}

interface StartDataCollectionByAgentIdsResponse {
  readonly agentsConfigurationStatus: [];
}

interface StartExportTaskRequest {
  readonly exportDataFormat: [];
  readonly filters: [];
  readonly startTime: Date;
  readonly endTime: Date;
}

interface StartExportTaskResponse {
  readonly exportId: string;
}

interface StartImportTaskRequest {
  readonly clientRequestToken: string;
  readonly name: string;
  readonly importUrl: string;
}

interface StartImportTaskResponse {
  readonly task: ImportTask;
}

interface StopContinuousExportRequest {
  readonly exportId: string;
}

interface StopContinuousExportResponse {
  readonly startTime: Date;
  readonly stopTime: Date;
}

interface StopDataCollectionByAgentIdsRequest {
  readonly agentIds: [];
}

interface StopDataCollectionByAgentIdsResponse {
  readonly agentsConfigurationStatus: [];
}

interface Tag {
  readonly key: string;
  readonly value: string;
}

interface TagFilter {
  readonly name: string;
  readonly values: [];
}

interface UpdateApplicationRequest {
  readonly configurationId: string;
  readonly name: string;
  readonly description: string;
}

interface UpdateApplicationResponse {
}

