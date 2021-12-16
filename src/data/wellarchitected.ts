/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface AssociateLenses {
  readonly WorkloadId: string;
  readonly LensAliases: [];
}
export interface CreateLensShare {
  readonly LensAlias: string;
  readonly SharedWith: string;
  readonly ClientRequestToken: string;
}
export interface CreateLensVersion {
  readonly LensAlias: string;
  readonly LensVersion: string;
  readonly IsMajorVersion: boolean;
  readonly ClientRequestToken: string;
}
export interface CreateMilestone {
  readonly WorkloadId: string;
  readonly MilestoneName: string;
  readonly ClientRequestToken: string;
}
export interface CreateWorkload {
  readonly WorkloadName: string;
  readonly Description: string;
  readonly Environment: string;
  readonly AccountIds: [];
  readonly AwsRegions: [];
  readonly NonAwsRegions: [];
  readonly PillarPriorities: [];
  readonly ArchitecturalDesign: string;
  readonly ReviewOwner: string;
  readonly IndustryType: string;
  readonly Industry: string;
  readonly Lenses: [];
  readonly Notes: string;
  readonly ClientRequestToken: string;
  readonly Tags: {[key: string]: any};
}
export interface CreateWorkloadShare {
  readonly WorkloadId: string;
  readonly SharedWith: string;
  readonly PermissionType: string;
  readonly ClientRequestToken: string;
}
export interface DeleteLens {
  readonly LensAlias: string;
  readonly ClientRequestToken: string;
  readonly LensStatus: string;
}
export interface DeleteLensShare {
  readonly ShareId: string;
  readonly LensAlias: string;
  readonly ClientRequestToken: string;
}
export interface DeleteWorkload {
  readonly WorkloadId: string;
  readonly ClientRequestToken: string;
}
export interface DeleteWorkloadShare {
  readonly ShareId: string;
  readonly WorkloadId: string;
  readonly ClientRequestToken: string;
}
export interface DisassociateLenses {
  readonly WorkloadId: string;
  readonly LensAliases: [];
}
export interface ExportLens {
  readonly LensAlias: string;
  readonly LensVersion: string;
}
export interface GetAnswer {
  readonly WorkloadId: string;
  readonly LensAlias: string;
  readonly QuestionId: string;
  readonly MilestoneNumber: number;
}
export interface GetLens {
  readonly LensAlias: string;
  readonly LensVersion: string;
}
export interface GetLensReview {
  readonly WorkloadId: string;
  readonly LensAlias: string;
  readonly MilestoneNumber: number;
}
export interface GetLensReviewReport {
  readonly WorkloadId: string;
  readonly LensAlias: string;
  readonly MilestoneNumber: number;
}
export interface GetLensVersionDifference {
  readonly LensAlias: string;
  readonly BaseLensVersion: string;
  readonly TargetLensVersion: string;
}
export interface GetMilestone {
  readonly WorkloadId: string;
  readonly MilestoneNumber: number;
}
export interface GetWorkload {
  readonly WorkloadId: string;
}
export interface ImportLens {
  readonly LensAlias: string;
  readonly JSONString: string;
  readonly ClientRequestToken: string;
  readonly Tags: {[key: string]: any};
}
export interface ListAnswers {
  readonly WorkloadId: string;
  readonly LensAlias: string;
  readonly PillarId: string;
  readonly MilestoneNumber: number;
  readonly NextToken: string;
  readonly MaxResults: number;
}
export interface ListLensReviewImprovements {
  readonly WorkloadId: string;
  readonly LensAlias: string;
  readonly PillarId: string;
  readonly MilestoneNumber: number;
  readonly NextToken: string;
  readonly MaxResults: number;
}
export interface ListLensReviews {
  readonly WorkloadId: string;
  readonly MilestoneNumber: number;
  readonly NextToken: string;
  readonly MaxResults: number;
}
export interface ListLensShares {
  readonly LensAlias: string;
  readonly SharedWithPrefix: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}
export interface ListLenses {
  readonly NextToken: string;
  readonly MaxResults: number;
  readonly LensType: string;
  readonly LensStatus: string;
  readonly LensName: string;
}
export interface ListMilestones {
  readonly WorkloadId: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}
export interface ListNotifications {
  readonly WorkloadId: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}
export interface ListShareInvitations {
  readonly WorkloadNamePrefix: string;
  readonly LensNamePrefix: string;
  readonly ShareResourceType: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}
export interface ListTagsForResource {
  readonly WorkloadArn: string;
}
export interface ListWorkloadShares {
  readonly WorkloadId: string;
  readonly SharedWithPrefix: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}
export interface ListWorkloads {
  readonly WorkloadNamePrefix: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}
export interface TagResource {
  readonly WorkloadArn: string;
  readonly Tags: {[key: string]: any};
}
export interface UntagResource {
  readonly WorkloadArn: string;
  readonly TagKeys: [];
}
export interface UpdateAnswer {
  readonly WorkloadId: string;
  readonly LensAlias: string;
  readonly QuestionId: string;
  readonly SelectedChoices: [];
  readonly ChoiceUpdates: {[key: string]: any};
  readonly Notes: string;
  readonly IsApplicable: boolean;
  readonly Reason: string;
}
export interface UpdateLensReview {
  readonly WorkloadId: string;
  readonly LensAlias: string;
  readonly LensNotes: string;
  readonly PillarNotes: {[key: string]: any};
}
export interface UpdateShareInvitation {
  readonly ShareInvitationId: string;
  readonly ShareInvitationAction: string;
}
export interface UpdateWorkload {
  readonly WorkloadId: string;
  readonly WorkloadName: string;
  readonly Description: string;
  readonly Environment: string;
  readonly AccountIds: [];
  readonly AwsRegions: [];
  readonly NonAwsRegions: [];
  readonly PillarPriorities: [];
  readonly ArchitecturalDesign: string;
  readonly ReviewOwner: string;
  readonly IsReviewOwnerUpdateAcknowledged: boolean;
  readonly IndustryType: string;
  readonly Industry: string;
  readonly Notes: string;
  readonly ImprovementStatus: string;
}
export interface UpdateWorkloadShare {
  readonly ShareId: string;
  readonly WorkloadId: string;
  readonly PermissionType: string;
}
export interface UpgradeLensReview {
  readonly WorkloadId: string;
  readonly LensAlias: string;
  readonly MilestoneName: string;
  readonly ClientRequestToken: string;
}



interface AccessDeniedException {
  readonly Message: string;
}

interface Answer {
  readonly QuestionId: string;
  readonly PillarId: string;
  readonly QuestionTitle: string;
  readonly QuestionDescription: string;
  readonly ImprovementPlanUrl: string;
  readonly HelpfulResourceUrl: string;
  readonly HelpfulResourceDisplayText: string;
  readonly Choices: [];
  readonly SelectedChoices: [];
  readonly ChoiceAnswers: [];
  readonly IsApplicable: boolean;
  readonly Risk: string;
  readonly Notes: string;
  readonly Reason: string;
}

interface AnswerSummary {
  readonly QuestionId: string;
  readonly PillarId: string;
  readonly QuestionTitle: string;
  readonly Choices: [];
  readonly SelectedChoices: [];
  readonly ChoiceAnswerSummaries: [];
  readonly IsApplicable: boolean;
  readonly Risk: string;
  readonly Reason: string;
}

interface AssociateLensesInput {
  readonly WorkloadId: string;
  readonly LensAliases: [];
}

interface Choice {
  readonly ChoiceId: string;
  readonly Title: string;
  readonly Description: string;
  readonly HelpfulResource: ChoiceContent;
  readonly ImprovementPlan: ChoiceContent;
}

interface ChoiceAnswer {
  readonly ChoiceId: string;
  readonly Status: string;
  readonly Reason: string;
  readonly Notes: string;
}

interface ChoiceAnswerSummary {
  readonly ChoiceId: string;
  readonly Status: string;
  readonly Reason: string;
}

interface ChoiceContent {
  readonly DisplayText: string;
  readonly Url: string;
}

interface ChoiceImprovementPlan {
  readonly ChoiceId: string;
  readonly DisplayText: string;
  readonly ImprovementPlanUrl: string;
}

interface ChoiceUpdate {
  readonly Status: string;
  readonly Reason: string;
  readonly Notes: string;
}

interface ConflictException {
  readonly Message: string;
  readonly ResourceId: string;
  readonly ResourceType: string;
}

interface CreateLensShareInput {
  readonly LensAlias: string;
  readonly SharedWith: string;
  readonly ClientRequestToken: string;
}

interface CreateLensShareOutput {
  readonly ShareId: string;
}

interface CreateLensVersionInput {
  readonly LensAlias: string;
  readonly LensVersion: string;
  readonly IsMajorVersion: boolean;
  readonly ClientRequestToken: string;
}

interface CreateLensVersionOutput {
  readonly LensArn: string;
  readonly LensVersion: string;
}

interface CreateMilestoneInput {
  readonly WorkloadId: string;
  readonly MilestoneName: string;
  readonly ClientRequestToken: string;
}

interface CreateMilestoneOutput {
  readonly WorkloadId: string;
  readonly MilestoneNumber: number;
}

interface CreateWorkloadInput {
  readonly WorkloadName: string;
  readonly Description: string;
  readonly Environment: string;
  readonly AccountIds: [];
  readonly AwsRegions: [];
  readonly NonAwsRegions: [];
  readonly PillarPriorities: [];
  readonly ArchitecturalDesign: string;
  readonly ReviewOwner: string;
  readonly IndustryType: string;
  readonly Industry: string;
  readonly Lenses: [];
  readonly Notes: string;
  readonly ClientRequestToken: string;
  readonly Tags: {[key: string]: any};
}

interface CreateWorkloadOutput {
  readonly WorkloadId: string;
  readonly WorkloadArn: string;
}

interface CreateWorkloadShareInput {
  readonly WorkloadId: string;
  readonly SharedWith: string;
  readonly PermissionType: string;
  readonly ClientRequestToken: string;
}

interface CreateWorkloadShareOutput {
  readonly WorkloadId: string;
  readonly ShareId: string;
}

interface DeleteLensInput {
  readonly LensAlias: string;
  readonly ClientRequestToken: string;
  readonly LensStatus: string;
}

interface DeleteLensShareInput {
  readonly ShareId: string;
  readonly LensAlias: string;
  readonly ClientRequestToken: string;
}

interface DeleteWorkloadInput {
  readonly WorkloadId: string;
  readonly ClientRequestToken: string;
}

interface DeleteWorkloadShareInput {
  readonly ShareId: string;
  readonly WorkloadId: string;
  readonly ClientRequestToken: string;
}

interface DisassociateLensesInput {
  readonly WorkloadId: string;
  readonly LensAliases: [];
}

interface ExportLensInput {
  readonly LensAlias: string;
  readonly LensVersion: string;
}

interface ExportLensOutput {
  readonly LensJSON: string;
}

interface GetAnswerInput {
  readonly WorkloadId: string;
  readonly LensAlias: string;
  readonly QuestionId: string;
  readonly MilestoneNumber: number;
}

interface GetAnswerOutput {
  readonly WorkloadId: string;
  readonly MilestoneNumber: number;
  readonly LensAlias: string;
  readonly LensArn: string;
  readonly Answer: Answer;
}

interface GetLensInput {
  readonly LensAlias: string;
  readonly LensVersion: string;
}

interface GetLensOutput {
  readonly Lens: Lens;
}

interface GetLensReviewInput {
  readonly WorkloadId: string;
  readonly LensAlias: string;
  readonly MilestoneNumber: number;
}

interface GetLensReviewOutput {
  readonly WorkloadId: string;
  readonly MilestoneNumber: number;
  readonly LensReview: LensReview;
}

interface GetLensReviewReportInput {
  readonly WorkloadId: string;
  readonly LensAlias: string;
  readonly MilestoneNumber: number;
}

interface GetLensReviewReportOutput {
  readonly WorkloadId: string;
  readonly MilestoneNumber: number;
  readonly LensReviewReport: LensReviewReport;
}

interface GetLensVersionDifferenceInput {
  readonly LensAlias: string;
  readonly BaseLensVersion: string;
  readonly TargetLensVersion: string;
}

interface GetLensVersionDifferenceOutput {
  readonly LensAlias: string;
  readonly LensArn: string;
  readonly BaseLensVersion: string;
  readonly TargetLensVersion: string;
  readonly LatestLensVersion: string;
  readonly VersionDifferences: VersionDifferences;
}

interface GetMilestoneInput {
  readonly WorkloadId: string;
  readonly MilestoneNumber: number;
}

interface GetMilestoneOutput {
  readonly WorkloadId: string;
  readonly Milestone: Milestone;
}

interface GetWorkloadInput {
  readonly WorkloadId: string;
}

interface GetWorkloadOutput {
  readonly Workload: Workload;
}

interface ImportLensInput {
  readonly LensAlias: string;
  readonly JSONString: string;
  readonly ClientRequestToken: string;
  readonly Tags: {[key: string]: any};
}

interface ImportLensOutput {
  readonly LensArn: string;
  readonly Status: string;
}

interface ImprovementSummary {
  readonly QuestionId: string;
  readonly PillarId: string;
  readonly QuestionTitle: string;
  readonly Risk: string;
  readonly ImprovementPlanUrl: string;
  readonly ImprovementPlans: [];
}

interface InternalServerException {
  readonly Message: string;
}

interface Lens {
  readonly LensArn: string;
  readonly LensVersion: string;
  readonly Name: string;
  readonly Description: string;
  readonly Owner: string;
  readonly ShareInvitationId: string;
}

interface LensReview {
  readonly LensAlias: string;
  readonly LensArn: string;
  readonly LensVersion: string;
  readonly LensName: string;
  readonly LensStatus: string;
  readonly PillarReviewSummaries: [];
  readonly UpdatedAt: Date;
  readonly Notes: string;
  readonly RiskCounts: {[key: string]: any};
  readonly NextToken: string;
}

interface LensReviewReport {
  readonly LensAlias: string;
  readonly LensArn: string;
  readonly Base64String: string;
}

interface LensReviewSummary {
  readonly LensAlias: string;
  readonly LensArn: string;
  readonly LensVersion: string;
  readonly LensName: string;
  readonly LensStatus: string;
  readonly UpdatedAt: Date;
  readonly RiskCounts: {[key: string]: any};
}

interface LensShareSummary {
  readonly ShareId: string;
  readonly SharedWith: string;
  readonly Status: string;
}

interface LensSummary {
  readonly LensArn: string;
  readonly LensAlias: string;
  readonly LensName: string;
  readonly LensType: string;
  readonly Description: string;
  readonly CreatedAt: Date;
  readonly UpdatedAt: Date;
  readonly LensVersion: string;
  readonly Owner: string;
  readonly LensStatus: string;
}

interface LensUpgradeSummary {
  readonly WorkloadId: string;
  readonly WorkloadName: string;
  readonly LensAlias: string;
  readonly LensArn: string;
  readonly CurrentLensVersion: string;
  readonly LatestLensVersion: string;
}

interface ListAnswersInput {
  readonly WorkloadId: string;
  readonly LensAlias: string;
  readonly PillarId: string;
  readonly MilestoneNumber: number;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListAnswersOutput {
  readonly WorkloadId: string;
  readonly MilestoneNumber: number;
  readonly LensAlias: string;
  readonly LensArn: string;
  readonly AnswerSummaries: [];
  readonly NextToken: string;
}

interface ListLensReviewImprovementsInput {
  readonly WorkloadId: string;
  readonly LensAlias: string;
  readonly PillarId: string;
  readonly MilestoneNumber: number;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListLensReviewImprovementsOutput {
  readonly WorkloadId: string;
  readonly MilestoneNumber: number;
  readonly LensAlias: string;
  readonly LensArn: string;
  readonly ImprovementSummaries: [];
  readonly NextToken: string;
}

interface ListLensReviewsInput {
  readonly WorkloadId: string;
  readonly MilestoneNumber: number;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListLensReviewsOutput {
  readonly WorkloadId: string;
  readonly MilestoneNumber: number;
  readonly LensReviewSummaries: [];
  readonly NextToken: string;
}

interface ListLensSharesInput {
  readonly LensAlias: string;
  readonly SharedWithPrefix: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListLensSharesOutput {
  readonly LensShareSummaries: [];
  readonly NextToken: string;
}

interface ListLensesInput {
  readonly NextToken: string;
  readonly MaxResults: number;
  readonly LensType: string;
  readonly LensStatus: string;
  readonly LensName: string;
}

interface ListLensesOutput {
  readonly LensSummaries: [];
  readonly NextToken: string;
}

interface ListMilestonesInput {
  readonly WorkloadId: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListMilestonesOutput {
  readonly WorkloadId: string;
  readonly MilestoneSummaries: [];
  readonly NextToken: string;
}

interface ListNotificationsInput {
  readonly WorkloadId: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListNotificationsOutput {
  readonly NotificationSummaries: [];
  readonly NextToken: string;
}

interface ListShareInvitationsInput {
  readonly WorkloadNamePrefix: string;
  readonly LensNamePrefix: string;
  readonly ShareResourceType: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListShareInvitationsOutput {
  readonly ShareInvitationSummaries: [];
  readonly NextToken: string;
}

interface ListTagsForResourceInput {
  readonly WorkloadArn: string;
}

interface ListTagsForResourceOutput {
  readonly Tags: {[key: string]: any};
}

interface ListWorkloadSharesInput {
  readonly WorkloadId: string;
  readonly SharedWithPrefix: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListWorkloadSharesOutput {
  readonly WorkloadId: string;
  readonly WorkloadShareSummaries: [];
  readonly NextToken: string;
}

interface ListWorkloadsInput {
  readonly WorkloadNamePrefix: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListWorkloadsOutput {
  readonly WorkloadSummaries: [];
  readonly NextToken: string;
}

interface Milestone {
  readonly MilestoneNumber: number;
  readonly MilestoneName: string;
  readonly RecordedAt: Date;
  readonly Workload: Workload;
}

interface MilestoneSummary {
  readonly MilestoneNumber: number;
  readonly MilestoneName: string;
  readonly RecordedAt: Date;
  readonly WorkloadSummary: WorkloadSummary;
}

interface NotificationSummary {
  readonly Type: string;
  readonly LensUpgradeSummary: LensUpgradeSummary;
}

interface PillarDifference {
  readonly PillarId: string;
  readonly PillarName: string;
  readonly DifferenceStatus: string;
  readonly QuestionDifferences: [];
}

interface PillarReviewSummary {
  readonly PillarId: string;
  readonly PillarName: string;
  readonly Notes: string;
  readonly RiskCounts: {[key: string]: any};
}

interface QuestionDifference {
  readonly QuestionId: string;
  readonly QuestionTitle: string;
  readonly DifferenceStatus: string;
}

interface ResourceNotFoundException {
  readonly Message: string;
  readonly ResourceId: string;
  readonly ResourceType: string;
}

interface ServiceQuotaExceededException {
  readonly Message: string;
  readonly ResourceId: string;
  readonly ResourceType: string;
  readonly QuotaCode: string;
  readonly ServiceCode: string;
}

interface ShareInvitation {
  readonly ShareInvitationId: string;
  readonly ShareResourceType: string;
  readonly WorkloadId: string;
  readonly LensAlias: string;
  readonly LensArn: string;
}

interface ShareInvitationSummary {
  readonly ShareInvitationId: string;
  readonly SharedBy: string;
  readonly SharedWith: string;
  readonly PermissionType: string;
  readonly ShareResourceType: string;
  readonly WorkloadName: string;
  readonly WorkloadId: string;
  readonly LensName: string;
  readonly LensArn: string;
}

interface TagResourceInput {
  readonly WorkloadArn: string;
  readonly Tags: {[key: string]: any};
}

interface TagResourceOutput {
}

interface ThrottlingException {
  readonly Message: string;
  readonly QuotaCode: string;
  readonly ServiceCode: string;
}

interface UntagResourceInput {
  readonly WorkloadArn: string;
  readonly TagKeys: [];
}

interface UntagResourceOutput {
}

interface UpdateAnswerInput {
  readonly WorkloadId: string;
  readonly LensAlias: string;
  readonly QuestionId: string;
  readonly SelectedChoices: [];
  readonly ChoiceUpdates: {[key: string]: any};
  readonly Notes: string;
  readonly IsApplicable: boolean;
  readonly Reason: string;
}

interface UpdateAnswerOutput {
  readonly WorkloadId: string;
  readonly LensAlias: string;
  readonly LensArn: string;
  readonly Answer: Answer;
}

interface UpdateLensReviewInput {
  readonly WorkloadId: string;
  readonly LensAlias: string;
  readonly LensNotes: string;
  readonly PillarNotes: {[key: string]: any};
}

interface UpdateLensReviewOutput {
  readonly WorkloadId: string;
  readonly LensReview: LensReview;
}

interface UpdateShareInvitationInput {
  readonly ShareInvitationId: string;
  readonly ShareInvitationAction: string;
}

interface UpdateShareInvitationOutput {
  readonly ShareInvitation: ShareInvitation;
}

interface UpdateWorkloadInput {
  readonly WorkloadId: string;
  readonly WorkloadName: string;
  readonly Description: string;
  readonly Environment: string;
  readonly AccountIds: [];
  readonly AwsRegions: [];
  readonly NonAwsRegions: [];
  readonly PillarPriorities: [];
  readonly ArchitecturalDesign: string;
  readonly ReviewOwner: string;
  readonly IsReviewOwnerUpdateAcknowledged: boolean;
  readonly IndustryType: string;
  readonly Industry: string;
  readonly Notes: string;
  readonly ImprovementStatus: string;
}

interface UpdateWorkloadOutput {
  readonly Workload: Workload;
}

interface UpdateWorkloadShareInput {
  readonly ShareId: string;
  readonly WorkloadId: string;
  readonly PermissionType: string;
}

interface UpdateWorkloadShareOutput {
  readonly WorkloadId: string;
  readonly WorkloadShare: WorkloadShare;
}

interface UpgradeLensReviewInput {
  readonly WorkloadId: string;
  readonly LensAlias: string;
  readonly MilestoneName: string;
  readonly ClientRequestToken: string;
}

interface ValidationException {
  readonly Message: string;
  readonly Reason: string;
  readonly Fields: [];
}

interface ValidationExceptionField {
  readonly Name: string;
  readonly Message: string;
}

interface VersionDifferences {
  readonly PillarDifferences: [];
}

interface Workload {
  readonly WorkloadId: string;
  readonly WorkloadArn: string;
  readonly WorkloadName: string;
  readonly Description: string;
  readonly Environment: string;
  readonly UpdatedAt: Date;
  readonly AccountIds: [];
  readonly AwsRegions: [];
  readonly NonAwsRegions: [];
  readonly ArchitecturalDesign: string;
  readonly ReviewOwner: string;
  readonly ReviewRestrictionDate: Date;
  readonly IsReviewOwnerUpdateAcknowledged: boolean;
  readonly IndustryType: string;
  readonly Industry: string;
  readonly Notes: string;
  readonly ImprovementStatus: string;
  readonly RiskCounts: {[key: string]: any};
  readonly PillarPriorities: [];
  readonly Lenses: [];
  readonly Owner: string;
  readonly ShareInvitationId: string;
  readonly Tags: {[key: string]: any};
}

interface WorkloadShare {
  readonly ShareId: string;
  readonly SharedBy: string;
  readonly SharedWith: string;
  readonly PermissionType: string;
  readonly Status: string;
  readonly WorkloadName: string;
  readonly WorkloadId: string;
}

interface WorkloadShareSummary {
  readonly ShareId: string;
  readonly SharedWith: string;
  readonly PermissionType: string;
  readonly Status: string;
}

interface WorkloadSummary {
  readonly WorkloadId: string;
  readonly WorkloadArn: string;
  readonly WorkloadName: string;
  readonly Owner: string;
  readonly UpdatedAt: Date;
  readonly Lenses: [];
  readonly RiskCounts: {[key: string]: any};
  readonly ImprovementStatus: string;
}
