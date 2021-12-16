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
  readonly Comment: string;
}
export interface ChangeResourceRecordSets {
  readonly HostedZoneId: string;
  readonly ChangeBatch: ChangeBatch;
}
export interface ChangeTagsForResource {
  readonly ResourceType: string;
  readonly ResourceId: string;
  readonly AddTags: [];
  readonly RemoveTagKeys: [];
}
export interface CreateHealthCheck {
  readonly CallerReference: string;
  readonly HealthCheckConfig: HealthCheckConfig;
}
export interface CreateHostedZone {
  readonly Name: string;
  readonly VPC: VPC;
  readonly CallerReference: string;
  readonly HostedZoneConfig: HostedZoneConfig;
  readonly DelegationSetId: string;
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
  readonly HostedZoneId: string;
}
export interface CreateTrafficPolicy {
  readonly Name: string;
  readonly Document: string;
  readonly Comment: string;
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
  readonly Comment: string;
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
  readonly Comment: string;
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
  readonly ContinentCode: string;
  readonly CountryCode: string;
  readonly SubdivisionCode: string;
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
  readonly StartContinentCode: string;
  readonly StartCountryCode: string;
  readonly StartSubdivisionCode: string;
  readonly MaxItems: string;
}
export interface ListHealthChecks {
  readonly Marker: string;
  readonly MaxItems: string;
}
export interface ListHostedZones {
  readonly Marker: string;
  readonly MaxItems: string;
  readonly DelegationSetId: string;
}
export interface ListHostedZonesByName {
  readonly DNSName: string;
  readonly HostedZoneId: string;
  readonly MaxItems: string;
}
export interface ListHostedZonesByVPC {
  readonly VPCId: string;
  readonly VPCRegion: string;
  readonly MaxItems: string;
  readonly NextToken: string;
}
export interface ListQueryLoggingConfigs {
  readonly HostedZoneId: string;
  readonly NextToken: string;
  readonly MaxResults: string;
}
export interface ListResourceRecordSets {
  readonly HostedZoneId: string;
  readonly StartRecordName: string;
  readonly StartRecordType: string;
  readonly StartRecordIdentifier: string;
  readonly MaxItems: string;
}
export interface ListReusableDelegationSets {
  readonly Marker: string;
  readonly MaxItems: string;
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
  readonly TrafficPolicyIdMarker: string;
  readonly MaxItems: string;
}
export interface ListTrafficPolicyInstances {
  readonly HostedZoneIdMarker: string;
  readonly TrafficPolicyInstanceNameMarker: string;
  readonly TrafficPolicyInstanceTypeMarker: string;
  readonly MaxItems: string;
}
export interface ListTrafficPolicyInstancesByHostedZone {
  readonly HostedZoneId: string;
  readonly TrafficPolicyInstanceNameMarker: string;
  readonly TrafficPolicyInstanceTypeMarker: string;
  readonly MaxItems: string;
}
export interface ListTrafficPolicyInstancesByPolicy {
  readonly TrafficPolicyId: string;
  readonly TrafficPolicyVersion: number;
  readonly HostedZoneIdMarker: string;
  readonly TrafficPolicyInstanceNameMarker: string;
  readonly TrafficPolicyInstanceTypeMarker: string;
  readonly MaxItems: string;
}
export interface ListTrafficPolicyVersions {
  readonly Id: string;
  readonly TrafficPolicyVersionMarker: string;
  readonly MaxItems: string;
}
export interface ListVPCAssociationAuthorizations {
  readonly HostedZoneId: string;
  readonly NextToken: string;
  readonly MaxResults: string;
}
export interface TestDNSAnswer {
  readonly HostedZoneId: string;
  readonly RecordName: string;
  readonly RecordType: string;
  readonly ResolverIP: string;
  readonly EDNS0ClientSubnetIP: string;
  readonly EDNS0ClientSubnetMask: string;
}
export interface UpdateHealthCheck {
  readonly HealthCheckId: string;
  readonly HealthCheckVersion: number;
  readonly IPAddress: string;
  readonly Port: number;
  readonly ResourcePath: string;
  readonly FullyQualifiedDomainName: string;
  readonly SearchString: string;
  readonly FailureThreshold: number;
  readonly Inverted: boolean;
  readonly Disabled: boolean;
  readonly HealthThreshold: number;
  readonly ChildHealthChecks: [];
  readonly EnableSNI: boolean;
  readonly Regions: [];
  readonly AlarmIdentifier: AlarmIdentifier;
  readonly InsufficientDataHealthStatus: string;
  readonly ResetElements: [];
}
export interface UpdateHostedZoneComment {
  readonly Id: string;
  readonly Comment: string;
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



interface AccountLimit {
  readonly Type: string;
  readonly Value: number;
}

interface ActivateKeySigningKeyRequest {
  readonly HostedZoneId: string;
  readonly Name: string;
}

interface ActivateKeySigningKeyResponse {
  readonly ChangeInfo: ChangeInfo;
}

interface AlarmIdentifier {
  readonly Region: string;
  readonly Name: string;
}

interface AliasTarget {
  readonly HostedZoneId: string;
  readonly DNSName: string;
  readonly EvaluateTargetHealth: boolean;
}

interface AssociateVPCWithHostedZoneRequest {
  readonly HostedZoneId: string;
  readonly VPC: VPC;
  readonly Comment: string;
}

interface AssociateVPCWithHostedZoneResponse {
  readonly ChangeInfo: ChangeInfo;
}

interface Change {
  readonly Action: string;
  readonly ResourceRecordSet: ResourceRecordSet;
}

interface ChangeBatch {
  readonly Comment: string;
  readonly Changes: [];
}

interface ChangeInfo {
  readonly Id: string;
  readonly Status: string;
  readonly SubmittedAt: Date;
  readonly Comment: string;
}

interface ChangeResourceRecordSetsRequest {
  readonly HostedZoneId: string;
  readonly ChangeBatch: ChangeBatch;
}

interface ChangeResourceRecordSetsResponse {
  readonly ChangeInfo: ChangeInfo;
}

interface ChangeTagsForResourceRequest {
  readonly ResourceType: string;
  readonly ResourceId: string;
  readonly AddTags: [];
  readonly RemoveTagKeys: [];
}

interface ChangeTagsForResourceResponse {
}

interface CloudWatchAlarmConfiguration {
  readonly EvaluationPeriods: number;
  readonly Threshold: unknown;
  readonly ComparisonOperator: string;
  readonly Period: number;
  readonly MetricName: string;
  readonly Namespace: string;
  readonly Statistic: string;
  readonly Dimensions: [];
}

interface ConcurrentModification {
  readonly message: string;
}

interface ConflictingDomainExists {
  readonly message: string;
}

interface ConflictingTypes {
  readonly message: string;
}

interface CreateHealthCheckRequest {
  readonly CallerReference: string;
  readonly HealthCheckConfig: HealthCheckConfig;
}

interface CreateHealthCheckResponse {
  readonly HealthCheck: HealthCheck;
  readonly Location: string;
}

interface CreateHostedZoneRequest {
  readonly Name: string;
  readonly VPC: VPC;
  readonly CallerReference: string;
  readonly HostedZoneConfig: HostedZoneConfig;
  readonly DelegationSetId: string;
}

interface CreateHostedZoneResponse {
  readonly HostedZone: HostedZone;
  readonly ChangeInfo: ChangeInfo;
  readonly DelegationSet: DelegationSet;
  readonly VPC: VPC;
  readonly Location: string;
}

interface CreateKeySigningKeyRequest {
  readonly CallerReference: string;
  readonly HostedZoneId: string;
  readonly KeyManagementServiceArn: string;
  readonly Name: string;
  readonly Status: string;
}

interface CreateKeySigningKeyResponse {
  readonly ChangeInfo: ChangeInfo;
  readonly KeySigningKey: KeySigningKey;
  readonly Location: string;
}

interface CreateQueryLoggingConfigRequest {
  readonly HostedZoneId: string;
  readonly CloudWatchLogsLogGroupArn: string;
}

interface CreateQueryLoggingConfigResponse {
  readonly QueryLoggingConfig: QueryLoggingConfig;
  readonly Location: string;
}

interface CreateReusableDelegationSetRequest {
  readonly CallerReference: string;
  readonly HostedZoneId: string;
}

interface CreateReusableDelegationSetResponse {
  readonly DelegationSet: DelegationSet;
  readonly Location: string;
}

interface CreateTrafficPolicyInstanceRequest {
  readonly HostedZoneId: string;
  readonly Name: string;
  readonly TTL: number;
  readonly TrafficPolicyId: string;
  readonly TrafficPolicyVersion: number;
}

interface CreateTrafficPolicyInstanceResponse {
  readonly TrafficPolicyInstance: TrafficPolicyInstance;
  readonly Location: string;
}

interface CreateTrafficPolicyRequest {
  readonly Name: string;
  readonly Document: string;
  readonly Comment: string;
}

interface CreateTrafficPolicyResponse {
  readonly TrafficPolicy: TrafficPolicy;
  readonly Location: string;
}

interface CreateTrafficPolicyVersionRequest {
  readonly Id: string;
  readonly Document: string;
  readonly Comment: string;
}

interface CreateTrafficPolicyVersionResponse {
  readonly TrafficPolicy: TrafficPolicy;
  readonly Location: string;
}

interface CreateVPCAssociationAuthorizationRequest {
  readonly HostedZoneId: string;
  readonly VPC: VPC;
}

interface CreateVPCAssociationAuthorizationResponse {
  readonly HostedZoneId: string;
  readonly VPC: VPC;
}

interface DNSSECNotFound {
  readonly message: string;
}

interface DNSSECStatus {
  readonly ServeSignature: string;
  readonly StatusMessage: string;
}

interface DeactivateKeySigningKeyRequest {
  readonly HostedZoneId: string;
  readonly Name: string;
}

interface DeactivateKeySigningKeyResponse {
  readonly ChangeInfo: ChangeInfo;
}

interface DelegationSet {
  readonly Id: string;
  readonly CallerReference: string;
  readonly NameServers: [];
}

interface DelegationSetAlreadyCreated {
  readonly message: string;
}

interface DelegationSetAlreadyReusable {
  readonly message: string;
}

interface DelegationSetInUse {
  readonly message: string;
}

interface DelegationSetNotAvailable {
  readonly message: string;
}

interface DelegationSetNotReusable {
  readonly message: string;
}

interface DeleteHealthCheckRequest {
  readonly HealthCheckId: string;
}

interface DeleteHealthCheckResponse {
}

interface DeleteHostedZoneRequest {
  readonly Id: string;
}

interface DeleteHostedZoneResponse {
  readonly ChangeInfo: ChangeInfo;
}

interface DeleteKeySigningKeyRequest {
  readonly HostedZoneId: string;
  readonly Name: string;
}

interface DeleteKeySigningKeyResponse {
  readonly ChangeInfo: ChangeInfo;
}

interface DeleteQueryLoggingConfigRequest {
  readonly Id: string;
}

interface DeleteQueryLoggingConfigResponse {
}

interface DeleteReusableDelegationSetRequest {
  readonly Id: string;
}

interface DeleteReusableDelegationSetResponse {
}

interface DeleteTrafficPolicyInstanceRequest {
  readonly Id: string;
}

interface DeleteTrafficPolicyInstanceResponse {
}

interface DeleteTrafficPolicyRequest {
  readonly Id: string;
  readonly Version: number;
}

interface DeleteTrafficPolicyResponse {
}

interface DeleteVPCAssociationAuthorizationRequest {
  readonly HostedZoneId: string;
  readonly VPC: VPC;
}

interface DeleteVPCAssociationAuthorizationResponse {
}

interface Dimension {
  readonly Name: string;
  readonly Value: string;
}

interface DisableHostedZoneDNSSECRequest {
  readonly HostedZoneId: string;
}

interface DisableHostedZoneDNSSECResponse {
  readonly ChangeInfo: ChangeInfo;
}

interface DisassociateVPCFromHostedZoneRequest {
  readonly HostedZoneId: string;
  readonly VPC: VPC;
  readonly Comment: string;
}

interface DisassociateVPCFromHostedZoneResponse {
  readonly ChangeInfo: ChangeInfo;
}

interface EnableHostedZoneDNSSECRequest {
  readonly HostedZoneId: string;
}

interface EnableHostedZoneDNSSECResponse {
  readonly ChangeInfo: ChangeInfo;
}

interface GeoLocation {
  readonly ContinentCode: string;
  readonly CountryCode: string;
  readonly SubdivisionCode: string;
}

interface GeoLocationDetails {
  readonly ContinentCode: string;
  readonly ContinentName: string;
  readonly CountryCode: string;
  readonly CountryName: string;
  readonly SubdivisionCode: string;
  readonly SubdivisionName: string;
}

interface GetAccountLimitRequest {
  readonly Type: string;
}

interface GetAccountLimitResponse {
  readonly Limit: AccountLimit;
  readonly Count: number;
}

interface GetChangeRequest {
  readonly Id: string;
}

interface GetChangeResponse {
  readonly ChangeInfo: ChangeInfo;
}

interface GetCheckerIpRangesRequest {
}

interface GetCheckerIpRangesResponse {
  readonly CheckerIpRanges: [];
}

interface GetDNSSECRequest {
  readonly HostedZoneId: string;
}

interface GetDNSSECResponse {
  readonly Status: DNSSECStatus;
  readonly KeySigningKeys: [];
}

interface GetGeoLocationRequest {
  readonly ContinentCode: string;
  readonly CountryCode: string;
  readonly SubdivisionCode: string;
}

interface GetGeoLocationResponse {
  readonly GeoLocationDetails: GeoLocationDetails;
}

interface GetHealthCheckCountRequest {
}

interface GetHealthCheckCountResponse {
  readonly HealthCheckCount: number;
}

interface GetHealthCheckLastFailureReasonRequest {
  readonly HealthCheckId: string;
}

interface GetHealthCheckLastFailureReasonResponse {
  readonly HealthCheckObservations: [];
}

interface GetHealthCheckRequest {
  readonly HealthCheckId: string;
}

interface GetHealthCheckResponse {
  readonly HealthCheck: HealthCheck;
}

interface GetHealthCheckStatusRequest {
  readonly HealthCheckId: string;
}

interface GetHealthCheckStatusResponse {
  readonly HealthCheckObservations: [];
}

interface GetHostedZoneCountRequest {
}

interface GetHostedZoneCountResponse {
  readonly HostedZoneCount: number;
}

interface GetHostedZoneLimitRequest {
  readonly Type: string;
  readonly HostedZoneId: string;
}

interface GetHostedZoneLimitResponse {
  readonly Limit: HostedZoneLimit;
  readonly Count: number;
}

interface GetHostedZoneRequest {
  readonly Id: string;
}

interface GetHostedZoneResponse {
  readonly HostedZone: HostedZone;
  readonly DelegationSet: DelegationSet;
  readonly VPCs: [];
}

interface GetQueryLoggingConfigRequest {
  readonly Id: string;
}

interface GetQueryLoggingConfigResponse {
  readonly QueryLoggingConfig: QueryLoggingConfig;
}

interface GetReusableDelegationSetLimitRequest {
  readonly Type: string;
  readonly DelegationSetId: string;
}

interface GetReusableDelegationSetLimitResponse {
  readonly Limit: ReusableDelegationSetLimit;
  readonly Count: number;
}

interface GetReusableDelegationSetRequest {
  readonly Id: string;
}

interface GetReusableDelegationSetResponse {
  readonly DelegationSet: DelegationSet;
}

interface GetTrafficPolicyInstanceCountRequest {
}

interface GetTrafficPolicyInstanceCountResponse {
  readonly TrafficPolicyInstanceCount: number;
}

interface GetTrafficPolicyInstanceRequest {
  readonly Id: string;
}

interface GetTrafficPolicyInstanceResponse {
  readonly TrafficPolicyInstance: TrafficPolicyInstance;
}

interface GetTrafficPolicyRequest {
  readonly Id: string;
  readonly Version: number;
}

interface GetTrafficPolicyResponse {
  readonly TrafficPolicy: TrafficPolicy;
}

interface HealthCheck {
  readonly Id: string;
  readonly CallerReference: string;
  readonly LinkedService: LinkedService;
  readonly HealthCheckConfig: HealthCheckConfig;
  readonly HealthCheckVersion: number;
  readonly CloudWatchAlarmConfiguration: CloudWatchAlarmConfiguration;
}

interface HealthCheckAlreadyExists {
  readonly message: string;
}

interface HealthCheckConfig {
  readonly IPAddress: string;
  readonly Port: number;
  readonly Type: string;
  readonly ResourcePath: string;
  readonly FullyQualifiedDomainName: string;
  readonly SearchString: string;
  readonly RequestInterval: number;
  readonly FailureThreshold: number;
  readonly MeasureLatency: boolean;
  readonly Inverted: boolean;
  readonly Disabled: boolean;
  readonly HealthThreshold: number;
  readonly ChildHealthChecks: [];
  readonly EnableSNI: boolean;
  readonly Regions: [];
  readonly AlarmIdentifier: AlarmIdentifier;
  readonly InsufficientDataHealthStatus: string;
  readonly RoutingControlArn: string;
}

interface HealthCheckInUse {
  readonly message: string;
}

interface HealthCheckObservation {
  readonly Region: string;
  readonly IPAddress: string;
  readonly StatusReport: StatusReport;
}

interface HealthCheckVersionMismatch {
  readonly message: string;
}

interface HostedZone {
  readonly Id: string;
  readonly Name: string;
  readonly CallerReference: string;
  readonly Config: HostedZoneConfig;
  readonly ResourceRecordSetCount: number;
  readonly LinkedService: LinkedService;
}

interface HostedZoneAlreadyExists {
  readonly message: string;
}

interface HostedZoneConfig {
  readonly Comment: string;
  readonly PrivateZone: boolean;
}

interface HostedZoneLimit {
  readonly Type: string;
  readonly Value: number;
}

interface HostedZoneNotEmpty {
  readonly message: string;
}

interface HostedZoneNotFound {
  readonly message: string;
}

interface HostedZoneNotPrivate {
  readonly message: string;
}

interface HostedZoneOwner {
  readonly OwningAccount: string;
  readonly OwningService: string;
}

interface HostedZonePartiallyDelegated {
  readonly message: string;
}

interface HostedZoneSummary {
  readonly HostedZoneId: string;
  readonly Name: string;
  readonly Owner: HostedZoneOwner;
}

interface IncompatibleVersion {
  readonly message: string;
}

interface InsufficientCloudWatchLogsResourcePolicy {
  readonly message: string;
}

interface InvalidArgument {
  readonly message: string;
}

interface InvalidChangeBatch {
  readonly messages: [];
  readonly message: string;
}

interface InvalidDomainName {
  readonly message: string;
}

interface InvalidInput {
  readonly message: string;
}

interface InvalidKMSArn {
  readonly message: string;
}

interface InvalidKeySigningKeyName {
  readonly message: string;
}

interface InvalidKeySigningKeyStatus {
  readonly message: string;
}

interface InvalidPaginationToken {
  readonly message: string;
}

interface InvalidSigningStatus {
  readonly message: string;
}

interface InvalidTrafficPolicyDocument {
  readonly message: string;
}

interface InvalidVPCId {
  readonly message: string;
}

interface KeySigningKey {
  readonly Name: string;
  readonly KmsArn: string;
  readonly Flag: number;
  readonly SigningAlgorithmMnemonic: string;
  readonly SigningAlgorithmType: number;
  readonly DigestAlgorithmMnemonic: string;
  readonly DigestAlgorithmType: number;
  readonly KeyTag: number;
  readonly DigestValue: string;
  readonly PublicKey: string;
  readonly DSRecord: string;
  readonly DNSKEYRecord: string;
  readonly Status: string;
  readonly StatusMessage: string;
  readonly CreatedDate: Date;
  readonly LastModifiedDate: Date;
}

interface KeySigningKeyAlreadyExists {
  readonly message: string;
}

interface KeySigningKeyInParentDSRecord {
  readonly message: string;
}

interface KeySigningKeyInUse {
  readonly message: string;
}

interface KeySigningKeyWithActiveStatusNotFound {
  readonly message: string;
}

interface LastVPCAssociation {
  readonly message: string;
}

interface LimitsExceeded {
  readonly message: string;
}

interface LinkedService {
  readonly ServicePrincipal: string;
  readonly Description: string;
}

interface ListGeoLocationsRequest {
  readonly StartContinentCode: string;
  readonly StartCountryCode: string;
  readonly StartSubdivisionCode: string;
  readonly MaxItems: string;
}

interface ListGeoLocationsResponse {
  readonly GeoLocationDetailsList: [];
  readonly IsTruncated: boolean;
  readonly NextContinentCode: string;
  readonly NextCountryCode: string;
  readonly NextSubdivisionCode: string;
  readonly MaxItems: string;
}

interface ListHealthChecksRequest {
  readonly Marker: string;
  readonly MaxItems: string;
}

interface ListHealthChecksResponse {
  readonly HealthChecks: [];
  readonly Marker: string;
  readonly IsTruncated: boolean;
  readonly NextMarker: string;
  readonly MaxItems: string;
}

interface ListHostedZonesByNameRequest {
  readonly DNSName: string;
  readonly HostedZoneId: string;
  readonly MaxItems: string;
}

interface ListHostedZonesByNameResponse {
  readonly HostedZones: [];
  readonly DNSName: string;
  readonly HostedZoneId: string;
  readonly IsTruncated: boolean;
  readonly NextDNSName: string;
  readonly NextHostedZoneId: string;
  readonly MaxItems: string;
}

interface ListHostedZonesByVPCRequest {
  readonly VPCId: string;
  readonly VPCRegion: string;
  readonly MaxItems: string;
  readonly NextToken: string;
}

interface ListHostedZonesByVPCResponse {
  readonly HostedZoneSummaries: [];
  readonly MaxItems: string;
  readonly NextToken: string;
}

interface ListHostedZonesRequest {
  readonly Marker: string;
  readonly MaxItems: string;
  readonly DelegationSetId: string;
}

interface ListHostedZonesResponse {
  readonly HostedZones: [];
  readonly Marker: string;
  readonly IsTruncated: boolean;
  readonly NextMarker: string;
  readonly MaxItems: string;
}

interface ListQueryLoggingConfigsRequest {
  readonly HostedZoneId: string;
  readonly NextToken: string;
  readonly MaxResults: string;
}

interface ListQueryLoggingConfigsResponse {
  readonly QueryLoggingConfigs: [];
  readonly NextToken: string;
}

interface ListResourceRecordSetsRequest {
  readonly HostedZoneId: string;
  readonly StartRecordName: string;
  readonly StartRecordType: string;
  readonly StartRecordIdentifier: string;
  readonly MaxItems: string;
}

interface ListResourceRecordSetsResponse {
  readonly ResourceRecordSets: [];
  readonly IsTruncated: boolean;
  readonly NextRecordName: string;
  readonly NextRecordType: string;
  readonly NextRecordIdentifier: string;
  readonly MaxItems: string;
}

interface ListReusableDelegationSetsRequest {
  readonly Marker: string;
  readonly MaxItems: string;
}

interface ListReusableDelegationSetsResponse {
  readonly DelegationSets: [];
  readonly Marker: string;
  readonly IsTruncated: boolean;
  readonly NextMarker: string;
  readonly MaxItems: string;
}

interface ListTagsForResourceRequest {
  readonly ResourceType: string;
  readonly ResourceId: string;
}

interface ListTagsForResourceResponse {
  readonly ResourceTagSet: ResourceTagSet;
}

interface ListTagsForResourcesRequest {
  readonly ResourceType: string;
  readonly ResourceIds: [];
}

interface ListTagsForResourcesResponse {
  readonly ResourceTagSets: [];
}

interface ListTrafficPoliciesRequest {
  readonly TrafficPolicyIdMarker: string;
  readonly MaxItems: string;
}

interface ListTrafficPoliciesResponse {
  readonly TrafficPolicySummaries: [];
  readonly IsTruncated: boolean;
  readonly TrafficPolicyIdMarker: string;
  readonly MaxItems: string;
}

interface ListTrafficPolicyInstancesByHostedZoneRequest {
  readonly HostedZoneId: string;
  readonly TrafficPolicyInstanceNameMarker: string;
  readonly TrafficPolicyInstanceTypeMarker: string;
  readonly MaxItems: string;
}

interface ListTrafficPolicyInstancesByHostedZoneResponse {
  readonly TrafficPolicyInstances: [];
  readonly TrafficPolicyInstanceNameMarker: string;
  readonly TrafficPolicyInstanceTypeMarker: string;
  readonly IsTruncated: boolean;
  readonly MaxItems: string;
}

interface ListTrafficPolicyInstancesByPolicyRequest {
  readonly TrafficPolicyId: string;
  readonly TrafficPolicyVersion: number;
  readonly HostedZoneIdMarker: string;
  readonly TrafficPolicyInstanceNameMarker: string;
  readonly TrafficPolicyInstanceTypeMarker: string;
  readonly MaxItems: string;
}

interface ListTrafficPolicyInstancesByPolicyResponse {
  readonly TrafficPolicyInstances: [];
  readonly HostedZoneIdMarker: string;
  readonly TrafficPolicyInstanceNameMarker: string;
  readonly TrafficPolicyInstanceTypeMarker: string;
  readonly IsTruncated: boolean;
  readonly MaxItems: string;
}

interface ListTrafficPolicyInstancesRequest {
  readonly HostedZoneIdMarker: string;
  readonly TrafficPolicyInstanceNameMarker: string;
  readonly TrafficPolicyInstanceTypeMarker: string;
  readonly MaxItems: string;
}

interface ListTrafficPolicyInstancesResponse {
  readonly TrafficPolicyInstances: [];
  readonly HostedZoneIdMarker: string;
  readonly TrafficPolicyInstanceNameMarker: string;
  readonly TrafficPolicyInstanceTypeMarker: string;
  readonly IsTruncated: boolean;
  readonly MaxItems: string;
}

interface ListTrafficPolicyVersionsRequest {
  readonly Id: string;
  readonly TrafficPolicyVersionMarker: string;
  readonly MaxItems: string;
}

interface ListTrafficPolicyVersionsResponse {
  readonly TrafficPolicies: [];
  readonly IsTruncated: boolean;
  readonly TrafficPolicyVersionMarker: string;
  readonly MaxItems: string;
}

interface ListVPCAssociationAuthorizationsRequest {
  readonly HostedZoneId: string;
  readonly NextToken: string;
  readonly MaxResults: string;
}

interface ListVPCAssociationAuthorizationsResponse {
  readonly HostedZoneId: string;
  readonly NextToken: string;
  readonly VPCs: [];
}

interface NoSuchChange {
  readonly message: string;
}

interface NoSuchCloudWatchLogsLogGroup {
  readonly message: string;
}

interface NoSuchDelegationSet {
  readonly message: string;
}

interface NoSuchGeoLocation {
  readonly message: string;
}

interface NoSuchHealthCheck {
  readonly message: string;
}

interface NoSuchHostedZone {
  readonly message: string;
}

interface NoSuchKeySigningKey {
  readonly message: string;
}

interface NoSuchQueryLoggingConfig {
  readonly message: string;
}

interface NoSuchTrafficPolicy {
  readonly message: string;
}

interface NoSuchTrafficPolicyInstance {
  readonly message: string;
}

interface NotAuthorizedException {
  readonly message: string;
}

interface PriorRequestNotComplete {
  readonly message: string;
}

interface PublicZoneVPCAssociation {
  readonly message: string;
}

interface QueryLoggingConfig {
  readonly Id: string;
  readonly HostedZoneId: string;
  readonly CloudWatchLogsLogGroupArn: string;
}

interface QueryLoggingConfigAlreadyExists {
  readonly message: string;
}

interface ResourceRecord {
  readonly Value: string;
}

interface ResourceRecordSet {
  readonly Name: string;
  readonly Type: string;
  readonly SetIdentifier: string;
  readonly Weight: number;
  readonly Region: string;
  readonly GeoLocation: GeoLocation;
  readonly Failover: string;
  readonly MultiValueAnswer: boolean;
  readonly TTL: number;
  readonly ResourceRecords: [];
  readonly AliasTarget: AliasTarget;
  readonly HealthCheckId: string;
  readonly TrafficPolicyInstanceId: string;
}

interface ResourceTagSet {
  readonly ResourceType: string;
  readonly ResourceId: string;
  readonly Tags: [];
}

interface ReusableDelegationSetLimit {
  readonly Type: string;
  readonly Value: number;
}

interface StatusReport {
  readonly Status: string;
  readonly CheckedTime: Date;
}

interface Tag {
  readonly Key: string;
  readonly Value: string;
}

interface TestDNSAnswerRequest {
  readonly HostedZoneId: string;
  readonly RecordName: string;
  readonly RecordType: string;
  readonly ResolverIP: string;
  readonly EDNS0ClientSubnetIP: string;
  readonly EDNS0ClientSubnetMask: string;
}

interface TestDNSAnswerResponse {
  readonly Nameserver: string;
  readonly RecordName: string;
  readonly RecordType: string;
  readonly RecordData: [];
  readonly ResponseCode: string;
  readonly Protocol: string;
}

interface ThrottlingException {
  readonly message: string;
}

interface TooManyHealthChecks {
  readonly message: string;
}

interface TooManyHostedZones {
  readonly message: string;
}

interface TooManyKeySigningKeys {
  readonly message: string;
}

interface TooManyTrafficPolicies {
  readonly message: string;
}

interface TooManyTrafficPolicyInstances {
  readonly message: string;
}

interface TooManyTrafficPolicyVersionsForCurrentPolicy {
  readonly message: string;
}

interface TooManyVPCAssociationAuthorizations {
  readonly message: string;
}

interface TrafficPolicy {
  readonly Id: string;
  readonly Version: number;
  readonly Name: string;
  readonly Type: string;
  readonly Document: string;
  readonly Comment: string;
}

interface TrafficPolicyAlreadyExists {
  readonly message: string;
}

interface TrafficPolicyInUse {
  readonly message: string;
}

interface TrafficPolicyInstance {
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

interface TrafficPolicyInstanceAlreadyExists {
  readonly message: string;
}

interface TrafficPolicySummary {
  readonly Id: string;
  readonly Name: string;
  readonly Type: string;
  readonly LatestVersion: number;
  readonly TrafficPolicyCount: number;
}

interface UpdateHealthCheckRequest {
  readonly HealthCheckId: string;
  readonly HealthCheckVersion: number;
  readonly IPAddress: string;
  readonly Port: number;
  readonly ResourcePath: string;
  readonly FullyQualifiedDomainName: string;
  readonly SearchString: string;
  readonly FailureThreshold: number;
  readonly Inverted: boolean;
  readonly Disabled: boolean;
  readonly HealthThreshold: number;
  readonly ChildHealthChecks: [];
  readonly EnableSNI: boolean;
  readonly Regions: [];
  readonly AlarmIdentifier: AlarmIdentifier;
  readonly InsufficientDataHealthStatus: string;
  readonly ResetElements: [];
}

interface UpdateHealthCheckResponse {
  readonly HealthCheck: HealthCheck;
}

interface UpdateHostedZoneCommentRequest {
  readonly Id: string;
  readonly Comment: string;
}

interface UpdateHostedZoneCommentResponse {
  readonly HostedZone: HostedZone;
}

interface UpdateTrafficPolicyCommentRequest {
  readonly Id: string;
  readonly Version: number;
  readonly Comment: string;
}

interface UpdateTrafficPolicyCommentResponse {
  readonly TrafficPolicy: TrafficPolicy;
}

interface UpdateTrafficPolicyInstanceRequest {
  readonly Id: string;
  readonly TTL: number;
  readonly TrafficPolicyId: string;
  readonly TrafficPolicyVersion: number;
}

interface UpdateTrafficPolicyInstanceResponse {
  readonly TrafficPolicyInstance: TrafficPolicyInstance;
}

interface VPC {
  readonly VPCRegion: string;
  readonly VPCId: string;
}

interface VPCAssociationAuthorizationNotFound {
  readonly message: string;
}

interface VPCAssociationNotFound {
  readonly message: string;
}
