/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface CreateConnectorProfile {
  readonly connectorProfileName: string;
  readonly kmsArn?: string;
  readonly connectorType: string;
  readonly connectionMode: string;
  readonly connectorProfileConfig: ConnectorProfileConfig;
}

export interface CreateFlow {
  readonly flowName: string;
  readonly description?: string;
  readonly kmsArn?: string;
  readonly triggerConfig: TriggerConfig;
  readonly sourceFlowConfig: SourceFlowConfig;
  readonly destinationFlowConfigList: [];
  readonly tasks: [];
  readonly tags?: {[key: string]: any};
}

export interface DeleteConnectorProfile {
  readonly connectorProfileName: string;
  readonly forceDelete?: boolean;
}

export interface DeleteFlow {
  readonly flowName: string;
  readonly forceDelete?: boolean;
}

export interface DescribeConnectorEntity {
  readonly connectorEntityName: string;
  readonly connectorType?: string;
  readonly connectorProfileName?: string;
}

export interface DescribeConnectorProfiles {
  readonly connectorProfileNames?: [];
  readonly connectorType?: string;
  readonly maxResults?: number;
  readonly nextToken?: string;
}

export interface DescribeConnectors {
  readonly connectorTypes?: [];
  readonly nextToken?: string;
}

export interface DescribeFlow {
  readonly flowName: string;
}

export interface DescribeFlowExecutionRecords {
  readonly flowName: string;
  readonly maxResults?: number;
  readonly nextToken?: string;
}

export interface ListConnectorEntities {
  readonly connectorProfileName?: string;
  readonly connectorType?: string;
  readonly entitiesPath?: string;
}

export interface ListFlows {
  readonly maxResults?: number;
  readonly nextToken?: string;
}

export interface ListTagsForResource {
  readonly resourceArn: string;
}

export interface StartFlow {
  readonly flowName: string;
}

export interface StopFlow {
  readonly flowName: string;
}

export interface TagResource {
  readonly resourceArn: string;
  readonly tags: {[key: string]: any};
}

export interface UntagResource {
  readonly resourceArn: string;
  readonly tagKeys: [];
}

export interface UpdateConnectorProfile {
  readonly connectorProfileName: string;
  readonly connectionMode: string;
  readonly connectorProfileConfig: ConnectorProfileConfig;
}

export interface UpdateFlow {
  readonly flowName: string;
  readonly description?: string;
  readonly triggerConfig: TriggerConfig;
  readonly sourceFlowConfig: SourceFlowConfig;
  readonly destinationFlowConfigList: [];
  readonly tasks: [];
}

export interface AggregationConfig {
  readonly aggregationType?: string;
}

export interface AmplitudeConnectorProfileCredentials {
  readonly apiKey: string;
  readonly secretKey: string;
}

export interface AmplitudeConnectorProfileProperties {
}

export interface AmplitudeMetadata {
}

export interface AmplitudeSourceProperties {
  readonly object: string;
}

export interface BasicAuthCredentials {
  readonly username: string;
  readonly password: string;
}

export interface ConflictException {
  readonly message?: string;
}

export interface ConnectorAuthenticationException {
  readonly message?: string;
}

export interface ConnectorConfiguration {
  readonly canUseAsSource?: boolean;
  readonly canUseAsDestination?: boolean;
  readonly supportedDestinationConnectors?: [];
  readonly supportedSchedulingFrequencies?: [];
  readonly isPrivateLinkEnabled?: boolean;
  readonly isPrivateLinkEndpointUrlRequired?: boolean;
  readonly supportedTriggerTypes?: [];
  readonly connectorMetadata?: ConnectorMetadata;
}

export interface ConnectorEntity {
  readonly name: string;
  readonly label?: string;
  readonly hasNestedEntities?: boolean;
}

export interface ConnectorEntityField {
  readonly identifier: string;
  readonly label?: string;
  readonly supportedFieldTypeDetails?: SupportedFieldTypeDetails;
  readonly description?: string;
  readonly sourceProperties?: SourceFieldProperties;
  readonly destinationProperties?: DestinationFieldProperties;
}

export interface ConnectorMetadata {
  readonly Amplitude?: AmplitudeMetadata;
  readonly Datadog?: DatadogMetadata;
  readonly Dynatrace?: DynatraceMetadata;
  readonly GoogleAnalytics?: GoogleAnalyticsMetadata;
  readonly InforNexus?: InforNexusMetadata;
  readonly Marketo?: MarketoMetadata;
  readonly Redshift?: RedshiftMetadata;
  readonly S3?: S3Metadata;
  readonly Salesforce?: SalesforceMetadata;
  readonly ServiceNow?: ServiceNowMetadata;
  readonly Singular?: SingularMetadata;
  readonly Slack?: SlackMetadata;
  readonly Snowflake?: SnowflakeMetadata;
  readonly Trendmicro?: TrendmicroMetadata;
  readonly Veeva?: VeevaMetadata;
  readonly Zendesk?: ZendeskMetadata;
  readonly EventBridge?: EventBridgeMetadata;
  readonly Upsolver?: UpsolverMetadata;
  readonly CustomerProfiles?: CustomerProfilesMetadata;
  readonly Honeycode?: HoneycodeMetadata;
  readonly SAPOData?: SAPODataMetadata;
}

export interface ConnectorOAuthRequest {
  readonly authCode?: string;
  readonly redirectUri?: string;
}

export interface ConnectorOperator {
  readonly Amplitude?: string;
  readonly Datadog?: string;
  readonly Dynatrace?: string;
  readonly GoogleAnalytics?: string;
  readonly InforNexus?: string;
  readonly Marketo?: string;
  readonly S3?: string;
  readonly Salesforce?: string;
  readonly ServiceNow?: string;
  readonly Singular?: string;
  readonly Slack?: string;
  readonly Trendmicro?: string;
  readonly Veeva?: string;
  readonly Zendesk?: string;
  readonly SAPOData?: string;
}

export interface ConnectorProfile {
  readonly connectorProfileArn?: string;
  readonly connectorProfileName?: string;
  readonly connectorType?: string;
  readonly connectionMode?: string;
  readonly credentialsArn?: string;
  readonly connectorProfileProperties?: ConnectorProfileProperties;
  readonly createdAt?: Date;
  readonly lastUpdatedAt?: Date;
  readonly privateConnectionProvisioningState?: PrivateConnectionProvisioningState;
}

export interface ConnectorProfileConfig {
  readonly connectorProfileProperties: ConnectorProfileProperties;
  readonly connectorProfileCredentials: ConnectorProfileCredentials;
}

export interface ConnectorProfileCredentials {
  readonly Amplitude?: AmplitudeConnectorProfileCredentials;
  readonly Datadog?: DatadogConnectorProfileCredentials;
  readonly Dynatrace?: DynatraceConnectorProfileCredentials;
  readonly GoogleAnalytics?: GoogleAnalyticsConnectorProfileCredentials;
  readonly Honeycode?: HoneycodeConnectorProfileCredentials;
  readonly InforNexus?: InforNexusConnectorProfileCredentials;
  readonly Marketo?: MarketoConnectorProfileCredentials;
  readonly Redshift?: RedshiftConnectorProfileCredentials;
  readonly Salesforce?: SalesforceConnectorProfileCredentials;
  readonly ServiceNow?: ServiceNowConnectorProfileCredentials;
  readonly Singular?: SingularConnectorProfileCredentials;
  readonly Slack?: SlackConnectorProfileCredentials;
  readonly Snowflake?: SnowflakeConnectorProfileCredentials;
  readonly Trendmicro?: TrendmicroConnectorProfileCredentials;
  readonly Veeva?: VeevaConnectorProfileCredentials;
  readonly Zendesk?: ZendeskConnectorProfileCredentials;
  readonly SAPOData?: SAPODataConnectorProfileCredentials;
}

export interface ConnectorProfileProperties {
  readonly Amplitude?: AmplitudeConnectorProfileProperties;
  readonly Datadog?: DatadogConnectorProfileProperties;
  readonly Dynatrace?: DynatraceConnectorProfileProperties;
  readonly GoogleAnalytics?: GoogleAnalyticsConnectorProfileProperties;
  readonly Honeycode?: HoneycodeConnectorProfileProperties;
  readonly InforNexus?: InforNexusConnectorProfileProperties;
  readonly Marketo?: MarketoConnectorProfileProperties;
  readonly Redshift?: RedshiftConnectorProfileProperties;
  readonly Salesforce?: SalesforceConnectorProfileProperties;
  readonly ServiceNow?: ServiceNowConnectorProfileProperties;
  readonly Singular?: SingularConnectorProfileProperties;
  readonly Slack?: SlackConnectorProfileProperties;
  readonly Snowflake?: SnowflakeConnectorProfileProperties;
  readonly Trendmicro?: TrendmicroConnectorProfileProperties;
  readonly Veeva?: VeevaConnectorProfileProperties;
  readonly Zendesk?: ZendeskConnectorProfileProperties;
  readonly SAPOData?: SAPODataConnectorProfileProperties;
}

export interface ConnectorServerException {
  readonly message?: string;
}

export interface CreateConnectorProfileRequest {
  readonly connectorProfileName: string;
  readonly kmsArn?: string;
  readonly connectorType: string;
  readonly connectionMode: string;
  readonly connectorProfileConfig: ConnectorProfileConfig;
}

export interface CreateConnectorProfileResponse {
  readonly connectorProfileArn?: string;
}

export interface CreateFlowRequest {
  readonly flowName: string;
  readonly description?: string;
  readonly kmsArn?: string;
  readonly triggerConfig: TriggerConfig;
  readonly sourceFlowConfig: SourceFlowConfig;
  readonly destinationFlowConfigList: [];
  readonly tasks: [];
  readonly tags?: {[key: string]: any};
}

export interface CreateFlowResponse {
  readonly flowArn?: string;
  readonly flowStatus?: string;
}

export interface CustomerProfilesDestinationProperties {
  readonly domainName: string;
  readonly objectTypeName?: string;
}

export interface CustomerProfilesMetadata {
}

export interface DatadogConnectorProfileCredentials {
  readonly apiKey: string;
  readonly applicationKey: string;
}

export interface DatadogConnectorProfileProperties {
  readonly instanceUrl: string;
}

export interface DatadogMetadata {
}

export interface DatadogSourceProperties {
  readonly object: string;
}

export interface DeleteConnectorProfileRequest {
  readonly connectorProfileName: string;
  readonly forceDelete?: boolean;
}

export interface DeleteConnectorProfileResponse {
}

export interface DeleteFlowRequest {
  readonly flowName: string;
  readonly forceDelete?: boolean;
}

export interface DeleteFlowResponse {
}

export interface DescribeConnectorEntityRequest {
  readonly connectorEntityName: string;
  readonly connectorType?: string;
  readonly connectorProfileName?: string;
}

export interface DescribeConnectorEntityResponse {
  readonly connectorEntityFields: [];
}

export interface DescribeConnectorProfilesRequest {
  readonly connectorProfileNames?: [];
  readonly connectorType?: string;
  readonly maxResults?: number;
  readonly nextToken?: string;
}

export interface DescribeConnectorProfilesResponse {
  readonly connectorProfileDetails?: [];
  readonly nextToken?: string;
}

export interface DescribeConnectorsRequest {
  readonly connectorTypes?: [];
  readonly nextToken?: string;
}

export interface DescribeConnectorsResponse {
  readonly connectorConfigurations?: {[key: string]: any};
  readonly nextToken?: string;
}

export interface DescribeFlowExecutionRecordsRequest {
  readonly flowName: string;
  readonly maxResults?: number;
  readonly nextToken?: string;
}

export interface DescribeFlowExecutionRecordsResponse {
  readonly flowExecutions?: [];
  readonly nextToken?: string;
}

export interface DescribeFlowRequest {
  readonly flowName: string;
}

export interface DescribeFlowResponse {
  readonly flowArn?: string;
  readonly description?: string;
  readonly flowName?: string;
  readonly kmsArn?: string;
  readonly flowStatus?: string;
  readonly flowStatusMessage?: string;
  readonly sourceFlowConfig?: SourceFlowConfig;
  readonly destinationFlowConfigList?: [];
  readonly lastRunExecutionDetails?: ExecutionDetails;
  readonly triggerConfig?: TriggerConfig;
  readonly tasks?: [];
  readonly createdAt?: Date;
  readonly lastUpdatedAt?: Date;
  readonly createdBy?: string;
  readonly lastUpdatedBy?: string;
  readonly tags?: {[key: string]: any};
}

export interface DestinationConnectorProperties {
  readonly Redshift?: RedshiftDestinationProperties;
  readonly S3?: S3DestinationProperties;
  readonly Salesforce?: SalesforceDestinationProperties;
  readonly Snowflake?: SnowflakeDestinationProperties;
  readonly EventBridge?: EventBridgeDestinationProperties;
  readonly LookoutMetrics?: LookoutMetricsDestinationProperties;
  readonly Upsolver?: UpsolverDestinationProperties;
  readonly Honeycode?: HoneycodeDestinationProperties;
  readonly CustomerProfiles?: CustomerProfilesDestinationProperties;
  readonly Zendesk?: ZendeskDestinationProperties;
}

export interface DestinationFieldProperties {
  readonly isCreatable?: boolean;
  readonly isNullable?: boolean;
  readonly isUpsertable?: boolean;
  readonly isUpdatable?: boolean;
  readonly supportedWriteOperations?: [];
}

export interface DestinationFlowConfig {
  readonly connectorType: string;
  readonly connectorProfileName?: string;
  readonly destinationConnectorProperties: DestinationConnectorProperties;
}

export interface DynatraceConnectorProfileCredentials {
  readonly apiToken: string;
}

export interface DynatraceConnectorProfileProperties {
  readonly instanceUrl: string;
}

export interface DynatraceMetadata {
}

export interface DynatraceSourceProperties {
  readonly object: string;
}

export interface ErrorHandlingConfig {
  readonly failOnFirstDestinationError?: boolean;
  readonly bucketPrefix?: string;
  readonly bucketName?: string;
}

export interface ErrorInfo {
  readonly putFailuresCount?: number;
  readonly executionMessage?: string;
}

export interface EventBridgeDestinationProperties {
  readonly object: string;
  readonly errorHandlingConfig?: ErrorHandlingConfig;
}

export interface EventBridgeMetadata {
}

export interface ExecutionDetails {
  readonly mostRecentExecutionMessage?: string;
  readonly mostRecentExecutionTime?: Date;
  readonly mostRecentExecutionStatus?: string;
}

export interface ExecutionRecord {
  readonly executionId?: string;
  readonly executionStatus?: string;
  readonly executionResult?: ExecutionResult;
  readonly startedAt?: Date;
  readonly lastUpdatedAt?: Date;
  readonly dataPullStartTime?: Date;
  readonly dataPullEndTime?: Date;
}

export interface ExecutionResult {
  readonly errorInfo?: ErrorInfo;
  readonly bytesProcessed?: number;
  readonly bytesWritten?: number;
  readonly recordsProcessed?: number;
}

export interface FieldTypeDetails {
  readonly fieldType: string;
  readonly filterOperators: [];
  readonly supportedValues?: [];
}

export interface FlowDefinition {
  readonly flowArn?: string;
  readonly description?: string;
  readonly flowName?: string;
  readonly flowStatus?: string;
  readonly sourceConnectorType?: string;
  readonly destinationConnectorType?: string;
  readonly triggerType?: string;
  readonly createdAt?: Date;
  readonly lastUpdatedAt?: Date;
  readonly createdBy?: string;
  readonly lastUpdatedBy?: string;
  readonly tags?: {[key: string]: any};
  readonly lastRunExecutionDetails?: ExecutionDetails;
}

export interface GoogleAnalyticsConnectorProfileCredentials {
  readonly clientId: string;
  readonly clientSecret: string;
  readonly accessToken?: string;
  readonly refreshToken?: string;
  readonly oAuthRequest?: ConnectorOAuthRequest;
}

export interface GoogleAnalyticsConnectorProfileProperties {
}

export interface GoogleAnalyticsMetadata {
  readonly oAuthScopes?: [];
}

export interface GoogleAnalyticsSourceProperties {
  readonly object: string;
}

export interface HoneycodeConnectorProfileCredentials {
  readonly accessToken?: string;
  readonly refreshToken?: string;
  readonly oAuthRequest?: ConnectorOAuthRequest;
}

export interface HoneycodeConnectorProfileProperties {
}

export interface HoneycodeDestinationProperties {
  readonly object: string;
  readonly errorHandlingConfig?: ErrorHandlingConfig;
}

export interface HoneycodeMetadata {
  readonly oAuthScopes?: [];
}

export interface IncrementalPullConfig {
  readonly datetimeTypeFieldName?: string;
}

export interface InforNexusConnectorProfileCredentials {
  readonly accessKeyId: string;
  readonly userId: string;
  readonly secretAccessKey: string;
  readonly datakey: string;
}

export interface InforNexusConnectorProfileProperties {
  readonly instanceUrl: string;
}

export interface InforNexusMetadata {
}

export interface InforNexusSourceProperties {
  readonly object: string;
}

export interface InternalServerException {
  readonly message?: string;
}

export interface ListConnectorEntitiesRequest {
  readonly connectorProfileName?: string;
  readonly connectorType?: string;
  readonly entitiesPath?: string;
}

export interface ListConnectorEntitiesResponse {
  readonly connectorEntityMap: {[key: string]: any};
}

export interface ListFlowsRequest {
  readonly maxResults?: number;
  readonly nextToken?: string;
}

export interface ListFlowsResponse {
  readonly flows?: [];
  readonly nextToken?: string;
}

export interface ListTagsForResourceRequest {
  readonly resourceArn: string;
}

export interface ListTagsForResourceResponse {
  readonly tags?: {[key: string]: any};
}

export interface LookoutMetricsDestinationProperties {
}

export interface MarketoConnectorProfileCredentials {
  readonly clientId: string;
  readonly clientSecret: string;
  readonly accessToken?: string;
  readonly oAuthRequest?: ConnectorOAuthRequest;
}

export interface MarketoConnectorProfileProperties {
  readonly instanceUrl: string;
}

export interface MarketoMetadata {
}

export interface MarketoSourceProperties {
  readonly object: string;
}

export interface OAuthCredentials {
  readonly clientId: string;
  readonly clientSecret: string;
  readonly accessToken?: string;
  readonly refreshToken?: string;
  readonly oAuthRequest?: ConnectorOAuthRequest;
}

export interface OAuthProperties {
  readonly tokenUrl: string;
  readonly authCodeUrl: string;
  readonly oAuthScopes: [];
}

export interface PrefixConfig {
  readonly prefixType?: string;
  readonly prefixFormat?: string;
}

export interface PrivateConnectionProvisioningState {
  readonly status?: string;
  readonly failureMessage?: string;
  readonly failureCause?: string;
}

export interface RedshiftConnectorProfileCredentials {
  readonly username: string;
  readonly password: string;
}

export interface RedshiftConnectorProfileProperties {
  readonly databaseUrl: string;
  readonly bucketName: string;
  readonly bucketPrefix?: string;
  readonly roleArn: string;
}

export interface RedshiftDestinationProperties {
  readonly object: string;
  readonly intermediateBucketName: string;
  readonly bucketPrefix?: string;
  readonly errorHandlingConfig?: ErrorHandlingConfig;
}

export interface RedshiftMetadata {
}

export interface ResourceNotFoundException {
  readonly message?: string;
}

export interface S3DestinationProperties {
  readonly bucketName: string;
  readonly bucketPrefix?: string;
  readonly s3OutputFormatConfig?: S3OutputFormatConfig;
}

export interface S3InputFormatConfig {
  readonly s3InputFileType?: string;
}

export interface S3Metadata {
}

export interface S3OutputFormatConfig {
  readonly fileType?: string;
  readonly prefixConfig?: PrefixConfig;
  readonly aggregationConfig?: AggregationConfig;
}

export interface S3SourceProperties {
  readonly bucketName: string;
  readonly bucketPrefix?: string;
  readonly s3InputFormatConfig?: S3InputFormatConfig;
}

export interface SAPODataConnectorProfileCredentials {
  readonly basicAuthCredentials?: BasicAuthCredentials;
  readonly oAuthCredentials?: OAuthCredentials;
}

export interface SAPODataConnectorProfileProperties {
  readonly applicationHostUrl: string;
  readonly applicationServicePath: string;
  readonly portNumber: number;
  readonly clientNumber: string;
  readonly logonLanguage?: string;
  readonly privateLinkServiceName?: string;
  readonly oAuthProperties?: OAuthProperties;
}

export interface SAPODataMetadata {
}

export interface SAPODataSourceProperties {
  readonly objectPath?: string;
}

export interface SalesforceConnectorProfileCredentials {
  readonly accessToken?: string;
  readonly refreshToken?: string;
  readonly oAuthRequest?: ConnectorOAuthRequest;
  readonly clientCredentialsArn?: string;
}

export interface SalesforceConnectorProfileProperties {
  readonly instanceUrl?: string;
  readonly isSandboxEnvironment?: boolean;
}

export interface SalesforceDestinationProperties {
  readonly object: string;
  readonly idFieldNames?: [];
  readonly errorHandlingConfig?: ErrorHandlingConfig;
  readonly writeOperationType?: string;
}

export interface SalesforceMetadata {
  readonly oAuthScopes?: [];
}

export interface SalesforceSourceProperties {
  readonly object: string;
  readonly enableDynamicFieldUpdate?: boolean;
  readonly includeDeletedRecords?: boolean;
}

export interface ScheduledTriggerProperties {
  readonly scheduleExpression: string;
  readonly dataPullMode?: string;
  readonly scheduleStartTime?: Date;
  readonly scheduleEndTime?: Date;
  readonly timezone?: string;
  readonly scheduleOffset?: number;
  readonly firstExecutionFrom?: Date;
}

export interface ServiceNowConnectorProfileCredentials {
  readonly username: string;
  readonly password: string;
}

export interface ServiceNowConnectorProfileProperties {
  readonly instanceUrl: string;
}

export interface ServiceNowMetadata {
}

export interface ServiceNowSourceProperties {
  readonly object: string;
}

export interface ServiceQuotaExceededException {
  readonly message?: string;
}

export interface SingularConnectorProfileCredentials {
  readonly apiKey: string;
}

export interface SingularConnectorProfileProperties {
}

export interface SingularMetadata {
}

export interface SingularSourceProperties {
  readonly object: string;
}

export interface SlackConnectorProfileCredentials {
  readonly clientId: string;
  readonly clientSecret: string;
  readonly accessToken?: string;
  readonly oAuthRequest?: ConnectorOAuthRequest;
}

export interface SlackConnectorProfileProperties {
  readonly instanceUrl: string;
}

export interface SlackMetadata {
  readonly oAuthScopes?: [];
}

export interface SlackSourceProperties {
  readonly object: string;
}

export interface SnowflakeConnectorProfileCredentials {
  readonly username: string;
  readonly password: string;
}

export interface SnowflakeConnectorProfileProperties {
  readonly warehouse: string;
  readonly stage: string;
  readonly bucketName: string;
  readonly bucketPrefix?: string;
  readonly privateLinkServiceName?: string;
  readonly accountName?: string;
  readonly region?: string;
}

export interface SnowflakeDestinationProperties {
  readonly object: string;
  readonly intermediateBucketName: string;
  readonly bucketPrefix?: string;
  readonly errorHandlingConfig?: ErrorHandlingConfig;
}

export interface SnowflakeMetadata {
  readonly supportedRegions?: [];
}

export interface SourceConnectorProperties {
  readonly Amplitude?: AmplitudeSourceProperties;
  readonly Datadog?: DatadogSourceProperties;
  readonly Dynatrace?: DynatraceSourceProperties;
  readonly GoogleAnalytics?: GoogleAnalyticsSourceProperties;
  readonly InforNexus?: InforNexusSourceProperties;
  readonly Marketo?: MarketoSourceProperties;
  readonly S3?: S3SourceProperties;
  readonly Salesforce?: SalesforceSourceProperties;
  readonly ServiceNow?: ServiceNowSourceProperties;
  readonly Singular?: SingularSourceProperties;
  readonly Slack?: SlackSourceProperties;
  readonly Trendmicro?: TrendmicroSourceProperties;
  readonly Veeva?: VeevaSourceProperties;
  readonly Zendesk?: ZendeskSourceProperties;
  readonly SAPOData?: SAPODataSourceProperties;
}

export interface SourceFieldProperties {
  readonly isRetrievable?: boolean;
  readonly isQueryable?: boolean;
}

export interface SourceFlowConfig {
  readonly connectorType: string;
  readonly connectorProfileName?: string;
  readonly sourceConnectorProperties: SourceConnectorProperties;
  readonly incrementalPullConfig?: IncrementalPullConfig;
}

export interface StartFlowRequest {
  readonly flowName: string;
}

export interface StartFlowResponse {
  readonly flowArn?: string;
  readonly flowStatus?: string;
  readonly executionId?: string;
}

export interface StopFlowRequest {
  readonly flowName: string;
}

export interface StopFlowResponse {
  readonly flowArn?: string;
  readonly flowStatus?: string;
}

export interface SupportedFieldTypeDetails {
  readonly v1: FieldTypeDetails;
}

export interface TagResourceRequest {
  readonly resourceArn: string;
  readonly tags: {[key: string]: any};
}

export interface TagResourceResponse {
}

export interface Task {
  readonly sourceFields: [];
  readonly connectorOperator?: ConnectorOperator;
  readonly destinationField?: string;
  readonly taskType: string;
  readonly taskProperties?: {[key: string]: any};
}

export interface TrendmicroConnectorProfileCredentials {
  readonly apiSecretKey: string;
}

export interface TrendmicroConnectorProfileProperties {
}

export interface TrendmicroMetadata {
}

export interface TrendmicroSourceProperties {
  readonly object: string;
}

export interface TriggerConfig {
  readonly triggerType: string;
  readonly triggerProperties?: TriggerProperties;
}

export interface TriggerProperties {
  readonly Scheduled?: ScheduledTriggerProperties;
}

export interface UnsupportedOperationException {
  readonly message?: string;
}

export interface UntagResourceRequest {
  readonly resourceArn: string;
  readonly tagKeys: [];
}

export interface UntagResourceResponse {
}

export interface UpdateConnectorProfileRequest {
  readonly connectorProfileName: string;
  readonly connectionMode: string;
  readonly connectorProfileConfig: ConnectorProfileConfig;
}

export interface UpdateConnectorProfileResponse {
  readonly connectorProfileArn?: string;
}

export interface UpdateFlowRequest {
  readonly flowName: string;
  readonly description?: string;
  readonly triggerConfig: TriggerConfig;
  readonly sourceFlowConfig: SourceFlowConfig;
  readonly destinationFlowConfigList: [];
  readonly tasks: [];
}

export interface UpdateFlowResponse {
  readonly flowStatus?: string;
}

export interface UpsolverDestinationProperties {
  readonly bucketName: string;
  readonly bucketPrefix?: string;
  readonly s3OutputFormatConfig: UpsolverS3OutputFormatConfig;
}

export interface UpsolverMetadata {
}

export interface UpsolverS3OutputFormatConfig {
  readonly fileType?: string;
  readonly prefixConfig: PrefixConfig;
  readonly aggregationConfig?: AggregationConfig;
}

export interface ValidationException {
  readonly message?: string;
}

export interface VeevaConnectorProfileCredentials {
  readonly username: string;
  readonly password: string;
}

export interface VeevaConnectorProfileProperties {
  readonly instanceUrl: string;
}

export interface VeevaMetadata {
}

export interface VeevaSourceProperties {
  readonly object: string;
  readonly documentType?: string;
  readonly includeSourceFiles?: boolean;
  readonly includeRenditions?: boolean;
  readonly includeAllVersions?: boolean;
}

export interface ZendeskConnectorProfileCredentials {
  readonly clientId: string;
  readonly clientSecret: string;
  readonly accessToken?: string;
  readonly oAuthRequest?: ConnectorOAuthRequest;
}

export interface ZendeskConnectorProfileProperties {
  readonly instanceUrl: string;
}

export interface ZendeskDestinationProperties {
  readonly object: string;
  readonly idFieldNames?: [];
  readonly errorHandlingConfig?: ErrorHandlingConfig;
  readonly writeOperationType?: string;
}

export interface ZendeskMetadata {
  readonly oAuthScopes?: [];
}

export interface ZendeskSourceProperties {
  readonly object: string;
}


