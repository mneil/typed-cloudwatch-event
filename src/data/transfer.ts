/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface CreateAccess {
  readonly HomeDirectory?: string;
  readonly HomeDirectoryType?: string;
  readonly HomeDirectoryMappings?: [];
  readonly Policy?: string;
  readonly PosixProfile?: PosixProfile;
  readonly Role: string;
  readonly ServerId: string;
  readonly ExternalId: string;
}

export interface CreateServer {
  readonly Certificate?: string;
  readonly Domain?: string;
  readonly EndpointDetails?: EndpointDetails;
  readonly EndpointType?: string;
  readonly HostKey?: string;
  readonly IdentityProviderDetails?: IdentityProviderDetails;
  readonly IdentityProviderType?: string;
  readonly LoggingRole?: string;
  readonly Protocols?: [];
  readonly SecurityPolicyName?: string;
  readonly Tags?: [];
  readonly WorkflowDetails?: WorkflowDetails;
}

export interface CreateUser {
  readonly HomeDirectory?: string;
  readonly HomeDirectoryType?: string;
  readonly HomeDirectoryMappings?: [];
  readonly Policy?: string;
  readonly PosixProfile?: PosixProfile;
  readonly Role: string;
  readonly ServerId: string;
  readonly SshPublicKeyBody?: string;
  readonly Tags?: [];
  readonly UserName: string;
}

export interface CreateWorkflow {
  readonly Description?: string;
  readonly Steps: [];
  readonly OnExceptionSteps?: [];
  readonly Tags?: [];
}

export interface DeleteAccess {
  readonly ServerId: string;
  readonly ExternalId: string;
}

export interface DeleteServer {
  readonly ServerId: string;
}

export interface DeleteSshPublicKey {
  readonly ServerId: string;
  readonly SshPublicKeyId: string;
  readonly UserName: string;
}

export interface DeleteUser {
  readonly ServerId: string;
  readonly UserName: string;
}

export interface DeleteWorkflow {
  readonly WorkflowId: string;
}

export interface DescribeAccess {
  readonly ServerId: string;
  readonly ExternalId: string;
}

export interface DescribeExecution {
  readonly ExecutionId: string;
  readonly WorkflowId: string;
}

export interface DescribeSecurityPolicy {
  readonly SecurityPolicyName: string;
}

export interface DescribeServer {
  readonly ServerId: string;
}

export interface DescribeUser {
  readonly ServerId: string;
  readonly UserName: string;
}

export interface DescribeWorkflow {
  readonly WorkflowId: string;
}

export interface ImportSshPublicKey {
  readonly ServerId: string;
  readonly SshPublicKeyBody: string;
  readonly UserName: string;
}

export interface ListAccesses {
  readonly MaxResults?: number;
  readonly NextToken?: string;
  readonly ServerId: string;
}

export interface ListExecutions {
  readonly MaxResults?: number;
  readonly NextToken?: string;
  readonly WorkflowId: string;
}

export interface ListSecurityPolicies {
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface ListServers {
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface ListTagsForResource {
  readonly Arn: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface ListUsers {
  readonly MaxResults?: number;
  readonly NextToken?: string;
  readonly ServerId: string;
}

export interface ListWorkflows {
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface SendWorkflowStepState {
  readonly WorkflowId: string;
  readonly ExecutionId: string;
  readonly Token: string;
  readonly Status: string;
}

export interface StartServer {
  readonly ServerId: string;
}

export interface StopServer {
  readonly ServerId: string;
}

export interface TagResource {
  readonly Arn: string;
  readonly Tags: [];
}

export interface TestIdentityProvider {
  readonly ServerId: string;
  readonly ServerProtocol?: string;
  readonly SourceIp?: string;
  readonly UserName: string;
  readonly UserPassword?: string;
}

export interface UntagResource {
  readonly Arn: string;
  readonly TagKeys: [];
}

export interface UpdateAccess {
  readonly HomeDirectory?: string;
  readonly HomeDirectoryType?: string;
  readonly HomeDirectoryMappings?: [];
  readonly Policy?: string;
  readonly PosixProfile?: PosixProfile;
  readonly Role?: string;
  readonly ServerId: string;
  readonly ExternalId: string;
}

export interface UpdateServer {
  readonly Certificate?: string;
  readonly ProtocolDetails?: ProtocolDetails;
  readonly EndpointDetails?: EndpointDetails;
  readonly EndpointType?: string;
  readonly HostKey?: string;
  readonly IdentityProviderDetails?: IdentityProviderDetails;
  readonly LoggingRole?: string;
  readonly Protocols?: [];
  readonly SecurityPolicyName?: string;
  readonly ServerId: string;
  readonly WorkflowDetails?: WorkflowDetails;
}

export interface UpdateUser {
  readonly HomeDirectory?: string;
  readonly HomeDirectoryType?: string;
  readonly HomeDirectoryMappings?: [];
  readonly Policy?: string;
  readonly PosixProfile?: PosixProfile;
  readonly Role?: string;
  readonly ServerId: string;
  readonly UserName: string;
}

export interface AccessDeniedException {
  readonly Message?: string;
}

export interface ConflictException {
  readonly Message: string;
}

export interface CopyStepDetails {
  readonly Name?: string;
  readonly DestinationFileLocation?: InputFileLocation;
  readonly OverwriteExisting?: string;
}

export interface CreateAccessRequest {
  readonly HomeDirectory?: string;
  readonly HomeDirectoryType?: string;
  readonly HomeDirectoryMappings?: [];
  readonly Policy?: string;
  readonly PosixProfile?: PosixProfile;
  readonly Role: string;
  readonly ServerId: string;
  readonly ExternalId: string;
}

export interface CreateAccessResponse {
  readonly ServerId: string;
  readonly ExternalId: string;
}

export interface CreateServerRequest {
  readonly Certificate?: string;
  readonly Domain?: string;
  readonly EndpointDetails?: EndpointDetails;
  readonly EndpointType?: string;
  readonly HostKey?: string;
  readonly IdentityProviderDetails?: IdentityProviderDetails;
  readonly IdentityProviderType?: string;
  readonly LoggingRole?: string;
  readonly Protocols?: [];
  readonly SecurityPolicyName?: string;
  readonly Tags?: [];
  readonly WorkflowDetails?: WorkflowDetails;
}

export interface CreateServerResponse {
  readonly ServerId: string;
}

export interface CreateUserRequest {
  readonly HomeDirectory?: string;
  readonly HomeDirectoryType?: string;
  readonly HomeDirectoryMappings?: [];
  readonly Policy?: string;
  readonly PosixProfile?: PosixProfile;
  readonly Role: string;
  readonly ServerId: string;
  readonly SshPublicKeyBody?: string;
  readonly Tags?: [];
  readonly UserName: string;
}

export interface CreateUserResponse {
  readonly ServerId: string;
  readonly UserName: string;
}

export interface CreateWorkflowRequest {
  readonly Description?: string;
  readonly Steps: [];
  readonly OnExceptionSteps?: [];
  readonly Tags?: [];
}

export interface CreateWorkflowResponse {
  readonly WorkflowId: string;
}

export interface CustomStepDetails {
  readonly Name?: string;
  readonly Target?: string;
  readonly TimeoutSeconds?: number;
}

export interface DeleteAccessRequest {
  readonly ServerId: string;
  readonly ExternalId: string;
}

export interface DeleteServerRequest {
  readonly ServerId: string;
}

export interface DeleteSshPublicKeyRequest {
  readonly ServerId: string;
  readonly SshPublicKeyId: string;
  readonly UserName: string;
}

export interface DeleteStepDetails {
  readonly Name?: string;
}

export interface DeleteUserRequest {
  readonly ServerId: string;
  readonly UserName: string;
}

export interface DeleteWorkflowRequest {
  readonly WorkflowId: string;
}

export interface DescribeAccessRequest {
  readonly ServerId: string;
  readonly ExternalId: string;
}

export interface DescribeAccessResponse {
  readonly ServerId: string;
  readonly Access: DescribedAccess;
}

export interface DescribeExecutionRequest {
  readonly ExecutionId: string;
  readonly WorkflowId: string;
}

export interface DescribeExecutionResponse {
  readonly WorkflowId: string;
  readonly Execution: DescribedExecution;
}

export interface DescribeSecurityPolicyRequest {
  readonly SecurityPolicyName: string;
}

export interface DescribeSecurityPolicyResponse {
  readonly SecurityPolicy: DescribedSecurityPolicy;
}

export interface DescribeServerRequest {
  readonly ServerId: string;
}

export interface DescribeServerResponse {
  readonly Server: DescribedServer;
}

export interface DescribeUserRequest {
  readonly ServerId: string;
  readonly UserName: string;
}

export interface DescribeUserResponse {
  readonly ServerId: string;
  readonly User: DescribedUser;
}

export interface DescribeWorkflowRequest {
  readonly WorkflowId: string;
}

export interface DescribeWorkflowResponse {
  readonly Workflow: DescribedWorkflow;
}

export interface DescribedAccess {
  readonly HomeDirectory?: string;
  readonly HomeDirectoryMappings?: [];
  readonly HomeDirectoryType?: string;
  readonly Policy?: string;
  readonly PosixProfile?: PosixProfile;
  readonly Role?: string;
  readonly ExternalId?: string;
}

export interface DescribedExecution {
  readonly ExecutionId?: string;
  readonly InitialFileLocation?: FileLocation;
  readonly ServiceMetadata?: ServiceMetadata;
  readonly ExecutionRole?: string;
  readonly LoggingConfiguration?: LoggingConfiguration;
  readonly PosixProfile?: PosixProfile;
  readonly Status?: string;
  readonly Results?: ExecutionResults;
}

export interface DescribedSecurityPolicy {
  readonly Fips?: boolean;
  readonly SecurityPolicyName: string;
  readonly SshCiphers?: [];
  readonly SshKexs?: [];
  readonly SshMacs?: [];
  readonly TlsCiphers?: [];
}

export interface DescribedServer {
  readonly Arn: string;
  readonly Certificate?: string;
  readonly ProtocolDetails?: ProtocolDetails;
  readonly Domain?: string;
  readonly EndpointDetails?: EndpointDetails;
  readonly EndpointType?: string;
  readonly HostKeyFingerprint?: string;
  readonly IdentityProviderDetails?: IdentityProviderDetails;
  readonly IdentityProviderType?: string;
  readonly LoggingRole?: string;
  readonly Protocols?: [];
  readonly SecurityPolicyName?: string;
  readonly ServerId?: string;
  readonly State?: string;
  readonly Tags?: [];
  readonly UserCount?: number;
  readonly WorkflowDetails?: WorkflowDetails;
}

export interface DescribedUser {
  readonly Arn: string;
  readonly HomeDirectory?: string;
  readonly HomeDirectoryMappings?: [];
  readonly HomeDirectoryType?: string;
  readonly Policy?: string;
  readonly PosixProfile?: PosixProfile;
  readonly Role?: string;
  readonly SshPublicKeys?: [];
  readonly Tags?: [];
  readonly UserName?: string;
}

export interface DescribedWorkflow {
  readonly Arn: string;
  readonly Description?: string;
  readonly Steps?: [];
  readonly OnExceptionSteps?: [];
  readonly WorkflowId?: string;
  readonly Tags?: [];
}

export interface EfsFileLocation {
  readonly FileSystemId?: string;
  readonly Path?: string;
}

export interface EndpointDetails {
  readonly AddressAllocationIds?: [];
  readonly SubnetIds?: [];
  readonly VpcEndpointId?: string;
  readonly VpcId?: string;
  readonly SecurityGroupIds?: [];
}

export interface ExecutionError {
  readonly Type: string;
  readonly Message: string;
}

export interface ExecutionResults {
  readonly Steps?: [];
  readonly OnExceptionSteps?: [];
}

export interface ExecutionStepResult {
  readonly StepType?: string;
  readonly Outputs?: string;
  readonly Error?: ExecutionError;
}

export interface FileLocation {
  readonly S3FileLocation?: S3FileLocation;
  readonly EfsFileLocation?: EfsFileLocation;
}

export interface HomeDirectoryMapEntry {
  readonly Entry: string;
  readonly Target: string;
}

export interface IdentityProviderDetails {
  readonly Url?: string;
  readonly InvocationRole?: string;
  readonly DirectoryId?: string;
  readonly Function?: string;
}

export interface ImportSshPublicKeyRequest {
  readonly ServerId: string;
  readonly SshPublicKeyBody: string;
  readonly UserName: string;
}

export interface ImportSshPublicKeyResponse {
  readonly ServerId: string;
  readonly SshPublicKeyId: string;
  readonly UserName: string;
}

export interface InputFileLocation {
  readonly S3FileLocation?: S3InputFileLocation;
  readonly EfsFileLocation?: EfsFileLocation;
}

export interface InternalServiceError {
  readonly Message: string;
}

export interface InvalidNextTokenException {
  readonly Message: string;
}

export interface InvalidRequestException {
  readonly Message: string;
}

export interface ListAccessesRequest {
  readonly MaxResults?: number;
  readonly NextToken?: string;
  readonly ServerId: string;
}

export interface ListAccessesResponse {
  readonly NextToken?: string;
  readonly ServerId: string;
  readonly Accesses: [];
}

export interface ListExecutionsRequest {
  readonly MaxResults?: number;
  readonly NextToken?: string;
  readonly WorkflowId: string;
}

export interface ListExecutionsResponse {
  readonly NextToken?: string;
  readonly WorkflowId: string;
  readonly Executions: [];
}

export interface ListSecurityPoliciesRequest {
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface ListSecurityPoliciesResponse {
  readonly NextToken?: string;
  readonly SecurityPolicyNames: [];
}

export interface ListServersRequest {
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface ListServersResponse {
  readonly NextToken?: string;
  readonly Servers: [];
}

export interface ListTagsForResourceRequest {
  readonly Arn: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface ListTagsForResourceResponse {
  readonly Arn?: string;
  readonly NextToken?: string;
  readonly Tags?: [];
}

export interface ListUsersRequest {
  readonly MaxResults?: number;
  readonly NextToken?: string;
  readonly ServerId: string;
}

export interface ListUsersResponse {
  readonly NextToken?: string;
  readonly ServerId: string;
  readonly Users: [];
}

export interface ListWorkflowsRequest {
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface ListWorkflowsResponse {
  readonly NextToken?: string;
  readonly Workflows: [];
}

export interface ListedAccess {
  readonly HomeDirectory?: string;
  readonly HomeDirectoryType?: string;
  readonly Role?: string;
  readonly ExternalId?: string;
}

export interface ListedExecution {
  readonly ExecutionId?: string;
  readonly InitialFileLocation?: FileLocation;
  readonly ServiceMetadata?: ServiceMetadata;
  readonly Status?: string;
}

export interface ListedServer {
  readonly Arn: string;
  readonly Domain?: string;
  readonly IdentityProviderType?: string;
  readonly EndpointType?: string;
  readonly LoggingRole?: string;
  readonly ServerId?: string;
  readonly State?: string;
  readonly UserCount?: number;
}

export interface ListedUser {
  readonly Arn: string;
  readonly HomeDirectory?: string;
  readonly HomeDirectoryType?: string;
  readonly Role?: string;
  readonly SshPublicKeyCount?: number;
  readonly UserName?: string;
}

export interface ListedWorkflow {
  readonly WorkflowId?: string;
  readonly Description?: string;
  readonly Arn?: string;
}

export interface LoggingConfiguration {
  readonly LoggingRole?: string;
  readonly LogGroupName?: string;
}

export interface PosixProfile {
  readonly Uid: number;
  readonly Gid: number;
  readonly SecondaryGids?: [];
}

export interface ProtocolDetails {
  readonly PassiveIp?: string;
}

export interface ResourceExistsException {
  readonly Message: string;
  readonly Resource: string;
  readonly ResourceType: string;
}

export interface ResourceNotFoundException {
  readonly Message: string;
  readonly Resource: string;
  readonly ResourceType: string;
}

export interface S3FileLocation {
  readonly Bucket?: string;
  readonly Key?: string;
  readonly VersionId?: string;
  readonly Etag?: string;
}

export interface S3InputFileLocation {
  readonly Bucket?: string;
  readonly Key?: string;
}

export interface S3Tag {
  readonly Key: string;
  readonly Value: string;
}

export interface SendWorkflowStepStateRequest {
  readonly WorkflowId: string;
  readonly ExecutionId: string;
  readonly Token: string;
  readonly Status: string;
}

export interface SendWorkflowStepStateResponse {
}

export interface ServiceMetadata {
  readonly UserDetails: UserDetails;
}

export interface ServiceUnavailableException {
  readonly Message?: string;
}

export interface SshPublicKey {
  readonly DateImported: Date;
  readonly SshPublicKeyBody: string;
  readonly SshPublicKeyId: string;
}

export interface StartServerRequest {
  readonly ServerId: string;
}

export interface StopServerRequest {
  readonly ServerId: string;
}

export interface Tag {
  readonly Key: string;
  readonly Value: string;
}

export interface TagResourceRequest {
  readonly Arn: string;
  readonly Tags: [];
}

export interface TagStepDetails {
  readonly Name?: string;
  readonly Tags?: [];
}

export interface TestIdentityProviderRequest {
  readonly ServerId: string;
  readonly ServerProtocol?: string;
  readonly SourceIp?: string;
  readonly UserName: string;
  readonly UserPassword?: string;
}

export interface TestIdentityProviderResponse {
  readonly Response?: string;
  readonly StatusCode: number;
  readonly Message?: string;
  readonly Url: string;
}

export interface ThrottlingException {
  readonly RetryAfterSeconds?: string;
}

export interface UntagResourceRequest {
  readonly Arn: string;
  readonly TagKeys: [];
}

export interface UpdateAccessRequest {
  readonly HomeDirectory?: string;
  readonly HomeDirectoryType?: string;
  readonly HomeDirectoryMappings?: [];
  readonly Policy?: string;
  readonly PosixProfile?: PosixProfile;
  readonly Role?: string;
  readonly ServerId: string;
  readonly ExternalId: string;
}

export interface UpdateAccessResponse {
  readonly ServerId: string;
  readonly ExternalId: string;
}

export interface UpdateServerRequest {
  readonly Certificate?: string;
  readonly ProtocolDetails?: ProtocolDetails;
  readonly EndpointDetails?: EndpointDetails;
  readonly EndpointType?: string;
  readonly HostKey?: string;
  readonly IdentityProviderDetails?: IdentityProviderDetails;
  readonly LoggingRole?: string;
  readonly Protocols?: [];
  readonly SecurityPolicyName?: string;
  readonly ServerId: string;
  readonly WorkflowDetails?: WorkflowDetails;
}

export interface UpdateServerResponse {
  readonly ServerId: string;
}

export interface UpdateUserRequest {
  readonly HomeDirectory?: string;
  readonly HomeDirectoryType?: string;
  readonly HomeDirectoryMappings?: [];
  readonly Policy?: string;
  readonly PosixProfile?: PosixProfile;
  readonly Role?: string;
  readonly ServerId: string;
  readonly UserName: string;
}

export interface UpdateUserResponse {
  readonly ServerId: string;
  readonly UserName: string;
}

export interface UserDetails {
  readonly UserName: string;
  readonly ServerId: string;
  readonly SessionId?: string;
}

export interface WorkflowDetail {
  readonly WorkflowId: string;
  readonly ExecutionRole: string;
}

export interface WorkflowDetails {
  readonly OnUpload: [];
}

export interface WorkflowStep {
  readonly Type?: string;
  readonly CopyStepDetails?: CopyStepDetails;
  readonly CustomStepDetails?: CustomStepDetails;
  readonly DeleteStepDetails?: DeleteStepDetails;
  readonly TagStepDetails?: TagStepDetails;
}


