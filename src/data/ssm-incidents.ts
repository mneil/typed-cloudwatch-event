/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface CreateReplicationSet {
  readonly clientToken?: string;
  readonly regions: {[key: string]: any};
}
export interface CreateResponsePlan {
  readonly actions?: [];
  readonly chatChannel?: ChatChannel;
  readonly clientToken?: string;
  readonly displayName?: string;
  readonly engagements?: [];
  readonly incidentTemplate: IncidentTemplate;
  readonly name: string;
  readonly tags?: {[key: string]: any};
}
export interface CreateTimelineEvent {
  readonly clientToken?: string;
  readonly eventData: string;
  readonly eventTime: Date;
  readonly eventType: string;
  readonly incidentRecordArn: string;
}
export interface DeleteIncidentRecord {
  readonly arn: string;
}
export interface DeleteReplicationSet {
  readonly arn: string;
}
export interface DeleteResourcePolicy {
  readonly policyId: string;
  readonly resourceArn: string;
}
export interface DeleteResponsePlan {
  readonly arn: string;
}
export interface DeleteTimelineEvent {
  readonly eventId: string;
  readonly incidentRecordArn: string;
}
export interface GetIncidentRecord {
  readonly arn: string;
}
export interface GetReplicationSet {
  readonly arn: string;
}
export interface GetResourcePolicies {
  readonly maxResults?: number;
  readonly nextToken?: string;
  readonly resourceArn: string;
}
export interface GetResponsePlan {
  readonly arn: string;
}
export interface GetTimelineEvent {
  readonly eventId: string;
  readonly incidentRecordArn: string;
}
export interface ListIncidentRecords {
  readonly filters?: [];
  readonly maxResults?: number;
  readonly nextToken?: string;
}
export interface ListRelatedItems {
  readonly incidentRecordArn: string;
  readonly maxResults?: number;
  readonly nextToken?: string;
}
export interface ListReplicationSets {
  readonly maxResults?: number;
  readonly nextToken?: string;
}
export interface ListResponsePlans {
  readonly maxResults?: number;
  readonly nextToken?: string;
}
export interface ListTagsForResource {
  readonly resourceArn: string;
}
export interface ListTimelineEvents {
  readonly filters?: [];
  readonly incidentRecordArn: string;
  readonly maxResults?: number;
  readonly nextToken?: string;
  readonly sortBy?: string;
  readonly sortOrder?: string;
}
export interface PutResourcePolicy {
  readonly policy: string;
  readonly resourceArn: string;
}
export interface StartIncident {
  readonly clientToken?: string;
  readonly impact?: number;
  readonly relatedItems?: [];
  readonly responsePlanArn: string;
  readonly title?: string;
  readonly triggerDetails?: TriggerDetails;
}
export interface TagResource {
  readonly resourceArn: string;
  readonly tags: {[key: string]: any};
}
export interface UntagResource {
  readonly resourceArn: string;
  readonly tagKeys: [];
}
export interface UpdateDeletionProtection {
  readonly arn: string;
  readonly clientToken?: string;
  readonly deletionProtected: boolean;
}
export interface UpdateIncidentRecord {
  readonly arn: string;
  readonly chatChannel?: ChatChannel;
  readonly clientToken?: string;
  readonly impact?: number;
  readonly notificationTargets?: [];
  readonly status?: string;
  readonly summary?: string;
  readonly title?: string;
}
export interface UpdateRelatedItems {
  readonly clientToken?: string;
  readonly incidentRecordArn: string;
  readonly relatedItemsUpdate: RelatedItemsUpdate;
}
export interface UpdateReplicationSet {
  readonly actions: [];
  readonly arn: string;
  readonly clientToken?: string;
}
export interface UpdateResponsePlan {
  readonly actions?: [];
  readonly arn: string;
  readonly chatChannel?: ChatChannel;
  readonly clientToken?: string;
  readonly displayName?: string;
  readonly engagements?: [];
  readonly incidentTemplateDedupeString?: string;
  readonly incidentTemplateImpact?: number;
  readonly incidentTemplateNotificationTargets?: [];
  readonly incidentTemplateSummary?: string;
  readonly incidentTemplateTitle?: string;
}
export interface UpdateTimelineEvent {
  readonly clientToken?: string;
  readonly eventData?: string;
  readonly eventId: string;
  readonly eventTime?: Date;
  readonly eventType?: string;
  readonly incidentRecordArn: string;
}



interface AccessDeniedException {
  readonly message: string;
}

interface Action {
  readonly ssmAutomation: SsmAutomation;
}

interface AddRegionAction {
  readonly regionName: string;
  readonly sseKmsKeyId: string;
}

interface AttributeValueList {
  readonly integerValues: [];
  readonly stringValues: [];
}

interface AutomationExecution {
  readonly ssmExecutionArn: string;
}

interface ChatChannel {
  readonly chatbotSns: [];
  readonly empty: EmptyChatChannel;
}

interface Condition {
  readonly after: Date;
  readonly before: Date;
  readonly equals: AttributeValueList;
}

interface ConflictException {
  readonly message: string;
  readonly resourceIdentifier: string;
  readonly resourceType: string;
  readonly retryAfter: Date;
}

interface CreateReplicationSetInput {
  readonly clientToken: string;
  readonly regions: {[key: string]: any};
}

interface CreateReplicationSetOutput {
  readonly arn: string;
}

interface CreateResponsePlanInput {
  readonly actions: [];
  readonly chatChannel: ChatChannel;
  readonly clientToken: string;
  readonly displayName: string;
  readonly engagements: [];
  readonly incidentTemplate: IncidentTemplate;
  readonly name: string;
  readonly tags: {[key: string]: any};
}

interface CreateResponsePlanOutput {
  readonly arn: string;
}

interface CreateTimelineEventInput {
  readonly clientToken: string;
  readonly eventData: string;
  readonly eventTime: Date;
  readonly eventType: string;
  readonly incidentRecordArn: string;
}

interface CreateTimelineEventOutput {
  readonly eventId: string;
  readonly incidentRecordArn: string;
}

interface DeleteIncidentRecordInput {
  readonly arn: string;
}

interface DeleteIncidentRecordOutput {
}

interface DeleteRegionAction {
  readonly regionName: string;
}

interface DeleteReplicationSetInput {
  readonly arn: string;
}

interface DeleteReplicationSetOutput {
}

interface DeleteResourcePolicyInput {
  readonly policyId: string;
  readonly resourceArn: string;
}

interface DeleteResourcePolicyOutput {
}

interface DeleteResponsePlanInput {
  readonly arn: string;
}

interface DeleteResponsePlanOutput {
}

interface DeleteTimelineEventInput {
  readonly eventId: string;
  readonly incidentRecordArn: string;
}

interface DeleteTimelineEventOutput {
}

interface EmptyChatChannel {
}

interface EventSummary {
  readonly eventId: string;
  readonly eventTime: Date;
  readonly eventType: string;
  readonly eventUpdatedTime: Date;
  readonly incidentRecordArn: string;
}

interface Filter {
  readonly condition: Condition;
  readonly key: string;
}

interface GetIncidentRecordInput {
  readonly arn: string;
}

interface GetIncidentRecordOutput {
  readonly incidentRecord: IncidentRecord;
}

interface GetReplicationSetInput {
  readonly arn: string;
}

interface GetReplicationSetOutput {
  readonly replicationSet: ReplicationSet;
}

interface GetResourcePoliciesInput {
  readonly maxResults: number;
  readonly nextToken: string;
  readonly resourceArn: string;
}

interface GetResourcePoliciesOutput {
  readonly nextToken: string;
  readonly resourcePolicies: [];
}

interface GetResponsePlanInput {
  readonly arn: string;
}

interface GetResponsePlanOutput {
  readonly actions: [];
  readonly arn: string;
  readonly chatChannel: ChatChannel;
  readonly displayName: string;
  readonly engagements: [];
  readonly incidentTemplate: IncidentTemplate;
  readonly name: string;
}

interface GetTimelineEventInput {
  readonly eventId: string;
  readonly incidentRecordArn: string;
}

interface GetTimelineEventOutput {
  readonly event: TimelineEvent;
}

interface IncidentRecord {
  readonly arn: string;
  readonly automationExecutions: [];
  readonly chatChannel: ChatChannel;
  readonly creationTime: Date;
  readonly dedupeString: string;
  readonly impact: number;
  readonly incidentRecordSource: IncidentRecordSource;
  readonly lastModifiedBy: string;
  readonly lastModifiedTime: Date;
  readonly notificationTargets: [];
  readonly resolvedTime: Date;
  readonly status: string;
  readonly summary: string;
  readonly title: string;
}

interface IncidentRecordSource {
  readonly createdBy: string;
  readonly invokedBy: string;
  readonly resourceArn: string;
  readonly source: string;
}

interface IncidentRecordSummary {
  readonly arn: string;
  readonly creationTime: Date;
  readonly impact: number;
  readonly incidentRecordSource: IncidentRecordSource;
  readonly resolvedTime: Date;
  readonly status: string;
  readonly title: string;
}

interface IncidentTemplate {
  readonly dedupeString: string;
  readonly impact: number;
  readonly notificationTargets: [];
  readonly summary: string;
  readonly title: string;
}

interface InternalServerException {
  readonly message: string;
}

interface ItemIdentifier {
  readonly type: string;
  readonly value: ItemValue;
}

interface ItemValue {
  readonly arn: string;
  readonly metricDefinition: string;
  readonly url: string;
}

interface ListIncidentRecordsInput {
  readonly filters: [];
  readonly maxResults: number;
  readonly nextToken: string;
}

interface ListIncidentRecordsOutput {
  readonly incidentRecordSummaries: [];
  readonly nextToken: string;
}

interface ListRelatedItemsInput {
  readonly incidentRecordArn: string;
  readonly maxResults: number;
  readonly nextToken: string;
}

interface ListRelatedItemsOutput {
  readonly nextToken: string;
  readonly relatedItems: [];
}

interface ListReplicationSetsInput {
  readonly maxResults: number;
  readonly nextToken: string;
}

interface ListReplicationSetsOutput {
  readonly nextToken: string;
  readonly replicationSetArns: [];
}

interface ListResponsePlansInput {
  readonly maxResults: number;
  readonly nextToken: string;
}

interface ListResponsePlansOutput {
  readonly nextToken: string;
  readonly responsePlanSummaries: [];
}

interface ListTagsForResourceRequest {
  readonly resourceArn: string;
}

interface ListTagsForResourceResponse {
  readonly tags: {[key: string]: any};
}

interface ListTimelineEventsInput {
  readonly filters: [];
  readonly incidentRecordArn: string;
  readonly maxResults: number;
  readonly nextToken: string;
  readonly sortBy: string;
  readonly sortOrder: string;
}

interface ListTimelineEventsOutput {
  readonly eventSummaries: [];
  readonly nextToken: string;
}

interface NotificationTargetItem {
  readonly snsTopicArn: string;
}

interface PutResourcePolicyInput {
  readonly policy: string;
  readonly resourceArn: string;
}

interface PutResourcePolicyOutput {
  readonly policyId: string;
}

interface RegionInfo {
  readonly sseKmsKeyId: string;
  readonly status: string;
  readonly statusMessage: string;
  readonly statusUpdateDateTime: Date;
}

interface RegionMapInputValue {
  readonly sseKmsKeyId: string;
}

interface RelatedItem {
  readonly identifier: ItemIdentifier;
  readonly title: string;
}

interface RelatedItemsUpdate {
  readonly itemToAdd: RelatedItem;
  readonly itemToRemove: ItemIdentifier;
}

interface ReplicationSet {
  readonly arn: string;
  readonly createdBy: string;
  readonly createdTime: Date;
  readonly deletionProtected: boolean;
  readonly lastModifiedBy: string;
  readonly lastModifiedTime: Date;
  readonly regionMap: {[key: string]: any};
  readonly status: string;
}

interface ResourceNotFoundException {
  readonly message: string;
  readonly resourceIdentifier: string;
  readonly resourceType: string;
}

interface ResourcePolicy {
  readonly policyDocument: string;
  readonly policyId: string;
  readonly ramResourceShareRegion: string;
}

interface ResponsePlanSummary {
  readonly arn: string;
  readonly displayName: string;
  readonly name: string;
}

interface ServiceQuotaExceededException {
  readonly message: string;
  readonly quotaCode: string;
  readonly resourceIdentifier: string;
  readonly resourceType: string;
  readonly serviceCode: string;
}

interface SsmAutomation {
  readonly documentName: string;
  readonly documentVersion: string;
  readonly parameters: {[key: string]: any};
  readonly roleArn: string;
  readonly targetAccount: string;
}

interface StartIncidentInput {
  readonly clientToken: string;
  readonly impact: number;
  readonly relatedItems: [];
  readonly responsePlanArn: string;
  readonly title: string;
  readonly triggerDetails: TriggerDetails;
}

interface StartIncidentOutput {
  readonly incidentRecordArn: string;
}

interface TagResourceRequest {
  readonly resourceArn: string;
  readonly tags: {[key: string]: any};
}

interface TagResourceResponse {
}

interface ThrottlingException {
  readonly message: string;
  readonly quotaCode: string;
  readonly serviceCode: string;
}

interface TimelineEvent {
  readonly eventData: string;
  readonly eventId: string;
  readonly eventTime: Date;
  readonly eventType: string;
  readonly eventUpdatedTime: Date;
  readonly incidentRecordArn: string;
}

interface TriggerDetails {
  readonly rawData: string;
  readonly source: string;
  readonly timestamp: Date;
  readonly triggerArn: string;
}

interface UntagResourceRequest {
  readonly resourceArn: string;
  readonly tagKeys: [];
}

interface UntagResourceResponse {
}

interface UpdateDeletionProtectionInput {
  readonly arn: string;
  readonly clientToken: string;
  readonly deletionProtected: boolean;
}

interface UpdateDeletionProtectionOutput {
}

interface UpdateIncidentRecordInput {
  readonly arn: string;
  readonly chatChannel: ChatChannel;
  readonly clientToken: string;
  readonly impact: number;
  readonly notificationTargets: [];
  readonly status: string;
  readonly summary: string;
  readonly title: string;
}

interface UpdateIncidentRecordOutput {
}

interface UpdateRelatedItemsInput {
  readonly clientToken: string;
  readonly incidentRecordArn: string;
  readonly relatedItemsUpdate: RelatedItemsUpdate;
}

interface UpdateRelatedItemsOutput {
}

interface UpdateReplicationSetAction {
  readonly addRegionAction: AddRegionAction;
  readonly deleteRegionAction: DeleteRegionAction;
}

interface UpdateReplicationSetInput {
  readonly actions: [];
  readonly arn: string;
  readonly clientToken: string;
}

interface UpdateReplicationSetOutput {
}

interface UpdateResponsePlanInput {
  readonly actions: [];
  readonly arn: string;
  readonly chatChannel: ChatChannel;
  readonly clientToken: string;
  readonly displayName: string;
  readonly engagements: [];
  readonly incidentTemplateDedupeString: string;
  readonly incidentTemplateImpact: number;
  readonly incidentTemplateNotificationTargets: [];
  readonly incidentTemplateSummary: string;
  readonly incidentTemplateTitle: string;
}

interface UpdateResponsePlanOutput {
}

interface UpdateTimelineEventInput {
  readonly clientToken: string;
  readonly eventData: string;
  readonly eventId: string;
  readonly eventTime: Date;
  readonly eventType: string;
  readonly incidentRecordArn: string;
}

interface UpdateTimelineEventOutput {
}

interface ValidationException {
  readonly message: string;
}

