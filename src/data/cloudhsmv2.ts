/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface CopyBackupToRegion {
  readonly DestinationRegion: string;
  readonly BackupId: string;
  readonly TagList?: [];
}
export interface CreateCluster {
  readonly BackupRetentionPolicy?: BackupRetentionPolicy;
  readonly HsmType: string;
  readonly SourceBackupId?: string;
  readonly SubnetIds: [];
  readonly TagList?: [];
}
export interface CreateHsm {
  readonly ClusterId: string;
  readonly AvailabilityZone: string;
  readonly IpAddress?: string;
}
export interface DeleteBackup {
  readonly BackupId: string;
}
export interface DeleteCluster {
  readonly ClusterId: string;
}
export interface DeleteHsm {
  readonly ClusterId: string;
  readonly HsmId?: string;
  readonly EniId?: string;
  readonly EniIp?: string;
}
export interface DescribeBackups {
  readonly NextToken?: string;
  readonly MaxResults?: number;
  readonly Filters?: {[key: string]: any};
  readonly SortAscending?: boolean;
}
export interface DescribeClusters {
  readonly Filters?: {[key: string]: any};
  readonly NextToken?: string;
  readonly MaxResults?: number;
}
export interface InitializeCluster {
  readonly ClusterId: string;
  readonly SignedCert: string;
  readonly TrustAnchor: string;
}
export interface ListTags {
  readonly ResourceId: string;
  readonly NextToken?: string;
  readonly MaxResults?: number;
}
export interface ModifyBackupAttributes {
  readonly BackupId: string;
  readonly NeverExpires: boolean;
}
export interface ModifyCluster {
  readonly BackupRetentionPolicy: BackupRetentionPolicy;
  readonly ClusterId: string;
}
export interface RestoreBackup {
  readonly BackupId: string;
}
export interface TagResource {
  readonly ResourceId: string;
  readonly TagList: [];
}
export interface UntagResource {
  readonly ResourceId: string;
  readonly TagKeyList: [];
}



interface Backup {
  readonly BackupId: string;
  readonly BackupState: string;
  readonly ClusterId: string;
  readonly CreateTimestamp: Date;
  readonly CopyTimestamp: Date;
  readonly NeverExpires: boolean;
  readonly SourceRegion: string;
  readonly SourceBackup: string;
  readonly SourceCluster: string;
  readonly DeleteTimestamp: Date;
  readonly TagList: [];
}

interface BackupRetentionPolicy {
  readonly Type: string;
  readonly Value: string;
}

interface Certificates {
  readonly ClusterCsr: string;
  readonly HsmCertificate: string;
  readonly AwsHardwareCertificate: string;
  readonly ManufacturerHardwareCertificate: string;
  readonly ClusterCertificate: string;
}

interface CloudHsmAccessDeniedException {
  readonly Message: string;
}

interface CloudHsmInternalFailureException {
  readonly Message: string;
}

interface CloudHsmInvalidRequestException {
  readonly Message: string;
}

interface CloudHsmResourceNotFoundException {
  readonly Message: string;
}

interface CloudHsmServiceException {
  readonly Message: string;
}

interface CloudHsmTagException {
  readonly Message: string;
}

interface Cluster {
  readonly BackupPolicy: string;
  readonly BackupRetentionPolicy: BackupRetentionPolicy;
  readonly ClusterId: string;
  readonly CreateTimestamp: Date;
  readonly Hsms: [];
  readonly HsmType: string;
  readonly PreCoPassword: string;
  readonly SecurityGroup: string;
  readonly SourceBackupId: string;
  readonly State: string;
  readonly StateMessage: string;
  readonly SubnetMapping: {[key: string]: any};
  readonly VpcId: string;
  readonly Certificates: Certificates;
  readonly TagList: [];
}

interface CopyBackupToRegionRequest {
  readonly DestinationRegion: string;
  readonly BackupId: string;
  readonly TagList: [];
}

interface CopyBackupToRegionResponse {
  readonly DestinationBackup: DestinationBackup;
}

interface CreateClusterRequest {
  readonly BackupRetentionPolicy: BackupRetentionPolicy;
  readonly HsmType: string;
  readonly SourceBackupId: string;
  readonly SubnetIds: [];
  readonly TagList: [];
}

interface CreateClusterResponse {
  readonly Cluster: Cluster;
}

interface CreateHsmRequest {
  readonly ClusterId: string;
  readonly AvailabilityZone: string;
  readonly IpAddress: string;
}

interface CreateHsmResponse {
  readonly Hsm: Hsm;
}

interface DeleteBackupRequest {
  readonly BackupId: string;
}

interface DeleteBackupResponse {
  readonly Backup: Backup;
}

interface DeleteClusterRequest {
  readonly ClusterId: string;
}

interface DeleteClusterResponse {
  readonly Cluster: Cluster;
}

interface DeleteHsmRequest {
  readonly ClusterId: string;
  readonly HsmId: string;
  readonly EniId: string;
  readonly EniIp: string;
}

interface DeleteHsmResponse {
  readonly HsmId: string;
}

interface DescribeBackupsRequest {
  readonly NextToken: string;
  readonly MaxResults: number;
  readonly Filters: {[key: string]: any};
  readonly SortAscending: boolean;
}

interface DescribeBackupsResponse {
  readonly Backups: [];
  readonly NextToken: string;
}

interface DescribeClustersRequest {
  readonly Filters: {[key: string]: any};
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface DescribeClustersResponse {
  readonly Clusters: [];
  readonly NextToken: string;
}

interface DestinationBackup {
  readonly CreateTimestamp: Date;
  readonly SourceRegion: string;
  readonly SourceBackup: string;
  readonly SourceCluster: string;
}

interface Hsm {
  readonly AvailabilityZone: string;
  readonly ClusterId: string;
  readonly SubnetId: string;
  readonly EniId: string;
  readonly EniIp: string;
  readonly HsmId: string;
  readonly State: string;
  readonly StateMessage: string;
}

interface InitializeClusterRequest {
  readonly ClusterId: string;
  readonly SignedCert: string;
  readonly TrustAnchor: string;
}

interface InitializeClusterResponse {
  readonly State: string;
  readonly StateMessage: string;
}

interface ListTagsRequest {
  readonly ResourceId: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListTagsResponse {
  readonly TagList: [];
  readonly NextToken: string;
}

interface ModifyBackupAttributesRequest {
  readonly BackupId: string;
  readonly NeverExpires: boolean;
}

interface ModifyBackupAttributesResponse {
  readonly Backup: Backup;
}

interface ModifyClusterRequest {
  readonly BackupRetentionPolicy: BackupRetentionPolicy;
  readonly ClusterId: string;
}

interface ModifyClusterResponse {
  readonly Cluster: Cluster;
}

interface RestoreBackupRequest {
  readonly BackupId: string;
}

interface RestoreBackupResponse {
  readonly Backup: Backup;
}

interface Tag {
  readonly Key: string;
  readonly Value: string;
}

interface TagResourceRequest {
  readonly ResourceId: string;
  readonly TagList: [];
}

interface TagResourceResponse {
}

interface UntagResourceRequest {
  readonly ResourceId: string;
  readonly TagKeyList: [];
}

interface UntagResourceResponse {
}

