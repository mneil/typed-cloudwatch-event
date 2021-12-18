/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface CreateApplicationInstance {
  readonly Name?: string;
  readonly Description?: string;
  readonly ManifestPayload: ManifestPayload;
  readonly ManifestOverridesPayload?: ManifestOverridesPayload;
  readonly ApplicationInstanceIdToReplace?: string;
  readonly RuntimeRoleArn?: string;
  readonly DefaultRuntimeContextDevice: string;
  readonly Tags?: {[key: string]: any};
}

export interface CreateJobForDevices {
  readonly DeviceIds: [];
  readonly DeviceJobConfig: DeviceJobConfig;
  readonly JobType: string;
}

export interface CreateNodeFromTemplateJob {
  readonly TemplateType: string;
  readonly OutputPackageName: string;
  readonly OutputPackageVersion: string;
  readonly NodeName: string;
  readonly NodeDescription?: string;
  readonly TemplateParameters: {[key: string]: any};
  readonly JobTags?: [];
}

export interface CreatePackage {
  readonly PackageName: string;
  readonly Tags?: {[key: string]: any};
}

export interface CreatePackageImportJob {
  readonly JobType: string;
  readonly InputConfig: PackageImportJobInputConfig;
  readonly OutputConfig: PackageImportJobOutputConfig;
  readonly ClientToken: string;
  readonly JobTags?: [];
}

export interface DeleteDevice {
  readonly DeviceId: string;
}

export interface DeletePackage {
  readonly PackageId: string;
  readonly ForceDelete?: boolean;
}

export interface DeregisterPackageVersion {
  readonly OwnerAccount?: string;
  readonly PackageId: string;
  readonly PackageVersion: string;
  readonly PatchVersion: string;
  readonly UpdatedLatestPatchVersion?: string;
}

export interface DescribeApplicationInstance {
  readonly ApplicationInstanceId: string;
}

export interface DescribeApplicationInstanceDetails {
  readonly ApplicationInstanceId: string;
}

export interface DescribeDevice {
  readonly DeviceId: string;
}

export interface DescribeDeviceJob {
  readonly JobId: string;
}

export interface DescribeNode {
  readonly NodeId: string;
  readonly OwnerAccount?: string;
}

export interface DescribeNodeFromTemplateJob {
  readonly JobId: string;
}

export interface DescribePackage {
  readonly PackageId: string;
}

export interface DescribePackageImportJob {
  readonly JobId: string;
}

export interface DescribePackageVersion {
  readonly OwnerAccount?: string;
  readonly PackageId: string;
  readonly PackageVersion: string;
  readonly PatchVersion?: string;
}

export interface ListApplicationInstanceDependencies {
  readonly ApplicationInstanceId: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface ListApplicationInstanceNodeInstances {
  readonly ApplicationInstanceId: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface ListApplicationInstances {
  readonly DeviceId?: string;
  readonly StatusFilter?: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface ListDevices {
  readonly NextToken?: string;
  readonly MaxResults?: number;
}

export interface ListDevicesJobs {
  readonly DeviceId?: string;
  readonly NextToken?: string;
  readonly MaxResults?: number;
}

export interface ListNodeFromTemplateJobs {
  readonly NextToken?: string;
  readonly MaxResults?: number;
}

export interface ListNodes {
  readonly Category?: string;
  readonly OwnerAccount?: string;
  readonly PackageName?: string;
  readonly PackageVersion?: string;
  readonly PatchVersion?: string;
  readonly NextToken?: string;
  readonly MaxResults?: number;
}

export interface ListPackageImportJobs {
  readonly NextToken?: string;
  readonly MaxResults?: number;
}

export interface ListPackages {
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface ListTagsForResource {
  readonly ResourceArn: string;
}

export interface ProvisionDevice {
  readonly Name: string;
  readonly Description?: string;
  readonly Tags?: {[key: string]: any};
  readonly NetworkingConfiguration?: NetworkPayload;
}

export interface RegisterPackageVersion {
  readonly OwnerAccount?: string;
  readonly PackageId: string;
  readonly PackageVersion: string;
  readonly PatchVersion: string;
  readonly MarkLatest?: boolean;
}

export interface RemoveApplicationInstance {
  readonly ApplicationInstanceId: string;
}

export interface TagResource {
  readonly ResourceArn: string;
  readonly Tags: {[key: string]: any};
}

export interface UntagResource {
  readonly ResourceArn: string;
  readonly TagKeys: [];
}

export interface UpdateDeviceMetadata {
  readonly DeviceId: string;
  readonly Description?: string;
}

export interface AccessDeniedException {
  readonly Message: string;
}

export interface ApplicationInstance {
  readonly Name?: string;
  readonly ApplicationInstanceId?: string;
  readonly DefaultRuntimeContextDevice?: string;
  readonly DefaultRuntimeContextDeviceName?: string;
  readonly Description?: string;
  readonly Status?: string;
  readonly HealthStatus?: string;
  readonly StatusDescription?: string;
  readonly CreatedTime?: Date;
  readonly Arn?: string;
  readonly Tags?: {[key: string]: any};
}

export interface ConflictException {
  readonly Message: string;
  readonly ResourceId: string;
  readonly ResourceType: string;
  readonly ErrorId?: string;
  readonly ErrorArguments?: [];
}

export interface ConflictExceptionErrorArgument {
  readonly Name: string;
  readonly Value: string;
}

export interface CreateApplicationInstanceRequest {
  readonly Name?: string;
  readonly Description?: string;
  readonly ManifestPayload: ManifestPayload;
  readonly ManifestOverridesPayload?: ManifestOverridesPayload;
  readonly ApplicationInstanceIdToReplace?: string;
  readonly RuntimeRoleArn?: string;
  readonly DefaultRuntimeContextDevice: string;
  readonly Tags?: {[key: string]: any};
}

export interface CreateApplicationInstanceResponse {
  readonly ApplicationInstanceId: string;
}

export interface CreateJobForDevicesRequest {
  readonly DeviceIds: [];
  readonly DeviceJobConfig: DeviceJobConfig;
  readonly JobType: string;
}

export interface CreateJobForDevicesResponse {
  readonly Jobs: [];
}

export interface CreateNodeFromTemplateJobRequest {
  readonly TemplateType: string;
  readonly OutputPackageName: string;
  readonly OutputPackageVersion: string;
  readonly NodeName: string;
  readonly NodeDescription?: string;
  readonly TemplateParameters: {[key: string]: any};
  readonly JobTags?: [];
}

export interface CreateNodeFromTemplateJobResponse {
  readonly JobId: string;
}

export interface CreatePackageImportJobRequest {
  readonly JobType: string;
  readonly InputConfig: PackageImportJobInputConfig;
  readonly OutputConfig: PackageImportJobOutputConfig;
  readonly ClientToken: string;
  readonly JobTags?: [];
}

export interface CreatePackageImportJobResponse {
  readonly JobId: string;
}

export interface CreatePackageRequest {
  readonly PackageName: string;
  readonly Tags?: {[key: string]: any};
}

export interface CreatePackageResponse {
  readonly PackageId?: string;
  readonly Arn?: string;
  readonly StorageLocation: StorageLocation;
}

export interface DeleteDeviceRequest {
  readonly DeviceId: string;
}

export interface DeleteDeviceResponse {
  readonly DeviceId?: string;
}

export interface DeletePackageRequest {
  readonly PackageId: string;
  readonly ForceDelete?: boolean;
}

export interface DeletePackageResponse {
}

export interface DeregisterPackageVersionRequest {
  readonly OwnerAccount?: string;
  readonly PackageId: string;
  readonly PackageVersion: string;
  readonly PatchVersion: string;
  readonly UpdatedLatestPatchVersion?: string;
}

export interface DeregisterPackageVersionResponse {
}

export interface DescribeApplicationInstanceDetailsRequest {
  readonly ApplicationInstanceId: string;
}

export interface DescribeApplicationInstanceDetailsResponse {
  readonly Name?: string;
  readonly Description?: string;
  readonly DefaultRuntimeContextDevice?: string;
  readonly ManifestPayload?: ManifestPayload;
  readonly ManifestOverridesPayload?: ManifestOverridesPayload;
  readonly ApplicationInstanceIdToReplace?: string;
  readonly CreatedTime?: Date;
  readonly ApplicationInstanceId?: string;
}

export interface DescribeApplicationInstanceRequest {
  readonly ApplicationInstanceId: string;
}

export interface DescribeApplicationInstanceResponse {
  readonly Name?: string;
  readonly Description?: string;
  readonly DefaultRuntimeContextDevice?: string;
  readonly DefaultRuntimeContextDeviceName?: string;
  readonly ApplicationInstanceIdToReplace?: string;
  readonly RuntimeRoleArn?: string;
  readonly Status?: string;
  readonly HealthStatus?: string;
  readonly StatusDescription?: string;
  readonly CreatedTime?: Date;
  readonly LastUpdatedTime?: Date;
  readonly ApplicationInstanceId?: string;
  readonly Arn?: string;
  readonly Tags?: {[key: string]: any};
}

export interface DescribeDeviceJobRequest {
  readonly JobId: string;
}

export interface DescribeDeviceJobResponse {
  readonly JobId?: string;
  readonly DeviceId?: string;
  readonly DeviceArn?: string;
  readonly DeviceName?: string;
  readonly DeviceType?: string;
  readonly ImageVersion?: string;
  readonly Status?: string;
  readonly CreatedTime?: Date;
}

export interface DescribeDeviceRequest {
  readonly DeviceId: string;
}

export interface DescribeDeviceResponse {
  readonly DeviceId?: string;
  readonly Name?: string;
  readonly Arn?: string;
  readonly Description?: string;
  readonly Type?: string;
  readonly DeviceConnectionStatus?: string;
  readonly CreatedTime?: Date;
  readonly ProvisioningStatus?: string;
  readonly LatestSoftware?: string;
  readonly CurrentSoftware?: string;
  readonly SerialNumber?: string;
  readonly Tags?: {[key: string]: any};
  readonly NetworkingConfiguration?: NetworkPayload;
  readonly CurrentNetworkingStatus?: NetworkStatus;
  readonly LeaseExpirationTime?: Date;
}

export interface DescribeNodeFromTemplateJobRequest {
  readonly JobId: string;
}

export interface DescribeNodeFromTemplateJobResponse {
  readonly JobId: string;
  readonly Status: string;
  readonly StatusMessage: string;
  readonly CreatedTime: Date;
  readonly LastUpdatedTime: Date;
  readonly OutputPackageName: string;
  readonly OutputPackageVersion: string;
  readonly NodeName: string;
  readonly NodeDescription?: string;
  readonly TemplateType: string;
  readonly TemplateParameters: {[key: string]: any};
  readonly JobTags?: [];
}

export interface DescribeNodeRequest {
  readonly NodeId: string;
  readonly OwnerAccount?: string;
}

export interface DescribeNodeResponse {
  readonly NodeId: string;
  readonly Name: string;
  readonly Category: string;
  readonly OwnerAccount: string;
  readonly PackageName: string;
  readonly PackageId: string;
  readonly PackageArn?: string;
  readonly PackageVersion: string;
  readonly PatchVersion: string;
  readonly NodeInterface: NodeInterface;
  readonly AssetName?: string;
  readonly Description: string;
  readonly CreatedTime: Date;
  readonly LastUpdatedTime: Date;
}

export interface DescribePackageImportJobRequest {
  readonly JobId: string;
}

export interface DescribePackageImportJobResponse {
  readonly JobId: string;
  readonly ClientToken?: string;
  readonly JobType: string;
  readonly InputConfig: PackageImportJobInputConfig;
  readonly OutputConfig: PackageImportJobOutputConfig;
  readonly Output: PackageImportJobOutput;
  readonly CreatedTime: Date;
  readonly LastUpdatedTime: Date;
  readonly Status: string;
  readonly StatusMessage: string;
  readonly JobTags?: [];
}

export interface DescribePackageRequest {
  readonly PackageId: string;
}

export interface DescribePackageResponse {
  readonly PackageId: string;
  readonly PackageName: string;
  readonly Arn: string;
  readonly StorageLocation: StorageLocation;
  readonly ReadAccessPrincipalArns?: [];
  readonly WriteAccessPrincipalArns?: [];
  readonly CreatedTime: Date;
  readonly Tags: {[key: string]: any};
}

export interface DescribePackageVersionRequest {
  readonly OwnerAccount?: string;
  readonly PackageId: string;
  readonly PackageVersion: string;
  readonly PatchVersion?: string;
}

export interface DescribePackageVersionResponse {
  readonly OwnerAccount?: string;
  readonly PackageId: string;
  readonly PackageArn?: string;
  readonly PackageName: string;
  readonly PackageVersion: string;
  readonly PatchVersion: string;
  readonly IsLatestPatch: boolean;
  readonly Status: string;
  readonly StatusDescription?: string;
  readonly RegisteredTime?: Date;
}

export interface Device {
  readonly DeviceId?: string;
  readonly Name?: string;
  readonly CreatedTime?: Date;
  readonly ProvisioningStatus?: string;
  readonly LastUpdatedTime?: Date;
  readonly LeaseExpirationTime?: Date;
}

export interface DeviceJob {
  readonly DeviceName?: string;
  readonly DeviceId?: string;
  readonly JobId?: string;
  readonly CreatedTime?: Date;
}

export interface DeviceJobConfig {
  readonly OTAJobConfig?: OTAJobConfig;
}

export interface EthernetPayload {
  readonly ConnectionType: string;
  readonly StaticIpConnectionInfo?: StaticIpConnectionInfo;
}

export interface EthernetStatus {
  readonly IpAddress?: string;
  readonly ConnectionStatus?: string;
  readonly HwAddress?: string;
}

export interface InternalServerException {
  readonly Message: string;
  readonly RetryAfterSeconds?: number;
}

export interface Job {
  readonly JobId?: string;
  readonly DeviceId?: string;
}

export interface JobResourceTags {
  readonly ResourceType: string;
  readonly Tags: {[key: string]: any};
}

export interface ListApplicationInstanceDependenciesRequest {
  readonly ApplicationInstanceId: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface ListApplicationInstanceDependenciesResponse {
  readonly PackageObjects?: [];
  readonly NextToken?: string;
}

export interface ListApplicationInstanceNodeInstancesRequest {
  readonly ApplicationInstanceId: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface ListApplicationInstanceNodeInstancesResponse {
  readonly NodeInstances?: [];
  readonly NextToken?: string;
}

export interface ListApplicationInstancesRequest {
  readonly DeviceId?: string;
  readonly StatusFilter?: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface ListApplicationInstancesResponse {
  readonly ApplicationInstances?: [];
  readonly NextToken?: string;
}

export interface ListDevicesJobsRequest {
  readonly DeviceId?: string;
  readonly NextToken?: string;
  readonly MaxResults?: number;
}

export interface ListDevicesJobsResponse {
  readonly DeviceJobs?: [];
  readonly NextToken?: string;
}

export interface ListDevicesRequest {
  readonly NextToken?: string;
  readonly MaxResults?: number;
}

export interface ListDevicesResponse {
  readonly Devices: [];
  readonly NextToken?: string;
}

export interface ListNodeFromTemplateJobsRequest {
  readonly NextToken?: string;
  readonly MaxResults?: number;
}

export interface ListNodeFromTemplateJobsResponse {
  readonly NodeFromTemplateJobs: [];
  readonly NextToken?: string;
}

export interface ListNodesRequest {
  readonly Category?: string;
  readonly OwnerAccount?: string;
  readonly PackageName?: string;
  readonly PackageVersion?: string;
  readonly PatchVersion?: string;
  readonly NextToken?: string;
  readonly MaxResults?: number;
}

export interface ListNodesResponse {
  readonly Nodes?: [];
  readonly NextToken?: string;
}

export interface ListPackageImportJobsRequest {
  readonly NextToken?: string;
  readonly MaxResults?: number;
}

export interface ListPackageImportJobsResponse {
  readonly PackageImportJobs: [];
  readonly NextToken?: string;
}

export interface ListPackagesRequest {
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface ListPackagesResponse {
  readonly Packages?: [];
  readonly NextToken?: string;
}

export interface ListTagsForResourceRequest {
  readonly ResourceArn: string;
}

export interface ListTagsForResourceResponse {
  readonly Tags?: {[key: string]: any};
}

export interface ManifestOverridesPayload {
  readonly PayloadData?: string;
}

export interface ManifestPayload {
  readonly PayloadData?: string;
}

export interface NetworkPayload {
  readonly Ethernet0?: EthernetPayload;
  readonly Ethernet1?: EthernetPayload;
}

export interface NetworkStatus {
  readonly Ethernet0Status?: EthernetStatus;
  readonly Ethernet1Status?: EthernetStatus;
}

export interface Node {
  readonly NodeId: string;
  readonly Name: string;
  readonly Category: string;
  readonly OwnerAccount?: string;
  readonly PackageName: string;
  readonly PackageId: string;
  readonly PackageArn?: string;
  readonly PackageVersion: string;
  readonly PatchVersion: string;
  readonly Description?: string;
  readonly CreatedTime: Date;
}

export interface NodeFromTemplateJob {
  readonly JobId?: string;
  readonly TemplateType?: string;
  readonly Status?: string;
  readonly StatusMessage?: string;
  readonly CreatedTime?: Date;
  readonly NodeName?: string;
}

export interface NodeInputPort {
  readonly Name?: string;
  readonly Description?: string;
  readonly Type?: string;
  readonly DefaultValue?: string;
  readonly MaxConnections?: number;
}

export interface NodeInstance {
  readonly NodeInstanceId: string;
  readonly NodeId?: string;
  readonly PackageName?: string;
  readonly PackageVersion?: string;
  readonly PackagePatchVersion?: string;
  readonly NodeName?: string;
  readonly CurrentStatus: string;
}

export interface NodeInterface {
  readonly Inputs: [];
  readonly Outputs: [];
}

export interface NodeOutputPort {
  readonly Name?: string;
  readonly Description?: string;
  readonly Type?: string;
}

export interface OTAJobConfig {
  readonly ImageVersion: string;
}

export interface OutPutS3Location {
  readonly BucketName: string;
  readonly ObjectKey: string;
}

export interface PackageImportJob {
  readonly JobId?: string;
  readonly JobType?: string;
  readonly Status?: string;
  readonly StatusMessage?: string;
  readonly CreatedTime?: Date;
  readonly LastUpdatedTime?: Date;
}

export interface PackageImportJobInputConfig {
  readonly PackageVersionInputConfig?: PackageVersionInputConfig;
}

export interface PackageImportJobOutput {
  readonly PackageId: string;
  readonly PackageVersion: string;
  readonly PatchVersion: string;
  readonly OutputS3Location: OutPutS3Location;
}

export interface PackageImportJobOutputConfig {
  readonly PackageVersionOutputConfig?: PackageVersionOutputConfig;
}

export interface PackageListItem {
  readonly PackageId?: string;
  readonly PackageName?: string;
  readonly Arn?: string;
  readonly CreatedTime?: Date;
  readonly Tags?: {[key: string]: any};
}

export interface PackageObject {
  readonly Name: string;
  readonly PackageVersion: string;
  readonly PatchVersion: string;
}

export interface PackageVersionInputConfig {
  readonly S3Location: S3Location;
}

export interface PackageVersionOutputConfig {
  readonly PackageName: string;
  readonly PackageVersion: string;
  readonly MarkLatest?: boolean;
}

export interface ProvisionDeviceRequest {
  readonly Name: string;
  readonly Description?: string;
  readonly Tags?: {[key: string]: any};
  readonly NetworkingConfiguration?: NetworkPayload;
}

export interface ProvisionDeviceResponse {
  readonly DeviceId?: string;
  readonly Arn: string;
  readonly Status: string;
  readonly Certificates?: unknown;
  readonly IotThingName?: string;
}

export interface RegisterPackageVersionRequest {
  readonly OwnerAccount?: string;
  readonly PackageId: string;
  readonly PackageVersion: string;
  readonly PatchVersion: string;
  readonly MarkLatest?: boolean;
}

export interface RegisterPackageVersionResponse {
}

export interface RemoveApplicationInstanceRequest {
  readonly ApplicationInstanceId: string;
}

export interface RemoveApplicationInstanceResponse {
}

export interface ResourceNotFoundException {
  readonly Message: string;
  readonly ResourceId: string;
  readonly ResourceType: string;
}

export interface S3Location {
  readonly Region?: string;
  readonly BucketName: string;
  readonly ObjectKey: string;
}

export interface ServiceQuotaExceededException {
  readonly Message: string;
  readonly ResourceId?: string;
  readonly ResourceType?: string;
  readonly QuotaCode: string;
  readonly ServiceCode: string;
}

export interface StaticIpConnectionInfo {
  readonly IpAddress: string;
  readonly Mask: string;
  readonly Dns: [];
  readonly DefaultGateway: string;
}

export interface StorageLocation {
  readonly Bucket: string;
  readonly RepoPrefixLocation: string;
  readonly GeneratedPrefixLocation: string;
  readonly BinaryPrefixLocation: string;
  readonly ManifestPrefixLocation: string;
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

export interface UpdateDeviceMetadataRequest {
  readonly DeviceId: string;
  readonly Description?: string;
}

export interface UpdateDeviceMetadataResponse {
  readonly DeviceId?: string;
}

export interface ValidationException {
  readonly Message: string;
  readonly Reason?: string;
  readonly ErrorId?: string;
  readonly ErrorArguments?: [];
  readonly Fields?: [];
}

export interface ValidationExceptionErrorArgument {
  readonly Name: string;
  readonly Value: string;
}

export interface ValidationExceptionField {
  readonly Name: string;
  readonly Message: string;
}


