/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface AttachManagedPolicyToPermissionSet {
  readonly InstanceArn: string;
  readonly PermissionSetArn: string;
  readonly ManagedPolicyArn: string;
}
export interface CreateAccountAssignment {
  readonly InstanceArn: string;
  readonly TargetId: string;
  readonly TargetType: string;
  readonly PermissionSetArn: string;
  readonly PrincipalType: string;
  readonly PrincipalId: string;
}
export interface CreateInstanceAccessControlAttributeConfiguration {
  readonly InstanceArn: string;
  readonly InstanceAccessControlAttributeConfiguration: InstanceAccessControlAttributeConfiguration;
}
export interface CreatePermissionSet {
  readonly Name: string;
  readonly Description: string;
  readonly InstanceArn: string;
  readonly SessionDuration: string;
  readonly RelayState: string;
  readonly Tags: [];
}
export interface DeleteAccountAssignment {
  readonly InstanceArn: string;
  readonly TargetId: string;
  readonly TargetType: string;
  readonly PermissionSetArn: string;
  readonly PrincipalType: string;
  readonly PrincipalId: string;
}
export interface DeleteInlinePolicyFromPermissionSet {
  readonly InstanceArn: string;
  readonly PermissionSetArn: string;
}
export interface DeleteInstanceAccessControlAttributeConfiguration {
  readonly InstanceArn: string;
}
export interface DeletePermissionSet {
  readonly InstanceArn: string;
  readonly PermissionSetArn: string;
}
export interface DescribeAccountAssignmentCreationStatus {
  readonly InstanceArn: string;
  readonly AccountAssignmentCreationRequestId: string;
}
export interface DescribeAccountAssignmentDeletionStatus {
  readonly InstanceArn: string;
  readonly AccountAssignmentDeletionRequestId: string;
}
export interface DescribeInstanceAccessControlAttributeConfiguration {
  readonly InstanceArn: string;
}
export interface DescribePermissionSet {
  readonly InstanceArn: string;
  readonly PermissionSetArn: string;
}
export interface DescribePermissionSetProvisioningStatus {
  readonly InstanceArn: string;
  readonly ProvisionPermissionSetRequestId: string;
}
export interface DetachManagedPolicyFromPermissionSet {
  readonly InstanceArn: string;
  readonly PermissionSetArn: string;
  readonly ManagedPolicyArn: string;
}
export interface GetInlinePolicyForPermissionSet {
  readonly InstanceArn: string;
  readonly PermissionSetArn: string;
}
export interface ListAccountAssignmentCreationStatus {
  readonly InstanceArn: string;
  readonly MaxResults: number;
  readonly NextToken: string;
  readonly Filter: OperationStatusFilter;
}
export interface ListAccountAssignmentDeletionStatus {
  readonly InstanceArn: string;
  readonly MaxResults: number;
  readonly NextToken: string;
  readonly Filter: OperationStatusFilter;
}
export interface ListAccountAssignments {
  readonly InstanceArn: string;
  readonly AccountId: string;
  readonly PermissionSetArn: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}
export interface ListAccountsForProvisionedPermissionSet {
  readonly InstanceArn: string;
  readonly PermissionSetArn: string;
  readonly ProvisioningStatus: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}
export interface ListInstances {
  readonly MaxResults: number;
  readonly NextToken: string;
}
export interface ListManagedPoliciesInPermissionSet {
  readonly InstanceArn: string;
  readonly PermissionSetArn: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}
export interface ListPermissionSetProvisioningStatus {
  readonly InstanceArn: string;
  readonly MaxResults: number;
  readonly NextToken: string;
  readonly Filter: OperationStatusFilter;
}
export interface ListPermissionSets {
  readonly InstanceArn: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}
export interface ListPermissionSetsProvisionedToAccount {
  readonly InstanceArn: string;
  readonly AccountId: string;
  readonly ProvisioningStatus: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}
export interface ListTagsForResource {
  readonly InstanceArn: string;
  readonly ResourceArn: string;
  readonly NextToken: string;
}
export interface ProvisionPermissionSet {
  readonly InstanceArn: string;
  readonly PermissionSetArn: string;
  readonly TargetId: string;
  readonly TargetType: string;
}
export interface PutInlinePolicyToPermissionSet {
  readonly InstanceArn: string;
  readonly PermissionSetArn: string;
  readonly InlinePolicy: string;
}
export interface TagResource {
  readonly InstanceArn: string;
  readonly ResourceArn: string;
  readonly Tags: [];
}
export interface UntagResource {
  readonly InstanceArn: string;
  readonly ResourceArn: string;
  readonly TagKeys: [];
}
export interface UpdateInstanceAccessControlAttributeConfiguration {
  readonly InstanceArn: string;
  readonly InstanceAccessControlAttributeConfiguration: InstanceAccessControlAttributeConfiguration;
}
export interface UpdatePermissionSet {
  readonly InstanceArn: string;
  readonly PermissionSetArn: string;
  readonly Description: string;
  readonly SessionDuration: string;
  readonly RelayState: string;
}



interface AccessControlAttribute {
  readonly Key: string;
  readonly Value: AccessControlAttributeValue;
}

interface AccessControlAttributeValue {
  readonly Source: [];
}

interface AccessDeniedException {
  readonly Message: string;
}

interface AccountAssignment {
  readonly AccountId: string;
  readonly PermissionSetArn: string;
  readonly PrincipalType: string;
  readonly PrincipalId: string;
}

interface AccountAssignmentOperationStatus {
  readonly Status: string;
  readonly RequestId: string;
  readonly FailureReason: string;
  readonly TargetId: string;
  readonly TargetType: string;
  readonly PermissionSetArn: string;
  readonly PrincipalType: string;
  readonly PrincipalId: string;
  readonly CreatedDate: Date;
}

interface AccountAssignmentOperationStatusMetadata {
  readonly Status: string;
  readonly RequestId: string;
  readonly CreatedDate: Date;
}

interface AttachManagedPolicyToPermissionSetRequest {
  readonly InstanceArn: string;
  readonly PermissionSetArn: string;
  readonly ManagedPolicyArn: string;
}

interface AttachManagedPolicyToPermissionSetResponse {
}

interface AttachedManagedPolicy {
  readonly Name: string;
  readonly Arn: string;
}

interface ConflictException {
  readonly Message: string;
}

interface CreateAccountAssignmentRequest {
  readonly InstanceArn: string;
  readonly TargetId: string;
  readonly TargetType: string;
  readonly PermissionSetArn: string;
  readonly PrincipalType: string;
  readonly PrincipalId: string;
}

interface CreateAccountAssignmentResponse {
  readonly AccountAssignmentCreationStatus: AccountAssignmentOperationStatus;
}

interface CreateInstanceAccessControlAttributeConfigurationRequest {
  readonly InstanceArn: string;
  readonly InstanceAccessControlAttributeConfiguration: InstanceAccessControlAttributeConfiguration;
}

interface CreateInstanceAccessControlAttributeConfigurationResponse {
}

interface CreatePermissionSetRequest {
  readonly Name: string;
  readonly Description: string;
  readonly InstanceArn: string;
  readonly SessionDuration: string;
  readonly RelayState: string;
  readonly Tags: [];
}

interface CreatePermissionSetResponse {
  readonly PermissionSet: PermissionSet;
}

interface DeleteAccountAssignmentRequest {
  readonly InstanceArn: string;
  readonly TargetId: string;
  readonly TargetType: string;
  readonly PermissionSetArn: string;
  readonly PrincipalType: string;
  readonly PrincipalId: string;
}

interface DeleteAccountAssignmentResponse {
  readonly AccountAssignmentDeletionStatus: AccountAssignmentOperationStatus;
}

interface DeleteInlinePolicyFromPermissionSetRequest {
  readonly InstanceArn: string;
  readonly PermissionSetArn: string;
}

interface DeleteInlinePolicyFromPermissionSetResponse {
}

interface DeleteInstanceAccessControlAttributeConfigurationRequest {
  readonly InstanceArn: string;
}

interface DeleteInstanceAccessControlAttributeConfigurationResponse {
}

interface DeletePermissionSetRequest {
  readonly InstanceArn: string;
  readonly PermissionSetArn: string;
}

interface DeletePermissionSetResponse {
}

interface DescribeAccountAssignmentCreationStatusRequest {
  readonly InstanceArn: string;
  readonly AccountAssignmentCreationRequestId: string;
}

interface DescribeAccountAssignmentCreationStatusResponse {
  readonly AccountAssignmentCreationStatus: AccountAssignmentOperationStatus;
}

interface DescribeAccountAssignmentDeletionStatusRequest {
  readonly InstanceArn: string;
  readonly AccountAssignmentDeletionRequestId: string;
}

interface DescribeAccountAssignmentDeletionStatusResponse {
  readonly AccountAssignmentDeletionStatus: AccountAssignmentOperationStatus;
}

interface DescribeInstanceAccessControlAttributeConfigurationRequest {
  readonly InstanceArn: string;
}

interface DescribeInstanceAccessControlAttributeConfigurationResponse {
  readonly Status: string;
  readonly StatusReason: string;
  readonly InstanceAccessControlAttributeConfiguration: InstanceAccessControlAttributeConfiguration;
}

interface DescribePermissionSetProvisioningStatusRequest {
  readonly InstanceArn: string;
  readonly ProvisionPermissionSetRequestId: string;
}

interface DescribePermissionSetProvisioningStatusResponse {
  readonly PermissionSetProvisioningStatus: PermissionSetProvisioningStatus;
}

interface DescribePermissionSetRequest {
  readonly InstanceArn: string;
  readonly PermissionSetArn: string;
}

interface DescribePermissionSetResponse {
  readonly PermissionSet: PermissionSet;
}

interface DetachManagedPolicyFromPermissionSetRequest {
  readonly InstanceArn: string;
  readonly PermissionSetArn: string;
  readonly ManagedPolicyArn: string;
}

interface DetachManagedPolicyFromPermissionSetResponse {
}

interface GetInlinePolicyForPermissionSetRequest {
  readonly InstanceArn: string;
  readonly PermissionSetArn: string;
}

interface GetInlinePolicyForPermissionSetResponse {
  readonly InlinePolicy: string;
}

interface InstanceAccessControlAttributeConfiguration {
  readonly AccessControlAttributes: [];
}

interface InstanceMetadata {
  readonly InstanceArn: string;
  readonly IdentityStoreId: string;
}

interface InternalServerException {
  readonly Message: string;
}

interface ListAccountAssignmentCreationStatusRequest {
  readonly InstanceArn: string;
  readonly MaxResults: number;
  readonly NextToken: string;
  readonly Filter: OperationStatusFilter;
}

interface ListAccountAssignmentCreationStatusResponse {
  readonly AccountAssignmentsCreationStatus: [];
  readonly NextToken: string;
}

interface ListAccountAssignmentDeletionStatusRequest {
  readonly InstanceArn: string;
  readonly MaxResults: number;
  readonly NextToken: string;
  readonly Filter: OperationStatusFilter;
}

interface ListAccountAssignmentDeletionStatusResponse {
  readonly AccountAssignmentsDeletionStatus: [];
  readonly NextToken: string;
}

interface ListAccountAssignmentsRequest {
  readonly InstanceArn: string;
  readonly AccountId: string;
  readonly PermissionSetArn: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface ListAccountAssignmentsResponse {
  readonly AccountAssignments: [];
  readonly NextToken: string;
}

interface ListAccountsForProvisionedPermissionSetRequest {
  readonly InstanceArn: string;
  readonly PermissionSetArn: string;
  readonly ProvisioningStatus: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface ListAccountsForProvisionedPermissionSetResponse {
  readonly AccountIds: [];
  readonly NextToken: string;
}

interface ListInstancesRequest {
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface ListInstancesResponse {
  readonly Instances: [];
  readonly NextToken: string;
}

interface ListManagedPoliciesInPermissionSetRequest {
  readonly InstanceArn: string;
  readonly PermissionSetArn: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface ListManagedPoliciesInPermissionSetResponse {
  readonly AttachedManagedPolicies: [];
  readonly NextToken: string;
}

interface ListPermissionSetProvisioningStatusRequest {
  readonly InstanceArn: string;
  readonly MaxResults: number;
  readonly NextToken: string;
  readonly Filter: OperationStatusFilter;
}

interface ListPermissionSetProvisioningStatusResponse {
  readonly PermissionSetsProvisioningStatus: [];
  readonly NextToken: string;
}

interface ListPermissionSetsProvisionedToAccountRequest {
  readonly InstanceArn: string;
  readonly AccountId: string;
  readonly ProvisioningStatus: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface ListPermissionSetsProvisionedToAccountResponse {
  readonly NextToken: string;
  readonly PermissionSets: [];
}

interface ListPermissionSetsRequest {
  readonly InstanceArn: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListPermissionSetsResponse {
  readonly PermissionSets: [];
  readonly NextToken: string;
}

interface ListTagsForResourceRequest {
  readonly InstanceArn: string;
  readonly ResourceArn: string;
  readonly NextToken: string;
}

interface ListTagsForResourceResponse {
  readonly Tags: [];
  readonly NextToken: string;
}

interface OperationStatusFilter {
  readonly Status: string;
}

interface PermissionSet {
  readonly Name: string;
  readonly PermissionSetArn: string;
  readonly Description: string;
  readonly CreatedDate: Date;
  readonly SessionDuration: string;
  readonly RelayState: string;
}

interface PermissionSetProvisioningStatus {
  readonly Status: string;
  readonly RequestId: string;
  readonly AccountId: string;
  readonly PermissionSetArn: string;
  readonly FailureReason: string;
  readonly CreatedDate: Date;
}

interface PermissionSetProvisioningStatusMetadata {
  readonly Status: string;
  readonly RequestId: string;
  readonly CreatedDate: Date;
}

interface ProvisionPermissionSetRequest {
  readonly InstanceArn: string;
  readonly PermissionSetArn: string;
  readonly TargetId: string;
  readonly TargetType: string;
}

interface ProvisionPermissionSetResponse {
  readonly PermissionSetProvisioningStatus: PermissionSetProvisioningStatus;
}

interface PutInlinePolicyToPermissionSetRequest {
  readonly InstanceArn: string;
  readonly PermissionSetArn: string;
  readonly InlinePolicy: string;
}

interface PutInlinePolicyToPermissionSetResponse {
}

interface ResourceNotFoundException {
  readonly Message: string;
}

interface ServiceQuotaExceededException {
  readonly Message: string;
}

interface Tag {
  readonly Key: string;
  readonly Value: string;
}

interface TagResourceRequest {
  readonly InstanceArn: string;
  readonly ResourceArn: string;
  readonly Tags: [];
}

interface TagResourceResponse {
}

interface ThrottlingException {
  readonly Message: string;
}

interface UntagResourceRequest {
  readonly InstanceArn: string;
  readonly ResourceArn: string;
  readonly TagKeys: [];
}

interface UntagResourceResponse {
}

interface UpdateInstanceAccessControlAttributeConfigurationRequest {
  readonly InstanceArn: string;
  readonly InstanceAccessControlAttributeConfiguration: InstanceAccessControlAttributeConfiguration;
}

interface UpdateInstanceAccessControlAttributeConfigurationResponse {
}

interface UpdatePermissionSetRequest {
  readonly InstanceArn: string;
  readonly PermissionSetArn: string;
  readonly Description: string;
  readonly SessionDuration: string;
  readonly RelayState: string;
}

interface UpdatePermissionSetResponse {
}

interface ValidationException {
  readonly Message: string;
}
