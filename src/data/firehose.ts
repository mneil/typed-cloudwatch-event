/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface CreateDeliveryStream {
  readonly DeliveryStreamName: string;
  readonly DeliveryStreamType?: string;
  readonly KinesisStreamSourceConfiguration?: KinesisStreamSourceConfiguration;
  readonly DeliveryStreamEncryptionConfigurationInput?: DeliveryStreamEncryptionConfigurationInput;
  readonly S3DestinationConfiguration?: S3DestinationConfiguration;
  readonly ExtendedS3DestinationConfiguration?: ExtendedS3DestinationConfiguration;
  readonly RedshiftDestinationConfiguration?: RedshiftDestinationConfiguration;
  readonly ElasticsearchDestinationConfiguration?: ElasticsearchDestinationConfiguration;
  readonly AmazonopensearchserviceDestinationConfiguration?: AmazonopensearchserviceDestinationConfiguration;
  readonly SplunkDestinationConfiguration?: SplunkDestinationConfiguration;
  readonly HttpEndpointDestinationConfiguration?: HttpEndpointDestinationConfiguration;
  readonly Tags?: [];
}
export interface DeleteDeliveryStream {
  readonly DeliveryStreamName: string;
  readonly AllowForceDelete?: boolean;
}
export interface DescribeDeliveryStream {
  readonly DeliveryStreamName: string;
  readonly Limit?: number;
  readonly ExclusiveStartDestinationId?: string;
}
export interface ListDeliveryStreams {
  readonly Limit?: number;
  readonly DeliveryStreamType?: string;
  readonly ExclusiveStartDeliveryStreamName?: string;
}
export interface ListTagsForDeliveryStream {
  readonly DeliveryStreamName: string;
  readonly ExclusiveStartTagKey?: string;
  readonly Limit?: number;
}
export interface PutRecord {
  readonly DeliveryStreamName: string;
  readonly Record: Record;
}
export interface PutRecordBatch {
  readonly DeliveryStreamName: string;
  readonly Records: [];
}
export interface StartDeliveryStreamEncryption {
  readonly DeliveryStreamName: string;
  readonly DeliveryStreamEncryptionConfigurationInput?: DeliveryStreamEncryptionConfigurationInput;
}
export interface StopDeliveryStreamEncryption {
  readonly DeliveryStreamName: string;
}
export interface TagDeliveryStream {
  readonly DeliveryStreamName: string;
  readonly Tags: [];
}
export interface UntagDeliveryStream {
  readonly DeliveryStreamName: string;
  readonly TagKeys: [];
}
export interface UpdateDestination {
  readonly DeliveryStreamName: string;
  readonly CurrentDeliveryStreamVersionId: string;
  readonly DestinationId: string;
  readonly S3DestinationUpdate?: S3DestinationUpdate;
  readonly ExtendedS3DestinationUpdate?: ExtendedS3DestinationUpdate;
  readonly RedshiftDestinationUpdate?: RedshiftDestinationUpdate;
  readonly ElasticsearchDestinationUpdate?: ElasticsearchDestinationUpdate;
  readonly AmazonopensearchserviceDestinationUpdate?: AmazonopensearchserviceDestinationUpdate;
  readonly SplunkDestinationUpdate?: SplunkDestinationUpdate;
  readonly HttpEndpointDestinationUpdate?: HttpEndpointDestinationUpdate;
}



interface AmazonopensearchserviceBufferingHints {
  readonly IntervalInSeconds: number;
  readonly SizeInMBs: number;
}

interface AmazonopensearchserviceDestinationConfiguration {
  readonly RoleARN: string;
  readonly DomainARN: string;
  readonly ClusterEndpoint: string;
  readonly IndexName: string;
  readonly TypeName: string;
  readonly IndexRotationPeriod: string;
  readonly BufferingHints: AmazonopensearchserviceBufferingHints;
  readonly RetryOptions: AmazonopensearchserviceRetryOptions;
  readonly S3BackupMode: string;
  readonly S3Configuration: S3DestinationConfiguration;
  readonly ProcessingConfiguration: ProcessingConfiguration;
  readonly CloudWatchLoggingOptions: CloudWatchLoggingOptions;
  readonly VpcConfiguration: VpcConfiguration;
}

interface AmazonopensearchserviceDestinationDescription {
  readonly RoleARN: string;
  readonly DomainARN: string;
  readonly ClusterEndpoint: string;
  readonly IndexName: string;
  readonly TypeName: string;
  readonly IndexRotationPeriod: string;
  readonly BufferingHints: AmazonopensearchserviceBufferingHints;
  readonly RetryOptions: AmazonopensearchserviceRetryOptions;
  readonly S3BackupMode: string;
  readonly S3DestinationDescription: S3DestinationDescription;
  readonly ProcessingConfiguration: ProcessingConfiguration;
  readonly CloudWatchLoggingOptions: CloudWatchLoggingOptions;
  readonly VpcConfigurationDescription: VpcConfigurationDescription;
}

interface AmazonopensearchserviceDestinationUpdate {
  readonly RoleARN: string;
  readonly DomainARN: string;
  readonly ClusterEndpoint: string;
  readonly IndexName: string;
  readonly TypeName: string;
  readonly IndexRotationPeriod: string;
  readonly BufferingHints: AmazonopensearchserviceBufferingHints;
  readonly RetryOptions: AmazonopensearchserviceRetryOptions;
  readonly S3Update: S3DestinationUpdate;
  readonly ProcessingConfiguration: ProcessingConfiguration;
  readonly CloudWatchLoggingOptions: CloudWatchLoggingOptions;
}

interface AmazonopensearchserviceRetryOptions {
  readonly DurationInSeconds: number;
}

interface BufferingHints {
  readonly SizeInMBs: number;
  readonly IntervalInSeconds: number;
}

interface CloudWatchLoggingOptions {
  readonly Enabled: boolean;
  readonly LogGroupName: string;
  readonly LogStreamName: string;
}

interface ConcurrentModificationException {
  readonly message: string;
}

interface CopyCommand {
  readonly DataTableName: string;
  readonly DataTableColumns: string;
  readonly CopyOptions: string;
}

interface CreateDeliveryStreamInput {
  readonly DeliveryStreamName: string;
  readonly DeliveryStreamType: string;
  readonly KinesisStreamSourceConfiguration: KinesisStreamSourceConfiguration;
  readonly DeliveryStreamEncryptionConfigurationInput: DeliveryStreamEncryptionConfigurationInput;
  readonly S3DestinationConfiguration: S3DestinationConfiguration;
  readonly ExtendedS3DestinationConfiguration: ExtendedS3DestinationConfiguration;
  readonly RedshiftDestinationConfiguration: RedshiftDestinationConfiguration;
  readonly ElasticsearchDestinationConfiguration: ElasticsearchDestinationConfiguration;
  readonly AmazonopensearchserviceDestinationConfiguration: AmazonopensearchserviceDestinationConfiguration;
  readonly SplunkDestinationConfiguration: SplunkDestinationConfiguration;
  readonly HttpEndpointDestinationConfiguration: HttpEndpointDestinationConfiguration;
  readonly Tags: [];
}

interface CreateDeliveryStreamOutput {
  readonly DeliveryStreamARN: string;
}

interface DataFormatConversionConfiguration {
  readonly SchemaConfiguration: SchemaConfiguration;
  readonly InputFormatConfiguration: InputFormatConfiguration;
  readonly OutputFormatConfiguration: OutputFormatConfiguration;
  readonly Enabled: boolean;
}

interface DeleteDeliveryStreamInput {
  readonly DeliveryStreamName: string;
  readonly AllowForceDelete: boolean;
}

interface DeleteDeliveryStreamOutput {
}

interface DeliveryStreamDescription {
  readonly DeliveryStreamName: string;
  readonly DeliveryStreamARN: string;
  readonly DeliveryStreamStatus: string;
  readonly FailureDescription: FailureDescription;
  readonly DeliveryStreamEncryptionConfiguration: DeliveryStreamEncryptionConfiguration;
  readonly DeliveryStreamType: string;
  readonly VersionId: string;
  readonly CreateTimestamp: Date;
  readonly LastUpdateTimestamp: Date;
  readonly Source: SourceDescription;
  readonly Destinations: [];
  readonly HasMoreDestinations: boolean;
}

interface DeliveryStreamEncryptionConfiguration {
  readonly KeyARN: string;
  readonly KeyType: string;
  readonly Status: string;
  readonly FailureDescription: FailureDescription;
}

interface DeliveryStreamEncryptionConfigurationInput {
  readonly KeyARN: string;
  readonly KeyType: string;
}

interface DescribeDeliveryStreamInput {
  readonly DeliveryStreamName: string;
  readonly Limit: number;
  readonly ExclusiveStartDestinationId: string;
}

interface DescribeDeliveryStreamOutput {
  readonly DeliveryStreamDescription: DeliveryStreamDescription;
}

interface Deserializer {
  readonly OpenXJsonSerDe: OpenXJsonSerDe;
  readonly HiveJsonSerDe: HiveJsonSerDe;
}

interface DestinationDescription {
  readonly DestinationId: string;
  readonly S3DestinationDescription: S3DestinationDescription;
  readonly ExtendedS3DestinationDescription: ExtendedS3DestinationDescription;
  readonly RedshiftDestinationDescription: RedshiftDestinationDescription;
  readonly ElasticsearchDestinationDescription: ElasticsearchDestinationDescription;
  readonly AmazonopensearchserviceDestinationDescription: AmazonopensearchserviceDestinationDescription;
  readonly SplunkDestinationDescription: SplunkDestinationDescription;
  readonly HttpEndpointDestinationDescription: HttpEndpointDestinationDescription;
}

interface DynamicPartitioningConfiguration {
  readonly RetryOptions: RetryOptions;
  readonly Enabled: boolean;
}

interface ElasticsearchBufferingHints {
  readonly IntervalInSeconds: number;
  readonly SizeInMBs: number;
}

interface ElasticsearchDestinationConfiguration {
  readonly RoleARN: string;
  readonly DomainARN: string;
  readonly ClusterEndpoint: string;
  readonly IndexName: string;
  readonly TypeName: string;
  readonly IndexRotationPeriod: string;
  readonly BufferingHints: ElasticsearchBufferingHints;
  readonly RetryOptions: ElasticsearchRetryOptions;
  readonly S3BackupMode: string;
  readonly S3Configuration: S3DestinationConfiguration;
  readonly ProcessingConfiguration: ProcessingConfiguration;
  readonly CloudWatchLoggingOptions: CloudWatchLoggingOptions;
  readonly VpcConfiguration: VpcConfiguration;
}

interface ElasticsearchDestinationDescription {
  readonly RoleARN: string;
  readonly DomainARN: string;
  readonly ClusterEndpoint: string;
  readonly IndexName: string;
  readonly TypeName: string;
  readonly IndexRotationPeriod: string;
  readonly BufferingHints: ElasticsearchBufferingHints;
  readonly RetryOptions: ElasticsearchRetryOptions;
  readonly S3BackupMode: string;
  readonly S3DestinationDescription: S3DestinationDescription;
  readonly ProcessingConfiguration: ProcessingConfiguration;
  readonly CloudWatchLoggingOptions: CloudWatchLoggingOptions;
  readonly VpcConfigurationDescription: VpcConfigurationDescription;
}

interface ElasticsearchDestinationUpdate {
  readonly RoleARN: string;
  readonly DomainARN: string;
  readonly ClusterEndpoint: string;
  readonly IndexName: string;
  readonly TypeName: string;
  readonly IndexRotationPeriod: string;
  readonly BufferingHints: ElasticsearchBufferingHints;
  readonly RetryOptions: ElasticsearchRetryOptions;
  readonly S3Update: S3DestinationUpdate;
  readonly ProcessingConfiguration: ProcessingConfiguration;
  readonly CloudWatchLoggingOptions: CloudWatchLoggingOptions;
}

interface ElasticsearchRetryOptions {
  readonly DurationInSeconds: number;
}

interface EncryptionConfiguration {
  readonly NoEncryptionConfig: string;
  readonly KMSEncryptionConfig: KMSEncryptionConfig;
}

interface ExtendedS3DestinationConfiguration {
  readonly RoleARN: string;
  readonly BucketARN: string;
  readonly Prefix: string;
  readonly ErrorOutputPrefix: string;
  readonly BufferingHints: BufferingHints;
  readonly CompressionFormat: string;
  readonly EncryptionConfiguration: EncryptionConfiguration;
  readonly CloudWatchLoggingOptions: CloudWatchLoggingOptions;
  readonly ProcessingConfiguration: ProcessingConfiguration;
  readonly S3BackupMode: string;
  readonly S3BackupConfiguration: S3DestinationConfiguration;
  readonly DataFormatConversionConfiguration: DataFormatConversionConfiguration;
  readonly DynamicPartitioningConfiguration: DynamicPartitioningConfiguration;
}

interface ExtendedS3DestinationDescription {
  readonly RoleARN: string;
  readonly BucketARN: string;
  readonly Prefix: string;
  readonly ErrorOutputPrefix: string;
  readonly BufferingHints: BufferingHints;
  readonly CompressionFormat: string;
  readonly EncryptionConfiguration: EncryptionConfiguration;
  readonly CloudWatchLoggingOptions: CloudWatchLoggingOptions;
  readonly ProcessingConfiguration: ProcessingConfiguration;
  readonly S3BackupMode: string;
  readonly S3BackupDescription: S3DestinationDescription;
  readonly DataFormatConversionConfiguration: DataFormatConversionConfiguration;
  readonly DynamicPartitioningConfiguration: DynamicPartitioningConfiguration;
}

interface ExtendedS3DestinationUpdate {
  readonly RoleARN: string;
  readonly BucketARN: string;
  readonly Prefix: string;
  readonly ErrorOutputPrefix: string;
  readonly BufferingHints: BufferingHints;
  readonly CompressionFormat: string;
  readonly EncryptionConfiguration: EncryptionConfiguration;
  readonly CloudWatchLoggingOptions: CloudWatchLoggingOptions;
  readonly ProcessingConfiguration: ProcessingConfiguration;
  readonly S3BackupMode: string;
  readonly S3BackupUpdate: S3DestinationUpdate;
  readonly DataFormatConversionConfiguration: DataFormatConversionConfiguration;
  readonly DynamicPartitioningConfiguration: DynamicPartitioningConfiguration;
}

interface FailureDescription {
  readonly Type: string;
  readonly Details: string;
}

interface HiveJsonSerDe {
  readonly TimestampFormats: [];
}

interface HttpEndpointBufferingHints {
  readonly SizeInMBs: number;
  readonly IntervalInSeconds: number;
}

interface HttpEndpointCommonAttribute {
  readonly AttributeName: string;
  readonly AttributeValue: string;
}

interface HttpEndpointConfiguration {
  readonly Url: string;
  readonly Name: string;
  readonly AccessKey: string;
}

interface HttpEndpointDescription {
  readonly Url: string;
  readonly Name: string;
}

interface HttpEndpointDestinationConfiguration {
  readonly EndpointConfiguration: HttpEndpointConfiguration;
  readonly BufferingHints: HttpEndpointBufferingHints;
  readonly CloudWatchLoggingOptions: CloudWatchLoggingOptions;
  readonly RequestConfiguration: HttpEndpointRequestConfiguration;
  readonly ProcessingConfiguration: ProcessingConfiguration;
  readonly RoleARN: string;
  readonly RetryOptions: HttpEndpointRetryOptions;
  readonly S3BackupMode: string;
  readonly S3Configuration: S3DestinationConfiguration;
}

interface HttpEndpointDestinationDescription {
  readonly EndpointConfiguration: HttpEndpointDescription;
  readonly BufferingHints: HttpEndpointBufferingHints;
  readonly CloudWatchLoggingOptions: CloudWatchLoggingOptions;
  readonly RequestConfiguration: HttpEndpointRequestConfiguration;
  readonly ProcessingConfiguration: ProcessingConfiguration;
  readonly RoleARN: string;
  readonly RetryOptions: HttpEndpointRetryOptions;
  readonly S3BackupMode: string;
  readonly S3DestinationDescription: S3DestinationDescription;
}

interface HttpEndpointDestinationUpdate {
  readonly EndpointConfiguration: HttpEndpointConfiguration;
  readonly BufferingHints: HttpEndpointBufferingHints;
  readonly CloudWatchLoggingOptions: CloudWatchLoggingOptions;
  readonly RequestConfiguration: HttpEndpointRequestConfiguration;
  readonly ProcessingConfiguration: ProcessingConfiguration;
  readonly RoleARN: string;
  readonly RetryOptions: HttpEndpointRetryOptions;
  readonly S3BackupMode: string;
  readonly S3Update: S3DestinationUpdate;
}

interface HttpEndpointRequestConfiguration {
  readonly ContentEncoding: string;
  readonly CommonAttributes: [];
}

interface HttpEndpointRetryOptions {
  readonly DurationInSeconds: number;
}

interface InputFormatConfiguration {
  readonly Deserializer: Deserializer;
}

interface InvalidArgumentException {
  readonly message: string;
}

interface InvalidKMSResourceException {
  readonly code: string;
  readonly message: string;
}

interface KMSEncryptionConfig {
  readonly AWSKMSKeyARN: string;
}

interface KinesisStreamSourceConfiguration {
  readonly KinesisStreamARN: string;
  readonly RoleARN: string;
}

interface KinesisStreamSourceDescription {
  readonly KinesisStreamARN: string;
  readonly RoleARN: string;
  readonly DeliveryStartTimestamp: Date;
}

interface LimitExceededException {
  readonly message: string;
}

interface ListDeliveryStreamsInput {
  readonly Limit: number;
  readonly DeliveryStreamType: string;
  readonly ExclusiveStartDeliveryStreamName: string;
}

interface ListDeliveryStreamsOutput {
  readonly DeliveryStreamNames: [];
  readonly HasMoreDeliveryStreams: boolean;
}

interface ListTagsForDeliveryStreamInput {
  readonly DeliveryStreamName: string;
  readonly ExclusiveStartTagKey: string;
  readonly Limit: number;
}

interface ListTagsForDeliveryStreamOutput {
  readonly Tags: [];
  readonly HasMoreTags: boolean;
}

interface OpenXJsonSerDe {
  readonly ConvertDotsInJsonKeysToUnderscores: boolean;
  readonly CaseInsensitive: boolean;
  readonly ColumnToJsonKeyMappings: {[key: string]: any};
}

interface OrcSerDe {
  readonly StripeSizeBytes: number;
  readonly BlockSizeBytes: number;
  readonly RowIndexStride: number;
  readonly EnablePadding: boolean;
  readonly PaddingTolerance: unknown;
  readonly Compression: string;
  readonly BloomFilterColumns: [];
  readonly BloomFilterFalsePositiveProbability: unknown;
  readonly DictionaryKeyThreshold: unknown;
  readonly FormatVersion: string;
}

interface OutputFormatConfiguration {
  readonly Serializer: Serializer;
}

interface ParquetSerDe {
  readonly BlockSizeBytes: number;
  readonly PageSizeBytes: number;
  readonly Compression: string;
  readonly EnableDictionaryCompression: boolean;
  readonly MaxPaddingBytes: number;
  readonly WriterVersion: string;
}

interface ProcessingConfiguration {
  readonly Enabled: boolean;
  readonly Processors: [];
}

interface Processor {
  readonly Type: string;
  readonly Parameters: [];
}

interface ProcessorParameter {
  readonly ParameterName: string;
  readonly ParameterValue: string;
}

interface PutRecordBatchInput {
  readonly DeliveryStreamName: string;
  readonly Records: [];
}

interface PutRecordBatchOutput {
  readonly FailedPutCount: number;
  readonly Encrypted: boolean;
  readonly RequestResponses: [];
}

interface PutRecordBatchResponseEntry {
  readonly RecordId: string;
  readonly ErrorCode: string;
  readonly ErrorMessage: string;
}

interface PutRecordInput {
  readonly DeliveryStreamName: string;
  readonly Record: Record;
}

interface PutRecordOutput {
  readonly RecordId: string;
  readonly Encrypted: boolean;
}

interface Record {
  readonly Data: unknown;
}

interface RedshiftDestinationConfiguration {
  readonly RoleARN: string;
  readonly ClusterJDBCURL: string;
  readonly CopyCommand: CopyCommand;
  readonly Username: string;
  readonly Password: string;
  readonly RetryOptions: RedshiftRetryOptions;
  readonly S3Configuration: S3DestinationConfiguration;
  readonly ProcessingConfiguration: ProcessingConfiguration;
  readonly S3BackupMode: string;
  readonly S3BackupConfiguration: S3DestinationConfiguration;
  readonly CloudWatchLoggingOptions: CloudWatchLoggingOptions;
}

interface RedshiftDestinationDescription {
  readonly RoleARN: string;
  readonly ClusterJDBCURL: string;
  readonly CopyCommand: CopyCommand;
  readonly Username: string;
  readonly RetryOptions: RedshiftRetryOptions;
  readonly S3DestinationDescription: S3DestinationDescription;
  readonly ProcessingConfiguration: ProcessingConfiguration;
  readonly S3BackupMode: string;
  readonly S3BackupDescription: S3DestinationDescription;
  readonly CloudWatchLoggingOptions: CloudWatchLoggingOptions;
}

interface RedshiftDestinationUpdate {
  readonly RoleARN: string;
  readonly ClusterJDBCURL: string;
  readonly CopyCommand: CopyCommand;
  readonly Username: string;
  readonly Password: string;
  readonly RetryOptions: RedshiftRetryOptions;
  readonly S3Update: S3DestinationUpdate;
  readonly ProcessingConfiguration: ProcessingConfiguration;
  readonly S3BackupMode: string;
  readonly S3BackupUpdate: S3DestinationUpdate;
  readonly CloudWatchLoggingOptions: CloudWatchLoggingOptions;
}

interface RedshiftRetryOptions {
  readonly DurationInSeconds: number;
}

interface ResourceInUseException {
  readonly message: string;
}

interface ResourceNotFoundException {
  readonly message: string;
}

interface RetryOptions {
  readonly DurationInSeconds: number;
}

interface S3DestinationConfiguration {
  readonly RoleARN: string;
  readonly BucketARN: string;
  readonly Prefix: string;
  readonly ErrorOutputPrefix: string;
  readonly BufferingHints: BufferingHints;
  readonly CompressionFormat: string;
  readonly EncryptionConfiguration: EncryptionConfiguration;
  readonly CloudWatchLoggingOptions: CloudWatchLoggingOptions;
}

interface S3DestinationDescription {
  readonly RoleARN: string;
  readonly BucketARN: string;
  readonly Prefix: string;
  readonly ErrorOutputPrefix: string;
  readonly BufferingHints: BufferingHints;
  readonly CompressionFormat: string;
  readonly EncryptionConfiguration: EncryptionConfiguration;
  readonly CloudWatchLoggingOptions: CloudWatchLoggingOptions;
}

interface S3DestinationUpdate {
  readonly RoleARN: string;
  readonly BucketARN: string;
  readonly Prefix: string;
  readonly ErrorOutputPrefix: string;
  readonly BufferingHints: BufferingHints;
  readonly CompressionFormat: string;
  readonly EncryptionConfiguration: EncryptionConfiguration;
  readonly CloudWatchLoggingOptions: CloudWatchLoggingOptions;
}

interface SchemaConfiguration {
  readonly RoleARN: string;
  readonly CatalogId: string;
  readonly DatabaseName: string;
  readonly TableName: string;
  readonly Region: string;
  readonly VersionId: string;
}

interface Serializer {
  readonly ParquetSerDe: ParquetSerDe;
  readonly OrcSerDe: OrcSerDe;
}

interface ServiceUnavailableException {
  readonly message: string;
}

interface SourceDescription {
  readonly KinesisStreamSourceDescription: KinesisStreamSourceDescription;
}

interface SplunkDestinationConfiguration {
  readonly HECEndpoint: string;
  readonly HECEndpointType: string;
  readonly HECToken: string;
  readonly HECAcknowledgmentTimeoutInSeconds: number;
  readonly RetryOptions: SplunkRetryOptions;
  readonly S3BackupMode: string;
  readonly S3Configuration: S3DestinationConfiguration;
  readonly ProcessingConfiguration: ProcessingConfiguration;
  readonly CloudWatchLoggingOptions: CloudWatchLoggingOptions;
}

interface SplunkDestinationDescription {
  readonly HECEndpoint: string;
  readonly HECEndpointType: string;
  readonly HECToken: string;
  readonly HECAcknowledgmentTimeoutInSeconds: number;
  readonly RetryOptions: SplunkRetryOptions;
  readonly S3BackupMode: string;
  readonly S3DestinationDescription: S3DestinationDescription;
  readonly ProcessingConfiguration: ProcessingConfiguration;
  readonly CloudWatchLoggingOptions: CloudWatchLoggingOptions;
}

interface SplunkDestinationUpdate {
  readonly HECEndpoint: string;
  readonly HECEndpointType: string;
  readonly HECToken: string;
  readonly HECAcknowledgmentTimeoutInSeconds: number;
  readonly RetryOptions: SplunkRetryOptions;
  readonly S3BackupMode: string;
  readonly S3Update: S3DestinationUpdate;
  readonly ProcessingConfiguration: ProcessingConfiguration;
  readonly CloudWatchLoggingOptions: CloudWatchLoggingOptions;
}

interface SplunkRetryOptions {
  readonly DurationInSeconds: number;
}

interface StartDeliveryStreamEncryptionInput {
  readonly DeliveryStreamName: string;
  readonly DeliveryStreamEncryptionConfigurationInput: DeliveryStreamEncryptionConfigurationInput;
}

interface StartDeliveryStreamEncryptionOutput {
}

interface StopDeliveryStreamEncryptionInput {
  readonly DeliveryStreamName: string;
}

interface StopDeliveryStreamEncryptionOutput {
}

interface Tag {
  readonly Key: string;
  readonly Value: string;
}

interface TagDeliveryStreamInput {
  readonly DeliveryStreamName: string;
  readonly Tags: [];
}

interface TagDeliveryStreamOutput {
}

interface UntagDeliveryStreamInput {
  readonly DeliveryStreamName: string;
  readonly TagKeys: [];
}

interface UntagDeliveryStreamOutput {
}

interface UpdateDestinationInput {
  readonly DeliveryStreamName: string;
  readonly CurrentDeliveryStreamVersionId: string;
  readonly DestinationId: string;
  readonly S3DestinationUpdate: S3DestinationUpdate;
  readonly ExtendedS3DestinationUpdate: ExtendedS3DestinationUpdate;
  readonly RedshiftDestinationUpdate: RedshiftDestinationUpdate;
  readonly ElasticsearchDestinationUpdate: ElasticsearchDestinationUpdate;
  readonly AmazonopensearchserviceDestinationUpdate: AmazonopensearchserviceDestinationUpdate;
  readonly SplunkDestinationUpdate: SplunkDestinationUpdate;
  readonly HttpEndpointDestinationUpdate: HttpEndpointDestinationUpdate;
}

interface UpdateDestinationOutput {
}

interface VpcConfiguration {
  readonly SubnetIds: [];
  readonly RoleARN: string;
  readonly SecurityGroupIds: [];
}

interface VpcConfigurationDescription {
  readonly SubnetIds: [];
  readonly RoleARN: string;
  readonly SecurityGroupIds: [];
  readonly VpcId: string;
}

