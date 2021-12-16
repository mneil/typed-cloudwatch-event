/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface ActivateEventSource {
  readonly Name: string;
}
export interface CancelReplay {
  readonly ReplayName: string;
}
export interface CreateApiDestination {
  readonly Name: string;
  readonly Description: string;
  readonly ConnectionArn: string;
  readonly InvocationEndpoint: string;
  readonly HttpMethod: string;
  readonly InvocationRateLimitPerSecond: number;
}
export interface CreateArchive {
  readonly ArchiveName: string;
  readonly EventSourceArn: string;
  readonly Description: string;
  readonly EventPattern: string;
  readonly RetentionDays: number;
}
export interface CreateConnection {
  readonly Name: string;
  readonly Description: string;
  readonly AuthorizationType: string;
  readonly AuthParameters: CreateConnectionAuthRequestParameters;
}
export interface CreateEventBus {
  readonly Name: string;
  readonly EventSourceName: string;
  readonly Tags: [];
}
export interface CreatePartnerEventSource {
  readonly Name: string;
  readonly Account: string;
}
export interface DeactivateEventSource {
  readonly Name: string;
}
export interface DeauthorizeConnection {
  readonly Name: string;
}
export interface DeleteApiDestination {
  readonly Name: string;
}
export interface DeleteArchive {
  readonly ArchiveName: string;
}
export interface DeleteConnection {
  readonly Name: string;
}
export interface DeleteEventBus {
  readonly Name: string;
}
export interface DeletePartnerEventSource {
  readonly Name: string;
  readonly Account: string;
}
export interface DeleteRule {
  readonly Name: string;
  readonly EventBusName: string;
  readonly Force: boolean;
}
export interface DescribeApiDestination {
  readonly Name: string;
}
export interface DescribeArchive {
  readonly ArchiveName: string;
}
export interface DescribeConnection {
  readonly Name: string;
}
export interface DescribeEventBus {
  readonly Name: string;
}
export interface DescribeEventSource {
  readonly Name: string;
}
export interface DescribePartnerEventSource {
  readonly Name: string;
}
export interface DescribeReplay {
  readonly ReplayName: string;
}
export interface DescribeRule {
  readonly Name: string;
  readonly EventBusName: string;
}
export interface DisableRule {
  readonly Name: string;
  readonly EventBusName: string;
}
export interface EnableRule {
  readonly Name: string;
  readonly EventBusName: string;
}
export interface ListApiDestinations {
  readonly NamePrefix: string;
  readonly ConnectionArn: string;
  readonly NextToken: string;
  readonly Limit: number;
}
export interface ListArchives {
  readonly NamePrefix: string;
  readonly EventSourceArn: string;
  readonly State: string;
  readonly NextToken: string;
  readonly Limit: number;
}
export interface ListConnections {
  readonly NamePrefix: string;
  readonly ConnectionState: string;
  readonly NextToken: string;
  readonly Limit: number;
}
export interface ListEventBuses {
  readonly NamePrefix: string;
  readonly NextToken: string;
  readonly Limit: number;
}
export interface ListEventSources {
  readonly NamePrefix: string;
  readonly NextToken: string;
  readonly Limit: number;
}
export interface ListPartnerEventSourceAccounts {
  readonly EventSourceName: string;
  readonly NextToken: string;
  readonly Limit: number;
}
export interface ListPartnerEventSources {
  readonly NamePrefix: string;
  readonly NextToken: string;
  readonly Limit: number;
}
export interface ListReplays {
  readonly NamePrefix: string;
  readonly State: string;
  readonly EventSourceArn: string;
  readonly NextToken: string;
  readonly Limit: number;
}
export interface ListRuleNamesByTarget {
  readonly TargetArn: string;
  readonly EventBusName: string;
  readonly NextToken: string;
  readonly Limit: number;
}
export interface ListRules {
  readonly NamePrefix: string;
  readonly EventBusName: string;
  readonly NextToken: string;
  readonly Limit: number;
}
export interface ListTagsForResource {
  readonly ResourceARN: string;
}
export interface ListTargetsByRule {
  readonly Rule: string;
  readonly EventBusName: string;
  readonly NextToken: string;
  readonly Limit: number;
}
export interface PutEvents {
  readonly Entries: [];
}
export interface PutPartnerEvents {
  readonly Entries: [];
}
export interface PutPermission {
  readonly EventBusName: string;
  readonly Action: string;
  readonly Principal: string;
  readonly StatementId: string;
  readonly Condition: Condition;
  readonly Policy: string;
}
export interface PutRule {
  readonly Name: string;
  readonly ScheduleExpression: string;
  readonly EventPattern: string;
  readonly State: string;
  readonly Description: string;
  readonly RoleArn: string;
  readonly Tags: [];
  readonly EventBusName: string;
}
export interface PutTargets {
  readonly Rule: string;
  readonly EventBusName: string;
  readonly Targets: [];
}
export interface RemovePermission {
  readonly StatementId: string;
  readonly RemoveAllPermissions: boolean;
  readonly EventBusName: string;
}
export interface RemoveTargets {
  readonly Rule: string;
  readonly EventBusName: string;
  readonly Ids: [];
  readonly Force: boolean;
}
export interface StartReplay {
  readonly ReplayName: string;
  readonly Description: string;
  readonly EventSourceArn: string;
  readonly EventStartTime: Date;
  readonly EventEndTime: Date;
  readonly Destination: ReplayDestination;
}
export interface TagResource {
  readonly ResourceARN: string;
  readonly Tags: [];
}
export interface TestEventPattern {
  readonly EventPattern: string;
  readonly Event: string;
}
export interface UntagResource {
  readonly ResourceARN: string;
  readonly TagKeys: [];
}
export interface UpdateApiDestination {
  readonly Name: string;
  readonly Description: string;
  readonly ConnectionArn: string;
  readonly InvocationEndpoint: string;
  readonly HttpMethod: string;
  readonly InvocationRateLimitPerSecond: number;
}
export interface UpdateArchive {
  readonly ArchiveName: string;
  readonly Description: string;
  readonly EventPattern: string;
  readonly RetentionDays: number;
}
export interface UpdateConnection {
  readonly Name: string;
  readonly Description: string;
  readonly AuthorizationType: string;
  readonly AuthParameters: UpdateConnectionAuthRequestParameters;
}



interface ActivateEventSourceRequest {
  readonly Name: string;
}

interface ApiDestination {
  readonly ApiDestinationArn: string;
  readonly Name: string;
  readonly ApiDestinationState: string;
  readonly ConnectionArn: string;
  readonly InvocationEndpoint: string;
  readonly HttpMethod: string;
  readonly InvocationRateLimitPerSecond: number;
  readonly CreationTime: Date;
  readonly LastModifiedTime: Date;
}

interface Archive {
  readonly ArchiveName: string;
  readonly EventSourceArn: string;
  readonly State: string;
  readonly StateReason: string;
  readonly RetentionDays: number;
  readonly SizeBytes: number;
  readonly EventCount: number;
  readonly CreationTime: Date;
}

interface AwsVpcConfiguration {
  readonly Subnets: [];
  readonly SecurityGroups: [];
  readonly AssignPublicIp: string;
}

interface BatchArrayProperties {
  readonly Size: number;
}

interface BatchParameters {
  readonly JobDefinition: string;
  readonly JobName: string;
  readonly ArrayProperties: BatchArrayProperties;
  readonly RetryStrategy: BatchRetryStrategy;
}

interface BatchRetryStrategy {
  readonly Attempts: number;
}

interface CancelReplayRequest {
  readonly ReplayName: string;
}

interface CancelReplayResponse {
  readonly ReplayArn: string;
  readonly State: string;
  readonly StateReason: string;
}

interface CapacityProviderStrategyItem {
  readonly capacityProvider: string;
  readonly weight: number;
  readonly base: number;
}

interface ConcurrentModificationException {
}

interface Condition {
  readonly Type: string;
  readonly Key: string;
  readonly Value: string;
}

interface Connection {
  readonly ConnectionArn: string;
  readonly Name: string;
  readonly ConnectionState: string;
  readonly StateReason: string;
  readonly AuthorizationType: string;
  readonly CreationTime: Date;
  readonly LastModifiedTime: Date;
  readonly LastAuthorizedTime: Date;
}

interface ConnectionApiKeyAuthResponseParameters {
  readonly ApiKeyName: string;
}

interface ConnectionAuthResponseParameters {
  readonly BasicAuthParameters: ConnectionBasicAuthResponseParameters;
  readonly OAuthParameters: ConnectionOAuthResponseParameters;
  readonly ApiKeyAuthParameters: ConnectionApiKeyAuthResponseParameters;
  readonly InvocationHttpParameters: ConnectionHttpParameters;
}

interface ConnectionBasicAuthResponseParameters {
  readonly Username: string;
}

interface ConnectionBodyParameter {
  readonly Key: string;
  readonly Value: string;
  readonly IsValueSecret: boolean;
}

interface ConnectionHeaderParameter {
  readonly Key: string;
  readonly Value: string;
  readonly IsValueSecret: boolean;
}

interface ConnectionHttpParameters {
  readonly HeaderParameters: [];
  readonly QueryStringParameters: [];
  readonly BodyParameters: [];
}

interface ConnectionOAuthClientResponseParameters {
  readonly ClientID: string;
}

interface ConnectionOAuthResponseParameters {
  readonly ClientParameters: ConnectionOAuthClientResponseParameters;
  readonly AuthorizationEndpoint: string;
  readonly HttpMethod: string;
  readonly OAuthHttpParameters: ConnectionHttpParameters;
}

interface ConnectionQueryStringParameter {
  readonly Key: string;
  readonly Value: string;
  readonly IsValueSecret: boolean;
}

interface CreateApiDestinationRequest {
  readonly Name: string;
  readonly Description: string;
  readonly ConnectionArn: string;
  readonly InvocationEndpoint: string;
  readonly HttpMethod: string;
  readonly InvocationRateLimitPerSecond: number;
}

interface CreateApiDestinationResponse {
  readonly ApiDestinationArn: string;
  readonly ApiDestinationState: string;
  readonly CreationTime: Date;
  readonly LastModifiedTime: Date;
}

interface CreateArchiveRequest {
  readonly ArchiveName: string;
  readonly EventSourceArn: string;
  readonly Description: string;
  readonly EventPattern: string;
  readonly RetentionDays: number;
}

interface CreateArchiveResponse {
  readonly ArchiveArn: string;
  readonly State: string;
  readonly StateReason: string;
  readonly CreationTime: Date;
}

interface CreateConnectionApiKeyAuthRequestParameters {
  readonly ApiKeyName: string;
  readonly ApiKeyValue: string;
}

interface CreateConnectionAuthRequestParameters {
  readonly BasicAuthParameters: CreateConnectionBasicAuthRequestParameters;
  readonly OAuthParameters: CreateConnectionOAuthRequestParameters;
  readonly ApiKeyAuthParameters: CreateConnectionApiKeyAuthRequestParameters;
  readonly InvocationHttpParameters: ConnectionHttpParameters;
}

interface CreateConnectionBasicAuthRequestParameters {
  readonly Username: string;
  readonly Password: string;
}

interface CreateConnectionOAuthClientRequestParameters {
  readonly ClientID: string;
  readonly ClientSecret: string;
}

interface CreateConnectionOAuthRequestParameters {
  readonly ClientParameters: CreateConnectionOAuthClientRequestParameters;
  readonly AuthorizationEndpoint: string;
  readonly HttpMethod: string;
  readonly OAuthHttpParameters: ConnectionHttpParameters;
}

interface CreateConnectionRequest {
  readonly Name: string;
  readonly Description: string;
  readonly AuthorizationType: string;
  readonly AuthParameters: CreateConnectionAuthRequestParameters;
}

interface CreateConnectionResponse {
  readonly ConnectionArn: string;
  readonly ConnectionState: string;
  readonly CreationTime: Date;
  readonly LastModifiedTime: Date;
}

interface CreateEventBusRequest {
  readonly Name: string;
  readonly EventSourceName: string;
  readonly Tags: [];
}

interface CreateEventBusResponse {
  readonly EventBusArn: string;
}

interface CreatePartnerEventSourceRequest {
  readonly Name: string;
  readonly Account: string;
}

interface CreatePartnerEventSourceResponse {
  readonly EventSourceArn: string;
}

interface DeactivateEventSourceRequest {
  readonly Name: string;
}

interface DeadLetterConfig {
  readonly Arn: string;
}

interface DeauthorizeConnectionRequest {
  readonly Name: string;
}

interface DeauthorizeConnectionResponse {
  readonly ConnectionArn: string;
  readonly ConnectionState: string;
  readonly CreationTime: Date;
  readonly LastModifiedTime: Date;
  readonly LastAuthorizedTime: Date;
}

interface DeleteApiDestinationRequest {
  readonly Name: string;
}

interface DeleteApiDestinationResponse {
}

interface DeleteArchiveRequest {
  readonly ArchiveName: string;
}

interface DeleteArchiveResponse {
}

interface DeleteConnectionRequest {
  readonly Name: string;
}

interface DeleteConnectionResponse {
  readonly ConnectionArn: string;
  readonly ConnectionState: string;
  readonly CreationTime: Date;
  readonly LastModifiedTime: Date;
  readonly LastAuthorizedTime: Date;
}

interface DeleteEventBusRequest {
  readonly Name: string;
}

interface DeletePartnerEventSourceRequest {
  readonly Name: string;
  readonly Account: string;
}

interface DeleteRuleRequest {
  readonly Name: string;
  readonly EventBusName: string;
  readonly Force: boolean;
}

interface DescribeApiDestinationRequest {
  readonly Name: string;
}

interface DescribeApiDestinationResponse {
  readonly ApiDestinationArn: string;
  readonly Name: string;
  readonly Description: string;
  readonly ApiDestinationState: string;
  readonly ConnectionArn: string;
  readonly InvocationEndpoint: string;
  readonly HttpMethod: string;
  readonly InvocationRateLimitPerSecond: number;
  readonly CreationTime: Date;
  readonly LastModifiedTime: Date;
}

interface DescribeArchiveRequest {
  readonly ArchiveName: string;
}

interface DescribeArchiveResponse {
  readonly ArchiveArn: string;
  readonly ArchiveName: string;
  readonly EventSourceArn: string;
  readonly Description: string;
  readonly EventPattern: string;
  readonly State: string;
  readonly StateReason: string;
  readonly RetentionDays: number;
  readonly SizeBytes: number;
  readonly EventCount: number;
  readonly CreationTime: Date;
}

interface DescribeConnectionRequest {
  readonly Name: string;
}

interface DescribeConnectionResponse {
  readonly ConnectionArn: string;
  readonly Name: string;
  readonly Description: string;
  readonly ConnectionState: string;
  readonly StateReason: string;
  readonly AuthorizationType: string;
  readonly SecretArn: string;
  readonly AuthParameters: ConnectionAuthResponseParameters;
  readonly CreationTime: Date;
  readonly LastModifiedTime: Date;
  readonly LastAuthorizedTime: Date;
}

interface DescribeEventBusRequest {
  readonly Name: string;
}

interface DescribeEventBusResponse {
  readonly Name: string;
  readonly Arn: string;
  readonly Policy: string;
}

interface DescribeEventSourceRequest {
  readonly Name: string;
}

interface DescribeEventSourceResponse {
  readonly Arn: string;
  readonly CreatedBy: string;
  readonly CreationTime: Date;
  readonly ExpirationTime: Date;
  readonly Name: string;
  readonly State: string;
}

interface DescribePartnerEventSourceRequest {
  readonly Name: string;
}

interface DescribePartnerEventSourceResponse {
  readonly Arn: string;
  readonly Name: string;
}

interface DescribeReplayRequest {
  readonly ReplayName: string;
}

interface DescribeReplayResponse {
  readonly ReplayName: string;
  readonly ReplayArn: string;
  readonly Description: string;
  readonly State: string;
  readonly StateReason: string;
  readonly EventSourceArn: string;
  readonly Destination: ReplayDestination;
  readonly EventStartTime: Date;
  readonly EventEndTime: Date;
  readonly EventLastReplayedTime: Date;
  readonly ReplayStartTime: Date;
  readonly ReplayEndTime: Date;
}

interface DescribeRuleRequest {
  readonly Name: string;
  readonly EventBusName: string;
}

interface DescribeRuleResponse {
  readonly Name: string;
  readonly Arn: string;
  readonly EventPattern: string;
  readonly ScheduleExpression: string;
  readonly State: string;
  readonly Description: string;
  readonly RoleArn: string;
  readonly ManagedBy: string;
  readonly EventBusName: string;
  readonly CreatedBy: string;
}

interface DisableRuleRequest {
  readonly Name: string;
  readonly EventBusName: string;
}

interface EcsParameters {
  readonly TaskDefinitionArn: string;
  readonly TaskCount: number;
  readonly LaunchType: string;
  readonly NetworkConfiguration: NetworkConfiguration;
  readonly PlatformVersion: string;
  readonly Group: string;
  readonly CapacityProviderStrategy: [];
  readonly EnableECSManagedTags: boolean;
  readonly EnableExecuteCommand: boolean;
  readonly PlacementConstraints: [];
  readonly PlacementStrategy: [];
  readonly PropagateTags: string;
  readonly ReferenceId: string;
  readonly Tags: [];
}

interface EnableRuleRequest {
  readonly Name: string;
  readonly EventBusName: string;
}

interface EventBus {
  readonly Name: string;
  readonly Arn: string;
  readonly Policy: string;
}

interface EventSource {
  readonly Arn: string;
  readonly CreatedBy: string;
  readonly CreationTime: Date;
  readonly ExpirationTime: Date;
  readonly Name: string;
  readonly State: string;
}

interface HttpParameters {
  readonly PathParameterValues: [];
  readonly HeaderParameters: {[key: string]: any};
  readonly QueryStringParameters: {[key: string]: any};
}

interface IllegalStatusException {
}

interface InputTransformer {
  readonly InputPathsMap: {[key: string]: any};
  readonly InputTemplate: string;
}

interface InternalException {
}

interface InvalidEventPatternException {
}

interface InvalidStateException {
}

interface KinesisParameters {
  readonly PartitionKeyPath: string;
}

interface LimitExceededException {
}

interface ListApiDestinationsRequest {
  readonly NamePrefix: string;
  readonly ConnectionArn: string;
  readonly NextToken: string;
  readonly Limit: number;
}

interface ListApiDestinationsResponse {
  readonly ApiDestinations: [];
  readonly NextToken: string;
}

interface ListArchivesRequest {
  readonly NamePrefix: string;
  readonly EventSourceArn: string;
  readonly State: string;
  readonly NextToken: string;
  readonly Limit: number;
}

interface ListArchivesResponse {
  readonly Archives: [];
  readonly NextToken: string;
}

interface ListConnectionsRequest {
  readonly NamePrefix: string;
  readonly ConnectionState: string;
  readonly NextToken: string;
  readonly Limit: number;
}

interface ListConnectionsResponse {
  readonly Connections: [];
  readonly NextToken: string;
}

interface ListEventBusesRequest {
  readonly NamePrefix: string;
  readonly NextToken: string;
  readonly Limit: number;
}

interface ListEventBusesResponse {
  readonly EventBuses: [];
  readonly NextToken: string;
}

interface ListEventSourcesRequest {
  readonly NamePrefix: string;
  readonly NextToken: string;
  readonly Limit: number;
}

interface ListEventSourcesResponse {
  readonly EventSources: [];
  readonly NextToken: string;
}

interface ListPartnerEventSourceAccountsRequest {
  readonly EventSourceName: string;
  readonly NextToken: string;
  readonly Limit: number;
}

interface ListPartnerEventSourceAccountsResponse {
  readonly PartnerEventSourceAccounts: [];
  readonly NextToken: string;
}

interface ListPartnerEventSourcesRequest {
  readonly NamePrefix: string;
  readonly NextToken: string;
  readonly Limit: number;
}

interface ListPartnerEventSourcesResponse {
  readonly PartnerEventSources: [];
  readonly NextToken: string;
}

interface ListReplaysRequest {
  readonly NamePrefix: string;
  readonly State: string;
  readonly EventSourceArn: string;
  readonly NextToken: string;
  readonly Limit: number;
}

interface ListReplaysResponse {
  readonly Replays: [];
  readonly NextToken: string;
}

interface ListRuleNamesByTargetRequest {
  readonly TargetArn: string;
  readonly EventBusName: string;
  readonly NextToken: string;
  readonly Limit: number;
}

interface ListRuleNamesByTargetResponse {
  readonly RuleNames: [];
  readonly NextToken: string;
}

interface ListRulesRequest {
  readonly NamePrefix: string;
  readonly EventBusName: string;
  readonly NextToken: string;
  readonly Limit: number;
}

interface ListRulesResponse {
  readonly Rules: [];
  readonly NextToken: string;
}

interface ListTagsForResourceRequest {
  readonly ResourceARN: string;
}

interface ListTagsForResourceResponse {
  readonly Tags: [];
}

interface ListTargetsByRuleRequest {
  readonly Rule: string;
  readonly EventBusName: string;
  readonly NextToken: string;
  readonly Limit: number;
}

interface ListTargetsByRuleResponse {
  readonly Targets: [];
  readonly NextToken: string;
}

interface ManagedRuleException {
}

interface NetworkConfiguration {
  readonly awsvpcConfiguration: AwsVpcConfiguration;
}

interface OperationDisabledException {
}

interface PartnerEventSource {
  readonly Arn: string;
  readonly Name: string;
}

interface PartnerEventSourceAccount {
  readonly Account: string;
  readonly CreationTime: Date;
  readonly ExpirationTime: Date;
  readonly State: string;
}

interface PlacementConstraint {
  readonly type: string;
  readonly expression: string;
}

interface PlacementStrategy {
  readonly type: string;
  readonly field: string;
}

interface PolicyLengthExceededException {
}

interface PutEventsRequest {
  readonly Entries: [];
}

interface PutEventsRequestEntry {
  readonly Time: Date;
  readonly Source: string;
  readonly Resources: [];
  readonly DetailType: string;
  readonly Detail: string;
  readonly EventBusName: string;
  readonly TraceHeader: string;
}

interface PutEventsResponse {
  readonly FailedEntryCount: number;
  readonly Entries: [];
}

interface PutEventsResultEntry {
  readonly EventId: string;
  readonly ErrorCode: string;
  readonly ErrorMessage: string;
}

interface PutPartnerEventsRequest {
  readonly Entries: [];
}

interface PutPartnerEventsRequestEntry {
  readonly Time: Date;
  readonly Source: string;
  readonly Resources: [];
  readonly DetailType: string;
  readonly Detail: string;
}

interface PutPartnerEventsResponse {
  readonly FailedEntryCount: number;
  readonly Entries: [];
}

interface PutPartnerEventsResultEntry {
  readonly EventId: string;
  readonly ErrorCode: string;
  readonly ErrorMessage: string;
}

interface PutPermissionRequest {
  readonly EventBusName: string;
  readonly Action: string;
  readonly Principal: string;
  readonly StatementId: string;
  readonly Condition: Condition;
  readonly Policy: string;
}

interface PutRuleRequest {
  readonly Name: string;
  readonly ScheduleExpression: string;
  readonly EventPattern: string;
  readonly State: string;
  readonly Description: string;
  readonly RoleArn: string;
  readonly Tags: [];
  readonly EventBusName: string;
}

interface PutRuleResponse {
  readonly RuleArn: string;
}

interface PutTargetsRequest {
  readonly Rule: string;
  readonly EventBusName: string;
  readonly Targets: [];
}

interface PutTargetsResponse {
  readonly FailedEntryCount: number;
  readonly FailedEntries: [];
}

interface PutTargetsResultEntry {
  readonly TargetId: string;
  readonly ErrorCode: string;
  readonly ErrorMessage: string;
}

interface RedshiftDataParameters {
  readonly SecretManagerArn: string;
  readonly Database: string;
  readonly DbUser: string;
  readonly Sql: string;
  readonly StatementName: string;
  readonly WithEvent: boolean;
}

interface RemovePermissionRequest {
  readonly StatementId: string;
  readonly RemoveAllPermissions: boolean;
  readonly EventBusName: string;
}

interface RemoveTargetsRequest {
  readonly Rule: string;
  readonly EventBusName: string;
  readonly Ids: [];
  readonly Force: boolean;
}

interface RemoveTargetsResponse {
  readonly FailedEntryCount: number;
  readonly FailedEntries: [];
}

interface RemoveTargetsResultEntry {
  readonly TargetId: string;
  readonly ErrorCode: string;
  readonly ErrorMessage: string;
}

interface Replay {
  readonly ReplayName: string;
  readonly EventSourceArn: string;
  readonly State: string;
  readonly StateReason: string;
  readonly EventStartTime: Date;
  readonly EventEndTime: Date;
  readonly EventLastReplayedTime: Date;
  readonly ReplayStartTime: Date;
  readonly ReplayEndTime: Date;
}

interface ReplayDestination {
  readonly Arn: string;
  readonly FilterArns: [];
}

interface ResourceAlreadyExistsException {
}

interface ResourceNotFoundException {
}

interface RetryPolicy {
  readonly MaximumRetryAttempts: number;
  readonly MaximumEventAgeInSeconds: number;
}

interface Rule {
  readonly Name: string;
  readonly Arn: string;
  readonly EventPattern: string;
  readonly State: string;
  readonly Description: string;
  readonly ScheduleExpression: string;
  readonly RoleArn: string;
  readonly ManagedBy: string;
  readonly EventBusName: string;
}

interface RunCommandParameters {
  readonly RunCommandTargets: [];
}

interface RunCommandTarget {
  readonly Key: string;
  readonly Values: [];
}

interface SageMakerPipelineParameter {
  readonly Name: string;
  readonly Value: string;
}

interface SageMakerPipelineParameters {
  readonly PipelineParameterList: [];
}

interface SqsParameters {
  readonly MessageGroupId: string;
}

interface StartReplayRequest {
  readonly ReplayName: string;
  readonly Description: string;
  readonly EventSourceArn: string;
  readonly EventStartTime: Date;
  readonly EventEndTime: Date;
  readonly Destination: ReplayDestination;
}

interface StartReplayResponse {
  readonly ReplayArn: string;
  readonly State: string;
  readonly StateReason: string;
  readonly ReplayStartTime: Date;
}

interface Tag {
  readonly Key: string;
  readonly Value: string;
}

interface TagResourceRequest {
  readonly ResourceARN: string;
  readonly Tags: [];
}

interface TagResourceResponse {
}

interface Target {
  readonly Id: string;
  readonly Arn: string;
  readonly RoleArn: string;
  readonly Input: string;
  readonly InputPath: string;
  readonly InputTransformer: InputTransformer;
  readonly KinesisParameters: KinesisParameters;
  readonly RunCommandParameters: RunCommandParameters;
  readonly EcsParameters: EcsParameters;
  readonly BatchParameters: BatchParameters;
  readonly SqsParameters: SqsParameters;
  readonly HttpParameters: HttpParameters;
  readonly RedshiftDataParameters: RedshiftDataParameters;
  readonly SageMakerPipelineParameters: SageMakerPipelineParameters;
  readonly DeadLetterConfig: DeadLetterConfig;
  readonly RetryPolicy: RetryPolicy;
}

interface TestEventPatternRequest {
  readonly EventPattern: string;
  readonly Event: string;
}

interface TestEventPatternResponse {
  readonly Result: boolean;
}

interface UntagResourceRequest {
  readonly ResourceARN: string;
  readonly TagKeys: [];
}

interface UntagResourceResponse {
}

interface UpdateApiDestinationRequest {
  readonly Name: string;
  readonly Description: string;
  readonly ConnectionArn: string;
  readonly InvocationEndpoint: string;
  readonly HttpMethod: string;
  readonly InvocationRateLimitPerSecond: number;
}

interface UpdateApiDestinationResponse {
  readonly ApiDestinationArn: string;
  readonly ApiDestinationState: string;
  readonly CreationTime: Date;
  readonly LastModifiedTime: Date;
}

interface UpdateArchiveRequest {
  readonly ArchiveName: string;
  readonly Description: string;
  readonly EventPattern: string;
  readonly RetentionDays: number;
}

interface UpdateArchiveResponse {
  readonly ArchiveArn: string;
  readonly State: string;
  readonly StateReason: string;
  readonly CreationTime: Date;
}

interface UpdateConnectionApiKeyAuthRequestParameters {
  readonly ApiKeyName: string;
  readonly ApiKeyValue: string;
}

interface UpdateConnectionAuthRequestParameters {
  readonly BasicAuthParameters: UpdateConnectionBasicAuthRequestParameters;
  readonly OAuthParameters: UpdateConnectionOAuthRequestParameters;
  readonly ApiKeyAuthParameters: UpdateConnectionApiKeyAuthRequestParameters;
  readonly InvocationHttpParameters: ConnectionHttpParameters;
}

interface UpdateConnectionBasicAuthRequestParameters {
  readonly Username: string;
  readonly Password: string;
}

interface UpdateConnectionOAuthClientRequestParameters {
  readonly ClientID: string;
  readonly ClientSecret: string;
}

interface UpdateConnectionOAuthRequestParameters {
  readonly ClientParameters: UpdateConnectionOAuthClientRequestParameters;
  readonly AuthorizationEndpoint: string;
  readonly HttpMethod: string;
  readonly OAuthHttpParameters: ConnectionHttpParameters;
}

interface UpdateConnectionRequest {
  readonly Name: string;
  readonly Description: string;
  readonly AuthorizationType: string;
  readonly AuthParameters: UpdateConnectionAuthRequestParameters;
}

interface UpdateConnectionResponse {
  readonly ConnectionArn: string;
  readonly ConnectionState: string;
  readonly CreationTime: Date;
  readonly LastModifiedTime: Date;
  readonly LastAuthorizedTime: Date;
}
