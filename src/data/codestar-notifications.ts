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



interface AccessDeniedException {
  readonly Message: string;
}

interface ConcurrentModificationException {
  readonly Message: string;
}

interface ConfigurationException {
  readonly Message: string;
}

interface CreateNotificationRuleRequest {
  readonly Name: string;
  readonly EventTypeIds: [];
  readonly Resource: string;
  readonly Targets: [];
  readonly DetailType: string;
  readonly ClientRequestToken: string;
  readonly Tags: {[key: string]: any};
  readonly Status: string;
}

interface CreateNotificationRuleResult {
  readonly Arn: string;
}

interface DeleteNotificationRuleRequest {
  readonly Arn: string;
}

interface DeleteNotificationRuleResult {
  readonly Arn: string;
}

interface DeleteTargetRequest {
  readonly TargetAddress: string;
  readonly ForceUnsubscribeAll: boolean;
}

interface DeleteTargetResult {
}

interface DescribeNotificationRuleRequest {
  readonly Arn: string;
}

interface DescribeNotificationRuleResult {
  readonly Arn: string;
  readonly Name: string;
  readonly EventTypes: [];
  readonly Resource: string;
  readonly Targets: [];
  readonly DetailType: string;
  readonly CreatedBy: string;
  readonly Status: string;
  readonly CreatedTimestamp: Date;
  readonly LastModifiedTimestamp: Date;
  readonly Tags: {[key: string]: any};
}

interface EventTypeSummary {
  readonly EventTypeId: string;
  readonly ServiceName: string;
  readonly EventTypeName: string;
  readonly ResourceType: string;
}

interface InvalidNextTokenException {
  readonly Message: string;
}

interface LimitExceededException {
  readonly Message: string;
}

interface ListEventTypesFilter {
  readonly Name: string;
  readonly Value: string;
}

interface ListEventTypesRequest {
  readonly Filters: [];
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListEventTypesResult {
  readonly EventTypes: [];
  readonly NextToken: string;
}

interface ListNotificationRulesFilter {
  readonly Name: string;
  readonly Value: string;
}

interface ListNotificationRulesRequest {
  readonly Filters: [];
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListNotificationRulesResult {
  readonly NextToken: string;
  readonly NotificationRules: [];
}

interface ListTagsForResourceRequest {
  readonly Arn: string;
}

interface ListTagsForResourceResult {
  readonly Tags: {[key: string]: any};
}

interface ListTargetsFilter {
  readonly Name: string;
  readonly Value: string;
}

interface ListTargetsRequest {
  readonly Filters: [];
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListTargetsResult {
  readonly Targets: [];
  readonly NextToken: string;
}

interface NotificationRuleSummary {
  readonly Id: string;
  readonly Arn: string;
}

interface ResourceAlreadyExistsException {
  readonly Message: string;
}

interface ResourceNotFoundException {
  readonly Message: string;
}

interface SubscribeRequest {
  readonly Arn: string;
  readonly Target: Target;
  readonly ClientRequestToken: string;
}

interface SubscribeResult {
  readonly Arn: string;
}

interface TagResourceRequest {
  readonly Arn: string;
  readonly Tags: {[key: string]: any};
}

interface TagResourceResult {
  readonly Tags: {[key: string]: any};
}

interface Target {
  readonly TargetType: string;
  readonly TargetAddress: string;
}

interface TargetSummary {
  readonly TargetAddress: string;
  readonly TargetType: string;
  readonly TargetStatus: string;
}

interface UnsubscribeRequest {
  readonly Arn: string;
  readonly TargetAddress: string;
}

interface UnsubscribeResult {
  readonly Arn: string;
}

interface UntagResourceRequest {
  readonly Arn: string;
  readonly TagKeys: [];
}

interface UntagResourceResult {
}

interface UpdateNotificationRuleRequest {
  readonly Arn: string;
  readonly Name: string;
  readonly Status: string;
  readonly EventTypeIds: [];
  readonly Targets: [];
  readonly DetailType: string;
}

interface UpdateNotificationRuleResult {
}

interface ValidationException {
  readonly Message: string;
}

