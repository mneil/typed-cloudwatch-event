/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface AssociateServiceQuotaTemplate {
}
export interface DeleteServiceQuotaIncreaseRequestFromTemplate {
  readonly ServiceCode: string;
  readonly QuotaCode: string;
  readonly AwsRegion: string;
}
export interface DisassociateServiceQuotaTemplate {
}
export interface GetAWSDefaultServiceQuota {
  readonly ServiceCode: string;
  readonly QuotaCode: string;
}
export interface GetAssociationForServiceQuotaTemplate {
}
export interface GetRequestedServiceQuotaChange {
  readonly RequestId: string;
}
export interface GetServiceQuota {
  readonly ServiceCode: string;
  readonly QuotaCode: string;
}
export interface GetServiceQuotaIncreaseRequestFromTemplate {
  readonly ServiceCode: string;
  readonly QuotaCode: string;
  readonly AwsRegion: string;
}
export interface ListAWSDefaultServiceQuotas {
  readonly ServiceCode: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}
export interface ListRequestedServiceQuotaChangeHistory {
  readonly ServiceCode: string;
  readonly Status: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}
export interface ListRequestedServiceQuotaChangeHistoryByQuota {
  readonly ServiceCode: string;
  readonly QuotaCode: string;
  readonly Status: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}
export interface ListServiceQuotaIncreaseRequestsInTemplate {
  readonly ServiceCode: string;
  readonly AwsRegion: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}
export interface ListServiceQuotas {
  readonly ServiceCode: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}
export interface ListServices {
  readonly NextToken: string;
  readonly MaxResults: number;
}
export interface ListTagsForResource {
  readonly ResourceARN: string;
}
export interface PutServiceQuotaIncreaseRequestIntoTemplate {
  readonly QuotaCode: string;
  readonly ServiceCode: string;
  readonly AwsRegion: string;
  readonly DesiredValue: unknown;
}
export interface RequestServiceQuotaIncrease {
  readonly ServiceCode: string;
  readonly QuotaCode: string;
  readonly DesiredValue: unknown;
}
export interface TagResource {
  readonly ResourceARN: string;
  readonly Tags: [];
}
export interface UntagResource {
  readonly ResourceARN: string;
  readonly TagKeys: [];
}



interface AWSServiceAccessNotEnabledException {
  readonly Message: string;
}

interface AccessDeniedException {
  readonly Message: string;
}

interface AssociateServiceQuotaTemplateRequest {
}

interface AssociateServiceQuotaTemplateResponse {
}

interface DeleteServiceQuotaIncreaseRequestFromTemplateRequest {
  readonly ServiceCode: string;
  readonly QuotaCode: string;
  readonly AwsRegion: string;
}

interface DeleteServiceQuotaIncreaseRequestFromTemplateResponse {
}

interface DependencyAccessDeniedException {
  readonly Message: string;
}

interface DisassociateServiceQuotaTemplateRequest {
}

interface DisassociateServiceQuotaTemplateResponse {
}

interface ErrorReason {
  readonly ErrorCode: string;
  readonly ErrorMessage: string;
}

interface GetAWSDefaultServiceQuotaRequest {
  readonly ServiceCode: string;
  readonly QuotaCode: string;
}

interface GetAWSDefaultServiceQuotaResponse {
  readonly Quota: ServiceQuota;
}

interface GetAssociationForServiceQuotaTemplateRequest {
}

interface GetAssociationForServiceQuotaTemplateResponse {
  readonly ServiceQuotaTemplateAssociationStatus: string;
}

interface GetRequestedServiceQuotaChangeRequest {
  readonly RequestId: string;
}

interface GetRequestedServiceQuotaChangeResponse {
  readonly RequestedQuota: RequestedServiceQuotaChange;
}

interface GetServiceQuotaIncreaseRequestFromTemplateRequest {
  readonly ServiceCode: string;
  readonly QuotaCode: string;
  readonly AwsRegion: string;
}

interface GetServiceQuotaIncreaseRequestFromTemplateResponse {
  readonly ServiceQuotaIncreaseRequestInTemplate: ServiceQuotaIncreaseRequestInTemplate;
}

interface GetServiceQuotaRequest {
  readonly ServiceCode: string;
  readonly QuotaCode: string;
}

interface GetServiceQuotaResponse {
  readonly Quota: ServiceQuota;
}

interface IllegalArgumentException {
  readonly Message: string;
}

interface InvalidPaginationTokenException {
  readonly Message: string;
}

interface InvalidResourceStateException {
  readonly Message: string;
}

interface ListAWSDefaultServiceQuotasRequest {
  readonly ServiceCode: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListAWSDefaultServiceQuotasResponse {
  readonly NextToken: string;
  readonly Quotas: [];
}

interface ListRequestedServiceQuotaChangeHistoryByQuotaRequest {
  readonly ServiceCode: string;
  readonly QuotaCode: string;
  readonly Status: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListRequestedServiceQuotaChangeHistoryByQuotaResponse {
  readonly NextToken: string;
  readonly RequestedQuotas: [];
}

interface ListRequestedServiceQuotaChangeHistoryRequest {
  readonly ServiceCode: string;
  readonly Status: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListRequestedServiceQuotaChangeHistoryResponse {
  readonly NextToken: string;
  readonly RequestedQuotas: [];
}

interface ListServiceQuotaIncreaseRequestsInTemplateRequest {
  readonly ServiceCode: string;
  readonly AwsRegion: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListServiceQuotaIncreaseRequestsInTemplateResponse {
  readonly ServiceQuotaIncreaseRequestInTemplateList: [];
  readonly NextToken: string;
}

interface ListServiceQuotasRequest {
  readonly ServiceCode: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListServiceQuotasResponse {
  readonly NextToken: string;
  readonly Quotas: [];
}

interface ListServicesRequest {
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListServicesResponse {
  readonly NextToken: string;
  readonly Services: [];
}

interface ListTagsForResourceRequest {
  readonly ResourceARN: string;
}

interface ListTagsForResourceResponse {
  readonly Tags: [];
}

interface MetricInfo {
  readonly MetricNamespace: string;
  readonly MetricName: string;
  readonly MetricDimensions: {[key: string]: any};
  readonly MetricStatisticRecommendation: string;
}

interface NoAvailableOrganizationException {
  readonly Message: string;
}

interface NoSuchResourceException {
  readonly Message: string;
}

interface OrganizationNotInAllFeaturesModeException {
  readonly Message: string;
}

interface PutServiceQuotaIncreaseRequestIntoTemplateRequest {
  readonly QuotaCode: string;
  readonly ServiceCode: string;
  readonly AwsRegion: string;
  readonly DesiredValue: unknown;
}

interface PutServiceQuotaIncreaseRequestIntoTemplateResponse {
  readonly ServiceQuotaIncreaseRequestInTemplate: ServiceQuotaIncreaseRequestInTemplate;
}

interface QuotaExceededException {
  readonly Message: string;
}

interface QuotaPeriod {
  readonly PeriodValue: number;
  readonly PeriodUnit: string;
}

interface RequestServiceQuotaIncreaseRequest {
  readonly ServiceCode: string;
  readonly QuotaCode: string;
  readonly DesiredValue: unknown;
}

interface RequestServiceQuotaIncreaseResponse {
  readonly RequestedQuota: RequestedServiceQuotaChange;
}

interface RequestedServiceQuotaChange {
  readonly Id: string;
  readonly CaseId: string;
  readonly ServiceCode: string;
  readonly ServiceName: string;
  readonly QuotaCode: string;
  readonly QuotaName: string;
  readonly DesiredValue: unknown;
  readonly Status: string;
  readonly Created: Date;
  readonly LastUpdated: Date;
  readonly Requester: string;
  readonly QuotaArn: string;
  readonly GlobalQuota: boolean;
  readonly Unit: string;
}

interface ResourceAlreadyExistsException {
  readonly Message: string;
}

interface ServiceException {
  readonly Message: string;
}

interface ServiceInfo {
  readonly ServiceCode: string;
  readonly ServiceName: string;
}

interface ServiceQuota {
  readonly ServiceCode: string;
  readonly ServiceName: string;
  readonly QuotaArn: string;
  readonly QuotaCode: string;
  readonly QuotaName: string;
  readonly Value: unknown;
  readonly Unit: string;
  readonly Adjustable: boolean;
  readonly GlobalQuota: boolean;
  readonly UsageMetric: MetricInfo;
  readonly Period: QuotaPeriod;
  readonly ErrorReason: ErrorReason;
}

interface ServiceQuotaIncreaseRequestInTemplate {
  readonly ServiceCode: string;
  readonly ServiceName: string;
  readonly QuotaCode: string;
  readonly QuotaName: string;
  readonly DesiredValue: unknown;
  readonly AwsRegion: string;
  readonly Unit: string;
  readonly GlobalQuota: boolean;
}

interface ServiceQuotaTemplateNotInUseException {
  readonly Message: string;
}

interface Tag {
  readonly Key: string;
  readonly Value: string;
}

interface TagPolicyViolationException {
  readonly Message: string;
}

interface TagResourceRequest {
  readonly ResourceARN: string;
  readonly Tags: [];
}

interface TagResourceResponse {
}

interface TemplatesNotAvailableInRegionException {
  readonly Message: string;
}

interface TooManyRequestsException {
  readonly Message: string;
}

interface TooManyTagsException {
  readonly Message: string;
}

interface UntagResourceRequest {
  readonly ResourceARN: string;
  readonly TagKeys: [];
}

interface UntagResourceResponse {
}
