/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface AssociateChannelFlow {
  readonly ChannelArn: string;
  readonly ChannelFlowArn: string;
  readonly ChimeBearer: string;
}
export interface BatchCreateChannelMembership {
  readonly ChannelArn: string;
  readonly Type?: string;
  readonly MemberArns: [];
  readonly ChimeBearer: string;
}
export interface ChannelFlowCallback {
  readonly CallbackId: string;
  readonly ChannelArn: string;
  readonly DeleteResource?: boolean;
  readonly ChannelMessage: ChannelMessageCallback;
}
export interface CreateChannel {
  readonly AppInstanceArn: string;
  readonly Name: string;
  readonly Mode?: string;
  readonly Privacy?: string;
  readonly Metadata?: string;
  readonly ClientRequestToken: string;
  readonly Tags?: [];
  readonly ChimeBearer: string;
}
export interface CreateChannelBan {
  readonly ChannelArn: string;
  readonly MemberArn: string;
  readonly ChimeBearer: string;
}
export interface CreateChannelFlow {
  readonly AppInstanceArn: string;
  readonly Processors: [];
  readonly Name: string;
  readonly Tags?: [];
  readonly ClientRequestToken: string;
}
export interface CreateChannelMembership {
  readonly ChannelArn: string;
  readonly MemberArn: string;
  readonly Type: string;
  readonly ChimeBearer: string;
}
export interface CreateChannelModerator {
  readonly ChannelArn: string;
  readonly ChannelModeratorArn: string;
  readonly ChimeBearer: string;
}
export interface DeleteChannel {
  readonly ChannelArn: string;
  readonly ChimeBearer: string;
}
export interface DeleteChannelBan {
  readonly ChannelArn: string;
  readonly MemberArn: string;
  readonly ChimeBearer: string;
}
export interface DeleteChannelFlow {
  readonly ChannelFlowArn: string;
}
export interface DeleteChannelMembership {
  readonly ChannelArn: string;
  readonly MemberArn: string;
  readonly ChimeBearer: string;
}
export interface DeleteChannelMessage {
  readonly ChannelArn: string;
  readonly MessageId: string;
  readonly ChimeBearer: string;
}
export interface DeleteChannelModerator {
  readonly ChannelArn: string;
  readonly ChannelModeratorArn: string;
  readonly ChimeBearer: string;
}
export interface DescribeChannel {
  readonly ChannelArn: string;
  readonly ChimeBearer: string;
}
export interface DescribeChannelBan {
  readonly ChannelArn: string;
  readonly MemberArn: string;
  readonly ChimeBearer: string;
}
export interface DescribeChannelFlow {
  readonly ChannelFlowArn: string;
}
export interface DescribeChannelMembership {
  readonly ChannelArn: string;
  readonly MemberArn: string;
  readonly ChimeBearer: string;
}
export interface DescribeChannelMembershipForAppInstanceUser {
  readonly ChannelArn: string;
  readonly AppInstanceUserArn: string;
  readonly ChimeBearer: string;
}
export interface DescribeChannelModeratedByAppInstanceUser {
  readonly ChannelArn: string;
  readonly AppInstanceUserArn: string;
  readonly ChimeBearer: string;
}
export interface DescribeChannelModerator {
  readonly ChannelArn: string;
  readonly ChannelModeratorArn: string;
  readonly ChimeBearer: string;
}
export interface DisassociateChannelFlow {
  readonly ChannelArn: string;
  readonly ChannelFlowArn: string;
  readonly ChimeBearer: string;
}
export interface GetChannelMembershipPreferences {
  readonly ChannelArn: string;
  readonly MemberArn: string;
  readonly ChimeBearer: string;
}
export interface GetChannelMessage {
  readonly ChannelArn: string;
  readonly MessageId: string;
  readonly ChimeBearer: string;
}
export interface GetChannelMessageStatus {
  readonly ChannelArn: string;
  readonly MessageId: string;
  readonly ChimeBearer: string;
}
export interface GetMessagingSessionEndpoint {
}
export interface ListChannelBans {
  readonly ChannelArn: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
  readonly ChimeBearer: string;
}
export interface ListChannelFlows {
  readonly AppInstanceArn: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}
export interface ListChannelMemberships {
  readonly ChannelArn: string;
  readonly Type?: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
  readonly ChimeBearer: string;
}
export interface ListChannelMembershipsForAppInstanceUser {
  readonly AppInstanceUserArn?: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
  readonly ChimeBearer: string;
}
export interface ListChannelMessages {
  readonly ChannelArn: string;
  readonly SortOrder?: string;
  readonly NotBefore?: Date;
  readonly NotAfter?: Date;
  readonly MaxResults?: number;
  readonly NextToken?: string;
  readonly ChimeBearer: string;
}
export interface ListChannelModerators {
  readonly ChannelArn: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
  readonly ChimeBearer: string;
}
export interface ListChannels {
  readonly AppInstanceArn: string;
  readonly Privacy?: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
  readonly ChimeBearer: string;
}
export interface ListChannelsAssociatedWithChannelFlow {
  readonly ChannelFlowArn: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}
export interface ListChannelsModeratedByAppInstanceUser {
  readonly AppInstanceUserArn?: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
  readonly ChimeBearer: string;
}
export interface ListTagsForResource {
  readonly ResourceARN: string;
}
export interface PutChannelMembershipPreferences {
  readonly ChannelArn: string;
  readonly MemberArn: string;
  readonly ChimeBearer: string;
  readonly Preferences: ChannelMembershipPreferences;
}
export interface RedactChannelMessage {
  readonly ChannelArn: string;
  readonly MessageId: string;
  readonly ChimeBearer: string;
}
export interface SendChannelMessage {
  readonly ChannelArn: string;
  readonly Content: string;
  readonly Type: string;
  readonly Persistence: string;
  readonly Metadata?: string;
  readonly ClientRequestToken: string;
  readonly ChimeBearer: string;
  readonly PushNotification?: PushNotificationConfiguration;
  readonly MessageAttributes?: {[key: string]: any};
}
export interface TagResource {
  readonly ResourceARN: string;
  readonly Tags: [];
}
export interface UntagResource {
  readonly ResourceARN: string;
  readonly TagKeys: [];
}
export interface UpdateChannel {
  readonly ChannelArn: string;
  readonly Name: string;
  readonly Mode: string;
  readonly Metadata?: string;
  readonly ChimeBearer: string;
}
export interface UpdateChannelFlow {
  readonly ChannelFlowArn: string;
  readonly Processors: [];
  readonly Name: string;
}
export interface UpdateChannelMessage {
  readonly ChannelArn: string;
  readonly MessageId: string;
  readonly Content?: string;
  readonly Metadata?: string;
  readonly ChimeBearer: string;
}
export interface UpdateChannelReadMarker {
  readonly ChannelArn: string;
  readonly ChimeBearer: string;
}



interface AppInstanceUserMembershipSummary {
  readonly Type: string;
  readonly ReadMarkerTimestamp: Date;
}

interface AssociateChannelFlowRequest {
  readonly ChannelArn: string;
  readonly ChannelFlowArn: string;
  readonly ChimeBearer: string;
}

interface BadRequestException {
  readonly Code: string;
  readonly Message: string;
}

interface BatchChannelMemberships {
  readonly InvitedBy: Identity;
  readonly Type: string;
  readonly Members: [];
  readonly ChannelArn: string;
}

interface BatchCreateChannelMembershipError {
  readonly MemberArn: string;
  readonly ErrorCode: string;
  readonly ErrorMessage: string;
}

interface BatchCreateChannelMembershipRequest {
  readonly ChannelArn: string;
  readonly Type: string;
  readonly MemberArns: [];
  readonly ChimeBearer: string;
}

interface BatchCreateChannelMembershipResponse {
  readonly BatchChannelMemberships: BatchChannelMemberships;
  readonly Errors: [];
}

interface Channel {
  readonly Name: string;
  readonly ChannelArn: string;
  readonly Mode: string;
  readonly Privacy: string;
  readonly Metadata: string;
  readonly CreatedBy: Identity;
  readonly CreatedTimestamp: Date;
  readonly LastMessageTimestamp: Date;
  readonly LastUpdatedTimestamp: Date;
  readonly ChannelFlowArn: string;
}

interface ChannelAssociatedWithFlowSummary {
  readonly Name: string;
  readonly ChannelArn: string;
  readonly Mode: string;
  readonly Privacy: string;
  readonly Metadata: string;
}

interface ChannelBan {
  readonly Member: Identity;
  readonly ChannelArn: string;
  readonly CreatedTimestamp: Date;
  readonly CreatedBy: Identity;
}

interface ChannelBanSummary {
  readonly Member: Identity;
}

interface ChannelFlow {
  readonly ChannelFlowArn: string;
  readonly Processors: [];
  readonly Name: string;
  readonly CreatedTimestamp: Date;
  readonly LastUpdatedTimestamp: Date;
}

interface ChannelFlowCallbackRequest {
  readonly CallbackId: string;
  readonly ChannelArn: string;
  readonly DeleteResource: boolean;
  readonly ChannelMessage: ChannelMessageCallback;
}

interface ChannelFlowCallbackResponse {
  readonly ChannelArn: string;
  readonly CallbackId: string;
}

interface ChannelFlowSummary {
  readonly ChannelFlowArn: string;
  readonly Name: string;
  readonly Processors: [];
}

interface ChannelMembership {
  readonly InvitedBy: Identity;
  readonly Type: string;
  readonly Member: Identity;
  readonly ChannelArn: string;
  readonly CreatedTimestamp: Date;
  readonly LastUpdatedTimestamp: Date;
}

interface ChannelMembershipForAppInstanceUserSummary {
  readonly ChannelSummary: ChannelSummary;
  readonly AppInstanceUserMembershipSummary: AppInstanceUserMembershipSummary;
}

interface ChannelMembershipPreferences {
  readonly PushNotifications: PushNotificationPreferences;
}

interface ChannelMembershipSummary {
  readonly Member: Identity;
}

interface ChannelMessage {
  readonly ChannelArn: string;
  readonly MessageId: string;
  readonly Content: string;
  readonly Metadata: string;
  readonly Type: string;
  readonly CreatedTimestamp: Date;
  readonly LastEditedTimestamp: Date;
  readonly LastUpdatedTimestamp: Date;
  readonly Sender: Identity;
  readonly Redacted: boolean;
  readonly Persistence: string;
  readonly Status: ChannelMessageStatusStructure;
  readonly MessageAttributes: {[key: string]: any};
}

interface ChannelMessageCallback {
  readonly MessageId: string;
  readonly Content: string;
  readonly Metadata: string;
}

interface ChannelMessageStatusStructure {
  readonly Value: string;
  readonly Detail: string;
}

interface ChannelMessageSummary {
  readonly MessageId: string;
  readonly Content: string;
  readonly Metadata: string;
  readonly Type: string;
  readonly CreatedTimestamp: Date;
  readonly LastUpdatedTimestamp: Date;
  readonly LastEditedTimestamp: Date;
  readonly Sender: Identity;
  readonly Redacted: boolean;
  readonly Status: ChannelMessageStatusStructure;
  readonly MessageAttributes: {[key: string]: any};
}

interface ChannelModeratedByAppInstanceUserSummary {
  readonly ChannelSummary: ChannelSummary;
}

interface ChannelModerator {
  readonly Moderator: Identity;
  readonly ChannelArn: string;
  readonly CreatedTimestamp: Date;
  readonly CreatedBy: Identity;
}

interface ChannelModeratorSummary {
  readonly Moderator: Identity;
}

interface ChannelSummary {
  readonly Name: string;
  readonly ChannelArn: string;
  readonly Mode: string;
  readonly Privacy: string;
  readonly Metadata: string;
  readonly LastMessageTimestamp: Date;
}

interface ConflictException {
  readonly Code: string;
  readonly Message: string;
}

interface CreateChannelBanRequest {
  readonly ChannelArn: string;
  readonly MemberArn: string;
  readonly ChimeBearer: string;
}

interface CreateChannelBanResponse {
  readonly ChannelArn: string;
  readonly Member: Identity;
}

interface CreateChannelFlowRequest {
  readonly AppInstanceArn: string;
  readonly Processors: [];
  readonly Name: string;
  readonly Tags: [];
  readonly ClientRequestToken: string;
}

interface CreateChannelFlowResponse {
  readonly ChannelFlowArn: string;
}

interface CreateChannelMembershipRequest {
  readonly ChannelArn: string;
  readonly MemberArn: string;
  readonly Type: string;
  readonly ChimeBearer: string;
}

interface CreateChannelMembershipResponse {
  readonly ChannelArn: string;
  readonly Member: Identity;
}

interface CreateChannelModeratorRequest {
  readonly ChannelArn: string;
  readonly ChannelModeratorArn: string;
  readonly ChimeBearer: string;
}

interface CreateChannelModeratorResponse {
  readonly ChannelArn: string;
  readonly ChannelModerator: Identity;
}

interface CreateChannelRequest {
  readonly AppInstanceArn: string;
  readonly Name: string;
  readonly Mode: string;
  readonly Privacy: string;
  readonly Metadata: string;
  readonly ClientRequestToken: string;
  readonly Tags: [];
  readonly ChimeBearer: string;
}

interface CreateChannelResponse {
  readonly ChannelArn: string;
}

interface DeleteChannelBanRequest {
  readonly ChannelArn: string;
  readonly MemberArn: string;
  readonly ChimeBearer: string;
}

interface DeleteChannelFlowRequest {
  readonly ChannelFlowArn: string;
}

interface DeleteChannelMembershipRequest {
  readonly ChannelArn: string;
  readonly MemberArn: string;
  readonly ChimeBearer: string;
}

interface DeleteChannelMessageRequest {
  readonly ChannelArn: string;
  readonly MessageId: string;
  readonly ChimeBearer: string;
}

interface DeleteChannelModeratorRequest {
  readonly ChannelArn: string;
  readonly ChannelModeratorArn: string;
  readonly ChimeBearer: string;
}

interface DeleteChannelRequest {
  readonly ChannelArn: string;
  readonly ChimeBearer: string;
}

interface DescribeChannelBanRequest {
  readonly ChannelArn: string;
  readonly MemberArn: string;
  readonly ChimeBearer: string;
}

interface DescribeChannelBanResponse {
  readonly ChannelBan: ChannelBan;
}

interface DescribeChannelFlowRequest {
  readonly ChannelFlowArn: string;
}

interface DescribeChannelFlowResponse {
  readonly ChannelFlow: ChannelFlow;
}

interface DescribeChannelMembershipForAppInstanceUserRequest {
  readonly ChannelArn: string;
  readonly AppInstanceUserArn: string;
  readonly ChimeBearer: string;
}

interface DescribeChannelMembershipForAppInstanceUserResponse {
  readonly ChannelMembership: ChannelMembershipForAppInstanceUserSummary;
}

interface DescribeChannelMembershipRequest {
  readonly ChannelArn: string;
  readonly MemberArn: string;
  readonly ChimeBearer: string;
}

interface DescribeChannelMembershipResponse {
  readonly ChannelMembership: ChannelMembership;
}

interface DescribeChannelModeratedByAppInstanceUserRequest {
  readonly ChannelArn: string;
  readonly AppInstanceUserArn: string;
  readonly ChimeBearer: string;
}

interface DescribeChannelModeratedByAppInstanceUserResponse {
  readonly Channel: ChannelModeratedByAppInstanceUserSummary;
}

interface DescribeChannelModeratorRequest {
  readonly ChannelArn: string;
  readonly ChannelModeratorArn: string;
  readonly ChimeBearer: string;
}

interface DescribeChannelModeratorResponse {
  readonly ChannelModerator: ChannelModerator;
}

interface DescribeChannelRequest {
  readonly ChannelArn: string;
  readonly ChimeBearer: string;
}

interface DescribeChannelResponse {
  readonly Channel: Channel;
}

interface DisassociateChannelFlowRequest {
  readonly ChannelArn: string;
  readonly ChannelFlowArn: string;
  readonly ChimeBearer: string;
}

interface ForbiddenException {
  readonly Code: string;
  readonly Message: string;
}

interface GetChannelMembershipPreferencesRequest {
  readonly ChannelArn: string;
  readonly MemberArn: string;
  readonly ChimeBearer: string;
}

interface GetChannelMembershipPreferencesResponse {
  readonly ChannelArn: string;
  readonly Member: Identity;
  readonly Preferences: ChannelMembershipPreferences;
}

interface GetChannelMessageRequest {
  readonly ChannelArn: string;
  readonly MessageId: string;
  readonly ChimeBearer: string;
}

interface GetChannelMessageResponse {
  readonly ChannelMessage: ChannelMessage;
}

interface GetChannelMessageStatusRequest {
  readonly ChannelArn: string;
  readonly MessageId: string;
  readonly ChimeBearer: string;
}

interface GetChannelMessageStatusResponse {
  readonly Status: ChannelMessageStatusStructure;
}

interface GetMessagingSessionEndpointRequest {
}

interface GetMessagingSessionEndpointResponse {
  readonly Endpoint: MessagingSessionEndpoint;
}

interface Identity {
  readonly Arn: string;
  readonly Name: string;
}

interface LambdaConfiguration {
  readonly ResourceArn: string;
  readonly InvocationType: string;
}

interface ListChannelBansRequest {
  readonly ChannelArn: string;
  readonly MaxResults: number;
  readonly NextToken: string;
  readonly ChimeBearer: string;
}

interface ListChannelBansResponse {
  readonly ChannelArn: string;
  readonly NextToken: string;
  readonly ChannelBans: [];
}

interface ListChannelFlowsRequest {
  readonly AppInstanceArn: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface ListChannelFlowsResponse {
  readonly ChannelFlows: [];
  readonly NextToken: string;
}

interface ListChannelMembershipsForAppInstanceUserRequest {
  readonly AppInstanceUserArn: string;
  readonly MaxResults: number;
  readonly NextToken: string;
  readonly ChimeBearer: string;
}

interface ListChannelMembershipsForAppInstanceUserResponse {
  readonly ChannelMemberships: [];
  readonly NextToken: string;
}

interface ListChannelMembershipsRequest {
  readonly ChannelArn: string;
  readonly Type: string;
  readonly MaxResults: number;
  readonly NextToken: string;
  readonly ChimeBearer: string;
}

interface ListChannelMembershipsResponse {
  readonly ChannelArn: string;
  readonly ChannelMemberships: [];
  readonly NextToken: string;
}

interface ListChannelMessagesRequest {
  readonly ChannelArn: string;
  readonly SortOrder: string;
  readonly NotBefore: Date;
  readonly NotAfter: Date;
  readonly MaxResults: number;
  readonly NextToken: string;
  readonly ChimeBearer: string;
}

interface ListChannelMessagesResponse {
  readonly ChannelArn: string;
  readonly NextToken: string;
  readonly ChannelMessages: [];
}

interface ListChannelModeratorsRequest {
  readonly ChannelArn: string;
  readonly MaxResults: number;
  readonly NextToken: string;
  readonly ChimeBearer: string;
}

interface ListChannelModeratorsResponse {
  readonly ChannelArn: string;
  readonly NextToken: string;
  readonly ChannelModerators: [];
}

interface ListChannelsAssociatedWithChannelFlowRequest {
  readonly ChannelFlowArn: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface ListChannelsAssociatedWithChannelFlowResponse {
  readonly Channels: [];
  readonly NextToken: string;
}

interface ListChannelsModeratedByAppInstanceUserRequest {
  readonly AppInstanceUserArn: string;
  readonly MaxResults: number;
  readonly NextToken: string;
  readonly ChimeBearer: string;
}

interface ListChannelsModeratedByAppInstanceUserResponse {
  readonly Channels: [];
  readonly NextToken: string;
}

interface ListChannelsRequest {
  readonly AppInstanceArn: string;
  readonly Privacy: string;
  readonly MaxResults: number;
  readonly NextToken: string;
  readonly ChimeBearer: string;
}

interface ListChannelsResponse {
  readonly Channels: [];
  readonly NextToken: string;
}

interface ListTagsForResourceRequest {
  readonly ResourceARN: string;
}

interface ListTagsForResourceResponse {
  readonly Tags: [];
}

interface MessageAttributeValue {
  readonly StringValues: [];
}

interface MessagingSessionEndpoint {
  readonly Url: string;
}

interface NotFoundException {
  readonly Code: string;
  readonly Message: string;
}

interface Processor {
  readonly Name: string;
  readonly Configuration: ProcessorConfiguration;
  readonly ExecutionOrder: number;
  readonly FallbackAction: string;
}

interface ProcessorConfiguration {
  readonly Lambda: LambdaConfiguration;
}

interface PushNotificationConfiguration {
  readonly Title: string;
  readonly Body: string;
  readonly Type: string;
}

interface PushNotificationPreferences {
  readonly AllowNotifications: string;
  readonly FilterRule: string;
}

interface PutChannelMembershipPreferencesRequest {
  readonly ChannelArn: string;
  readonly MemberArn: string;
  readonly ChimeBearer: string;
  readonly Preferences: ChannelMembershipPreferences;
}

interface PutChannelMembershipPreferencesResponse {
  readonly ChannelArn: string;
  readonly Member: Identity;
  readonly Preferences: ChannelMembershipPreferences;
}

interface RedactChannelMessageRequest {
  readonly ChannelArn: string;
  readonly MessageId: string;
  readonly ChimeBearer: string;
}

interface RedactChannelMessageResponse {
  readonly ChannelArn: string;
  readonly MessageId: string;
}

interface ResourceLimitExceededException {
  readonly Code: string;
  readonly Message: string;
}

interface SendChannelMessageRequest {
  readonly ChannelArn: string;
  readonly Content: string;
  readonly Type: string;
  readonly Persistence: string;
  readonly Metadata: string;
  readonly ClientRequestToken: string;
  readonly ChimeBearer: string;
  readonly PushNotification: PushNotificationConfiguration;
  readonly MessageAttributes: {[key: string]: any};
}

interface SendChannelMessageResponse {
  readonly ChannelArn: string;
  readonly MessageId: string;
  readonly Status: ChannelMessageStatusStructure;
}

interface ServiceFailureException {
  readonly Code: string;
  readonly Message: string;
}

interface ServiceUnavailableException {
  readonly Code: string;
  readonly Message: string;
}

interface Tag {
  readonly Key: string;
  readonly Value: string;
}

interface TagResourceRequest {
  readonly ResourceARN: string;
  readonly Tags: [];
}

interface ThrottledClientException {
  readonly Code: string;
  readonly Message: string;
}

interface UnauthorizedClientException {
  readonly Code: string;
  readonly Message: string;
}

interface UntagResourceRequest {
  readonly ResourceARN: string;
  readonly TagKeys: [];
}

interface UpdateChannelFlowRequest {
  readonly ChannelFlowArn: string;
  readonly Processors: [];
  readonly Name: string;
}

interface UpdateChannelFlowResponse {
  readonly ChannelFlowArn: string;
}

interface UpdateChannelMessageRequest {
  readonly ChannelArn: string;
  readonly MessageId: string;
  readonly Content: string;
  readonly Metadata: string;
  readonly ChimeBearer: string;
}

interface UpdateChannelMessageResponse {
  readonly ChannelArn: string;
  readonly MessageId: string;
  readonly Status: ChannelMessageStatusStructure;
}

interface UpdateChannelReadMarkerRequest {
  readonly ChannelArn: string;
  readonly ChimeBearer: string;
}

interface UpdateChannelReadMarkerResponse {
  readonly ChannelArn: string;
}

interface UpdateChannelRequest {
  readonly ChannelArn: string;
  readonly Name: string;
  readonly Mode: string;
  readonly Metadata: string;
  readonly ChimeBearer: string;
}

interface UpdateChannelResponse {
  readonly ChannelArn: string;
}

