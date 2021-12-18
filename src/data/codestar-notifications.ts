/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface CreateNotificationRule {
  readonly Name: string;
  readonly EventTypeIds: [];
  readonly Resource: string;
  readonly Targets: [];
  readonly DetailType: string;
  readonly ClientRequestToken?: string;
  readonly Tags?: {[key: string]: any};
  readonly Status?: string;
}

export interface DeleteNotificationRule {
  readonly Arn: string;
}

export interface DeleteTarget {
  readonly TargetAddress: string;
  readonly ForceUnsubscribeAll?: boolean;
}

export interface DescribeNotificationRule {
  readonly Arn: string;
}

export interface ListEventTypes {
  readonly Filters?: [];
  readonly NextToken?: string;
  readonly MaxResults?: number;
}

export interface ListNotificationRules {
  readonly Filters?: [];
  readonly NextToken?: string;
  readonly MaxResults?: number;
}

export interface ListTagsForResource {
  readonly Arn: string;
}

export interface ListTargets {
  readonly Filters?: [];
  readonly NextToken?: string;
  readonly MaxResults?: number;
}

export interface Subscribe {
  readonly Arn: string;
  readonly Target: Target;
  readonly ClientRequestToken?: string;
}

export interface TagResource {
  readonly Arn: string;
  readonly Tags: {[key: string]: any};
}

export interface Unsubscribe {
  readonly Arn: string;
  readonly TargetAddress: string;
}

export interface UntagResource {
  readonly Arn: string;
  readonly TagKeys: [];
}

export interface UpdateNotificationRule {
  readonly Arn: string;
  readonly Name?: string;
  readonly Status?: string;
  readonly EventTypeIds?: [];
  readonly Targets?: [];
  readonly DetailType?: string;
}

export interface AccessDeniedException {
  readonly Message?: string;
}

export interface ConcurrentModificationException {
  readonly Message?: string;
}

export interface ConfigurationException {
  readonly Message?: string;
}

export interface CreateNotificationRuleRequest {
  readonly Name: string;
  readonly EventTypeIds: [];
  readonly Resource: string;
  readonly Targets: [];
  readonly DetailType: string;
  readonly ClientRequestToken?: string;
  readonly Tags?: {[key: string]: any};
  readonly Status?: string;
}

export interface CreateNotificationRuleResult {
  readonly Arn?: string;
}

export interface DeleteNotificationRuleRequest {
  readonly Arn: string;
}

export interface DeleteNotificationRuleResult {
  readonly Arn?: string;
}

export interface DeleteTargetRequest {
  readonly TargetAddress: string;
  readonly ForceUnsubscribeAll?: boolean;
}

export interface DeleteTargetResult {
}

export interface DescribeNotificationRuleRequest {
  readonly Arn: string;
}

export interface DescribeNotificationRuleResult {
  readonly Arn: string;
  readonly Name?: string;
  readonly EventTypes?: [];
  readonly Resource?: string;
  readonly Targets?: [];
  readonly DetailType?: string;
  readonly CreatedBy?: string;
  readonly Status?: string;
  readonly CreatedTimestamp?: Date;
  readonly LastModifiedTimestamp?: Date;
  readonly Tags?: {[key: string]: any};
}

export interface EventTypeSummary {
  readonly EventTypeId?: string;
  readonly ServiceName?: string;
  readonly EventTypeName?: string;
  readonly ResourceType?: string;
}

export interface InvalidNextTokenException {
  readonly Message?: string;
}

export interface LimitExceededException {
  readonly Message?: string;
}

export interface ListEventTypesFilter {
  readonly Name: string;
  readonly Value: string;
}

export interface ListEventTypesRequest {
  readonly Filters?: [];
  readonly NextToken?: string;
  readonly MaxResults?: number;
}

export interface ListEventTypesResult {
  readonly EventTypes?: [];
  readonly NextToken?: string;
}

export interface ListNotificationRulesFilter {
  readonly Name: string;
  readonly Value: string;
}

export interface ListNotificationRulesRequest {
  readonly Filters?: [];
  readonly NextToken?: string;
  readonly MaxResults?: number;
}

export interface ListNotificationRulesResult {
  readonly NextToken?: string;
  readonly NotificationRules?: [];
}

export interface ListTagsForResourceRequest {
  readonly Arn: string;
}

export interface ListTagsForResourceResult {
  readonly Tags?: {[key: string]: any};
}

export interface ListTargetsFilter {
  readonly Name: string;
  readonly Value: string;
}

export interface ListTargetsRequest {
  readonly Filters?: [];
  readonly NextToken?: string;
  readonly MaxResults?: number;
}

export interface ListTargetsResult {
  readonly Targets?: [];
  readonly NextToken?: string;
}

export interface NotificationRuleSummary {
  readonly Id?: string;
  readonly Arn?: string;
}

export interface ResourceAlreadyExistsException {
  readonly Message?: string;
}

export interface ResourceNotFoundException {
  readonly Message?: string;
}

export interface SubscribeRequest {
  readonly Arn: string;
  readonly Target: Target;
  readonly ClientRequestToken?: string;
}

export interface SubscribeResult {
  readonly Arn?: string;
}

export interface TagResourceRequest {
  readonly Arn: string;
  readonly Tags: {[key: string]: any};
}

export interface TagResourceResult {
  readonly Tags?: {[key: string]: any};
}

export interface Target {
  readonly TargetType?: string;
  readonly TargetAddress?: string;
}

export interface TargetSummary {
  readonly TargetAddress?: string;
  readonly TargetType?: string;
  readonly TargetStatus?: string;
}

export interface UnsubscribeRequest {
  readonly Arn: string;
  readonly TargetAddress: string;
}

export interface UnsubscribeResult {
  readonly Arn: string;
}

export interface UntagResourceRequest {
  readonly Arn: string;
  readonly TagKeys: [];
}

export interface UntagResourceResult {
}

export interface UpdateNotificationRuleRequest {
  readonly Arn: string;
  readonly Name?: string;
  readonly Status?: string;
  readonly EventTypeIds?: [];
  readonly Targets?: [];
  readonly DetailType?: string;
}

export interface UpdateNotificationRuleResult {
}

export interface ValidationException {
  readonly Message?: string;
}


