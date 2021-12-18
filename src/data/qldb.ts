/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface CancelJournalKinesisStream {
  readonly LedgerName: string;
  readonly StreamId: string;
}

export interface CreateLedger {
  readonly Name: string;
  readonly Tags?: {[key: string]: any};
  readonly PermissionsMode: string;
  readonly DeletionProtection?: boolean;
  readonly KmsKey?: string;
}

export interface DeleteLedger {
  readonly Name: string;
}

export interface DescribeJournalKinesisStream {
  readonly LedgerName: string;
  readonly StreamId: string;
}

export interface DescribeJournalS3Export {
  readonly Name: string;
  readonly ExportId: string;
}

export interface DescribeLedger {
  readonly Name: string;
}

export interface ExportJournalToS3 {
  readonly Name: string;
  readonly InclusiveStartTime: Date;
  readonly ExclusiveEndTime: Date;
  readonly S3ExportConfiguration: S3ExportConfiguration;
  readonly RoleArn: string;
}

export interface GetBlock {
  readonly Name: string;
  readonly BlockAddress: ValueHolder;
  readonly DigestTipAddress?: ValueHolder;
}

export interface GetDigest {
  readonly Name: string;
}

export interface GetRevision {
  readonly Name: string;
  readonly BlockAddress: ValueHolder;
  readonly DocumentId: string;
  readonly DigestTipAddress?: ValueHolder;
}

export interface ListJournalKinesisStreamsForLedger {
  readonly LedgerName: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface ListJournalS3Exports {
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface ListJournalS3ExportsForLedger {
  readonly Name: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface ListLedgers {
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface ListTagsForResource {
  readonly ResourceArn: string;
}

export interface StreamJournalToKinesis {
  readonly LedgerName: string;
  readonly RoleArn: string;
  readonly Tags?: {[key: string]: any};
  readonly InclusiveStartTime: Date;
  readonly ExclusiveEndTime?: Date;
  readonly KinesisConfiguration: KinesisConfiguration;
  readonly StreamName: string;
}

export interface TagResource {
  readonly ResourceArn: string;
  readonly Tags: {[key: string]: any};
}

export interface UntagResource {
  readonly ResourceArn: string;
  readonly TagKeys: [];
}

export interface UpdateLedger {
  readonly Name: string;
  readonly DeletionProtection?: boolean;
  readonly KmsKey?: string;
}

export interface UpdateLedgerPermissionsMode {
  readonly Name: string;
  readonly PermissionsMode: string;
}

export interface CancelJournalKinesisStreamRequest {
  readonly LedgerName: string;
  readonly StreamId: string;
}

export interface CancelJournalKinesisStreamResponse {
  readonly StreamId?: string;
}

export interface CreateLedgerRequest {
  readonly Name: string;
  readonly Tags?: {[key: string]: any};
  readonly PermissionsMode: string;
  readonly DeletionProtection?: boolean;
  readonly KmsKey?: string;
}

export interface CreateLedgerResponse {
  readonly Name?: string;
  readonly Arn?: string;
  readonly State?: string;
  readonly CreationDateTime?: Date;
  readonly PermissionsMode?: string;
  readonly DeletionProtection?: boolean;
  readonly KmsKeyArn?: string;
}

export interface DeleteLedgerRequest {
  readonly Name: string;
}

export interface DescribeJournalKinesisStreamRequest {
  readonly LedgerName: string;
  readonly StreamId: string;
}

export interface DescribeJournalKinesisStreamResponse {
  readonly Stream?: JournalKinesisStreamDescription;
}

export interface DescribeJournalS3ExportRequest {
  readonly Name: string;
  readonly ExportId: string;
}

export interface DescribeJournalS3ExportResponse {
  readonly ExportDescription: JournalS3ExportDescription;
}

export interface DescribeLedgerRequest {
  readonly Name: string;
}

export interface DescribeLedgerResponse {
  readonly Name?: string;
  readonly Arn?: string;
  readonly State?: string;
  readonly CreationDateTime?: Date;
  readonly PermissionsMode?: string;
  readonly DeletionProtection?: boolean;
  readonly EncryptionDescription?: LedgerEncryptionDescription;
}

export interface ExportJournalToS3Request {
  readonly Name: string;
  readonly InclusiveStartTime: Date;
  readonly ExclusiveEndTime: Date;
  readonly S3ExportConfiguration: S3ExportConfiguration;
  readonly RoleArn: string;
}

export interface ExportJournalToS3Response {
  readonly ExportId: string;
}

export interface GetBlockRequest {
  readonly Name: string;
  readonly BlockAddress: ValueHolder;
  readonly DigestTipAddress?: ValueHolder;
}

export interface GetBlockResponse {
  readonly Block: ValueHolder;
  readonly Proof?: ValueHolder;
}

export interface GetDigestRequest {
  readonly Name: string;
}

export interface GetDigestResponse {
  readonly Digest: unknown;
  readonly DigestTipAddress: ValueHolder;
}

export interface GetRevisionRequest {
  readonly Name: string;
  readonly BlockAddress: ValueHolder;
  readonly DocumentId: string;
  readonly DigestTipAddress?: ValueHolder;
}

export interface GetRevisionResponse {
  readonly Proof?: ValueHolder;
  readonly Revision: ValueHolder;
}

export interface InvalidParameterException {
  readonly Message?: string;
  readonly ParameterName?: string;
}

export interface JournalKinesisStreamDescription {
  readonly LedgerName: string;
  readonly CreationTime?: Date;
  readonly InclusiveStartTime?: Date;
  readonly ExclusiveEndTime?: Date;
  readonly RoleArn: string;
  readonly StreamId: string;
  readonly Arn?: string;
  readonly Status: string;
  readonly KinesisConfiguration: KinesisConfiguration;
  readonly ErrorCause?: string;
  readonly StreamName: string;
}

export interface JournalS3ExportDescription {
  readonly LedgerName: string;
  readonly ExportId: string;
  readonly ExportCreationTime: Date;
  readonly Status: string;
  readonly InclusiveStartTime: Date;
  readonly ExclusiveEndTime: Date;
  readonly S3ExportConfiguration: S3ExportConfiguration;
  readonly RoleArn: string;
}

export interface KinesisConfiguration {
  readonly StreamArn: string;
  readonly AggregationEnabled?: boolean;
}

export interface LedgerEncryptionDescription {
  readonly KmsKeyArn: string;
  readonly EncryptionStatus: string;
  readonly InaccessibleKmsKeyDateTime?: Date;
}

export interface LedgerSummary {
  readonly Name?: string;
  readonly State?: string;
  readonly CreationDateTime?: Date;
}

export interface LimitExceededException {
  readonly Message?: string;
  readonly ResourceType?: string;
}

export interface ListJournalKinesisStreamsForLedgerRequest {
  readonly LedgerName: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface ListJournalKinesisStreamsForLedgerResponse {
  readonly Streams?: [];
  readonly NextToken?: string;
}

export interface ListJournalS3ExportsForLedgerRequest {
  readonly Name: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface ListJournalS3ExportsForLedgerResponse {
  readonly JournalS3Exports?: [];
  readonly NextToken?: string;
}

export interface ListJournalS3ExportsRequest {
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface ListJournalS3ExportsResponse {
  readonly JournalS3Exports?: [];
  readonly NextToken?: string;
}

export interface ListLedgersRequest {
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface ListLedgersResponse {
  readonly Ledgers?: [];
  readonly NextToken?: string;
}

export interface ListTagsForResourceRequest {
  readonly ResourceArn: string;
}

export interface ListTagsForResourceResponse {
  readonly Tags?: {[key: string]: any};
}

export interface ResourceAlreadyExistsException {
  readonly Message?: string;
  readonly ResourceType?: string;
  readonly ResourceName?: string;
}

export interface ResourceInUseException {
  readonly Message?: string;
  readonly ResourceType?: string;
  readonly ResourceName?: string;
}

export interface ResourceNotFoundException {
  readonly Message?: string;
  readonly ResourceType?: string;
  readonly ResourceName?: string;
}

export interface ResourcePreconditionNotMetException {
  readonly Message?: string;
  readonly ResourceType?: string;
  readonly ResourceName?: string;
}

export interface S3EncryptionConfiguration {
  readonly ObjectEncryptionType: string;
  readonly KmsKeyArn?: string;
}

export interface S3ExportConfiguration {
  readonly Bucket: string;
  readonly Prefix: string;
  readonly EncryptionConfiguration: S3EncryptionConfiguration;
}

export interface StreamJournalToKinesisRequest {
  readonly LedgerName: string;
  readonly RoleArn: string;
  readonly Tags?: {[key: string]: any};
  readonly InclusiveStartTime: Date;
  readonly ExclusiveEndTime?: Date;
  readonly KinesisConfiguration: KinesisConfiguration;
  readonly StreamName: string;
}

export interface StreamJournalToKinesisResponse {
  readonly StreamId?: string;
}

export interface TagResourceRequest {
  readonly ResourceArn: string;
  readonly Tags: {[key: string]: any};
}

export interface TagResourceResponse {
}

export interface UntagResourceRequest {
  readonly ResourceArn: string;
  readonly TagKeys: [];
}

export interface UntagResourceResponse {
}

export interface UpdateLedgerPermissionsModeRequest {
  readonly Name: string;
  readonly PermissionsMode: string;
}

export interface UpdateLedgerPermissionsModeResponse {
  readonly Name?: string;
  readonly Arn?: string;
  readonly PermissionsMode?: string;
}

export interface UpdateLedgerRequest {
  readonly Name: string;
  readonly DeletionProtection?: boolean;
  readonly KmsKey?: string;
}

export interface UpdateLedgerResponse {
  readonly Name?: string;
  readonly Arn?: string;
  readonly State?: string;
  readonly CreationDateTime?: Date;
  readonly DeletionProtection?: boolean;
  readonly EncryptionDescription?: LedgerEncryptionDescription;
}

export interface ValueHolder {
  readonly IonText?: string;
}


