/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface CreateDevicePool {
  readonly projectArn: string;
  readonly name: string;
  readonly description?: string;
  readonly rules: [];
  readonly maxDevices?: number;
}
export interface CreateInstanceProfile {
  readonly name: string;
  readonly description?: string;
  readonly packageCleanup?: boolean;
  readonly excludeAppPackagesFromCleanup?: [];
  readonly rebootAfterUse?: boolean;
}
export interface CreateNetworkProfile {
  readonly projectArn: string;
  readonly name: string;
  readonly description?: string;
  readonly type?: string;
  readonly uplinkBandwidthBits?: number;
  readonly downlinkBandwidthBits?: number;
  readonly uplinkDelayMs?: number;
  readonly downlinkDelayMs?: number;
  readonly uplinkJitterMs?: number;
  readonly downlinkJitterMs?: number;
  readonly uplinkLossPercent?: number;
  readonly downlinkLossPercent?: number;
}
export interface CreateProject {
  readonly name: string;
  readonly defaultJobTimeoutMinutes?: number;
}
export interface CreateRemoteAccessSession {
  readonly projectArn: string;
  readonly deviceArn: string;
  readonly instanceArn?: string;
  readonly sshPublicKey?: string;
  readonly remoteDebugEnabled?: boolean;
  readonly remoteRecordEnabled?: boolean;
  readonly remoteRecordAppArn?: string;
  readonly name?: string;
  readonly clientId?: string;
  readonly configuration?: CreateRemoteAccessSessionConfiguration;
  readonly interactionMode?: string;
  readonly skipAppResign?: boolean;
}
export interface CreateTestGridProject {
  readonly name: string;
  readonly description?: string;
  readonly vpcConfig?: TestGridVpcConfig;
}
export interface CreateTestGridUrl {
  readonly projectArn: string;
  readonly expiresInSeconds: number;
}
export interface CreateUpload {
  readonly projectArn: string;
  readonly name: string;
  readonly type: string;
  readonly contentType?: string;
}
export interface CreateVPCEConfiguration {
  readonly vpceConfigurationName: string;
  readonly vpceServiceName: string;
  readonly serviceDnsName: string;
  readonly vpceConfigurationDescription?: string;
}
export interface DeleteDevicePool {
  readonly arn: string;
}
export interface DeleteInstanceProfile {
  readonly arn: string;
}
export interface DeleteNetworkProfile {
  readonly arn: string;
}
export interface DeleteProject {
  readonly arn: string;
}
export interface DeleteRemoteAccessSession {
  readonly arn: string;
}
export interface DeleteRun {
  readonly arn: string;
}
export interface DeleteTestGridProject {
  readonly projectArn: string;
}
export interface DeleteUpload {
  readonly arn: string;
}
export interface DeleteVPCEConfiguration {
  readonly arn: string;
}
export interface GetAccountSettings {
}
export interface GetDevice {
  readonly arn: string;
}
export interface GetDeviceInstance {
  readonly arn: string;
}
export interface GetDevicePool {
  readonly arn: string;
}
export interface GetDevicePoolCompatibility {
  readonly devicePoolArn: string;
  readonly appArn?: string;
  readonly testType?: string;
  readonly test?: ScheduleRunTest;
  readonly configuration?: ScheduleRunConfiguration;
}
export interface GetInstanceProfile {
  readonly arn: string;
}
export interface GetJob {
  readonly arn: string;
}
export interface GetNetworkProfile {
  readonly arn: string;
}
export interface GetOfferingStatus {
  readonly nextToken?: string;
}
export interface GetProject {
  readonly arn: string;
}
export interface GetRemoteAccessSession {
  readonly arn: string;
}
export interface GetRun {
  readonly arn: string;
}
export interface GetSuite {
  readonly arn: string;
}
export interface GetTest {
  readonly arn: string;
}
export interface GetTestGridProject {
  readonly projectArn: string;
}
export interface GetTestGridSession {
  readonly projectArn?: string;
  readonly sessionId?: string;
  readonly sessionArn?: string;
}
export interface GetUpload {
  readonly arn: string;
}
export interface GetVPCEConfiguration {
  readonly arn: string;
}
export interface InstallToRemoteAccessSession {
  readonly remoteAccessSessionArn: string;
  readonly appArn: string;
}
export interface ListArtifacts {
  readonly arn: string;
  readonly type: string;
  readonly nextToken?: string;
}
export interface ListDeviceInstances {
  readonly maxResults?: number;
  readonly nextToken?: string;
}
export interface ListDevicePools {
  readonly arn: string;
  readonly type?: string;
  readonly nextToken?: string;
}
export interface ListDevices {
  readonly arn?: string;
  readonly nextToken?: string;
  readonly filters?: [];
}
export interface ListInstanceProfiles {
  readonly maxResults?: number;
  readonly nextToken?: string;
}
export interface ListJobs {
  readonly arn: string;
  readonly nextToken?: string;
}
export interface ListNetworkProfiles {
  readonly arn: string;
  readonly type?: string;
  readonly nextToken?: string;
}
export interface ListOfferingPromotions {
  readonly nextToken?: string;
}
export interface ListOfferingTransactions {
  readonly nextToken?: string;
}
export interface ListOfferings {
  readonly nextToken?: string;
}
export interface ListProjects {
  readonly arn?: string;
  readonly nextToken?: string;
}
export interface ListRemoteAccessSessions {
  readonly arn: string;
  readonly nextToken?: string;
}
export interface ListRuns {
  readonly arn: string;
  readonly nextToken?: string;
}
export interface ListSamples {
  readonly arn: string;
  readonly nextToken?: string;
}
export interface ListSuites {
  readonly arn: string;
  readonly nextToken?: string;
}
export interface ListTagsForResource {
  readonly ResourceARN: string;
}
export interface ListTestGridProjects {
  readonly maxResult?: number;
  readonly nextToken?: string;
}
export interface ListTestGridSessionActions {
  readonly sessionArn: string;
  readonly maxResult?: number;
  readonly nextToken?: string;
}
export interface ListTestGridSessionArtifacts {
  readonly sessionArn: string;
  readonly type?: string;
  readonly maxResult?: number;
  readonly nextToken?: string;
}
export interface ListTestGridSessions {
  readonly projectArn: string;
  readonly status?: string;
  readonly creationTimeAfter?: Date;
  readonly creationTimeBefore?: Date;
  readonly endTimeAfter?: Date;
  readonly endTimeBefore?: Date;
  readonly maxResult?: number;
  readonly nextToken?: string;
}
export interface ListTests {
  readonly arn: string;
  readonly nextToken?: string;
}
export interface ListUniqueProblems {
  readonly arn: string;
  readonly nextToken?: string;
}
export interface ListUploads {
  readonly arn: string;
  readonly type?: string;
  readonly nextToken?: string;
}
export interface ListVPCEConfigurations {
  readonly maxResults?: number;
  readonly nextToken?: string;
}
export interface PurchaseOffering {
  readonly offeringId: string;
  readonly quantity: number;
  readonly offeringPromotionId?: string;
}
export interface RenewOffering {
  readonly offeringId: string;
  readonly quantity: number;
}
export interface ScheduleRun {
  readonly projectArn: string;
  readonly appArn?: string;
  readonly devicePoolArn?: string;
  readonly deviceSelectionConfiguration?: DeviceSelectionConfiguration;
  readonly name?: string;
  readonly test: ScheduleRunTest;
  readonly configuration?: ScheduleRunConfiguration;
  readonly executionConfiguration?: ExecutionConfiguration;
}
export interface StopJob {
  readonly arn: string;
}
export interface StopRemoteAccessSession {
  readonly arn: string;
}
export interface StopRun {
  readonly arn: string;
}
export interface TagResource {
  readonly ResourceARN: string;
  readonly Tags: [];
}
export interface UntagResource {
  readonly ResourceARN: string;
  readonly TagKeys: [];
}
export interface UpdateDeviceInstance {
  readonly arn: string;
  readonly profileArn?: string;
  readonly labels?: [];
}
export interface UpdateDevicePool {
  readonly arn: string;
  readonly name?: string;
  readonly description?: string;
  readonly rules?: [];
  readonly maxDevices?: number;
  readonly clearMaxDevices?: boolean;
}
export interface UpdateInstanceProfile {
  readonly arn: string;
  readonly name?: string;
  readonly description?: string;
  readonly packageCleanup?: boolean;
  readonly excludeAppPackagesFromCleanup?: [];
  readonly rebootAfterUse?: boolean;
}
export interface UpdateNetworkProfile {
  readonly arn: string;
  readonly name?: string;
  readonly description?: string;
  readonly type?: string;
  readonly uplinkBandwidthBits?: number;
  readonly downlinkBandwidthBits?: number;
  readonly uplinkDelayMs?: number;
  readonly downlinkDelayMs?: number;
  readonly uplinkJitterMs?: number;
  readonly downlinkJitterMs?: number;
  readonly uplinkLossPercent?: number;
  readonly downlinkLossPercent?: number;
}
export interface UpdateProject {
  readonly arn: string;
  readonly name?: string;
  readonly defaultJobTimeoutMinutes?: number;
}
export interface UpdateTestGridProject {
  readonly projectArn: string;
  readonly name?: string;
  readonly description?: string;
  readonly vpcConfig?: TestGridVpcConfig;
}
export interface UpdateUpload {
  readonly arn: string;
  readonly name?: string;
  readonly contentType?: string;
  readonly editContent?: boolean;
}
export interface UpdateVPCEConfiguration {
  readonly arn: string;
  readonly vpceConfigurationName?: string;
  readonly vpceServiceName?: string;
  readonly serviceDnsName?: string;
  readonly vpceConfigurationDescription?: string;
}



interface AccountSettings {
  readonly awsAccountNumber: string;
  readonly unmeteredDevices: {[key: string]: any};
  readonly unmeteredRemoteAccessDevices: {[key: string]: any};
  readonly maxJobTimeoutMinutes: number;
  readonly trialMinutes: TrialMinutes;
  readonly maxSlots: {[key: string]: any};
  readonly defaultJobTimeoutMinutes: number;
  readonly skipAppResign: boolean;
}

interface ArgumentException {
  readonly message: string;
}

interface Artifact {
  readonly arn: string;
  readonly name: string;
  readonly type: string;
  readonly extension: string;
  readonly url: string;
}

interface CPU {
  readonly frequency: string;
  readonly architecture: string;
  readonly clock: unknown;
}

interface CannotDeleteException {
  readonly message: string;
}

interface Counters {
  readonly total: number;
  readonly passed: number;
  readonly failed: number;
  readonly warned: number;
  readonly errored: number;
  readonly stopped: number;
  readonly skipped: number;
}

interface CreateDevicePoolRequest {
  readonly projectArn: string;
  readonly name: string;
  readonly description: string;
  readonly rules: [];
  readonly maxDevices: number;
}

interface CreateDevicePoolResult {
  readonly devicePool: DevicePool;
}

interface CreateInstanceProfileRequest {
  readonly name: string;
  readonly description: string;
  readonly packageCleanup: boolean;
  readonly excludeAppPackagesFromCleanup: [];
  readonly rebootAfterUse: boolean;
}

interface CreateInstanceProfileResult {
  readonly instanceProfile: InstanceProfile;
}

interface CreateNetworkProfileRequest {
  readonly projectArn: string;
  readonly name: string;
  readonly description: string;
  readonly type: string;
  readonly uplinkBandwidthBits: number;
  readonly downlinkBandwidthBits: number;
  readonly uplinkDelayMs: number;
  readonly downlinkDelayMs: number;
  readonly uplinkJitterMs: number;
  readonly downlinkJitterMs: number;
  readonly uplinkLossPercent: number;
  readonly downlinkLossPercent: number;
}

interface CreateNetworkProfileResult {
  readonly networkProfile: NetworkProfile;
}

interface CreateProjectRequest {
  readonly name: string;
  readonly defaultJobTimeoutMinutes: number;
}

interface CreateProjectResult {
  readonly project: Project;
}

interface CreateRemoteAccessSessionConfiguration {
  readonly billingMethod: string;
  readonly vpceConfigurationArns: [];
}

interface CreateRemoteAccessSessionRequest {
  readonly projectArn: string;
  readonly deviceArn: string;
  readonly instanceArn: string;
  readonly sshPublicKey: string;
  readonly remoteDebugEnabled: boolean;
  readonly remoteRecordEnabled: boolean;
  readonly remoteRecordAppArn: string;
  readonly name: string;
  readonly clientId: string;
  readonly configuration: CreateRemoteAccessSessionConfiguration;
  readonly interactionMode: string;
  readonly skipAppResign: boolean;
}

interface CreateRemoteAccessSessionResult {
  readonly remoteAccessSession: RemoteAccessSession;
}

interface CreateTestGridProjectRequest {
  readonly name: string;
  readonly description: string;
  readonly vpcConfig: TestGridVpcConfig;
}

interface CreateTestGridProjectResult {
  readonly testGridProject: TestGridProject;
}

interface CreateTestGridUrlRequest {
  readonly projectArn: string;
  readonly expiresInSeconds: number;
}

interface CreateTestGridUrlResult {
  readonly url: string;
  readonly expires: Date;
}

interface CreateUploadRequest {
  readonly projectArn: string;
  readonly name: string;
  readonly type: string;
  readonly contentType: string;
}

interface CreateUploadResult {
  readonly upload: Upload;
}

interface CreateVPCEConfigurationRequest {
  readonly vpceConfigurationName: string;
  readonly vpceServiceName: string;
  readonly serviceDnsName: string;
  readonly vpceConfigurationDescription: string;
}

interface CreateVPCEConfigurationResult {
  readonly vpceConfiguration: VPCEConfiguration;
}

interface CustomerArtifactPaths {
  readonly iosPaths: [];
  readonly androidPaths: [];
  readonly deviceHostPaths: [];
}

interface DeleteDevicePoolRequest {
  readonly arn: string;
}

interface DeleteDevicePoolResult {
}

interface DeleteInstanceProfileRequest {
  readonly arn: string;
}

interface DeleteInstanceProfileResult {
}

interface DeleteNetworkProfileRequest {
  readonly arn: string;
}

interface DeleteNetworkProfileResult {
}

interface DeleteProjectRequest {
  readonly arn: string;
}

interface DeleteProjectResult {
}

interface DeleteRemoteAccessSessionRequest {
  readonly arn: string;
}

interface DeleteRemoteAccessSessionResult {
}

interface DeleteRunRequest {
  readonly arn: string;
}

interface DeleteRunResult {
}

interface DeleteTestGridProjectRequest {
  readonly projectArn: string;
}

interface DeleteTestGridProjectResult {
}

interface DeleteUploadRequest {
  readonly arn: string;
}

interface DeleteUploadResult {
}

interface DeleteVPCEConfigurationRequest {
  readonly arn: string;
}

interface DeleteVPCEConfigurationResult {
}

interface Device {
  readonly arn: string;
  readonly name: string;
  readonly manufacturer: string;
  readonly model: string;
  readonly modelId: string;
  readonly formFactor: string;
  readonly platform: string;
  readonly os: string;
  readonly cpu: CPU;
  readonly resolution: Resolution;
  readonly heapSize: number;
  readonly memory: number;
  readonly image: string;
  readonly carrier: string;
  readonly radio: string;
  readonly remoteAccessEnabled: boolean;
  readonly remoteDebugEnabled: boolean;
  readonly fleetType: string;
  readonly fleetName: string;
  readonly instances: [];
  readonly availability: string;
}

interface DeviceFilter {
  readonly attribute: string;
  readonly operator: string;
  readonly values: [];
}

interface DeviceInstance {
  readonly arn: string;
  readonly deviceArn: string;
  readonly labels: [];
  readonly status: string;
  readonly udid: string;
  readonly instanceProfile: InstanceProfile;
}

interface DeviceMinutes {
  readonly total: unknown;
  readonly metered: unknown;
  readonly unmetered: unknown;
}

interface DevicePool {
  readonly arn: string;
  readonly name: string;
  readonly description: string;
  readonly type: string;
  readonly rules: [];
  readonly maxDevices: number;
}

interface DevicePoolCompatibilityResult {
  readonly device: Device;
  readonly compatible: boolean;
  readonly incompatibilityMessages: [];
}

interface DeviceSelectionConfiguration {
  readonly filters: [];
  readonly maxDevices: number;
}

interface DeviceSelectionResult {
  readonly filters: [];
  readonly matchedDevicesCount: number;
  readonly maxDevices: number;
}

interface ExecutionConfiguration {
  readonly jobTimeoutMinutes: number;
  readonly accountsCleanup: boolean;
  readonly appPackagesCleanup: boolean;
  readonly videoCapture: boolean;
  readonly skipAppResign: boolean;
}

interface GetAccountSettingsRequest {
}

interface GetAccountSettingsResult {
  readonly accountSettings: AccountSettings;
}

interface GetDeviceInstanceRequest {
  readonly arn: string;
}

interface GetDeviceInstanceResult {
  readonly deviceInstance: DeviceInstance;
}

interface GetDevicePoolCompatibilityRequest {
  readonly devicePoolArn: string;
  readonly appArn: string;
  readonly testType: string;
  readonly test: ScheduleRunTest;
  readonly configuration: ScheduleRunConfiguration;
}

interface GetDevicePoolCompatibilityResult {
  readonly compatibleDevices: [];
  readonly incompatibleDevices: [];
}

interface GetDevicePoolRequest {
  readonly arn: string;
}

interface GetDevicePoolResult {
  readonly devicePool: DevicePool;
}

interface GetDeviceRequest {
  readonly arn: string;
}

interface GetDeviceResult {
  readonly device: Device;
}

interface GetInstanceProfileRequest {
  readonly arn: string;
}

interface GetInstanceProfileResult {
  readonly instanceProfile: InstanceProfile;
}

interface GetJobRequest {
  readonly arn: string;
}

interface GetJobResult {
  readonly job: Job;
}

interface GetNetworkProfileRequest {
  readonly arn: string;
}

interface GetNetworkProfileResult {
  readonly networkProfile: NetworkProfile;
}

interface GetOfferingStatusRequest {
  readonly nextToken: string;
}

interface GetOfferingStatusResult {
  readonly current: {[key: string]: any};
  readonly nextPeriod: {[key: string]: any};
  readonly nextToken: string;
}

interface GetProjectRequest {
  readonly arn: string;
}

interface GetProjectResult {
  readonly project: Project;
}

interface GetRemoteAccessSessionRequest {
  readonly arn: string;
}

interface GetRemoteAccessSessionResult {
  readonly remoteAccessSession: RemoteAccessSession;
}

interface GetRunRequest {
  readonly arn: string;
}

interface GetRunResult {
  readonly run: Run;
}

interface GetSuiteRequest {
  readonly arn: string;
}

interface GetSuiteResult {
  readonly suite: Suite;
}

interface GetTestGridProjectRequest {
  readonly projectArn: string;
}

interface GetTestGridProjectResult {
  readonly testGridProject: TestGridProject;
}

interface GetTestGridSessionRequest {
  readonly projectArn: string;
  readonly sessionId: string;
  readonly sessionArn: string;
}

interface GetTestGridSessionResult {
  readonly testGridSession: TestGridSession;
}

interface GetTestRequest {
  readonly arn: string;
}

interface GetTestResult {
  readonly test: Test;
}

interface GetUploadRequest {
  readonly arn: string;
}

interface GetUploadResult {
  readonly upload: Upload;
}

interface GetVPCEConfigurationRequest {
  readonly arn: string;
}

interface GetVPCEConfigurationResult {
  readonly vpceConfiguration: VPCEConfiguration;
}

interface IdempotencyException {
  readonly message: string;
}

interface IncompatibilityMessage {
  readonly message: string;
  readonly type: string;
}

interface InstallToRemoteAccessSessionRequest {
  readonly remoteAccessSessionArn: string;
  readonly appArn: string;
}

interface InstallToRemoteAccessSessionResult {
  readonly appUpload: Upload;
}

interface InstanceProfile {
  readonly arn: string;
  readonly packageCleanup: boolean;
  readonly excludeAppPackagesFromCleanup: [];
  readonly rebootAfterUse: boolean;
  readonly name: string;
  readonly description: string;
}

interface InternalServiceException {
  readonly message: string;
}

interface InvalidOperationException {
  readonly message: string;
}

interface Job {
  readonly arn: string;
  readonly name: string;
  readonly type: string;
  readonly created: Date;
  readonly status: string;
  readonly result: string;
  readonly started: Date;
  readonly stopped: Date;
  readonly counters: Counters;
  readonly message: string;
  readonly device: Device;
  readonly instanceArn: string;
  readonly deviceMinutes: DeviceMinutes;
  readonly videoEndpoint: string;
  readonly videoCapture: boolean;
}

interface LimitExceededException {
  readonly message: string;
}

interface ListArtifactsRequest {
  readonly arn: string;
  readonly type: string;
  readonly nextToken: string;
}

interface ListArtifactsResult {
  readonly artifacts: [];
  readonly nextToken: string;
}

interface ListDeviceInstancesRequest {
  readonly maxResults: number;
  readonly nextToken: string;
}

interface ListDeviceInstancesResult {
  readonly deviceInstances: [];
  readonly nextToken: string;
}

interface ListDevicePoolsRequest {
  readonly arn: string;
  readonly type: string;
  readonly nextToken: string;
}

interface ListDevicePoolsResult {
  readonly devicePools: [];
  readonly nextToken: string;
}

interface ListDevicesRequest {
  readonly arn: string;
  readonly nextToken: string;
  readonly filters: [];
}

interface ListDevicesResult {
  readonly devices: [];
  readonly nextToken: string;
}

interface ListInstanceProfilesRequest {
  readonly maxResults: number;
  readonly nextToken: string;
}

interface ListInstanceProfilesResult {
  readonly instanceProfiles: [];
  readonly nextToken: string;
}

interface ListJobsRequest {
  readonly arn: string;
  readonly nextToken: string;
}

interface ListJobsResult {
  readonly jobs: [];
  readonly nextToken: string;
}

interface ListNetworkProfilesRequest {
  readonly arn: string;
  readonly type: string;
  readonly nextToken: string;
}

interface ListNetworkProfilesResult {
  readonly networkProfiles: [];
  readonly nextToken: string;
}

interface ListOfferingPromotionsRequest {
  readonly nextToken: string;
}

interface ListOfferingPromotionsResult {
  readonly offeringPromotions: [];
  readonly nextToken: string;
}

interface ListOfferingTransactionsRequest {
  readonly nextToken: string;
}

interface ListOfferingTransactionsResult {
  readonly offeringTransactions: [];
  readonly nextToken: string;
}

interface ListOfferingsRequest {
  readonly nextToken: string;
}

interface ListOfferingsResult {
  readonly offerings: [];
  readonly nextToken: string;
}

interface ListProjectsRequest {
  readonly arn: string;
  readonly nextToken: string;
}

interface ListProjectsResult {
  readonly projects: [];
  readonly nextToken: string;
}

interface ListRemoteAccessSessionsRequest {
  readonly arn: string;
  readonly nextToken: string;
}

interface ListRemoteAccessSessionsResult {
  readonly remoteAccessSessions: [];
  readonly nextToken: string;
}

interface ListRunsRequest {
  readonly arn: string;
  readonly nextToken: string;
}

interface ListRunsResult {
  readonly runs: [];
  readonly nextToken: string;
}

interface ListSamplesRequest {
  readonly arn: string;
  readonly nextToken: string;
}

interface ListSamplesResult {
  readonly samples: [];
  readonly nextToken: string;
}

interface ListSuitesRequest {
  readonly arn: string;
  readonly nextToken: string;
}

interface ListSuitesResult {
  readonly suites: [];
  readonly nextToken: string;
}

interface ListTagsForResourceRequest {
  readonly ResourceARN: string;
}

interface ListTagsForResourceResponse {
  readonly Tags: [];
}

interface ListTestGridProjectsRequest {
  readonly maxResult: number;
  readonly nextToken: string;
}

interface ListTestGridProjectsResult {
  readonly testGridProjects: [];
  readonly nextToken: string;
}

interface ListTestGridSessionActionsRequest {
  readonly sessionArn: string;
  readonly maxResult: number;
  readonly nextToken: string;
}

interface ListTestGridSessionActionsResult {
  readonly actions: [];
  readonly nextToken: string;
}

interface ListTestGridSessionArtifactsRequest {
  readonly sessionArn: string;
  readonly type: string;
  readonly maxResult: number;
  readonly nextToken: string;
}

interface ListTestGridSessionArtifactsResult {
  readonly artifacts: [];
  readonly nextToken: string;
}

interface ListTestGridSessionsRequest {
  readonly projectArn: string;
  readonly status: string;
  readonly creationTimeAfter: Date;
  readonly creationTimeBefore: Date;
  readonly endTimeAfter: Date;
  readonly endTimeBefore: Date;
  readonly maxResult: number;
  readonly nextToken: string;
}

interface ListTestGridSessionsResult {
  readonly testGridSessions: [];
  readonly nextToken: string;
}

interface ListTestsRequest {
  readonly arn: string;
  readonly nextToken: string;
}

interface ListTestsResult {
  readonly tests: [];
  readonly nextToken: string;
}

interface ListUniqueProblemsRequest {
  readonly arn: string;
  readonly nextToken: string;
}

interface ListUniqueProblemsResult {
  readonly uniqueProblems: {[key: string]: any};
  readonly nextToken: string;
}

interface ListUploadsRequest {
  readonly arn: string;
  readonly type: string;
  readonly nextToken: string;
}

interface ListUploadsResult {
  readonly uploads: [];
  readonly nextToken: string;
}

interface ListVPCEConfigurationsRequest {
  readonly maxResults: number;
  readonly nextToken: string;
}

interface ListVPCEConfigurationsResult {
  readonly vpceConfigurations: [];
  readonly nextToken: string;
}

interface Location {
  readonly latitude: unknown;
  readonly longitude: unknown;
}

interface MonetaryAmount {
  readonly amount: unknown;
  readonly currencyCode: string;
}

interface NetworkProfile {
  readonly arn: string;
  readonly name: string;
  readonly description: string;
  readonly type: string;
  readonly uplinkBandwidthBits: number;
  readonly downlinkBandwidthBits: number;
  readonly uplinkDelayMs: number;
  readonly downlinkDelayMs: number;
  readonly uplinkJitterMs: number;
  readonly downlinkJitterMs: number;
  readonly uplinkLossPercent: number;
  readonly downlinkLossPercent: number;
}

interface NotEligibleException {
  readonly message: string;
}

interface NotFoundException {
  readonly message: string;
}

interface Offering {
  readonly id: string;
  readonly description: string;
  readonly type: string;
  readonly platform: string;
  readonly recurringCharges: [];
}

interface OfferingPromotion {
  readonly id: string;
  readonly description: string;
}

interface OfferingStatus {
  readonly type: string;
  readonly offering: Offering;
  readonly quantity: number;
  readonly effectiveOn: Date;
}

interface OfferingTransaction {
  readonly offeringStatus: OfferingStatus;
  readonly transactionId: string;
  readonly offeringPromotionId: string;
  readonly createdOn: Date;
  readonly cost: MonetaryAmount;
}

interface Problem {
  readonly run: ProblemDetail;
  readonly job: ProblemDetail;
  readonly suite: ProblemDetail;
  readonly test: ProblemDetail;
  readonly device: Device;
  readonly result: string;
  readonly message: string;
}

interface ProblemDetail {
  readonly arn: string;
  readonly name: string;
}

interface Project {
  readonly arn: string;
  readonly name: string;
  readonly defaultJobTimeoutMinutes: number;
  readonly created: Date;
}

interface PurchaseOfferingRequest {
  readonly offeringId: string;
  readonly quantity: number;
  readonly offeringPromotionId: string;
}

interface PurchaseOfferingResult {
  readonly offeringTransaction: OfferingTransaction;
}

interface Radios {
  readonly wifi: boolean;
  readonly bluetooth: boolean;
  readonly nfc: boolean;
  readonly gps: boolean;
}

interface RecurringCharge {
  readonly cost: MonetaryAmount;
  readonly frequency: string;
}

interface RemoteAccessSession {
  readonly arn: string;
  readonly name: string;
  readonly created: Date;
  readonly status: string;
  readonly result: string;
  readonly message: string;
  readonly started: Date;
  readonly stopped: Date;
  readonly device: Device;
  readonly instanceArn: string;
  readonly remoteDebugEnabled: boolean;
  readonly remoteRecordEnabled: boolean;
  readonly remoteRecordAppArn: string;
  readonly hostAddress: string;
  readonly clientId: string;
  readonly billingMethod: string;
  readonly deviceMinutes: DeviceMinutes;
  readonly endpoint: string;
  readonly deviceUdid: string;
  readonly interactionMode: string;
  readonly skipAppResign: boolean;
}

interface RenewOfferingRequest {
  readonly offeringId: string;
  readonly quantity: number;
}

interface RenewOfferingResult {
  readonly offeringTransaction: OfferingTransaction;
}

interface Resolution {
  readonly width: number;
  readonly height: number;
}

interface Rule {
  readonly attribute: string;
  readonly operator: string;
  readonly value: string;
}

interface Run {
  readonly arn: string;
  readonly name: string;
  readonly type: string;
  readonly platform: string;
  readonly created: Date;
  readonly status: string;
  readonly result: string;
  readonly started: Date;
  readonly stopped: Date;
  readonly counters: Counters;
  readonly message: string;
  readonly totalJobs: number;
  readonly completedJobs: number;
  readonly billingMethod: string;
  readonly deviceMinutes: DeviceMinutes;
  readonly networkProfile: NetworkProfile;
  readonly parsingResultUrl: string;
  readonly resultCode: string;
  readonly seed: number;
  readonly appUpload: string;
  readonly eventCount: number;
  readonly jobTimeoutMinutes: number;
  readonly devicePoolArn: string;
  readonly locale: string;
  readonly radios: Radios;
  readonly location: Location;
  readonly customerArtifactPaths: CustomerArtifactPaths;
  readonly webUrl: string;
  readonly skipAppResign: boolean;
  readonly testSpecArn: string;
  readonly deviceSelectionResult: DeviceSelectionResult;
}

interface Sample {
  readonly arn: string;
  readonly type: string;
  readonly url: string;
}

interface ScheduleRunConfiguration {
  readonly extraDataPackageArn: string;
  readonly networkProfileArn: string;
  readonly locale: string;
  readonly location: Location;
  readonly vpceConfigurationArns: [];
  readonly customerArtifactPaths: CustomerArtifactPaths;
  readonly radios: Radios;
  readonly auxiliaryApps: [];
  readonly billingMethod: string;
}

interface ScheduleRunRequest {
  readonly projectArn: string;
  readonly appArn: string;
  readonly devicePoolArn: string;
  readonly deviceSelectionConfiguration: DeviceSelectionConfiguration;
  readonly name: string;
  readonly test: ScheduleRunTest;
  readonly configuration: ScheduleRunConfiguration;
  readonly executionConfiguration: ExecutionConfiguration;
}

interface ScheduleRunResult {
  readonly run: Run;
}

interface ScheduleRunTest {
  readonly type: string;
  readonly testPackageArn: string;
  readonly testSpecArn: string;
  readonly filter: string;
  readonly parameters: {[key: string]: any};
}

interface ServiceAccountException {
  readonly message: string;
}

interface StopJobRequest {
  readonly arn: string;
}

interface StopJobResult {
  readonly job: Job;
}

interface StopRemoteAccessSessionRequest {
  readonly arn: string;
}

interface StopRemoteAccessSessionResult {
  readonly remoteAccessSession: RemoteAccessSession;
}

interface StopRunRequest {
  readonly arn: string;
}

interface StopRunResult {
  readonly run: Run;
}

interface Suite {
  readonly arn: string;
  readonly name: string;
  readonly type: string;
  readonly created: Date;
  readonly status: string;
  readonly result: string;
  readonly started: Date;
  readonly stopped: Date;
  readonly counters: Counters;
  readonly message: string;
  readonly deviceMinutes: DeviceMinutes;
}

interface Tag {
  readonly Key: string;
  readonly Value: string;
}

interface TagOperationException {
  readonly message: string;
  readonly resourceName: string;
}

interface TagPolicyException {
  readonly message: string;
  readonly resourceName: string;
}

interface TagResourceRequest {
  readonly ResourceARN: string;
  readonly Tags: [];
}

interface TagResourceResponse {
}

interface Test {
  readonly arn: string;
  readonly name: string;
  readonly type: string;
  readonly created: Date;
  readonly status: string;
  readonly result: string;
  readonly started: Date;
  readonly stopped: Date;
  readonly counters: Counters;
  readonly message: string;
  readonly deviceMinutes: DeviceMinutes;
}

interface TestGridProject {
  readonly arn: string;
  readonly name: string;
  readonly description: string;
  readonly vpcConfig: TestGridVpcConfig;
  readonly created: Date;
}

interface TestGridSession {
  readonly arn: string;
  readonly status: string;
  readonly created: Date;
  readonly ended: Date;
  readonly billingMinutes: unknown;
  readonly seleniumProperties: string;
}

interface TestGridSessionAction {
  readonly action: string;
  readonly started: Date;
  readonly duration: number;
  readonly statusCode: string;
  readonly requestMethod: string;
}

interface TestGridSessionArtifact {
  readonly filename: string;
  readonly type: string;
  readonly url: string;
}

interface TestGridVpcConfig {
  readonly securityGroupIds: [];
  readonly subnetIds: [];
  readonly vpcId: string;
}

interface TooManyTagsException {
  readonly message: string;
  readonly resourceName: string;
}

interface TrialMinutes {
  readonly total: unknown;
  readonly remaining: unknown;
}

interface UniqueProblem {
  readonly message: string;
  readonly problems: [];
}

interface UntagResourceRequest {
  readonly ResourceARN: string;
  readonly TagKeys: [];
}

interface UntagResourceResponse {
}

interface UpdateDeviceInstanceRequest {
  readonly arn: string;
  readonly profileArn: string;
  readonly labels: [];
}

interface UpdateDeviceInstanceResult {
  readonly deviceInstance: DeviceInstance;
}

interface UpdateDevicePoolRequest {
  readonly arn: string;
  readonly name: string;
  readonly description: string;
  readonly rules: [];
  readonly maxDevices: number;
  readonly clearMaxDevices: boolean;
}

interface UpdateDevicePoolResult {
  readonly devicePool: DevicePool;
}

interface UpdateInstanceProfileRequest {
  readonly arn: string;
  readonly name: string;
  readonly description: string;
  readonly packageCleanup: boolean;
  readonly excludeAppPackagesFromCleanup: [];
  readonly rebootAfterUse: boolean;
}

interface UpdateInstanceProfileResult {
  readonly instanceProfile: InstanceProfile;
}

interface UpdateNetworkProfileRequest {
  readonly arn: string;
  readonly name: string;
  readonly description: string;
  readonly type: string;
  readonly uplinkBandwidthBits: number;
  readonly downlinkBandwidthBits: number;
  readonly uplinkDelayMs: number;
  readonly downlinkDelayMs: number;
  readonly uplinkJitterMs: number;
  readonly downlinkJitterMs: number;
  readonly uplinkLossPercent: number;
  readonly downlinkLossPercent: number;
}

interface UpdateNetworkProfileResult {
  readonly networkProfile: NetworkProfile;
}

interface UpdateProjectRequest {
  readonly arn: string;
  readonly name: string;
  readonly defaultJobTimeoutMinutes: number;
}

interface UpdateProjectResult {
  readonly project: Project;
}

interface UpdateTestGridProjectRequest {
  readonly projectArn: string;
  readonly name: string;
  readonly description: string;
  readonly vpcConfig: TestGridVpcConfig;
}

interface UpdateTestGridProjectResult {
  readonly testGridProject: TestGridProject;
}

interface UpdateUploadRequest {
  readonly arn: string;
  readonly name: string;
  readonly contentType: string;
  readonly editContent: boolean;
}

interface UpdateUploadResult {
  readonly upload: Upload;
}

interface UpdateVPCEConfigurationRequest {
  readonly arn: string;
  readonly vpceConfigurationName: string;
  readonly vpceServiceName: string;
  readonly serviceDnsName: string;
  readonly vpceConfigurationDescription: string;
}

interface UpdateVPCEConfigurationResult {
  readonly vpceConfiguration: VPCEConfiguration;
}

interface Upload {
  readonly arn: string;
  readonly name: string;
  readonly created: Date;
  readonly type: string;
  readonly status: string;
  readonly url: string;
  readonly metadata: string;
  readonly contentType: string;
  readonly message: string;
  readonly category: string;
}

interface VPCEConfiguration {
  readonly arn: string;
  readonly vpceConfigurationName: string;
  readonly vpceServiceName: string;
  readonly serviceDnsName: string;
  readonly vpceConfigurationDescription: string;
}

