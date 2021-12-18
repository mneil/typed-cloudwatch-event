/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface CancelRotateSecret {
  readonly SecretId: string;
}

export interface CreateSecret {
  readonly Name: string;
  readonly ClientRequestToken?: string;
  readonly Description?: string;
  readonly KmsKeyId?: string;
  readonly SecretBinary?: unknown;
  readonly SecretString?: string;
  readonly Tags?: [];
  readonly AddReplicaRegions?: [];
  readonly ForceOverwriteReplicaSecret?: boolean;
}

export interface DeleteResourcePolicy {
  readonly SecretId: string;
}

export interface DeleteSecret {
  readonly SecretId: string;
  readonly RecoveryWindowInDays?: number;
  readonly ForceDeleteWithoutRecovery?: boolean;
}

export interface DescribeSecret {
  readonly SecretId: string;
}

export interface GetRandomPassword {
  readonly PasswordLength?: number;
  readonly ExcludeCharacters?: string;
  readonly ExcludeNumbers?: boolean;
  readonly ExcludePunctuation?: boolean;
  readonly ExcludeUppercase?: boolean;
  readonly ExcludeLowercase?: boolean;
  readonly IncludeSpace?: boolean;
  readonly RequireEachIncludedType?: boolean;
}

export interface GetResourcePolicy {
  readonly SecretId: string;
}

export interface GetSecretValue {
  readonly SecretId: string;
  readonly VersionId?: string;
  readonly VersionStage?: string;
}

export interface ListSecretVersionIds {
  readonly SecretId: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
  readonly IncludeDeprecated?: boolean;
}

export interface ListSecrets {
  readonly MaxResults?: number;
  readonly NextToken?: string;
  readonly Filters?: [];
  readonly SortOrder?: string;
}

export interface PutResourcePolicy {
  readonly SecretId: string;
  readonly ResourcePolicy: string;
  readonly BlockPublicPolicy?: boolean;
}

export interface PutSecretValue {
  readonly SecretId: string;
  readonly ClientRequestToken?: string;
  readonly SecretBinary?: unknown;
  readonly SecretString?: string;
  readonly VersionStages?: [];
}

export interface RemoveRegionsFromReplication {
  readonly SecretId: string;
  readonly RemoveReplicaRegions: [];
}

export interface ReplicateSecretToRegions {
  readonly SecretId: string;
  readonly AddReplicaRegions: [];
  readonly ForceOverwriteReplicaSecret?: boolean;
}

export interface RestoreSecret {
  readonly SecretId: string;
}

export interface RotateSecret {
  readonly SecretId: string;
  readonly ClientRequestToken?: string;
  readonly RotationLambdaARN?: string;
  readonly RotationRules?: RotationRulesType;
}

export interface StopReplicationToReplica {
  readonly SecretId: string;
}

export interface TagResource {
  readonly SecretId: string;
  readonly Tags: [];
}

export interface UntagResource {
  readonly SecretId: string;
  readonly TagKeys: [];
}

export interface UpdateSecret {
  readonly SecretId: string;
  readonly ClientRequestToken?: string;
  readonly Description?: string;
  readonly KmsKeyId?: string;
  readonly SecretBinary?: unknown;
  readonly SecretString?: string;
}

export interface UpdateSecretVersionStage {
  readonly SecretId: string;
  readonly VersionStage: string;
  readonly RemoveFromVersionId?: string;
  readonly MoveToVersionId?: string;
}

export interface ValidateResourcePolicy {
  readonly SecretId?: string;
  readonly ResourcePolicy: string;
}

export interface CancelRotateSecretRequest {
  readonly SecretId: string;
}

export interface CancelRotateSecretResponse {
  readonly ARN?: string;
  readonly Name?: string;
  readonly VersionId?: string;
}

export interface CreateSecretRequest {
  readonly Name: string;
  readonly ClientRequestToken?: string;
  readonly Description?: string;
  readonly KmsKeyId?: string;
  readonly SecretBinary?: unknown;
  readonly SecretString?: string;
  readonly Tags?: [];
  readonly AddReplicaRegions?: [];
  readonly ForceOverwriteReplicaSecret?: boolean;
}

export interface CreateSecretResponse {
  readonly ARN?: string;
  readonly Name?: string;
  readonly VersionId?: string;
  readonly ReplicationStatus?: [];
}

export interface DecryptionFailure {
  readonly Message?: string;
}

export interface DeleteResourcePolicyRequest {
  readonly SecretId: string;
}

export interface DeleteResourcePolicyResponse {
  readonly ARN?: string;
  readonly Name?: string;
}

export interface DeleteSecretRequest {
  readonly SecretId: string;
  readonly RecoveryWindowInDays?: number;
  readonly ForceDeleteWithoutRecovery?: boolean;
}

export interface DeleteSecretResponse {
  readonly ARN?: string;
  readonly Name?: string;
  readonly DeletionDate?: Date;
}

export interface DescribeSecretRequest {
  readonly SecretId: string;
}

export interface DescribeSecretResponse {
  readonly ARN?: string;
  readonly Name?: string;
  readonly Description?: string;
  readonly KmsKeyId?: string;
  readonly RotationEnabled?: boolean;
  readonly RotationLambdaARN?: string;
  readonly RotationRules?: RotationRulesType;
  readonly LastRotatedDate?: Date;
  readonly LastChangedDate?: Date;
  readonly LastAccessedDate?: Date;
  readonly DeletedDate?: Date;
  readonly Tags?: [];
  readonly VersionIdsToStages?: {[key: string]: any};
  readonly OwningService?: string;
  readonly CreatedDate?: Date;
  readonly PrimaryRegion?: string;
  readonly ReplicationStatus?: [];
}

export interface EncryptionFailure {
  readonly Message?: string;
}

export interface Filter {
  readonly Key?: string;
  readonly Values?: [];
}

export interface GetRandomPasswordRequest {
  readonly PasswordLength?: number;
  readonly ExcludeCharacters?: string;
  readonly ExcludeNumbers?: boolean;
  readonly ExcludePunctuation?: boolean;
  readonly ExcludeUppercase?: boolean;
  readonly ExcludeLowercase?: boolean;
  readonly IncludeSpace?: boolean;
  readonly RequireEachIncludedType?: boolean;
}

export interface GetRandomPasswordResponse {
  readonly RandomPassword?: string;
}

export interface GetResourcePolicyRequest {
  readonly SecretId: string;
}

export interface GetResourcePolicyResponse {
  readonly ARN?: string;
  readonly Name?: string;
  readonly ResourcePolicy?: string;
}

export interface GetSecretValueRequest {
  readonly SecretId: string;
  readonly VersionId?: string;
  readonly VersionStage?: string;
}

export interface GetSecretValueResponse {
  readonly ARN?: string;
  readonly Name?: string;
  readonly VersionId?: string;
  readonly SecretBinary?: unknown;
  readonly SecretString?: string;
  readonly VersionStages?: [];
  readonly CreatedDate?: Date;
}

export interface InternalServiceError {
  readonly Message?: string;
}

export interface InvalidNextTokenException {
  readonly Message?: string;
}

export interface InvalidParameterException {
  readonly Message?: string;
}

export interface InvalidRequestException {
  readonly Message?: string;
}

export interface LimitExceededException {
  readonly Message?: string;
}

export interface ListSecretVersionIdsRequest {
  readonly SecretId: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
  readonly IncludeDeprecated?: boolean;
}

export interface ListSecretVersionIdsResponse {
  readonly Versions?: [];
  readonly NextToken?: string;
  readonly ARN?: string;
  readonly Name?: string;
}

export interface ListSecretsRequest {
  readonly MaxResults?: number;
  readonly NextToken?: string;
  readonly Filters?: [];
  readonly SortOrder?: string;
}

export interface ListSecretsResponse {
  readonly SecretList?: [];
  readonly NextToken?: string;
}

export interface MalformedPolicyDocumentException {
  readonly Message?: string;
}

export interface PreconditionNotMetException {
  readonly Message?: string;
}

export interface PublicPolicyException {
  readonly Message?: string;
}

export interface PutResourcePolicyRequest {
  readonly SecretId: string;
  readonly ResourcePolicy: string;
  readonly BlockPublicPolicy?: boolean;
}

export interface PutResourcePolicyResponse {
  readonly ARN?: string;
  readonly Name?: string;
}

export interface PutSecretValueRequest {
  readonly SecretId: string;
  readonly ClientRequestToken?: string;
  readonly SecretBinary?: unknown;
  readonly SecretString?: string;
  readonly VersionStages?: [];
}

export interface PutSecretValueResponse {
  readonly ARN?: string;
  readonly Name?: string;
  readonly VersionId?: string;
  readonly VersionStages?: [];
}

export interface RemoveRegionsFromReplicationRequest {
  readonly SecretId: string;
  readonly RemoveReplicaRegions: [];
}

export interface RemoveRegionsFromReplicationResponse {
  readonly ARN?: string;
  readonly ReplicationStatus?: [];
}

export interface ReplicaRegionType {
  readonly Region?: string;
  readonly KmsKeyId?: string;
}

export interface ReplicateSecretToRegionsRequest {
  readonly SecretId: string;
  readonly AddReplicaRegions: [];
  readonly ForceOverwriteReplicaSecret?: boolean;
}

export interface ReplicateSecretToRegionsResponse {
  readonly ARN?: string;
  readonly ReplicationStatus?: [];
}

export interface ReplicationStatusType {
  readonly Region?: string;
  readonly KmsKeyId?: string;
  readonly Status?: string;
  readonly StatusMessage?: string;
  readonly LastAccessedDate?: Date;
}

export interface ResourceExistsException {
  readonly Message?: string;
}

export interface ResourceNotFoundException {
  readonly Message?: string;
}

export interface RestoreSecretRequest {
  readonly SecretId: string;
}

export interface RestoreSecretResponse {
  readonly ARN?: string;
  readonly Name?: string;
}

export interface RotateSecretRequest {
  readonly SecretId: string;
  readonly ClientRequestToken?: string;
  readonly RotationLambdaARN?: string;
  readonly RotationRules?: RotationRulesType;
}

export interface RotateSecretResponse {
  readonly ARN?: string;
  readonly Name?: string;
  readonly VersionId?: string;
}

export interface RotationRulesType {
  readonly AutomaticallyAfterDays?: number;
}

export interface SecretListEntry {
  readonly ARN?: string;
  readonly Name?: string;
  readonly Description?: string;
  readonly KmsKeyId?: string;
  readonly RotationEnabled?: boolean;
  readonly RotationLambdaARN?: string;
  readonly RotationRules?: RotationRulesType;
  readonly LastRotatedDate?: Date;
  readonly LastChangedDate?: Date;
  readonly LastAccessedDate?: Date;
  readonly DeletedDate?: Date;
  readonly Tags?: [];
  readonly SecretVersionsToStages?: {[key: string]: any};
  readonly OwningService?: string;
  readonly CreatedDate?: Date;
  readonly PrimaryRegion?: string;
}

export interface SecretVersionsListEntry {
  readonly VersionId?: string;
  readonly VersionStages?: [];
  readonly LastAccessedDate?: Date;
  readonly CreatedDate?: Date;
  readonly KmsKeyIds?: [];
}

export interface StopReplicationToReplicaRequest {
  readonly SecretId: string;
}

export interface StopReplicationToReplicaResponse {
  readonly ARN?: string;
}

export interface Tag {
  readonly Key?: string;
  readonly Value?: string;
}

export interface TagResourceRequest {
  readonly SecretId: string;
  readonly Tags: [];
}

export interface UntagResourceRequest {
  readonly SecretId: string;
  readonly TagKeys: [];
}

export interface UpdateSecretRequest {
  readonly SecretId: string;
  readonly ClientRequestToken?: string;
  readonly Description?: string;
  readonly KmsKeyId?: string;
  readonly SecretBinary?: unknown;
  readonly SecretString?: string;
}

export interface UpdateSecretResponse {
  readonly ARN?: string;
  readonly Name?: string;
  readonly VersionId?: string;
}

export interface UpdateSecretVersionStageRequest {
  readonly SecretId: string;
  readonly VersionStage: string;
  readonly RemoveFromVersionId?: string;
  readonly MoveToVersionId?: string;
}

export interface UpdateSecretVersionStageResponse {
  readonly ARN?: string;
  readonly Name?: string;
}

export interface ValidateResourcePolicyRequest {
  readonly SecretId?: string;
  readonly ResourcePolicy: string;
}

export interface ValidateResourcePolicyResponse {
  readonly PolicyValidationPassed?: boolean;
  readonly ValidationErrors?: [];
}

export interface ValidationErrorsEntry {
  readonly CheckName?: string;
  readonly ErrorMessage?: string;
}


