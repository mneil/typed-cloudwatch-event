/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface AssociateAwsAccountWithPartnerAccount {
  readonly Sidewalk: SidewalkAccountInfo;
  readonly ClientRequestToken: string;
  readonly Tags: [];
}
export interface AssociateMulticastGroupWithFuotaTask {
  readonly Id: string;
  readonly MulticastGroupId: string;
}
export interface AssociateWirelessDeviceWithFuotaTask {
  readonly Id: string;
  readonly WirelessDeviceId: string;
}
export interface AssociateWirelessDeviceWithMulticastGroup {
  readonly Id: string;
  readonly WirelessDeviceId: string;
}
export interface AssociateWirelessDeviceWithThing {
  readonly Id: string;
  readonly ThingArn: string;
}
export interface AssociateWirelessGatewayWithCertificate {
  readonly Id: string;
  readonly IotCertificateId: string;
}
export interface AssociateWirelessGatewayWithThing {
  readonly Id: string;
  readonly ThingArn: string;
}
export interface CancelMulticastGroupSession {
  readonly Id: string;
}
export interface CreateDestination {
  readonly Name: string;
  readonly ExpressionType: string;
  readonly Expression: string;
  readonly Description: string;
  readonly RoleArn: string;
  readonly Tags: [];
  readonly ClientRequestToken: string;
}
export interface CreateDeviceProfile {
  readonly Name: string;
  readonly LoRaWAN: LoRaWANDeviceProfile;
  readonly Tags: [];
  readonly ClientRequestToken: string;
}
export interface CreateFuotaTask {
  readonly Name: string;
  readonly Description: string;
  readonly ClientRequestToken: string;
  readonly LoRaWAN: LoRaWANFuotaTask;
  readonly FirmwareUpdateImage: string;
  readonly FirmwareUpdateRole: string;
  readonly Tags: [];
}
export interface CreateMulticastGroup {
  readonly Name: string;
  readonly Description: string;
  readonly ClientRequestToken: string;
  readonly LoRaWAN: LoRaWANMulticast;
  readonly Tags: [];
}
export interface CreateServiceProfile {
  readonly Name: string;
  readonly LoRaWAN: LoRaWANServiceProfile;
  readonly Tags: [];
  readonly ClientRequestToken: string;
}
export interface CreateWirelessDevice {
  readonly Type: string;
  readonly Name: string;
  readonly Description: string;
  readonly DestinationName: string;
  readonly ClientRequestToken: string;
  readonly LoRaWAN: LoRaWANDevice;
  readonly Tags: [];
}
export interface CreateWirelessGateway {
  readonly Name: string;
  readonly Description: string;
  readonly LoRaWAN: LoRaWANGateway;
  readonly Tags: [];
  readonly ClientRequestToken: string;
}
export interface CreateWirelessGatewayTask {
  readonly Id: string;
  readonly WirelessGatewayTaskDefinitionId: string;
}
export interface CreateWirelessGatewayTaskDefinition {
  readonly AutoCreateTasks: boolean;
  readonly Name: string;
  readonly Update: UpdateWirelessGatewayTaskCreate;
  readonly ClientRequestToken: string;
  readonly Tags: [];
}
export interface DeleteDestination {
  readonly Name: string;
}
export interface DeleteDeviceProfile {
  readonly Id: string;
}
export interface DeleteFuotaTask {
  readonly Id: string;
}
export interface DeleteMulticastGroup {
  readonly Id: string;
}
export interface DeleteServiceProfile {
  readonly Id: string;
}
export interface DeleteWirelessDevice {
  readonly Id: string;
}
export interface DeleteWirelessGateway {
  readonly Id: string;
}
export interface DeleteWirelessGatewayTask {
  readonly Id: string;
}
export interface DeleteWirelessGatewayTaskDefinition {
  readonly Id: string;
}
export interface DisassociateAwsAccountFromPartnerAccount {
  readonly PartnerAccountId: string;
  readonly PartnerType: string;
}
export interface DisassociateMulticastGroupFromFuotaTask {
  readonly Id: string;
  readonly MulticastGroupId: string;
}
export interface DisassociateWirelessDeviceFromFuotaTask {
  readonly Id: string;
  readonly WirelessDeviceId: string;
}
export interface DisassociateWirelessDeviceFromMulticastGroup {
  readonly Id: string;
  readonly WirelessDeviceId: string;
}
export interface DisassociateWirelessDeviceFromThing {
  readonly Id: string;
}
export interface DisassociateWirelessGatewayFromCertificate {
  readonly Id: string;
}
export interface DisassociateWirelessGatewayFromThing {
  readonly Id: string;
}
export interface GetDestination {
  readonly Name: string;
}
export interface GetDeviceProfile {
  readonly Id: string;
}
export interface GetFuotaTask {
  readonly Id: string;
}
export interface GetLogLevelsByResourceTypes {
}
export interface GetMulticastGroup {
  readonly Id: string;
}
export interface GetMulticastGroupSession {
  readonly Id: string;
}
export interface GetNetworkAnalyzerConfiguration {
  readonly ConfigurationName: string;
}
export interface GetPartnerAccount {
  readonly PartnerAccountId: string;
  readonly PartnerType: string;
}
export interface GetResourceEventConfiguration {
  readonly Identifier: string;
  readonly IdentifierType: string;
  readonly PartnerType: string;
}
export interface GetResourceLogLevel {
  readonly ResourceIdentifier: string;
  readonly ResourceType: string;
}
export interface GetServiceEndpoint {
  readonly ServiceType: string;
}
export interface GetServiceProfile {
  readonly Id: string;
}
export interface GetWirelessDevice {
  readonly Identifier: string;
  readonly IdentifierType: string;
}
export interface GetWirelessDeviceStatistics {
  readonly WirelessDeviceId: string;
}
export interface GetWirelessGateway {
  readonly Identifier: string;
  readonly IdentifierType: string;
}
export interface GetWirelessGatewayCertificate {
  readonly Id: string;
}
export interface GetWirelessGatewayFirmwareInformation {
  readonly Id: string;
}
export interface GetWirelessGatewayStatistics {
  readonly WirelessGatewayId: string;
}
export interface GetWirelessGatewayTask {
  readonly Id: string;
}
export interface GetWirelessGatewayTaskDefinition {
  readonly Id: string;
}
export interface ListDestinations {
  readonly MaxResults: number;
  readonly NextToken: string;
}
export interface ListDeviceProfiles {
  readonly NextToken: string;
  readonly MaxResults: number;
}
export interface ListFuotaTasks {
  readonly NextToken: string;
  readonly MaxResults: number;
}
export interface ListMulticastGroups {
  readonly NextToken: string;
  readonly MaxResults: number;
}
export interface ListMulticastGroupsByFuotaTask {
  readonly Id: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}
export interface ListPartnerAccounts {
  readonly NextToken: string;
  readonly MaxResults: number;
}
export interface ListServiceProfiles {
  readonly NextToken: string;
  readonly MaxResults: number;
}
export interface ListTagsForResource {
  readonly ResourceArn: string;
}
export interface ListWirelessDevices {
  readonly MaxResults: number;
  readonly NextToken: string;
  readonly DestinationName: string;
  readonly DeviceProfileId: string;
  readonly ServiceProfileId: string;
  readonly WirelessDeviceType: string;
  readonly FuotaTaskId: string;
  readonly MulticastGroupId: string;
}
export interface ListWirelessGatewayTaskDefinitions {
  readonly MaxResults: number;
  readonly NextToken: string;
  readonly TaskDefinitionType: string;
}
export interface ListWirelessGateways {
  readonly NextToken: string;
  readonly MaxResults: number;
}
export interface PutResourceLogLevel {
  readonly ResourceIdentifier: string;
  readonly ResourceType: string;
  readonly LogLevel: string;
}
export interface ResetAllResourceLogLevels {
}
export interface ResetResourceLogLevel {
  readonly ResourceIdentifier: string;
  readonly ResourceType: string;
}
export interface SendDataToMulticastGroup {
  readonly Id: string;
  readonly PayloadData: string;
  readonly WirelessMetadata: MulticastWirelessMetadata;
}
export interface SendDataToWirelessDevice {
  readonly Id: string;
  readonly TransmitMode: number;
  readonly PayloadData: string;
  readonly WirelessMetadata: WirelessMetadata;
}
export interface StartBulkAssociateWirelessDeviceWithMulticastGroup {
  readonly Id: string;
  readonly QueryString: string;
  readonly Tags: [];
}
export interface StartBulkDisassociateWirelessDeviceFromMulticastGroup {
  readonly Id: string;
  readonly QueryString: string;
  readonly Tags: [];
}
export interface StartFuotaTask {
  readonly Id: string;
  readonly LoRaWAN: LoRaWANStartFuotaTask;
}
export interface StartMulticastGroupSession {
  readonly Id: string;
  readonly LoRaWAN: LoRaWANMulticastSession;
}
export interface TagResource {
  readonly ResourceArn: string;
  readonly Tags: [];
}
export interface TestWirelessDevice {
  readonly Id: string;
}
export interface UntagResource {
  readonly ResourceArn: string;
  readonly TagKeys: [];
}
export interface UpdateDestination {
  readonly Name: string;
  readonly ExpressionType: string;
  readonly Expression: string;
  readonly Description: string;
  readonly RoleArn: string;
}
export interface UpdateFuotaTask {
  readonly Id: string;
  readonly Name: string;
  readonly Description: string;
  readonly LoRaWAN: LoRaWANFuotaTask;
  readonly FirmwareUpdateImage: string;
  readonly FirmwareUpdateRole: string;
}
export interface UpdateLogLevelsByResourceTypes {
  readonly DefaultLogLevel: string;
  readonly WirelessDeviceLogOptions: [];
  readonly WirelessGatewayLogOptions: [];
}
export interface UpdateMulticastGroup {
  readonly Id: string;
  readonly Name: string;
  readonly Description: string;
  readonly LoRaWAN: LoRaWANMulticast;
}
export interface UpdateNetworkAnalyzerConfiguration {
  readonly ConfigurationName: string;
  readonly TraceContent: TraceContent;
  readonly WirelessDevicesToAdd: [];
  readonly WirelessDevicesToRemove: [];
  readonly WirelessGatewaysToAdd: [];
  readonly WirelessGatewaysToRemove: [];
}
export interface UpdatePartnerAccount {
  readonly Sidewalk: SidewalkUpdateAccount;
  readonly PartnerAccountId: string;
  readonly PartnerType: string;
}
export interface UpdateResourceEventConfiguration {
  readonly Identifier: string;
  readonly IdentifierType: string;
  readonly PartnerType: string;
  readonly DeviceRegistrationState: DeviceRegistrationStateEventConfiguration;
  readonly Proximity: ProximityEventConfiguration;
}
export interface UpdateWirelessDevice {
  readonly Id: string;
  readonly DestinationName: string;
  readonly Name: string;
  readonly Description: string;
  readonly LoRaWAN: LoRaWANUpdateDevice;
}
export interface UpdateWirelessGateway {
  readonly Id: string;
  readonly Name: string;
  readonly Description: string;
  readonly JoinEuiFilters: [];
  readonly NetIdFilters: [];
}



interface AbpV1_0_x {
  readonly DevAddr: string;
  readonly SessionKeys: SessionKeysAbpV1_0_x;
}

interface AbpV1_1 {
  readonly DevAddr: string;
  readonly SessionKeys: SessionKeysAbpV1_1;
}

interface AccessDeniedException {
  readonly Message: string;
}

interface AssociateAwsAccountWithPartnerAccountRequest {
  readonly Sidewalk: SidewalkAccountInfo;
  readonly ClientRequestToken: string;
  readonly Tags: [];
}

interface AssociateAwsAccountWithPartnerAccountResponse {
  readonly Sidewalk: SidewalkAccountInfo;
  readonly Arn: string;
}

interface AssociateMulticastGroupWithFuotaTaskRequest {
  readonly Id: string;
  readonly MulticastGroupId: string;
}

interface AssociateMulticastGroupWithFuotaTaskResponse {
}

interface AssociateWirelessDeviceWithFuotaTaskRequest {
  readonly Id: string;
  readonly WirelessDeviceId: string;
}

interface AssociateWirelessDeviceWithFuotaTaskResponse {
}

interface AssociateWirelessDeviceWithMulticastGroupRequest {
  readonly Id: string;
  readonly WirelessDeviceId: string;
}

interface AssociateWirelessDeviceWithMulticastGroupResponse {
}

interface AssociateWirelessDeviceWithThingRequest {
  readonly Id: string;
  readonly ThingArn: string;
}

interface AssociateWirelessDeviceWithThingResponse {
}

interface AssociateWirelessGatewayWithCertificateRequest {
  readonly Id: string;
  readonly IotCertificateId: string;
}

interface AssociateWirelessGatewayWithCertificateResponse {
  readonly IotCertificateId: string;
}

interface AssociateWirelessGatewayWithThingRequest {
  readonly Id: string;
  readonly ThingArn: string;
}

interface AssociateWirelessGatewayWithThingResponse {
}

interface CancelMulticastGroupSessionRequest {
  readonly Id: string;
}

interface CancelMulticastGroupSessionResponse {
}

interface CertificateList {
  readonly SigningAlg: string;
  readonly Value: string;
}

interface ConflictException {
  readonly Message: string;
  readonly ResourceId: string;
  readonly ResourceType: string;
}

interface CreateDestinationRequest {
  readonly Name: string;
  readonly ExpressionType: string;
  readonly Expression: string;
  readonly Description: string;
  readonly RoleArn: string;
  readonly Tags: [];
  readonly ClientRequestToken: string;
}

interface CreateDestinationResponse {
  readonly Arn: string;
  readonly Name: string;
}

interface CreateDeviceProfileRequest {
  readonly Name: string;
  readonly LoRaWAN: LoRaWANDeviceProfile;
  readonly Tags: [];
  readonly ClientRequestToken: string;
}

interface CreateDeviceProfileResponse {
  readonly Arn: string;
  readonly Id: string;
}

interface CreateFuotaTaskRequest {
  readonly Name: string;
  readonly Description: string;
  readonly ClientRequestToken: string;
  readonly LoRaWAN: LoRaWANFuotaTask;
  readonly FirmwareUpdateImage: string;
  readonly FirmwareUpdateRole: string;
  readonly Tags: [];
}

interface CreateFuotaTaskResponse {
  readonly Arn: string;
  readonly Id: string;
}

interface CreateMulticastGroupRequest {
  readonly Name: string;
  readonly Description: string;
  readonly ClientRequestToken: string;
  readonly LoRaWAN: LoRaWANMulticast;
  readonly Tags: [];
}

interface CreateMulticastGroupResponse {
  readonly Arn: string;
  readonly Id: string;
}

interface CreateServiceProfileRequest {
  readonly Name: string;
  readonly LoRaWAN: LoRaWANServiceProfile;
  readonly Tags: [];
  readonly ClientRequestToken: string;
}

interface CreateServiceProfileResponse {
  readonly Arn: string;
  readonly Id: string;
}

interface CreateWirelessDeviceRequest {
  readonly Type: string;
  readonly Name: string;
  readonly Description: string;
  readonly DestinationName: string;
  readonly ClientRequestToken: string;
  readonly LoRaWAN: LoRaWANDevice;
  readonly Tags: [];
}

interface CreateWirelessDeviceResponse {
  readonly Arn: string;
  readonly Id: string;
}

interface CreateWirelessGatewayRequest {
  readonly Name: string;
  readonly Description: string;
  readonly LoRaWAN: LoRaWANGateway;
  readonly Tags: [];
  readonly ClientRequestToken: string;
}

interface CreateWirelessGatewayResponse {
  readonly Arn: string;
  readonly Id: string;
}

interface CreateWirelessGatewayTaskDefinitionRequest {
  readonly AutoCreateTasks: boolean;
  readonly Name: string;
  readonly Update: UpdateWirelessGatewayTaskCreate;
  readonly ClientRequestToken: string;
  readonly Tags: [];
}

interface CreateWirelessGatewayTaskDefinitionResponse {
  readonly Id: string;
  readonly Arn: string;
}

interface CreateWirelessGatewayTaskRequest {
  readonly Id: string;
  readonly WirelessGatewayTaskDefinitionId: string;
}

interface CreateWirelessGatewayTaskResponse {
  readonly WirelessGatewayTaskDefinitionId: string;
  readonly Status: string;
}

interface DeleteDestinationRequest {
  readonly Name: string;
}

interface DeleteDestinationResponse {
}

interface DeleteDeviceProfileRequest {
  readonly Id: string;
}

interface DeleteDeviceProfileResponse {
}

interface DeleteFuotaTaskRequest {
  readonly Id: string;
}

interface DeleteFuotaTaskResponse {
}

interface DeleteMulticastGroupRequest {
  readonly Id: string;
}

interface DeleteMulticastGroupResponse {
}

interface DeleteServiceProfileRequest {
  readonly Id: string;
}

interface DeleteServiceProfileResponse {
}

interface DeleteWirelessDeviceRequest {
  readonly Id: string;
}

interface DeleteWirelessDeviceResponse {
}

interface DeleteWirelessGatewayRequest {
  readonly Id: string;
}

interface DeleteWirelessGatewayResponse {
}

interface DeleteWirelessGatewayTaskDefinitionRequest {
  readonly Id: string;
}

interface DeleteWirelessGatewayTaskDefinitionResponse {
}

interface DeleteWirelessGatewayTaskRequest {
  readonly Id: string;
}

interface DeleteWirelessGatewayTaskResponse {
}

interface Destinations {
  readonly Arn: string;
  readonly Name: string;
  readonly ExpressionType: string;
  readonly Expression: string;
  readonly Description: string;
  readonly RoleArn: string;
}

interface DeviceProfile {
  readonly Arn: string;
  readonly Name: string;
  readonly Id: string;
}

interface DeviceRegistrationStateEventConfiguration {
  readonly Sidewalk: SidewalkEventNotificationConfigurations;
}

interface DisassociateAwsAccountFromPartnerAccountRequest {
  readonly PartnerAccountId: string;
  readonly PartnerType: string;
}

interface DisassociateAwsAccountFromPartnerAccountResponse {
}

interface DisassociateMulticastGroupFromFuotaTaskRequest {
  readonly Id: string;
  readonly MulticastGroupId: string;
}

interface DisassociateMulticastGroupFromFuotaTaskResponse {
}

interface DisassociateWirelessDeviceFromFuotaTaskRequest {
  readonly Id: string;
  readonly WirelessDeviceId: string;
}

interface DisassociateWirelessDeviceFromFuotaTaskResponse {
}

interface DisassociateWirelessDeviceFromMulticastGroupRequest {
  readonly Id: string;
  readonly WirelessDeviceId: string;
}

interface DisassociateWirelessDeviceFromMulticastGroupResponse {
}

interface DisassociateWirelessDeviceFromThingRequest {
  readonly Id: string;
}

interface DisassociateWirelessDeviceFromThingResponse {
}

interface DisassociateWirelessGatewayFromCertificateRequest {
  readonly Id: string;
}

interface DisassociateWirelessGatewayFromCertificateResponse {
}

interface DisassociateWirelessGatewayFromThingRequest {
  readonly Id: string;
}

interface DisassociateWirelessGatewayFromThingResponse {
}

interface FPorts {
  readonly Fuota: number;
  readonly Multicast: number;
  readonly ClockSync: number;
}

interface FuotaTask {
  readonly Id: string;
  readonly Arn: string;
  readonly Name: string;
}

interface GetDestinationRequest {
  readonly Name: string;
}

interface GetDestinationResponse {
  readonly Arn: string;
  readonly Name: string;
  readonly Expression: string;
  readonly ExpressionType: string;
  readonly Description: string;
  readonly RoleArn: string;
}

interface GetDeviceProfileRequest {
  readonly Id: string;
}

interface GetDeviceProfileResponse {
  readonly Arn: string;
  readonly Name: string;
  readonly Id: string;
  readonly LoRaWAN: LoRaWANDeviceProfile;
}

interface GetFuotaTaskRequest {
  readonly Id: string;
}

interface GetFuotaTaskResponse {
  readonly Arn: string;
  readonly Id: string;
  readonly Status: string;
  readonly Name: string;
  readonly Description: string;
  readonly LoRaWAN: LoRaWANFuotaTaskGetInfo;
  readonly FirmwareUpdateImage: string;
  readonly FirmwareUpdateRole: string;
  readonly CreatedAt: Date;
}

interface GetLogLevelsByResourceTypesRequest {
}

interface GetLogLevelsByResourceTypesResponse {
  readonly DefaultLogLevel: string;
  readonly WirelessGatewayLogOptions: [];
  readonly WirelessDeviceLogOptions: [];
}

interface GetMulticastGroupRequest {
  readonly Id: string;
}

interface GetMulticastGroupResponse {
  readonly Arn: string;
  readonly Id: string;
  readonly Name: string;
  readonly Description: string;
  readonly Status: string;
  readonly LoRaWAN: LoRaWANMulticastGet;
  readonly CreatedAt: Date;
}

interface GetMulticastGroupSessionRequest {
  readonly Id: string;
}

interface GetMulticastGroupSessionResponse {
  readonly LoRaWAN: LoRaWANMulticastSession;
}

interface GetNetworkAnalyzerConfigurationRequest {
  readonly ConfigurationName: string;
}

interface GetNetworkAnalyzerConfigurationResponse {
  readonly TraceContent: TraceContent;
  readonly WirelessDevices: [];
  readonly WirelessGateways: [];
}

interface GetPartnerAccountRequest {
  readonly PartnerAccountId: string;
  readonly PartnerType: string;
}

interface GetPartnerAccountResponse {
  readonly Sidewalk: SidewalkAccountInfoWithFingerprint;
  readonly AccountLinked: boolean;
}

interface GetResourceEventConfigurationRequest {
  readonly Identifier: string;
  readonly IdentifierType: string;
  readonly PartnerType: string;
}

interface GetResourceEventConfigurationResponse {
  readonly DeviceRegistrationState: DeviceRegistrationStateEventConfiguration;
  readonly Proximity: ProximityEventConfiguration;
}

interface GetResourceLogLevelRequest {
  readonly ResourceIdentifier: string;
  readonly ResourceType: string;
}

interface GetResourceLogLevelResponse {
  readonly LogLevel: string;
}

interface GetServiceEndpointRequest {
  readonly ServiceType: string;
}

interface GetServiceEndpointResponse {
  readonly ServiceType: string;
  readonly ServiceEndpoint: string;
  readonly ServerTrust: string;
}

interface GetServiceProfileRequest {
  readonly Id: string;
}

interface GetServiceProfileResponse {
  readonly Arn: string;
  readonly Name: string;
  readonly Id: string;
  readonly LoRaWAN: LoRaWANGetServiceProfileInfo;
}

interface GetWirelessDeviceRequest {
  readonly Identifier: string;
  readonly IdentifierType: string;
}

interface GetWirelessDeviceResponse {
  readonly Type: string;
  readonly Name: string;
  readonly Description: string;
  readonly DestinationName: string;
  readonly Id: string;
  readonly Arn: string;
  readonly ThingName: string;
  readonly ThingArn: string;
  readonly LoRaWAN: LoRaWANDevice;
  readonly Sidewalk: SidewalkDevice;
}

interface GetWirelessDeviceStatisticsRequest {
  readonly WirelessDeviceId: string;
}

interface GetWirelessDeviceStatisticsResponse {
  readonly WirelessDeviceId: string;
  readonly LastUplinkReceivedAt: string;
  readonly LoRaWAN: LoRaWANDeviceMetadata;
  readonly Sidewalk: SidewalkDeviceMetadata;
}

interface GetWirelessGatewayCertificateRequest {
  readonly Id: string;
}

interface GetWirelessGatewayCertificateResponse {
  readonly IotCertificateId: string;
  readonly LoRaWANNetworkServerCertificateId: string;
}

interface GetWirelessGatewayFirmwareInformationRequest {
  readonly Id: string;
}

interface GetWirelessGatewayFirmwareInformationResponse {
  readonly LoRaWAN: LoRaWANGatewayCurrentVersion;
}

interface GetWirelessGatewayRequest {
  readonly Identifier: string;
  readonly IdentifierType: string;
}

interface GetWirelessGatewayResponse {
  readonly Name: string;
  readonly Id: string;
  readonly Description: string;
  readonly LoRaWAN: LoRaWANGateway;
  readonly Arn: string;
  readonly ThingName: string;
  readonly ThingArn: string;
}

interface GetWirelessGatewayStatisticsRequest {
  readonly WirelessGatewayId: string;
}

interface GetWirelessGatewayStatisticsResponse {
  readonly WirelessGatewayId: string;
  readonly LastUplinkReceivedAt: string;
  readonly ConnectionStatus: string;
}

interface GetWirelessGatewayTaskDefinitionRequest {
  readonly Id: string;
}

interface GetWirelessGatewayTaskDefinitionResponse {
  readonly AutoCreateTasks: boolean;
  readonly Name: string;
  readonly Update: UpdateWirelessGatewayTaskCreate;
  readonly Arn: string;
}

interface GetWirelessGatewayTaskRequest {
  readonly Id: string;
}

interface GetWirelessGatewayTaskResponse {
  readonly WirelessGatewayId: string;
  readonly WirelessGatewayTaskDefinitionId: string;
  readonly LastUplinkReceivedAt: string;
  readonly TaskCreatedAt: string;
  readonly Status: string;
}

interface InternalServerException {
  readonly Message: string;
}

interface ListDestinationsRequest {
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface ListDestinationsResponse {
  readonly NextToken: string;
  readonly DestinationList: [];
}

interface ListDeviceProfilesRequest {
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListDeviceProfilesResponse {
  readonly NextToken: string;
  readonly DeviceProfileList: [];
}

interface ListFuotaTasksRequest {
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListFuotaTasksResponse {
  readonly NextToken: string;
  readonly FuotaTaskList: [];
}

interface ListMulticastGroupsByFuotaTaskRequest {
  readonly Id: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListMulticastGroupsByFuotaTaskResponse {
  readonly NextToken: string;
  readonly MulticastGroupList: [];
}

interface ListMulticastGroupsRequest {
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListMulticastGroupsResponse {
  readonly NextToken: string;
  readonly MulticastGroupList: [];
}

interface ListPartnerAccountsRequest {
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListPartnerAccountsResponse {
  readonly NextToken: string;
  readonly Sidewalk: [];
}

interface ListServiceProfilesRequest {
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListServiceProfilesResponse {
  readonly NextToken: string;
  readonly ServiceProfileList: [];
}

interface ListTagsForResourceRequest {
  readonly ResourceArn: string;
}

interface ListTagsForResourceResponse {
  readonly Tags: [];
}

interface ListWirelessDevicesRequest {
  readonly MaxResults: number;
  readonly NextToken: string;
  readonly DestinationName: string;
  readonly DeviceProfileId: string;
  readonly ServiceProfileId: string;
  readonly WirelessDeviceType: string;
  readonly FuotaTaskId: string;
  readonly MulticastGroupId: string;
}

interface ListWirelessDevicesResponse {
  readonly NextToken: string;
  readonly WirelessDeviceList: [];
}

interface ListWirelessGatewayTaskDefinitionsRequest {
  readonly MaxResults: number;
  readonly NextToken: string;
  readonly TaskDefinitionType: string;
}

interface ListWirelessGatewayTaskDefinitionsResponse {
  readonly NextToken: string;
  readonly TaskDefinitions: [];
}

interface ListWirelessGatewaysRequest {
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListWirelessGatewaysResponse {
  readonly NextToken: string;
  readonly WirelessGatewayList: [];
}

interface LoRaWANDevice {
  readonly DevEui: string;
  readonly DeviceProfileId: string;
  readonly ServiceProfileId: string;
  readonly OtaaV1_1: OtaaV1_1;
  readonly OtaaV1_0_x: OtaaV1_0_x;
  readonly AbpV1_1: AbpV1_1;
  readonly AbpV1_0_x: AbpV1_0_x;
  readonly FPorts: FPorts;
}

interface LoRaWANDeviceMetadata {
  readonly DevEui: string;
  readonly FPort: number;
  readonly DataRate: number;
  readonly Frequency: number;
  readonly Timestamp: string;
  readonly Gateways: [];
}

interface LoRaWANDeviceProfile {
  readonly SupportsClassB: boolean;
  readonly ClassBTimeout: number;
  readonly PingSlotPeriod: number;
  readonly PingSlotDr: number;
  readonly PingSlotFreq: number;
  readonly SupportsClassC: boolean;
  readonly ClassCTimeout: number;
  readonly MacVersion: string;
  readonly RegParamsRevision: string;
  readonly RxDelay1: number;
  readonly RxDrOffset1: number;
  readonly RxDataRate2: number;
  readonly RxFreq2: number;
  readonly FactoryPresetFreqsList: [];
  readonly MaxEirp: number;
  readonly MaxDutyCycle: number;
  readonly RfRegion: string;
  readonly SupportsJoin: boolean;
  readonly Supports32BitFCnt: boolean;
}

interface LoRaWANFuotaTask {
  readonly RfRegion: string;
}

interface LoRaWANFuotaTaskGetInfo {
  readonly RfRegion: string;
  readonly StartTime: Date;
}

interface LoRaWANGateway {
  readonly GatewayEui: string;
  readonly RfRegion: string;
  readonly JoinEuiFilters: [];
  readonly NetIdFilters: [];
  readonly SubBands: [];
}

interface LoRaWANGatewayCurrentVersion {
  readonly CurrentVersion: LoRaWANGatewayVersion;
}

interface LoRaWANGatewayMetadata {
  readonly GatewayEui: string;
  readonly Snr: unknown;
  readonly Rssi: unknown;
}

interface LoRaWANGatewayVersion {
  readonly PackageVersion: string;
  readonly Model: string;
  readonly Station: string;
}

interface LoRaWANGetServiceProfileInfo {
  readonly UlRate: number;
  readonly UlBucketSize: number;
  readonly UlRatePolicy: string;
  readonly DlRate: number;
  readonly DlBucketSize: number;
  readonly DlRatePolicy: string;
  readonly AddGwMetadata: boolean;
  readonly DevStatusReqFreq: number;
  readonly ReportDevStatusBattery: boolean;
  readonly ReportDevStatusMargin: boolean;
  readonly DrMin: number;
  readonly DrMax: number;
  readonly ChannelMask: string;
  readonly PrAllowed: boolean;
  readonly HrAllowed: boolean;
  readonly RaAllowed: boolean;
  readonly NwkGeoLoc: boolean;
  readonly TargetPer: number;
  readonly MinGwDiversity: number;
}

interface LoRaWANListDevice {
  readonly DevEui: string;
}

interface LoRaWANMulticast {
  readonly RfRegion: string;
  readonly DlClass: string;
}

interface LoRaWANMulticastGet {
  readonly RfRegion: string;
  readonly DlClass: string;
  readonly NumberOfDevicesRequested: number;
  readonly NumberOfDevicesInGroup: number;
}

interface LoRaWANMulticastMetadata {
  readonly FPort: number;
}

interface LoRaWANMulticastSession {
  readonly DlDr: number;
  readonly DlFreq: number;
  readonly SessionStartTime: Date;
  readonly SessionTimeout: number;
}

interface LoRaWANSendDataToDevice {
  readonly FPort: number;
}

interface LoRaWANServiceProfile {
  readonly AddGwMetadata: boolean;
}

interface LoRaWANStartFuotaTask {
  readonly StartTime: Date;
}

interface LoRaWANUpdateDevice {
  readonly DeviceProfileId: string;
  readonly ServiceProfileId: string;
}

interface LoRaWANUpdateGatewayTaskCreate {
  readonly UpdateSignature: string;
  readonly SigKeyCrc: number;
  readonly CurrentVersion: LoRaWANGatewayVersion;
  readonly UpdateVersion: LoRaWANGatewayVersion;
}

interface LoRaWANUpdateGatewayTaskEntry {
  readonly CurrentVersion: LoRaWANGatewayVersion;
  readonly UpdateVersion: LoRaWANGatewayVersion;
}

interface MulticastGroup {
  readonly Id: string;
  readonly Arn: string;
  readonly Name: string;
}

interface MulticastGroupByFuotaTask {
  readonly Id: string;
}

interface MulticastWirelessMetadata {
  readonly LoRaWAN: LoRaWANMulticastMetadata;
}

interface OtaaV1_0_x {
  readonly AppKey: string;
  readonly AppEui: string;
  readonly GenAppKey: string;
}

interface OtaaV1_1 {
  readonly AppKey: string;
  readonly NwkKey: string;
  readonly JoinEui: string;
}

interface ProximityEventConfiguration {
  readonly Sidewalk: SidewalkEventNotificationConfigurations;
}

interface PutResourceLogLevelRequest {
  readonly ResourceIdentifier: string;
  readonly ResourceType: string;
  readonly LogLevel: string;
}

interface PutResourceLogLevelResponse {
}

interface ResetAllResourceLogLevelsRequest {
}

interface ResetAllResourceLogLevelsResponse {
}

interface ResetResourceLogLevelRequest {
  readonly ResourceIdentifier: string;
  readonly ResourceType: string;
}

interface ResetResourceLogLevelResponse {
}

interface ResourceNotFoundException {
  readonly Message: string;
  readonly ResourceId: string;
  readonly ResourceType: string;
}

interface SendDataToMulticastGroupRequest {
  readonly Id: string;
  readonly PayloadData: string;
  readonly WirelessMetadata: MulticastWirelessMetadata;
}

interface SendDataToMulticastGroupResponse {
  readonly MessageId: string;
}

interface SendDataToWirelessDeviceRequest {
  readonly Id: string;
  readonly TransmitMode: number;
  readonly PayloadData: string;
  readonly WirelessMetadata: WirelessMetadata;
}

interface SendDataToWirelessDeviceResponse {
  readonly MessageId: string;
}

interface ServiceProfile {
  readonly Arn: string;
  readonly Name: string;
  readonly Id: string;
}

interface SessionKeysAbpV1_0_x {
  readonly NwkSKey: string;
  readonly AppSKey: string;
}

interface SessionKeysAbpV1_1 {
  readonly FNwkSIntKey: string;
  readonly SNwkSIntKey: string;
  readonly NwkSEncKey: string;
  readonly AppSKey: string;
}

interface SidewalkAccountInfo {
  readonly AmazonId: string;
  readonly AppServerPrivateKey: string;
}

interface SidewalkAccountInfoWithFingerprint {
  readonly AmazonId: string;
  readonly Fingerprint: string;
  readonly Arn: string;
}

interface SidewalkDevice {
  readonly AmazonId: string;
  readonly SidewalkId: string;
  readonly SidewalkManufacturingSn: string;
  readonly DeviceCertificates: [];
}

interface SidewalkDeviceMetadata {
  readonly Rssi: number;
  readonly BatteryLevel: string;
  readonly Event: string;
  readonly DeviceState: string;
}

interface SidewalkEventNotificationConfigurations {
  readonly AmazonIdEventTopic: string;
}

interface SidewalkListDevice {
  readonly AmazonId: string;
  readonly SidewalkId: string;
  readonly SidewalkManufacturingSn: string;
  readonly DeviceCertificates: [];
}

interface SidewalkSendDataToDevice {
  readonly Seq: number;
  readonly MessageType: string;
}

interface SidewalkUpdateAccount {
  readonly AppServerPrivateKey: string;
}

interface StartBulkAssociateWirelessDeviceWithMulticastGroupRequest {
  readonly Id: string;
  readonly QueryString: string;
  readonly Tags: [];
}

interface StartBulkAssociateWirelessDeviceWithMulticastGroupResponse {
}

interface StartBulkDisassociateWirelessDeviceFromMulticastGroupRequest {
  readonly Id: string;
  readonly QueryString: string;
  readonly Tags: [];
}

interface StartBulkDisassociateWirelessDeviceFromMulticastGroupResponse {
}

interface StartFuotaTaskRequest {
  readonly Id: string;
  readonly LoRaWAN: LoRaWANStartFuotaTask;
}

interface StartFuotaTaskResponse {
}

interface StartMulticastGroupSessionRequest {
  readonly Id: string;
  readonly LoRaWAN: LoRaWANMulticastSession;
}

interface StartMulticastGroupSessionResponse {
}

interface Tag {
  readonly Key: string;
  readonly Value: string;
}

interface TagResourceRequest {
  readonly ResourceArn: string;
  readonly Tags: [];
}

interface TagResourceResponse {
}

interface TestWirelessDeviceRequest {
  readonly Id: string;
}

interface TestWirelessDeviceResponse {
  readonly Result: string;
}

interface ThrottlingException {
  readonly Message: string;
}

interface TooManyTagsException {
  readonly Message: string;
  readonly ResourceName: string;
}

interface TraceContent {
  readonly WirelessDeviceFrameInfo: string;
  readonly LogLevel: string;
}

interface UntagResourceRequest {
  readonly ResourceArn: string;
  readonly TagKeys: [];
}

interface UntagResourceResponse {
}

interface UpdateDestinationRequest {
  readonly Name: string;
  readonly ExpressionType: string;
  readonly Expression: string;
  readonly Description: string;
  readonly RoleArn: string;
}

interface UpdateDestinationResponse {
}

interface UpdateFuotaTaskRequest {
  readonly Id: string;
  readonly Name: string;
  readonly Description: string;
  readonly LoRaWAN: LoRaWANFuotaTask;
  readonly FirmwareUpdateImage: string;
  readonly FirmwareUpdateRole: string;
}

interface UpdateFuotaTaskResponse {
}

interface UpdateLogLevelsByResourceTypesRequest {
  readonly DefaultLogLevel: string;
  readonly WirelessDeviceLogOptions: [];
  readonly WirelessGatewayLogOptions: [];
}

interface UpdateLogLevelsByResourceTypesResponse {
}

interface UpdateMulticastGroupRequest {
  readonly Id: string;
  readonly Name: string;
  readonly Description: string;
  readonly LoRaWAN: LoRaWANMulticast;
}

interface UpdateMulticastGroupResponse {
}

interface UpdateNetworkAnalyzerConfigurationRequest {
  readonly ConfigurationName: string;
  readonly TraceContent: TraceContent;
  readonly WirelessDevicesToAdd: [];
  readonly WirelessDevicesToRemove: [];
  readonly WirelessGatewaysToAdd: [];
  readonly WirelessGatewaysToRemove: [];
}

interface UpdateNetworkAnalyzerConfigurationResponse {
}

interface UpdatePartnerAccountRequest {
  readonly Sidewalk: SidewalkUpdateAccount;
  readonly PartnerAccountId: string;
  readonly PartnerType: string;
}

interface UpdatePartnerAccountResponse {
}

interface UpdateResourceEventConfigurationRequest {
  readonly Identifier: string;
  readonly IdentifierType: string;
  readonly PartnerType: string;
  readonly DeviceRegistrationState: DeviceRegistrationStateEventConfiguration;
  readonly Proximity: ProximityEventConfiguration;
}

interface UpdateResourceEventConfigurationResponse {
}

interface UpdateWirelessDeviceRequest {
  readonly Id: string;
  readonly DestinationName: string;
  readonly Name: string;
  readonly Description: string;
  readonly LoRaWAN: LoRaWANUpdateDevice;
}

interface UpdateWirelessDeviceResponse {
}

interface UpdateWirelessGatewayRequest {
  readonly Id: string;
  readonly Name: string;
  readonly Description: string;
  readonly JoinEuiFilters: [];
  readonly NetIdFilters: [];
}

interface UpdateWirelessGatewayResponse {
}

interface UpdateWirelessGatewayTaskCreate {
  readonly UpdateDataSource: string;
  readonly UpdateDataRole: string;
  readonly LoRaWAN: LoRaWANUpdateGatewayTaskCreate;
}

interface UpdateWirelessGatewayTaskEntry {
  readonly Id: string;
  readonly LoRaWAN: LoRaWANUpdateGatewayTaskEntry;
  readonly Arn: string;
}

interface ValidationException {
  readonly Message: string;
}

interface WirelessDeviceEventLogOption {
  readonly Event: string;
  readonly LogLevel: string;
}

interface WirelessDeviceLogOption {
  readonly Type: string;
  readonly LogLevel: string;
  readonly Events: [];
}

interface WirelessDeviceStatistics {
  readonly Arn: string;
  readonly Id: string;
  readonly Type: string;
  readonly Name: string;
  readonly DestinationName: string;
  readonly LastUplinkReceivedAt: string;
  readonly LoRaWAN: LoRaWANListDevice;
  readonly Sidewalk: SidewalkListDevice;
  readonly FuotaDeviceStatus: string;
  readonly MulticastDeviceStatus: string;
  readonly McGroupId: number;
}

interface WirelessGatewayEventLogOption {
  readonly Event: string;
  readonly LogLevel: string;
}

interface WirelessGatewayLogOption {
  readonly Type: string;
  readonly LogLevel: string;
  readonly Events: [];
}

interface WirelessGatewayStatistics {
  readonly Arn: string;
  readonly Id: string;
  readonly Name: string;
  readonly Description: string;
  readonly LoRaWAN: LoRaWANGateway;
  readonly LastUplinkReceivedAt: string;
}

interface WirelessMetadata {
  readonly LoRaWAN: LoRaWANSendDataToDevice;
  readonly Sidewalk: SidewalkSendDataToDevice;
}
