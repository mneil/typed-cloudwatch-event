/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface CreateBroker {
  readonly AuthenticationStrategy?: string;
  readonly AutoMinorVersionUpgrade: boolean;
  readonly BrokerName: string;
  readonly Configuration?: ConfigurationId;
  readonly CreatorRequestId?: string;
  readonly DeploymentMode: string;
  readonly EncryptionOptions?: EncryptionOptions;
  readonly EngineType: string;
  readonly EngineVersion: string;
  readonly HostInstanceType: string;
  readonly LdapServerMetadata?: LdapServerMetadataInput;
  readonly Logs?: Logs;
  readonly MaintenanceWindowStartTime?: WeeklyStartTime;
  readonly PubliclyAccessible: boolean;
  readonly SecurityGroups?: [];
  readonly StorageType?: string;
  readonly SubnetIds?: [];
  readonly Tags?: {[key: string]: any};
  readonly Users: [];
}

export interface CreateConfiguration {
  readonly AuthenticationStrategy?: string;
  readonly EngineType: string;
  readonly EngineVersion: string;
  readonly Name: string;
  readonly Tags?: {[key: string]: any};
}

export interface CreateTags {
  readonly ResourceArn: string;
  readonly Tags?: {[key: string]: any};
}

export interface CreateUser {
  readonly BrokerId: string;
  readonly ConsoleAccess?: boolean;
  readonly Groups?: [];
  readonly Password: string;
  readonly Username: string;
}

export interface DeleteBroker {
  readonly BrokerId: string;
}

export interface DeleteTags {
  readonly ResourceArn: string;
  readonly TagKeys: [];
}

export interface DeleteUser {
  readonly BrokerId: string;
  readonly Username: string;
}

export interface DescribeBroker {
  readonly BrokerId: string;
}

export interface DescribeBrokerEngineTypes {
  readonly EngineType?: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface DescribeBrokerInstanceOptions {
  readonly EngineType?: string;
  readonly HostInstanceType?: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
  readonly StorageType?: string;
}

export interface DescribeConfiguration {
  readonly ConfigurationId: string;
}

export interface DescribeConfigurationRevision {
  readonly ConfigurationId: string;
  readonly ConfigurationRevision: string;
}

export interface DescribeUser {
  readonly BrokerId: string;
  readonly Username: string;
}

export interface ListBrokers {
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface ListConfigurationRevisions {
  readonly ConfigurationId: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface ListConfigurations {
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface ListTags {
  readonly ResourceArn: string;
}

export interface ListUsers {
  readonly BrokerId: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface RebootBroker {
  readonly BrokerId: string;
}

export interface UpdateBroker {
  readonly AuthenticationStrategy?: string;
  readonly AutoMinorVersionUpgrade?: boolean;
  readonly BrokerId: string;
  readonly Configuration?: ConfigurationId;
  readonly EngineVersion?: string;
  readonly HostInstanceType?: string;
  readonly LdapServerMetadata?: LdapServerMetadataInput;
  readonly Logs?: Logs;
  readonly MaintenanceWindowStartTime?: WeeklyStartTime;
  readonly SecurityGroups?: [];
}

export interface UpdateConfiguration {
  readonly ConfigurationId: string;
  readonly Data: string;
  readonly Description?: string;
}

export interface UpdateUser {
  readonly BrokerId: string;
  readonly ConsoleAccess?: boolean;
  readonly Groups?: [];
  readonly Password?: string;
  readonly Username: string;
}

export interface AvailabilityZone {
  readonly Name?: string;
}

export interface BadRequestException {
  readonly ErrorAttribute?: string;
  readonly Message?: string;
}

export interface BrokerEngineType {
  readonly EngineType?: string;
  readonly EngineVersions?: [];
}

export interface BrokerEngineTypeOutput {
  readonly BrokerEngineTypes?: [];
  readonly MaxResults: number;
  readonly NextToken?: string;
}

export interface BrokerInstance {
  readonly ConsoleURL?: string;
  readonly Endpoints?: [];
  readonly IpAddress?: string;
}

export interface BrokerInstanceOption {
  readonly AvailabilityZones?: [];
  readonly EngineType?: string;
  readonly HostInstanceType?: string;
  readonly StorageType?: string;
  readonly SupportedDeploymentModes?: [];
  readonly SupportedEngineVersions?: [];
}

export interface BrokerInstanceOptionsOutput {
  readonly BrokerInstanceOptions?: [];
  readonly MaxResults: number;
  readonly NextToken?: string;
}

export interface BrokerSummary {
  readonly BrokerArn?: string;
  readonly BrokerId?: string;
  readonly BrokerName?: string;
  readonly BrokerState?: string;
  readonly Created?: Date;
  readonly DeploymentMode: string;
  readonly EngineType: string;
  readonly HostInstanceType?: string;
}

export interface Configuration {
  readonly Arn: string;
  readonly AuthenticationStrategy: string;
  readonly Created: Date;
  readonly Description: string;
  readonly EngineType: string;
  readonly EngineVersion: string;
  readonly Id: string;
  readonly LatestRevision: ConfigurationRevision;
  readonly Name: string;
  readonly Tags?: {[key: string]: any};
}

export interface ConfigurationId {
  readonly Id: string;
  readonly Revision?: number;
}

export interface ConfigurationRevision {
  readonly Created: Date;
  readonly Description?: string;
  readonly Revision: number;
}

export interface Configurations {
  readonly Current?: ConfigurationId;
  readonly History?: [];
  readonly Pending?: ConfigurationId;
}

export interface ConflictException {
  readonly ErrorAttribute?: string;
  readonly Message?: string;
}

export interface CreateBrokerInput {
  readonly AuthenticationStrategy?: string;
  readonly AutoMinorVersionUpgrade: boolean;
  readonly BrokerName: string;
  readonly Configuration?: ConfigurationId;
  readonly CreatorRequestId?: string;
  readonly DeploymentMode: string;
  readonly EncryptionOptions?: EncryptionOptions;
  readonly EngineType: string;
  readonly EngineVersion: string;
  readonly HostInstanceType: string;
  readonly LdapServerMetadata?: LdapServerMetadataInput;
  readonly Logs?: Logs;
  readonly MaintenanceWindowStartTime?: WeeklyStartTime;
  readonly PubliclyAccessible: boolean;
  readonly SecurityGroups?: [];
  readonly StorageType?: string;
  readonly SubnetIds?: [];
  readonly Tags?: {[key: string]: any};
  readonly Users: [];
}

export interface CreateBrokerOutput {
  readonly BrokerArn?: string;
  readonly BrokerId?: string;
}

export interface CreateBrokerRequest {
  readonly AuthenticationStrategy?: string;
  readonly AutoMinorVersionUpgrade: boolean;
  readonly BrokerName: string;
  readonly Configuration?: ConfigurationId;
  readonly CreatorRequestId?: string;
  readonly DeploymentMode: string;
  readonly EncryptionOptions?: EncryptionOptions;
  readonly EngineType: string;
  readonly EngineVersion: string;
  readonly HostInstanceType: string;
  readonly LdapServerMetadata?: LdapServerMetadataInput;
  readonly Logs?: Logs;
  readonly MaintenanceWindowStartTime?: WeeklyStartTime;
  readonly PubliclyAccessible: boolean;
  readonly SecurityGroups?: [];
  readonly StorageType?: string;
  readonly SubnetIds?: [];
  readonly Tags?: {[key: string]: any};
  readonly Users: [];
}

export interface CreateBrokerResponse {
  readonly BrokerArn?: string;
  readonly BrokerId?: string;
}

export interface CreateConfigurationInput {
  readonly AuthenticationStrategy?: string;
  readonly EngineType: string;
  readonly EngineVersion: string;
  readonly Name: string;
  readonly Tags?: {[key: string]: any};
}

export interface CreateConfigurationOutput {
  readonly Arn: string;
  readonly AuthenticationStrategy: string;
  readonly Created: Date;
  readonly Id: string;
  readonly LatestRevision?: ConfigurationRevision;
  readonly Name: string;
}

export interface CreateConfigurationRequest {
  readonly AuthenticationStrategy?: string;
  readonly EngineType: string;
  readonly EngineVersion: string;
  readonly Name: string;
  readonly Tags?: {[key: string]: any};
}

export interface CreateConfigurationResponse {
  readonly Arn?: string;
  readonly AuthenticationStrategy?: string;
  readonly Created?: Date;
  readonly Id?: string;
  readonly LatestRevision?: ConfigurationRevision;
  readonly Name?: string;
}

export interface CreateTagsRequest {
  readonly ResourceArn: string;
  readonly Tags?: {[key: string]: any};
}

export interface CreateUserInput {
  readonly ConsoleAccess?: boolean;
  readonly Groups?: [];
  readonly Password: string;
}

export interface CreateUserRequest {
  readonly BrokerId: string;
  readonly ConsoleAccess?: boolean;
  readonly Groups?: [];
  readonly Password: string;
  readonly Username: string;
}

export interface CreateUserResponse {
}

export interface DeleteBrokerOutput {
  readonly BrokerId?: string;
}

export interface DeleteBrokerRequest {
  readonly BrokerId: string;
}

export interface DeleteBrokerResponse {
  readonly BrokerId?: string;
}

export interface DeleteTagsRequest {
  readonly ResourceArn: string;
  readonly TagKeys: [];
}

export interface DeleteUserRequest {
  readonly BrokerId: string;
  readonly Username: string;
}

export interface DeleteUserResponse {
}

export interface DescribeBrokerEngineTypesRequest {
  readonly EngineType?: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface DescribeBrokerEngineTypesResponse {
  readonly BrokerEngineTypes?: [];
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface DescribeBrokerInstanceOptionsRequest {
  readonly EngineType?: string;
  readonly HostInstanceType?: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
  readonly StorageType?: string;
}

export interface DescribeBrokerInstanceOptionsResponse {
  readonly BrokerInstanceOptions?: [];
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface DescribeBrokerOutput {
  readonly AuthenticationStrategy?: string;
  readonly AutoMinorVersionUpgrade: boolean;
  readonly BrokerArn?: string;
  readonly BrokerId?: string;
  readonly BrokerInstances?: [];
  readonly BrokerName?: string;
  readonly BrokerState?: string;
  readonly Configurations?: Configurations;
  readonly Created?: Date;
  readonly DeploymentMode: string;
  readonly EncryptionOptions?: EncryptionOptions;
  readonly EngineType: string;
  readonly EngineVersion?: string;
  readonly HostInstanceType?: string;
  readonly LdapServerMetadata?: LdapServerMetadataOutput;
  readonly Logs?: LogsSummary;
  readonly MaintenanceWindowStartTime?: WeeklyStartTime;
  readonly PendingAuthenticationStrategy?: string;
  readonly PendingEngineVersion?: string;
  readonly PendingHostInstanceType?: string;
  readonly PendingLdapServerMetadata?: LdapServerMetadataOutput;
  readonly PendingSecurityGroups?: [];
  readonly PubliclyAccessible: boolean;
  readonly SecurityGroups?: [];
  readonly StorageType?: string;
  readonly SubnetIds?: [];
  readonly Tags?: {[key: string]: any};
  readonly Users?: [];
}

export interface DescribeBrokerRequest {
  readonly BrokerId: string;
}

export interface DescribeBrokerResponse {
  readonly AuthenticationStrategy?: string;
  readonly AutoMinorVersionUpgrade?: boolean;
  readonly BrokerArn?: string;
  readonly BrokerId?: string;
  readonly BrokerInstances?: [];
  readonly BrokerName?: string;
  readonly BrokerState?: string;
  readonly Configurations?: Configurations;
  readonly Created?: Date;
  readonly DeploymentMode?: string;
  readonly EncryptionOptions?: EncryptionOptions;
  readonly EngineType?: string;
  readonly EngineVersion?: string;
  readonly HostInstanceType?: string;
  readonly LdapServerMetadata?: LdapServerMetadataOutput;
  readonly Logs?: LogsSummary;
  readonly MaintenanceWindowStartTime?: WeeklyStartTime;
  readonly PendingAuthenticationStrategy?: string;
  readonly PendingEngineVersion?: string;
  readonly PendingHostInstanceType?: string;
  readonly PendingLdapServerMetadata?: LdapServerMetadataOutput;
  readonly PendingSecurityGroups?: [];
  readonly PubliclyAccessible?: boolean;
  readonly SecurityGroups?: [];
  readonly StorageType?: string;
  readonly SubnetIds?: [];
  readonly Tags?: {[key: string]: any};
  readonly Users?: [];
}

export interface DescribeConfigurationRequest {
  readonly ConfigurationId: string;
}

export interface DescribeConfigurationResponse {
  readonly Arn?: string;
  readonly AuthenticationStrategy?: string;
  readonly Created?: Date;
  readonly Description?: string;
  readonly EngineType?: string;
  readonly EngineVersion?: string;
  readonly Id?: string;
  readonly LatestRevision?: ConfigurationRevision;
  readonly Name?: string;
  readonly Tags?: {[key: string]: any};
}

export interface DescribeConfigurationRevisionOutput {
  readonly ConfigurationId: string;
  readonly Created: Date;
  readonly Data: string;
  readonly Description?: string;
}

export interface DescribeConfigurationRevisionRequest {
  readonly ConfigurationId: string;
  readonly ConfigurationRevision: string;
}

export interface DescribeConfigurationRevisionResponse {
  readonly ConfigurationId?: string;
  readonly Created?: Date;
  readonly Data?: string;
  readonly Description?: string;
}

export interface DescribeUserOutput {
  readonly BrokerId: string;
  readonly ConsoleAccess?: boolean;
  readonly Groups?: [];
  readonly Pending?: UserPendingChanges;
  readonly Username: string;
}

export interface DescribeUserRequest {
  readonly BrokerId: string;
  readonly Username: string;
}

export interface DescribeUserResponse {
  readonly BrokerId?: string;
  readonly ConsoleAccess?: boolean;
  readonly Groups?: [];
  readonly Pending?: UserPendingChanges;
  readonly Username?: string;
}

export interface EncryptionOptions {
  readonly KmsKeyId?: string;
  readonly UseAwsOwnedKey: boolean;
}

export interface EngineVersion {
  readonly Name?: string;
}

export interface Error {
  readonly ErrorAttribute?: string;
  readonly Message?: string;
}

export interface ForbiddenException {
  readonly ErrorAttribute?: string;
  readonly Message?: string;
}

export interface InternalServerErrorException {
  readonly ErrorAttribute?: string;
  readonly Message?: string;
}

export interface LdapServerMetadataInput {
  readonly Hosts: [];
  readonly RoleBase: string;
  readonly RoleName?: string;
  readonly RoleSearchMatching: string;
  readonly RoleSearchSubtree?: boolean;
  readonly ServiceAccountPassword: string;
  readonly ServiceAccountUsername: string;
  readonly UserBase: string;
  readonly UserRoleName?: string;
  readonly UserSearchMatching: string;
  readonly UserSearchSubtree?: boolean;
}

export interface LdapServerMetadataOutput {
  readonly Hosts: [];
  readonly RoleBase: string;
  readonly RoleName?: string;
  readonly RoleSearchMatching: string;
  readonly RoleSearchSubtree?: boolean;
  readonly ServiceAccountUsername: string;
  readonly UserBase: string;
  readonly UserRoleName?: string;
  readonly UserSearchMatching: string;
  readonly UserSearchSubtree?: boolean;
}

export interface ListBrokersOutput {
  readonly BrokerSummaries?: [];
  readonly NextToken?: string;
}

export interface ListBrokersRequest {
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface ListBrokersResponse {
  readonly BrokerSummaries?: [];
  readonly NextToken?: string;
}

export interface ListConfigurationRevisionsOutput {
  readonly ConfigurationId?: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
  readonly Revisions?: [];
}

export interface ListConfigurationRevisionsRequest {
  readonly ConfigurationId: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface ListConfigurationRevisionsResponse {
  readonly ConfigurationId?: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
  readonly Revisions?: [];
}

export interface ListConfigurationsOutput {
  readonly Configurations?: [];
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface ListConfigurationsRequest {
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface ListConfigurationsResponse {
  readonly Configurations?: [];
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface ListTagsRequest {
  readonly ResourceArn: string;
}

export interface ListTagsResponse {
  readonly Tags?: {[key: string]: any};
}

export interface ListUsersOutput {
  readonly BrokerId: string;
  readonly MaxResults: number;
  readonly NextToken?: string;
  readonly Users: [];
}

export interface ListUsersRequest {
  readonly BrokerId: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface ListUsersResponse {
  readonly BrokerId?: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
  readonly Users?: [];
}

export interface Logs {
  readonly Audit?: boolean;
  readonly General?: boolean;
}

export interface LogsSummary {
  readonly Audit?: boolean;
  readonly AuditLogGroup?: string;
  readonly General: boolean;
  readonly GeneralLogGroup: string;
  readonly Pending?: PendingLogs;
}

export interface NotFoundException {
  readonly ErrorAttribute?: string;
  readonly Message?: string;
}

export interface PendingLogs {
  readonly Audit?: boolean;
  readonly General?: boolean;
}

export interface RebootBrokerRequest {
  readonly BrokerId: string;
}

export interface RebootBrokerResponse {
}

export interface SanitizationWarning {
  readonly AttributeName?: string;
  readonly ElementName?: string;
  readonly Reason: string;
}

export interface Tags {
  readonly Tags?: {[key: string]: any};
}

export interface UnauthorizedException {
  readonly ErrorAttribute?: string;
  readonly Message?: string;
}

export interface UpdateBrokerInput {
  readonly AuthenticationStrategy?: string;
  readonly AutoMinorVersionUpgrade?: boolean;
  readonly Configuration?: ConfigurationId;
  readonly EngineVersion?: string;
  readonly HostInstanceType?: string;
  readonly LdapServerMetadata?: LdapServerMetadataInput;
  readonly Logs?: Logs;
  readonly MaintenanceWindowStartTime?: WeeklyStartTime;
  readonly SecurityGroups?: [];
}

export interface UpdateBrokerOutput {
  readonly AuthenticationStrategy?: string;
  readonly AutoMinorVersionUpgrade?: boolean;
  readonly BrokerId: string;
  readonly Configuration?: ConfigurationId;
  readonly EngineVersion?: string;
  readonly HostInstanceType?: string;
  readonly LdapServerMetadata?: LdapServerMetadataOutput;
  readonly Logs?: Logs;
  readonly MaintenanceWindowStartTime?: WeeklyStartTime;
  readonly SecurityGroups?: [];
}

export interface UpdateBrokerRequest {
  readonly AuthenticationStrategy?: string;
  readonly AutoMinorVersionUpgrade?: boolean;
  readonly BrokerId: string;
  readonly Configuration?: ConfigurationId;
  readonly EngineVersion?: string;
  readonly HostInstanceType?: string;
  readonly LdapServerMetadata?: LdapServerMetadataInput;
  readonly Logs?: Logs;
  readonly MaintenanceWindowStartTime?: WeeklyStartTime;
  readonly SecurityGroups?: [];
}

export interface UpdateBrokerResponse {
  readonly AuthenticationStrategy?: string;
  readonly AutoMinorVersionUpgrade?: boolean;
  readonly BrokerId?: string;
  readonly Configuration?: ConfigurationId;
  readonly EngineVersion?: string;
  readonly HostInstanceType?: string;
  readonly LdapServerMetadata?: LdapServerMetadataOutput;
  readonly Logs?: Logs;
  readonly MaintenanceWindowStartTime?: WeeklyStartTime;
  readonly SecurityGroups?: [];
}

export interface UpdateConfigurationInput {
  readonly Data: string;
  readonly Description?: string;
}

export interface UpdateConfigurationOutput {
  readonly Arn: string;
  readonly Created: Date;
  readonly Id: string;
  readonly LatestRevision?: ConfigurationRevision;
  readonly Name: string;
  readonly Warnings?: [];
}

export interface UpdateConfigurationRequest {
  readonly ConfigurationId: string;
  readonly Data: string;
  readonly Description?: string;
}

export interface UpdateConfigurationResponse {
  readonly Arn?: string;
  readonly Created?: Date;
  readonly Id?: string;
  readonly LatestRevision?: ConfigurationRevision;
  readonly Name?: string;
  readonly Warnings?: [];
}

export interface UpdateUserInput {
  readonly ConsoleAccess?: boolean;
  readonly Groups?: [];
  readonly Password?: string;
}

export interface UpdateUserRequest {
  readonly BrokerId: string;
  readonly ConsoleAccess?: boolean;
  readonly Groups?: [];
  readonly Password?: string;
  readonly Username: string;
}

export interface UpdateUserResponse {
}

export interface User {
  readonly ConsoleAccess?: boolean;
  readonly Groups?: [];
  readonly Password: string;
  readonly Username: string;
}

export interface UserPendingChanges {
  readonly ConsoleAccess?: boolean;
  readonly Groups?: [];
  readonly PendingChange: string;
}

export interface UserSummary {
  readonly PendingChange?: string;
  readonly Username: string;
}

export interface WeeklyStartTime {
  readonly DayOfWeek: string;
  readonly TimeOfDay: string;
  readonly TimeZone?: string;
}


