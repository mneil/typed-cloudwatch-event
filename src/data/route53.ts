/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface ActivateKeySigningKey {
  readonly HostedZoneId: string;
  readonly Name: string;
}

export interface AssociateVPCWithHostedZone {
  readonly HostedZoneId: string;
  readonly VPC: VPC;
  readonly Comment?: string;
}

export interface ChangeResourceRecordSets {
  readonly HostedZoneId: string;
  readonly ChangeBatch: ChangeBatch;
}

export interface ChangeTagsForResource {
  readonly ResourceType: string;
  readonly ResourceId: string;
  readonly AddTags?: [];
  readonly RemoveTagKeys?: [];
}

export interface CreateHealthCheck {
  readonly CallerReference: string;
  readonly HealthCheckConfig: HealthCheckConfig;
}

export interface CreateHostedZone {
  readonly Name: string;
  readonly VPC?: VPC;
  readonly CallerReference: string;
  readonly HostedZoneConfig?: HostedZoneConfig;
  readonly DelegationSetId?: string;
}

export interface CreateKeySigningKey {
  readonly CallerReference: string;
  readonly HostedZoneId: string;
  readonly KeyManagementServiceArn: string;
  readonly Name: string;
  readonly Status: string;
}

export interface CreateQueryLoggingConfig {
  readonly HostedZoneId: string;
  readonly CloudWatchLogsLogGroupArn: string;
}

export interface CreateReusableDelegationSet {
  readonly CallerReference: string;
  readonly HostedZoneId?: string;
}

export interface CreateTrafficPolicy {
  readonly Name: string;
  readonly Document: string;
  readonly Comment?: string;
}

export interface CreateTrafficPolicyInstance {
  readonly HostedZoneId: string;
  readonly Name: string;
  readonly TTL: number;
  readonly TrafficPolicyId: string;
  readonly TrafficPolicyVersion: number;
}

export interface CreateTrafficPolicyVersion {
  readonly Id: string;
  readonly Document: string;
  readonly Comment?: string;
}

export interface CreateVPCAssociationAuthorization {
  readonly HostedZoneId: string;
  readonly VPC: VPC;
}

export interface DeactivateKeySigningKey {
  readonly HostedZoneId: string;
  readonly Name: string;
}

export interface DeleteHealthCheck {
  readonly HealthCheckId: string;
}

export interface DeleteHostedZone {
  readonly Id: string;
}

export interface DeleteKeySigningKey {
  readonly HostedZoneId: string;
  readonly Name: string;
}

export interface DeleteQueryLoggingConfig {
  readonly Id: string;
}

export interface DeleteReusableDelegationSet {
  readonly Id: string;
}

export interface DeleteTrafficPolicy {
  readonly Id: string;
  readonly Version: number;
}

export interface DeleteTrafficPolicyInstance {
  readonly Id: string;
}

export interface DeleteVPCAssociationAuthorization {
  readonly HostedZoneId: string;
  readonly VPC: VPC;
}

export interface DisableHostedZoneDNSSEC {
  readonly HostedZoneId: string;
}

export interface DisassociateVPCFromHostedZone {
  readonly HostedZoneId: string;
  readonly VPC: VPC;
  readonly Comment?: string;
}

export interface EnableHostedZoneDNSSEC {
  readonly HostedZoneId: string;
}

export interface GetAccountLimit {
  readonly Type: string;
}

export interface GetChange {
  readonly Id: string;
}

export interface GetCheckerIpRanges {
}

export interface GetDNSSEC {
  readonly HostedZoneId: string;
}

export interface GetGeoLocation {
  readonly ContinentCode?: string;
  readonly CountryCode?: string;
  readonly SubdivisionCode?: string;
}

export interface GetHealthCheck {
  readonly HealthCheckId: string;
}

export interface GetHealthCheckCount {
}

export interface GetHealthCheckLastFailureReason {
  readonly HealthCheckId: string;
}

export interface GetHealthCheckStatus {
  readonly HealthCheckId: string;
}

export interface GetHostedZone {
  readonly Id: string;
}

export interface GetHostedZoneCount {
}

export interface GetHostedZoneLimit {
  readonly Type: string;
  readonly HostedZoneId: string;
}

export interface GetQueryLoggingConfig {
  readonly Id: string;
}

export interface GetReusableDelegationSet {
  readonly Id: string;
}

export interface GetReusableDelegationSetLimit {
  readonly Type: string;
  readonly DelegationSetId: string;
}

export interface GetTrafficPolicy {
  readonly Id: string;
  readonly Version: number;
}

export interface GetTrafficPolicyInstance {
  readonly Id: string;
}

export interface GetTrafficPolicyInstanceCount {
}

export interface ListGeoLocations {
  readonly StartContinentCode?: string;
  readonly StartCountryCode?: string;
  readonly StartSubdivisionCode?: string;
  readonly MaxItems?: string;
}

export interface ListHealthChecks {
  readonly Marker?: string;
  readonly MaxItems?: string;
}

export interface ListHostedZones {
  readonly Marker?: string;
  readonly MaxItems?: string;
  readonly DelegationSetId?: string;
}

export interface ListHostedZonesByName {
  readonly DNSName?: string;
  readonly HostedZoneId?: string;
  readonly MaxItems?: string;
}

export interface ListHostedZonesByVPC {
  readonly VPCId: string;
  readonly VPCRegion: string;
  readonly MaxItems?: string;
  readonly NextToken?: string;
}

export interface ListQueryLoggingConfigs {
  readonly HostedZoneId?: string;
  readonly NextToken?: string;
  readonly MaxResults?: string;
}

export interface ListResourceRecordSets {
  readonly HostedZoneId: string;
  readonly StartRecordName?: string;
  readonly StartRecordType?: string;
  readonly StartRecordIdentifier?: string;
  readonly MaxItems?: string;
}

export interface ListReusableDelegationSets {
  readonly Marker?: string;
  readonly MaxItems?: string;
}

export interface ListTagsForResource {
  readonly ResourceType: string;
  readonly ResourceId: string;
}

export interface ListTagsForResources {
  readonly ResourceType: string;
  readonly ResourceIds: [];
}

export interface ListTrafficPolicies {
  readonly TrafficPolicyIdMarker?: string;
  readonly MaxItems?: string;
}

export interface ListTrafficPolicyInstances {
  readonly HostedZoneIdMarker?: string;
  readonly TrafficPolicyInstanceNameMarker?: string;
  readonly TrafficPolicyInstanceTypeMarker?: string;
  readonly MaxItems?: string;
}

export interface ListTrafficPolicyInstancesByHostedZone {
  readonly HostedZoneId: string;
  readonly TrafficPolicyInstanceNameMarker?: string;
  readonly TrafficPolicyInstanceTypeMarker?: string;
  readonly MaxItems?: string;
}

export interface ListTrafficPolicyInstancesByPolicy {
  readonly TrafficPolicyId: string;
  readonly TrafficPolicyVersion: number;
  readonly HostedZoneIdMarker?: string;
  readonly TrafficPolicyInstanceNameMarker?: string;
  readonly TrafficPolicyInstanceTypeMarker?: string;
  readonly MaxItems?: string;
}

export interface ListTrafficPolicyVersions {
  readonly Id: string;
  readonly TrafficPolicyVersionMarker?: string;
  readonly MaxItems?: string;
}

export interface ListVPCAssociationAuthorizations {
  readonly HostedZoneId: string;
  readonly NextToken?: string;
  readonly MaxResults?: string;
}

export interface TestDNSAnswer {
  readonly HostedZoneId: string;
  readonly RecordName: string;
  readonly RecordType: string;
  readonly ResolverIP?: string;
  readonly EDNS0ClientSubnetIP?: string;
  readonly EDNS0ClientSubnetMask?: string;
}

export interface UpdateHealthCheck {
  readonly HealthCheckId: string;
  readonly HealthCheckVersion?: number;
  readonly IPAddress?: string;
  readonly Port?: number;
  readonly ResourcePath?: string;
  readonly FullyQualifiedDomainName?: string;
  readonly SearchString?: string;
  readonly FailureThreshold?: number;
  readonly Inverted?: boolean;
  readonly Disabled?: boolean;
  readonly HealthThreshold?: number;
  readonly ChildHealthChecks?: [];
  readonly EnableSNI?: boolean;
  readonly Regions?: [];
  readonly AlarmIdentifier?: AlarmIdentifier;
  readonly InsufficientDataHealthStatus?: string;
  readonly ResetElements?: [];
}

export interface UpdateHostedZoneComment {
  readonly Id: string;
  readonly Comment?: string;
}

export interface UpdateTrafficPolicyComment {
  readonly Id: string;
  readonly Version: number;
  readonly Comment: string;
}

export interface UpdateTrafficPolicyInstance {
  readonly Id: string;
  readonly TTL: number;
  readonly TrafficPolicyId: string;
  readonly TrafficPolicyVersion: number;
}

export interface AccountLimit {
  readonly Type: string;
  readonly Value: number;
}

export interface ActivateKeySigningKeyRequest {
  readonly HostedZoneId: string;
  readonly Name: string;
}

export interface ActivateKeySigningKeyResponse {
  readonly ChangeInfo: ChangeInfo;
}

export interface AlarmIdentifier {
  readonly Region: string;
  readonly Name: string;
}

export interface AliasTarget {
  readonly HostedZoneId: string;
  readonly DNSName: string;
  readonly EvaluateTargetHealth: boolean;
}

export interface AssociateVPCWithHostedZoneRequest {
  readonly HostedZoneId: string;
  readonly VPC: VPC;
  readonly Comment?: string;
}

export interface AssociateVPCWithHostedZoneResponse {
  readonly ChangeInfo: ChangeInfo;
}

export interface Change {
  readonly Action: string;
  readonly ResourceRecordSet: ResourceRecordSet;
}

export interface ChangeBatch {
  readonly Comment?: string;
  readonly Changes: [];
}

export interface ChangeInfo {
  readonly Id: string;
  readonly Status: string;
  readonly SubmittedAt: Date;
  readonly Comment?: string;
}

export interface ChangeResourceRecordSetsRequest {
  readonly HostedZoneId: string;
  readonly ChangeBatch: ChangeBatch;
}

export interface ChangeResourceRecordSetsResponse {
  readonly ChangeInfo: ChangeInfo;
}

export interface ChangeTagsForResourceRequest {
  readonly ResourceType: string;
  readonly ResourceId: string;
  readonly AddTags?: [];
  readonly RemoveTagKeys?: [];
}

export interface ChangeTagsForResourceResponse {
}

export interface CloudWatchAlarmConfiguration {
  readonly EvaluationPeriods: number;
  readonly Threshold: unknown;
  readonly ComparisonOperator: string;
  readonly Period: number;
  readonly MetricName: string;
  readonly Namespace: string;
  readonly Statistic: string;
  readonly Dimensions?: [];
}

export interface ConcurrentModification {
  readonly message?: string;
}

export interface ConflictingDomainExists {
  readonly message?: string;
}

export interface ConflictingTypes {
  readonly message?: string;
}

export interface CreateHealthCheckRequest {
  readonly CallerReference: string;
  readonly HealthCheckConfig: HealthCheckConfig;
}

export interface CreateHealthCheckResponse {
  readonly HealthCheck: HealthCheck;
  readonly Location: string;
}

export interface CreateHostedZoneRequest {
  readonly Name: string;
  readonly VPC?: VPC;
  readonly CallerReference: string;
  readonly HostedZoneConfig?: HostedZoneConfig;
  readonly DelegationSetId?: string;
}

export interface CreateHostedZoneResponse {
  readonly HostedZone: HostedZone;
  readonly ChangeInfo: ChangeInfo;
  readonly DelegationSet: DelegationSet;
  readonly VPC?: VPC;
  readonly Location: string;
}

export interface CreateKeySigningKeyRequest {
  readonly CallerReference: string;
  readonly HostedZoneId: string;
  readonly KeyManagementServiceArn: string;
  readonly Name: string;
  readonly Status: string;
}

export interface CreateKeySigningKeyResponse {
  readonly ChangeInfo: ChangeInfo;
  readonly KeySigningKey: KeySigningKey;
  readonly Location: string;
}

export interface CreateQueryLoggingConfigRequest {
  readonly HostedZoneId: string;
  readonly CloudWatchLogsLogGroupArn: string;
}

export interface CreateQueryLoggingConfigResponse {
  readonly QueryLoggingConfig: QueryLoggingConfig;
  readonly Location: string;
}

export interface CreateReusableDelegationSetRequest {
  readonly CallerReference: string;
  readonly HostedZoneId?: string;
}

export interface CreateReusableDelegationSetResponse {
  readonly DelegationSet: DelegationSet;
  readonly Location: string;
}

export interface CreateTrafficPolicyInstanceRequest {
  readonly HostedZoneId: string;
  readonly Name: string;
  readonly TTL: number;
  readonly TrafficPolicyId: string;
  readonly TrafficPolicyVersion: number;
}

export interface CreateTrafficPolicyInstanceResponse {
  readonly TrafficPolicyInstance: TrafficPolicyInstance;
  readonly Location: string;
}

export interface CreateTrafficPolicyRequest {
  readonly Name: string;
  readonly Document: string;
  readonly Comment?: string;
}

export interface CreateTrafficPolicyResponse {
  readonly TrafficPolicy: TrafficPolicy;
  readonly Location: string;
}

export interface CreateTrafficPolicyVersionRequest {
  readonly Id: string;
  readonly Document: string;
  readonly Comment?: string;
}

export interface CreateTrafficPolicyVersionResponse {
  readonly TrafficPolicy: TrafficPolicy;
  readonly Location: string;
}

export interface CreateVPCAssociationAuthorizationRequest {
  readonly HostedZoneId: string;
  readonly VPC: VPC;
}

export interface CreateVPCAssociationAuthorizationResponse {
  readonly HostedZoneId: string;
  readonly VPC: VPC;
}

export interface DNSSECNotFound {
  readonly message?: string;
}

export interface DNSSECStatus {
  readonly ServeSignature?: string;
  readonly StatusMessage?: string;
}

export interface DeactivateKeySigningKeyRequest {
  readonly HostedZoneId: string;
  readonly Name: string;
}

export interface DeactivateKeySigningKeyResponse {
  readonly ChangeInfo: ChangeInfo;
}

export interface DelegationSet {
  readonly Id?: string;
  readonly CallerReference?: string;
  readonly NameServers: [];
}

export interface DelegationSetAlreadyCreated {
  readonly message?: string;
}

export interface DelegationSetAlreadyReusable {
  readonly message?: string;
}

export interface DelegationSetInUse {
  readonly message?: string;
}

export interface DelegationSetNotAvailable {
  readonly message?: string;
}

export interface DelegationSetNotReusable {
  readonly message?: string;
}

export interface DeleteHealthCheckRequest {
  readonly HealthCheckId: string;
}

export interface DeleteHealthCheckResponse {
}

export interface DeleteHostedZoneRequest {
  readonly Id: string;
}

export interface DeleteHostedZoneResponse {
  readonly ChangeInfo: ChangeInfo;
}

export interface DeleteKeySigningKeyRequest {
  readonly HostedZoneId: string;
  readonly Name: string;
}

export interface DeleteKeySigningKeyResponse {
  readonly ChangeInfo: ChangeInfo;
}

export interface DeleteQueryLoggingConfigRequest {
  readonly Id: string;
}

export interface DeleteQueryLoggingConfigResponse {
}

export interface DeleteReusableDelegationSetRequest {
  readonly Id: string;
}

export interface DeleteReusableDelegationSetResponse {
}

export interface DeleteTrafficPolicyInstanceRequest {
  readonly Id: string;
}

export interface DeleteTrafficPolicyInstanceResponse {
}

export interface DeleteTrafficPolicyRequest {
  readonly Id: string;
  readonly Version: number;
}

export interface DeleteTrafficPolicyResponse {
}

export interface DeleteVPCAssociationAuthorizationRequest {
  readonly HostedZoneId: string;
  readonly VPC: VPC;
}

export interface DeleteVPCAssociationAuthorizationResponse {
}

export interface Dimension {
  readonly Name: string;
  readonly Value: string;
}

export interface DisableHostedZoneDNSSECRequest {
  readonly HostedZoneId: string;
}

export interface DisableHostedZoneDNSSECResponse {
  readonly ChangeInfo: ChangeInfo;
}

export interface DisassociateVPCFromHostedZoneRequest {
  readonly HostedZoneId: string;
  readonly VPC: VPC;
  readonly Comment?: string;
}

export interface DisassociateVPCFromHostedZoneResponse {
  readonly ChangeInfo: ChangeInfo;
}

export interface EnableHostedZoneDNSSECRequest {
  readonly HostedZoneId: string;
}

export interface EnableHostedZoneDNSSECResponse {
  readonly ChangeInfo: ChangeInfo;
}

export interface GeoLocation {
  readonly ContinentCode?: string;
  readonly CountryCode?: string;
  readonly SubdivisionCode?: string;
}

export interface GeoLocationDetails {
  readonly ContinentCode?: string;
  readonly ContinentName?: string;
  readonly CountryCode?: string;
  readonly CountryName?: string;
  readonly SubdivisionCode?: string;
  readonly SubdivisionName?: string;
}

export interface GetAccountLimitRequest {
  readonly Type: string;
}

export interface GetAccountLimitResponse {
  readonly Limit: AccountLimit;
  readonly Count: number;
}

export interface GetChangeRequest {
  readonly Id: string;
}

export interface GetChangeResponse {
  readonly ChangeInfo: ChangeInfo;
}

export interface GetCheckerIpRangesRequest {
}

export interface GetCheckerIpRangesResponse {
  readonly CheckerIpRanges: [];
}

export interface GetDNSSECRequest {
  readonly HostedZoneId: string;
}

export interface GetDNSSECResponse {
  readonly Status: DNSSECStatus;
  readonly KeySigningKeys: [];
}

export interface GetGeoLocationRequest {
  readonly ContinentCode?: string;
  readonly CountryCode?: string;
  readonly SubdivisionCode?: string;
}

export interface GetGeoLocationResponse {
  readonly GeoLocationDetails: GeoLocationDetails;
}

export interface GetHealthCheckCountRequest {
}

export interface GetHealthCheckCountResponse {
  readonly HealthCheckCount: number;
}

export interface GetHealthCheckLastFailureReasonRequest {
  readonly HealthCheckId: string;
}

export interface GetHealthCheckLastFailureReasonResponse {
  readonly HealthCheckObservations: [];
}

export interface GetHealthCheckRequest {
  readonly HealthCheckId: string;
}

export interface GetHealthCheckResponse {
  readonly HealthCheck: HealthCheck;
}

export interface GetHealthCheckStatusRequest {
  readonly HealthCheckId: string;
}

export interface GetHealthCheckStatusResponse {
  readonly HealthCheckObservations: [];
}

export interface GetHostedZoneCountRequest {
}

export interface GetHostedZoneCountResponse {
  readonly HostedZoneCount: number;
}

export interface GetHostedZoneLimitRequest {
  readonly Type: string;
  readonly HostedZoneId: string;
}

export interface GetHostedZoneLimitResponse {
  readonly Limit: HostedZoneLimit;
  readonly Count: number;
}

export interface GetHostedZoneRequest {
  readonly Id: string;
}

export interface GetHostedZoneResponse {
  readonly HostedZone: HostedZone;
  readonly DelegationSet?: DelegationSet;
  readonly VPCs?: [];
}

export interface GetQueryLoggingConfigRequest {
  readonly Id: string;
}

export interface GetQueryLoggingConfigResponse {
  readonly QueryLoggingConfig: QueryLoggingConfig;
}

export interface GetReusableDelegationSetLimitRequest {
  readonly Type: string;
  readonly DelegationSetId: string;
}

export interface GetReusableDelegationSetLimitResponse {
  readonly Limit: ReusableDelegationSetLimit;
  readonly Count: number;
}

export interface GetReusableDelegationSetRequest {
  readonly Id: string;
}

export interface GetReusableDelegationSetResponse {
  readonly DelegationSet: DelegationSet;
}

export interface GetTrafficPolicyInstanceCountRequest {
}

export interface GetTrafficPolicyInstanceCountResponse {
  readonly TrafficPolicyInstanceCount: number;
}

export interface GetTrafficPolicyInstanceRequest {
  readonly Id: string;
}

export interface GetTrafficPolicyInstanceResponse {
  readonly TrafficPolicyInstance: TrafficPolicyInstance;
}

export interface GetTrafficPolicyRequest {
  readonly Id: string;
  readonly Version: number;
}

export interface GetTrafficPolicyResponse {
  readonly TrafficPolicy: TrafficPolicy;
}

export interface HealthCheck {
  readonly Id: string;
  readonly CallerReference: string;
  readonly LinkedService?: LinkedService;
  readonly HealthCheckConfig: HealthCheckConfig;
  readonly HealthCheckVersion: number;
  readonly CloudWatchAlarmConfiguration?: CloudWatchAlarmConfiguration;
}

export interface HealthCheckAlreadyExists {
  readonly message?: string;
}

export interface HealthCheckConfig {
  readonly IPAddress?: string;
  readonly Port?: number;
  readonly Type: string;
  readonly ResourcePath?: string;
  readonly FullyQualifiedDomainName?: string;
  readonly SearchString?: string;
  readonly RequestInterval?: number;
  readonly FailureThreshold?: number;
  readonly MeasureLatency?: boolean;
  readonly Inverted?: boolean;
  readonly Disabled?: boolean;
  readonly HealthThreshold?: number;
  readonly ChildHealthChecks?: [];
  readonly EnableSNI?: boolean;
  readonly Regions?: [];
  readonly AlarmIdentifier?: AlarmIdentifier;
  readonly InsufficientDataHealthStatus?: string;
  readonly RoutingControlArn?: string;
}

export interface HealthCheckInUse {
  readonly message?: string;
}

export interface HealthCheckObservation {
  readonly Region?: string;
  readonly IPAddress?: string;
  readonly StatusReport?: StatusReport;
}

export interface HealthCheckVersionMismatch {
  readonly message?: string;
}

export interface HostedZone {
  readonly Id: string;
  readonly Name: string;
  readonly CallerReference: string;
  readonly Config?: HostedZoneConfig;
  readonly ResourceRecordSetCount?: number;
  readonly LinkedService?: LinkedService;
}

export interface HostedZoneAlreadyExists {
  readonly message?: string;
}

export interface HostedZoneConfig {
  readonly Comment?: string;
  readonly PrivateZone?: boolean;
}

export interface HostedZoneLimit {
  readonly Type: string;
  readonly Value: number;
}

export interface HostedZoneNotEmpty {
  readonly message?: string;
}

export interface HostedZoneNotFound {
  readonly message?: string;
}

export interface HostedZoneNotPrivate {
  readonly message?: string;
}

export interface HostedZoneOwner {
  readonly OwningAccount?: string;
  readonly OwningService?: string;
}

export interface HostedZonePartiallyDelegated {
  readonly message?: string;
}

export interface HostedZoneSummary {
  readonly HostedZoneId: string;
  readonly Name: string;
  readonly Owner: HostedZoneOwner;
}

export interface IncompatibleVersion {
  readonly message?: string;
}

export interface InsufficientCloudWatchLogsResourcePolicy {
  readonly message?: string;
}

export interface InvalidArgument {
  readonly message?: string;
}

export interface InvalidChangeBatch {
  readonly messages?: [];
  readonly message?: string;
}

export interface InvalidDomainName {
  readonly message?: string;
}

export interface InvalidInput {
  readonly message?: string;
}

export interface InvalidKMSArn {
  readonly message?: string;
}

export interface InvalidKeySigningKeyName {
  readonly message?: string;
}

export interface InvalidKeySigningKeyStatus {
  readonly message?: string;
}

export interface InvalidPaginationToken {
  readonly message?: string;
}

export interface InvalidSigningStatus {
  readonly message?: string;
}

export interface InvalidTrafficPolicyDocument {
  readonly message?: string;
}

export interface InvalidVPCId {
  readonly message?: string;
}

export interface KeySigningKey {
  readonly Name?: string;
  readonly KmsArn?: string;
  readonly Flag?: number;
  readonly SigningAlgorithmMnemonic?: string;
  readonly SigningAlgorithmType?: number;
  readonly DigestAlgorithmMnemonic?: string;
  readonly DigestAlgorithmType?: number;
  readonly KeyTag?: number;
  readonly DigestValue?: string;
  readonly PublicKey?: string;
  readonly DSRecord?: string;
  readonly DNSKEYRecord?: string;
  readonly Status?: string;
  readonly StatusMessage?: string;
  readonly CreatedDate?: Date;
  readonly LastModifiedDate?: Date;
}

export interface KeySigningKeyAlreadyExists {
  readonly message?: string;
}

export interface KeySigningKeyInParentDSRecord {
  readonly message?: string;
}

export interface KeySigningKeyInUse {
  readonly message?: string;
}

export interface KeySigningKeyWithActiveStatusNotFound {
  readonly message?: string;
}

export interface LastVPCAssociation {
  readonly message?: string;
}

export interface LimitsExceeded {
  readonly message?: string;
}

export interface LinkedService {
  readonly ServicePrincipal?: string;
  readonly Description?: string;
}

export interface ListGeoLocationsRequest {
  readonly StartContinentCode?: string;
  readonly StartCountryCode?: string;
  readonly StartSubdivisionCode?: string;
  readonly MaxItems?: string;
}

export interface ListGeoLocationsResponse {
  readonly GeoLocationDetailsList: [];
  readonly IsTruncated: boolean;
  readonly NextContinentCode?: string;
  readonly NextCountryCode?: string;
  readonly NextSubdivisionCode?: string;
  readonly MaxItems: string;
}

export interface ListHealthChecksRequest {
  readonly Marker?: string;
  readonly MaxItems?: string;
}

export interface ListHealthChecksResponse {
  readonly HealthChecks: [];
  readonly Marker: string;
  readonly IsTruncated: boolean;
  readonly NextMarker?: string;
  readonly MaxItems: string;
}

export interface ListHostedZonesByNameRequest {
  readonly DNSName?: string;
  readonly HostedZoneId?: string;
  readonly MaxItems?: string;
}

export interface ListHostedZonesByNameResponse {
  readonly HostedZones: [];
  readonly DNSName?: string;
  readonly HostedZoneId?: string;
  readonly IsTruncated: boolean;
  readonly NextDNSName?: string;
  readonly NextHostedZoneId?: string;
  readonly MaxItems: string;
}

export interface ListHostedZonesByVPCRequest {
  readonly VPCId: string;
  readonly VPCRegion: string;
  readonly MaxItems?: string;
  readonly NextToken?: string;
}

export interface ListHostedZonesByVPCResponse {
  readonly HostedZoneSummaries: [];
  readonly MaxItems: string;
  readonly NextToken?: string;
}

export interface ListHostedZonesRequest {
  readonly Marker?: string;
  readonly MaxItems?: string;
  readonly DelegationSetId?: string;
}

export interface ListHostedZonesResponse {
  readonly HostedZones: [];
  readonly Marker: string;
  readonly IsTruncated: boolean;
  readonly NextMarker?: string;
  readonly MaxItems: string;
}

export interface ListQueryLoggingConfigsRequest {
  readonly HostedZoneId?: string;
  readonly NextToken?: string;
  readonly MaxResults?: string;
}

export interface ListQueryLoggingConfigsResponse {
  readonly QueryLoggingConfigs: [];
  readonly NextToken?: string;
}

export interface ListResourceRecordSetsRequest {
  readonly HostedZoneId: string;
  readonly StartRecordName?: string;
  readonly StartRecordType?: string;
  readonly StartRecordIdentifier?: string;
  readonly MaxItems?: string;
}

export interface ListResourceRecordSetsResponse {
  readonly ResourceRecordSets: [];
  readonly IsTruncated: boolean;
  readonly NextRecordName?: string;
  readonly NextRecordType?: string;
  readonly NextRecordIdentifier?: string;
  readonly MaxItems: string;
}

export interface ListReusableDelegationSetsRequest {
  readonly Marker?: string;
  readonly MaxItems?: string;
}

export interface ListReusableDelegationSetsResponse {
  readonly DelegationSets: [];
  readonly Marker: string;
  readonly IsTruncated: boolean;
  readonly NextMarker?: string;
  readonly MaxItems: string;
}

export interface ListTagsForResourceRequest {
  readonly ResourceType: string;
  readonly ResourceId: string;
}

export interface ListTagsForResourceResponse {
  readonly ResourceTagSet: ResourceTagSet;
}

export interface ListTagsForResourcesRequest {
  readonly ResourceType: string;
  readonly ResourceIds: [];
}

export interface ListTagsForResourcesResponse {
  readonly ResourceTagSets: [];
}

export interface ListTrafficPoliciesRequest {
  readonly TrafficPolicyIdMarker?: string;
  readonly MaxItems?: string;
}

export interface ListTrafficPoliciesResponse {
  readonly TrafficPolicySummaries: [];
  readonly IsTruncated: boolean;
  readonly TrafficPolicyIdMarker: string;
  readonly MaxItems: string;
}

export interface ListTrafficPolicyInstancesByHostedZoneRequest {
  readonly HostedZoneId: string;
  readonly TrafficPolicyInstanceNameMarker?: string;
  readonly TrafficPolicyInstanceTypeMarker?: string;
  readonly MaxItems?: string;
}

export interface ListTrafficPolicyInstancesByHostedZoneResponse {
  readonly TrafficPolicyInstances: [];
  readonly TrafficPolicyInstanceNameMarker?: string;
  readonly TrafficPolicyInstanceTypeMarker?: string;
  readonly IsTruncated: boolean;
  readonly MaxItems: string;
}

export interface ListTrafficPolicyInstancesByPolicyRequest {
  readonly TrafficPolicyId: string;
  readonly TrafficPolicyVersion: number;
  readonly HostedZoneIdMarker?: string;
  readonly TrafficPolicyInstanceNameMarker?: string;
  readonly TrafficPolicyInstanceTypeMarker?: string;
  readonly MaxItems?: string;
}

export interface ListTrafficPolicyInstancesByPolicyResponse {
  readonly TrafficPolicyInstances: [];
  readonly HostedZoneIdMarker?: string;
  readonly TrafficPolicyInstanceNameMarker?: string;
  readonly TrafficPolicyInstanceTypeMarker?: string;
  readonly IsTruncated: boolean;
  readonly MaxItems: string;
}

export interface ListTrafficPolicyInstancesRequest {
  readonly HostedZoneIdMarker?: string;
  readonly TrafficPolicyInstanceNameMarker?: string;
  readonly TrafficPolicyInstanceTypeMarker?: string;
  readonly MaxItems?: string;
}

export interface ListTrafficPolicyInstancesResponse {
  readonly TrafficPolicyInstances: [];
  readonly HostedZoneIdMarker?: string;
  readonly TrafficPolicyInstanceNameMarker?: string;
  readonly TrafficPolicyInstanceTypeMarker?: string;
  readonly IsTruncated: boolean;
  readonly MaxItems: string;
}

export interface ListTrafficPolicyVersionsRequest {
  readonly Id: string;
  readonly TrafficPolicyVersionMarker?: string;
  readonly MaxItems?: string;
}

export interface ListTrafficPolicyVersionsResponse {
  readonly TrafficPolicies: [];
  readonly IsTruncated: boolean;
  readonly TrafficPolicyVersionMarker: string;
  readonly MaxItems: string;
}

export interface ListVPCAssociationAuthorizationsRequest {
  readonly HostedZoneId: string;
  readonly NextToken?: string;
  readonly MaxResults?: string;
}

export interface ListVPCAssociationAuthorizationsResponse {
  readonly HostedZoneId: string;
  readonly NextToken?: string;
  readonly VPCs: [];
}

export interface NoSuchChange {
  readonly message?: string;
}

export interface NoSuchCloudWatchLogsLogGroup {
  readonly message?: string;
}

export interface NoSuchDelegationSet {
  readonly message?: string;
}

export interface NoSuchGeoLocation {
  readonly message?: string;
}

export interface NoSuchHealthCheck {
  readonly message?: string;
}

export interface NoSuchHostedZone {
  readonly message?: string;
}

export interface NoSuchKeySigningKey {
  readonly message?: string;
}

export interface NoSuchQueryLoggingConfig {
  readonly message?: string;
}

export interface NoSuchTrafficPolicy {
  readonly message?: string;
}

export interface NoSuchTrafficPolicyInstance {
  readonly message?: string;
}

export interface NotAuthorizedException {
  readonly message?: string;
}

export interface PriorRequestNotComplete {
  readonly message?: string;
}

export interface PublicZoneVPCAssociation {
  readonly message?: string;
}

export interface QueryLoggingConfig {
  readonly Id: string;
  readonly HostedZoneId: string;
  readonly CloudWatchLogsLogGroupArn: string;
}

export interface QueryLoggingConfigAlreadyExists {
  readonly message?: string;
}

export interface ResourceRecord {
  readonly Value: string;
}

export interface ResourceRecordSet {
  readonly Name: string;
  readonly Type: string;
  readonly SetIdentifier?: string;
  readonly Weight?: number;
  readonly Region?: string;
  readonly GeoLocation?: GeoLocation;
  readonly Failover?: string;
  readonly MultiValueAnswer?: boolean;
  readonly TTL?: number;
  readonly ResourceRecords?: [];
  readonly AliasTarget?: AliasTarget;
  readonly HealthCheckId?: string;
  readonly TrafficPolicyInstanceId?: string;
}

export interface ResourceTagSet {
  readonly ResourceType?: string;
  readonly ResourceId?: string;
  readonly Tags?: [];
}

export interface ReusableDelegationSetLimit {
  readonly Type: string;
  readonly Value: number;
}

export interface StatusReport {
  readonly Status?: string;
  readonly CheckedTime?: Date;
}

export interface Tag {
  readonly Key?: string;
  readonly Value?: string;
}

export interface TestDNSAnswerRequest {
  readonly HostedZoneId: string;
  readonly RecordName: string;
  readonly RecordType: string;
  readonly ResolverIP?: string;
  readonly EDNS0ClientSubnetIP?: string;
  readonly EDNS0ClientSubnetMask?: string;
}

export interface TestDNSAnswerResponse {
  readonly Nameserver: string;
  readonly RecordName: string;
  readonly RecordType: string;
  readonly RecordData: [];
  readonly ResponseCode: string;
  readonly Protocol: string;
}

export interface ThrottlingException {
  readonly message?: string;
}

export interface TooManyHealthChecks {
  readonly message?: string;
}

export interface TooManyHostedZones {
  readonly message?: string;
}

export interface TooManyKeySigningKeys {
  readonly message?: string;
}

export interface TooManyTrafficPolicies {
  readonly message?: string;
}

export interface TooManyTrafficPolicyInstances {
  readonly message?: string;
}

export interface TooManyTrafficPolicyVersionsForCurrentPolicy {
  readonly message?: string;
}

export interface TooManyVPCAssociationAuthorizations {
  readonly message?: string;
}

export interface TrafficPolicy {
  readonly Id: string;
  readonly Version: number;
  readonly Name: string;
  readonly Type: string;
  readonly Document: string;
  readonly Comment?: string;
}

export interface TrafficPolicyAlreadyExists {
  readonly message?: string;
}

export interface TrafficPolicyInUse {
  readonly message?: string;
}

export interface TrafficPolicyInstance {
  readonly Id: string;
  readonly HostedZoneId: string;
  readonly Name: string;
  readonly TTL: number;
  readonly State: string;
  readonly Message: string;
  readonly TrafficPolicyId: string;
  readonly TrafficPolicyVersion: number;
  readonly TrafficPolicyType: string;
}

export interface TrafficPolicyInstanceAlreadyExists {
  readonly message?: string;
}

export interface TrafficPolicySummary {
  readonly Id: string;
  readonly Name: string;
  readonly Type: string;
  readonly LatestVersion: number;
  readonly TrafficPolicyCount: number;
}

export interface UpdateHealthCheckRequest {
  readonly HealthCheckId: string;
  readonly HealthCheckVersion?: number;
  readonly IPAddress?: string;
  readonly Port?: number;
  readonly ResourcePath?: string;
  readonly FullyQualifiedDomainName?: string;
  readonly SearchString?: string;
  readonly FailureThreshold?: number;
  readonly Inverted?: boolean;
  readonly Disabled?: boolean;
  readonly HealthThreshold?: number;
  readonly ChildHealthChecks?: [];
  readonly EnableSNI?: boolean;
  readonly Regions?: [];
  readonly AlarmIdentifier?: AlarmIdentifier;
  readonly InsufficientDataHealthStatus?: string;
  readonly ResetElements?: [];
}

export interface UpdateHealthCheckResponse {
  readonly HealthCheck: HealthCheck;
}

export interface UpdateHostedZoneCommentRequest {
  readonly Id: string;
  readonly Comment?: string;
}

export interface UpdateHostedZoneCommentResponse {
  readonly HostedZone: HostedZone;
}

export interface UpdateTrafficPolicyCommentRequest {
  readonly Id: string;
  readonly Version: number;
  readonly Comment: string;
}

export interface UpdateTrafficPolicyCommentResponse {
  readonly TrafficPolicy: TrafficPolicy;
}

export interface UpdateTrafficPolicyInstanceRequest {
  readonly Id: string;
  readonly TTL: number;
  readonly TrafficPolicyId: string;
  readonly TrafficPolicyVersion: number;
}

export interface UpdateTrafficPolicyInstanceResponse {
  readonly TrafficPolicyInstance: TrafficPolicyInstance;
}

export interface VPC {
  readonly VPCRegion?: string;
  readonly VPCId?: string;
}

export interface VPCAssociationAuthorizationNotFound {
  readonly message?: string;
}

export interface VPCAssociationNotFound {
  readonly message?: string;
}


