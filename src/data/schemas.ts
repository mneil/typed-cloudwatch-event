/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface CreateDiscoverer {
  readonly Description?: string;
  readonly SourceArn: string;
  readonly CrossAccount?: boolean;
  readonly Tags?: {[key: string]: any};
}
export interface CreateRegistry {
  readonly Description?: string;
  readonly RegistryName: string;
  readonly Tags?: {[key: string]: any};
}
export interface CreateSchema {
  readonly Content: string;
  readonly Description?: string;
  readonly RegistryName: string;
  readonly SchemaName: string;
  readonly Tags?: {[key: string]: any};
  readonly Type: string;
}
export interface DeleteDiscoverer {
  readonly DiscovererId: string;
}
export interface DeleteRegistry {
  readonly RegistryName: string;
}
export interface DeleteResourcePolicy {
  readonly RegistryName?: string;
}
export interface DeleteSchema {
  readonly RegistryName: string;
  readonly SchemaName: string;
}
export interface DeleteSchemaVersion {
  readonly RegistryName: string;
  readonly SchemaName: string;
  readonly SchemaVersion: string;
}
export interface DescribeCodeBinding {
  readonly Language: string;
  readonly RegistryName: string;
  readonly SchemaName: string;
  readonly SchemaVersion?: string;
}
export interface DescribeDiscoverer {
  readonly DiscovererId: string;
}
export interface DescribeRegistry {
  readonly RegistryName: string;
}
export interface DescribeSchema {
  readonly RegistryName: string;
  readonly SchemaName: string;
  readonly SchemaVersion?: string;
}
export interface ExportSchema {
  readonly RegistryName: string;
  readonly SchemaName: string;
  readonly SchemaVersion?: string;
  readonly Type: string;
}
export interface GetCodeBindingSource {
  readonly Language: string;
  readonly RegistryName: string;
  readonly SchemaName: string;
  readonly SchemaVersion?: string;
}
export interface GetDiscoveredSchema {
  readonly Events: [];
  readonly Type: string;
}
export interface GetResourcePolicy {
  readonly RegistryName?: string;
}
export interface ListDiscoverers {
  readonly DiscovererIdPrefix?: string;
  readonly Limit?: number;
  readonly NextToken?: string;
  readonly SourceArnPrefix?: string;
}
export interface ListRegistries {
  readonly Limit?: number;
  readonly NextToken?: string;
  readonly RegistryNamePrefix?: string;
  readonly Scope?: string;
}
export interface ListSchemaVersions {
  readonly Limit?: number;
  readonly NextToken?: string;
  readonly RegistryName: string;
  readonly SchemaName: string;
}
export interface ListSchemas {
  readonly Limit?: number;
  readonly NextToken?: string;
  readonly RegistryName: string;
  readonly SchemaNamePrefix?: string;
}
export interface ListTagsForResource {
  readonly ResourceArn: string;
}
export interface PutCodeBinding {
  readonly Language: string;
  readonly RegistryName: string;
  readonly SchemaName: string;
  readonly SchemaVersion?: string;
}
export interface PutResourcePolicy {
  readonly Policy: string;
  readonly RegistryName?: string;
  readonly RevisionId?: string;
}
export interface SearchSchemas {
  readonly Keywords: string;
  readonly Limit?: number;
  readonly NextToken?: string;
  readonly RegistryName: string;
}
export interface StartDiscoverer {
  readonly DiscovererId: string;
}
export interface StopDiscoverer {
  readonly DiscovererId: string;
}
export interface TagResource {
  readonly ResourceArn: string;
  readonly Tags: {[key: string]: any};
}
export interface UntagResource {
  readonly ResourceArn: string;
  readonly TagKeys: [];
}
export interface UpdateDiscoverer {
  readonly Description?: string;
  readonly DiscovererId: string;
  readonly CrossAccount?: boolean;
}
export interface UpdateRegistry {
  readonly Description?: string;
  readonly RegistryName: string;
}
export interface UpdateSchema {
  readonly ClientTokenId?: string;
  readonly Content?: string;
  readonly Description?: string;
  readonly RegistryName: string;
  readonly SchemaName: string;
  readonly Type?: string;
}



interface BadRequestException {
  readonly Code: string;
  readonly Message: string;
}

interface CodeBindingOutput {
  readonly CreationDate: Date;
  readonly LastModified: Date;
  readonly SchemaVersion: string;
  readonly Status: string;
}

interface ConflictException {
  readonly Code: string;
  readonly Message: string;
}

interface CreateDiscovererInput {
  readonly Description: string;
  readonly SourceArn: string;
  readonly CrossAccount: boolean;
  readonly Tags: {[key: string]: any};
}

interface CreateDiscovererRequest {
  readonly Description: string;
  readonly SourceArn: string;
  readonly CrossAccount: boolean;
  readonly Tags: {[key: string]: any};
}

interface CreateDiscovererResponse {
  readonly Description: string;
  readonly DiscovererArn: string;
  readonly DiscovererId: string;
  readonly SourceArn: string;
  readonly State: string;
  readonly CrossAccount: boolean;
  readonly Tags: {[key: string]: any};
}

interface CreateRegistryInput {
  readonly Description: string;
  readonly Tags: {[key: string]: any};
}

interface CreateRegistryRequest {
  readonly Description: string;
  readonly RegistryName: string;
  readonly Tags: {[key: string]: any};
}

interface CreateRegistryResponse {
  readonly Description: string;
  readonly RegistryArn: string;
  readonly RegistryName: string;
  readonly Tags: {[key: string]: any};
}

interface CreateSchemaInput {
  readonly Content: string;
  readonly Description: string;
  readonly Tags: {[key: string]: any};
  readonly Type: string;
}

interface CreateSchemaRequest {
  readonly Content: string;
  readonly Description: string;
  readonly RegistryName: string;
  readonly SchemaName: string;
  readonly Tags: {[key: string]: any};
  readonly Type: string;
}

interface CreateSchemaResponse {
  readonly Description: string;
  readonly LastModified: Date;
  readonly SchemaArn: string;
  readonly SchemaName: string;
  readonly SchemaVersion: string;
  readonly Tags: {[key: string]: any};
  readonly Type: string;
  readonly VersionCreatedDate: Date;
}

interface DeleteDiscovererRequest {
  readonly DiscovererId: string;
}

interface DeleteRegistryRequest {
  readonly RegistryName: string;
}

interface DeleteResourcePolicyRequest {
  readonly RegistryName: string;
}

interface DeleteSchemaRequest {
  readonly RegistryName: string;
  readonly SchemaName: string;
}

interface DeleteSchemaVersionRequest {
  readonly RegistryName: string;
  readonly SchemaName: string;
  readonly SchemaVersion: string;
}

interface DescribeCodeBindingRequest {
  readonly Language: string;
  readonly RegistryName: string;
  readonly SchemaName: string;
  readonly SchemaVersion: string;
}

interface DescribeCodeBindingResponse {
  readonly CreationDate: Date;
  readonly LastModified: Date;
  readonly SchemaVersion: string;
  readonly Status: string;
}

interface DescribeDiscovererRequest {
  readonly DiscovererId: string;
}

interface DescribeDiscovererResponse {
  readonly Description: string;
  readonly DiscovererArn: string;
  readonly DiscovererId: string;
  readonly SourceArn: string;
  readonly State: string;
  readonly CrossAccount: boolean;
  readonly Tags: {[key: string]: any};
}

interface DescribeRegistryRequest {
  readonly RegistryName: string;
}

interface DescribeRegistryResponse {
  readonly Description: string;
  readonly RegistryArn: string;
  readonly RegistryName: string;
  readonly Tags: {[key: string]: any};
}

interface DescribeSchemaOutput {
  readonly Content: string;
  readonly Description: string;
  readonly LastModified: Date;
  readonly SchemaArn: string;
  readonly SchemaName: string;
  readonly SchemaVersion: string;
  readonly Tags: {[key: string]: any};
  readonly Type: string;
  readonly VersionCreatedDate: Date;
}

interface DescribeSchemaRequest {
  readonly RegistryName: string;
  readonly SchemaName: string;
  readonly SchemaVersion: string;
}

interface DescribeSchemaResponse {
  readonly Content: string;
  readonly Description: string;
  readonly LastModified: Date;
  readonly SchemaArn: string;
  readonly SchemaName: string;
  readonly SchemaVersion: string;
  readonly Tags: {[key: string]: any};
  readonly Type: string;
  readonly VersionCreatedDate: Date;
}

interface DiscovererOutput {
  readonly Description: string;
  readonly DiscovererArn: string;
  readonly DiscovererId: string;
  readonly SourceArn: string;
  readonly State: string;
  readonly CrossAccount: boolean;
  readonly Tags: {[key: string]: any};
}

interface DiscovererStateOutput {
  readonly DiscovererId: string;
  readonly State: string;
}

interface DiscovererSummary {
  readonly DiscovererArn: string;
  readonly DiscovererId: string;
  readonly SourceArn: string;
  readonly State: string;
  readonly CrossAccount: boolean;
  readonly Tags: {[key: string]: any};
}

interface ErrorOutput {
  readonly Code: string;
  readonly Message: string;
}

interface ExportSchemaOutput {
  readonly Content: string;
  readonly SchemaArn: string;
  readonly SchemaName: string;
  readonly SchemaVersion: string;
  readonly Type: string;
}

interface ExportSchemaRequest {
  readonly RegistryName: string;
  readonly SchemaName: string;
  readonly SchemaVersion: string;
  readonly Type: string;
}

interface ExportSchemaResponse {
  readonly Content: string;
  readonly SchemaArn: string;
  readonly SchemaName: string;
  readonly SchemaVersion: string;
  readonly Type: string;
}

interface ForbiddenException {
  readonly Code: string;
  readonly Message: string;
}

interface GetCodeBindingSourceRequest {
  readonly Language: string;
  readonly RegistryName: string;
  readonly SchemaName: string;
  readonly SchemaVersion: string;
}

interface GetCodeBindingSourceResponse {
  readonly Body: unknown;
}

interface GetDiscoveredSchemaInput {
  readonly Events: [];
  readonly Type: string;
}

interface GetDiscoveredSchemaOutput {
  readonly Content: string;
}

interface GetDiscoveredSchemaRequest {
  readonly Events: [];
  readonly Type: string;
}

interface GetDiscoveredSchemaResponse {
  readonly Content: string;
}

interface GetResourcePolicyOutput {
  readonly Policy: string;
  readonly RevisionId: string;
}

interface GetResourcePolicyRequest {
  readonly RegistryName: string;
}

interface GetResourcePolicyResponse {
  readonly Policy: string;
  readonly RevisionId: string;
}

interface GoneException {
  readonly Code: string;
  readonly Message: string;
}

interface InternalServerErrorException {
  readonly Code: string;
  readonly Message: string;
}

interface ListDiscoverersOutput {
  readonly Discoverers: [];
  readonly NextToken: string;
}

interface ListDiscoverersRequest {
  readonly DiscovererIdPrefix: string;
  readonly Limit: number;
  readonly NextToken: string;
  readonly SourceArnPrefix: string;
}

interface ListDiscoverersResponse {
  readonly Discoverers: [];
  readonly NextToken: string;
}

interface ListRegistriesOutput {
  readonly NextToken: string;
  readonly Registries: [];
}

interface ListRegistriesRequest {
  readonly Limit: number;
  readonly NextToken: string;
  readonly RegistryNamePrefix: string;
  readonly Scope: string;
}

interface ListRegistriesResponse {
  readonly NextToken: string;
  readonly Registries: [];
}

interface ListSchemaVersionsOutput {
  readonly NextToken: string;
  readonly SchemaVersions: [];
}

interface ListSchemaVersionsRequest {
  readonly Limit: number;
  readonly NextToken: string;
  readonly RegistryName: string;
  readonly SchemaName: string;
}

interface ListSchemaVersionsResponse {
  readonly NextToken: string;
  readonly SchemaVersions: [];
}

interface ListSchemasOutput {
  readonly NextToken: string;
  readonly Schemas: [];
}

interface ListSchemasRequest {
  readonly Limit: number;
  readonly NextToken: string;
  readonly RegistryName: string;
  readonly SchemaNamePrefix: string;
}

interface ListSchemasResponse {
  readonly NextToken: string;
  readonly Schemas: [];
}

interface ListTagsForResourceOutput {
  readonly Tags: {[key: string]: any};
}

interface ListTagsForResourceRequest {
  readonly ResourceArn: string;
}

interface ListTagsForResourceResponse {
  readonly Tags: {[key: string]: any};
}

interface NotFoundException {
  readonly Code: string;
  readonly Message: string;
}

interface PreconditionFailedException {
  readonly Code: string;
  readonly Message: string;
}

interface PutCodeBindingRequest {
  readonly Language: string;
  readonly RegistryName: string;
  readonly SchemaName: string;
  readonly SchemaVersion: string;
}

interface PutCodeBindingResponse {
  readonly CreationDate: Date;
  readonly LastModified: Date;
  readonly SchemaVersion: string;
  readonly Status: string;
}

interface PutResourcePolicyInput {
  readonly Policy: string;
  readonly RevisionId: string;
}

interface PutResourcePolicyOutput {
  readonly Policy: string;
  readonly RevisionId: string;
}

interface PutResourcePolicyRequest {
  readonly Policy: string;
  readonly RegistryName: string;
  readonly RevisionId: string;
}

interface PutResourcePolicyResponse {
  readonly Policy: string;
  readonly RevisionId: string;
}

interface RegistryOutput {
  readonly Description: string;
  readonly RegistryArn: string;
  readonly RegistryName: string;
  readonly Tags: {[key: string]: any};
}

interface RegistrySummary {
  readonly RegistryArn: string;
  readonly RegistryName: string;
  readonly Tags: {[key: string]: any};
}

interface SchemaOutput {
  readonly Description: string;
  readonly LastModified: Date;
  readonly SchemaArn: string;
  readonly SchemaName: string;
  readonly SchemaVersion: string;
  readonly Tags: {[key: string]: any};
  readonly Type: string;
  readonly VersionCreatedDate: Date;
}

interface SchemaSummary {
  readonly LastModified: Date;
  readonly SchemaArn: string;
  readonly SchemaName: string;
  readonly Tags: {[key: string]: any};
  readonly VersionCount: number;
}

interface SchemaVersionSummary {
  readonly SchemaArn: string;
  readonly SchemaName: string;
  readonly SchemaVersion: string;
  readonly Type: string;
}

interface SearchSchemaSummary {
  readonly RegistryName: string;
  readonly SchemaArn: string;
  readonly SchemaName: string;
  readonly SchemaVersions: [];
}

interface SearchSchemaVersionSummary {
  readonly CreatedDate: Date;
  readonly SchemaVersion: string;
  readonly Type: string;
}

interface SearchSchemasOutput {
  readonly NextToken: string;
  readonly Schemas: [];
}

interface SearchSchemasRequest {
  readonly Keywords: string;
  readonly Limit: number;
  readonly NextToken: string;
  readonly RegistryName: string;
}

interface SearchSchemasResponse {
  readonly NextToken: string;
  readonly Schemas: [];
}

interface ServiceUnavailableException {
  readonly Code: string;
  readonly Message: string;
}

interface StartDiscovererRequest {
  readonly DiscovererId: string;
}

interface StartDiscovererResponse {
  readonly DiscovererId: string;
  readonly State: string;
}

interface StopDiscovererRequest {
  readonly DiscovererId: string;
}

interface StopDiscovererResponse {
  readonly DiscovererId: string;
  readonly State: string;
}

interface TagResourceInput {
  readonly Tags: {[key: string]: any};
}

interface TagResourceRequest {
  readonly ResourceArn: string;
  readonly Tags: {[key: string]: any};
}

interface TooManyRequestsException {
  readonly Code: string;
  readonly Message: string;
}

interface UnauthorizedException {
  readonly Code: string;
  readonly Message: string;
}

interface UntagResourceRequest {
  readonly ResourceArn: string;
  readonly TagKeys: [];
}

interface UpdateDiscovererInput {
  readonly Description: string;
  readonly CrossAccount: boolean;
}

interface UpdateDiscovererRequest {
  readonly Description: string;
  readonly DiscovererId: string;
  readonly CrossAccount: boolean;
}

interface UpdateDiscovererResponse {
  readonly Description: string;
  readonly DiscovererArn: string;
  readonly DiscovererId: string;
  readonly SourceArn: string;
  readonly State: string;
  readonly CrossAccount: boolean;
  readonly Tags: {[key: string]: any};
}

interface UpdateRegistryInput {
  readonly Description: string;
}

interface UpdateRegistryRequest {
  readonly Description: string;
  readonly RegistryName: string;
}

interface UpdateRegistryResponse {
  readonly Description: string;
  readonly RegistryArn: string;
  readonly RegistryName: string;
  readonly Tags: {[key: string]: any};
}

interface UpdateSchemaInput {
  readonly ClientTokenId: string;
  readonly Content: string;
  readonly Description: string;
  readonly Type: string;
}

interface UpdateSchemaRequest {
  readonly ClientTokenId: string;
  readonly Content: string;
  readonly Description: string;
  readonly RegistryName: string;
  readonly SchemaName: string;
  readonly Type: string;
}

interface UpdateSchemaResponse {
  readonly Description: string;
  readonly LastModified: Date;
  readonly SchemaArn: string;
  readonly SchemaName: string;
  readonly SchemaVersion: string;
  readonly Tags: {[key: string]: any};
  readonly Type: string;
  readonly VersionCreatedDate: Date;
}

