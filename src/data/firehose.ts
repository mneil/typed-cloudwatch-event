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

export interface AmazonopensearchserviceBufferingHints {
  readonly IntervalInSeconds?: number;
  readonly SizeInMBs?: number;
}

export interface AmazonopensearchserviceDestinationConfiguration {
  readonly RoleARN: string;
  readonly DomainARN?: string;
  readonly ClusterEndpoint?: string;
  readonly IndexName: string;
  readonly TypeName?: string;
  readonly IndexRotationPeriod?: string;
  readonly BufferingHints?: AmazonopensearchserviceBufferingHints;
  readonly RetryOptions?: AmazonopensearchserviceRetryOptions;
  readonly S3BackupMode?: string;
  readonly S3Configuration: S3DestinationConfiguration;
  readonly ProcessingConfiguration?: ProcessingConfiguration;
  readonly CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  readonly VpcConfiguration?: VpcConfiguration;
}

export interface AmazonopensearchserviceDestinationDescription {
  readonly RoleARN?: string;
  readonly DomainARN?: string;
  readonly ClusterEndpoint?: string;
  readonly IndexName?: string;
  readonly TypeName?: string;
  readonly IndexRotationPeriod?: string;
  readonly BufferingHints?: AmazonopensearchserviceBufferingHints;
  readonly RetryOptions?: AmazonopensearchserviceRetryOptions;
  readonly S3BackupMode?: string;
  readonly S3DestinationDescription?: S3DestinationDescription;
  readonly ProcessingConfiguration?: ProcessingConfiguration;
  readonly CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  readonly VpcConfigurationDescription?: VpcConfigurationDescription;
}

export interface AmazonopensearchserviceDestinationUpdate {
  readonly RoleARN?: string;
  readonly DomainARN?: string;
  readonly ClusterEndpoint?: string;
  readonly IndexName?: string;
  readonly TypeName?: string;
  readonly IndexRotationPeriod?: string;
  readonly BufferingHints?: AmazonopensearchserviceBufferingHints;
  readonly RetryOptions?: AmazonopensearchserviceRetryOptions;
  readonly S3Update?: S3DestinationUpdate;
  readonly ProcessingConfiguration?: ProcessingConfiguration;
  readonly CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
}

export interface AmazonopensearchserviceRetryOptions {
  readonly DurationInSeconds?: number;
}

export interface BufferingHints {
  readonly SizeInMBs?: number;
  readonly IntervalInSeconds?: number;
}

export interface CloudWatchLoggingOptions {
  readonly Enabled?: boolean;
  readonly LogGroupName?: string;
  readonly LogStreamName?: string;
}

export interface ConcurrentModificationException {
  readonly message?: string;
}

export interface CopyCommand {
  readonly DataTableName: string;
  readonly DataTableColumns?: string;
  readonly CopyOptions?: string;
}

export interface CreateDeliveryStreamInput {
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

export interface CreateDeliveryStreamOutput {
  readonly DeliveryStreamARN?: string;
}

export interface DataFormatConversionConfiguration {
  readonly SchemaConfiguration?: SchemaConfiguration;
  readonly InputFormatConfiguration?: InputFormatConfiguration;
  readonly OutputFormatConfiguration?: OutputFormatConfiguration;
  readonly Enabled?: boolean;
}

export interface DeleteDeliveryStreamInput {
  readonly DeliveryStreamName: string;
  readonly AllowForceDelete?: boolean;
}

export interface DeleteDeliveryStreamOutput {
}

export interface DeliveryStreamDescription {
  readonly DeliveryStreamName: string;
  readonly DeliveryStreamARN: string;
  readonly DeliveryStreamStatus: string;
  readonly FailureDescription?: FailureDescription;
  readonly DeliveryStreamEncryptionConfiguration?: DeliveryStreamEncryptionConfiguration;
  readonly DeliveryStreamType: string;
  readonly VersionId: string;
  readonly CreateTimestamp?: Date;
  readonly LastUpdateTimestamp?: Date;
  readonly Source?: SourceDescription;
  readonly Destinations: [];
  readonly HasMoreDestinations: boolean;
}

export interface DeliveryStreamEncryptionConfiguration {
  readonly KeyARN?: string;
  readonly KeyType?: string;
  readonly Status?: string;
  readonly FailureDescription?: FailureDescription;
}

export interface DeliveryStreamEncryptionConfigurationInput {
  readonly KeyARN?: string;
  readonly KeyType: string;
}

export interface DescribeDeliveryStreamInput {
  readonly DeliveryStreamName: string;
  readonly Limit?: number;
  readonly ExclusiveStartDestinationId?: string;
}

export interface DescribeDeliveryStreamOutput {
  readonly DeliveryStreamDescription: DeliveryStreamDescription;
}

export interface Deserializer {
  readonly OpenXJsonSerDe?: OpenXJsonSerDe;
  readonly HiveJsonSerDe?: HiveJsonSerDe;
}

export interface DestinationDescription {
  readonly DestinationId: string;
  readonly S3DestinationDescription?: S3DestinationDescription;
  readonly ExtendedS3DestinationDescription?: ExtendedS3DestinationDescription;
  readonly RedshiftDestinationDescription?: RedshiftDestinationDescription;
  readonly ElasticsearchDestinationDescription?: ElasticsearchDestinationDescription;
  readonly AmazonopensearchserviceDestinationDescription?: AmazonopensearchserviceDestinationDescription;
  readonly SplunkDestinationDescription?: SplunkDestinationDescription;
  readonly HttpEndpointDestinationDescription?: HttpEndpointDestinationDescription;
}

export interface DynamicPartitioningConfiguration {
  readonly RetryOptions?: RetryOptions;
  readonly Enabled?: boolean;
}

export interface ElasticsearchBufferingHints {
  readonly IntervalInSeconds?: number;
  readonly SizeInMBs?: number;
}

export interface ElasticsearchDestinationConfiguration {
  readonly RoleARN: string;
  readonly DomainARN?: string;
  readonly ClusterEndpoint?: string;
  readonly IndexName: string;
  readonly TypeName?: string;
  readonly IndexRotationPeriod?: string;
  readonly BufferingHints?: ElasticsearchBufferingHints;
  readonly RetryOptions?: ElasticsearchRetryOptions;
  readonly S3BackupMode?: string;
  readonly S3Configuration: S3DestinationConfiguration;
  readonly ProcessingConfiguration?: ProcessingConfiguration;
  readonly CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  readonly VpcConfiguration?: VpcConfiguration;
}

export interface ElasticsearchDestinationDescription {
  readonly RoleARN?: string;
  readonly DomainARN?: string;
  readonly ClusterEndpoint?: string;
  readonly IndexName?: string;
  readonly TypeName?: string;
  readonly IndexRotationPeriod?: string;
  readonly BufferingHints?: ElasticsearchBufferingHints;
  readonly RetryOptions?: ElasticsearchRetryOptions;
  readonly S3BackupMode?: string;
  readonly S3DestinationDescription?: S3DestinationDescription;
  readonly ProcessingConfiguration?: ProcessingConfiguration;
  readonly CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  readonly VpcConfigurationDescription?: VpcConfigurationDescription;
}

export interface ElasticsearchDestinationUpdate {
  readonly RoleARN?: string;
  readonly DomainARN?: string;
  readonly ClusterEndpoint?: string;
  readonly IndexName?: string;
  readonly TypeName?: string;
  readonly IndexRotationPeriod?: string;
  readonly BufferingHints?: ElasticsearchBufferingHints;
  readonly RetryOptions?: ElasticsearchRetryOptions;
  readonly S3Update?: S3DestinationUpdate;
  readonly ProcessingConfiguration?: ProcessingConfiguration;
  readonly CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
}

export interface ElasticsearchRetryOptions {
  readonly DurationInSeconds?: number;
}

export interface EncryptionConfiguration {
  readonly NoEncryptionConfig?: string;
  readonly KMSEncryptionConfig?: KMSEncryptionConfig;
}

export interface ExtendedS3DestinationConfiguration {
  readonly RoleARN: string;
  readonly BucketARN: string;
  readonly Prefix?: string;
  readonly ErrorOutputPrefix?: string;
  readonly BufferingHints?: BufferingHints;
  readonly CompressionFormat?: string;
  readonly EncryptionConfiguration?: EncryptionConfiguration;
  readonly CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  readonly ProcessingConfiguration?: ProcessingConfiguration;
  readonly S3BackupMode?: string;
  readonly S3BackupConfiguration?: S3DestinationConfiguration;
  readonly DataFormatConversionConfiguration?: DataFormatConversionConfiguration;
  readonly DynamicPartitioningConfiguration?: DynamicPartitioningConfiguration;
}

export interface ExtendedS3DestinationDescription {
  readonly RoleARN: string;
  readonly BucketARN: string;
  readonly Prefix?: string;
  readonly ErrorOutputPrefix?: string;
  readonly BufferingHints: BufferingHints;
  readonly CompressionFormat: string;
  readonly EncryptionConfiguration: EncryptionConfiguration;
  readonly CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  readonly ProcessingConfiguration?: ProcessingConfiguration;
  readonly S3BackupMode?: string;
  readonly S3BackupDescription?: S3DestinationDescription;
  readonly DataFormatConversionConfiguration?: DataFormatConversionConfiguration;
  readonly DynamicPartitioningConfiguration?: DynamicPartitioningConfiguration;
}

export interface ExtendedS3DestinationUpdate {
  readonly RoleARN?: string;
  readonly BucketARN?: string;
  readonly Prefix?: string;
  readonly ErrorOutputPrefix?: string;
  readonly BufferingHints?: BufferingHints;
  readonly CompressionFormat?: string;
  readonly EncryptionConfiguration?: EncryptionConfiguration;
  readonly CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  readonly ProcessingConfiguration?: ProcessingConfiguration;
  readonly S3BackupMode?: string;
  readonly S3BackupUpdate?: S3DestinationUpdate;
  readonly DataFormatConversionConfiguration?: DataFormatConversionConfiguration;
  readonly DynamicPartitioningConfiguration?: DynamicPartitioningConfiguration;
}

export interface FailureDescription {
  readonly Type: string;
  readonly Details: string;
}

export interface HiveJsonSerDe {
  readonly TimestampFormats?: [];
}

export interface HttpEndpointBufferingHints {
  readonly SizeInMBs?: number;
  readonly IntervalInSeconds?: number;
}

export interface HttpEndpointCommonAttribute {
  readonly AttributeName: string;
  readonly AttributeValue: string;
}

export interface HttpEndpointConfiguration {
  readonly Url: string;
  readonly Name?: string;
  readonly AccessKey?: string;
}

export interface HttpEndpointDescription {
  readonly Url?: string;
  readonly Name?: string;
}

export interface HttpEndpointDestinationConfiguration {
  readonly EndpointConfiguration: HttpEndpointConfiguration;
  readonly BufferingHints?: HttpEndpointBufferingHints;
  readonly CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  readonly RequestConfiguration?: HttpEndpointRequestConfiguration;
  readonly ProcessingConfiguration?: ProcessingConfiguration;
  readonly RoleARN?: string;
  readonly RetryOptions?: HttpEndpointRetryOptions;
  readonly S3BackupMode?: string;
  readonly S3Configuration: S3DestinationConfiguration;
}

export interface HttpEndpointDestinationDescription {
  readonly EndpointConfiguration?: HttpEndpointDescription;
  readonly BufferingHints?: HttpEndpointBufferingHints;
  readonly CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  readonly RequestConfiguration?: HttpEndpointRequestConfiguration;
  readonly ProcessingConfiguration?: ProcessingConfiguration;
  readonly RoleARN?: string;
  readonly RetryOptions?: HttpEndpointRetryOptions;
  readonly S3BackupMode?: string;
  readonly S3DestinationDescription?: S3DestinationDescription;
}

export interface HttpEndpointDestinationUpdate {
  readonly EndpointConfiguration?: HttpEndpointConfiguration;
  readonly BufferingHints?: HttpEndpointBufferingHints;
  readonly CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  readonly RequestConfiguration?: HttpEndpointRequestConfiguration;
  readonly ProcessingConfiguration?: ProcessingConfiguration;
  readonly RoleARN?: string;
  readonly RetryOptions?: HttpEndpointRetryOptions;
  readonly S3BackupMode?: string;
  readonly S3Update?: S3DestinationUpdate;
}

export interface HttpEndpointRequestConfiguration {
  readonly ContentEncoding?: string;
  readonly CommonAttributes?: [];
}

export interface HttpEndpointRetryOptions {
  readonly DurationInSeconds?: number;
}

export interface InputFormatConfiguration {
  readonly Deserializer?: Deserializer;
}

export interface InvalidArgumentException {
  readonly message?: string;
}

export interface InvalidKMSResourceException {
  readonly code?: string;
  readonly message?: string;
}

export interface KMSEncryptionConfig {
  readonly AWSKMSKeyARN: string;
}

export interface KinesisStreamSourceConfiguration {
  readonly KinesisStreamARN: string;
  readonly RoleARN: string;
}

export interface KinesisStreamSourceDescription {
  readonly KinesisStreamARN?: string;
  readonly RoleARN?: string;
  readonly DeliveryStartTimestamp?: Date;
}

export interface LimitExceededException {
  readonly message?: string;
}

export interface ListDeliveryStreamsInput {
  readonly Limit?: number;
  readonly DeliveryStreamType?: string;
  readonly ExclusiveStartDeliveryStreamName?: string;
}

export interface ListDeliveryStreamsOutput {
  readonly DeliveryStreamNames: [];
  readonly HasMoreDeliveryStreams: boolean;
}

export interface ListTagsForDeliveryStreamInput {
  readonly DeliveryStreamName: string;
  readonly ExclusiveStartTagKey?: string;
  readonly Limit?: number;
}

export interface ListTagsForDeliveryStreamOutput {
  readonly Tags: [];
  readonly HasMoreTags: boolean;
}

export interface OpenXJsonSerDe {
  readonly ConvertDotsInJsonKeysToUnderscores?: boolean;
  readonly CaseInsensitive?: boolean;
  readonly ColumnToJsonKeyMappings?: {[key: string]: any};
}

export interface OrcSerDe {
  readonly StripeSizeBytes?: number;
  readonly BlockSizeBytes?: number;
  readonly RowIndexStride?: number;
  readonly EnablePadding?: boolean;
  readonly PaddingTolerance?: unknown;
  readonly Compression?: string;
  readonly BloomFilterColumns?: [];
  readonly BloomFilterFalsePositiveProbability?: unknown;
  readonly DictionaryKeyThreshold?: unknown;
  readonly FormatVersion?: string;
}

export interface OutputFormatConfiguration {
  readonly Serializer?: Serializer;
}

export interface ParquetSerDe {
  readonly BlockSizeBytes?: number;
  readonly PageSizeBytes?: number;
  readonly Compression?: string;
  readonly EnableDictionaryCompression?: boolean;
  readonly MaxPaddingBytes?: number;
  readonly WriterVersion?: string;
}

export interface ProcessingConfiguration {
  readonly Enabled?: boolean;
  readonly Processors?: [];
}

export interface Processor {
  readonly Type: string;
  readonly Parameters?: [];
}

export interface ProcessorParameter {
  readonly ParameterName: string;
  readonly ParameterValue: string;
}

export interface PutRecordBatchInput {
  readonly DeliveryStreamName: string;
  readonly Records: [];
}

export interface PutRecordBatchOutput {
  readonly FailedPutCount: number;
  readonly Encrypted?: boolean;
  readonly RequestResponses: [];
}

export interface PutRecordBatchResponseEntry {
  readonly RecordId?: string;
  readonly ErrorCode?: string;
  readonly ErrorMessage?: string;
}

export interface PutRecordInput {
  readonly DeliveryStreamName: string;
  readonly Record: Record;
}

export interface PutRecordOutput {
  readonly RecordId: string;
  readonly Encrypted?: boolean;
}

export interface Record {
  readonly Data: unknown;
}

export interface RedshiftDestinationConfiguration {
  readonly RoleARN: string;
  readonly ClusterJDBCURL: string;
  readonly CopyCommand: CopyCommand;
  readonly Username: string;
  readonly Password: string;
  readonly RetryOptions?: RedshiftRetryOptions;
  readonly S3Configuration: S3DestinationConfiguration;
  readonly ProcessingConfiguration?: ProcessingConfiguration;
  readonly S3BackupMode?: string;
  readonly S3BackupConfiguration?: S3DestinationConfiguration;
  readonly CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
}

export interface RedshiftDestinationDescription {
  readonly RoleARN: string;
  readonly ClusterJDBCURL: string;
  readonly CopyCommand: CopyCommand;
  readonly Username: string;
  readonly RetryOptions?: RedshiftRetryOptions;
  readonly S3DestinationDescription: S3DestinationDescription;
  readonly ProcessingConfiguration?: ProcessingConfiguration;
  readonly S3BackupMode?: string;
  readonly S3BackupDescription?: S3DestinationDescription;
  readonly CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
}

export interface RedshiftDestinationUpdate {
  readonly RoleARN?: string;
  readonly ClusterJDBCURL?: string;
  readonly CopyCommand?: CopyCommand;
  readonly Username?: string;
  readonly Password?: string;
  readonly RetryOptions?: RedshiftRetryOptions;
  readonly S3Update?: S3DestinationUpdate;
  readonly ProcessingConfiguration?: ProcessingConfiguration;
  readonly S3BackupMode?: string;
  readonly S3BackupUpdate?: S3DestinationUpdate;
  readonly CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
}

export interface RedshiftRetryOptions {
  readonly DurationInSeconds?: number;
}

export interface ResourceInUseException {
  readonly message?: string;
}

export interface ResourceNotFoundException {
  readonly message?: string;
}

export interface RetryOptions {
  readonly DurationInSeconds?: number;
}

export interface S3DestinationConfiguration {
  readonly RoleARN: string;
  readonly BucketARN: string;
  readonly Prefix?: string;
  readonly ErrorOutputPrefix?: string;
  readonly BufferingHints?: BufferingHints;
  readonly CompressionFormat?: string;
  readonly EncryptionConfiguration?: EncryptionConfiguration;
  readonly CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
}

export interface S3DestinationDescription {
  readonly RoleARN: string;
  readonly BucketARN: string;
  readonly Prefix?: string;
  readonly ErrorOutputPrefix?: string;
  readonly BufferingHints: BufferingHints;
  readonly CompressionFormat: string;
  readonly EncryptionConfiguration: EncryptionConfiguration;
  readonly CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
}

export interface S3DestinationUpdate {
  readonly RoleARN?: string;
  readonly BucketARN?: string;
  readonly Prefix?: string;
  readonly ErrorOutputPrefix?: string;
  readonly BufferingHints?: BufferingHints;
  readonly CompressionFormat?: string;
  readonly EncryptionConfiguration?: EncryptionConfiguration;
  readonly CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
}

export interface SchemaConfiguration {
  readonly RoleARN?: string;
  readonly CatalogId?: string;
  readonly DatabaseName?: string;
  readonly TableName?: string;
  readonly Region?: string;
  readonly VersionId?: string;
}

export interface Serializer {
  readonly ParquetSerDe?: ParquetSerDe;
  readonly OrcSerDe?: OrcSerDe;
}

export interface ServiceUnavailableException {
  readonly message?: string;
}

export interface SourceDescription {
  readonly KinesisStreamSourceDescription?: KinesisStreamSourceDescription;
}

export interface SplunkDestinationConfiguration {
  readonly HECEndpoint: string;
  readonly HECEndpointType: string;
  readonly HECToken: string;
  readonly HECAcknowledgmentTimeoutInSeconds?: number;
  readonly RetryOptions?: SplunkRetryOptions;
  readonly S3BackupMode?: string;
  readonly S3Configuration: S3DestinationConfiguration;
  readonly ProcessingConfiguration?: ProcessingConfiguration;
  readonly CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
}

export interface SplunkDestinationDescription {
  readonly HECEndpoint?: string;
  readonly HECEndpointType?: string;
  readonly HECToken?: string;
  readonly HECAcknowledgmentTimeoutInSeconds?: number;
  readonly RetryOptions?: SplunkRetryOptions;
  readonly S3BackupMode?: string;
  readonly S3DestinationDescription?: S3DestinationDescription;
  readonly ProcessingConfiguration?: ProcessingConfiguration;
  readonly CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
}

export interface SplunkDestinationUpdate {
  readonly HECEndpoint?: string;
  readonly HECEndpointType?: string;
  readonly HECToken?: string;
  readonly HECAcknowledgmentTimeoutInSeconds?: number;
  readonly RetryOptions?: SplunkRetryOptions;
  readonly S3BackupMode?: string;
  readonly S3Update?: S3DestinationUpdate;
  readonly ProcessingConfiguration?: ProcessingConfiguration;
  readonly CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
}

export interface SplunkRetryOptions {
  readonly DurationInSeconds?: number;
}

export interface StartDeliveryStreamEncryptionInput {
  readonly DeliveryStreamName: string;
  readonly DeliveryStreamEncryptionConfigurationInput?: DeliveryStreamEncryptionConfigurationInput;
}

export interface StartDeliveryStreamEncryptionOutput {
}

export interface StopDeliveryStreamEncryptionInput {
  readonly DeliveryStreamName: string;
}

export interface StopDeliveryStreamEncryptionOutput {
}

export interface Tag {
  readonly Key: string;
  readonly Value?: string;
}

export interface TagDeliveryStreamInput {
  readonly DeliveryStreamName: string;
  readonly Tags: [];
}

export interface TagDeliveryStreamOutput {
}

export interface UntagDeliveryStreamInput {
  readonly DeliveryStreamName: string;
  readonly TagKeys: [];
}

export interface UntagDeliveryStreamOutput {
}

export interface UpdateDestinationInput {
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

export interface UpdateDestinationOutput {
}

export interface VpcConfiguration {
  readonly SubnetIds: [];
  readonly RoleARN: string;
  readonly SecurityGroupIds: [];
}

export interface VpcConfigurationDescription {
  readonly SubnetIds: [];
  readonly RoleARN: string;
  readonly SecurityGroupIds: [];
  readonly VpcId: string;
}


