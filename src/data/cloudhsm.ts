/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface AddTagsToResource {
  readonly ResourceArn: string;
  readonly TagList: [];
}
export interface CreateHapg {
  readonly Label: string;
}
export interface CreateHsm {
  readonly SubnetId: string;
  readonly SshKey: string;
  readonly EniIp: string;
  readonly IamRoleArn: string;
  readonly ExternalId: string;
  readonly SubscriptionType: string;
  readonly ClientToken: string;
  readonly SyslogIp: string;
}
export interface CreateLunaClient {
  readonly Label: string;
  readonly Certificate: string;
}
export interface DeleteHapg {
  readonly HapgArn: string;
}
export interface DeleteHsm {
  readonly HsmArn: string;
}
export interface DeleteLunaClient {
  readonly ClientArn: string;
}
export interface DescribeHapg {
  readonly HapgArn: string;
}
export interface DescribeHsm {
  readonly HsmArn: string;
  readonly HsmSerialNumber: string;
}
export interface DescribeLunaClient {
  readonly ClientArn: string;
  readonly CertificateFingerprint: string;
}
export interface GetConfig {
  readonly ClientArn: string;
  readonly ClientVersion: string;
  readonly HapgList: [];
}
export interface ListAvailableZones {
}
export interface ListHapgs {
  readonly NextToken: string;
}
export interface ListHsms {
  readonly NextToken: string;
}
export interface ListLunaClients {
  readonly NextToken: string;
}
export interface ListTagsForResource {
  readonly ResourceArn: string;
}
export interface ModifyHapg {
  readonly HapgArn: string;
  readonly Label: string;
  readonly PartitionSerialList: [];
}
export interface ModifyHsm {
  readonly HsmArn: string;
  readonly SubnetId: string;
  readonly EniIp: string;
  readonly IamRoleArn: string;
  readonly ExternalId: string;
  readonly SyslogIp: string;
}
export interface ModifyLunaClient {
  readonly ClientArn: string;
  readonly Certificate: string;
}
export interface RemoveTagsFromResource {
  readonly ResourceArn: string;
  readonly TagKeyList: [];
}



interface AddTagsToResourceRequest {
  readonly ResourceArn: string;
  readonly TagList: [];
}

interface AddTagsToResourceResponse {
  readonly Status: string;
}

interface CloudHsmInternalException {
}

interface CloudHsmServiceException {
  readonly message: string;
  readonly retryable: boolean;
}

interface CreateHapgRequest {
  readonly Label: string;
}

interface CreateHapgResponse {
  readonly HapgArn: string;
}

interface CreateHsmRequest {
  readonly SubnetId: string;
  readonly SshKey: string;
  readonly EniIp: string;
  readonly IamRoleArn: string;
  readonly ExternalId: string;
  readonly SubscriptionType: string;
  readonly ClientToken: string;
  readonly SyslogIp: string;
}

interface CreateHsmResponse {
  readonly HsmArn: string;
}

interface CreateLunaClientRequest {
  readonly Label: string;
  readonly Certificate: string;
}

interface CreateLunaClientResponse {
  readonly ClientArn: string;
}

interface DeleteHapgRequest {
  readonly HapgArn: string;
}

interface DeleteHapgResponse {
  readonly Status: string;
}

interface DeleteHsmRequest {
  readonly HsmArn: string;
}

interface DeleteHsmResponse {
  readonly Status: string;
}

interface DeleteLunaClientRequest {
  readonly ClientArn: string;
}

interface DeleteLunaClientResponse {
  readonly Status: string;
}

interface DescribeHapgRequest {
  readonly HapgArn: string;
}

interface DescribeHapgResponse {
  readonly HapgArn: string;
  readonly HapgSerial: string;
  readonly HsmsLastActionFailed: [];
  readonly HsmsPendingDeletion: [];
  readonly HsmsPendingRegistration: [];
  readonly Label: string;
  readonly LastModifiedTimestamp: string;
  readonly PartitionSerialList: [];
  readonly State: string;
}

interface DescribeHsmRequest {
  readonly HsmArn: string;
  readonly HsmSerialNumber: string;
}

interface DescribeHsmResponse {
  readonly HsmArn: string;
  readonly Status: string;
  readonly StatusDetails: string;
  readonly AvailabilityZone: string;
  readonly EniId: string;
  readonly EniIp: string;
  readonly SubscriptionType: string;
  readonly SubscriptionStartDate: string;
  readonly SubscriptionEndDate: string;
  readonly VpcId: string;
  readonly SubnetId: string;
  readonly IamRoleArn: string;
  readonly SerialNumber: string;
  readonly VendorName: string;
  readonly HsmType: string;
  readonly SoftwareVersion: string;
  readonly SshPublicKey: string;
  readonly SshKeyLastUpdated: string;
  readonly ServerCertUri: string;
  readonly ServerCertLastUpdated: string;
  readonly Partitions: [];
}

interface DescribeLunaClientRequest {
  readonly ClientArn: string;
  readonly CertificateFingerprint: string;
}

interface DescribeLunaClientResponse {
  readonly ClientArn: string;
  readonly Certificate: string;
  readonly CertificateFingerprint: string;
  readonly LastModifiedTimestamp: string;
  readonly Label: string;
}

interface GetConfigRequest {
  readonly ClientArn: string;
  readonly ClientVersion: string;
  readonly HapgList: [];
}

interface GetConfigResponse {
  readonly ConfigType: string;
  readonly ConfigFile: string;
  readonly ConfigCred: string;
}

interface InvalidRequestException {
}

interface ListAvailableZonesRequest {
}

interface ListAvailableZonesResponse {
  readonly AZList: [];
}

interface ListHapgsRequest {
  readonly NextToken: string;
}

interface ListHapgsResponse {
  readonly HapgList: [];
  readonly NextToken: string;
}

interface ListHsmsRequest {
  readonly NextToken: string;
}

interface ListHsmsResponse {
  readonly HsmList: [];
  readonly NextToken: string;
}

interface ListLunaClientsRequest {
  readonly NextToken: string;
}

interface ListLunaClientsResponse {
  readonly ClientList: [];
  readonly NextToken: string;
}

interface ListTagsForResourceRequest {
  readonly ResourceArn: string;
}

interface ListTagsForResourceResponse {
  readonly TagList: [];
}

interface ModifyHapgRequest {
  readonly HapgArn: string;
  readonly Label: string;
  readonly PartitionSerialList: [];
}

interface ModifyHapgResponse {
  readonly HapgArn: string;
}

interface ModifyHsmRequest {
  readonly HsmArn: string;
  readonly SubnetId: string;
  readonly EniIp: string;
  readonly IamRoleArn: string;
  readonly ExternalId: string;
  readonly SyslogIp: string;
}

interface ModifyHsmResponse {
  readonly HsmArn: string;
}

interface ModifyLunaClientRequest {
  readonly ClientArn: string;
  readonly Certificate: string;
}

interface ModifyLunaClientResponse {
  readonly ClientArn: string;
}

interface RemoveTagsFromResourceRequest {
  readonly ResourceArn: string;
  readonly TagKeyList: [];
}

interface RemoveTagsFromResourceResponse {
  readonly Status: string;
}

interface Tag {
  readonly Key: string;
  readonly Value: string;
}
