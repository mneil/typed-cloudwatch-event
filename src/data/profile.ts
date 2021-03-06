/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface AddProfileKey {
  readonly ProfileId: string;
  readonly KeyName: string;
  readonly Values: [];
  readonly DomainName: string;
}
export interface CreateDomain {
  readonly DomainName: string;
  readonly DefaultExpirationDays: number;
  readonly DefaultEncryptionKey?: string;
  readonly DeadLetterQueueUrl?: string;
  readonly Matching?: MatchingRequest;
  readonly Tags?: {[key: string]: any};
}
export interface CreateProfile {
  readonly DomainName: string;
  readonly AccountNumber?: string;
  readonly AdditionalInformation?: string;
  readonly PartyType?: string;
  readonly BusinessName?: string;
  readonly FirstName?: string;
  readonly MiddleName?: string;
  readonly LastName?: string;
  readonly BirthDate?: string;
  readonly Gender?: string;
  readonly PhoneNumber?: string;
  readonly MobilePhoneNumber?: string;
  readonly HomePhoneNumber?: string;
  readonly BusinessPhoneNumber?: string;
  readonly EmailAddress?: string;
  readonly PersonalEmailAddress?: string;
  readonly BusinessEmailAddress?: string;
  readonly Address?: Address;
  readonly ShippingAddress?: Address;
  readonly MailingAddress?: Address;
  readonly BillingAddress?: Address;
  readonly Attributes?: {[key: string]: any};
}
export interface DeleteDomain {
  readonly DomainName: string;
}
export interface DeleteIntegration {
  readonly DomainName: string;
  readonly Uri: string;
}
export interface DeleteProfile {
  readonly ProfileId: string;
  readonly DomainName: string;
}
export interface DeleteProfileKey {
  readonly ProfileId: string;
  readonly KeyName: string;
  readonly Values: [];
  readonly DomainName: string;
}
export interface DeleteProfileObject {
  readonly ProfileId: string;
  readonly ProfileObjectUniqueKey: string;
  readonly ObjectTypeName: string;
  readonly DomainName: string;
}
export interface DeleteProfileObjectType {
  readonly DomainName: string;
  readonly ObjectTypeName: string;
}
export interface GetAutoMergingPreview {
  readonly DomainName: string;
  readonly Consolidation: Consolidation;
  readonly ConflictResolution: ConflictResolution;
}
export interface GetDomain {
  readonly DomainName: string;
}
export interface GetIdentityResolutionJob {
  readonly DomainName: string;
  readonly JobId: string;
}
export interface GetIntegration {
  readonly DomainName: string;
  readonly Uri: string;
}
export interface GetMatches {
  readonly NextToken?: string;
  readonly MaxResults?: number;
  readonly DomainName: string;
}
export interface GetProfileObjectType {
  readonly DomainName: string;
  readonly ObjectTypeName: string;
}
export interface GetProfileObjectTypeTemplate {
  readonly TemplateId: string;
}
export interface ListAccountIntegrations {
  readonly Uri: string;
  readonly NextToken?: string;
  readonly MaxResults?: number;
}
export interface ListDomains {
  readonly NextToken?: string;
  readonly MaxResults?: number;
}
export interface ListIdentityResolutionJobs {
  readonly DomainName: string;
  readonly NextToken?: string;
  readonly MaxResults?: number;
}
export interface ListIntegrations {
  readonly DomainName: string;
  readonly NextToken?: string;
  readonly MaxResults?: number;
}
export interface ListProfileObjectTypeTemplates {
  readonly NextToken?: string;
  readonly MaxResults?: number;
}
export interface ListProfileObjectTypes {
  readonly DomainName: string;
  readonly NextToken?: string;
  readonly MaxResults?: number;
}
export interface ListProfileObjects {
  readonly NextToken?: string;
  readonly MaxResults?: number;
  readonly DomainName: string;
  readonly ObjectTypeName: string;
  readonly ProfileId: string;
  readonly ObjectFilter?: ObjectFilter;
}
export interface ListTagsForResource {
  readonly resourceArn: string;
}
export interface MergeProfiles {
  readonly DomainName: string;
  readonly MainProfileId: string;
  readonly ProfileIdsToBeMerged: [];
  readonly FieldSourceProfileIds?: FieldSourceProfileIds;
}
export interface PutIntegration {
  readonly DomainName: string;
  readonly Uri?: string;
  readonly ObjectTypeName: string;
  readonly Tags?: {[key: string]: any};
  readonly FlowDefinition?: FlowDefinition;
}
export interface PutProfileObject {
  readonly ObjectTypeName: string;
  readonly Object: string;
  readonly DomainName: string;
}
export interface PutProfileObjectType {
  readonly DomainName: string;
  readonly ObjectTypeName: string;
  readonly Description: string;
  readonly TemplateId?: string;
  readonly ExpirationDays?: number;
  readonly EncryptionKey?: string;
  readonly AllowProfileCreation?: boolean;
  readonly SourceLastUpdatedTimestampFormat?: string;
  readonly Fields?: {[key: string]: any};
  readonly Keys?: {[key: string]: any};
  readonly Tags?: {[key: string]: any};
}
export interface SearchProfiles {
  readonly NextToken?: string;
  readonly MaxResults?: number;
  readonly DomainName: string;
  readonly KeyName: string;
  readonly Values: [];
}
export interface TagResource {
  readonly resourceArn: string;
  readonly tags: {[key: string]: any};
}
export interface UntagResource {
  readonly resourceArn: string;
  readonly tagKeys: [];
}
export interface UpdateDomain {
  readonly DomainName: string;
  readonly DefaultExpirationDays?: number;
  readonly DefaultEncryptionKey?: string;
  readonly DeadLetterQueueUrl?: string;
  readonly Matching?: MatchingRequest;
  readonly Tags?: {[key: string]: any};
}
export interface UpdateProfile {
  readonly DomainName: string;
  readonly ProfileId: string;
  readonly AdditionalInformation?: string;
  readonly AccountNumber?: string;
  readonly PartyType?: string;
  readonly BusinessName?: string;
  readonly FirstName?: string;
  readonly MiddleName?: string;
  readonly LastName?: string;
  readonly BirthDate?: string;
  readonly Gender?: string;
  readonly PhoneNumber?: string;
  readonly MobilePhoneNumber?: string;
  readonly HomePhoneNumber?: string;
  readonly BusinessPhoneNumber?: string;
  readonly EmailAddress?: string;
  readonly PersonalEmailAddress?: string;
  readonly BusinessEmailAddress?: string;
  readonly Address?: UpdateAddress;
  readonly ShippingAddress?: UpdateAddress;
  readonly MailingAddress?: UpdateAddress;
  readonly BillingAddress?: UpdateAddress;
  readonly Attributes?: {[key: string]: any};
}



interface AccessDeniedException {
  readonly Message: string;
}

interface AddProfileKeyRequest {
  readonly ProfileId: string;
  readonly KeyName: string;
  readonly Values: [];
  readonly DomainName: string;
}

interface AddProfileKeyResponse {
  readonly KeyName: string;
  readonly Values: [];
}

interface Address {
  readonly Address1: string;
  readonly Address2: string;
  readonly Address3: string;
  readonly Address4: string;
  readonly City: string;
  readonly County: string;
  readonly State: string;
  readonly Province: string;
  readonly Country: string;
  readonly PostalCode: string;
}

interface AutoMerging {
  readonly Enabled: boolean;
  readonly Consolidation: Consolidation;
  readonly ConflictResolution: ConflictResolution;
}

interface BadRequestException {
  readonly Message: string;
}

interface ConflictResolution {
  readonly ConflictResolvingModel: string;
  readonly SourceName: string;
}

interface ConnectorOperator {
  readonly Marketo: string;
  readonly S3: string;
  readonly Salesforce: string;
  readonly ServiceNow: string;
  readonly Zendesk: string;
}

interface Consolidation {
  readonly MatchingAttributesList: [];
}

interface CreateDomainRequest {
  readonly DomainName: string;
  readonly DefaultExpirationDays: number;
  readonly DefaultEncryptionKey: string;
  readonly DeadLetterQueueUrl: string;
  readonly Matching: MatchingRequest;
  readonly Tags: {[key: string]: any};
}

interface CreateDomainResponse {
  readonly DomainName: string;
  readonly DefaultExpirationDays: number;
  readonly DefaultEncryptionKey: string;
  readonly DeadLetterQueueUrl: string;
  readonly Matching: MatchingResponse;
  readonly CreatedAt: Date;
  readonly LastUpdatedAt: Date;
  readonly Tags: {[key: string]: any};
}

interface CreateProfileRequest {
  readonly DomainName: string;
  readonly AccountNumber: string;
  readonly AdditionalInformation: string;
  readonly PartyType: string;
  readonly BusinessName: string;
  readonly FirstName: string;
  readonly MiddleName: string;
  readonly LastName: string;
  readonly BirthDate: string;
  readonly Gender: string;
  readonly PhoneNumber: string;
  readonly MobilePhoneNumber: string;
  readonly HomePhoneNumber: string;
  readonly BusinessPhoneNumber: string;
  readonly EmailAddress: string;
  readonly PersonalEmailAddress: string;
  readonly BusinessEmailAddress: string;
  readonly Address: Address;
  readonly ShippingAddress: Address;
  readonly MailingAddress: Address;
  readonly BillingAddress: Address;
  readonly Attributes: {[key: string]: any};
}

interface CreateProfileResponse {
  readonly ProfileId: string;
}

interface DeleteDomainRequest {
  readonly DomainName: string;
}

interface DeleteDomainResponse {
  readonly Message: string;
}

interface DeleteIntegrationRequest {
  readonly DomainName: string;
  readonly Uri: string;
}

interface DeleteIntegrationResponse {
  readonly Message: string;
}

interface DeleteProfileKeyRequest {
  readonly ProfileId: string;
  readonly KeyName: string;
  readonly Values: [];
  readonly DomainName: string;
}

interface DeleteProfileKeyResponse {
  readonly Message: string;
}

interface DeleteProfileObjectRequest {
  readonly ProfileId: string;
  readonly ProfileObjectUniqueKey: string;
  readonly ObjectTypeName: string;
  readonly DomainName: string;
}

interface DeleteProfileObjectResponse {
  readonly Message: string;
}

interface DeleteProfileObjectTypeRequest {
  readonly DomainName: string;
  readonly ObjectTypeName: string;
}

interface DeleteProfileObjectTypeResponse {
  readonly Message: string;
}

interface DeleteProfileRequest {
  readonly ProfileId: string;
  readonly DomainName: string;
}

interface DeleteProfileResponse {
  readonly Message: string;
}

interface DomainStats {
  readonly ProfileCount: number;
  readonly MeteringProfileCount: number;
  readonly ObjectCount: number;
  readonly TotalSize: number;
}

interface ExportingConfig {
  readonly S3Exporting: S3ExportingConfig;
}

interface ExportingLocation {
  readonly S3Exporting: S3ExportingLocation;
}

interface FieldSourceProfileIds {
  readonly AccountNumber: string;
  readonly AdditionalInformation: string;
  readonly PartyType: string;
  readonly BusinessName: string;
  readonly FirstName: string;
  readonly MiddleName: string;
  readonly LastName: string;
  readonly BirthDate: string;
  readonly Gender: string;
  readonly PhoneNumber: string;
  readonly MobilePhoneNumber: string;
  readonly HomePhoneNumber: string;
  readonly BusinessPhoneNumber: string;
  readonly EmailAddress: string;
  readonly PersonalEmailAddress: string;
  readonly BusinessEmailAddress: string;
  readonly Address: string;
  readonly ShippingAddress: string;
  readonly MailingAddress: string;
  readonly BillingAddress: string;
  readonly Attributes: {[key: string]: any};
}

interface FlowDefinition {
  readonly Description: string;
  readonly FlowName: string;
  readonly KmsArn: string;
  readonly SourceFlowConfig: SourceFlowConfig;
  readonly Tasks: [];
  readonly TriggerConfig: TriggerConfig;
}

interface GetAutoMergingPreviewRequest {
  readonly DomainName: string;
  readonly Consolidation: Consolidation;
  readonly ConflictResolution: ConflictResolution;
}

interface GetAutoMergingPreviewResponse {
  readonly DomainName: string;
  readonly NumberOfMatchesInSample: number;
  readonly NumberOfProfilesInSample: number;
  readonly NumberOfProfilesWillBeMerged: number;
}

interface GetDomainRequest {
  readonly DomainName: string;
}

interface GetDomainResponse {
  readonly DomainName: string;
  readonly DefaultExpirationDays: number;
  readonly DefaultEncryptionKey: string;
  readonly DeadLetterQueueUrl: string;
  readonly Stats: DomainStats;
  readonly Matching: MatchingResponse;
  readonly CreatedAt: Date;
  readonly LastUpdatedAt: Date;
  readonly Tags: {[key: string]: any};
}

interface GetIdentityResolutionJobRequest {
  readonly DomainName: string;
  readonly JobId: string;
}

interface GetIdentityResolutionJobResponse {
  readonly DomainName: string;
  readonly JobId: string;
  readonly Status: string;
  readonly Message: string;
  readonly JobStartTime: Date;
  readonly JobEndTime: Date;
  readonly LastUpdatedAt: Date;
  readonly JobExpirationTime: Date;
  readonly AutoMerging: AutoMerging;
  readonly ExportingLocation: ExportingLocation;
  readonly JobStats: JobStats;
}

interface GetIntegrationRequest {
  readonly DomainName: string;
  readonly Uri: string;
}

interface GetIntegrationResponse {
  readonly DomainName: string;
  readonly Uri: string;
  readonly ObjectTypeName: string;
  readonly CreatedAt: Date;
  readonly LastUpdatedAt: Date;
  readonly Tags: {[key: string]: any};
}

interface GetMatchesRequest {
  readonly NextToken: string;
  readonly MaxResults: number;
  readonly DomainName: string;
}

interface GetMatchesResponse {
  readonly NextToken: string;
  readonly MatchGenerationDate: Date;
  readonly PotentialMatches: number;
  readonly Matches: [];
}

interface GetProfileObjectTypeRequest {
  readonly DomainName: string;
  readonly ObjectTypeName: string;
}

interface GetProfileObjectTypeResponse {
  readonly ObjectTypeName: string;
  readonly Description: string;
  readonly TemplateId: string;
  readonly ExpirationDays: number;
  readonly EncryptionKey: string;
  readonly AllowProfileCreation: boolean;
  readonly SourceLastUpdatedTimestampFormat: string;
  readonly Fields: {[key: string]: any};
  readonly Keys: {[key: string]: any};
  readonly CreatedAt: Date;
  readonly LastUpdatedAt: Date;
  readonly Tags: {[key: string]: any};
}

interface GetProfileObjectTypeTemplateRequest {
  readonly TemplateId: string;
}

interface GetProfileObjectTypeTemplateResponse {
  readonly TemplateId: string;
  readonly SourceName: string;
  readonly SourceObject: string;
  readonly AllowProfileCreation: boolean;
  readonly SourceLastUpdatedTimestampFormat: string;
  readonly Fields: {[key: string]: any};
  readonly Keys: {[key: string]: any};
}

interface IdentityResolutionJob {
  readonly DomainName: string;
  readonly JobId: string;
  readonly Status: string;
  readonly JobStartTime: Date;
  readonly JobEndTime: Date;
  readonly JobStats: JobStats;
  readonly ExportingLocation: ExportingLocation;
  readonly Message: string;
}

interface IncrementalPullConfig {
  readonly DatetimeTypeFieldName: string;
}

interface InternalServerException {
  readonly Message: string;
}

interface JobSchedule {
  readonly DayOfTheWeek: string;
  readonly Time: string;
}

interface JobStats {
  readonly NumberOfProfilesReviewed: number;
  readonly NumberOfMatchesFound: number;
  readonly NumberOfMergesDone: number;
}

interface ListAccountIntegrationsRequest {
  readonly Uri: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListAccountIntegrationsResponse {
  readonly Items: [];
  readonly NextToken: string;
}

interface ListDomainItem {
  readonly DomainName: string;
  readonly CreatedAt: Date;
  readonly LastUpdatedAt: Date;
  readonly Tags: {[key: string]: any};
}

interface ListDomainsRequest {
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListDomainsResponse {
  readonly Items: [];
  readonly NextToken: string;
}

interface ListIdentityResolutionJobsRequest {
  readonly DomainName: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListIdentityResolutionJobsResponse {
  readonly IdentityResolutionJobsList: [];
  readonly NextToken: string;
}

interface ListIntegrationItem {
  readonly DomainName: string;
  readonly Uri: string;
  readonly ObjectTypeName: string;
  readonly CreatedAt: Date;
  readonly LastUpdatedAt: Date;
  readonly Tags: {[key: string]: any};
}

interface ListIntegrationsRequest {
  readonly DomainName: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListIntegrationsResponse {
  readonly Items: [];
  readonly NextToken: string;
}

interface ListProfileObjectTypeItem {
  readonly ObjectTypeName: string;
  readonly Description: string;
  readonly CreatedAt: Date;
  readonly LastUpdatedAt: Date;
  readonly Tags: {[key: string]: any};
}

interface ListProfileObjectTypeTemplateItem {
  readonly TemplateId: string;
  readonly SourceName: string;
  readonly SourceObject: string;
}

interface ListProfileObjectTypeTemplatesRequest {
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListProfileObjectTypeTemplatesResponse {
  readonly Items: [];
  readonly NextToken: string;
}

interface ListProfileObjectTypesRequest {
  readonly DomainName: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListProfileObjectTypesResponse {
  readonly Items: [];
  readonly NextToken: string;
}

interface ListProfileObjectsItem {
  readonly ObjectTypeName: string;
  readonly ProfileObjectUniqueKey: string;
  readonly Object: string;
}

interface ListProfileObjectsRequest {
  readonly NextToken: string;
  readonly MaxResults: number;
  readonly DomainName: string;
  readonly ObjectTypeName: string;
  readonly ProfileId: string;
  readonly ObjectFilter: ObjectFilter;
}

interface ListProfileObjectsResponse {
  readonly Items: [];
  readonly NextToken: string;
}

interface ListTagsForResourceRequest {
  readonly resourceArn: string;
}

interface ListTagsForResourceResponse {
  readonly tags: {[key: string]: any};
}

interface MarketoSourceProperties {
  readonly Object: string;
}

interface MatchItem {
  readonly MatchId: string;
  readonly ProfileIds: [];
  readonly ConfidenceScore: unknown;
}

interface MatchingRequest {
  readonly Enabled: boolean;
  readonly JobSchedule: JobSchedule;
  readonly AutoMerging: AutoMerging;
  readonly ExportingConfig: ExportingConfig;
}

interface MatchingResponse {
  readonly Enabled: boolean;
  readonly JobSchedule: JobSchedule;
  readonly AutoMerging: AutoMerging;
  readonly ExportingConfig: ExportingConfig;
}

interface MergeProfilesRequest {
  readonly DomainName: string;
  readonly MainProfileId: string;
  readonly ProfileIdsToBeMerged: [];
  readonly FieldSourceProfileIds: FieldSourceProfileIds;
}

interface MergeProfilesResponse {
  readonly Message: string;
}

interface ObjectFilter {
  readonly KeyName: string;
  readonly Values: [];
}

interface ObjectTypeField {
  readonly Source: string;
  readonly Target: string;
  readonly ContentType: string;
}

interface ObjectTypeKey {
  readonly StandardIdentifiers: [];
  readonly FieldNames: [];
}

interface Profile {
  readonly ProfileId: string;
  readonly AccountNumber: string;
  readonly AdditionalInformation: string;
  readonly PartyType: string;
  readonly BusinessName: string;
  readonly FirstName: string;
  readonly MiddleName: string;
  readonly LastName: string;
  readonly BirthDate: string;
  readonly Gender: string;
  readonly PhoneNumber: string;
  readonly MobilePhoneNumber: string;
  readonly HomePhoneNumber: string;
  readonly BusinessPhoneNumber: string;
  readonly EmailAddress: string;
  readonly PersonalEmailAddress: string;
  readonly BusinessEmailAddress: string;
  readonly Address: Address;
  readonly ShippingAddress: Address;
  readonly MailingAddress: Address;
  readonly BillingAddress: Address;
  readonly Attributes: {[key: string]: any};
}

interface PutIntegrationRequest {
  readonly DomainName: string;
  readonly Uri: string;
  readonly ObjectTypeName: string;
  readonly Tags: {[key: string]: any};
  readonly FlowDefinition: FlowDefinition;
}

interface PutIntegrationResponse {
  readonly DomainName: string;
  readonly Uri: string;
  readonly ObjectTypeName: string;
  readonly CreatedAt: Date;
  readonly LastUpdatedAt: Date;
  readonly Tags: {[key: string]: any};
}

interface PutProfileObjectRequest {
  readonly ObjectTypeName: string;
  readonly Object: string;
  readonly DomainName: string;
}

interface PutProfileObjectResponse {
  readonly ProfileObjectUniqueKey: string;
}

interface PutProfileObjectTypeRequest {
  readonly DomainName: string;
  readonly ObjectTypeName: string;
  readonly Description: string;
  readonly TemplateId: string;
  readonly ExpirationDays: number;
  readonly EncryptionKey: string;
  readonly AllowProfileCreation: boolean;
  readonly SourceLastUpdatedTimestampFormat: string;
  readonly Fields: {[key: string]: any};
  readonly Keys: {[key: string]: any};
  readonly Tags: {[key: string]: any};
}

interface PutProfileObjectTypeResponse {
  readonly ObjectTypeName: string;
  readonly Description: string;
  readonly TemplateId: string;
  readonly ExpirationDays: number;
  readonly EncryptionKey: string;
  readonly AllowProfileCreation: boolean;
  readonly SourceLastUpdatedTimestampFormat: string;
  readonly Fields: {[key: string]: any};
  readonly Keys: {[key: string]: any};
  readonly CreatedAt: Date;
  readonly LastUpdatedAt: Date;
  readonly Tags: {[key: string]: any};
}

interface ResourceNotFoundException {
  readonly Message: string;
}

interface S3ExportingConfig {
  readonly S3BucketName: string;
  readonly S3KeyName: string;
}

interface S3ExportingLocation {
  readonly S3BucketName: string;
  readonly S3KeyName: string;
}

interface S3SourceProperties {
  readonly BucketName: string;
  readonly BucketPrefix: string;
}

interface SalesforceSourceProperties {
  readonly Object: string;
  readonly EnableDynamicFieldUpdate: boolean;
  readonly IncludeDeletedRecords: boolean;
}

interface ScheduledTriggerProperties {
  readonly ScheduleExpression: string;
  readonly DataPullMode: string;
  readonly ScheduleStartTime: Date;
  readonly ScheduleEndTime: Date;
  readonly Timezone: string;
  readonly ScheduleOffset: number;
  readonly FirstExecutionFrom: Date;
}

interface SearchProfilesRequest {
  readonly NextToken: string;
  readonly MaxResults: number;
  readonly DomainName: string;
  readonly KeyName: string;
  readonly Values: [];
}

interface SearchProfilesResponse {
  readonly Items: [];
  readonly NextToken: string;
}

interface ServiceNowSourceProperties {
  readonly Object: string;
}

interface SourceConnectorProperties {
  readonly Marketo: MarketoSourceProperties;
  readonly S3: S3SourceProperties;
  readonly Salesforce: SalesforceSourceProperties;
  readonly ServiceNow: ServiceNowSourceProperties;
  readonly Zendesk: ZendeskSourceProperties;
}

interface SourceFlowConfig {
  readonly ConnectorProfileName: string;
  readonly ConnectorType: string;
  readonly IncrementalPullConfig: IncrementalPullConfig;
  readonly SourceConnectorProperties: SourceConnectorProperties;
}

interface TagResourceRequest {
  readonly resourceArn: string;
  readonly tags: {[key: string]: any};
}

interface TagResourceResponse {
}

interface Task {
  readonly ConnectorOperator: ConnectorOperator;
  readonly DestinationField: string;
  readonly SourceFields: [];
  readonly TaskProperties: {[key: string]: any};
  readonly TaskType: string;
}

interface ThrottlingException {
  readonly Message: string;
}

interface TriggerConfig {
  readonly TriggerType: string;
  readonly TriggerProperties: TriggerProperties;
}

interface TriggerProperties {
  readonly Scheduled: ScheduledTriggerProperties;
}

interface UntagResourceRequest {
  readonly resourceArn: string;
  readonly tagKeys: [];
}

interface UntagResourceResponse {
}

interface UpdateAddress {
  readonly Address1: string;
  readonly Address2: string;
  readonly Address3: string;
  readonly Address4: string;
  readonly City: string;
  readonly County: string;
  readonly State: string;
  readonly Province: string;
  readonly Country: string;
  readonly PostalCode: string;
}

interface UpdateDomainRequest {
  readonly DomainName: string;
  readonly DefaultExpirationDays: number;
  readonly DefaultEncryptionKey: string;
  readonly DeadLetterQueueUrl: string;
  readonly Matching: MatchingRequest;
  readonly Tags: {[key: string]: any};
}

interface UpdateDomainResponse {
  readonly DomainName: string;
  readonly DefaultExpirationDays: number;
  readonly DefaultEncryptionKey: string;
  readonly DeadLetterQueueUrl: string;
  readonly Matching: MatchingResponse;
  readonly CreatedAt: Date;
  readonly LastUpdatedAt: Date;
  readonly Tags: {[key: string]: any};
}

interface UpdateProfileRequest {
  readonly DomainName: string;
  readonly ProfileId: string;
  readonly AdditionalInformation: string;
  readonly AccountNumber: string;
  readonly PartyType: string;
  readonly BusinessName: string;
  readonly FirstName: string;
  readonly MiddleName: string;
  readonly LastName: string;
  readonly BirthDate: string;
  readonly Gender: string;
  readonly PhoneNumber: string;
  readonly MobilePhoneNumber: string;
  readonly HomePhoneNumber: string;
  readonly BusinessPhoneNumber: string;
  readonly EmailAddress: string;
  readonly PersonalEmailAddress: string;
  readonly BusinessEmailAddress: string;
  readonly Address: UpdateAddress;
  readonly ShippingAddress: UpdateAddress;
  readonly MailingAddress: UpdateAddress;
  readonly BillingAddress: UpdateAddress;
  readonly Attributes: {[key: string]: any};
}

interface UpdateProfileResponse {
  readonly ProfileId: string;
}

interface ZendeskSourceProperties {
  readonly Object: string;
}

