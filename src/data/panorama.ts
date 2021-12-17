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



interface AccessDeniedException {
  readonly Message: string;
}

interface ApplicationInstance {
  readonly Name: string;
  readonly ApplicationInstanceId: string;
  readonly DefaultRuntimeContextDevice: string;
  readonly DefaultRuntimeContextDeviceName: string;
  readonly Description: string;
  readonly Status: string;
  readonly HealthStatus: string;
  readonly StatusDescription: string;
  readonly CreatedTime: Date;
  readonly Arn: string;
  readonly Tags: {[key: string]: any};
}

interface ConflictException {
  readonly Message: string;
  readonly ResourceId: string;
  readonly ResourceType: string;
  readonly ErrorId: string;
  readonly ErrorArguments: [];
}

interface ConflictExceptionErrorArgument {
  readonly Name: string;
  readonly Value: string;
}

interface CreateApplicationInstanceRequest {
  readonly Name: string;
  readonly Description: string;
  readonly ManifestPayload: ManifestPayload;
  readonly ManifestOverridesPayload: ManifestOverridesPayload;
  readonly ApplicationInstanceIdToReplace: string;
  readonly RuntimeRoleArn: string;
  readonly DefaultRuntimeContextDevice: string;
  readonly Tags: {[key: string]: any};
}

interface CreateApplicationInstanceResponse {
  readonly ApplicationInstanceId: string;
}

interface CreateJobForDevicesRequest {
  readonly DeviceIds: [];
  readonly DeviceJobConfig: DeviceJobConfig;
  readonly JobType: string;
}

interface CreateJobForDevicesResponse {
  readonly Jobs: [];
}

interface CreateNodeFromTemplateJobRequest {
  readonly TemplateType: string;
  readonly OutputPackageName: string;
  readonly OutputPackageVersion: string;
  readonly NodeName: string;
  readonly NodeDescription: string;
  readonly TemplateParameters: {[key: string]: any};
  readonly JobTags: [];
}

interface CreateNodeFromTemplateJobResponse {
  readonly JobId: string;
}

interface CreatePackageImportJobRequest {
  readonly JobType: string;
  readonly InputConfig: PackageImportJobInputConfig;
  readonly OutputConfig: PackageImportJobOutputConfig;
  readonly ClientToken: string;
  readonly JobTags: [];
}

interface CreatePackageImportJobResponse {
  readonly JobId: string;
}

interface CreatePackageRequest {
  readonly PackageName: string;
  readonly Tags: {[key: string]: any};
}

interface CreatePackageResponse {
  readonly PackageId: string;
  readonly Arn: string;
  readonly StorageLocation: StorageLocation;
}

interface DeleteDeviceRequest {
  readonly DeviceId: string;
}

interface DeleteDeviceResponse {
  readonly DeviceId: string;
}

interface DeletePackageRequest {
  readonly PackageId: string;
  readonly ForceDelete: boolean;
}

interface DeletePackageResponse {
}

interface DeregisterPackageVersionRequest {
  readonly OwnerAccount: string;
  readonly PackageId: string;
  readonly PackageVersion: string;
  readonly PatchVersion: string;
  readonly UpdatedLatestPatchVersion: string;
}

interface DeregisterPackageVersionResponse {
}

interface DescribeApplicationInstanceDetailsRequest {
  readonly ApplicationInstanceId: string;
}

interface DescribeApplicationInstanceDetailsResponse {
  readonly Name: string;
  readonly Description: string;
  readonly DefaultRuntimeContextDevice: string;
  readonly ManifestPayload: ManifestPayload;
  readonly ManifestOverridesPayload: ManifestOverridesPayload;
  readonly ApplicationInstanceIdToReplace: string;
  readonly CreatedTime: Date;
  readonly ApplicationInstanceId: string;
}

interface DescribeApplicationInstanceRequest {
  readonly ApplicationInstanceId: string;
}

interface DescribeApplicationInstanceResponse {
  readonly Name: string;
  readonly Description: string;
  readonly DefaultRuntimeContextDevice: string;
  readonly DefaultRuntimeContextDeviceName: string;
  readonly ApplicationInstanceIdToReplace: string;
  readonly RuntimeRoleArn: string;
  readonly Status: string;
  readonly HealthStatus: string;
  readonly StatusDescription: string;
  readonly CreatedTime: Date;
  readonly LastUpdatedTime: Date;
  readonly ApplicationInstanceId: string;
  readonly Arn: string;
  readonly Tags: {[key: string]: any};
}

interface DescribeDeviceJobRequest {
  readonly JobId: string;
}

interface DescribeDeviceJobResponse {
  readonly JobId: string;
  readonly DeviceId: string;
  readonly DeviceArn: string;
  readonly DeviceName: string;
  readonly DeviceType: string;
  readonly ImageVersion: string;
  readonly Status: string;
  readonly CreatedTime: Date;
}

interface DescribeDeviceRequest {
  readonly DeviceId: string;
}

interface DescribeDeviceResponse {
  readonly DeviceId: string;
  readonly Name: string;
  readonly Arn: string;
  readonly Description: string;
  readonly Type: string;
  readonly DeviceConnectionStatus: string;
  readonly CreatedTime: Date;
  readonly ProvisioningStatus: string;
  readonly LatestSoftware: string;
  readonly CurrentSoftware: string;
  readonly SerialNumber: string;
  readonly Tags: {[key: string]: any};
  readonly NetworkingConfiguration: NetworkPayload;
  readonly CurrentNetworkingStatus: NetworkStatus;
  readonly LeaseExpirationTime: Date;
}

interface DescribeNodeFromTemplateJobRequest {
  readonly JobId: string;
}

interface DescribeNodeFromTemplateJobResponse {
  readonly JobId: string;
  readonly Status: string;
  readonly StatusMessage: string;
  readonly CreatedTime: Date;
  readonly LastUpdatedTime: Date;
  readonly OutputPackageName: string;
  readonly OutputPackageVersion: string;
  readonly NodeName: string;
  readonly NodeDescription: string;
  readonly TemplateType: string;
  readonly TemplateParameters: {[key: string]: any};
  readonly JobTags: [];
}

interface DescribeNodeRequest {
  readonly NodeId: string;
  readonly OwnerAccount: string;
}

interface DescribeNodeResponse {
  readonly NodeId: string;
  readonly Name: string;
  readonly Category: string;
  readonly OwnerAccount: string;
  readonly PackageName: string;
  readonly PackageId: string;
  readonly PackageArn: string;
  readonly PackageVersion: string;
  readonly PatchVersion: string;
  readonly NodeInterface: NodeInterface;
  readonly AssetName: string;
  readonly Description: string;
  readonly CreatedTime: Date;
  readonly LastUpdatedTime: Date;
}

interface DescribePackageImportJobRequest {
  readonly JobId: string;
}

interface DescribePackageImportJobResponse {
  readonly JobId: string;
  readonly ClientToken: string;
  readonly JobType: string;
  readonly InputConfig: PackageImportJobInputConfig;
  readonly OutputConfig: PackageImportJobOutputConfig;
  readonly Output: PackageImportJobOutput;
  readonly CreatedTime: Date;
  readonly LastUpdatedTime: Date;
  readonly Status: string;
  readonly StatusMessage: string;
  readonly JobTags: [];
}

interface DescribePackageRequest {
  readonly PackageId: string;
}

interface DescribePackageResponse {
  readonly PackageId: string;
  readonly PackageName: string;
  readonly Arn: string;
  readonly StorageLocation: StorageLocation;
  readonly ReadAccessPrincipalArns: [];
  readonly WriteAccessPrincipalArns: [];
  readonly CreatedTime: Date;
  readonly Tags: {[key: string]: any};
}

interface DescribePackageVersionRequest {
  readonly OwnerAccount: string;
  readonly PackageId: string;
  readonly PackageVersion: string;
  readonly PatchVersion: string;
}

interface DescribePackageVersionResponse {
  readonly OwnerAccount: string;
  readonly PackageId: string;
  readonly PackageArn: string;
  readonly PackageName: string;
  readonly PackageVersion: string;
  readonly PatchVersion: string;
  readonly IsLatestPatch: boolean;
  readonly Status: string;
  readonly StatusDescription: string;
  readonly RegisteredTime: Date;
}

interface Device {
  readonly DeviceId: string;
  readonly Name: string;
  readonly CreatedTime: Date;
  readonly ProvisioningStatus: string;
  readonly LastUpdatedTime: Date;
  readonly LeaseExpirationTime: Date;
}

interface DeviceJob {
  readonly DeviceName: string;
  readonly DeviceId: string;
  readonly JobId: string;
  readonly CreatedTime: Date;
}

interface DeviceJobConfig {
  readonly OTAJobConfig: OTAJobConfig;
}

interface EthernetPayload {
  readonly ConnectionType: string;
  readonly StaticIpConnectionInfo: StaticIpConnectionInfo;
}

interface EthernetStatus {
  readonly IpAddress: string;
  readonly ConnectionStatus: string;
  readonly HwAddress: string;
}

interface InternalServerException {
  readonly Message: string;
  readonly RetryAfterSeconds: number;
}

interface Job {
  readonly JobId: string;
  readonly DeviceId: string;
}

interface JobResourceTags {
  readonly ResourceType: string;
  readonly Tags: {[key: string]: any};
}

interface ListApplicationInstanceDependenciesRequest {
  readonly ApplicationInstanceId: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface ListApplicationInstanceDependenciesResponse {
  readonly PackageObjects: [];
  readonly NextToken: string;
}

interface ListApplicationInstanceNodeInstancesRequest {
  readonly ApplicationInstanceId: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface ListApplicationInstanceNodeInstancesResponse {
  readonly NodeInstances: [];
  readonly NextToken: string;
}

interface ListApplicationInstancesRequest {
  readonly DeviceId: string;
  readonly StatusFilter: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface ListApplicationInstancesResponse {
  readonly ApplicationInstances: [];
  readonly NextToken: string;
}

interface ListDevicesJobsRequest {
  readonly DeviceId: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListDevicesJobsResponse {
  readonly DeviceJobs: [];
  readonly NextToken: string;
}

interface ListDevicesRequest {
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListDevicesResponse {
  readonly Devices: [];
  readonly NextToken: string;
}

interface ListNodeFromTemplateJobsRequest {
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListNodeFromTemplateJobsResponse {
  readonly NodeFromTemplateJobs: [];
  readonly NextToken: string;
}

interface ListNodesRequest {
  readonly Category: string;
  readonly OwnerAccount: string;
  readonly PackageName: string;
  readonly PackageVersion: string;
  readonly PatchVersion: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListNodesResponse {
  readonly Nodes: [];
  readonly NextToken: string;
}

interface ListPackageImportJobsRequest {
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListPackageImportJobsResponse {
  readonly PackageImportJobs: [];
  readonly NextToken: string;
}

interface ListPackagesRequest {
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface ListPackagesResponse {
  readonly Packages: [];
  readonly NextToken: string;
}

interface ListTagsForResourceRequest {
  readonly ResourceArn: string;
}

interface ListTagsForResourceResponse {
  readonly Tags: {[key: string]: any};
}

interface ManifestOverridesPayload {
  readonly PayloadData: string;
}

interface ManifestPayload {
  readonly PayloadData: string;
}

interface NetworkPayload {
  readonly Ethernet0: EthernetPayload;
  readonly Ethernet1: EthernetPayload;
}

interface NetworkStatus {
  readonly Ethernet0Status: EthernetStatus;
  readonly Ethernet1Status: EthernetStatus;
}

interface Node {
  readonly NodeId: string;
  readonly Name: string;
  readonly Category: string;
  readonly OwnerAccount: string;
  readonly PackageName: string;
  readonly PackageId: string;
  readonly PackageArn: string;
  readonly PackageVersion: string;
  readonly PatchVersion: string;
  readonly Description: string;
  readonly CreatedTime: Date;
}

interface NodeFromTemplateJob {
  readonly JobId: string;
  readonly TemplateType: string;
  readonly Status: string;
  readonly StatusMessage: string;
  readonly CreatedTime: Date;
  readonly NodeName: string;
}

interface NodeInputPort {
  readonly Name: string;
  readonly Description: string;
  readonly Type: string;
  readonly DefaultValue: string;
  readonly MaxConnections: number;
}

interface NodeInstance {
  readonly NodeInstanceId: string;
  readonly NodeId: string;
  readonly PackageName: string;
  readonly PackageVersion: string;
  readonly PackagePatchVersion: string;
  readonly NodeName: string;
  readonly CurrentStatus: string;
}

interface NodeInterface {
  readonly Inputs: [];
  readonly Outputs: [];
}

interface NodeOutputPort {
  readonly Name: string;
  readonly Description: string;
  readonly Type: string;
}

interface OTAJobConfig {
  readonly ImageVersion: string;
}

interface OutPutS3Location {
  readonly BucketName: string;
  readonly ObjectKey: string;
}

interface PackageImportJob {
  readonly JobId: string;
  readonly JobType: string;
  readonly Status: string;
  readonly StatusMessage: string;
  readonly CreatedTime: Date;
  readonly LastUpdatedTime: Date;
}

interface PackageImportJobInputConfig {
  readonly PackageVersionInputConfig: PackageVersionInputConfig;
}

interface PackageImportJobOutput {
  readonly PackageId: string;
  readonly PackageVersion: string;
  readonly PatchVersion: string;
  readonly OutputS3Location: OutPutS3Location;
}

interface PackageImportJobOutputConfig {
  readonly PackageVersionOutputConfig: PackageVersionOutputConfig;
}

interface PackageListItem {
  readonly PackageId: string;
  readonly PackageName: string;
  readonly Arn: string;
  readonly CreatedTime: Date;
  readonly Tags: {[key: string]: any};
}

interface PackageObject {
  readonly Name: string;
  readonly PackageVersion: string;
  readonly PatchVersion: string;
}

interface PackageVersionInputConfig {
  readonly S3Location: S3Location;
}

interface PackageVersionOutputConfig {
  readonly PackageName: string;
  readonly PackageVersion: string;
  readonly MarkLatest: boolean;
}

interface ProvisionDeviceRequest {
  readonly Name: string;
  readonly Description: string;
  readonly Tags: {[key: string]: any};
  readonly NetworkingConfiguration: NetworkPayload;
}

interface ProvisionDeviceResponse {
  readonly DeviceId: string;
  readonly Arn: string;
  readonly Status: string;
  readonly Certificates: unknown;
  readonly IotThingName: string;
}

interface RegisterPackageVersionRequest {
  readonly OwnerAccount: string;
  readonly PackageId: string;
  readonly PackageVersion: string;
  readonly PatchVersion: string;
  readonly MarkLatest: boolean;
}

interface RegisterPackageVersionResponse {
}

interface RemoveApplicationInstanceRequest {
  readonly ApplicationInstanceId: string;
}

interface RemoveApplicationInstanceResponse {
}

interface ResourceNotFoundException {
  readonly Message: string;
  readonly ResourceId: string;
  readonly ResourceType: string;
}

interface S3Location {
  readonly Region: string;
  readonly BucketName: string;
  readonly ObjectKey: string;
}

interface ServiceQuotaExceededException {
  readonly Message: string;
  readonly ResourceId: string;
  readonly ResourceType: string;
  readonly QuotaCode: string;
  readonly ServiceCode: string;
}

interface StaticIpConnectionInfo {
  readonly IpAddress: string;
  readonly Mask: string;
  readonly Dns: [];
  readonly DefaultGateway: string;
}

interface StorageLocation {
  readonly Bucket: string;
  readonly RepoPrefixLocation: string;
  readonly GeneratedPrefixLocation: string;
  readonly BinaryPrefixLocation: string;
  readonly ManifestPrefixLocation: string;
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

interface UpdateDeviceMetadataRequest {
  readonly DeviceId: string;
  readonly Description: string;
}

interface UpdateDeviceMetadataResponse {
  readonly DeviceId: string;
}

interface ValidationException {
  readonly Message: string;
  readonly Reason: string;
  readonly ErrorId: string;
  readonly ErrorArguments: [];
  readonly Fields: [];
}

interface ValidationExceptionErrorArgument {
  readonly Name: string;
  readonly Value: string;
}

interface ValidationExceptionField {
  readonly Name: string;
  readonly Message: string;
}

