/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface CloneBackend {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly TargetEnvironmentName: string;
}
export interface CreateBackend {
  readonly AppId: string;
  readonly AppName: string;
  readonly BackendEnvironmentName: string;
  readonly ResourceConfig: ResourceConfig;
  readonly ResourceName: string;
}
export interface CreateBackendAPI {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly ResourceConfig: BackendAPIResourceConfig;
  readonly ResourceName: string;
}
export interface CreateBackendAuth {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly ResourceConfig: CreateBackendAuthResourceConfig;
  readonly ResourceName: string;
}
export interface CreateBackendConfig {
  readonly AppId: string;
  readonly BackendManagerAppId: string;
}
export interface CreateBackendStorage {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly ResourceConfig: CreateBackendStorageResourceConfig;
  readonly ResourceName: string;
}
export interface CreateToken {
  readonly AppId: string;
}
export interface DeleteBackend {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
}
export interface DeleteBackendAPI {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly ResourceConfig: BackendAPIResourceConfig;
  readonly ResourceName: string;
}
export interface DeleteBackendAuth {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly ResourceName: string;
}
export interface DeleteBackendStorage {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly ResourceName: string;
  readonly ServiceName: string;
}
export interface DeleteToken {
  readonly AppId: string;
  readonly SessionId: string;
}
export interface GenerateBackendAPIModels {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly ResourceName: string;
}
export interface GetBackend {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
}
export interface GetBackendAPI {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly ResourceConfig: BackendAPIResourceConfig;
  readonly ResourceName: string;
}
export interface GetBackendAPIModels {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly ResourceName: string;
}
export interface GetBackendAuth {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly ResourceName: string;
}
export interface GetBackendJob {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly JobId: string;
}
export interface GetBackendStorage {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly ResourceName: string;
}
export interface GetToken {
  readonly AppId: string;
  readonly SessionId: string;
}
export interface ImportBackendAuth {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly IdentityPoolId: string;
  readonly NativeClientId: string;
  readonly UserPoolId: string;
  readonly WebClientId: string;
}
export interface ImportBackendStorage {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly BucketName: string;
  readonly ServiceName: string;
}
export interface ListBackendJobs {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly JobId: string;
  readonly MaxResults: number;
  readonly NextToken: string;
  readonly Operation: string;
  readonly Status: string;
}
export interface ListS3Buckets {
  readonly NextToken: string;
}
export interface RemoveAllBackends {
  readonly AppId: string;
  readonly CleanAmplifyApp: boolean;
}
export interface RemoveBackendConfig {
  readonly AppId: string;
}
export interface UpdateBackendAPI {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly ResourceConfig: BackendAPIResourceConfig;
  readonly ResourceName: string;
}
export interface UpdateBackendAuth {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly ResourceConfig: UpdateBackendAuthResourceConfig;
  readonly ResourceName: string;
}
export interface UpdateBackendConfig {
  readonly AppId: string;
  readonly LoginAuthConfig: LoginAuthConfigReqObj;
}
export interface UpdateBackendJob {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly JobId: string;
  readonly Operation: string;
  readonly Status: string;
}
export interface UpdateBackendStorage {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly ResourceConfig: UpdateBackendStorageResourceConfig;
  readonly ResourceName: string;
}



interface BackendAPIAppSyncAuthSettings {
  readonly CognitoUserPoolId: string;
  readonly Description: string;
  readonly ExpirationTime: unknown;
  readonly OpenIDAuthTTL: string;
  readonly OpenIDClientId: string;
  readonly OpenIDIatTTL: string;
  readonly OpenIDIssueURL: string;
  readonly OpenIDProviderName: string;
}

interface BackendAPIAuthType {
  readonly Mode: string;
  readonly Settings: BackendAPIAppSyncAuthSettings;
}

interface BackendAPICodegenReqObj {
  readonly ResourceName: string;
}

interface BackendAPICodegenRespObj {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly Error: string;
  readonly JobId: string;
  readonly Operation: string;
  readonly Status: string;
}

interface BackendAPIConflictResolution {
  readonly ResolutionStrategy: string;
}

interface BackendAPIReqObj {
  readonly ResourceConfig: BackendAPIResourceConfig;
  readonly ResourceName: string;
}

interface BackendAPIResourceConfig {
  readonly AdditionalAuthTypes: [];
  readonly ApiName: string;
  readonly ConflictResolution: BackendAPIConflictResolution;
  readonly DefaultAuthType: BackendAPIAuthType;
  readonly Service: string;
  readonly TransformSchema: string;
}

interface BackendAPIRespObj {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly Error: string;
  readonly JobId: string;
  readonly Operation: string;
  readonly Status: string;
}

interface BackendAuthAppleProviderConfig {
  readonly ClientId: string;
  readonly KeyId: string;
  readonly PrivateKey: string;
  readonly TeamId: string;
}

interface BackendAuthRespObj {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly Error: string;
  readonly JobId: string;
  readonly Operation: string;
  readonly Status: string;
}

interface BackendAuthSocialProviderConfig {
  readonly ClientId: string;
  readonly ClientSecret: string;
}

interface BackendConfigRespObj {
  readonly AppId: string;
  readonly BackendManagerAppId: string;
  readonly Error: string;
  readonly LoginAuthConfig: LoginAuthConfigReqObj;
}

interface BackendJobReqObj {
  readonly Operation: string;
  readonly Status: string;
}

interface BackendJobRespObj {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly CreateTime: string;
  readonly Error: string;
  readonly JobId: string;
  readonly Operation: string;
  readonly Status: string;
  readonly UpdateTime: string;
}

interface BackendStoragePermissions {
  readonly Authenticated: [];
  readonly UnAuthenticated: [];
}

interface BackendStorageRespObj {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly JobId: string;
  readonly Status: string;
}

interface BadRequestException {
  readonly Message: string;
}

interface CloneBackendReqObj {
  readonly TargetEnvironmentName: string;
}

interface CloneBackendRequest {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly TargetEnvironmentName: string;
}

interface CloneBackendRespObj {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly Error: string;
  readonly JobId: string;
  readonly Operation: string;
  readonly Status: string;
}

interface CloneBackendResponse {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly Error: string;
  readonly JobId: string;
  readonly Operation: string;
  readonly Status: string;
}

interface CreateBackendAPIReqObj {
  readonly BackendEnvironmentName: string;
  readonly ResourceConfig: BackendAPIResourceConfig;
  readonly ResourceName: string;
}

interface CreateBackendAPIRequest {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly ResourceConfig: BackendAPIResourceConfig;
  readonly ResourceName: string;
}

interface CreateBackendAPIResponse {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly Error: string;
  readonly JobId: string;
  readonly Operation: string;
  readonly Status: string;
}

interface CreateBackendAuthForgotPasswordConfig {
  readonly DeliveryMethod: string;
  readonly EmailSettings: EmailSettings;
  readonly SmsSettings: SmsSettings;
}

interface CreateBackendAuthIdentityPoolConfig {
  readonly IdentityPoolName: string;
  readonly UnauthenticatedLogin: boolean;
}

interface CreateBackendAuthMFAConfig {
  readonly MFAMode: string;
  readonly Settings: Settings;
}

interface CreateBackendAuthOAuthConfig {
  readonly DomainPrefix: string;
  readonly OAuthGrantType: string;
  readonly OAuthScopes: [];
  readonly RedirectSignInURIs: [];
  readonly RedirectSignOutURIs: [];
  readonly SocialProviderSettings: SocialProviderSettings;
}

interface CreateBackendAuthPasswordPolicyConfig {
  readonly AdditionalConstraints: [];
  readonly MinimumLength: unknown;
}

interface CreateBackendAuthReqObj {
  readonly BackendEnvironmentName: string;
  readonly ResourceConfig: CreateBackendAuthResourceConfig;
  readonly ResourceName: string;
}

interface CreateBackendAuthRequest {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly ResourceConfig: CreateBackendAuthResourceConfig;
  readonly ResourceName: string;
}

interface CreateBackendAuthResourceConfig {
  readonly AuthResources: string;
  readonly IdentityPoolConfigs: CreateBackendAuthIdentityPoolConfig;
  readonly Service: string;
  readonly UserPoolConfigs: CreateBackendAuthUserPoolConfig;
}

interface CreateBackendAuthResponse {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly Error: string;
  readonly JobId: string;
  readonly Operation: string;
  readonly Status: string;
}

interface CreateBackendAuthUserPoolConfig {
  readonly ForgotPassword: CreateBackendAuthForgotPasswordConfig;
  readonly Mfa: CreateBackendAuthMFAConfig;
  readonly OAuth: CreateBackendAuthOAuthConfig;
  readonly PasswordPolicy: CreateBackendAuthPasswordPolicyConfig;
  readonly RequiredSignUpAttributes: [];
  readonly SignInMethod: string;
  readonly UserPoolName: string;
}

interface CreateBackendConfigReqObj {
  readonly BackendManagerAppId: string;
}

interface CreateBackendConfigRequest {
  readonly AppId: string;
  readonly BackendManagerAppId: string;
}

interface CreateBackendConfigRespObj {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly JobId: string;
  readonly Status: string;
}

interface CreateBackendConfigResponse {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly JobId: string;
  readonly Status: string;
}

interface CreateBackendReqObj {
  readonly AppId: string;
  readonly AppName: string;
  readonly BackendEnvironmentName: string;
  readonly ResourceConfig: ResourceConfig;
  readonly ResourceName: string;
}

interface CreateBackendRequest {
  readonly AppId: string;
  readonly AppName: string;
  readonly BackendEnvironmentName: string;
  readonly ResourceConfig: ResourceConfig;
  readonly ResourceName: string;
}

interface CreateBackendRespObj {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly Error: string;
  readonly JobId: string;
  readonly Operation: string;
  readonly Status: string;
}

interface CreateBackendResponse {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly Error: string;
  readonly JobId: string;
  readonly Operation: string;
  readonly Status: string;
}

interface CreateBackendStorageReqObj {
  readonly BackendEnvironmentName: string;
  readonly ResourceConfig: CreateBackendStorageResourceConfig;
  readonly ResourceName: string;
}

interface CreateBackendStorageRequest {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly ResourceConfig: CreateBackendStorageResourceConfig;
  readonly ResourceName: string;
}

interface CreateBackendStorageResourceConfig {
  readonly BucketName: string;
  readonly Permissions: BackendStoragePermissions;
  readonly ServiceName: string;
}

interface CreateBackendStorageResponse {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly JobId: string;
  readonly Status: string;
}

interface CreateTokenRequest {
  readonly AppId: string;
}

interface CreateTokenRespObj {
  readonly AppId: string;
  readonly ChallengeCode: string;
  readonly SessionId: string;
  readonly Ttl: string;
}

interface CreateTokenResponse {
  readonly AppId: string;
  readonly ChallengeCode: string;
  readonly SessionId: string;
  readonly Ttl: string;
}

interface DeleteBackendAPIRequest {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly ResourceConfig: BackendAPIResourceConfig;
  readonly ResourceName: string;
}

interface DeleteBackendAPIResponse {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly Error: string;
  readonly JobId: string;
  readonly Operation: string;
  readonly Status: string;
}

interface DeleteBackendAuthRequest {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly ResourceName: string;
}

interface DeleteBackendAuthResponse {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly Error: string;
  readonly JobId: string;
  readonly Operation: string;
  readonly Status: string;
}

interface DeleteBackendRequest {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
}

interface DeleteBackendRespObj {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly Error: string;
  readonly JobId: string;
  readonly Operation: string;
  readonly Status: string;
}

interface DeleteBackendResponse {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly Error: string;
  readonly JobId: string;
  readonly Operation: string;
  readonly Status: string;
}

interface DeleteBackendStorageRequest {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly ResourceName: string;
  readonly ServiceName: string;
}

interface DeleteBackendStorageResponse {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly JobId: string;
  readonly Status: string;
}

interface DeleteTokenRequest {
  readonly AppId: string;
  readonly SessionId: string;
}

interface DeleteTokenRespObj {
  readonly IsSuccess: boolean;
}

interface DeleteTokenResponse {
  readonly IsSuccess: boolean;
}

interface EmailSettings {
  readonly EmailMessage: string;
  readonly EmailSubject: string;
}

interface GatewayTimeoutException {
  readonly Message: string;
}

interface GenerateBackendAPIModelsRequest {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly ResourceName: string;
}

interface GenerateBackendAPIModelsResponse {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly Error: string;
  readonly JobId: string;
  readonly Operation: string;
  readonly Status: string;
}

interface GetBackendAPICodegenRespObj {
  readonly Models: string;
  readonly Status: string;
}

interface GetBackendAPIModelsRequest {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly ResourceName: string;
}

interface GetBackendAPIModelsResponse {
  readonly Models: string;
  readonly Status: string;
}

interface GetBackendAPIRequest {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly ResourceConfig: BackendAPIResourceConfig;
  readonly ResourceName: string;
}

interface GetBackendAPIRespObj {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly Error: string;
  readonly ResourceConfig: BackendAPIResourceConfig;
  readonly ResourceName: string;
}

interface GetBackendAPIResponse {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly Error: string;
  readonly ResourceConfig: BackendAPIResourceConfig;
  readonly ResourceName: string;
}

interface GetBackendAuthReqObj {
  readonly ResourceName: string;
}

interface GetBackendAuthRequest {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly ResourceName: string;
}

interface GetBackendAuthRespObj {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly Error: string;
  readonly ResourceConfig: CreateBackendAuthResourceConfig;
  readonly ResourceName: string;
}

interface GetBackendAuthResponse {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly Error: string;
  readonly ResourceConfig: CreateBackendAuthResourceConfig;
  readonly ResourceName: string;
}

interface GetBackendJobRequest {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly JobId: string;
}

interface GetBackendJobResponse {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly CreateTime: string;
  readonly Error: string;
  readonly JobId: string;
  readonly Operation: string;
  readonly Status: string;
  readonly UpdateTime: string;
}

interface GetBackendReqObj {
  readonly BackendEnvironmentName: string;
}

interface GetBackendRequest {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
}

interface GetBackendRespObj {
  readonly AmplifyFeatureFlags: string;
  readonly AmplifyMetaConfig: string;
  readonly AppId: string;
  readonly AppName: string;
  readonly BackendEnvironmentList: [];
  readonly BackendEnvironmentName: string;
  readonly Error: string;
}

interface GetBackendResponse {
  readonly AmplifyFeatureFlags: string;
  readonly AmplifyMetaConfig: string;
  readonly AppId: string;
  readonly AppName: string;
  readonly BackendEnvironmentList: [];
  readonly BackendEnvironmentName: string;
  readonly Error: string;
}

interface GetBackendStorageReqObj {
  readonly ResourceName: string;
}

interface GetBackendStorageRequest {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly ResourceName: string;
}

interface GetBackendStorageResourceConfig {
  readonly BucketName: string;
  readonly Imported: boolean;
  readonly Permissions: BackendStoragePermissions;
  readonly ServiceName: string;
}

interface GetBackendStorageRespObj {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly ResourceConfig: GetBackendStorageResourceConfig;
  readonly ResourceName: string;
}

interface GetBackendStorageResponse {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly ResourceConfig: GetBackendStorageResourceConfig;
  readonly ResourceName: string;
}

interface GetTokenRequest {
  readonly AppId: string;
  readonly SessionId: string;
}

interface GetTokenRespObj {
  readonly AppId: string;
  readonly ChallengeCode: string;
  readonly SessionId: string;
  readonly Ttl: string;
}

interface GetTokenResponse {
  readonly AppId: string;
  readonly ChallengeCode: string;
  readonly SessionId: string;
  readonly Ttl: string;
}

interface ImportBackendAuthReqObj {
  readonly IdentityPoolId: string;
  readonly NativeClientId: string;
  readonly UserPoolId: string;
  readonly WebClientId: string;
}

interface ImportBackendAuthRequest {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly IdentityPoolId: string;
  readonly NativeClientId: string;
  readonly UserPoolId: string;
  readonly WebClientId: string;
}

interface ImportBackendAuthResponse {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly Error: string;
  readonly JobId: string;
  readonly Operation: string;
  readonly Status: string;
}

interface ImportBackendStorageReqObj {
  readonly BucketName: string;
  readonly ServiceName: string;
}

interface ImportBackendStorageRequest {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly BucketName: string;
  readonly ServiceName: string;
}

interface ImportBackendStorageResponse {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly JobId: string;
  readonly Status: string;
}

interface InternalServiceException {
  readonly Message: string;
}

interface LimitExceededException {
  readonly LimitType: string;
  readonly Message: string;
}

interface ListBackendJobReqObj {
  readonly JobId: string;
  readonly MaxResults: number;
  readonly NextToken: string;
  readonly Operation: string;
  readonly Status: string;
}

interface ListBackendJobRespObj {
  readonly Jobs: [];
  readonly NextToken: string;
}

interface ListBackendJobsRequest {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly JobId: string;
  readonly MaxResults: number;
  readonly NextToken: string;
  readonly Operation: string;
  readonly Status: string;
}

interface ListBackendJobsResponse {
  readonly Jobs: [];
  readonly NextToken: string;
}

interface ListS3BucketsReqObj {
  readonly NextToken: string;
}

interface ListS3BucketsRequest {
  readonly NextToken: string;
}

interface ListS3BucketsRespObj {
  readonly Buckets: [];
  readonly NextToken: string;
}

interface ListS3BucketsResponse {
  readonly Buckets: [];
  readonly NextToken: string;
}

interface LoginAuthConfigReqObj {
  readonly AwsCognitoIdentityPoolId: string;
  readonly AwsCognitoRegion: string;
  readonly AwsUserPoolsId: string;
  readonly AwsUserPoolsWebClientId: string;
}

interface NotFoundException {
  readonly Message: string;
  readonly ResourceType: string;
}

interface RemoveAllBackendsReqObj {
  readonly CleanAmplifyApp: boolean;
}

interface RemoveAllBackendsRequest {
  readonly AppId: string;
  readonly CleanAmplifyApp: boolean;
}

interface RemoveAllBackendsRespObj {
  readonly AppId: string;
  readonly Error: string;
  readonly JobId: string;
  readonly Operation: string;
  readonly Status: string;
}

interface RemoveAllBackendsResponse {
  readonly AppId: string;
  readonly Error: string;
  readonly JobId: string;
  readonly Operation: string;
  readonly Status: string;
}

interface RemoveBackendAuthReqObj {
  readonly ResourceName: string;
}

interface RemoveBackendConfigRequest {
  readonly AppId: string;
}

interface RemoveBackendConfigRespObj {
  readonly Error: string;
}

interface RemoveBackendConfigResponse {
  readonly Error: string;
}

interface RemoveBackendStorageReqObj {
  readonly ResourceName: string;
  readonly ServiceName: string;
}

interface ResourceConfig {
}

interface S3BucketInfo {
  readonly CreationDate: string;
  readonly Name: string;
}

interface Settings {
  readonly MfaTypes: [];
  readonly SmsMessage: string;
}

interface SmsSettings {
  readonly SmsMessage: string;
}

interface SocialProviderSettings {
  readonly Facebook: BackendAuthSocialProviderConfig;
  readonly Google: BackendAuthSocialProviderConfig;
  readonly LoginWithAmazon: BackendAuthSocialProviderConfig;
  readonly SignInWithApple: BackendAuthAppleProviderConfig;
}

interface TooManyRequestsException {
  readonly LimitType: string;
  readonly Message: string;
}

interface UpdateBackendAPIRequest {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly ResourceConfig: BackendAPIResourceConfig;
  readonly ResourceName: string;
}

interface UpdateBackendAPIResponse {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly Error: string;
  readonly JobId: string;
  readonly Operation: string;
  readonly Status: string;
}

interface UpdateBackendAuthForgotPasswordConfig {
  readonly DeliveryMethod: string;
  readonly EmailSettings: EmailSettings;
  readonly SmsSettings: SmsSettings;
}

interface UpdateBackendAuthIdentityPoolConfig {
  readonly UnauthenticatedLogin: boolean;
}

interface UpdateBackendAuthMFAConfig {
  readonly MFAMode: string;
  readonly Settings: Settings;
}

interface UpdateBackendAuthOAuthConfig {
  readonly DomainPrefix: string;
  readonly OAuthGrantType: string;
  readonly OAuthScopes: [];
  readonly RedirectSignInURIs: [];
  readonly RedirectSignOutURIs: [];
  readonly SocialProviderSettings: SocialProviderSettings;
}

interface UpdateBackendAuthPasswordPolicyConfig {
  readonly AdditionalConstraints: [];
  readonly MinimumLength: unknown;
}

interface UpdateBackendAuthReqObj {
  readonly ResourceConfig: UpdateBackendAuthResourceConfig;
  readonly ResourceName: string;
}

interface UpdateBackendAuthRequest {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly ResourceConfig: UpdateBackendAuthResourceConfig;
  readonly ResourceName: string;
}

interface UpdateBackendAuthResourceConfig {
  readonly AuthResources: string;
  readonly IdentityPoolConfigs: UpdateBackendAuthIdentityPoolConfig;
  readonly Service: string;
  readonly UserPoolConfigs: UpdateBackendAuthUserPoolConfig;
}

interface UpdateBackendAuthResponse {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly Error: string;
  readonly JobId: string;
  readonly Operation: string;
  readonly Status: string;
}

interface UpdateBackendAuthUserPoolConfig {
  readonly ForgotPassword: UpdateBackendAuthForgotPasswordConfig;
  readonly Mfa: UpdateBackendAuthMFAConfig;
  readonly OAuth: UpdateBackendAuthOAuthConfig;
  readonly PasswordPolicy: UpdateBackendAuthPasswordPolicyConfig;
}

interface UpdateBackendConfigReqObj {
  readonly LoginAuthConfig: LoginAuthConfigReqObj;
}

interface UpdateBackendConfigRequest {
  readonly AppId: string;
  readonly LoginAuthConfig: LoginAuthConfigReqObj;
}

interface UpdateBackendConfigResponse {
  readonly AppId: string;
  readonly BackendManagerAppId: string;
  readonly Error: string;
  readonly LoginAuthConfig: LoginAuthConfigReqObj;
}

interface UpdateBackendJobRequest {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly JobId: string;
  readonly Operation: string;
  readonly Status: string;
}

interface UpdateBackendJobResponse {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly CreateTime: string;
  readonly Error: string;
  readonly JobId: string;
  readonly Operation: string;
  readonly Status: string;
  readonly UpdateTime: string;
}

interface UpdateBackendStorageReqObj {
  readonly ResourceConfig: UpdateBackendStorageResourceConfig;
  readonly ResourceName: string;
}

interface UpdateBackendStorageRequest {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly ResourceConfig: UpdateBackendStorageResourceConfig;
  readonly ResourceName: string;
}

interface UpdateBackendStorageResourceConfig {
  readonly Permissions: BackendStoragePermissions;
  readonly ServiceName: string;
}

interface UpdateBackendStorageResponse {
  readonly AppId: string;
  readonly BackendEnvironmentName: string;
  readonly JobId: string;
  readonly Status: string;
}

