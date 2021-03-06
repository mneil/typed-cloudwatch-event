/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface AddProfilePermission {
  readonly profileName: string;
  readonly profileVersion?: string;
  readonly action: string;
  readonly principal: string;
  readonly revisionId?: string;
  readonly statementId: string;
}
export interface CancelSigningProfile {
  readonly profileName: string;
}
export interface DescribeSigningJob {
  readonly jobId: string;
}
export interface GetSigningPlatform {
  readonly platformId: string;
}
export interface GetSigningProfile {
  readonly profileName: string;
  readonly profileOwner?: string;
}
export interface ListProfilePermissions {
  readonly profileName: string;
  readonly nextToken?: string;
}
export interface ListSigningJobs {
  readonly status?: string;
  readonly platformId?: string;
  readonly requestedBy?: string;
  readonly maxResults?: number;
  readonly nextToken?: string;
  readonly isRevoked?: boolean;
  readonly signatureExpiresBefore?: Date;
  readonly signatureExpiresAfter?: Date;
  readonly jobInvoker?: string;
}
export interface ListSigningPlatforms {
  readonly category?: string;
  readonly partner?: string;
  readonly target?: string;
  readonly maxResults?: number;
  readonly nextToken?: string;
}
export interface ListSigningProfiles {
  readonly includeCanceled?: boolean;
  readonly maxResults?: number;
  readonly nextToken?: string;
  readonly platformId?: string;
  readonly statuses?: [];
}
export interface ListTagsForResource {
  readonly resourceArn: string;
}
export interface PutSigningProfile {
  readonly profileName: string;
  readonly signingMaterial?: SigningMaterial;
  readonly signatureValidityPeriod?: SignatureValidityPeriod;
  readonly platformId: string;
  readonly overrides?: SigningPlatformOverrides;
  readonly signingParameters?: {[key: string]: any};
  readonly tags?: {[key: string]: any};
}
export interface RemoveProfilePermission {
  readonly profileName: string;
  readonly revisionId: string;
  readonly statementId: string;
}
export interface RevokeSignature {
  readonly jobId: string;
  readonly jobOwner?: string;
  readonly reason: string;
}
export interface RevokeSigningProfile {
  readonly profileName: string;
  readonly profileVersion: string;
  readonly reason: string;
  readonly effectiveTime: Date;
}
export interface StartSigningJob {
  readonly source: Source;
  readonly destination: Destination;
  readonly profileName: string;
  readonly clientRequestToken: string;
  readonly profileOwner?: string;
}
export interface TagResource {
  readonly resourceArn: string;
  readonly tags: {[key: string]: any};
}
export interface UntagResource {
  readonly resourceArn: string;
  readonly tagKeys: [];
}



interface AccessDeniedException {
  readonly message: string;
  readonly code: string;
}

interface AddProfilePermissionRequest {
  readonly profileName: string;
  readonly profileVersion: string;
  readonly action: string;
  readonly principal: string;
  readonly revisionId: string;
  readonly statementId: string;
}

interface AddProfilePermissionResponse {
  readonly revisionId: string;
}

interface BadRequestException {
  readonly message: string;
  readonly code: string;
}

interface CancelSigningProfileRequest {
  readonly profileName: string;
}

interface ConflictException {
  readonly message: string;
  readonly code: string;
}

interface DescribeSigningJobRequest {
  readonly jobId: string;
}

interface DescribeSigningJobResponse {
  readonly jobId: string;
  readonly source: Source;
  readonly signingMaterial: SigningMaterial;
  readonly platformId: string;
  readonly platformDisplayName: string;
  readonly profileName: string;
  readonly profileVersion: string;
  readonly overrides: SigningPlatformOverrides;
  readonly signingParameters: {[key: string]: any};
  readonly createdAt: Date;
  readonly completedAt: Date;
  readonly signatureExpiresAt: Date;
  readonly requestedBy: string;
  readonly status: string;
  readonly statusReason: string;
  readonly revocationRecord: SigningJobRevocationRecord;
  readonly signedObject: SignedObject;
  readonly jobOwner: string;
  readonly jobInvoker: string;
}

interface Destination {
  readonly s3: S3Destination;
}

interface EncryptionAlgorithmOptions {
  readonly allowedValues: [];
  readonly defaultValue: string;
}

interface GetSigningPlatformRequest {
  readonly platformId: string;
}

interface GetSigningPlatformResponse {
  readonly platformId: string;
  readonly displayName: string;
  readonly partner: string;
  readonly target: string;
  readonly category: string;
  readonly signingConfiguration: SigningConfiguration;
  readonly signingImageFormat: SigningImageFormat;
  readonly maxSizeInMB: number;
  readonly revocationSupported: boolean;
}

interface GetSigningProfileRequest {
  readonly profileName: string;
  readonly profileOwner: string;
}

interface GetSigningProfileResponse {
  readonly profileName: string;
  readonly profileVersion: string;
  readonly profileVersionArn: string;
  readonly revocationRecord: SigningProfileRevocationRecord;
  readonly signingMaterial: SigningMaterial;
  readonly platformId: string;
  readonly platformDisplayName: string;
  readonly signatureValidityPeriod: SignatureValidityPeriod;
  readonly overrides: SigningPlatformOverrides;
  readonly signingParameters: {[key: string]: any};
  readonly status: string;
  readonly statusReason: string;
  readonly arn: string;
  readonly tags: {[key: string]: any};
}

interface HashAlgorithmOptions {
  readonly allowedValues: [];
  readonly defaultValue: string;
}

interface InternalServiceErrorException {
  readonly message: string;
  readonly code: string;
}

interface ListProfilePermissionsRequest {
  readonly profileName: string;
  readonly nextToken: string;
}

interface ListProfilePermissionsResponse {
  readonly revisionId: string;
  readonly policySizeBytes: number;
  readonly permissions: [];
  readonly nextToken: string;
}

interface ListSigningJobsRequest {
  readonly status: string;
  readonly platformId: string;
  readonly requestedBy: string;
  readonly maxResults: number;
  readonly nextToken: string;
  readonly isRevoked: boolean;
  readonly signatureExpiresBefore: Date;
  readonly signatureExpiresAfter: Date;
  readonly jobInvoker: string;
}

interface ListSigningJobsResponse {
  readonly jobs: [];
  readonly nextToken: string;
}

interface ListSigningPlatformsRequest {
  readonly category: string;
  readonly partner: string;
  readonly target: string;
  readonly maxResults: number;
  readonly nextToken: string;
}

interface ListSigningPlatformsResponse {
  readonly platforms: [];
  readonly nextToken: string;
}

interface ListSigningProfilesRequest {
  readonly includeCanceled: boolean;
  readonly maxResults: number;
  readonly nextToken: string;
  readonly platformId: string;
  readonly statuses: [];
}

interface ListSigningProfilesResponse {
  readonly profiles: [];
  readonly nextToken: string;
}

interface ListTagsForResourceRequest {
  readonly resourceArn: string;
}

interface ListTagsForResourceResponse {
  readonly tags: {[key: string]: any};
}

interface NotFoundException {
  readonly message: string;
  readonly code: string;
}

interface Permission {
  readonly action: string;
  readonly principal: string;
  readonly statementId: string;
  readonly profileVersion: string;
}

interface PutSigningProfileRequest {
  readonly profileName: string;
  readonly signingMaterial: SigningMaterial;
  readonly signatureValidityPeriod: SignatureValidityPeriod;
  readonly platformId: string;
  readonly overrides: SigningPlatformOverrides;
  readonly signingParameters: {[key: string]: any};
  readonly tags: {[key: string]: any};
}

interface PutSigningProfileResponse {
  readonly arn: string;
  readonly profileVersion: string;
  readonly profileVersionArn: string;
}

interface RemoveProfilePermissionRequest {
  readonly profileName: string;
  readonly revisionId: string;
  readonly statementId: string;
}

interface RemoveProfilePermissionResponse {
  readonly revisionId: string;
}

interface ResourceNotFoundException {
  readonly message: string;
  readonly code: string;
}

interface RevokeSignatureRequest {
  readonly jobId: string;
  readonly jobOwner: string;
  readonly reason: string;
}

interface RevokeSigningProfileRequest {
  readonly profileName: string;
  readonly profileVersion: string;
  readonly reason: string;
  readonly effectiveTime: Date;
}

interface S3Destination {
  readonly bucketName: string;
  readonly prefix: string;
}

interface S3SignedObject {
  readonly bucketName: string;
  readonly key: string;
}

interface S3Source {
  readonly bucketName: string;
  readonly key: string;
  readonly version: string;
}

interface ServiceLimitExceededException {
  readonly message: string;
  readonly code: string;
}

interface SignatureValidityPeriod {
  readonly value: number;
  readonly type: string;
}

interface SignedObject {
  readonly s3: S3SignedObject;
}

interface SigningConfiguration {
  readonly encryptionAlgorithmOptions: EncryptionAlgorithmOptions;
  readonly hashAlgorithmOptions: HashAlgorithmOptions;
}

interface SigningConfigurationOverrides {
  readonly encryptionAlgorithm: string;
  readonly hashAlgorithm: string;
}

interface SigningImageFormat {
  readonly supportedFormats: [];
  readonly defaultFormat: string;
}

interface SigningJob {
  readonly jobId: string;
  readonly source: Source;
  readonly signedObject: SignedObject;
  readonly signingMaterial: SigningMaterial;
  readonly createdAt: Date;
  readonly status: string;
  readonly isRevoked: boolean;
  readonly profileName: string;
  readonly profileVersion: string;
  readonly platformId: string;
  readonly platformDisplayName: string;
  readonly signatureExpiresAt: Date;
  readonly jobOwner: string;
  readonly jobInvoker: string;
}

interface SigningJobRevocationRecord {
  readonly reason: string;
  readonly revokedAt: Date;
  readonly revokedBy: string;
}

interface SigningMaterial {
  readonly certificateArn: string;
}

interface SigningPlatform {
  readonly platformId: string;
  readonly displayName: string;
  readonly partner: string;
  readonly target: string;
  readonly category: string;
  readonly signingConfiguration: SigningConfiguration;
  readonly signingImageFormat: SigningImageFormat;
  readonly maxSizeInMB: number;
  readonly revocationSupported: boolean;
}

interface SigningPlatformOverrides {
  readonly signingConfiguration: SigningConfigurationOverrides;
  readonly signingImageFormat: string;
}

interface SigningProfile {
  readonly profileName: string;
  readonly profileVersion: string;
  readonly profileVersionArn: string;
  readonly signingMaterial: SigningMaterial;
  readonly signatureValidityPeriod: SignatureValidityPeriod;
  readonly platformId: string;
  readonly platformDisplayName: string;
  readonly signingParameters: {[key: string]: any};
  readonly status: string;
  readonly arn: string;
  readonly tags: {[key: string]: any};
}

interface SigningProfileRevocationRecord {
  readonly revocationEffectiveFrom: Date;
  readonly revokedAt: Date;
  readonly revokedBy: string;
}

interface Source {
  readonly s3: S3Source;
}

interface StartSigningJobRequest {
  readonly source: Source;
  readonly destination: Destination;
  readonly profileName: string;
  readonly clientRequestToken: string;
  readonly profileOwner: string;
}

interface StartSigningJobResponse {
  readonly jobId: string;
  readonly jobOwner: string;
}

interface TagResourceRequest {
  readonly resourceArn: string;
  readonly tags: {[key: string]: any};
}

interface TagResourceResponse {
}

interface ThrottlingException {
  readonly message: string;
  readonly code: string;
}

interface TooManyRequestsException {
  readonly message: string;
  readonly code: string;
}

interface UntagResourceRequest {
  readonly resourceArn: string;
  readonly tagKeys: [];
}

interface UntagResourceResponse {
}

interface ValidationException {
  readonly message: string;
  readonly code: string;
}

