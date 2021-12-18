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
  readonly description?: string;
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
  readonly tags?: [];
}

export interface DescribeAgents {
  readonly agentIds?: [];
  readonly filters?: [];
  readonly maxResults?: number;
  readonly nextToken?: string;
}

export interface DescribeConfigurations {
  readonly configurationIds: [];
}

export interface DescribeContinuousExports {
  readonly exportIds?: [];
  readonly maxResults?: number;
  readonly nextToken?: string;
}

export interface DescribeExportConfigurations {
  readonly exportIds?: [];
  readonly maxResults?: number;
  readonly nextToken?: string;
}

export interface DescribeExportTasks {
  readonly exportIds?: [];
  readonly filters?: [];
  readonly maxResults?: number;
  readonly nextToken?: string;
}

export interface DescribeImportTasks {
  readonly filters?: [];
  readonly maxResults?: number;
  readonly nextToken?: string;
}

export interface DescribeTags {
  readonly filters?: [];
  readonly maxResults?: number;
  readonly nextToken?: string;
}

export interface DisassociateConfigurationItemsFromApplication {
  readonly applicationConfigurationId: string;
  readonly configurationIds: [];
}

export interface GetDiscoverySummary {
}

export interface ListConfigurations {
  readonly configurationType: string;
  readonly filters?: [];
  readonly maxResults?: number;
  readonly nextToken?: string;
  readonly orderBy?: [];
}

export interface ListServerNeighbors {
  readonly configurationId: string;
  readonly portInformationNeeded?: boolean;
  readonly neighborConfigurationIds?: [];
  readonly maxResults?: number;
  readonly nextToken?: string;
}

export interface StartContinuousExport {
}

export interface StartDataCollectionByAgentIds {
  readonly agentIds: [];
}

export interface StartExportTask {
  readonly exportDataFormat?: [];
  readonly filters?: [];
  readonly startTime?: Date;
  readonly endTime?: Date;
}

export interface StartImportTask {
  readonly clientRequestToken?: string;
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
  readonly name?: string;
  readonly description?: string;
}

export interface AgentConfigurationStatus {
  readonly agentId?: string;
  readonly operationSucceeded?: boolean;
  readonly description?: string;
}

export interface AgentInfo {
  readonly agentId?: string;
  readonly hostName?: string;
  readonly agentNetworkInfoList?: [];
  readonly connectorId?: string;
  readonly version?: string;
  readonly health?: string;
  readonly lastHealthPingTime?: string;
  readonly collectionStatus?: string;
  readonly agentType?: string;
  readonly registeredTime?: string;
}

export interface AgentNetworkInfo {
  readonly ipAddress?: string;
  readonly macAddress?: string;
}

export interface AssociateConfigurationItemsToApplicationRequest {
  readonly applicationConfigurationId: string;
  readonly configurationIds: [];
}

export interface AssociateConfigurationItemsToApplicationResponse {
}

export interface AuthorizationErrorException {
  readonly message?: string;
}

export interface BatchDeleteImportDataError {
  readonly importTaskId?: string;
  readonly errorCode?: string;
  readonly errorDescription?: string;
}

export interface BatchDeleteImportDataRequest {
  readonly importTaskIds: [];
}

export interface BatchDeleteImportDataResponse {
  readonly errors?: [];
}

export interface ConfigurationTag {
  readonly configurationType?: string;
  readonly configurationId?: string;
  readonly key?: string;
  readonly value?: string;
  readonly timeOfCreation?: Date;
}

export interface ConflictErrorException {
  readonly message?: string;
}

export interface ContinuousExportDescription {
  readonly exportId?: string;
  readonly status?: string;
  readonly statusDetail?: string;
  readonly s3Bucket?: string;
  readonly startTime?: Date;
  readonly stopTime?: Date;
  readonly dataSource?: string;
  readonly schemaStorageConfig?: {[key: string]: any};
}

export interface CreateApplicationRequest {
  readonly name: string;
  readonly description?: string;
}

export interface CreateApplicationResponse {
  readonly configurationId?: string;
}

export interface CreateTagsRequest {
  readonly configurationIds: [];
  readonly tags: [];
}

export interface CreateTagsResponse {
}

export interface CustomerAgentInfo {
  readonly activeAgents: number;
  readonly healthyAgents: number;
  readonly blackListedAgents: number;
  readonly shutdownAgents: number;
  readonly unhealthyAgents: number;
  readonly totalAgents: number;
  readonly unknownAgents: number;
}

export interface CustomerConnectorInfo {
  readonly activeConnectors: number;
  readonly healthyConnectors: number;
  readonly blackListedConnectors: number;
  readonly shutdownConnectors: number;
  readonly unhealthyConnectors: number;
  readonly totalConnectors: number;
  readonly unknownConnectors: number;
}

export interface DeleteApplicationsRequest {
  readonly configurationIds: [];
}

export interface DeleteApplicationsResponse {
}

export interface DeleteTagsRequest {
  readonly configurationIds: [];
  readonly tags?: [];
}

export interface DeleteTagsResponse {
}

export interface DescribeAgentsRequest {
  readonly agentIds?: [];
  readonly filters?: [];
  readonly maxResults?: number;
  readonly nextToken?: string;
}

export interface DescribeAgentsResponse {
  readonly agentsInfo?: [];
  readonly nextToken?: string;
}

export interface DescribeConfigurationsRequest {
  readonly configurationIds: [];
}

export interface DescribeConfigurationsResponse {
  readonly configurations?: [];
}

export interface DescribeContinuousExportsRequest {
  readonly exportIds?: [];
  readonly maxResults?: number;
  readonly nextToken?: string;
}

export interface DescribeContinuousExportsResponse {
  readonly descriptions?: [];
  readonly nextToken?: string;
}

export interface DescribeExportConfigurationsRequest {
  readonly exportIds?: [];
  readonly maxResults?: number;
  readonly nextToken?: string;
}

export interface DescribeExportConfigurationsResponse {
  readonly exportsInfo?: [];
  readonly nextToken?: string;
}

export interface DescribeExportTasksRequest {
  readonly exportIds?: [];
  readonly filters?: [];
  readonly maxResults?: number;
  readonly nextToken?: string;
}

export interface DescribeExportTasksResponse {
  readonly exportsInfo?: [];
  readonly nextToken?: string;
}

export interface DescribeImportTasksRequest {
  readonly filters?: [];
  readonly maxResults?: number;
  readonly nextToken?: string;
}

export interface DescribeImportTasksResponse {
  readonly nextToken?: string;
  readonly tasks?: [];
}

export interface DescribeTagsRequest {
  readonly filters?: [];
  readonly maxResults?: number;
  readonly nextToken?: string;
}

export interface DescribeTagsResponse {
  readonly tags?: [];
  readonly nextToken?: string;
}

export interface DisassociateConfigurationItemsFromApplicationRequest {
  readonly applicationConfigurationId: string;
  readonly configurationIds: [];
}

export interface DisassociateConfigurationItemsFromApplicationResponse {
}

export interface ExportConfigurationsResponse {
  readonly exportId?: string;
}

export interface ExportFilter {
  readonly name: string;
  readonly values: [];
  readonly condition: string;
}

export interface ExportInfo {
  readonly exportId: string;
  readonly exportStatus: string;
  readonly statusMessage: string;
  readonly configurationsDownloadUrl?: string;
  readonly exportRequestTime: Date;
  readonly isTruncated?: boolean;
  readonly requestedStartTime?: Date;
  readonly requestedEndTime?: Date;
}

export interface Filter {
  readonly name: string;
  readonly values: [];
  readonly condition: string;
}

export interface GetDiscoverySummaryRequest {
}

export interface GetDiscoverySummaryResponse {
  readonly servers?: number;
  readonly applications?: number;
  readonly serversMappedToApplications?: number;
  readonly serversMappedtoTags?: number;
  readonly agentSummary?: CustomerAgentInfo;
  readonly connectorSummary?: CustomerConnectorInfo;
}

export interface HomeRegionNotSetException {
  readonly message?: string;
}

export interface ImportTask {
  readonly importTaskId?: string;
  readonly clientRequestToken?: string;
  readonly name?: string;
  readonly importUrl?: string;
  readonly status?: string;
  readonly importRequestTime?: Date;
  readonly importCompletionTime?: Date;
  readonly importDeletedTime?: Date;
  readonly serverImportSuccess?: number;
  readonly serverImportFailure?: number;
  readonly applicationImportSuccess?: number;
  readonly applicationImportFailure?: number;
  readonly errorsAndFailedEntriesZip?: string;
}

export interface ImportTaskFilter {
  readonly name?: string;
  readonly values?: [];
}

export interface InvalidParameterException {
  readonly message?: string;
}

export interface InvalidParameterValueException {
  readonly message?: string;
}

export interface ListConfigurationsRequest {
  readonly configurationType: string;
  readonly filters?: [];
  readonly maxResults?: number;
  readonly nextToken?: string;
  readonly orderBy?: [];
}

export interface ListConfigurationsResponse {
  readonly configurations?: [];
  readonly nextToken?: string;
}

export interface ListServerNeighborsRequest {
  readonly configurationId: string;
  readonly portInformationNeeded?: boolean;
  readonly neighborConfigurationIds?: [];
  readonly maxResults?: number;
  readonly nextToken?: string;
}

export interface ListServerNeighborsResponse {
  readonly neighbors: [];
  readonly nextToken?: string;
  readonly knownDependencyCount?: number;
}

export interface NeighborConnectionDetail {
  readonly sourceServerId: string;
  readonly destinationServerId: string;
  readonly destinationPort?: number;
  readonly transportProtocol?: string;
  readonly connectionsCount: number;
}

export interface OperationNotPermittedException {
  readonly message?: string;
}

export interface OrderByElement {
  readonly fieldName: string;
  readonly sortOrder?: string;
}

export interface ResourceInUseException {
  readonly message?: string;
}

export interface ResourceNotFoundException {
  readonly message?: string;
}

export interface ServerInternalErrorException {
  readonly message?: string;
}

export interface StartContinuousExportRequest {
}

export interface StartContinuousExportResponse {
  readonly exportId?: string;
  readonly s3Bucket?: string;
  readonly startTime?: Date;
  readonly dataSource?: string;
  readonly schemaStorageConfig?: {[key: string]: any};
}

export interface StartDataCollectionByAgentIdsRequest {
  readonly agentIds: [];
}

export interface StartDataCollectionByAgentIdsResponse {
  readonly agentsConfigurationStatus?: [];
}

export interface StartExportTaskRequest {
  readonly exportDataFormat?: [];
  readonly filters?: [];
  readonly startTime?: Date;
  readonly endTime?: Date;
}

export interface StartExportTaskResponse {
  readonly exportId?: string;
}

export interface StartImportTaskRequest {
  readonly clientRequestToken?: string;
  readonly name: string;
  readonly importUrl: string;
}

export interface StartImportTaskResponse {
  readonly task?: ImportTask;
}

export interface StopContinuousExportRequest {
  readonly exportId: string;
}

export interface StopContinuousExportResponse {
  readonly startTime?: Date;
  readonly stopTime?: Date;
}

export interface StopDataCollectionByAgentIdsRequest {
  readonly agentIds: [];
}

export interface StopDataCollectionByAgentIdsResponse {
  readonly agentsConfigurationStatus?: [];
}

export interface Tag {
  readonly key: string;
  readonly value: string;
}

export interface TagFilter {
  readonly name: string;
  readonly values: [];
}

export interface UpdateApplicationRequest {
  readonly configurationId: string;
  readonly name?: string;
  readonly description?: string;
}

export interface UpdateApplicationResponse {
}


