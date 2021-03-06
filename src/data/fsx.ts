/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface AssociateFileSystemAliases {
  readonly ClientRequestToken?: string;
  readonly FileSystemId: string;
  readonly Aliases: [];
}
export interface CancelDataRepositoryTask {
  readonly TaskId: string;
}
export interface CopyBackup {
  readonly ClientRequestToken?: string;
  readonly SourceBackupId: string;
  readonly SourceRegion?: string;
  readonly KmsKeyId?: string;
  readonly CopyTags?: boolean;
  readonly Tags?: [];
}
export interface CreateBackup {
  readonly FileSystemId?: string;
  readonly ClientRequestToken?: string;
  readonly Tags?: [];
  readonly VolumeId?: string;
}
export interface CreateDataRepositoryAssociation {
  readonly FileSystemId: string;
  readonly FileSystemPath: string;
  readonly DataRepositoryPath: string;
  readonly BatchImportMetaDataOnCreate?: boolean;
  readonly ImportedFileChunkSize?: number;
  readonly S3?: S3DataRepositoryConfiguration;
  readonly ClientRequestToken?: string;
  readonly Tags?: [];
}
export interface CreateDataRepositoryTask {
  readonly Type: string;
  readonly Paths?: [];
  readonly FileSystemId: string;
  readonly Report: CompletionReport;
  readonly ClientRequestToken?: string;
  readonly Tags?: [];
}
export interface CreateFileSystem {
  readonly ClientRequestToken?: string;
  readonly FileSystemType: string;
  readonly StorageCapacity: number;
  readonly StorageType?: string;
  readonly SubnetIds: [];
  readonly SecurityGroupIds?: [];
  readonly Tags?: [];
  readonly KmsKeyId?: string;
  readonly WindowsConfiguration?: CreateFileSystemWindowsConfiguration;
  readonly LustreConfiguration?: CreateFileSystemLustreConfiguration;
  readonly OntapConfiguration?: CreateFileSystemOntapConfiguration;
  readonly FileSystemTypeVersion?: string;
  readonly OpenZFSConfiguration?: CreateFileSystemOpenZFSConfiguration;
}
export interface CreateFileSystemFromBackup {
  readonly BackupId: string;
  readonly ClientRequestToken?: string;
  readonly SubnetIds: [];
  readonly SecurityGroupIds?: [];
  readonly Tags?: [];
  readonly WindowsConfiguration?: CreateFileSystemWindowsConfiguration;
  readonly LustreConfiguration?: CreateFileSystemLustreConfiguration;
  readonly StorageType?: string;
  readonly KmsKeyId?: string;
  readonly FileSystemTypeVersion?: string;
  readonly OpenZFSConfiguration?: CreateFileSystemOpenZFSConfiguration;
}
export interface CreateSnapshot {
  readonly ClientRequestToken?: string;
  readonly Name: string;
  readonly VolumeId: string;
  readonly Tags?: [];
}
export interface CreateStorageVirtualMachine {
  readonly ActiveDirectoryConfiguration?: CreateSvmActiveDirectoryConfiguration;
  readonly ClientRequestToken?: string;
  readonly FileSystemId: string;
  readonly Name: string;
  readonly SvmAdminPassword?: string;
  readonly Tags?: [];
  readonly RootVolumeSecurityStyle?: string;
}
export interface CreateVolume {
  readonly ClientRequestToken?: string;
  readonly VolumeType: string;
  readonly Name: string;
  readonly OntapConfiguration?: CreateOntapVolumeConfiguration;
  readonly Tags?: [];
  readonly OpenZFSConfiguration?: CreateOpenZFSVolumeConfiguration;
}
export interface CreateVolumeFromBackup {
  readonly BackupId: string;
  readonly ClientRequestToken?: string;
  readonly Name: string;
  readonly OntapConfiguration?: CreateOntapVolumeConfiguration;
  readonly Tags?: [];
}
export interface DeleteBackup {
  readonly BackupId: string;
  readonly ClientRequestToken?: string;
}
export interface DeleteDataRepositoryAssociation {
  readonly AssociationId: string;
  readonly ClientRequestToken?: string;
  readonly DeleteDataInFileSystem: boolean;
}
export interface DeleteFileSystem {
  readonly FileSystemId: string;
  readonly ClientRequestToken?: string;
  readonly WindowsConfiguration?: DeleteFileSystemWindowsConfiguration;
  readonly LustreConfiguration?: DeleteFileSystemLustreConfiguration;
  readonly OpenZFSConfiguration?: DeleteFileSystemOpenZFSConfiguration;
}
export interface DeleteSnapshot {
  readonly ClientRequestToken?: string;
  readonly SnapshotId: string;
}
export interface DeleteStorageVirtualMachine {
  readonly ClientRequestToken?: string;
  readonly StorageVirtualMachineId: string;
}
export interface DeleteVolume {
  readonly ClientRequestToken?: string;
  readonly VolumeId: string;
  readonly OntapConfiguration?: DeleteVolumeOntapConfiguration;
  readonly OpenZFSConfiguration?: DeleteVolumeOpenZFSConfiguration;
}
export interface DescribeBackups {
  readonly BackupIds?: [];
  readonly Filters?: [];
  readonly MaxResults?: number;
  readonly NextToken?: string;
}
export interface DescribeDataRepositoryAssociations {
  readonly AssociationIds?: [];
  readonly Filters?: [];
  readonly MaxResults?: number;
  readonly NextToken?: string;
}
export interface DescribeDataRepositoryTasks {
  readonly TaskIds?: [];
  readonly Filters?: [];
  readonly MaxResults?: number;
  readonly NextToken?: string;
}
export interface DescribeFileSystemAliases {
  readonly ClientRequestToken?: string;
  readonly FileSystemId: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}
export interface DescribeFileSystems {
  readonly FileSystemIds?: [];
  readonly MaxResults?: number;
  readonly NextToken?: string;
}
export interface DescribeSnapshots {
  readonly SnapshotIds?: [];
  readonly Filters?: [];
  readonly MaxResults?: number;
  readonly NextToken?: string;
}
export interface DescribeStorageVirtualMachines {
  readonly StorageVirtualMachineIds?: [];
  readonly Filters?: [];
  readonly MaxResults?: number;
  readonly NextToken?: string;
}
export interface DescribeVolumes {
  readonly VolumeIds?: [];
  readonly Filters?: [];
  readonly MaxResults?: number;
  readonly NextToken?: string;
}
export interface DisassociateFileSystemAliases {
  readonly ClientRequestToken?: string;
  readonly FileSystemId: string;
  readonly Aliases: [];
}
export interface ListTagsForResource {
  readonly ResourceARN: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}
export interface ReleaseFileSystemNfsV3Locks {
  readonly FileSystemId: string;
  readonly ClientRequestToken?: string;
}
export interface RestoreVolumeFromSnapshot {
  readonly ClientRequestToken?: string;
  readonly VolumeId: string;
  readonly SnapshotId: string;
  readonly Options?: [];
}
export interface TagResource {
  readonly ResourceARN: string;
  readonly Tags: [];
}
export interface UntagResource {
  readonly ResourceARN: string;
  readonly TagKeys: [];
}
export interface UpdateDataRepositoryAssociation {
  readonly AssociationId: string;
  readonly ClientRequestToken?: string;
  readonly ImportedFileChunkSize?: number;
  readonly S3?: S3DataRepositoryConfiguration;
}
export interface UpdateFileSystem {
  readonly FileSystemId: string;
  readonly ClientRequestToken?: string;
  readonly StorageCapacity?: number;
  readonly WindowsConfiguration?: UpdateFileSystemWindowsConfiguration;
  readonly LustreConfiguration?: UpdateFileSystemLustreConfiguration;
  readonly OntapConfiguration?: UpdateFileSystemOntapConfiguration;
  readonly OpenZFSConfiguration?: UpdateFileSystemOpenZFSConfiguration;
}
export interface UpdateSnapshot {
  readonly ClientRequestToken?: string;
  readonly Name: string;
  readonly SnapshotId: string;
}
export interface UpdateStorageVirtualMachine {
  readonly ActiveDirectoryConfiguration?: UpdateSvmActiveDirectoryConfiguration;
  readonly ClientRequestToken?: string;
  readonly StorageVirtualMachineId: string;
  readonly SvmAdminPassword?: string;
}
export interface UpdateVolume {
  readonly ClientRequestToken?: string;
  readonly VolumeId: string;
  readonly OntapConfiguration?: UpdateOntapVolumeConfiguration;
  readonly Name?: string;
  readonly OpenZFSConfiguration?: UpdateOpenZFSVolumeConfiguration;
}



interface ActiveDirectoryBackupAttributes {
  readonly DomainName: string;
  readonly ActiveDirectoryId: string;
  readonly ResourceARN: string;
}

interface ActiveDirectoryError {
  readonly ActiveDirectoryId: string;
  readonly Type: string;
  readonly Message: string;
}

interface AdministrativeAction {
  readonly AdministrativeActionType: string;
  readonly ProgressPercent: number;
  readonly RequestTime: Date;
  readonly Status: string;
  readonly TargetFileSystemValues: FileSystem;
  readonly FailureDetails: AdministrativeActionFailureDetails;
  readonly TargetVolumeValues: Volume;
  readonly TargetSnapshotValues: Snapshot;
}

interface AdministrativeActionFailureDetails {
  readonly Message: string;
}

interface Alias {
  readonly Name: string;
  readonly Lifecycle: string;
}

interface AssociateFileSystemAliasesRequest {
  readonly ClientRequestToken: string;
  readonly FileSystemId: string;
  readonly Aliases: [];
}

interface AssociateFileSystemAliasesResponse {
  readonly Aliases: [];
}

interface AutoExportPolicy {
  readonly Events: [];
}

interface AutoImportPolicy {
  readonly Events: [];
}

interface Backup {
  readonly BackupId: string;
  readonly Lifecycle: string;
  readonly FailureDetails: BackupFailureDetails;
  readonly Type: string;
  readonly ProgressPercent: number;
  readonly CreationTime: Date;
  readonly KmsKeyId: string;
  readonly ResourceARN: string;
  readonly Tags: [];
  readonly FileSystem: FileSystem;
  readonly DirectoryInformation: ActiveDirectoryBackupAttributes;
  readonly OwnerId: string;
  readonly SourceBackupId: string;
  readonly SourceBackupRegion: string;
  readonly ResourceType: string;
  readonly Volume: Volume;
}

interface BackupBeingCopied {
  readonly Message: string;
  readonly BackupId: string;
}

interface BackupFailureDetails {
  readonly Message: string;
}

interface BackupInProgress {
  readonly Message: string;
}

interface BackupNotFound {
  readonly Message: string;
}

interface BackupRestoring {
  readonly Message: string;
  readonly FileSystemId: string;
}

interface BadRequest {
  readonly Message: string;
}

interface CancelDataRepositoryTaskRequest {
  readonly TaskId: string;
}

interface CancelDataRepositoryTaskResponse {
  readonly Lifecycle: string;
  readonly TaskId: string;
}

interface CompletionReport {
  readonly Enabled: boolean;
  readonly Path: string;
  readonly Format: string;
  readonly Scope: string;
}

interface CopyBackupRequest {
  readonly ClientRequestToken: string;
  readonly SourceBackupId: string;
  readonly SourceRegion: string;
  readonly KmsKeyId: string;
  readonly CopyTags: boolean;
  readonly Tags: [];
}

interface CopyBackupResponse {
  readonly Backup: Backup;
}

interface CreateBackupRequest {
  readonly FileSystemId: string;
  readonly ClientRequestToken: string;
  readonly Tags: [];
  readonly VolumeId: string;
}

interface CreateBackupResponse {
  readonly Backup: Backup;
}

interface CreateDataRepositoryAssociationRequest {
  readonly FileSystemId: string;
  readonly FileSystemPath: string;
  readonly DataRepositoryPath: string;
  readonly BatchImportMetaDataOnCreate: boolean;
  readonly ImportedFileChunkSize: number;
  readonly S3: S3DataRepositoryConfiguration;
  readonly ClientRequestToken: string;
  readonly Tags: [];
}

interface CreateDataRepositoryAssociationResponse {
  readonly Association: DataRepositoryAssociation;
}

interface CreateDataRepositoryTaskRequest {
  readonly Type: string;
  readonly Paths: [];
  readonly FileSystemId: string;
  readonly Report: CompletionReport;
  readonly ClientRequestToken: string;
  readonly Tags: [];
}

interface CreateDataRepositoryTaskResponse {
  readonly DataRepositoryTask: DataRepositoryTask;
}

interface CreateFileSystemFromBackupRequest {
  readonly BackupId: string;
  readonly ClientRequestToken: string;
  readonly SubnetIds: [];
  readonly SecurityGroupIds: [];
  readonly Tags: [];
  readonly WindowsConfiguration: CreateFileSystemWindowsConfiguration;
  readonly LustreConfiguration: CreateFileSystemLustreConfiguration;
  readonly StorageType: string;
  readonly KmsKeyId: string;
  readonly FileSystemTypeVersion: string;
  readonly OpenZFSConfiguration: CreateFileSystemOpenZFSConfiguration;
}

interface CreateFileSystemFromBackupResponse {
  readonly FileSystem: FileSystem;
}

interface CreateFileSystemLustreConfiguration {
  readonly WeeklyMaintenanceStartTime: string;
  readonly ImportPath: string;
  readonly ExportPath: string;
  readonly ImportedFileChunkSize: number;
  readonly DeploymentType: string;
  readonly AutoImportPolicy: string;
  readonly PerUnitStorageThroughput: number;
  readonly DailyAutomaticBackupStartTime: string;
  readonly AutomaticBackupRetentionDays: number;
  readonly CopyTagsToBackups: boolean;
  readonly DriveCacheType: string;
  readonly DataCompressionType: string;
  readonly LogConfiguration: LustreLogCreateConfiguration;
}

interface CreateFileSystemOntapConfiguration {
  readonly AutomaticBackupRetentionDays: number;
  readonly DailyAutomaticBackupStartTime: string;
  readonly DeploymentType: string;
  readonly EndpointIpAddressRange: string;
  readonly FsxAdminPassword: string;
  readonly DiskIopsConfiguration: DiskIopsConfiguration;
  readonly PreferredSubnetId: string;
  readonly RouteTableIds: [];
  readonly ThroughputCapacity: number;
  readonly WeeklyMaintenanceStartTime: string;
}

interface CreateFileSystemOpenZFSConfiguration {
  readonly AutomaticBackupRetentionDays: number;
  readonly CopyTagsToBackups: boolean;
  readonly CopyTagsToVolumes: boolean;
  readonly DailyAutomaticBackupStartTime: string;
  readonly DeploymentType: string;
  readonly ThroughputCapacity: number;
  readonly WeeklyMaintenanceStartTime: string;
  readonly DiskIopsConfiguration: DiskIopsConfiguration;
  readonly RootVolumeConfiguration: OpenZFSCreateRootVolumeConfiguration;
}

interface CreateFileSystemRequest {
  readonly ClientRequestToken: string;
  readonly FileSystemType: string;
  readonly StorageCapacity: number;
  readonly StorageType: string;
  readonly SubnetIds: [];
  readonly SecurityGroupIds: [];
  readonly Tags: [];
  readonly KmsKeyId: string;
  readonly WindowsConfiguration: CreateFileSystemWindowsConfiguration;
  readonly LustreConfiguration: CreateFileSystemLustreConfiguration;
  readonly OntapConfiguration: CreateFileSystemOntapConfiguration;
  readonly FileSystemTypeVersion: string;
  readonly OpenZFSConfiguration: CreateFileSystemOpenZFSConfiguration;
}

interface CreateFileSystemResponse {
  readonly FileSystem: FileSystem;
}

interface CreateFileSystemWindowsConfiguration {
  readonly ActiveDirectoryId: string;
  readonly SelfManagedActiveDirectoryConfiguration: SelfManagedActiveDirectoryConfiguration;
  readonly DeploymentType: string;
  readonly PreferredSubnetId: string;
  readonly ThroughputCapacity: number;
  readonly WeeklyMaintenanceStartTime: string;
  readonly DailyAutomaticBackupStartTime: string;
  readonly AutomaticBackupRetentionDays: number;
  readonly CopyTagsToBackups: boolean;
  readonly Aliases: [];
  readonly AuditLogConfiguration: WindowsAuditLogCreateConfiguration;
}

interface CreateOntapVolumeConfiguration {
  readonly JunctionPath: string;
  readonly SecurityStyle: string;
  readonly SizeInMegabytes: number;
  readonly StorageEfficiencyEnabled: boolean;
  readonly StorageVirtualMachineId: string;
  readonly TieringPolicy: TieringPolicy;
}

interface CreateOpenZFSOriginSnapshotConfiguration {
  readonly SnapshotARN: string;
  readonly CopyStrategy: string;
}

interface CreateOpenZFSVolumeConfiguration {
  readonly ParentVolumeId: string;
  readonly StorageCapacityReservationGiB: number;
  readonly StorageCapacityQuotaGiB: number;
  readonly DataCompressionType: string;
  readonly CopyTagsToSnapshots: boolean;
  readonly OriginSnapshot: CreateOpenZFSOriginSnapshotConfiguration;
  readonly ReadOnly: boolean;
  readonly NfsExports: [];
  readonly UserAndGroupQuotas: [];
}

interface CreateSnapshotRequest {
  readonly ClientRequestToken: string;
  readonly Name: string;
  readonly VolumeId: string;
  readonly Tags: [];
}

interface CreateSnapshotResponse {
  readonly Snapshot: Snapshot;
}

interface CreateStorageVirtualMachineRequest {
  readonly ActiveDirectoryConfiguration: CreateSvmActiveDirectoryConfiguration;
  readonly ClientRequestToken: string;
  readonly FileSystemId: string;
  readonly Name: string;
  readonly SvmAdminPassword: string;
  readonly Tags: [];
  readonly RootVolumeSecurityStyle: string;
}

interface CreateStorageVirtualMachineResponse {
  readonly StorageVirtualMachine: StorageVirtualMachine;
}

interface CreateSvmActiveDirectoryConfiguration {
  readonly NetBiosName: string;
  readonly SelfManagedActiveDirectoryConfiguration: SelfManagedActiveDirectoryConfiguration;
}

interface CreateVolumeFromBackupRequest {
  readonly BackupId: string;
  readonly ClientRequestToken: string;
  readonly Name: string;
  readonly OntapConfiguration: CreateOntapVolumeConfiguration;
  readonly Tags: [];
}

interface CreateVolumeFromBackupResponse {
  readonly Volume: Volume;
}

interface CreateVolumeRequest {
  readonly ClientRequestToken: string;
  readonly VolumeType: string;
  readonly Name: string;
  readonly OntapConfiguration: CreateOntapVolumeConfiguration;
  readonly Tags: [];
  readonly OpenZFSConfiguration: CreateOpenZFSVolumeConfiguration;
}

interface CreateVolumeResponse {
  readonly Volume: Volume;
}

interface DataRepositoryAssociation {
  readonly AssociationId: string;
  readonly ResourceARN: string;
  readonly FileSystemId: string;
  readonly Lifecycle: string;
  readonly FailureDetails: DataRepositoryFailureDetails;
  readonly FileSystemPath: string;
  readonly DataRepositoryPath: string;
  readonly BatchImportMetaDataOnCreate: boolean;
  readonly ImportedFileChunkSize: number;
  readonly S3: S3DataRepositoryConfiguration;
  readonly Tags: [];
  readonly CreationTime: Date;
}

interface DataRepositoryAssociationNotFound {
  readonly Message: string;
}

interface DataRepositoryConfiguration {
  readonly Lifecycle: string;
  readonly ImportPath: string;
  readonly ExportPath: string;
  readonly ImportedFileChunkSize: number;
  readonly AutoImportPolicy: string;
  readonly FailureDetails: DataRepositoryFailureDetails;
}

interface DataRepositoryFailureDetails {
  readonly Message: string;
}

interface DataRepositoryTask {
  readonly TaskId: string;
  readonly Lifecycle: string;
  readonly Type: string;
  readonly CreationTime: Date;
  readonly StartTime: Date;
  readonly EndTime: Date;
  readonly ResourceARN: string;
  readonly Tags: [];
  readonly FileSystemId: string;
  readonly Paths: [];
  readonly FailureDetails: DataRepositoryTaskFailureDetails;
  readonly Status: DataRepositoryTaskStatus;
  readonly Report: CompletionReport;
}

interface DataRepositoryTaskEnded {
  readonly Message: string;
}

interface DataRepositoryTaskExecuting {
  readonly Message: string;
}

interface DataRepositoryTaskFailureDetails {
  readonly Message: string;
}

interface DataRepositoryTaskFilter {
  readonly Name: string;
  readonly Values: [];
}

interface DataRepositoryTaskNotFound {
  readonly Message: string;
}

interface DataRepositoryTaskStatus {
  readonly TotalCount: number;
  readonly SucceededCount: number;
  readonly FailedCount: number;
  readonly LastUpdatedTime: Date;
}

interface DeleteBackupRequest {
  readonly BackupId: string;
  readonly ClientRequestToken: string;
}

interface DeleteBackupResponse {
  readonly BackupId: string;
  readonly Lifecycle: string;
}

interface DeleteDataRepositoryAssociationRequest {
  readonly AssociationId: string;
  readonly ClientRequestToken: string;
  readonly DeleteDataInFileSystem: boolean;
}

interface DeleteDataRepositoryAssociationResponse {
  readonly AssociationId: string;
  readonly Lifecycle: string;
  readonly DeleteDataInFileSystem: boolean;
}

interface DeleteFileSystemLustreConfiguration {
  readonly SkipFinalBackup: boolean;
  readonly FinalBackupTags: [];
}

interface DeleteFileSystemLustreResponse {
  readonly FinalBackupId: string;
  readonly FinalBackupTags: [];
}

interface DeleteFileSystemOpenZFSConfiguration {
  readonly SkipFinalBackup: boolean;
  readonly FinalBackupTags: [];
}

interface DeleteFileSystemOpenZFSResponse {
  readonly FinalBackupId: string;
  readonly FinalBackupTags: [];
}

interface DeleteFileSystemRequest {
  readonly FileSystemId: string;
  readonly ClientRequestToken: string;
  readonly WindowsConfiguration: DeleteFileSystemWindowsConfiguration;
  readonly LustreConfiguration: DeleteFileSystemLustreConfiguration;
  readonly OpenZFSConfiguration: DeleteFileSystemOpenZFSConfiguration;
}

interface DeleteFileSystemResponse {
  readonly FileSystemId: string;
  readonly Lifecycle: string;
  readonly WindowsResponse: DeleteFileSystemWindowsResponse;
  readonly LustreResponse: DeleteFileSystemLustreResponse;
  readonly OpenZFSResponse: DeleteFileSystemOpenZFSResponse;
}

interface DeleteFileSystemWindowsConfiguration {
  readonly SkipFinalBackup: boolean;
  readonly FinalBackupTags: [];
}

interface DeleteFileSystemWindowsResponse {
  readonly FinalBackupId: string;
  readonly FinalBackupTags: [];
}

interface DeleteSnapshotRequest {
  readonly ClientRequestToken: string;
  readonly SnapshotId: string;
}

interface DeleteSnapshotResponse {
  readonly SnapshotId: string;
  readonly Lifecycle: string;
}

interface DeleteStorageVirtualMachineRequest {
  readonly ClientRequestToken: string;
  readonly StorageVirtualMachineId: string;
}

interface DeleteStorageVirtualMachineResponse {
  readonly StorageVirtualMachineId: string;
  readonly Lifecycle: string;
}

interface DeleteVolumeOntapConfiguration {
  readonly SkipFinalBackup: boolean;
  readonly FinalBackupTags: [];
}

interface DeleteVolumeOntapResponse {
  readonly FinalBackupId: string;
  readonly FinalBackupTags: [];
}

interface DeleteVolumeOpenZFSConfiguration {
  readonly Options: [];
}

interface DeleteVolumeRequest {
  readonly ClientRequestToken: string;
  readonly VolumeId: string;
  readonly OntapConfiguration: DeleteVolumeOntapConfiguration;
  readonly OpenZFSConfiguration: DeleteVolumeOpenZFSConfiguration;
}

interface DeleteVolumeResponse {
  readonly VolumeId: string;
  readonly Lifecycle: string;
  readonly OntapResponse: DeleteVolumeOntapResponse;
}

interface DescribeBackupsRequest {
  readonly BackupIds: [];
  readonly Filters: [];
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface DescribeBackupsResponse {
  readonly Backups: [];
  readonly NextToken: string;
}

interface DescribeDataRepositoryAssociationsRequest {
  readonly AssociationIds: [];
  readonly Filters: [];
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface DescribeDataRepositoryAssociationsResponse {
  readonly Associations: [];
  readonly NextToken: string;
}

interface DescribeDataRepositoryTasksRequest {
  readonly TaskIds: [];
  readonly Filters: [];
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface DescribeDataRepositoryTasksResponse {
  readonly DataRepositoryTasks: [];
  readonly NextToken: string;
}

interface DescribeFileSystemAliasesRequest {
  readonly ClientRequestToken: string;
  readonly FileSystemId: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface DescribeFileSystemAliasesResponse {
  readonly Aliases: [];
  readonly NextToken: string;
}

interface DescribeFileSystemsRequest {
  readonly FileSystemIds: [];
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface DescribeFileSystemsResponse {
  readonly FileSystems: [];
  readonly NextToken: string;
}

interface DescribeSnapshotsRequest {
  readonly SnapshotIds: [];
  readonly Filters: [];
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface DescribeSnapshotsResponse {
  readonly Snapshots: [];
  readonly NextToken: string;
}

interface DescribeStorageVirtualMachinesRequest {
  readonly StorageVirtualMachineIds: [];
  readonly Filters: [];
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface DescribeStorageVirtualMachinesResponse {
  readonly StorageVirtualMachines: [];
  readonly NextToken: string;
}

interface DescribeVolumesRequest {
  readonly VolumeIds: [];
  readonly Filters: [];
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface DescribeVolumesResponse {
  readonly Volumes: [];
  readonly NextToken: string;
}

interface DisassociateFileSystemAliasesRequest {
  readonly ClientRequestToken: string;
  readonly FileSystemId: string;
  readonly Aliases: [];
}

interface DisassociateFileSystemAliasesResponse {
  readonly Aliases: [];
}

interface DiskIopsConfiguration {
  readonly Mode: string;
  readonly Iops: number;
}

interface FileSystem {
  readonly OwnerId: string;
  readonly CreationTime: Date;
  readonly FileSystemId: string;
  readonly FileSystemType: string;
  readonly Lifecycle: string;
  readonly FailureDetails: FileSystemFailureDetails;
  readonly StorageCapacity: number;
  readonly StorageType: string;
  readonly VpcId: string;
  readonly SubnetIds: [];
  readonly NetworkInterfaceIds: [];
  readonly DNSName: string;
  readonly KmsKeyId: string;
  readonly ResourceARN: string;
  readonly Tags: [];
  readonly WindowsConfiguration: WindowsFileSystemConfiguration;
  readonly LustreConfiguration: LustreFileSystemConfiguration;
  readonly AdministrativeActions: [];
  readonly OntapConfiguration: OntapFileSystemConfiguration;
  readonly FileSystemTypeVersion: string;
  readonly OpenZFSConfiguration: OpenZFSFileSystemConfiguration;
}

interface FileSystemEndpoint {
  readonly DNSName: string;
  readonly IpAddresses: [];
}

interface FileSystemEndpoints {
  readonly Intercluster: FileSystemEndpoint;
  readonly Management: FileSystemEndpoint;
}

interface FileSystemFailureDetails {
  readonly Message: string;
}

interface FileSystemNotFound {
  readonly Message: string;
}

interface Filter {
  readonly Name: string;
  readonly Values: [];
}

interface IncompatibleParameterError {
  readonly Parameter: string;
  readonly Message: string;
}

interface IncompatibleRegionForMultiAZ {
  readonly Message: string;
}

interface InternalServerError {
  readonly Message: string;
}

interface InvalidDataRepositoryType {
  readonly Message: string;
}

interface InvalidDestinationKmsKey {
  readonly Message: string;
}

interface InvalidExportPath {
  readonly Message: string;
}

interface InvalidImportPath {
  readonly Message: string;
}

interface InvalidNetworkSettings {
  readonly Message: string;
  readonly InvalidSubnetId: string;
  readonly InvalidSecurityGroupId: string;
  readonly InvalidRouteTableId: string;
}

interface InvalidPerUnitStorageThroughput {
  readonly Message: string;
}

interface InvalidRegion {
  readonly Message: string;
}

interface InvalidSourceKmsKey {
  readonly Message: string;
}

interface LifecycleTransitionReason {
  readonly Message: string;
}

interface ListTagsForResourceRequest {
  readonly ResourceARN: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface ListTagsForResourceResponse {
  readonly Tags: [];
  readonly NextToken: string;
}

interface LustreFileSystemConfiguration {
  readonly WeeklyMaintenanceStartTime: string;
  readonly DataRepositoryConfiguration: DataRepositoryConfiguration;
  readonly DeploymentType: string;
  readonly PerUnitStorageThroughput: number;
  readonly MountName: string;
  readonly DailyAutomaticBackupStartTime: string;
  readonly AutomaticBackupRetentionDays: number;
  readonly CopyTagsToBackups: boolean;
  readonly DriveCacheType: string;
  readonly DataCompressionType: string;
  readonly LogConfiguration: LustreLogConfiguration;
}

interface LustreLogConfiguration {
  readonly Level: string;
  readonly Destination: string;
}

interface LustreLogCreateConfiguration {
  readonly Level: string;
  readonly Destination: string;
}

interface MissingFileSystemConfiguration {
  readonly Message: string;
}

interface MissingVolumeConfiguration {
  readonly Message: string;
}

interface NotServiceResourceError {
  readonly ResourceARN: string;
  readonly Message: string;
}

interface OntapFileSystemConfiguration {
  readonly AutomaticBackupRetentionDays: number;
  readonly DailyAutomaticBackupStartTime: string;
  readonly DeploymentType: string;
  readonly EndpointIpAddressRange: string;
  readonly Endpoints: FileSystemEndpoints;
  readonly DiskIopsConfiguration: DiskIopsConfiguration;
  readonly PreferredSubnetId: string;
  readonly RouteTableIds: [];
  readonly ThroughputCapacity: number;
  readonly WeeklyMaintenanceStartTime: string;
}

interface OntapVolumeConfiguration {
  readonly FlexCacheEndpointType: string;
  readonly JunctionPath: string;
  readonly SecurityStyle: string;
  readonly SizeInMegabytes: number;
  readonly StorageEfficiencyEnabled: boolean;
  readonly StorageVirtualMachineId: string;
  readonly StorageVirtualMachineRoot: boolean;
  readonly TieringPolicy: TieringPolicy;
  readonly UUID: string;
  readonly OntapVolumeType: string;
}

interface OpenZFSClientConfiguration {
  readonly Clients: string;
  readonly Options: [];
}

interface OpenZFSCreateRootVolumeConfiguration {
  readonly DataCompressionType: string;
  readonly NfsExports: [];
  readonly UserAndGroupQuotas: [];
  readonly CopyTagsToSnapshots: boolean;
  readonly ReadOnly: boolean;
}

interface OpenZFSFileSystemConfiguration {
  readonly AutomaticBackupRetentionDays: number;
  readonly CopyTagsToBackups: boolean;
  readonly CopyTagsToVolumes: boolean;
  readonly DailyAutomaticBackupStartTime: string;
  readonly DeploymentType: string;
  readonly ThroughputCapacity: number;
  readonly WeeklyMaintenanceStartTime: string;
  readonly DiskIopsConfiguration: DiskIopsConfiguration;
  readonly RootVolumeId: string;
}

interface OpenZFSNfsExport {
  readonly ClientConfigurations: [];
}

interface OpenZFSOriginSnapshotConfiguration {
  readonly SnapshotARN: string;
  readonly CopyStrategy: string;
}

interface OpenZFSUserOrGroupQuota {
  readonly Type: string;
  readonly Id: number;
  readonly StorageCapacityQuotaGiB: number;
}

interface OpenZFSVolumeConfiguration {
  readonly ParentVolumeId: string;
  readonly VolumePath: string;
  readonly StorageCapacityReservationGiB: number;
  readonly StorageCapacityQuotaGiB: number;
  readonly DataCompressionType: string;
  readonly CopyTagsToSnapshots: boolean;
  readonly OriginSnapshot: OpenZFSOriginSnapshotConfiguration;
  readonly ReadOnly: boolean;
  readonly NfsExports: [];
  readonly UserAndGroupQuotas: [];
}

interface ReleaseFileSystemNfsV3LocksRequest {
  readonly FileSystemId: string;
  readonly ClientRequestToken: string;
}

interface ReleaseFileSystemNfsV3LocksResponse {
  readonly FileSystem: FileSystem;
}

interface ResourceDoesNotSupportTagging {
  readonly ResourceARN: string;
  readonly Message: string;
}

interface ResourceNotFound {
  readonly ResourceARN: string;
  readonly Message: string;
}

interface RestoreVolumeFromSnapshotRequest {
  readonly ClientRequestToken: string;
  readonly VolumeId: string;
  readonly SnapshotId: string;
  readonly Options: [];
}

interface RestoreVolumeFromSnapshotResponse {
  readonly VolumeId: string;
  readonly Lifecycle: string;
}

interface S3DataRepositoryConfiguration {
  readonly AutoImportPolicy: AutoImportPolicy;
  readonly AutoExportPolicy: AutoExportPolicy;
}

interface SelfManagedActiveDirectoryAttributes {
  readonly DomainName: string;
  readonly OrganizationalUnitDistinguishedName: string;
  readonly FileSystemAdministratorsGroup: string;
  readonly UserName: string;
  readonly DnsIps: [];
}

interface SelfManagedActiveDirectoryConfiguration {
  readonly DomainName: string;
  readonly OrganizationalUnitDistinguishedName: string;
  readonly FileSystemAdministratorsGroup: string;
  readonly UserName: string;
  readonly Password: string;
  readonly DnsIps: [];
}

interface SelfManagedActiveDirectoryConfigurationUpdates {
  readonly UserName: string;
  readonly Password: string;
  readonly DnsIps: [];
}

interface ServiceLimitExceeded {
  readonly Limit: string;
  readonly Message: string;
}

interface Snapshot {
  readonly ResourceARN: string;
  readonly SnapshotId: string;
  readonly Name: string;
  readonly VolumeId: string;
  readonly CreationTime: Date;
  readonly Lifecycle: string;
  readonly Tags: [];
  readonly AdministrativeActions: [];
}

interface SnapshotFilter {
  readonly Name: string;
  readonly Values: [];
}

interface SnapshotNotFound {
  readonly Message: string;
}

interface SourceBackupUnavailable {
  readonly Message: string;
  readonly BackupId: string;
}

interface StorageVirtualMachine {
  readonly ActiveDirectoryConfiguration: SvmActiveDirectoryConfiguration;
  readonly CreationTime: Date;
  readonly Endpoints: SvmEndpoints;
  readonly FileSystemId: string;
  readonly Lifecycle: string;
  readonly Name: string;
  readonly ResourceARN: string;
  readonly StorageVirtualMachineId: string;
  readonly Subtype: string;
  readonly UUID: string;
  readonly Tags: [];
  readonly LifecycleTransitionReason: LifecycleTransitionReason;
  readonly RootVolumeSecurityStyle: string;
}

interface StorageVirtualMachineFilter {
  readonly Name: string;
  readonly Values: [];
}

interface StorageVirtualMachineNotFound {
  readonly Message: string;
}

interface SvmActiveDirectoryConfiguration {
  readonly NetBiosName: string;
  readonly SelfManagedActiveDirectoryConfiguration: SelfManagedActiveDirectoryAttributes;
}

interface SvmEndpoint {
  readonly DNSName: string;
  readonly IpAddresses: [];
}

interface SvmEndpoints {
  readonly Iscsi: SvmEndpoint;
  readonly Management: SvmEndpoint;
  readonly Nfs: SvmEndpoint;
  readonly Smb: SvmEndpoint;
}

interface Tag {
  readonly Key: string;
  readonly Value: string;
}

interface TagResourceRequest {
  readonly ResourceARN: string;
  readonly Tags: [];
}

interface TagResourceResponse {
}

interface TieringPolicy {
  readonly CoolingPeriod: number;
  readonly Name: string;
}

interface UnsupportedOperation {
  readonly Message: string;
}

interface UntagResourceRequest {
  readonly ResourceARN: string;
  readonly TagKeys: [];
}

interface UntagResourceResponse {
}

interface UpdateDataRepositoryAssociationRequest {
  readonly AssociationId: string;
  readonly ClientRequestToken: string;
  readonly ImportedFileChunkSize: number;
  readonly S3: S3DataRepositoryConfiguration;
}

interface UpdateDataRepositoryAssociationResponse {
  readonly Association: DataRepositoryAssociation;
}

interface UpdateFileSystemLustreConfiguration {
  readonly WeeklyMaintenanceStartTime: string;
  readonly DailyAutomaticBackupStartTime: string;
  readonly AutomaticBackupRetentionDays: number;
  readonly AutoImportPolicy: string;
  readonly DataCompressionType: string;
  readonly LogConfiguration: LustreLogCreateConfiguration;
}

interface UpdateFileSystemOntapConfiguration {
  readonly AutomaticBackupRetentionDays: number;
  readonly DailyAutomaticBackupStartTime: string;
  readonly FsxAdminPassword: string;
  readonly WeeklyMaintenanceStartTime: string;
}

interface UpdateFileSystemOpenZFSConfiguration {
  readonly AutomaticBackupRetentionDays: number;
  readonly CopyTagsToBackups: boolean;
  readonly CopyTagsToVolumes: boolean;
  readonly DailyAutomaticBackupStartTime: string;
  readonly ThroughputCapacity: number;
  readonly WeeklyMaintenanceStartTime: string;
  readonly DiskIopsConfiguration: DiskIopsConfiguration;
}

interface UpdateFileSystemRequest {
  readonly FileSystemId: string;
  readonly ClientRequestToken: string;
  readonly StorageCapacity: number;
  readonly WindowsConfiguration: UpdateFileSystemWindowsConfiguration;
  readonly LustreConfiguration: UpdateFileSystemLustreConfiguration;
  readonly OntapConfiguration: UpdateFileSystemOntapConfiguration;
  readonly OpenZFSConfiguration: UpdateFileSystemOpenZFSConfiguration;
}

interface UpdateFileSystemResponse {
  readonly FileSystem: FileSystem;
}

interface UpdateFileSystemWindowsConfiguration {
  readonly WeeklyMaintenanceStartTime: string;
  readonly DailyAutomaticBackupStartTime: string;
  readonly AutomaticBackupRetentionDays: number;
  readonly ThroughputCapacity: number;
  readonly SelfManagedActiveDirectoryConfiguration: SelfManagedActiveDirectoryConfigurationUpdates;
  readonly AuditLogConfiguration: WindowsAuditLogCreateConfiguration;
}

interface UpdateOntapVolumeConfiguration {
  readonly JunctionPath: string;
  readonly SecurityStyle: string;
  readonly SizeInMegabytes: number;
  readonly StorageEfficiencyEnabled: boolean;
  readonly TieringPolicy: TieringPolicy;
}

interface UpdateOpenZFSVolumeConfiguration {
  readonly StorageCapacityReservationGiB: number;
  readonly StorageCapacityQuotaGiB: number;
  readonly DataCompressionType: string;
  readonly NfsExports: [];
  readonly UserAndGroupQuotas: [];
  readonly ReadOnly: boolean;
}

interface UpdateSnapshotRequest {
  readonly ClientRequestToken: string;
  readonly Name: string;
  readonly SnapshotId: string;
}

interface UpdateSnapshotResponse {
  readonly Snapshot: Snapshot;
}

interface UpdateStorageVirtualMachineRequest {
  readonly ActiveDirectoryConfiguration: UpdateSvmActiveDirectoryConfiguration;
  readonly ClientRequestToken: string;
  readonly StorageVirtualMachineId: string;
  readonly SvmAdminPassword: string;
}

interface UpdateStorageVirtualMachineResponse {
  readonly StorageVirtualMachine: StorageVirtualMachine;
}

interface UpdateSvmActiveDirectoryConfiguration {
  readonly SelfManagedActiveDirectoryConfiguration: SelfManagedActiveDirectoryConfigurationUpdates;
}

interface UpdateVolumeRequest {
  readonly ClientRequestToken: string;
  readonly VolumeId: string;
  readonly OntapConfiguration: UpdateOntapVolumeConfiguration;
  readonly Name: string;
  readonly OpenZFSConfiguration: UpdateOpenZFSVolumeConfiguration;
}

interface UpdateVolumeResponse {
  readonly Volume: Volume;
}

interface Volume {
  readonly CreationTime: Date;
  readonly FileSystemId: string;
  readonly Lifecycle: string;
  readonly Name: string;
  readonly OntapConfiguration: OntapVolumeConfiguration;
  readonly ResourceARN: string;
  readonly Tags: [];
  readonly VolumeId: string;
  readonly VolumeType: string;
  readonly LifecycleTransitionReason: LifecycleTransitionReason;
  readonly AdministrativeActions: [];
  readonly OpenZFSConfiguration: OpenZFSVolumeConfiguration;
}

interface VolumeFilter {
  readonly Name: string;
  readonly Values: [];
}

interface VolumeNotFound {
  readonly Message: string;
}

interface WindowsAuditLogConfiguration {
  readonly FileAccessAuditLogLevel: string;
  readonly FileShareAccessAuditLogLevel: string;
  readonly AuditLogDestination: string;
}

interface WindowsAuditLogCreateConfiguration {
  readonly FileAccessAuditLogLevel: string;
  readonly FileShareAccessAuditLogLevel: string;
  readonly AuditLogDestination: string;
}

interface WindowsFileSystemConfiguration {
  readonly ActiveDirectoryId: string;
  readonly SelfManagedActiveDirectoryConfiguration: SelfManagedActiveDirectoryAttributes;
  readonly DeploymentType: string;
  readonly RemoteAdministrationEndpoint: string;
  readonly PreferredSubnetId: string;
  readonly PreferredFileServerIp: string;
  readonly ThroughputCapacity: number;
  readonly MaintenanceOperationsInProgress: [];
  readonly WeeklyMaintenanceStartTime: string;
  readonly DailyAutomaticBackupStartTime: string;
  readonly AutomaticBackupRetentionDays: number;
  readonly CopyTagsToBackups: boolean;
  readonly Aliases: [];
  readonly AuditLogConfiguration: WindowsAuditLogConfiguration;
}

