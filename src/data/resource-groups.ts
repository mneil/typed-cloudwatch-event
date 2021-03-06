/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface CreateGroup {
  readonly Name: string;
  readonly Description?: string;
  readonly ResourceQuery?: ResourceQuery;
  readonly Tags?: {[key: string]: any};
  readonly Configuration?: [];
}
export interface DeleteGroup {
  readonly GroupName?: string;
  readonly Group?: string;
}
export interface GetGroup {
  readonly GroupName?: string;
  readonly Group?: string;
}
export interface GetGroupConfiguration {
  readonly Group?: string;
}
export interface GetGroupQuery {
  readonly GroupName?: string;
  readonly Group?: string;
}
export interface GetTags {
  readonly Arn: string;
}
export interface GroupResources {
  readonly Group: string;
  readonly ResourceArns: [];
}
export interface ListGroupResources {
  readonly GroupName?: string;
  readonly Group?: string;
  readonly Filters?: [];
  readonly MaxResults?: number;
  readonly NextToken?: string;
}
export interface ListGroups {
  readonly Filters?: [];
  readonly MaxResults?: number;
  readonly NextToken?: string;
}
export interface PutGroupConfiguration {
  readonly Group?: string;
  readonly Configuration?: [];
}
export interface SearchResources {
  readonly ResourceQuery: ResourceQuery;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}
export interface Tag {
  readonly Arn: string;
  readonly Tags: {[key: string]: any};
}
export interface UngroupResources {
  readonly Group: string;
  readonly ResourceArns: [];
}
export interface Untag {
  readonly Arn: string;
  readonly Keys: [];
}
export interface UpdateGroup {
  readonly GroupName?: string;
  readonly Group?: string;
  readonly Description?: string;
}
export interface UpdateGroupQuery {
  readonly GroupName?: string;
  readonly Group?: string;
  readonly ResourceQuery: ResourceQuery;
}



interface BadRequestException {
  readonly Message: string;
}

interface CreateGroupInput {
  readonly Name: string;
  readonly Description: string;
  readonly ResourceQuery: ResourceQuery;
  readonly Tags: {[key: string]: any};
  readonly Configuration: [];
}

interface CreateGroupOutput {
  readonly Group: Group;
  readonly ResourceQuery: ResourceQuery;
  readonly Tags: {[key: string]: any};
  readonly GroupConfiguration: GroupConfiguration;
}

interface DeleteGroupInput {
  readonly GroupName: string;
  readonly Group: string;
}

interface DeleteGroupOutput {
  readonly Group: Group;
}

interface FailedResource {
  readonly ResourceArn: string;
  readonly ErrorMessage: string;
  readonly ErrorCode: string;
}

interface ForbiddenException {
  readonly Message: string;
}

interface GetGroupConfigurationInput {
  readonly Group: string;
}

interface GetGroupConfigurationOutput {
  readonly GroupConfiguration: GroupConfiguration;
}

interface GetGroupInput {
  readonly GroupName: string;
  readonly Group: string;
}

interface GetGroupOutput {
  readonly Group: Group;
}

interface GetGroupQueryInput {
  readonly GroupName: string;
  readonly Group: string;
}

interface GetGroupQueryOutput {
  readonly GroupQuery: GroupQuery;
}

interface GetTagsInput {
  readonly Arn: string;
}

interface GetTagsOutput {
  readonly Arn: string;
  readonly Tags: {[key: string]: any};
}

interface Group {
  readonly GroupArn: string;
  readonly Name: string;
  readonly Description: string;
}

interface GroupConfiguration {
  readonly Configuration: [];
  readonly ProposedConfiguration: [];
  readonly Status: string;
  readonly FailureReason: string;
}

interface GroupConfigurationItem {
  readonly Type: string;
  readonly Parameters: [];
}

interface GroupConfigurationParameter {
  readonly Name: string;
  readonly Values: [];
}

interface GroupFilter {
  readonly Name: string;
  readonly Values: [];
}

interface GroupIdentifier {
  readonly GroupName: string;
  readonly GroupArn: string;
}

interface GroupQuery {
  readonly GroupName: string;
  readonly ResourceQuery: ResourceQuery;
}

interface GroupResourcesInput {
  readonly Group: string;
  readonly ResourceArns: [];
}

interface GroupResourcesOutput {
  readonly Succeeded: [];
  readonly Failed: [];
  readonly Pending: [];
}

interface InternalServerErrorException {
  readonly Message: string;
}

interface ListGroupResourcesInput {
  readonly GroupName: string;
  readonly Group: string;
  readonly Filters: [];
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface ListGroupResourcesItem {
  readonly Identifier: ResourceIdentifier;
  readonly Status: ResourceStatus;
}

interface ListGroupResourcesOutput {
  readonly Resources: [];
  readonly ResourceIdentifiers: [];
  readonly NextToken: string;
  readonly QueryErrors: [];
}

interface ListGroupsInput {
  readonly Filters: [];
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface ListGroupsOutput {
  readonly GroupIdentifiers: [];
  readonly Groups: [];
  readonly NextToken: string;
}

interface MethodNotAllowedException {
  readonly Message: string;
}

interface NotFoundException {
  readonly Message: string;
}

interface PendingResource {
  readonly ResourceArn: string;
}

interface PutGroupConfigurationInput {
  readonly Group: string;
  readonly Configuration: [];
}

interface PutGroupConfigurationOutput {
}

interface QueryError {
  readonly ErrorCode: string;
  readonly Message: string;
}

interface ResourceFilter {
  readonly Name: string;
  readonly Values: [];
}

interface ResourceIdentifier {
  readonly ResourceArn: string;
  readonly ResourceType: string;
}

interface ResourceQuery {
  readonly Type: string;
  readonly Query: string;
}

interface ResourceStatus {
  readonly Name: string;
}

interface SearchResourcesInput {
  readonly ResourceQuery: ResourceQuery;
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface SearchResourcesOutput {
  readonly ResourceIdentifiers: [];
  readonly NextToken: string;
  readonly QueryErrors: [];
}

interface TagInput {
  readonly Arn: string;
  readonly Tags: {[key: string]: any};
}

interface TagOutput {
  readonly Arn: string;
  readonly Tags: {[key: string]: any};
}

interface TooManyRequestsException {
  readonly Message: string;
}

interface UnauthorizedException {
  readonly Message: string;
}

interface UngroupResourcesInput {
  readonly Group: string;
  readonly ResourceArns: [];
}

interface UngroupResourcesOutput {
  readonly Succeeded: [];
  readonly Failed: [];
  readonly Pending: [];
}

interface UntagInput {
  readonly Arn: string;
  readonly Keys: [];
}

interface UntagOutput {
  readonly Arn: string;
  readonly Keys: [];
}

interface UpdateGroupInput {
  readonly GroupName: string;
  readonly Group: string;
  readonly Description: string;
}

interface UpdateGroupOutput {
  readonly Group: Group;
}

interface UpdateGroupQueryInput {
  readonly GroupName: string;
  readonly Group: string;
  readonly ResourceQuery: ResourceQuery;
}

interface UpdateGroupQueryOutput {
  readonly GroupQuery: GroupQuery;
}

