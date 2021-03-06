/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface ApplyArchiveRule {
  readonly analyzerArn: string;
  readonly clientToken?: string;
  readonly ruleName: string;
}
export interface CancelPolicyGeneration {
  readonly jobId: string;
}
export interface CreateAccessPreview {
  readonly analyzerArn: string;
  readonly clientToken?: string;
  readonly configurations: {[key: string]: any};
}
export interface CreateAnalyzer {
  readonly analyzerName: string;
  readonly archiveRules?: [];
  readonly clientToken?: string;
  readonly tags?: {[key: string]: any};
  readonly type: string;
}
export interface CreateArchiveRule {
  readonly analyzerName: string;
  readonly clientToken?: string;
  readonly filter: {[key: string]: any};
  readonly ruleName: string;
}
export interface DeleteAnalyzer {
  readonly analyzerName: string;
  readonly clientToken?: string;
}
export interface DeleteArchiveRule {
  readonly analyzerName: string;
  readonly clientToken?: string;
  readonly ruleName: string;
}
export interface GetAccessPreview {
  readonly accessPreviewId: string;
  readonly analyzerArn: string;
}
export interface GetAnalyzedResource {
  readonly analyzerArn: string;
  readonly resourceArn: string;
}
export interface GetAnalyzer {
  readonly analyzerName: string;
}
export interface GetArchiveRule {
  readonly analyzerName: string;
  readonly ruleName: string;
}
export interface GetFinding {
  readonly analyzerArn: string;
  readonly id: string;
}
export interface GetGeneratedPolicy {
  readonly includeResourcePlaceholders?: boolean;
  readonly includeServiceLevelTemplate?: boolean;
  readonly jobId: string;
}
export interface ListAccessPreviewFindings {
  readonly accessPreviewId: string;
  readonly analyzerArn: string;
  readonly filter?: {[key: string]: any};
  readonly maxResults?: number;
  readonly nextToken?: string;
}
export interface ListAccessPreviews {
  readonly analyzerArn: string;
  readonly maxResults?: number;
  readonly nextToken?: string;
}
export interface ListAnalyzedResources {
  readonly analyzerArn: string;
  readonly maxResults?: number;
  readonly nextToken?: string;
  readonly resourceType?: string;
}
export interface ListAnalyzers {
  readonly maxResults?: number;
  readonly nextToken?: string;
  readonly type?: string;
}
export interface ListArchiveRules {
  readonly analyzerName: string;
  readonly maxResults?: number;
  readonly nextToken?: string;
}
export interface ListFindings {
  readonly analyzerArn: string;
  readonly filter?: {[key: string]: any};
  readonly maxResults?: number;
  readonly nextToken?: string;
  readonly sort?: SortCriteria;
}
export interface ListPolicyGenerations {
  readonly maxResults?: number;
  readonly nextToken?: string;
  readonly principalArn?: string;
}
export interface ListTagsForResource {
  readonly resourceArn: string;
}
export interface StartPolicyGeneration {
  readonly clientToken?: string;
  readonly cloudTrailDetails?: CloudTrailDetails;
  readonly policyGenerationDetails: PolicyGenerationDetails;
}
export interface StartResourceScan {
  readonly analyzerArn: string;
  readonly resourceArn: string;
}
export interface TagResource {
  readonly resourceArn: string;
  readonly tags: {[key: string]: any};
}
export interface UntagResource {
  readonly resourceArn: string;
  readonly tagKeys: [];
}
export interface UpdateArchiveRule {
  readonly analyzerName: string;
  readonly clientToken?: string;
  readonly filter: {[key: string]: any};
  readonly ruleName: string;
}
export interface UpdateFindings {
  readonly analyzerArn: string;
  readonly clientToken?: string;
  readonly ids?: [];
  readonly resourceArn?: string;
  readonly status: string;
}
export interface ValidatePolicy {
  readonly locale?: string;
  readonly maxResults?: number;
  readonly nextToken?: string;
  readonly policyDocument: string;
  readonly policyType: string;
  readonly validatePolicyResourceType?: string;
}



interface AccessDeniedException {
  readonly message: string;
}

interface AccessPreview {
  readonly analyzerArn: string;
  readonly configurations: {[key: string]: any};
  readonly createdAt: Date;
  readonly id: string;
  readonly status: string;
  readonly statusReason: AccessPreviewStatusReason;
}

interface AccessPreviewFinding {
  readonly action: [];
  readonly changeType: string;
  readonly condition: {[key: string]: any};
  readonly createdAt: Date;
  readonly error: string;
  readonly existingFindingId: string;
  readonly existingFindingStatus: string;
  readonly id: string;
  readonly isPublic: boolean;
  readonly principal: {[key: string]: any};
  readonly resource: string;
  readonly resourceOwnerAccount: string;
  readonly resourceType: string;
  readonly sources: [];
  readonly status: string;
}

interface AccessPreviewStatusReason {
  readonly code: string;
}

interface AccessPreviewSummary {
  readonly analyzerArn: string;
  readonly createdAt: Date;
  readonly id: string;
  readonly status: string;
  readonly statusReason: AccessPreviewStatusReason;
}

interface AclGrantee {
  readonly id: string;
  readonly uri: string;
}

interface AnalyzedResource {
  readonly actions: [];
  readonly analyzedAt: Date;
  readonly createdAt: Date;
  readonly error: string;
  readonly isPublic: boolean;
  readonly resourceArn: string;
  readonly resourceOwnerAccount: string;
  readonly resourceType: string;
  readonly sharedVia: [];
  readonly status: string;
  readonly updatedAt: Date;
}

interface AnalyzedResourceSummary {
  readonly resourceArn: string;
  readonly resourceOwnerAccount: string;
  readonly resourceType: string;
}

interface AnalyzerSummary {
  readonly arn: string;
  readonly createdAt: Date;
  readonly lastResourceAnalyzed: string;
  readonly lastResourceAnalyzedAt: Date;
  readonly name: string;
  readonly status: string;
  readonly statusReason: StatusReason;
  readonly tags: {[key: string]: any};
  readonly type: string;
}

interface ApplyArchiveRuleRequest {
  readonly analyzerArn: string;
  readonly clientToken: string;
  readonly ruleName: string;
}

interface ArchiveRuleSummary {
  readonly createdAt: Date;
  readonly filter: {[key: string]: any};
  readonly ruleName: string;
  readonly updatedAt: Date;
}

interface CancelPolicyGenerationRequest {
  readonly jobId: string;
}

interface CancelPolicyGenerationResponse {
}

interface CloudTrailDetails {
  readonly accessRole: string;
  readonly endTime: Date;
  readonly startTime: Date;
  readonly trails: [];
}

interface CloudTrailProperties {
  readonly endTime: Date;
  readonly startTime: Date;
  readonly trailProperties: [];
}

interface Configuration {
  readonly iamRole: IamRoleConfiguration;
  readonly kmsKey: KmsKeyConfiguration;
  readonly s3Bucket: S3BucketConfiguration;
  readonly secretsManagerSecret: SecretsManagerSecretConfiguration;
  readonly sqsQueue: SqsQueueConfiguration;
}

interface ConflictException {
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}

interface CreateAccessPreviewRequest {
  readonly analyzerArn: string;
  readonly clientToken: string;
  readonly configurations: {[key: string]: any};
}

interface CreateAccessPreviewResponse {
  readonly id: string;
}

interface CreateAnalyzerRequest {
  readonly analyzerName: string;
  readonly archiveRules: [];
  readonly clientToken: string;
  readonly tags: {[key: string]: any};
  readonly type: string;
}

interface CreateAnalyzerResponse {
  readonly arn: string;
}

interface CreateArchiveRuleRequest {
  readonly analyzerName: string;
  readonly clientToken: string;
  readonly filter: {[key: string]: any};
  readonly ruleName: string;
}

interface Criterion {
  readonly contains: [];
  readonly eq: [];
  readonly exists: boolean;
  readonly neq: [];
}

interface DeleteAnalyzerRequest {
  readonly analyzerName: string;
  readonly clientToken: string;
}

interface DeleteArchiveRuleRequest {
  readonly analyzerName: string;
  readonly clientToken: string;
  readonly ruleName: string;
}

interface Finding {
  readonly action: [];
  readonly analyzedAt: Date;
  readonly condition: {[key: string]: any};
  readonly createdAt: Date;
  readonly error: string;
  readonly id: string;
  readonly isPublic: boolean;
  readonly principal: {[key: string]: any};
  readonly resource: string;
  readonly resourceOwnerAccount: string;
  readonly resourceType: string;
  readonly sources: [];
  readonly status: string;
  readonly updatedAt: Date;
}

interface FindingSource {
  readonly detail: FindingSourceDetail;
  readonly type: string;
}

interface FindingSourceDetail {
  readonly accessPointArn: string;
}

interface FindingSummary {
  readonly action: [];
  readonly analyzedAt: Date;
  readonly condition: {[key: string]: any};
  readonly createdAt: Date;
  readonly error: string;
  readonly id: string;
  readonly isPublic: boolean;
  readonly principal: {[key: string]: any};
  readonly resource: string;
  readonly resourceOwnerAccount: string;
  readonly resourceType: string;
  readonly sources: [];
  readonly status: string;
  readonly updatedAt: Date;
}

interface GeneratedPolicy {
  readonly policy: string;
}

interface GeneratedPolicyProperties {
  readonly cloudTrailProperties: CloudTrailProperties;
  readonly isComplete: boolean;
  readonly principalArn: string;
}

interface GeneratedPolicyResult {
  readonly generatedPolicies: [];
  readonly properties: GeneratedPolicyProperties;
}

interface GetAccessPreviewRequest {
  readonly accessPreviewId: string;
  readonly analyzerArn: string;
}

interface GetAccessPreviewResponse {
  readonly accessPreview: AccessPreview;
}

interface GetAnalyzedResourceRequest {
  readonly analyzerArn: string;
  readonly resourceArn: string;
}

interface GetAnalyzedResourceResponse {
  readonly resource: AnalyzedResource;
}

interface GetAnalyzerRequest {
  readonly analyzerName: string;
}

interface GetAnalyzerResponse {
  readonly analyzer: AnalyzerSummary;
}

interface GetArchiveRuleRequest {
  readonly analyzerName: string;
  readonly ruleName: string;
}

interface GetArchiveRuleResponse {
  readonly archiveRule: ArchiveRuleSummary;
}

interface GetFindingRequest {
  readonly analyzerArn: string;
  readonly id: string;
}

interface GetFindingResponse {
  readonly finding: Finding;
}

interface GetGeneratedPolicyRequest {
  readonly includeResourcePlaceholders: boolean;
  readonly includeServiceLevelTemplate: boolean;
  readonly jobId: string;
}

interface GetGeneratedPolicyResponse {
  readonly generatedPolicyResult: GeneratedPolicyResult;
  readonly jobDetails: JobDetails;
}

interface IamRoleConfiguration {
  readonly trustPolicy: string;
}

interface InlineArchiveRule {
  readonly filter: {[key: string]: any};
  readonly ruleName: string;
}

interface InternalServerException {
  readonly message: string;
  readonly retryAfterSeconds: number;
}

interface InternetConfiguration {
}

interface JobDetails {
  readonly completedOn: Date;
  readonly jobError: JobError;
  readonly jobId: string;
  readonly startedOn: Date;
  readonly status: string;
}

interface JobError {
  readonly code: string;
  readonly message: string;
}

interface KmsGrantConfiguration {
  readonly constraints: KmsGrantConstraints;
  readonly granteePrincipal: string;
  readonly issuingAccount: string;
  readonly operations: [];
  readonly retiringPrincipal: string;
}

interface KmsGrantConstraints {
  readonly encryptionContextEquals: {[key: string]: any};
  readonly encryptionContextSubset: {[key: string]: any};
}

interface KmsKeyConfiguration {
  readonly grants: [];
  readonly keyPolicies: {[key: string]: any};
}

interface ListAccessPreviewFindingsRequest {
  readonly accessPreviewId: string;
  readonly analyzerArn: string;
  readonly filter: {[key: string]: any};
  readonly maxResults: number;
  readonly nextToken: string;
}

interface ListAccessPreviewFindingsResponse {
  readonly findings: [];
  readonly nextToken: string;
}

interface ListAccessPreviewsRequest {
  readonly analyzerArn: string;
  readonly maxResults: number;
  readonly nextToken: string;
}

interface ListAccessPreviewsResponse {
  readonly accessPreviews: [];
  readonly nextToken: string;
}

interface ListAnalyzedResourcesRequest {
  readonly analyzerArn: string;
  readonly maxResults: number;
  readonly nextToken: string;
  readonly resourceType: string;
}

interface ListAnalyzedResourcesResponse {
  readonly analyzedResources: [];
  readonly nextToken: string;
}

interface ListAnalyzersRequest {
  readonly maxResults: number;
  readonly nextToken: string;
  readonly type: string;
}

interface ListAnalyzersResponse {
  readonly analyzers: [];
  readonly nextToken: string;
}

interface ListArchiveRulesRequest {
  readonly analyzerName: string;
  readonly maxResults: number;
  readonly nextToken: string;
}

interface ListArchiveRulesResponse {
  readonly archiveRules: [];
  readonly nextToken: string;
}

interface ListFindingsRequest {
  readonly analyzerArn: string;
  readonly filter: {[key: string]: any};
  readonly maxResults: number;
  readonly nextToken: string;
  readonly sort: SortCriteria;
}

interface ListFindingsResponse {
  readonly findings: [];
  readonly nextToken: string;
}

interface ListPolicyGenerationsRequest {
  readonly maxResults: number;
  readonly nextToken: string;
  readonly principalArn: string;
}

interface ListPolicyGenerationsResponse {
  readonly nextToken: string;
  readonly policyGenerations: [];
}

interface ListTagsForResourceRequest {
  readonly resourceArn: string;
}

interface ListTagsForResourceResponse {
  readonly tags: {[key: string]: any};
}

interface Location {
  readonly path: [];
  readonly span: Span;
}

interface NetworkOriginConfiguration {
  readonly internetConfiguration: InternetConfiguration;
  readonly vpcConfiguration: VpcConfiguration;
}

interface PathElement {
  readonly index: number;
  readonly key: string;
  readonly substring: Substring;
  readonly value: string;
}

interface PolicyGeneration {
  readonly completedOn: Date;
  readonly jobId: string;
  readonly principalArn: string;
  readonly startedOn: Date;
  readonly status: string;
}

interface PolicyGenerationDetails {
  readonly principalArn: string;
}

interface Position {
  readonly column: number;
  readonly line: number;
  readonly offset: number;
}

interface ResourceNotFoundException {
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}

interface S3AccessPointConfiguration {
  readonly accessPointPolicy: string;
  readonly networkOrigin: NetworkOriginConfiguration;
  readonly publicAccessBlock: S3PublicAccessBlockConfiguration;
}

interface S3BucketAclGrantConfiguration {
  readonly grantee: AclGrantee;
  readonly permission: string;
}

interface S3BucketConfiguration {
  readonly accessPoints: {[key: string]: any};
  readonly bucketAclGrants: [];
  readonly bucketPolicy: string;
  readonly bucketPublicAccessBlock: S3PublicAccessBlockConfiguration;
}

interface S3PublicAccessBlockConfiguration {
  readonly ignorePublicAcls: boolean;
  readonly restrictPublicBuckets: boolean;
}

interface SecretsManagerSecretConfiguration {
  readonly kmsKeyId: string;
  readonly secretPolicy: string;
}

interface ServiceQuotaExceededException {
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}

interface SortCriteria {
  readonly attributeName: string;
  readonly orderBy: string;
}

interface Span {
  readonly end: Position;
  readonly start: Position;
}

interface SqsQueueConfiguration {
  readonly queuePolicy: string;
}

interface StartPolicyGenerationRequest {
  readonly clientToken: string;
  readonly cloudTrailDetails: CloudTrailDetails;
  readonly policyGenerationDetails: PolicyGenerationDetails;
}

interface StartPolicyGenerationResponse {
  readonly jobId: string;
}

interface StartResourceScanRequest {
  readonly analyzerArn: string;
  readonly resourceArn: string;
}

interface StatusReason {
  readonly code: string;
}

interface Substring {
  readonly length: number;
  readonly start: number;
}

interface TagResourceRequest {
  readonly resourceArn: string;
  readonly tags: {[key: string]: any};
}

interface TagResourceResponse {
}

interface ThrottlingException {
  readonly message: string;
  readonly retryAfterSeconds: number;
}

interface Trail {
  readonly allRegions: boolean;
  readonly cloudTrailArn: string;
  readonly regions: [];
}

interface TrailProperties {
  readonly allRegions: boolean;
  readonly cloudTrailArn: string;
  readonly regions: [];
}

interface UntagResourceRequest {
  readonly resourceArn: string;
  readonly tagKeys: [];
}

interface UntagResourceResponse {
}

interface UpdateArchiveRuleRequest {
  readonly analyzerName: string;
  readonly clientToken: string;
  readonly filter: {[key: string]: any};
  readonly ruleName: string;
}

interface UpdateFindingsRequest {
  readonly analyzerArn: string;
  readonly clientToken: string;
  readonly ids: [];
  readonly resourceArn: string;
  readonly status: string;
}

interface ValidatePolicyFinding {
  readonly findingDetails: string;
  readonly findingType: string;
  readonly issueCode: string;
  readonly learnMoreLink: string;
  readonly locations: [];
}

interface ValidatePolicyRequest {
  readonly locale: string;
  readonly maxResults: number;
  readonly nextToken: string;
  readonly policyDocument: string;
  readonly policyType: string;
  readonly validatePolicyResourceType: string;
}

interface ValidatePolicyResponse {
  readonly findings: [];
  readonly nextToken: string;
}

interface ValidationException {
  readonly fieldList: [];
  readonly message: string;
  readonly reason: string;
}

interface ValidationExceptionField {
  readonly message: string;
  readonly name: string;
}

interface VpcConfiguration {
  readonly vpcId: string;
}

