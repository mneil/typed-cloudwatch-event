/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface CancelJournalKinesisStream {
  readonly LedgerName: string;
  readonly StreamId: string;
}
export interface CreateLedger {
  readonly Name: string;
  readonly Tags: {[key: string]: any};
  readonly PermissionsMode: string;
  readonly DeletionProtection: boolean;
  readonly KmsKey: string;
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
  readonly DigestTipAddress: ValueHolder;
}
export interface GetDigest {
  readonly Name: string;
}
export interface GetRevision {
  readonly Name: string;
  readonly BlockAddress: ValueHolder;
  readonly DocumentId: string;
  readonly DigestTipAddress: ValueHolder;
}
export interface ListJournalKinesisStreamsForLedger {
  readonly LedgerName: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}
export interface ListJournalS3Exports {
  readonly MaxResults: number;
  readonly NextToken: string;
}
export interface ListJournalS3ExportsForLedger {
  readonly Name: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}
export interface ListLedgers {
  readonly MaxResults: number;
  readonly NextToken: string;
}
export interface ListTagsForResource {
  readonly ResourceArn: string;
}
export interface StreamJournalToKinesis {
  readonly LedgerName: string;
  readonly RoleArn: string;
  readonly Tags: {[key: string]: any};
  readonly InclusiveStartTime: Date;
  readonly ExclusiveEndTime: Date;
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
  readonly DeletionProtection: boolean;
  readonly KmsKey: string;
}
export interface UpdateLedgerPermissionsMode {
  readonly Name: string;
  readonly PermissionsMode: string;
}



interface CancelJournalKinesisStreamRequest {
  readonly LedgerName: string;
  readonly StreamId: string;
}

interface CancelJournalKinesisStreamResponse {
  readonly StreamId: string;
}

interface CreateLedgerRequest {
  readonly Name: string;
  readonly Tags: {[key: string]: any};
  readonly PermissionsMode: string;
  readonly DeletionProtection: boolean;
  readonly KmsKey: string;
}

interface CreateLedgerResponse {
  readonly Name: string;
  readonly Arn: string;
  readonly State: string;
  readonly CreationDateTime: Date;
  readonly PermissionsMode: string;
  readonly DeletionProtection: boolean;
  readonly KmsKeyArn: string;
}

interface DeleteLedgerRequest {
  readonly Name: string;
}

interface DescribeJournalKinesisStreamRequest {
  readonly LedgerName: string;
  readonly StreamId: string;
}

interface DescribeJournalKinesisStreamResponse {
  readonly Stream: JournalKinesisStreamDescription;
}

interface DescribeJournalS3ExportRequest {
  readonly Name: string;
  readonly ExportId: string;
}

interface DescribeJournalS3ExportResponse {
  readonly ExportDescription: JournalS3ExportDescription;
}

interface DescribeLedgerRequest {
  readonly Name: string;
}

interface DescribeLedgerResponse {
  readonly Name: string;
  readonly Arn: string;
  readonly State: string;
  readonly CreationDateTime: Date;
  readonly PermissionsMode: string;
  readonly DeletionProtection: boolean;
  readonly EncryptionDescription: LedgerEncryptionDescription;
}

interface ExportJournalToS3Request {
  readonly Name: string;
  readonly InclusiveStartTime: Date;
  readonly ExclusiveEndTime: Date;
  readonly S3ExportConfiguration: S3ExportConfiguration;
  readonly RoleArn: string;
}

interface ExportJournalToS3Response {
  readonly ExportId: string;
}

interface GetBlockRequest {
  readonly Name: string;
  readonly BlockAddress: ValueHolder;
  readonly DigestTipAddress: ValueHolder;
}

interface GetBlockResponse {
  readonly Block: ValueHolder;
  readonly Proof: ValueHolder;
}

interface GetDigestRequest {
  readonly Name: string;
}

interface GetDigestResponse {
  readonly Digest: unknown;
  readonly DigestTipAddress: ValueHolder;
}

interface GetRevisionRequest {
  readonly Name: string;
  readonly BlockAddress: ValueHolder;
  readonly DocumentId: string;
  readonly DigestTipAddress: ValueHolder;
}

interface GetRevisionResponse {
  readonly Proof: ValueHolder;
  readonly Revision: ValueHolder;
}

interface InvalidParameterException {
  readonly Message: string;
  readonly ParameterName: string;
}

interface JournalKinesisStreamDescription {
  readonly LedgerName: string;
  readonly CreationTime: Date;
  readonly InclusiveStartTime: Date;
  readonly ExclusiveEndTime: Date;
  readonly RoleArn: string;
  readonly StreamId: string;
  readonly Arn: string;
  readonly Status: string;
  readonly KinesisConfiguration: KinesisConfiguration;
  readonly ErrorCause: string;
  readonly StreamName: string;
}

interface JournalS3ExportDescription {
  readonly LedgerName: string;
  readonly ExportId: string;
  readonly ExportCreationTime: Date;
  readonly Status: string;
  readonly InclusiveStartTime: Date;
  readonly ExclusiveEndTime: Date;
  readonly S3ExportConfiguration: S3ExportConfiguration;
  readonly RoleArn: string;
}

interface KinesisConfiguration {
  readonly StreamArn: string;
  readonly AggregationEnabled: boolean;
}

interface LedgerEncryptionDescription {
  readonly KmsKeyArn: string;
  readonly EncryptionStatus: string;
  readonly InaccessibleKmsKeyDateTime: Date;
}

interface LedgerSummary {
  readonly Name: string;
  readonly State: string;
  readonly CreationDateTime: Date;
}

interface LimitExceededException {
  readonly Message: string;
  readonly ResourceType: string;
}

interface ListJournalKinesisStreamsForLedgerRequest {
  readonly LedgerName: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface ListJournalKinesisStreamsForLedgerResponse {
  readonly Streams: [];
  readonly NextToken: string;
}

interface ListJournalS3ExportsForLedgerRequest {
  readonly Name: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface ListJournalS3ExportsForLedgerResponse {
  readonly JournalS3Exports: [];
  readonly NextToken: string;
}

interface ListJournalS3ExportsRequest {
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface ListJournalS3ExportsResponse {
  readonly JournalS3Exports: [];
  readonly NextToken: string;
}

interface ListLedgersRequest {
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface ListLedgersResponse {
  readonly Ledgers: [];
  readonly NextToken: string;
}

interface ListTagsForResourceRequest {
  readonly ResourceArn: string;
}

interface ListTagsForResourceResponse {
  readonly Tags: {[key: string]: any};
}

interface ResourceAlreadyExistsException {
  readonly Message: string;
  readonly ResourceType: string;
  readonly ResourceName: string;
}

interface ResourceInUseException {
  readonly Message: string;
  readonly ResourceType: string;
  readonly ResourceName: string;
}

interface ResourceNotFoundException {
  readonly Message: string;
  readonly ResourceType: string;
  readonly ResourceName: string;
}

interface ResourcePreconditionNotMetException {
  readonly Message: string;
  readonly ResourceType: string;
  readonly ResourceName: string;
}

interface S3EncryptionConfiguration {
  readonly ObjectEncryptionType: string;
  readonly KmsKeyArn: string;
}

interface S3ExportConfiguration {
  readonly Bucket: string;
  readonly Prefix: string;
  readonly EncryptionConfiguration: S3EncryptionConfiguration;
}

interface StreamJournalToKinesisRequest {
  readonly LedgerName: string;
  readonly RoleArn: string;
  readonly Tags: {[key: string]: any};
  readonly InclusiveStartTime: Date;
  readonly ExclusiveEndTime: Date;
  readonly KinesisConfiguration: KinesisConfiguration;
  readonly StreamName: string;
}

interface StreamJournalToKinesisResponse {
  readonly StreamId: string;
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

interface UpdateLedgerPermissionsModeRequest {
  readonly Name: string;
  readonly PermissionsMode: string;
}

interface UpdateLedgerPermissionsModeResponse {
  readonly Name: string;
  readonly Arn: string;
  readonly PermissionsMode: string;
}

interface UpdateLedgerRequest {
  readonly Name: string;
  readonly DeletionProtection: boolean;
  readonly KmsKey: string;
}

interface UpdateLedgerResponse {
  readonly Name: string;
  readonly Arn: string;
  readonly State: string;
  readonly CreationDateTime: Date;
  readonly DeletionProtection: boolean;
  readonly EncryptionDescription: LedgerEncryptionDescription;
}

interface ValueHolder {
  readonly IonText: string;
}
