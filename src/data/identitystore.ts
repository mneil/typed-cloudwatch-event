/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface DescribeGroup {
  readonly IdentityStoreId: string;
  readonly GroupId: string;
}
export interface DescribeUser {
  readonly IdentityStoreId: string;
  readonly UserId: string;
}
export interface ListGroups {
  readonly IdentityStoreId: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
  readonly Filters?: [];
}
export interface ListUsers {
  readonly IdentityStoreId: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
  readonly Filters?: [];
}



interface AccessDeniedException {
  readonly Message: string;
  readonly RequestId: string;
}

interface DescribeGroupRequest {
  readonly IdentityStoreId: string;
  readonly GroupId: string;
}

interface DescribeGroupResponse {
  readonly GroupId: string;
  readonly DisplayName: string;
}

interface DescribeUserRequest {
  readonly IdentityStoreId: string;
  readonly UserId: string;
}

interface DescribeUserResponse {
  readonly UserName: string;
  readonly UserId: string;
}

interface Filter {
  readonly AttributePath: string;
  readonly AttributeValue: string;
}

interface Group {
  readonly GroupId: string;
  readonly DisplayName: string;
}

interface InternalServerException {
  readonly Message: string;
  readonly RequestId: string;
}

interface ListGroupsRequest {
  readonly IdentityStoreId: string;
  readonly MaxResults: number;
  readonly NextToken: string;
  readonly Filters: [];
}

interface ListGroupsResponse {
  readonly Groups: [];
  readonly NextToken: string;
}

interface ListUsersRequest {
  readonly IdentityStoreId: string;
  readonly MaxResults: number;
  readonly NextToken: string;
  readonly Filters: [];
}

interface ListUsersResponse {
  readonly Users: [];
  readonly NextToken: string;
}

interface ResourceNotFoundException {
  readonly ResourceType: string;
  readonly ResourceId: string;
  readonly Message: string;
  readonly RequestId: string;
}

interface ThrottlingException {
  readonly Message: string;
  readonly RequestId: string;
}

interface User {
  readonly UserName: string;
  readonly UserId: string;
}

interface ValidationException {
  readonly Message: string;
  readonly RequestId: string;
}

