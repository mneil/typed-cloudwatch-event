/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface AssociateApplicationFleet {
  readonly FleetName: string;
  readonly ApplicationArn: string;
}
export interface AssociateFleet {
  readonly FleetName: string;
  readonly StackName: string;
}
export interface BatchAssociateUserStack {
  readonly UserStackAssociations: [];
}
export interface BatchDisassociateUserStack {
  readonly UserStackAssociations: [];
}
export interface CopyImage {
  readonly SourceImageName: string;
  readonly DestinationImageName: string;
  readonly DestinationRegion: string;
  readonly DestinationImageDescription?: string;
}
export interface CreateAppBlock {
  readonly Name: string;
  readonly Description?: string;
  readonly DisplayName?: string;
  readonly SourceS3Location: S3Location;
  readonly SetupScriptDetails: ScriptDetails;
  readonly Tags?: {[key: string]: any};
}
export interface CreateApplication {
  readonly Name: string;
  readonly DisplayName?: string;
  readonly Description?: string;
  readonly IconS3Location: S3Location;
  readonly LaunchPath: string;
  readonly WorkingDirectory?: string;
  readonly LaunchParameters?: string;
  readonly Platforms: [];
  readonly InstanceFamilies: [];
  readonly AppBlockArn: string;
  readonly Tags?: {[key: string]: any};
}
export interface CreateDirectoryConfig {
  readonly DirectoryName: string;
  readonly OrganizationalUnitDistinguishedNames: [];
  readonly ServiceAccountCredentials?: ServiceAccountCredentials;
}
export interface CreateFleet {
  readonly Name: string;
  readonly ImageName?: string;
  readonly ImageArn?: string;
  readonly InstanceType: string;
  readonly FleetType?: string;
  readonly ComputeCapacity?: ComputeCapacity;
  readonly VpcConfig?: VpcConfig;
  readonly MaxUserDurationInSeconds?: number;
  readonly DisconnectTimeoutInSeconds?: number;
  readonly Description?: string;
  readonly DisplayName?: string;
  readonly EnableDefaultInternetAccess?: boolean;
  readonly DomainJoinInfo?: DomainJoinInfo;
  readonly Tags?: {[key: string]: any};
  readonly IdleDisconnectTimeoutInSeconds?: number;
  readonly IamRoleArn?: string;
  readonly StreamView?: string;
  readonly Platform?: string;
  readonly MaxConcurrentSessions?: number;
  readonly UsbDeviceFilterStrings?: [];
}
export interface CreateImageBuilder {
  readonly Name: string;
  readonly ImageName?: string;
  readonly ImageArn?: string;
  readonly InstanceType: string;
  readonly Description?: string;
  readonly DisplayName?: string;
  readonly VpcConfig?: VpcConfig;
  readonly IamRoleArn?: string;
  readonly EnableDefaultInternetAccess?: boolean;
  readonly DomainJoinInfo?: DomainJoinInfo;
  readonly AppstreamAgentVersion?: string;
  readonly Tags?: {[key: string]: any};
  readonly AccessEndpoints?: [];
}
export interface CreateImageBuilderStreamingURL {
  readonly Name: string;
  readonly Validity?: number;
}
export interface CreateStack {
  readonly Name: string;
  readonly Description?: string;
  readonly DisplayName?: string;
  readonly StorageConnectors?: [];
  readonly RedirectURL?: string;
  readonly FeedbackURL?: string;
  readonly UserSettings?: [];
  readonly ApplicationSettings?: ApplicationSettings;
  readonly Tags?: {[key: string]: any};
  readonly AccessEndpoints?: [];
  readonly EmbedHostDomains?: [];
}
export interface CreateStreamingURL {
  readonly StackName: string;
  readonly FleetName: string;
  readonly UserId: string;
  readonly ApplicationId?: string;
  readonly Validity?: number;
  readonly SessionContext?: string;
}
export interface CreateUpdatedImage {
  readonly existingImageName: string;
  readonly newImageName: string;
  readonly newImageDescription?: string;
  readonly newImageDisplayName?: string;
  readonly newImageTags?: {[key: string]: any};
  readonly dryRun?: boolean;
}
export interface CreateUsageReportSubscription {
}
export interface CreateUser {
  readonly UserName: string;
  readonly MessageAction?: string;
  readonly FirstName?: string;
  readonly LastName?: string;
  readonly AuthenticationType: string;
}
export interface DeleteAppBlock {
  readonly Name: string;
}
export interface DeleteApplication {
  readonly Name: string;
}
export interface DeleteDirectoryConfig {
  readonly DirectoryName: string;
}
export interface DeleteFleet {
  readonly Name: string;
}
export interface DeleteImage {
  readonly Name: string;
}
export interface DeleteImageBuilder {
  readonly Name: string;
}
export interface DeleteImagePermissions {
  readonly Name: string;
  readonly SharedAccountId: string;
}
export interface DeleteStack {
  readonly Name: string;
}
export interface DeleteUsageReportSubscription {
}
export interface DeleteUser {
  readonly UserName: string;
  readonly AuthenticationType: string;
}
export interface DescribeAppBlocks {
  readonly Arns?: [];
  readonly NextToken?: string;
  readonly MaxResults?: number;
}
export interface DescribeApplicationFleetAssociations {
  readonly FleetName?: string;
  readonly ApplicationArn?: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}
export interface DescribeApplications {
  readonly Arns?: [];
  readonly NextToken?: string;
  readonly MaxResults?: number;
}
export interface DescribeDirectoryConfigs {
  readonly DirectoryNames?: [];
  readonly MaxResults?: number;
  readonly NextToken?: string;
}
export interface DescribeFleets {
  readonly Names?: [];
  readonly NextToken?: string;
}
export interface DescribeImageBuilders {
  readonly Names?: [];
  readonly MaxResults?: number;
  readonly NextToken?: string;
}
export interface DescribeImagePermissions {
  readonly Name: string;
  readonly MaxResults?: number;
  readonly SharedAwsAccountIds?: [];
  readonly NextToken?: string;
}
export interface DescribeImages {
  readonly Names?: [];
  readonly Arns?: [];
  readonly Type?: string;
  readonly NextToken?: string;
  readonly MaxResults?: number;
}
export interface DescribeSessions {
  readonly StackName: string;
  readonly FleetName: string;
  readonly UserId?: string;
  readonly NextToken?: string;
  readonly Limit?: number;
  readonly AuthenticationType?: string;
}
export interface DescribeStacks {
  readonly Names?: [];
  readonly NextToken?: string;
}
export interface DescribeUsageReportSubscriptions {
  readonly MaxResults?: number;
  readonly NextToken?: string;
}
export interface DescribeUserStackAssociations {
  readonly StackName?: string;
  readonly UserName?: string;
  readonly AuthenticationType?: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}
export interface DescribeUsers {
  readonly AuthenticationType: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}
export interface DisableUser {
  readonly UserName: string;
  readonly AuthenticationType: string;
}
export interface DisassociateApplicationFleet {
  readonly FleetName: string;
  readonly ApplicationArn: string;
}
export interface DisassociateFleet {
  readonly FleetName: string;
  readonly StackName: string;
}
export interface EnableUser {
  readonly UserName: string;
  readonly AuthenticationType: string;
}
export interface ExpireSession {
  readonly SessionId: string;
}
export interface ListAssociatedFleets {
  readonly StackName: string;
  readonly NextToken?: string;
}
export interface ListAssociatedStacks {
  readonly FleetName: string;
  readonly NextToken?: string;
}
export interface ListTagsForResource {
  readonly ResourceArn: string;
}
export interface StartFleet {
  readonly Name: string;
}
export interface StartImageBuilder {
  readonly Name: string;
  readonly AppstreamAgentVersion?: string;
}
export interface StopFleet {
  readonly Name: string;
}
export interface StopImageBuilder {
  readonly Name: string;
}
export interface TagResource {
  readonly ResourceArn: string;
  readonly Tags: {[key: string]: any};
}
export interface UntagResource {
  readonly ResourceArn: string;
  readonly TagKeys: [];
}
export interface UpdateApplication {
  readonly Name: string;
  readonly DisplayName?: string;
  readonly Description?: string;
  readonly IconS3Location?: S3Location;
  readonly LaunchPath?: string;
  readonly WorkingDirectory?: string;
  readonly LaunchParameters?: string;
  readonly AppBlockArn?: string;
  readonly AttributesToDelete?: [];
}
export interface UpdateDirectoryConfig {
  readonly DirectoryName: string;
  readonly OrganizationalUnitDistinguishedNames?: [];
  readonly ServiceAccountCredentials?: ServiceAccountCredentials;
}
export interface UpdateFleet {
  readonly ImageName?: string;
  readonly ImageArn?: string;
  readonly Name?: string;
  readonly InstanceType?: string;
  readonly ComputeCapacity?: ComputeCapacity;
  readonly VpcConfig?: VpcConfig;
  readonly MaxUserDurationInSeconds?: number;
  readonly DisconnectTimeoutInSeconds?: number;
  readonly DeleteVpcConfig?: boolean;
  readonly Description?: string;
  readonly DisplayName?: string;
  readonly EnableDefaultInternetAccess?: boolean;
  readonly DomainJoinInfo?: DomainJoinInfo;
  readonly IdleDisconnectTimeoutInSeconds?: number;
  readonly AttributesToDelete?: [];
  readonly IamRoleArn?: string;
  readonly StreamView?: string;
  readonly Platform?: string;
  readonly MaxConcurrentSessions?: number;
  readonly UsbDeviceFilterStrings?: [];
}
export interface UpdateImagePermissions {
  readonly Name: string;
  readonly SharedAccountId: string;
  readonly ImagePermissions: ImagePermissions;
}
export interface UpdateStack {
  readonly DisplayName?: string;
  readonly Description?: string;
  readonly Name: string;
  readonly StorageConnectors?: [];
  readonly DeleteStorageConnectors?: boolean;
  readonly RedirectURL?: string;
  readonly FeedbackURL?: string;
  readonly AttributesToDelete?: [];
  readonly UserSettings?: [];
  readonly ApplicationSettings?: ApplicationSettings;
  readonly AccessEndpoints?: [];
  readonly EmbedHostDomains?: [];
}



interface AccessEndpoint {
  readonly EndpointType: string;
  readonly VpceId: string;
}

interface AppBlock {
  readonly Name: string;
  readonly Arn: string;
  readonly Description: string;
  readonly DisplayName: string;
  readonly SourceS3Location: S3Location;
  readonly SetupScriptDetails: ScriptDetails;
  readonly CreatedTime: Date;
}

interface Application {
  readonly Name: string;
  readonly DisplayName: string;
  readonly IconURL: string;
  readonly LaunchPath: string;
  readonly LaunchParameters: string;
  readonly Enabled: boolean;
  readonly Metadata: {[key: string]: any};
  readonly WorkingDirectory: string;
  readonly Description: string;
  readonly Arn: string;
  readonly AppBlockArn: string;
  readonly IconS3Location: S3Location;
  readonly Platforms: [];
  readonly InstanceFamilies: [];
  readonly CreatedTime: Date;
}

interface ApplicationFleetAssociation {
  readonly FleetName: string;
  readonly ApplicationArn: string;
}

interface ApplicationSettings {
  readonly Enabled: boolean;
  readonly SettingsGroup: string;
}

interface ApplicationSettingsResponse {
  readonly Enabled: boolean;
  readonly SettingsGroup: string;
  readonly S3BucketName: string;
}

interface AssociateApplicationFleetRequest {
  readonly FleetName: string;
  readonly ApplicationArn: string;
}

interface AssociateApplicationFleetResult {
  readonly ApplicationFleetAssociation: ApplicationFleetAssociation;
}

interface AssociateFleetRequest {
  readonly FleetName: string;
  readonly StackName: string;
}

interface AssociateFleetResult {
}

interface BatchAssociateUserStackRequest {
  readonly UserStackAssociations: [];
}

interface BatchAssociateUserStackResult {
  readonly errors: [];
}

interface BatchDisassociateUserStackRequest {
  readonly UserStackAssociations: [];
}

interface BatchDisassociateUserStackResult {
  readonly errors: [];
}

interface ComputeCapacity {
  readonly DesiredInstances: number;
}

interface ComputeCapacityStatus {
  readonly Desired: number;
  readonly Running: number;
  readonly InUse: number;
  readonly Available: number;
}

interface ConcurrentModificationException {
  readonly Message: string;
}

interface CopyImageRequest {
  readonly SourceImageName: string;
  readonly DestinationImageName: string;
  readonly DestinationRegion: string;
  readonly DestinationImageDescription: string;
}

interface CopyImageResponse {
  readonly DestinationImageName: string;
}

interface CreateAppBlockRequest {
  readonly Name: string;
  readonly Description: string;
  readonly DisplayName: string;
  readonly SourceS3Location: S3Location;
  readonly SetupScriptDetails: ScriptDetails;
  readonly Tags: {[key: string]: any};
}

interface CreateAppBlockResult {
  readonly AppBlock: AppBlock;
}

interface CreateApplicationRequest {
  readonly Name: string;
  readonly DisplayName: string;
  readonly Description: string;
  readonly IconS3Location: S3Location;
  readonly LaunchPath: string;
  readonly WorkingDirectory: string;
  readonly LaunchParameters: string;
  readonly Platforms: [];
  readonly InstanceFamilies: [];
  readonly AppBlockArn: string;
  readonly Tags: {[key: string]: any};
}

interface CreateApplicationResult {
  readonly Application: Application;
}

interface CreateDirectoryConfigRequest {
  readonly DirectoryName: string;
  readonly OrganizationalUnitDistinguishedNames: [];
  readonly ServiceAccountCredentials: ServiceAccountCredentials;
}

interface CreateDirectoryConfigResult {
  readonly DirectoryConfig: DirectoryConfig;
}

interface CreateFleetRequest {
  readonly Name: string;
  readonly ImageName: string;
  readonly ImageArn: string;
  readonly InstanceType: string;
  readonly FleetType: string;
  readonly ComputeCapacity: ComputeCapacity;
  readonly VpcConfig: VpcConfig;
  readonly MaxUserDurationInSeconds: number;
  readonly DisconnectTimeoutInSeconds: number;
  readonly Description: string;
  readonly DisplayName: string;
  readonly EnableDefaultInternetAccess: boolean;
  readonly DomainJoinInfo: DomainJoinInfo;
  readonly Tags: {[key: string]: any};
  readonly IdleDisconnectTimeoutInSeconds: number;
  readonly IamRoleArn: string;
  readonly StreamView: string;
  readonly Platform: string;
  readonly MaxConcurrentSessions: number;
  readonly UsbDeviceFilterStrings: [];
}

interface CreateFleetResult {
  readonly Fleet: Fleet;
}

interface CreateImageBuilderRequest {
  readonly Name: string;
  readonly ImageName: string;
  readonly ImageArn: string;
  readonly InstanceType: string;
  readonly Description: string;
  readonly DisplayName: string;
  readonly VpcConfig: VpcConfig;
  readonly IamRoleArn: string;
  readonly EnableDefaultInternetAccess: boolean;
  readonly DomainJoinInfo: DomainJoinInfo;
  readonly AppstreamAgentVersion: string;
  readonly Tags: {[key: string]: any};
  readonly AccessEndpoints: [];
}

interface CreateImageBuilderResult {
  readonly ImageBuilder: ImageBuilder;
}

interface CreateImageBuilderStreamingURLRequest {
  readonly Name: string;
  readonly Validity: number;
}

interface CreateImageBuilderStreamingURLResult {
  readonly StreamingURL: string;
  readonly Expires: Date;
}

interface CreateStackRequest {
  readonly Name: string;
  readonly Description: string;
  readonly DisplayName: string;
  readonly StorageConnectors: [];
  readonly RedirectURL: string;
  readonly FeedbackURL: string;
  readonly UserSettings: [];
  readonly ApplicationSettings: ApplicationSettings;
  readonly Tags: {[key: string]: any};
  readonly AccessEndpoints: [];
  readonly EmbedHostDomains: [];
}

interface CreateStackResult {
  readonly Stack: Stack;
}

interface CreateStreamingURLRequest {
  readonly StackName: string;
  readonly FleetName: string;
  readonly UserId: string;
  readonly ApplicationId: string;
  readonly Validity: number;
  readonly SessionContext: string;
}

interface CreateStreamingURLResult {
  readonly StreamingURL: string;
  readonly Expires: Date;
}

interface CreateUpdatedImageRequest {
  readonly existingImageName: string;
  readonly newImageName: string;
  readonly newImageDescription: string;
  readonly newImageDisplayName: string;
  readonly newImageTags: {[key: string]: any};
  readonly dryRun: boolean;
}

interface CreateUpdatedImageResult {
  readonly image: Image;
  readonly canUpdateImage: boolean;
}

interface CreateUsageReportSubscriptionRequest {
}

interface CreateUsageReportSubscriptionResult {
  readonly S3BucketName: string;
  readonly Schedule: string;
}

interface CreateUserRequest {
  readonly UserName: string;
  readonly MessageAction: string;
  readonly FirstName: string;
  readonly LastName: string;
  readonly AuthenticationType: string;
}

interface CreateUserResult {
}

interface DeleteAppBlockRequest {
  readonly Name: string;
}

interface DeleteAppBlockResult {
}

interface DeleteApplicationRequest {
  readonly Name: string;
}

interface DeleteApplicationResult {
}

interface DeleteDirectoryConfigRequest {
  readonly DirectoryName: string;
}

interface DeleteDirectoryConfigResult {
}

interface DeleteFleetRequest {
  readonly Name: string;
}

interface DeleteFleetResult {
}

interface DeleteImageBuilderRequest {
  readonly Name: string;
}

interface DeleteImageBuilderResult {
  readonly ImageBuilder: ImageBuilder;
}

interface DeleteImagePermissionsRequest {
  readonly Name: string;
  readonly SharedAccountId: string;
}

interface DeleteImagePermissionsResult {
}

interface DeleteImageRequest {
  readonly Name: string;
}

interface DeleteImageResult {
  readonly Image: Image;
}

interface DeleteStackRequest {
  readonly Name: string;
}

interface DeleteStackResult {
}

interface DeleteUsageReportSubscriptionRequest {
}

interface DeleteUsageReportSubscriptionResult {
}

interface DeleteUserRequest {
  readonly UserName: string;
  readonly AuthenticationType: string;
}

interface DeleteUserResult {
}

interface DescribeAppBlocksRequest {
  readonly Arns: [];
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface DescribeAppBlocksResult {
  readonly AppBlocks: [];
  readonly NextToken: string;
}

interface DescribeApplicationFleetAssociationsRequest {
  readonly FleetName: string;
  readonly ApplicationArn: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface DescribeApplicationFleetAssociationsResult {
  readonly ApplicationFleetAssociations: [];
  readonly NextToken: string;
}

interface DescribeApplicationsRequest {
  readonly Arns: [];
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface DescribeApplicationsResult {
  readonly Applications: [];
  readonly NextToken: string;
}

interface DescribeDirectoryConfigsRequest {
  readonly DirectoryNames: [];
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface DescribeDirectoryConfigsResult {
  readonly DirectoryConfigs: [];
  readonly NextToken: string;
}

interface DescribeFleetsRequest {
  readonly Names: [];
  readonly NextToken: string;
}

interface DescribeFleetsResult {
  readonly Fleets: [];
  readonly NextToken: string;
}

interface DescribeImageBuildersRequest {
  readonly Names: [];
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface DescribeImageBuildersResult {
  readonly ImageBuilders: [];
  readonly NextToken: string;
}

interface DescribeImagePermissionsRequest {
  readonly Name: string;
  readonly MaxResults: number;
  readonly SharedAwsAccountIds: [];
  readonly NextToken: string;
}

interface DescribeImagePermissionsResult {
  readonly Name: string;
  readonly SharedImagePermissionsList: [];
  readonly NextToken: string;
}

interface DescribeImagesRequest {
  readonly Names: [];
  readonly Arns: [];
  readonly Type: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface DescribeImagesResult {
  readonly Images: [];
  readonly NextToken: string;
}

interface DescribeSessionsRequest {
  readonly StackName: string;
  readonly FleetName: string;
  readonly UserId: string;
  readonly NextToken: string;
  readonly Limit: number;
  readonly AuthenticationType: string;
}

interface DescribeSessionsResult {
  readonly Sessions: [];
  readonly NextToken: string;
}

interface DescribeStacksRequest {
  readonly Names: [];
  readonly NextToken: string;
}

interface DescribeStacksResult {
  readonly Stacks: [];
  readonly NextToken: string;
}

interface DescribeUsageReportSubscriptionsRequest {
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface DescribeUsageReportSubscriptionsResult {
  readonly UsageReportSubscriptions: [];
  readonly NextToken: string;
}

interface DescribeUserStackAssociationsRequest {
  readonly StackName: string;
  readonly UserName: string;
  readonly AuthenticationType: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface DescribeUserStackAssociationsResult {
  readonly UserStackAssociations: [];
  readonly NextToken: string;
}

interface DescribeUsersRequest {
  readonly AuthenticationType: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface DescribeUsersResult {
  readonly Users: [];
  readonly NextToken: string;
}

interface DirectoryConfig {
  readonly DirectoryName: string;
  readonly OrganizationalUnitDistinguishedNames: [];
  readonly ServiceAccountCredentials: ServiceAccountCredentials;
  readonly CreatedTime: Date;
}

interface DisableUserRequest {
  readonly UserName: string;
  readonly AuthenticationType: string;
}

interface DisableUserResult {
}

interface DisassociateApplicationFleetRequest {
  readonly FleetName: string;
  readonly ApplicationArn: string;
}

interface DisassociateApplicationFleetResult {
}

interface DisassociateFleetRequest {
  readonly FleetName: string;
  readonly StackName: string;
}

interface DisassociateFleetResult {
}

interface DomainJoinInfo {
  readonly DirectoryName: string;
  readonly OrganizationalUnitDistinguishedName: string;
}

interface EnableUserRequest {
  readonly UserName: string;
  readonly AuthenticationType: string;
}

interface EnableUserResult {
}

interface ExpireSessionRequest {
  readonly SessionId: string;
}

interface ExpireSessionResult {
}

interface Fleet {
  readonly Arn: string;
  readonly Name: string;
  readonly DisplayName: string;
  readonly Description: string;
  readonly ImageName: string;
  readonly ImageArn: string;
  readonly InstanceType: string;
  readonly FleetType: string;
  readonly ComputeCapacityStatus: ComputeCapacityStatus;
  readonly MaxUserDurationInSeconds: number;
  readonly DisconnectTimeoutInSeconds: number;
  readonly State: string;
  readonly VpcConfig: VpcConfig;
  readonly CreatedTime: Date;
  readonly FleetErrors: [];
  readonly EnableDefaultInternetAccess: boolean;
  readonly DomainJoinInfo: DomainJoinInfo;
  readonly IdleDisconnectTimeoutInSeconds: number;
  readonly IamRoleArn: string;
  readonly StreamView: string;
  readonly Platform: string;
  readonly MaxConcurrentSessions: number;
  readonly UsbDeviceFilterStrings: [];
}

interface FleetError {
  readonly ErrorCode: string;
  readonly ErrorMessage: string;
}

interface Image {
  readonly Name: string;
  readonly Arn: string;
  readonly BaseImageArn: string;
  readonly DisplayName: string;
  readonly State: string;
  readonly Visibility: string;
  readonly ImageBuilderSupported: boolean;
  readonly ImageBuilderName: string;
  readonly Platform: string;
  readonly Description: string;
  readonly StateChangeReason: ImageStateChangeReason;
  readonly Applications: [];
  readonly CreatedTime: Date;
  readonly PublicBaseImageReleasedDate: Date;
  readonly AppstreamAgentVersion: string;
  readonly ImagePermissions: ImagePermissions;
  readonly ImageErrors: [];
}

interface ImageBuilder {
  readonly Name: string;
  readonly Arn: string;
  readonly ImageArn: string;
  readonly Description: string;
  readonly DisplayName: string;
  readonly VpcConfig: VpcConfig;
  readonly InstanceType: string;
  readonly Platform: string;
  readonly IamRoleArn: string;
  readonly State: string;
  readonly StateChangeReason: ImageBuilderStateChangeReason;
  readonly CreatedTime: Date;
  readonly EnableDefaultInternetAccess: boolean;
  readonly DomainJoinInfo: DomainJoinInfo;
  readonly NetworkAccessConfiguration: NetworkAccessConfiguration;
  readonly ImageBuilderErrors: [];
  readonly AppstreamAgentVersion: string;
  readonly AccessEndpoints: [];
}

interface ImageBuilderStateChangeReason {
  readonly Code: string;
  readonly Message: string;
}

interface ImagePermissions {
  readonly allowFleet: boolean;
  readonly allowImageBuilder: boolean;
}

interface ImageStateChangeReason {
  readonly Code: string;
  readonly Message: string;
}

interface IncompatibleImageException {
  readonly Message: string;
}

interface InvalidAccountStatusException {
  readonly Message: string;
}

interface InvalidParameterCombinationException {
  readonly Message: string;
}

interface InvalidRoleException {
  readonly Message: string;
}

interface LastReportGenerationExecutionError {
  readonly ErrorCode: string;
  readonly ErrorMessage: string;
}

interface LimitExceededException {
  readonly Message: string;
}

interface ListAssociatedFleetsRequest {
  readonly StackName: string;
  readonly NextToken: string;
}

interface ListAssociatedFleetsResult {
  readonly Names: [];
  readonly NextToken: string;
}

interface ListAssociatedStacksRequest {
  readonly FleetName: string;
  readonly NextToken: string;
}

interface ListAssociatedStacksResult {
  readonly Names: [];
  readonly NextToken: string;
}

interface ListTagsForResourceRequest {
  readonly ResourceArn: string;
}

interface ListTagsForResourceResponse {
  readonly Tags: {[key: string]: any};
}

interface NetworkAccessConfiguration {
  readonly EniPrivateIpAddress: string;
  readonly EniId: string;
}

interface OperationNotPermittedException {
  readonly Message: string;
}

interface RequestLimitExceededException {
  readonly Message: string;
}

interface ResourceAlreadyExistsException {
  readonly Message: string;
}

interface ResourceError {
  readonly ErrorCode: string;
  readonly ErrorMessage: string;
  readonly ErrorTimestamp: Date;
}

interface ResourceInUseException {
  readonly Message: string;
}

interface ResourceNotAvailableException {
  readonly Message: string;
}

interface ResourceNotFoundException {
  readonly Message: string;
}

interface S3Location {
  readonly S3Bucket: string;
  readonly S3Key: string;
}

interface ScriptDetails {
  readonly ScriptS3Location: S3Location;
  readonly ExecutablePath: string;
  readonly ExecutableParameters: string;
  readonly TimeoutInSeconds: number;
}

interface ServiceAccountCredentials {
  readonly AccountName: string;
  readonly AccountPassword: string;
}

interface Session {
  readonly Id: string;
  readonly UserId: string;
  readonly StackName: string;
  readonly FleetName: string;
  readonly State: string;
  readonly ConnectionState: string;
  readonly StartTime: Date;
  readonly MaxExpirationTime: Date;
  readonly AuthenticationType: string;
  readonly NetworkAccessConfiguration: NetworkAccessConfiguration;
}

interface SharedImagePermissions {
  readonly sharedAccountId: string;
  readonly imagePermissions: ImagePermissions;
}

interface Stack {
  readonly Arn: string;
  readonly Name: string;
  readonly Description: string;
  readonly DisplayName: string;
  readonly CreatedTime: Date;
  readonly StorageConnectors: [];
  readonly RedirectURL: string;
  readonly FeedbackURL: string;
  readonly StackErrors: [];
  readonly UserSettings: [];
  readonly ApplicationSettings: ApplicationSettingsResponse;
  readonly AccessEndpoints: [];
  readonly EmbedHostDomains: [];
}

interface StackError {
  readonly ErrorCode: string;
  readonly ErrorMessage: string;
}

interface StartFleetRequest {
  readonly Name: string;
}

interface StartFleetResult {
}

interface StartImageBuilderRequest {
  readonly Name: string;
  readonly AppstreamAgentVersion: string;
}

interface StartImageBuilderResult {
  readonly ImageBuilder: ImageBuilder;
}

interface StopFleetRequest {
  readonly Name: string;
}

interface StopFleetResult {
}

interface StopImageBuilderRequest {
  readonly Name: string;
}

interface StopImageBuilderResult {
  readonly ImageBuilder: ImageBuilder;
}

interface StorageConnector {
  readonly ConnectorType: string;
  readonly ResourceIdentifier: string;
  readonly Domains: [];
}

interface TagResourceRequest {
  readonly ResourceArn: string;
  readonly Tags: {[key: string]: any};
}

interface TagResourceResponse {
}

interface UntagResourceRequest {
  readonly ResourceArn: string;
  readonly TagKeys: [];
}

interface UntagResourceResponse {
}

interface UpdateApplicationRequest {
  readonly Name: string;
  readonly DisplayName: string;
  readonly Description: string;
  readonly IconS3Location: S3Location;
  readonly LaunchPath: string;
  readonly WorkingDirectory: string;
  readonly LaunchParameters: string;
  readonly AppBlockArn: string;
  readonly AttributesToDelete: [];
}

interface UpdateApplicationResult {
  readonly Application: Application;
}

interface UpdateDirectoryConfigRequest {
  readonly DirectoryName: string;
  readonly OrganizationalUnitDistinguishedNames: [];
  readonly ServiceAccountCredentials: ServiceAccountCredentials;
}

interface UpdateDirectoryConfigResult {
  readonly DirectoryConfig: DirectoryConfig;
}

interface UpdateFleetRequest {
  readonly ImageName: string;
  readonly ImageArn: string;
  readonly Name: string;
  readonly InstanceType: string;
  readonly ComputeCapacity: ComputeCapacity;
  readonly VpcConfig: VpcConfig;
  readonly MaxUserDurationInSeconds: number;
  readonly DisconnectTimeoutInSeconds: number;
  readonly DeleteVpcConfig: boolean;
  readonly Description: string;
  readonly DisplayName: string;
  readonly EnableDefaultInternetAccess: boolean;
  readonly DomainJoinInfo: DomainJoinInfo;
  readonly IdleDisconnectTimeoutInSeconds: number;
  readonly AttributesToDelete: [];
  readonly IamRoleArn: string;
  readonly StreamView: string;
  readonly Platform: string;
  readonly MaxConcurrentSessions: number;
  readonly UsbDeviceFilterStrings: [];
}

interface UpdateFleetResult {
  readonly Fleet: Fleet;
}

interface UpdateImagePermissionsRequest {
  readonly Name: string;
  readonly SharedAccountId: string;
  readonly ImagePermissions: ImagePermissions;
}

interface UpdateImagePermissionsResult {
}

interface UpdateStackRequest {
  readonly DisplayName: string;
  readonly Description: string;
  readonly Name: string;
  readonly StorageConnectors: [];
  readonly DeleteStorageConnectors: boolean;
  readonly RedirectURL: string;
  readonly FeedbackURL: string;
  readonly AttributesToDelete: [];
  readonly UserSettings: [];
  readonly ApplicationSettings: ApplicationSettings;
  readonly AccessEndpoints: [];
  readonly EmbedHostDomains: [];
}

interface UpdateStackResult {
  readonly Stack: Stack;
}

interface UsageReportSubscription {
  readonly S3BucketName: string;
  readonly Schedule: string;
  readonly LastGeneratedReportDate: Date;
  readonly SubscriptionErrors: [];
}

interface User {
  readonly Arn: string;
  readonly UserName: string;
  readonly Enabled: boolean;
  readonly Status: string;
  readonly FirstName: string;
  readonly LastName: string;
  readonly CreatedTime: Date;
  readonly AuthenticationType: string;
}

interface UserSetting {
  readonly Action: string;
  readonly Permission: string;
}

interface UserStackAssociation {
  readonly StackName: string;
  readonly UserName: string;
  readonly AuthenticationType: string;
  readonly SendEmailNotification: boolean;
}

interface UserStackAssociationError {
  readonly UserStackAssociation: UserStackAssociation;
  readonly ErrorCode: string;
  readonly ErrorMessage: string;
}

interface VpcConfig {
  readonly SubnetIds: [];
  readonly SecurityGroupIds: [];
}

