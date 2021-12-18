/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface AssociateAssessmentReportEvidenceFolder {
  readonly assessmentId: string;
  readonly evidenceFolderId: string;
}

export interface BatchAssociateAssessmentReportEvidence {
  readonly assessmentId: string;
  readonly evidenceFolderId: string;
  readonly evidenceIds: [];
}

export interface BatchCreateDelegationByAssessment {
  readonly createDelegationRequests: [];
  readonly assessmentId: string;
}

export interface BatchDeleteDelegationByAssessment {
  readonly delegationIds: [];
  readonly assessmentId: string;
}

export interface BatchDisassociateAssessmentReportEvidence {
  readonly assessmentId: string;
  readonly evidenceFolderId: string;
  readonly evidenceIds: [];
}

export interface BatchImportEvidenceToAssessmentControl {
  readonly assessmentId: string;
  readonly controlSetId: string;
  readonly controlId: string;
  readonly manualEvidence: [];
}

export interface CreateAssessment {
  readonly name: string;
  readonly description?: string;
  readonly assessmentReportsDestination: AssessmentReportsDestination;
  readonly scope: Scope;
  readonly roles: [];
  readonly frameworkId: string;
  readonly tags?: {[key: string]: any};
}

export interface CreateAssessmentFramework {
  readonly name: string;
  readonly description?: string;
  readonly complianceType?: string;
  readonly controlSets: [];
  readonly tags?: {[key: string]: any};
}

export interface CreateAssessmentReport {
  readonly name: string;
  readonly description?: string;
  readonly assessmentId: string;
}

export interface CreateControl {
  readonly name: string;
  readonly description?: string;
  readonly testingInformation?: string;
  readonly actionPlanTitle?: string;
  readonly actionPlanInstructions?: string;
  readonly controlMappingSources: [];
  readonly tags?: {[key: string]: any};
}

export interface DeleteAssessment {
  readonly assessmentId: string;
}

export interface DeleteAssessmentFramework {
  readonly frameworkId: string;
}

export interface DeleteAssessmentFrameworkShare {
  readonly requestId: string;
  readonly requestType: string;
}

export interface DeleteAssessmentReport {
  readonly assessmentId: string;
  readonly assessmentReportId: string;
}

export interface DeleteControl {
  readonly controlId: string;
}

export interface DeregisterAccount {
}

export interface DeregisterOrganizationAdminAccount {
  readonly adminAccountId?: string;
}

export interface DisassociateAssessmentReportEvidenceFolder {
  readonly assessmentId: string;
  readonly evidenceFolderId: string;
}

export interface GetAccountStatus {
}

export interface GetAssessment {
  readonly assessmentId: string;
}

export interface GetAssessmentFramework {
  readonly frameworkId: string;
}

export interface GetAssessmentReportUrl {
  readonly assessmentReportId: string;
  readonly assessmentId: string;
}

export interface GetChangeLogs {
  readonly assessmentId: string;
  readonly controlSetId?: string;
  readonly controlId?: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface GetControl {
  readonly controlId: string;
}

export interface GetDelegations {
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface GetEvidence {
  readonly assessmentId: string;
  readonly controlSetId: string;
  readonly evidenceFolderId: string;
  readonly evidenceId: string;
}

export interface GetEvidenceByEvidenceFolder {
  readonly assessmentId: string;
  readonly controlSetId: string;
  readonly evidenceFolderId: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface GetEvidenceFolder {
  readonly assessmentId: string;
  readonly controlSetId: string;
  readonly evidenceFolderId: string;
}

export interface GetEvidenceFoldersByAssessment {
  readonly assessmentId: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface GetEvidenceFoldersByAssessmentControl {
  readonly assessmentId: string;
  readonly controlSetId: string;
  readonly controlId: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface GetInsights {
}

export interface GetInsightsByAssessment {
  readonly assessmentId: string;
}

export interface GetOrganizationAdminAccount {
}

export interface GetServicesInScope {
}

export interface GetSettings {
  readonly attribute: string;
}

export interface ListAssessmentControlInsightsByControlDomain {
  readonly controlDomainId: string;
  readonly assessmentId: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface ListAssessmentFrameworkShareRequests {
  readonly requestType: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface ListAssessmentFrameworks {
  readonly frameworkType: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface ListAssessmentReports {
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface ListAssessments {
  readonly status?: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface ListControlDomainInsights {
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface ListControlDomainInsightsByAssessment {
  readonly assessmentId: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface ListControlInsightsByControlDomain {
  readonly controlDomainId: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface ListControls {
  readonly controlType: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface ListKeywordsForDataSource {
  readonly source: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface ListNotifications {
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface ListTagsForResource {
  readonly resourceArn: string;
}

export interface RegisterAccount {
  readonly kmsKey?: string;
  readonly delegatedAdminAccount?: string;
}

export interface RegisterOrganizationAdminAccount {
  readonly adminAccountId: string;
}

export interface StartAssessmentFrameworkShare {
  readonly frameworkId: string;
  readonly destinationAccount: string;
  readonly destinationRegion: string;
  readonly comment?: string;
}

export interface TagResource {
  readonly resourceArn: string;
  readonly tags: {[key: string]: any};
}

export interface UntagResource {
  readonly resourceArn: string;
  readonly tagKeys: [];
}

export interface UpdateAssessment {
  readonly assessmentId: string;
  readonly assessmentName?: string;
  readonly assessmentDescription?: string;
  readonly scope: Scope;
  readonly assessmentReportsDestination?: AssessmentReportsDestination;
  readonly roles?: [];
}

export interface UpdateAssessmentControl {
  readonly assessmentId: string;
  readonly controlSetId: string;
  readonly controlId: string;
  readonly controlStatus?: string;
  readonly commentBody?: string;
}

export interface UpdateAssessmentControlSetStatus {
  readonly assessmentId: string;
  readonly controlSetId: string;
  readonly status: string;
  readonly comment: string;
}

export interface UpdateAssessmentFramework {
  readonly frameworkId: string;
  readonly name: string;
  readonly description?: string;
  readonly complianceType?: string;
  readonly controlSets: [];
}

export interface UpdateAssessmentFrameworkShare {
  readonly requestId: string;
  readonly requestType: string;
  readonly action: string;
}

export interface UpdateAssessmentStatus {
  readonly assessmentId: string;
  readonly status: string;
}

export interface UpdateControl {
  readonly controlId: string;
  readonly name: string;
  readonly description?: string;
  readonly testingInformation?: string;
  readonly actionPlanTitle?: string;
  readonly actionPlanInstructions?: string;
  readonly controlMappingSources: [];
}

export interface UpdateSettings {
  readonly snsTopic?: string;
  readonly defaultAssessmentReportsDestination?: AssessmentReportsDestination;
  readonly defaultProcessOwners?: [];
  readonly kmsKey?: string;
}

export interface ValidateAssessmentReportIntegrity {
  readonly s3RelativePath: string;
}

export interface AWSAccount {
  readonly id?: string;
  readonly emailAddress?: string;
  readonly name?: string;
}

export interface AWSService {
  readonly serviceName?: string;
}

export interface AccessDeniedException {
  readonly message: string;
}

export interface Assessment {
  readonly arn?: string;
  readonly awsAccount?: AWSAccount;
  readonly metadata?: AssessmentMetadata;
  readonly framework?: AssessmentFramework;
  readonly tags?: {[key: string]: any};
}

export interface AssessmentControl {
  readonly id?: string;
  readonly name?: string;
  readonly description?: string;
  readonly status?: string;
  readonly response?: string;
  readonly comments?: [];
  readonly evidenceSources?: [];
  readonly evidenceCount?: number;
  readonly assessmentReportEvidenceCount?: number;
}

export interface AssessmentControlSet {
  readonly id?: string;
  readonly description?: string;
  readonly status?: string;
  readonly roles?: [];
  readonly controls?: [];
  readonly delegations?: [];
  readonly systemEvidenceCount?: number;
  readonly manualEvidenceCount?: number;
}

export interface AssessmentEvidenceFolder {
  readonly name?: string;
  readonly date?: Date;
  readonly assessmentId?: string;
  readonly controlSetId?: string;
  readonly controlId?: string;
  readonly id?: string;
  readonly dataSource?: string;
  readonly author?: string;
  readonly totalEvidence?: number;
  readonly assessmentReportSelectionCount?: number;
  readonly controlName?: string;
  readonly evidenceResourcesIncludedCount?: number;
  readonly evidenceByTypeConfigurationDataCount?: number;
  readonly evidenceByTypeManualCount?: number;
  readonly evidenceByTypeComplianceCheckCount?: number;
  readonly evidenceByTypeComplianceCheckIssuesCount?: number;
  readonly evidenceByTypeUserActivityCount?: number;
  readonly evidenceAwsServiceSourceCount?: number;
}

export interface AssessmentFramework {
  readonly id?: string;
  readonly arn?: string;
  readonly metadata?: FrameworkMetadata;
  readonly controlSets?: [];
}

export interface AssessmentFrameworkMetadata {
  readonly arn?: string;
  readonly id?: string;
  readonly type?: string;
  readonly name?: string;
  readonly description?: string;
  readonly logo?: string;
  readonly complianceType?: string;
  readonly controlsCount?: number;
  readonly controlSetsCount?: number;
  readonly createdAt?: Date;
  readonly lastUpdatedAt?: Date;
}

export interface AssessmentFrameworkShareRequest {
  readonly id?: string;
  readonly frameworkId?: string;
  readonly frameworkName?: string;
  readonly frameworkDescription?: string;
  readonly status?: string;
  readonly sourceAccount?: string;
  readonly destinationAccount?: string;
  readonly destinationRegion?: string;
  readonly expirationTime?: Date;
  readonly creationTime?: Date;
  readonly lastUpdated?: Date;
  readonly comment?: string;
  readonly standardControlsCount?: number;
  readonly customControlsCount?: number;
  readonly complianceType?: string;
}

export interface AssessmentMetadata {
  readonly name?: string;
  readonly id?: string;
  readonly description?: string;
  readonly complianceType?: string;
  readonly status?: string;
  readonly assessmentReportsDestination?: AssessmentReportsDestination;
  readonly scope?: Scope;
  readonly roles?: [];
  readonly delegations?: [];
  readonly creationTime?: Date;
  readonly lastUpdated?: Date;
}

export interface AssessmentMetadataItem {
  readonly name?: string;
  readonly id?: string;
  readonly complianceType?: string;
  readonly status?: string;
  readonly roles?: [];
  readonly delegations?: [];
  readonly creationTime?: Date;
  readonly lastUpdated?: Date;
}

export interface AssessmentReport {
  readonly id?: string;
  readonly name?: string;
  readonly description?: string;
  readonly awsAccountId?: string;
  readonly assessmentId?: string;
  readonly assessmentName?: string;
  readonly author?: string;
  readonly status?: string;
  readonly creationTime?: Date;
}

export interface AssessmentReportEvidenceError {
  readonly evidenceId?: string;
  readonly errorCode?: string;
  readonly errorMessage?: string;
}

export interface AssessmentReportMetadata {
  readonly id?: string;
  readonly name?: string;
  readonly description?: string;
  readonly assessmentId?: string;
  readonly assessmentName?: string;
  readonly author?: string;
  readonly status?: string;
  readonly creationTime?: Date;
}

export interface AssessmentReportsDestination {
  readonly destinationType?: string;
  readonly destination?: string;
}

export interface AssociateAssessmentReportEvidenceFolderRequest {
  readonly assessmentId: string;
  readonly evidenceFolderId: string;
}

export interface AssociateAssessmentReportEvidenceFolderResponse {
}

export interface BatchAssociateAssessmentReportEvidenceRequest {
  readonly assessmentId: string;
  readonly evidenceFolderId: string;
  readonly evidenceIds: [];
}

export interface BatchAssociateAssessmentReportEvidenceResponse {
  readonly evidenceIds?: [];
  readonly errors?: [];
}

export interface BatchCreateDelegationByAssessmentError {
  readonly createDelegationRequest?: CreateDelegationRequest;
  readonly errorCode?: string;
  readonly errorMessage?: string;
}

export interface BatchCreateDelegationByAssessmentRequest {
  readonly createDelegationRequests: [];
  readonly assessmentId: string;
}

export interface BatchCreateDelegationByAssessmentResponse {
  readonly delegations?: [];
  readonly errors?: [];
}

export interface BatchDeleteDelegationByAssessmentError {
  readonly delegationId?: string;
  readonly errorCode?: string;
  readonly errorMessage?: string;
}

export interface BatchDeleteDelegationByAssessmentRequest {
  readonly delegationIds: [];
  readonly assessmentId: string;
}

export interface BatchDeleteDelegationByAssessmentResponse {
  readonly errors?: [];
}

export interface BatchDisassociateAssessmentReportEvidenceRequest {
  readonly assessmentId: string;
  readonly evidenceFolderId: string;
  readonly evidenceIds: [];
}

export interface BatchDisassociateAssessmentReportEvidenceResponse {
  readonly evidenceIds?: [];
  readonly errors?: [];
}

export interface BatchImportEvidenceToAssessmentControlError {
  readonly manualEvidence?: ManualEvidence;
  readonly errorCode?: string;
  readonly errorMessage?: string;
}

export interface BatchImportEvidenceToAssessmentControlRequest {
  readonly assessmentId: string;
  readonly controlSetId: string;
  readonly controlId: string;
  readonly manualEvidence: [];
}

export interface BatchImportEvidenceToAssessmentControlResponse {
  readonly errors?: [];
}

export interface ChangeLog {
  readonly objectType?: string;
  readonly objectName?: string;
  readonly action?: string;
  readonly createdAt?: Date;
  readonly createdBy?: string;
}

export interface Control {
  readonly arn?: string;
  readonly id?: string;
  readonly type?: string;
  readonly name?: string;
  readonly description?: string;
  readonly testingInformation?: string;
  readonly actionPlanTitle?: string;
  readonly actionPlanInstructions?: string;
  readonly controlSources?: string;
  readonly controlMappingSources?: [];
  readonly createdAt?: Date;
  readonly lastUpdatedAt?: Date;
  readonly createdBy?: string;
  readonly lastUpdatedBy?: string;
  readonly tags?: {[key: string]: any};
}

export interface ControlComment {
  readonly authorName?: string;
  readonly commentBody?: string;
  readonly postedDate?: Date;
}

export interface ControlDomainInsights {
  readonly name?: string;
  readonly id?: string;
  readonly controlsCountByNoncompliantEvidence?: number;
  readonly totalControlsCount?: number;
  readonly evidenceInsights?: EvidenceInsights;
  readonly lastUpdated?: Date;
}

export interface ControlInsightsMetadataByAssessmentItem {
  readonly name?: string;
  readonly id?: string;
  readonly evidenceInsights?: EvidenceInsights;
  readonly controlSetName?: string;
  readonly lastUpdated?: Date;
}

export interface ControlInsightsMetadataItem {
  readonly name?: string;
  readonly id?: string;
  readonly evidenceInsights?: EvidenceInsights;
  readonly lastUpdated?: Date;
}

export interface ControlMappingSource {
  readonly sourceId?: string;
  readonly sourceName?: string;
  readonly sourceDescription?: string;
  readonly sourceSetUpOption?: string;
  readonly sourceType?: string;
  readonly sourceKeyword?: SourceKeyword;
  readonly sourceFrequency?: string;
  readonly troubleshootingText?: string;
}

export interface ControlMetadata {
  readonly arn?: string;
  readonly id?: string;
  readonly name?: string;
  readonly controlSources?: string;
  readonly createdAt?: Date;
  readonly lastUpdatedAt?: Date;
}

export interface ControlSet {
  readonly id?: string;
  readonly name?: string;
  readonly controls?: [];
}

export interface CreateAssessmentFrameworkControl {
  readonly id?: string;
}

export interface CreateAssessmentFrameworkControlSet {
  readonly name: string;
  readonly controls?: [];
}

export interface CreateAssessmentFrameworkRequest {
  readonly name: string;
  readonly description?: string;
  readonly complianceType?: string;
  readonly controlSets: [];
  readonly tags?: {[key: string]: any};
}

export interface CreateAssessmentFrameworkResponse {
  readonly framework?: Framework;
}

export interface CreateAssessmentReportRequest {
  readonly name: string;
  readonly description?: string;
  readonly assessmentId: string;
}

export interface CreateAssessmentReportResponse {
  readonly assessmentReport?: AssessmentReport;
}

export interface CreateAssessmentRequest {
  readonly name: string;
  readonly description?: string;
  readonly assessmentReportsDestination: AssessmentReportsDestination;
  readonly scope: Scope;
  readonly roles: [];
  readonly frameworkId: string;
  readonly tags?: {[key: string]: any};
}

export interface CreateAssessmentResponse {
  readonly assessment?: Assessment;
}

export interface CreateControlMappingSource {
  readonly sourceName?: string;
  readonly sourceDescription?: string;
  readonly sourceSetUpOption?: string;
  readonly sourceType?: string;
  readonly sourceKeyword?: SourceKeyword;
  readonly sourceFrequency?: string;
  readonly troubleshootingText?: string;
}

export interface CreateControlRequest {
  readonly name: string;
  readonly description?: string;
  readonly testingInformation?: string;
  readonly actionPlanTitle?: string;
  readonly actionPlanInstructions?: string;
  readonly controlMappingSources: [];
  readonly tags?: {[key: string]: any};
}

export interface CreateControlResponse {
  readonly control?: Control;
}

export interface CreateDelegationRequest {
  readonly comment?: string;
  readonly controlSetId?: string;
  readonly roleArn?: string;
  readonly roleType?: string;
}

export interface Delegation {
  readonly id?: string;
  readonly assessmentName?: string;
  readonly assessmentId?: string;
  readonly status?: string;
  readonly roleArn?: string;
  readonly roleType?: string;
  readonly creationTime?: Date;
  readonly lastUpdated?: Date;
  readonly controlSetId?: string;
  readonly comment?: string;
  readonly createdBy?: string;
}

export interface DelegationMetadata {
  readonly id?: string;
  readonly assessmentName?: string;
  readonly assessmentId?: string;
  readonly status?: string;
  readonly roleArn?: string;
  readonly creationTime?: Date;
  readonly controlSetName?: string;
}

export interface DeleteAssessmentFrameworkRequest {
  readonly frameworkId: string;
}

export interface DeleteAssessmentFrameworkResponse {
}

export interface DeleteAssessmentFrameworkShareRequest {
  readonly requestId: string;
  readonly requestType: string;
}

export interface DeleteAssessmentFrameworkShareResponse {
}

export interface DeleteAssessmentReportRequest {
  readonly assessmentId: string;
  readonly assessmentReportId: string;
}

export interface DeleteAssessmentReportResponse {
}

export interface DeleteAssessmentRequest {
  readonly assessmentId: string;
}

export interface DeleteAssessmentResponse {
}

export interface DeleteControlRequest {
  readonly controlId: string;
}

export interface DeleteControlResponse {
}

export interface DeregisterAccountRequest {
}

export interface DeregisterAccountResponse {
  readonly status?: string;
}

export interface DeregisterOrganizationAdminAccountRequest {
  readonly adminAccountId?: string;
}

export interface DeregisterOrganizationAdminAccountResponse {
}

export interface DisassociateAssessmentReportEvidenceFolderRequest {
  readonly assessmentId: string;
  readonly evidenceFolderId: string;
}

export interface DisassociateAssessmentReportEvidenceFolderResponse {
}

export interface Evidence {
  readonly dataSource?: string;
  readonly evidenceAwsAccountId?: string;
  readonly time?: Date;
  readonly eventSource?: string;
  readonly eventName?: string;
  readonly evidenceByType?: string;
  readonly resourcesIncluded?: [];
  readonly attributes?: {[key: string]: any};
  readonly iamId?: string;
  readonly complianceCheck?: string;
  readonly awsOrganization?: string;
  readonly awsAccountId?: string;
  readonly evidenceFolderId?: string;
  readonly id?: string;
  readonly assessmentReportSelection?: string;
}

export interface EvidenceInsights {
  readonly noncompliantEvidenceCount?: number;
  readonly compliantEvidenceCount?: number;
  readonly inconclusiveEvidenceCount?: number;
}

export interface Framework {
  readonly arn?: string;
  readonly id?: string;
  readonly name?: string;
  readonly type?: string;
  readonly complianceType?: string;
  readonly description?: string;
  readonly logo?: string;
  readonly controlSources?: string;
  readonly controlSets?: [];
  readonly createdAt?: Date;
  readonly lastUpdatedAt?: Date;
  readonly createdBy?: string;
  readonly lastUpdatedBy?: string;
  readonly tags?: {[key: string]: any};
}

export interface FrameworkMetadata {
  readonly name?: string;
  readonly description?: string;
  readonly logo?: string;
  readonly complianceType?: string;
}

export interface GetAccountStatusRequest {
}

export interface GetAccountStatusResponse {
  readonly status?: string;
}

export interface GetAssessmentFrameworkRequest {
  readonly frameworkId: string;
}

export interface GetAssessmentFrameworkResponse {
  readonly framework?: Framework;
}

export interface GetAssessmentReportUrlRequest {
  readonly assessmentReportId: string;
  readonly assessmentId: string;
}

export interface GetAssessmentReportUrlResponse {
  readonly preSignedUrl?: URL;
}

export interface GetAssessmentRequest {
  readonly assessmentId: string;
}

export interface GetAssessmentResponse {
  readonly assessment?: Assessment;
  readonly userRole?: Role;
}

export interface GetChangeLogsRequest {
  readonly assessmentId: string;
  readonly controlSetId?: string;
  readonly controlId?: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface GetChangeLogsResponse {
  readonly changeLogs?: [];
  readonly nextToken?: string;
}

export interface GetControlRequest {
  readonly controlId: string;
}

export interface GetControlResponse {
  readonly control?: Control;
}

export interface GetDelegationsRequest {
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface GetDelegationsResponse {
  readonly delegations?: [];
  readonly nextToken?: string;
}

export interface GetEvidenceByEvidenceFolderRequest {
  readonly assessmentId: string;
  readonly controlSetId: string;
  readonly evidenceFolderId: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface GetEvidenceByEvidenceFolderResponse {
  readonly evidence?: [];
  readonly nextToken?: string;
}

export interface GetEvidenceFolderRequest {
  readonly assessmentId: string;
  readonly controlSetId: string;
  readonly evidenceFolderId: string;
}

export interface GetEvidenceFolderResponse {
  readonly evidenceFolder?: AssessmentEvidenceFolder;
}

export interface GetEvidenceFoldersByAssessmentControlRequest {
  readonly assessmentId: string;
  readonly controlSetId: string;
  readonly controlId: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface GetEvidenceFoldersByAssessmentControlResponse {
  readonly evidenceFolders?: [];
  readonly nextToken?: string;
}

export interface GetEvidenceFoldersByAssessmentRequest {
  readonly assessmentId: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface GetEvidenceFoldersByAssessmentResponse {
  readonly evidenceFolders?: [];
  readonly nextToken?: string;
}

export interface GetEvidenceRequest {
  readonly assessmentId: string;
  readonly controlSetId: string;
  readonly evidenceFolderId: string;
  readonly evidenceId: string;
}

export interface GetEvidenceResponse {
  readonly evidence?: Evidence;
}

export interface GetInsightsByAssessmentRequest {
  readonly assessmentId: string;
}

export interface GetInsightsByAssessmentResponse {
  readonly insights?: InsightsByAssessment;
}

export interface GetInsightsRequest {
}

export interface GetInsightsResponse {
  readonly insights?: Insights;
}

export interface GetOrganizationAdminAccountRequest {
}

export interface GetOrganizationAdminAccountResponse {
  readonly adminAccountId?: string;
  readonly organizationId?: string;
}

export interface GetServicesInScopeRequest {
}

export interface GetServicesInScopeResponse {
  readonly serviceMetadata?: [];
}

export interface GetSettingsRequest {
  readonly attribute: string;
}

export interface GetSettingsResponse {
  readonly settings?: Settings;
}

export interface Insights {
  readonly activeAssessmentsCount?: number;
  readonly noncompliantEvidenceCount?: number;
  readonly compliantEvidenceCount?: number;
  readonly inconclusiveEvidenceCount?: number;
  readonly assessmentControlsCountByNoncompliantEvidence?: number;
  readonly totalAssessmentControlsCount?: number;
  readonly lastUpdated?: Date;
}

export interface InsightsByAssessment {
  readonly noncompliantEvidenceCount?: number;
  readonly compliantEvidenceCount?: number;
  readonly inconclusiveEvidenceCount?: number;
  readonly assessmentControlsCountByNoncompliantEvidence?: number;
  readonly totalAssessmentControlsCount?: number;
  readonly lastUpdated?: Date;
}

export interface InternalServerException {
  readonly message: string;
}

export interface ListAssessmentControlInsightsByControlDomainRequest {
  readonly controlDomainId: string;
  readonly assessmentId: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface ListAssessmentControlInsightsByControlDomainResponse {
  readonly controlInsightsByAssessment?: [];
  readonly nextToken?: string;
}

export interface ListAssessmentFrameworkShareRequestsRequest {
  readonly requestType: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface ListAssessmentFrameworkShareRequestsResponse {
  readonly assessmentFrameworkShareRequests?: [];
  readonly nextToken?: string;
}

export interface ListAssessmentFrameworksRequest {
  readonly frameworkType: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface ListAssessmentFrameworksResponse {
  readonly frameworkMetadataList?: [];
  readonly nextToken?: string;
}

export interface ListAssessmentReportsRequest {
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface ListAssessmentReportsResponse {
  readonly assessmentReports?: [];
  readonly nextToken?: string;
}

export interface ListAssessmentsRequest {
  readonly status?: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface ListAssessmentsResponse {
  readonly assessmentMetadata?: [];
  readonly nextToken?: string;
}

export interface ListControlDomainInsightsByAssessmentRequest {
  readonly assessmentId: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface ListControlDomainInsightsByAssessmentResponse {
  readonly controlDomainInsights?: [];
  readonly nextToken?: string;
}

export interface ListControlDomainInsightsRequest {
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface ListControlDomainInsightsResponse {
  readonly controlDomainInsights?: [];
  readonly nextToken?: string;
}

export interface ListControlInsightsByControlDomainRequest {
  readonly controlDomainId: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface ListControlInsightsByControlDomainResponse {
  readonly controlInsightsMetadata?: [];
  readonly nextToken?: string;
}

export interface ListControlsRequest {
  readonly controlType: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface ListControlsResponse {
  readonly controlMetadataList?: [];
  readonly nextToken?: string;
}

export interface ListKeywordsForDataSourceRequest {
  readonly source: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface ListKeywordsForDataSourceResponse {
  readonly keywords?: [];
  readonly nextToken?: string;
}

export interface ListNotificationsRequest {
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface ListNotificationsResponse {
  readonly notifications?: [];
  readonly nextToken?: string;
}

export interface ListTagsForResourceRequest {
  readonly resourceArn: string;
}

export interface ListTagsForResourceResponse {
  readonly tags?: {[key: string]: any};
}

export interface ManualEvidence {
  readonly s3ResourcePath?: string;
}

export interface Notification {
  readonly id?: string;
  readonly assessmentId?: string;
  readonly assessmentName?: string;
  readonly controlSetId?: string;
  readonly controlSetName?: string;
  readonly description?: string;
  readonly eventTime?: Date;
  readonly source?: string;
}

export interface RegisterAccountRequest {
  readonly kmsKey?: string;
  readonly delegatedAdminAccount?: string;
}

export interface RegisterAccountResponse {
  readonly status?: string;
}

export interface RegisterOrganizationAdminAccountRequest {
  readonly adminAccountId: string;
}

export interface RegisterOrganizationAdminAccountResponse {
  readonly adminAccountId?: string;
  readonly organizationId?: string;
}

export interface Resource {
  readonly arn?: string;
  readonly value?: string;
}

export interface ResourceNotFoundException {
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}

export interface Role {
  readonly roleType?: string;
  readonly roleArn?: string;
}

export interface Scope {
  readonly awsAccounts?: [];
  readonly awsServices?: [];
}

export interface ServiceMetadata {
  readonly name?: string;
  readonly displayName?: string;
  readonly description?: string;
  readonly category?: string;
}

export interface Settings {
  readonly isAwsOrgEnabled?: boolean;
  readonly snsTopic?: string;
  readonly defaultAssessmentReportsDestination?: AssessmentReportsDestination;
  readonly defaultProcessOwners?: [];
  readonly kmsKey?: string;
}

export interface SourceKeyword {
  readonly keywordInputType?: string;
  readonly keywordValue?: string;
}

export interface StartAssessmentFrameworkShareRequest {
  readonly frameworkId: string;
  readonly destinationAccount: string;
  readonly destinationRegion: string;
  readonly comment?: string;
}

export interface StartAssessmentFrameworkShareResponse {
  readonly assessmentFrameworkShareRequest?: AssessmentFrameworkShareRequest;
}

export interface TagResourceRequest {
  readonly resourceArn: string;
  readonly tags: {[key: string]: any};
}

export interface TagResourceResponse {
}

export interface URL {
  readonly hyperlinkName?: string;
  readonly link?: string;
}

export interface UntagResourceRequest {
  readonly resourceArn: string;
  readonly tagKeys: [];
}

export interface UntagResourceResponse {
}

export interface UpdateAssessmentControlRequest {
  readonly assessmentId: string;
  readonly controlSetId: string;
  readonly controlId: string;
  readonly controlStatus?: string;
  readonly commentBody?: string;
}

export interface UpdateAssessmentControlResponse {
  readonly control?: AssessmentControl;
}

export interface UpdateAssessmentControlSetStatusRequest {
  readonly assessmentId: string;
  readonly controlSetId: string;
  readonly status: string;
  readonly comment: string;
}

export interface UpdateAssessmentControlSetStatusResponse {
  readonly controlSet?: AssessmentControlSet;
}

export interface UpdateAssessmentFrameworkControlSet {
  readonly id?: string;
  readonly name: string;
  readonly controls?: [];
}

export interface UpdateAssessmentFrameworkRequest {
  readonly frameworkId: string;
  readonly name: string;
  readonly description?: string;
  readonly complianceType?: string;
  readonly controlSets: [];
}

export interface UpdateAssessmentFrameworkResponse {
  readonly framework?: Framework;
}

export interface UpdateAssessmentFrameworkShareRequest {
  readonly requestId: string;
  readonly requestType: string;
  readonly action: string;
}

export interface UpdateAssessmentFrameworkShareResponse {
  readonly assessmentFrameworkShareRequest?: AssessmentFrameworkShareRequest;
}

export interface UpdateAssessmentRequest {
  readonly assessmentId: string;
  readonly assessmentName?: string;
  readonly assessmentDescription?: string;
  readonly scope: Scope;
  readonly assessmentReportsDestination?: AssessmentReportsDestination;
  readonly roles?: [];
}

export interface UpdateAssessmentResponse {
  readonly assessment?: Assessment;
}

export interface UpdateAssessmentStatusRequest {
  readonly assessmentId: string;
  readonly status: string;
}

export interface UpdateAssessmentStatusResponse {
  readonly assessment?: Assessment;
}

export interface UpdateControlRequest {
  readonly controlId: string;
  readonly name: string;
  readonly description?: string;
  readonly testingInformation?: string;
  readonly actionPlanTitle?: string;
  readonly actionPlanInstructions?: string;
  readonly controlMappingSources: [];
}

export interface UpdateControlResponse {
  readonly control?: Control;
}

export interface UpdateSettingsRequest {
  readonly snsTopic?: string;
  readonly defaultAssessmentReportsDestination?: AssessmentReportsDestination;
  readonly defaultProcessOwners?: [];
  readonly kmsKey?: string;
}

export interface UpdateSettingsResponse {
  readonly settings?: Settings;
}

export interface ValidateAssessmentReportIntegrityRequest {
  readonly s3RelativePath: string;
}

export interface ValidateAssessmentReportIntegrityResponse {
  readonly signatureValid?: boolean;
  readonly signatureAlgorithm?: string;
  readonly signatureDateTime?: string;
  readonly signatureKeyId?: string;
  readonly validationErrors?: [];
}

export interface ValidationException {
  readonly message: string;
  readonly reason?: string;
  readonly fields?: [];
}

export interface ValidationExceptionField {
  readonly name: string;
  readonly message: string;
}


