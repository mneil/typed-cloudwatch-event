/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface AbortMultipartUpload {
  readonly accountId: string;
  readonly vaultName: string;
  readonly uploadId: string;
}

export interface AbortVaultLock {
  readonly accountId: string;
  readonly vaultName: string;
}

export interface AddTagsToVault {
  readonly accountId: string;
  readonly vaultName: string;
  readonly Tags?: {[key: string]: any};
}

export interface CompleteMultipartUpload {
  readonly accountId: string;
  readonly vaultName: string;
  readonly uploadId: string;
  readonly archiveSize?: string;
  readonly checksum?: string;
}

export interface CompleteVaultLock {
  readonly accountId: string;
  readonly vaultName: string;
  readonly lockId: string;
}

export interface CreateVault {
  readonly accountId: string;
  readonly vaultName: string;
}

export interface DeleteArchive {
  readonly accountId: string;
  readonly vaultName: string;
  readonly archiveId: string;
}

export interface DeleteVault {
  readonly accountId: string;
  readonly vaultName: string;
}

export interface DeleteVaultAccessPolicy {
  readonly accountId: string;
  readonly vaultName: string;
}

export interface DeleteVaultNotifications {
  readonly accountId: string;
  readonly vaultName: string;
}

export interface DescribeJob {
  readonly accountId: string;
  readonly vaultName: string;
  readonly jobId: string;
}

export interface DescribeVault {
  readonly accountId: string;
  readonly vaultName: string;
}

export interface GetDataRetrievalPolicy {
  readonly accountId: string;
}

export interface GetJobOutput {
  readonly accountId: string;
  readonly vaultName: string;
  readonly jobId: string;
  readonly range?: string;
}

export interface GetVaultAccessPolicy {
  readonly accountId: string;
  readonly vaultName: string;
}

export interface GetVaultLock {
  readonly accountId: string;
  readonly vaultName: string;
}

export interface GetVaultNotifications {
  readonly accountId: string;
  readonly vaultName: string;
}

export interface InitiateJob {
  readonly accountId: string;
  readonly vaultName: string;
  readonly jobParameters?: JobParameters;
}

export interface InitiateMultipartUpload {
  readonly accountId: string;
  readonly vaultName: string;
  readonly archiveDescription?: string;
  readonly partSize?: string;
}

export interface InitiateVaultLock {
  readonly accountId: string;
  readonly vaultName: string;
  readonly policy?: VaultLockPolicy;
}

export interface ListJobs {
  readonly accountId: string;
  readonly vaultName: string;
  readonly limit?: string;
  readonly marker?: string;
  readonly statuscode?: string;
  readonly completed?: string;
}

export interface ListMultipartUploads {
  readonly accountId: string;
  readonly vaultName: string;
  readonly marker?: string;
  readonly limit?: string;
}

export interface ListParts {
  readonly accountId: string;
  readonly vaultName: string;
  readonly uploadId: string;
  readonly marker?: string;
  readonly limit?: string;
}

export interface ListProvisionedCapacity {
  readonly accountId: string;
}

export interface ListTagsForVault {
  readonly accountId: string;
  readonly vaultName: string;
}

export interface ListVaults {
  readonly accountId: string;
  readonly marker?: string;
  readonly limit?: string;
}

export interface PurchaseProvisionedCapacity {
  readonly accountId: string;
}

export interface RemoveTagsFromVault {
  readonly accountId: string;
  readonly vaultName: string;
  readonly TagKeys?: [];
}

export interface SetDataRetrievalPolicy {
  readonly accountId: string;
  readonly Policy?: DataRetrievalPolicy;
}

export interface SetVaultAccessPolicy {
  readonly accountId: string;
  readonly vaultName: string;
  readonly policy?: VaultAccessPolicy;
}

export interface SetVaultNotifications {
  readonly accountId: string;
  readonly vaultName: string;
  readonly vaultNotificationConfig?: VaultNotificationConfig;
}

export interface UploadArchive {
  readonly vaultName: string;
  readonly accountId: string;
  readonly archiveDescription?: string;
  readonly checksum?: string;
  readonly body?: unknown;
}

export interface UploadMultipartPart {
  readonly accountId: string;
  readonly vaultName: string;
  readonly uploadId: string;
  readonly checksum?: string;
  readonly range?: string;
  readonly body?: unknown;
}

export interface AbortMultipartUploadInput {
  readonly accountId: string;
  readonly vaultName: string;
  readonly uploadId: string;
}

export interface AbortVaultLockInput {
  readonly accountId: string;
  readonly vaultName: string;
}

export interface AddTagsToVaultInput {
  readonly accountId: string;
  readonly vaultName: string;
  readonly Tags?: {[key: string]: any};
}

export interface ArchiveCreationOutput {
  readonly location?: string;
  readonly checksum?: string;
  readonly archiveId?: string;
}

export interface CSVInput {
  readonly FileHeaderInfo?: string;
  readonly Comments?: string;
  readonly QuoteEscapeCharacter?: string;
  readonly RecordDelimiter?: string;
  readonly FieldDelimiter?: string;
  readonly QuoteCharacter?: string;
}

export interface CSVOutput {
  readonly QuoteFields?: string;
  readonly QuoteEscapeCharacter?: string;
  readonly RecordDelimiter?: string;
  readonly FieldDelimiter?: string;
  readonly QuoteCharacter?: string;
}

export interface CompleteMultipartUploadInput {
  readonly accountId: string;
  readonly vaultName: string;
  readonly uploadId: string;
  readonly archiveSize?: string;
  readonly checksum?: string;
}

export interface CompleteVaultLockInput {
  readonly accountId: string;
  readonly vaultName: string;
  readonly lockId: string;
}

export interface CreateVaultInput {
  readonly accountId: string;
  readonly vaultName: string;
}

export interface CreateVaultOutput {
  readonly location?: string;
}

export interface DataRetrievalPolicy {
  readonly Rules?: [];
}

export interface DataRetrievalRule {
  readonly Strategy?: string;
  readonly BytesPerHour?: number;
}

export interface DeleteArchiveInput {
  readonly accountId: string;
  readonly vaultName: string;
  readonly archiveId: string;
}

export interface DeleteVaultAccessPolicyInput {
  readonly accountId: string;
  readonly vaultName: string;
}

export interface DeleteVaultInput {
  readonly accountId: string;
  readonly vaultName: string;
}

export interface DeleteVaultNotificationsInput {
  readonly accountId: string;
  readonly vaultName: string;
}

export interface DescribeJobInput {
  readonly accountId: string;
  readonly vaultName: string;
  readonly jobId: string;
}

export interface DescribeVaultInput {
  readonly accountId: string;
  readonly vaultName: string;
}

export interface DescribeVaultOutput {
  readonly VaultARN?: string;
  readonly VaultName?: string;
  readonly CreationDate?: string;
  readonly LastInventoryDate?: string;
  readonly NumberOfArchives?: number;
  readonly SizeInBytes?: number;
}

export interface Encryption {
  readonly EncryptionType?: string;
  readonly KMSKeyId?: string;
  readonly KMSContext?: string;
}

export interface GetDataRetrievalPolicyInput {
  readonly accountId: string;
}

export interface GetDataRetrievalPolicyOutput {
  readonly Policy?: DataRetrievalPolicy;
}

export interface GetJobOutputInput {
  readonly accountId: string;
  readonly vaultName: string;
  readonly jobId: string;
  readonly range?: string;
}

export interface GetJobOutputOutput {
  readonly body?: unknown;
  readonly checksum?: string;
  readonly status?: number;
  readonly contentRange?: string;
  readonly acceptRanges?: string;
  readonly contentType?: string;
  readonly archiveDescription?: string;
}

export interface GetVaultAccessPolicyInput {
  readonly accountId: string;
  readonly vaultName: string;
}

export interface GetVaultAccessPolicyOutput {
  readonly policy?: VaultAccessPolicy;
}

export interface GetVaultLockInput {
  readonly accountId: string;
  readonly vaultName: string;
}

export interface GetVaultLockOutput {
  readonly Policy?: string;
  readonly State?: string;
  readonly ExpirationDate?: string;
  readonly CreationDate?: string;
}

export interface GetVaultNotificationsInput {
  readonly accountId: string;
  readonly vaultName: string;
}

export interface GetVaultNotificationsOutput {
  readonly vaultNotificationConfig?: VaultNotificationConfig;
}

export interface GlacierJobDescription {
  readonly JobId?: string;
  readonly JobDescription?: string;
  readonly Action?: string;
  readonly ArchiveId?: string;
  readonly VaultARN?: string;
  readonly CreationDate?: string;
  readonly Completed?: boolean;
  readonly StatusCode?: string;
  readonly StatusMessage?: string;
  readonly ArchiveSizeInBytes?: number;
  readonly InventorySizeInBytes?: number;
  readonly SNSTopic?: string;
  readonly CompletionDate?: string;
  readonly SHA256TreeHash?: string;
  readonly ArchiveSHA256TreeHash?: string;
  readonly RetrievalByteRange?: string;
  readonly Tier?: string;
  readonly InventoryRetrievalParameters?: InventoryRetrievalJobDescription;
  readonly JobOutputPath?: string;
  readonly SelectParameters?: SelectParameters;
  readonly OutputLocation?: OutputLocation;
}

export interface Grant {
  readonly Grantee?: Grantee;
  readonly Permission?: string;
}

export interface Grantee {
  readonly Type: string;
  readonly DisplayName?: string;
  readonly URI?: string;
  readonly ID?: string;
  readonly EmailAddress?: string;
}

export interface InitiateJobInput {
  readonly accountId: string;
  readonly vaultName: string;
  readonly jobParameters?: JobParameters;
}

export interface InitiateJobOutput {
  readonly location?: string;
  readonly jobId?: string;
  readonly jobOutputPath?: string;
}

export interface InitiateMultipartUploadInput {
  readonly accountId: string;
  readonly vaultName: string;
  readonly archiveDescription?: string;
  readonly partSize?: string;
}

export interface InitiateMultipartUploadOutput {
  readonly location?: string;
  readonly uploadId?: string;
}

export interface InitiateVaultLockInput {
  readonly accountId: string;
  readonly vaultName: string;
  readonly policy?: VaultLockPolicy;
}

export interface InitiateVaultLockOutput {
  readonly lockId?: string;
}

export interface InputSerialization {
  readonly csv?: CSVInput;
}

export interface InsufficientCapacityException {
  readonly type?: string;
  readonly code?: string;
  readonly message?: string;
}

export interface InvalidParameterValueException {
  readonly type?: string;
  readonly code?: string;
  readonly message?: string;
}

export interface InventoryRetrievalJobDescription {
  readonly Format?: string;
  readonly StartDate?: string;
  readonly EndDate?: string;
  readonly Limit?: string;
  readonly Marker?: string;
}

export interface InventoryRetrievalJobInput {
  readonly StartDate?: string;
  readonly EndDate?: string;
  readonly Limit?: string;
  readonly Marker?: string;
}

export interface JobParameters {
  readonly Format?: string;
  readonly Type?: string;
  readonly ArchiveId?: string;
  readonly Description?: string;
  readonly SNSTopic?: string;
  readonly RetrievalByteRange?: string;
  readonly Tier?: string;
  readonly InventoryRetrievalParameters?: InventoryRetrievalJobInput;
  readonly SelectParameters?: SelectParameters;
  readonly OutputLocation?: OutputLocation;
}

export interface LimitExceededException {
  readonly type?: string;
  readonly code?: string;
  readonly message?: string;
}

export interface ListJobsInput {
  readonly accountId: string;
  readonly vaultName: string;
  readonly limit?: string;
  readonly marker?: string;
  readonly statuscode?: string;
  readonly completed?: string;
}

export interface ListJobsOutput {
  readonly JobList?: [];
  readonly Marker?: string;
}

export interface ListMultipartUploadsInput {
  readonly accountId: string;
  readonly vaultName: string;
  readonly marker?: string;
  readonly limit?: string;
}

export interface ListMultipartUploadsOutput {
  readonly UploadsList?: [];
  readonly Marker?: string;
}

export interface ListPartsInput {
  readonly accountId: string;
  readonly vaultName: string;
  readonly uploadId: string;
  readonly marker?: string;
  readonly limit?: string;
}

export interface ListPartsOutput {
  readonly MultipartUploadId?: string;
  readonly VaultARN?: string;
  readonly ArchiveDescription?: string;
  readonly PartSizeInBytes?: number;
  readonly CreationDate?: string;
  readonly Parts?: [];
  readonly Marker?: string;
}

export interface ListProvisionedCapacityInput {
  readonly accountId: string;
}

export interface ListProvisionedCapacityOutput {
  readonly ProvisionedCapacityList?: [];
}

export interface ListTagsForVaultInput {
  readonly accountId: string;
  readonly vaultName: string;
}

export interface ListTagsForVaultOutput {
  readonly Tags?: {[key: string]: any};
}

export interface ListVaultsInput {
  readonly accountId: string;
  readonly marker?: string;
  readonly limit?: string;
}

export interface ListVaultsOutput {
  readonly VaultList?: [];
  readonly Marker?: string;
}

export interface MissingParameterValueException {
  readonly type?: string;
  readonly code?: string;
  readonly message?: string;
}

export interface OutputLocation {
  readonly S3?: S3Location;
}

export interface OutputSerialization {
  readonly csv?: CSVOutput;
}

export interface PartListElement {
  readonly RangeInBytes?: string;
  readonly SHA256TreeHash?: string;
}

export interface PolicyEnforcedException {
  readonly type?: string;
  readonly code?: string;
  readonly message?: string;
}

export interface ProvisionedCapacityDescription {
  readonly CapacityId?: string;
  readonly StartDate?: string;
  readonly ExpirationDate?: string;
}

export interface PurchaseProvisionedCapacityInput {
  readonly accountId: string;
}

export interface PurchaseProvisionedCapacityOutput {
  readonly capacityId?: string;
}

export interface RemoveTagsFromVaultInput {
  readonly accountId: string;
  readonly vaultName: string;
  readonly TagKeys?: [];
}

export interface RequestTimeoutException {
  readonly type?: string;
  readonly code?: string;
  readonly message?: string;
}

export interface ResourceNotFoundException {
  readonly type?: string;
  readonly code?: string;
  readonly message?: string;
}

export interface S3Location {
  readonly BucketName?: string;
  readonly Prefix?: string;
  readonly Encryption?: Encryption;
  readonly CannedACL?: string;
  readonly AccessControlList?: [];
  readonly Tagging?: {[key: string]: any};
  readonly UserMetadata?: {[key: string]: any};
  readonly StorageClass?: string;
}

export interface SelectParameters {
  readonly InputSerialization?: InputSerialization;
  readonly ExpressionType?: string;
  readonly Expression?: string;
  readonly OutputSerialization?: OutputSerialization;
}

export interface ServiceUnavailableException {
  readonly type?: string;
  readonly code?: string;
  readonly message?: string;
}

export interface SetDataRetrievalPolicyInput {
  readonly accountId: string;
  readonly Policy?: DataRetrievalPolicy;
}

export interface SetVaultAccessPolicyInput {
  readonly accountId: string;
  readonly vaultName: string;
  readonly policy?: VaultAccessPolicy;
}

export interface SetVaultNotificationsInput {
  readonly accountId: string;
  readonly vaultName: string;
  readonly vaultNotificationConfig?: VaultNotificationConfig;
}

export interface UploadArchiveInput {
  readonly vaultName: string;
  readonly accountId: string;
  readonly archiveDescription?: string;
  readonly checksum?: string;
  readonly body?: unknown;
}

export interface UploadListElement {
  readonly MultipartUploadId?: string;
  readonly VaultARN?: string;
  readonly ArchiveDescription?: string;
  readonly PartSizeInBytes?: number;
  readonly CreationDate?: string;
}

export interface UploadMultipartPartInput {
  readonly accountId: string;
  readonly vaultName: string;
  readonly uploadId: string;
  readonly checksum?: string;
  readonly range?: string;
  readonly body?: unknown;
}

export interface UploadMultipartPartOutput {
  readonly checksum?: string;
}

export interface VaultAccessPolicy {
  readonly Policy?: string;
}

export interface VaultLockPolicy {
  readonly Policy?: string;
}

export interface VaultNotificationConfig {
  readonly SNSTopic?: string;
  readonly Events?: [];
}


