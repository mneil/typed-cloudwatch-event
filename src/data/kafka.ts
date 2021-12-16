/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface BatchAssociateScramSecret {
  readonly ClusterArn: string;
  readonly SecretArnList: [];
}
export interface CreateCluster {
  readonly BrokerNodeGroupInfo: BrokerNodeGroupInfo;
  readonly ClientAuthentication: ClientAuthentication;
  readonly ClusterName: string;
  readonly ConfigurationInfo: ConfigurationInfo;
  readonly EncryptionInfo: EncryptionInfo;
  readonly EnhancedMonitoring: string;
  readonly OpenMonitoring: OpenMonitoringInfo;
  readonly KafkaVersion: string;
  readonly LoggingInfo: LoggingInfo;
  readonly NumberOfBrokerNodes: number;
  readonly Tags: {[key: string]: any};
}
export interface CreateClusterV2 {
  readonly ClusterName: string;
  readonly Tags: {[key: string]: any};
  readonly Provisioned: ProvisionedRequest;
  readonly Serverless: ServerlessRequest;
}
export interface CreateConfiguration {
  readonly Description: string;
  readonly KafkaVersions: [];
  readonly Name: string;
  readonly ServerProperties: unknown;
}
export interface DeleteCluster {
  readonly ClusterArn: string;
  readonly CurrentVersion: string;
}
export interface DeleteConfiguration {
  readonly Arn: string;
}
export interface DescribeCluster {
  readonly ClusterArn: string;
}
export interface DescribeClusterV2 {
  readonly ClusterArn: string;
}
export interface DescribeClusterOperation {
  readonly ClusterOperationArn: string;
}
export interface DescribeConfiguration {
  readonly Arn: string;
}
export interface DescribeConfigurationRevision {
  readonly Arn: string;
  readonly Revision: number;
}
export interface BatchDisassociateScramSecret {
  readonly ClusterArn: string;
  readonly SecretArnList: [];
}
export interface GetBootstrapBrokers {
  readonly ClusterArn: string;
}
export interface GetCompatibleKafkaVersions {
  readonly ClusterArn: string;
}
export interface ListClusterOperations {
  readonly ClusterArn: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}
export interface ListClusters {
  readonly ClusterNameFilter: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}
export interface ListClustersV2 {
  readonly ClusterNameFilter: string;
  readonly ClusterTypeFilter: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}
export interface ListConfigurationRevisions {
  readonly Arn: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}
export interface ListConfigurations {
  readonly MaxResults: number;
  readonly NextToken: string;
}
export interface ListKafkaVersions {
  readonly MaxResults: number;
  readonly NextToken: string;
}
export interface ListNodes {
  readonly ClusterArn: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}
export interface ListScramSecrets {
  readonly ClusterArn: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}
export interface ListTagsForResource {
  readonly ResourceArn: string;
}
export interface RebootBroker {
  readonly BrokerIds: [];
  readonly ClusterArn: string;
}
export interface TagResource {
  readonly ResourceArn: string;
  readonly Tags: {[key: string]: any};
}
export interface UntagResource {
  readonly ResourceArn: string;
  readonly TagKeys: [];
}
export interface UpdateBrokerCount {
  readonly ClusterArn: string;
  readonly CurrentVersion: string;
  readonly TargetNumberOfBrokerNodes: number;
}
export interface UpdateBrokerType {
  readonly ClusterArn: string;
  readonly CurrentVersion: string;
  readonly TargetInstanceType: string;
}
export interface UpdateBrokerStorage {
  readonly ClusterArn: string;
  readonly CurrentVersion: string;
  readonly TargetBrokerEBSVolumeInfo: [];
}
export interface UpdateConfiguration {
  readonly Arn: string;
  readonly Description: string;
  readonly ServerProperties: unknown;
}
export interface UpdateConnectivity {
  readonly ClusterArn: string;
  readonly ConnectivityInfo: ConnectivityInfo;
  readonly CurrentVersion: string;
}
export interface UpdateClusterConfiguration {
  readonly ClusterArn: string;
  readonly ConfigurationInfo: ConfigurationInfo;
  readonly CurrentVersion: string;
}
export interface UpdateClusterKafkaVersion {
  readonly ClusterArn: string;
  readonly ConfigurationInfo: ConfigurationInfo;
  readonly CurrentVersion: string;
  readonly TargetKafkaVersion: string;
}
export interface UpdateMonitoring {
  readonly ClusterArn: string;
  readonly CurrentVersion: string;
  readonly EnhancedMonitoring: string;
  readonly OpenMonitoring: OpenMonitoringInfo;
  readonly LoggingInfo: LoggingInfo;
}
export interface UpdateSecurity {
  readonly ClientAuthentication: ClientAuthentication;
  readonly ClusterArn: string;
  readonly CurrentVersion: string;
  readonly EncryptionInfo: EncryptionInfo;
}



interface BatchAssociateScramSecretRequest {
  readonly ClusterArn: string;
  readonly SecretArnList: [];
}

interface BatchAssociateScramSecretResponse {
  readonly ClusterArn: string;
  readonly UnprocessedScramSecrets: [];
}

interface BadRequestException {
  readonly InvalidParameter: string;
  readonly Message: string;
}

interface BrokerEBSVolumeInfo {
  readonly KafkaBrokerNodeId: string;
  readonly VolumeSizeGB: number;
}

interface BrokerLogs {
  readonly CloudWatchLogs: CloudWatchLogs;
  readonly Firehose: Firehose;
  readonly S3: S3;
}

interface BrokerNodeGroupInfo {
  readonly BrokerAZDistribution: string;
  readonly ClientSubnets: [];
  readonly InstanceType: string;
  readonly SecurityGroups: [];
  readonly StorageInfo: StorageInfo;
  readonly ConnectivityInfo: ConnectivityInfo;
}

interface BrokerNodeInfo {
  readonly AttachedENIId: string;
  readonly BrokerId: unknown;
  readonly ClientSubnet: string;
  readonly ClientVpcIpAddress: string;
  readonly CurrentBrokerSoftwareInfo: BrokerSoftwareInfo;
  readonly Endpoints: [];
}

interface BrokerSoftwareInfo {
  readonly ConfigurationArn: string;
  readonly ConfigurationRevision: number;
  readonly KafkaVersion: string;
}

interface ClientAuthentication {
  readonly Sasl: Sasl;
  readonly Tls: Tls;
  readonly Unauthenticated: Unauthenticated;
}

interface ServerlessClientAuthentication {
  readonly Sasl: ServerlessSasl;
}

interface CloudWatchLogs {
  readonly Enabled: boolean;
  readonly LogGroup: string;
}

interface ClusterInfo {
  readonly ActiveOperationArn: string;
  readonly BrokerNodeGroupInfo: BrokerNodeGroupInfo;
  readonly ClientAuthentication: ClientAuthentication;
  readonly ClusterArn: string;
  readonly ClusterName: string;
  readonly CreationTime: Date;
  readonly CurrentBrokerSoftwareInfo: BrokerSoftwareInfo;
  readonly CurrentVersion: string;
  readonly EncryptionInfo: EncryptionInfo;
  readonly EnhancedMonitoring: string;
  readonly OpenMonitoring: OpenMonitoring;
  readonly LoggingInfo: LoggingInfo;
  readonly NumberOfBrokerNodes: number;
  readonly State: string;
  readonly StateInfo: StateInfo;
  readonly Tags: {[key: string]: any};
  readonly ZookeeperConnectString: string;
  readonly ZookeeperConnectStringTls: string;
}

interface Cluster {
  readonly ActiveOperationArn: string;
  readonly ClusterType: string;
  readonly ClusterArn: string;
  readonly ClusterName: string;
  readonly CreationTime: Date;
  readonly CurrentVersion: string;
  readonly State: string;
  readonly StateInfo: StateInfo;
  readonly Tags: {[key: string]: any};
  readonly Provisioned: Provisioned;
  readonly Serverless: Serverless;
}

interface ClusterOperationInfo {
  readonly ClientRequestId: string;
  readonly ClusterArn: string;
  readonly CreationTime: Date;
  readonly EndTime: Date;
  readonly ErrorInfo: ErrorInfo;
  readonly OperationArn: string;
  readonly OperationState: string;
  readonly OperationSteps: [];
  readonly OperationType: string;
  readonly SourceClusterInfo: MutableClusterInfo;
  readonly TargetClusterInfo: MutableClusterInfo;
}

interface ClusterOperationStep {
  readonly StepInfo: ClusterOperationStepInfo;
  readonly StepName: string;
}

interface ClusterOperationStepInfo {
  readonly StepStatus: string;
}

interface ProvisionedRequest {
  readonly BrokerNodeGroupInfo: BrokerNodeGroupInfo;
  readonly ClientAuthentication: ClientAuthentication;
  readonly ConfigurationInfo: ConfigurationInfo;
  readonly EncryptionInfo: EncryptionInfo;
  readonly EnhancedMonitoring: string;
  readonly OpenMonitoring: OpenMonitoringInfo;
  readonly KafkaVersion: string;
  readonly LoggingInfo: LoggingInfo;
  readonly NumberOfBrokerNodes: number;
}

interface Provisioned {
  readonly BrokerNodeGroupInfo: BrokerNodeGroupInfo;
  readonly CurrentBrokerSoftwareInfo: BrokerSoftwareInfo;
  readonly ClientAuthentication: ClientAuthentication;
  readonly EncryptionInfo: EncryptionInfo;
  readonly EnhancedMonitoring: string;
  readonly OpenMonitoring: OpenMonitoringInfo;
  readonly LoggingInfo: LoggingInfo;
  readonly NumberOfBrokerNodes: number;
  readonly ZookeeperConnectString: string;
  readonly ZookeeperConnectStringTls: string;
}

interface VpcConfig {
  readonly SubnetIds: [];
  readonly SecurityGroupIds: [];
}

interface ServerlessRequest {
  readonly VpcConfigs: [];
  readonly ClientAuthentication: ServerlessClientAuthentication;
}

interface Serverless {
  readonly VpcConfigs: [];
  readonly ClientAuthentication: ServerlessClientAuthentication;
}

interface CompatibleKafkaVersion {
  readonly SourceVersion: string;
  readonly TargetVersions: [];
}

interface Configuration {
  readonly Arn: string;
  readonly CreationTime: Date;
  readonly Description: string;
  readonly KafkaVersions: [];
  readonly LatestRevision: ConfigurationRevision;
  readonly Name: string;
  readonly State: string;
}

interface ConfigurationInfo {
  readonly Arn: string;
  readonly Revision: number;
}

interface ConfigurationRevision {
  readonly CreationTime: Date;
  readonly Description: string;
  readonly Revision: number;
}

interface ConflictException {
  readonly InvalidParameter: string;
  readonly Message: string;
}

interface ConnectivityInfo {
  readonly PublicAccess: PublicAccess;
}

interface CreateClusterV2Request {
  readonly ClusterName: string;
  readonly Tags: {[key: string]: any};
  readonly Provisioned: ProvisionedRequest;
  readonly Serverless: ServerlessRequest;
}

interface CreateClusterRequest {
  readonly BrokerNodeGroupInfo: BrokerNodeGroupInfo;
  readonly ClientAuthentication: ClientAuthentication;
  readonly ClusterName: string;
  readonly ConfigurationInfo: ConfigurationInfo;
  readonly EncryptionInfo: EncryptionInfo;
  readonly EnhancedMonitoring: string;
  readonly OpenMonitoring: OpenMonitoringInfo;
  readonly KafkaVersion: string;
  readonly LoggingInfo: LoggingInfo;
  readonly NumberOfBrokerNodes: number;
  readonly Tags: {[key: string]: any};
}

interface CreateClusterResponse {
  readonly ClusterArn: string;
  readonly ClusterName: string;
  readonly State: string;
}

interface CreateClusterV2Response {
  readonly ClusterArn: string;
  readonly ClusterName: string;
  readonly State: string;
  readonly ClusterType: string;
}

interface CreateConfigurationRequest {
  readonly Description: string;
  readonly KafkaVersions: [];
  readonly Name: string;
  readonly ServerProperties: unknown;
}

interface CreateConfigurationResponse {
  readonly Arn: string;
  readonly CreationTime: Date;
  readonly LatestRevision: ConfigurationRevision;
  readonly Name: string;
  readonly State: string;
}

interface DeleteClusterRequest {
  readonly ClusterArn: string;
  readonly CurrentVersion: string;
}

interface DeleteClusterResponse {
  readonly ClusterArn: string;
  readonly State: string;
}

interface DeleteConfigurationRequest {
  readonly Arn: string;
}

interface DeleteConfigurationResponse {
  readonly Arn: string;
  readonly State: string;
}

interface DescribeClusterOperationRequest {
  readonly ClusterOperationArn: string;
}

interface DescribeClusterOperationResponse {
  readonly ClusterOperationInfo: ClusterOperationInfo;
}

interface DescribeClusterRequest {
  readonly ClusterArn: string;
}

interface DescribeClusterV2Request {
  readonly ClusterArn: string;
}

interface DescribeClusterResponse {
  readonly ClusterInfo: ClusterInfo;
}

interface DescribeClusterV2Response {
  readonly ClusterInfo: Cluster;
}

interface DescribeConfigurationRequest {
  readonly Arn: string;
}

interface DescribeConfigurationResponse {
  readonly Arn: string;
  readonly CreationTime: Date;
  readonly Description: string;
  readonly KafkaVersions: [];
  readonly LatestRevision: ConfigurationRevision;
  readonly Name: string;
  readonly State: string;
}

interface DescribeConfigurationRevisionRequest {
  readonly Arn: string;
  readonly Revision: number;
}

interface DescribeConfigurationRevisionResponse {
  readonly Arn: string;
  readonly CreationTime: Date;
  readonly Description: string;
  readonly Revision: number;
  readonly ServerProperties: unknown;
}

interface BatchDisassociateScramSecretRequest {
  readonly ClusterArn: string;
  readonly SecretArnList: [];
}

interface BatchDisassociateScramSecretResponse {
  readonly ClusterArn: string;
  readonly UnprocessedScramSecrets: [];
}

interface EBSStorageInfo {
  readonly VolumeSize: number;
}

interface EncryptionAtRest {
  readonly DataVolumeKMSKeyId: string;
}

interface EncryptionInTransit {
  readonly ClientBroker: string;
  readonly InCluster: boolean;
}

interface EncryptionInfo {
  readonly EncryptionAtRest: EncryptionAtRest;
  readonly EncryptionInTransit: EncryptionInTransit;
}

interface Error {
  readonly InvalidParameter: string;
  readonly Message: string;
}

interface ErrorInfo {
  readonly ErrorCode: string;
  readonly ErrorString: string;
}

interface Firehose {
  readonly DeliveryStream: string;
  readonly Enabled: boolean;
}

interface ForbiddenException {
  readonly InvalidParameter: string;
  readonly Message: string;
}

interface GetBootstrapBrokersRequest {
  readonly ClusterArn: string;
}

interface GetBootstrapBrokersResponse {
  readonly BootstrapBrokerString: string;
  readonly BootstrapBrokerStringTls: string;
  readonly BootstrapBrokerStringSaslScram: string;
  readonly BootstrapBrokerStringSaslIam: string;
  readonly BootstrapBrokerStringPublicTls: string;
  readonly BootstrapBrokerStringPublicSaslScram: string;
  readonly BootstrapBrokerStringPublicSaslIam: string;
}

interface GetCompatibleKafkaVersionsRequest {
  readonly ClusterArn: string;
}

interface GetCompatibleKafkaVersionsResponse {
  readonly CompatibleKafkaVersions: [];
}

interface InternalServerErrorException {
  readonly InvalidParameter: string;
  readonly Message: string;
}

interface KafkaVersion {
  readonly Version: string;
  readonly Status: string;
}

interface ListClusterOperationsRequest {
  readonly ClusterArn: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface ListClusterOperationsResponse {
  readonly ClusterOperationInfoList: [];
  readonly NextToken: string;
}

interface ListClustersRequest {
  readonly ClusterNameFilter: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface ListClustersV2Request {
  readonly ClusterNameFilter: string;
  readonly ClusterTypeFilter: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface ListClustersResponse {
  readonly ClusterInfoList: [];
  readonly NextToken: string;
}

interface ListClustersV2Response {
  readonly ClusterInfoList: [];
  readonly NextToken: string;
}

interface ListConfigurationRevisionsRequest {
  readonly Arn: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface ListConfigurationRevisionsResponse {
  readonly NextToken: string;
  readonly Revisions: [];
}

interface ListConfigurationsRequest {
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface ListConfigurationsResponse {
  readonly Configurations: [];
  readonly NextToken: string;
}

interface ListKafkaVersionsRequest {
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface ListKafkaVersionsResponse {
  readonly KafkaVersions: [];
  readonly NextToken: string;
}

interface ListNodesRequest {
  readonly ClusterArn: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface ListNodesResponse {
  readonly NextToken: string;
  readonly NodeInfoList: [];
}

interface ListScramSecretsRequest {
  readonly ClusterArn: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface ListScramSecretsResponse {
  readonly NextToken: string;
  readonly SecretArnList: [];
}

interface ListTagsForResourceRequest {
  readonly ResourceArn: string;
}

interface ListTagsForResourceResponse {
  readonly Tags: {[key: string]: any};
}

interface LoggingInfo {
  readonly BrokerLogs: BrokerLogs;
}

interface MutableClusterInfo {
  readonly BrokerEBSVolumeInfo: [];
  readonly ConfigurationInfo: ConfigurationInfo;
  readonly NumberOfBrokerNodes: number;
  readonly EnhancedMonitoring: string;
  readonly OpenMonitoring: OpenMonitoring;
  readonly KafkaVersion: string;
  readonly LoggingInfo: LoggingInfo;
  readonly InstanceType: string;
  readonly ClientAuthentication: ClientAuthentication;
  readonly EncryptionInfo: EncryptionInfo;
  readonly ConnectivityInfo: ConnectivityInfo;
}

interface NodeExporter {
  readonly EnabledInBroker: boolean;
}

interface NodeExporterInfo {
  readonly EnabledInBroker: boolean;
}

interface JmxExporter {
  readonly EnabledInBroker: boolean;
}

interface JmxExporterInfo {
  readonly EnabledInBroker: boolean;
}

interface OpenMonitoring {
  readonly Prometheus: Prometheus;
}

interface OpenMonitoringInfo {
  readonly Prometheus: PrometheusInfo;
}

interface Prometheus {
  readonly JmxExporter: JmxExporter;
  readonly NodeExporter: NodeExporter;
}

interface PrometheusInfo {
  readonly JmxExporter: JmxExporterInfo;
  readonly NodeExporter: NodeExporterInfo;
}

interface PublicAccess {
  readonly Type: string;
}

interface RebootBrokerRequest {
  readonly BrokerIds: [];
  readonly ClusterArn: string;
}

interface RebootBrokerResponse {
  readonly ClusterArn: string;
  readonly ClusterOperationArn: string;
}

interface S3 {
  readonly Bucket: string;
  readonly Enabled: boolean;
  readonly Prefix: string;
}

interface ServerlessSasl {
  readonly Iam: Iam;
}

interface Sasl {
  readonly Scram: Scram;
  readonly Iam: Iam;
}

interface Scram {
  readonly Enabled: boolean;
}

interface Iam {
  readonly Enabled: boolean;
}

interface NodeInfo {
  readonly AddedToClusterTime: string;
  readonly BrokerNodeInfo: BrokerNodeInfo;
  readonly InstanceType: string;
  readonly NodeARN: string;
  readonly NodeType: string;
  readonly ZookeeperNodeInfo: ZookeeperNodeInfo;
}

interface NotFoundException {
  readonly InvalidParameter: string;
  readonly Message: string;
}

interface ServiceUnavailableException {
  readonly InvalidParameter: string;
  readonly Message: string;
}

interface StateInfo {
  readonly Code: string;
  readonly Message: string;
}

interface StorageInfo {
  readonly EbsStorageInfo: EBSStorageInfo;
}

interface TagResourceRequest {
  readonly ResourceArn: string;
  readonly Tags: {[key: string]: any};
}

interface Tls {
  readonly CertificateAuthorityArnList: [];
  readonly Enabled: boolean;
}

interface TooManyRequestsException {
  readonly InvalidParameter: string;
  readonly Message: string;
}

interface Unauthenticated {
  readonly Enabled: boolean;
}

interface UnauthorizedException {
  readonly InvalidParameter: string;
  readonly Message: string;
}

interface UnprocessedScramSecret {
  readonly ErrorCode: string;
  readonly ErrorMessage: string;
  readonly SecretArn: string;
}

interface UntagResourceRequest {
  readonly ResourceArn: string;
  readonly TagKeys: [];
}

interface UpdateBrokerCountRequest {
  readonly ClusterArn: string;
  readonly CurrentVersion: string;
  readonly TargetNumberOfBrokerNodes: number;
}

interface UpdateBrokerCountResponse {
  readonly ClusterArn: string;
  readonly ClusterOperationArn: string;
}

interface UpdateBrokerTypeRequest {
  readonly ClusterArn: string;
  readonly CurrentVersion: string;
  readonly TargetInstanceType: string;
}

interface UpdateBrokerTypeResponse {
  readonly ClusterArn: string;
  readonly ClusterOperationArn: string;
}

interface UpdateBrokerStorageRequest {
  readonly ClusterArn: string;
  readonly CurrentVersion: string;
  readonly TargetBrokerEBSVolumeInfo: [];
}

interface UpdateBrokerStorageResponse {
  readonly ClusterArn: string;
  readonly ClusterOperationArn: string;
}

interface UpdateClusterConfigurationRequest {
  readonly ClusterArn: string;
  readonly ConfigurationInfo: ConfigurationInfo;
  readonly CurrentVersion: string;
}

interface UpdateClusterConfigurationResponse {
  readonly ClusterArn: string;
  readonly ClusterOperationArn: string;
}

interface UpdateClusterKafkaVersionRequest {
  readonly ClusterArn: string;
  readonly ConfigurationInfo: ConfigurationInfo;
  readonly CurrentVersion: string;
  readonly TargetKafkaVersion: string;
}

interface UpdateClusterKafkaVersionResponse {
  readonly ClusterArn: string;
  readonly ClusterOperationArn: string;
}

interface UpdateMonitoringRequest {
  readonly ClusterArn: string;
  readonly CurrentVersion: string;
  readonly EnhancedMonitoring: string;
  readonly OpenMonitoring: OpenMonitoringInfo;
  readonly LoggingInfo: LoggingInfo;
}

interface UpdateMonitoringResponse {
  readonly ClusterArn: string;
  readonly ClusterOperationArn: string;
}

interface UpdateSecurityRequest {
  readonly ClientAuthentication: ClientAuthentication;
  readonly ClusterArn: string;
  readonly CurrentVersion: string;
  readonly EncryptionInfo: EncryptionInfo;
}

interface UpdateSecurityResponse {
  readonly ClusterArn: string;
  readonly ClusterOperationArn: string;
}

interface UpdateConfigurationRequest {
  readonly Arn: string;
  readonly Description: string;
  readonly ServerProperties: unknown;
}

interface UpdateConfigurationResponse {
  readonly Arn: string;
  readonly LatestRevision: ConfigurationRevision;
}

interface UpdateConnectivityRequest {
  readonly ClusterArn: string;
  readonly ConnectivityInfo: ConnectivityInfo;
  readonly CurrentVersion: string;
}

interface UpdateConnectivityResponse {
  readonly ClusterArn: string;
  readonly ClusterOperationArn: string;
}

interface ZookeeperNodeInfo {
  readonly AttachedENIId: string;
  readonly ClientVpcIpAddress: string;
  readonly Endpoints: [];
  readonly ZookeeperId: unknown;
  readonly ZookeeperVersion: string;
}

