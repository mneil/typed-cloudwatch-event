/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface AssociateMemberAccount {
  readonly memberAccountId: string;
}
export interface AssociateS3Resources {
  readonly memberAccountId?: string;
  readonly s3Resources: [];
}
export interface DisassociateMemberAccount {
  readonly memberAccountId: string;
}
export interface DisassociateS3Resources {
  readonly memberAccountId?: string;
  readonly associatedS3Resources: [];
}
export interface ListMemberAccounts {
  readonly nextToken?: string;
  readonly maxResults?: number;
}
export interface ListS3Resources {
  readonly memberAccountId?: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}
export interface UpdateS3Resources {
  readonly memberAccountId?: string;
  readonly s3ResourcesUpdate: [];
}



interface AccessDeniedException {
  readonly message: string;
  readonly resourceType: string;
}

interface AssociateMemberAccountRequest {
  readonly memberAccountId: string;
}

interface AssociateS3ResourcesRequest {
  readonly memberAccountId: string;
  readonly s3Resources: [];
}

interface AssociateS3ResourcesResult {
  readonly failedS3Resources: [];
}

interface ClassificationType {
  readonly oneTime: string;
  readonly continuous: string;
}

interface ClassificationTypeUpdate {
  readonly oneTime: string;
  readonly continuous: string;
}

interface DisassociateMemberAccountRequest {
  readonly memberAccountId: string;
}

interface DisassociateS3ResourcesRequest {
  readonly memberAccountId: string;
  readonly associatedS3Resources: [];
}

interface DisassociateS3ResourcesResult {
  readonly failedS3Resources: [];
}

interface FailedS3Resource {
  readonly failedItem: S3Resource;
  readonly errorCode: string;
  readonly errorMessage: string;
}

interface InternalException {
  readonly errorCode: string;
  readonly message: string;
}

interface InvalidInputException {
  readonly errorCode: string;
  readonly message: string;
  readonly fieldName: string;
}

interface LimitExceededException {
  readonly errorCode: string;
  readonly message: string;
  readonly resourceType: string;
}

interface ListMemberAccountsRequest {
  readonly nextToken: string;
  readonly maxResults: number;
}

interface ListMemberAccountsResult {
  readonly memberAccounts: [];
  readonly nextToken: string;
}

interface ListS3ResourcesRequest {
  readonly memberAccountId: string;
  readonly nextToken: string;
  readonly maxResults: number;
}

interface ListS3ResourcesResult {
  readonly s3Resources: [];
  readonly nextToken: string;
}

interface MemberAccount {
  readonly accountId: string;
}

interface S3Resource {
  readonly bucketName: string;
  readonly prefix: string;
}

interface S3ResourceClassification {
  readonly bucketName: string;
  readonly prefix: string;
  readonly classificationType: ClassificationType;
}

interface S3ResourceClassificationUpdate {
  readonly bucketName: string;
  readonly prefix: string;
  readonly classificationTypeUpdate: ClassificationTypeUpdate;
}

interface UpdateS3ResourcesRequest {
  readonly memberAccountId: string;
  readonly s3ResourcesUpdate: [];
}

interface UpdateS3ResourcesResult {
  readonly failedS3Resources: [];
}

