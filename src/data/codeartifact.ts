/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface AssociateExternalConnection {
  readonly domain: string;
  readonly domainOwner?: string;
  readonly repository: string;
  readonly externalConnection: string;
}
export interface CopyPackageVersions {
  readonly domain: string;
  readonly domainOwner?: string;
  readonly sourceRepository: string;
  readonly destinationRepository: string;
  readonly format: string;
  readonly namespace?: string;
  readonly package: string;
  readonly versions?: [];
  readonly versionRevisions?: {[key: string]: any};
  readonly allowOverwrite?: boolean;
  readonly includeFromUpstream?: boolean;
}
export interface CreateDomain {
  readonly domain: string;
  readonly encryptionKey?: string;
  readonly tags?: [];
}
export interface CreateRepository {
  readonly domain: string;
  readonly domainOwner?: string;
  readonly repository: string;
  readonly description?: string;
  readonly upstreams?: [];
  readonly tags?: [];
}
export interface DeleteDomain {
  readonly domain: string;
  readonly domainOwner?: string;
}
export interface DeleteDomainPermissionsPolicy {
  readonly domain: string;
  readonly domainOwner?: string;
  readonly policyRevision?: string;
}
export interface DeletePackageVersions {
  readonly domain: string;
  readonly domainOwner?: string;
  readonly repository: string;
  readonly format: string;
  readonly namespace?: string;
  readonly package: string;
  readonly versions: [];
  readonly expectedStatus?: string;
}
export interface DeleteRepository {
  readonly domain: string;
  readonly domainOwner?: string;
  readonly repository: string;
}
export interface DeleteRepositoryPermissionsPolicy {
  readonly domain: string;
  readonly domainOwner?: string;
  readonly repository: string;
  readonly policyRevision?: string;
}
export interface DescribeDomain {
  readonly domain: string;
  readonly domainOwner?: string;
}
export interface DescribePackageVersion {
  readonly domain: string;
  readonly domainOwner?: string;
  readonly repository: string;
  readonly format: string;
  readonly namespace?: string;
  readonly package: string;
  readonly packageVersion: string;
}
export interface DescribeRepository {
  readonly domain: string;
  readonly domainOwner?: string;
  readonly repository: string;
}
export interface DisassociateExternalConnection {
  readonly domain: string;
  readonly domainOwner?: string;
  readonly repository: string;
  readonly externalConnection: string;
}
export interface DisposePackageVersions {
  readonly domain: string;
  readonly domainOwner?: string;
  readonly repository: string;
  readonly format: string;
  readonly namespace?: string;
  readonly package: string;
  readonly versions: [];
  readonly versionRevisions?: {[key: string]: any};
  readonly expectedStatus?: string;
}
export interface GetAuthorizationToken {
  readonly domain: string;
  readonly domainOwner?: string;
  readonly durationSeconds?: number;
}
export interface GetDomainPermissionsPolicy {
  readonly domain: string;
  readonly domainOwner?: string;
}
export interface GetPackageVersionAsset {
  readonly domain: string;
  readonly domainOwner?: string;
  readonly repository: string;
  readonly format: string;
  readonly namespace?: string;
  readonly package: string;
  readonly packageVersion: string;
  readonly asset: string;
  readonly packageVersionRevision?: string;
}
export interface GetPackageVersionReadme {
  readonly domain: string;
  readonly domainOwner?: string;
  readonly repository: string;
  readonly format: string;
  readonly namespace?: string;
  readonly package: string;
  readonly packageVersion: string;
}
export interface GetRepositoryEndpoint {
  readonly domain: string;
  readonly domainOwner?: string;
  readonly repository: string;
  readonly format: string;
}
export interface GetRepositoryPermissionsPolicy {
  readonly domain: string;
  readonly domainOwner?: string;
  readonly repository: string;
}
export interface ListDomains {
  readonly maxResults?: number;
  readonly nextToken?: string;
}
export interface ListPackageVersionAssets {
  readonly domain: string;
  readonly domainOwner?: string;
  readonly repository: string;
  readonly format: string;
  readonly namespace?: string;
  readonly package: string;
  readonly packageVersion: string;
  readonly maxResults?: number;
  readonly nextToken?: string;
}
export interface ListPackageVersionDependencies {
  readonly domain: string;
  readonly domainOwner?: string;
  readonly repository: string;
  readonly format: string;
  readonly namespace?: string;
  readonly package: string;
  readonly packageVersion: string;
  readonly nextToken?: string;
}
export interface ListPackageVersions {
  readonly domain: string;
  readonly domainOwner?: string;
  readonly repository: string;
  readonly format: string;
  readonly namespace?: string;
  readonly package: string;
  readonly status?: string;
  readonly sortBy?: string;
  readonly maxResults?: number;
  readonly nextToken?: string;
}
export interface ListPackages {
  readonly domain: string;
  readonly domainOwner?: string;
  readonly repository: string;
  readonly format?: string;
  readonly namespace?: string;
  readonly packagePrefix?: string;
  readonly maxResults?: number;
  readonly nextToken?: string;
}
export interface ListRepositories {
  readonly repositoryPrefix?: string;
  readonly maxResults?: number;
  readonly nextToken?: string;
}
export interface ListRepositoriesInDomain {
  readonly domain: string;
  readonly domainOwner?: string;
  readonly administratorAccount?: string;
  readonly repositoryPrefix?: string;
  readonly maxResults?: number;
  readonly nextToken?: string;
}
export interface ListTagsForResource {
  readonly resourceArn: string;
}
export interface PutDomainPermissionsPolicy {
  readonly domain: string;
  readonly domainOwner?: string;
  readonly policyRevision?: string;
  readonly policyDocument: string;
}
export interface PutRepositoryPermissionsPolicy {
  readonly domain: string;
  readonly domainOwner?: string;
  readonly repository: string;
  readonly policyRevision?: string;
  readonly policyDocument: string;
}
export interface TagResource {
  readonly resourceArn: string;
  readonly tags: [];
}
export interface UntagResource {
  readonly resourceArn: string;
  readonly tagKeys: [];
}
export interface UpdatePackageVersionsStatus {
  readonly domain: string;
  readonly domainOwner?: string;
  readonly repository: string;
  readonly format: string;
  readonly namespace?: string;
  readonly package: string;
  readonly versions: [];
  readonly versionRevisions?: {[key: string]: any};
  readonly expectedStatus?: string;
  readonly targetStatus: string;
}
export interface UpdateRepository {
  readonly domain: string;
  readonly domainOwner?: string;
  readonly repository: string;
  readonly description?: string;
  readonly upstreams?: [];
}



interface AccessDeniedException {
  readonly message: string;
}

interface AssetSummary {
  readonly name: string;
  readonly size: number;
  readonly hashes: {[key: string]: any};
}

interface AssociateExternalConnectionRequest {
  readonly domain: string;
  readonly domainOwner: string;
  readonly repository: string;
  readonly externalConnection: string;
}

interface AssociateExternalConnectionResult {
  readonly repository: RepositoryDescription;
}

interface ConflictException {
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}

interface CopyPackageVersionsRequest {
  readonly domain: string;
  readonly domainOwner: string;
  readonly sourceRepository: string;
  readonly destinationRepository: string;
  readonly format: string;
  readonly namespace: string;
  readonly package: string;
  readonly versions: [];
  readonly versionRevisions: {[key: string]: any};
  readonly allowOverwrite: boolean;
  readonly includeFromUpstream: boolean;
}

interface CopyPackageVersionsResult {
  readonly successfulVersions: {[key: string]: any};
  readonly failedVersions: {[key: string]: any};
}

interface CreateDomainRequest {
  readonly domain: string;
  readonly encryptionKey: string;
  readonly tags: [];
}

interface CreateDomainResult {
  readonly domain: DomainDescription;
}

interface CreateRepositoryRequest {
  readonly domain: string;
  readonly domainOwner: string;
  readonly repository: string;
  readonly description: string;
  readonly upstreams: [];
  readonly tags: [];
}

interface CreateRepositoryResult {
  readonly repository: RepositoryDescription;
}

interface DeleteDomainPermissionsPolicyRequest {
  readonly domain: string;
  readonly domainOwner: string;
  readonly policyRevision: string;
}

interface DeleteDomainPermissionsPolicyResult {
  readonly policy: ResourcePolicy;
}

interface DeleteDomainRequest {
  readonly domain: string;
  readonly domainOwner: string;
}

interface DeleteDomainResult {
  readonly domain: DomainDescription;
}

interface DeletePackageVersionsRequest {
  readonly domain: string;
  readonly domainOwner: string;
  readonly repository: string;
  readonly format: string;
  readonly namespace: string;
  readonly package: string;
  readonly versions: [];
  readonly expectedStatus: string;
}

interface DeletePackageVersionsResult {
  readonly successfulVersions: {[key: string]: any};
  readonly failedVersions: {[key: string]: any};
}

interface DeleteRepositoryPermissionsPolicyRequest {
  readonly domain: string;
  readonly domainOwner: string;
  readonly repository: string;
  readonly policyRevision: string;
}

interface DeleteRepositoryPermissionsPolicyResult {
  readonly policy: ResourcePolicy;
}

interface DeleteRepositoryRequest {
  readonly domain: string;
  readonly domainOwner: string;
  readonly repository: string;
}

interface DeleteRepositoryResult {
  readonly repository: RepositoryDescription;
}

interface DescribeDomainRequest {
  readonly domain: string;
  readonly domainOwner: string;
}

interface DescribeDomainResult {
  readonly domain: DomainDescription;
}

interface DescribePackageVersionRequest {
  readonly domain: string;
  readonly domainOwner: string;
  readonly repository: string;
  readonly format: string;
  readonly namespace: string;
  readonly package: string;
  readonly packageVersion: string;
}

interface DescribePackageVersionResult {
  readonly packageVersion: PackageVersionDescription;
}

interface DescribeRepositoryRequest {
  readonly domain: string;
  readonly domainOwner: string;
  readonly repository: string;
}

interface DescribeRepositoryResult {
  readonly repository: RepositoryDescription;
}

interface DisassociateExternalConnectionRequest {
  readonly domain: string;
  readonly domainOwner: string;
  readonly repository: string;
  readonly externalConnection: string;
}

interface DisassociateExternalConnectionResult {
  readonly repository: RepositoryDescription;
}

interface DisposePackageVersionsRequest {
  readonly domain: string;
  readonly domainOwner: string;
  readonly repository: string;
  readonly format: string;
  readonly namespace: string;
  readonly package: string;
  readonly versions: [];
  readonly versionRevisions: {[key: string]: any};
  readonly expectedStatus: string;
}

interface DisposePackageVersionsResult {
  readonly successfulVersions: {[key: string]: any};
  readonly failedVersions: {[key: string]: any};
}

interface DomainDescription {
  readonly name: string;
  readonly owner: string;
  readonly arn: string;
  readonly status: string;
  readonly createdTime: Date;
  readonly encryptionKey: string;
  readonly repositoryCount: number;
  readonly assetSizeBytes: number;
  readonly s3BucketArn: string;
}

interface DomainSummary {
  readonly name: string;
  readonly owner: string;
  readonly arn: string;
  readonly status: string;
  readonly createdTime: Date;
  readonly encryptionKey: string;
}

interface GetAuthorizationTokenRequest {
  readonly domain: string;
  readonly domainOwner: string;
  readonly durationSeconds: number;
}

interface GetAuthorizationTokenResult {
  readonly authorizationToken: string;
  readonly expiration: Date;
}

interface GetDomainPermissionsPolicyRequest {
  readonly domain: string;
  readonly domainOwner: string;
}

interface GetDomainPermissionsPolicyResult {
  readonly policy: ResourcePolicy;
}

interface GetPackageVersionAssetRequest {
  readonly domain: string;
  readonly domainOwner: string;
  readonly repository: string;
  readonly format: string;
  readonly namespace: string;
  readonly package: string;
  readonly packageVersion: string;
  readonly asset: string;
  readonly packageVersionRevision: string;
}

interface GetPackageVersionAssetResult {
  readonly asset: unknown;
  readonly assetName: string;
  readonly packageVersion: string;
  readonly packageVersionRevision: string;
}

interface GetPackageVersionReadmeRequest {
  readonly domain: string;
  readonly domainOwner: string;
  readonly repository: string;
  readonly format: string;
  readonly namespace: string;
  readonly package: string;
  readonly packageVersion: string;
}

interface GetPackageVersionReadmeResult {
  readonly format: string;
  readonly namespace: string;
  readonly package: string;
  readonly version: string;
  readonly versionRevision: string;
  readonly readme: string;
}

interface GetRepositoryEndpointRequest {
  readonly domain: string;
  readonly domainOwner: string;
  readonly repository: string;
  readonly format: string;
}

interface GetRepositoryEndpointResult {
  readonly repositoryEndpoint: string;
}

interface GetRepositoryPermissionsPolicyRequest {
  readonly domain: string;
  readonly domainOwner: string;
  readonly repository: string;
}

interface GetRepositoryPermissionsPolicyResult {
  readonly policy: ResourcePolicy;
}

interface InternalServerException {
  readonly message: string;
}

interface LicenseInfo {
  readonly name: string;
  readonly url: string;
}

interface ListDomainsRequest {
  readonly maxResults: number;
  readonly nextToken: string;
}

interface ListDomainsResult {
  readonly domains: [];
  readonly nextToken: string;
}

interface ListPackageVersionAssetsRequest {
  readonly domain: string;
  readonly domainOwner: string;
  readonly repository: string;
  readonly format: string;
  readonly namespace: string;
  readonly package: string;
  readonly packageVersion: string;
  readonly maxResults: number;
  readonly nextToken: string;
}

interface ListPackageVersionAssetsResult {
  readonly format: string;
  readonly namespace: string;
  readonly package: string;
  readonly version: string;
  readonly versionRevision: string;
  readonly nextToken: string;
  readonly assets: [];
}

interface ListPackageVersionDependenciesRequest {
  readonly domain: string;
  readonly domainOwner: string;
  readonly repository: string;
  readonly format: string;
  readonly namespace: string;
  readonly package: string;
  readonly packageVersion: string;
  readonly nextToken: string;
}

interface ListPackageVersionDependenciesResult {
  readonly format: string;
  readonly namespace: string;
  readonly package: string;
  readonly version: string;
  readonly versionRevision: string;
  readonly nextToken: string;
  readonly dependencies: [];
}

interface ListPackageVersionsRequest {
  readonly domain: string;
  readonly domainOwner: string;
  readonly repository: string;
  readonly format: string;
  readonly namespace: string;
  readonly package: string;
  readonly status: string;
  readonly sortBy: string;
  readonly maxResults: number;
  readonly nextToken: string;
}

interface ListPackageVersionsResult {
  readonly defaultDisplayVersion: string;
  readonly format: string;
  readonly namespace: string;
  readonly package: string;
  readonly versions: [];
  readonly nextToken: string;
}

interface ListPackagesRequest {
  readonly domain: string;
  readonly domainOwner: string;
  readonly repository: string;
  readonly format: string;
  readonly namespace: string;
  readonly packagePrefix: string;
  readonly maxResults: number;
  readonly nextToken: string;
}

interface ListPackagesResult {
  readonly packages: [];
  readonly nextToken: string;
}

interface ListRepositoriesInDomainRequest {
  readonly domain: string;
  readonly domainOwner: string;
  readonly administratorAccount: string;
  readonly repositoryPrefix: string;
  readonly maxResults: number;
  readonly nextToken: string;
}

interface ListRepositoriesInDomainResult {
  readonly repositories: [];
  readonly nextToken: string;
}

interface ListRepositoriesRequest {
  readonly repositoryPrefix: string;
  readonly maxResults: number;
  readonly nextToken: string;
}

interface ListRepositoriesResult {
  readonly repositories: [];
  readonly nextToken: string;
}

interface ListTagsForResourceRequest {
  readonly resourceArn: string;
}

interface ListTagsForResourceResult {
  readonly tags: [];
}

interface PackageDependency {
  readonly namespace: string;
  readonly package: string;
  readonly dependencyType: string;
  readonly versionRequirement: string;
}

interface PackageSummary {
  readonly format: string;
  readonly namespace: string;
  readonly package: string;
}

interface PackageVersionDescription {
  readonly format: string;
  readonly namespace: string;
  readonly packageName: string;
  readonly displayName: string;
  readonly version: string;
  readonly summary: string;
  readonly homePage: string;
  readonly sourceCodeRepository: string;
  readonly publishedTime: Date;
  readonly licenses: [];
  readonly revision: string;
  readonly status: string;
}

interface PackageVersionError {
  readonly errorCode: string;
  readonly errorMessage: string;
}

interface PackageVersionSummary {
  readonly version: string;
  readonly revision: string;
  readonly status: string;
}

interface PutDomainPermissionsPolicyRequest {
  readonly domain: string;
  readonly domainOwner: string;
  readonly policyRevision: string;
  readonly policyDocument: string;
}

interface PutDomainPermissionsPolicyResult {
  readonly policy: ResourcePolicy;
}

interface PutRepositoryPermissionsPolicyRequest {
  readonly domain: string;
  readonly domainOwner: string;
  readonly repository: string;
  readonly policyRevision: string;
  readonly policyDocument: string;
}

interface PutRepositoryPermissionsPolicyResult {
  readonly policy: ResourcePolicy;
}

interface RepositoryDescription {
  readonly name: string;
  readonly administratorAccount: string;
  readonly domainName: string;
  readonly domainOwner: string;
  readonly arn: string;
  readonly description: string;
  readonly upstreams: [];
  readonly externalConnections: [];
}

interface RepositoryExternalConnectionInfo {
  readonly externalConnectionName: string;
  readonly packageFormat: string;
  readonly status: string;
}

interface RepositorySummary {
  readonly name: string;
  readonly administratorAccount: string;
  readonly domainName: string;
  readonly domainOwner: string;
  readonly arn: string;
  readonly description: string;
}

interface ResourceNotFoundException {
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}

interface ResourcePolicy {
  readonly resourceArn: string;
  readonly revision: string;
  readonly document: string;
}

interface ServiceQuotaExceededException {
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}

interface SuccessfulPackageVersionInfo {
  readonly revision: string;
  readonly status: string;
}

interface Tag {
  readonly key: string;
  readonly value: string;
}

interface TagResourceRequest {
  readonly resourceArn: string;
  readonly tags: [];
}

interface TagResourceResult {
}

interface ThrottlingException {
  readonly message: string;
  readonly retryAfterSeconds: number;
}

interface UntagResourceRequest {
  readonly resourceArn: string;
  readonly tagKeys: [];
}

interface UntagResourceResult {
}

interface UpdatePackageVersionsStatusRequest {
  readonly domain: string;
  readonly domainOwner: string;
  readonly repository: string;
  readonly format: string;
  readonly namespace: string;
  readonly package: string;
  readonly versions: [];
  readonly versionRevisions: {[key: string]: any};
  readonly expectedStatus: string;
  readonly targetStatus: string;
}

interface UpdatePackageVersionsStatusResult {
  readonly successfulVersions: {[key: string]: any};
  readonly failedVersions: {[key: string]: any};
}

interface UpdateRepositoryRequest {
  readonly domain: string;
  readonly domainOwner: string;
  readonly repository: string;
  readonly description: string;
  readonly upstreams: [];
}

interface UpdateRepositoryResult {
  readonly repository: RepositoryDescription;
}

interface UpstreamRepository {
  readonly repositoryName: string;
}

interface UpstreamRepositoryInfo {
  readonly repositoryName: string;
}

interface ValidationException {
  readonly message: string;
  readonly reason: string;
}

