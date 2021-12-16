/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface AssociateAssets {
  readonly assetId: string;
  readonly hierarchyId: string;
  readonly childAssetId: string;
  readonly clientToken: string;
}
export interface AssociateTimeSeriesToAssetProperty {
  readonly alias: string;
  readonly assetId: string;
  readonly propertyId: string;
  readonly clientToken: string;
}
export interface BatchAssociateProjectAssets {
  readonly projectId: string;
  readonly assetIds: [];
  readonly clientToken: string;
}
export interface BatchDisassociateProjectAssets {
  readonly projectId: string;
  readonly assetIds: [];
  readonly clientToken: string;
}
export interface BatchPutAssetPropertyValue {
  readonly entries: [];
}
export interface CreateAccessPolicy {
  readonly accessPolicyIdentity: Identity;
  readonly accessPolicyResource: Resource;
  readonly accessPolicyPermission: string;
  readonly clientToken: string;
  readonly tags: {[key: string]: any};
}
export interface CreateAsset {
  readonly assetName: string;
  readonly assetModelId: string;
  readonly clientToken: string;
  readonly tags: {[key: string]: any};
}
export interface CreateAssetModel {
  readonly assetModelName: string;
  readonly assetModelDescription: string;
  readonly assetModelProperties: [];
  readonly assetModelHierarchies: [];
  readonly assetModelCompositeModels: [];
  readonly clientToken: string;
  readonly tags: {[key: string]: any};
}
export interface CreateDashboard {
  readonly projectId: string;
  readonly dashboardName: string;
  readonly dashboardDescription: string;
  readonly dashboardDefinition: string;
  readonly clientToken: string;
  readonly tags: {[key: string]: any};
}
export interface CreateGateway {
  readonly gatewayName: string;
  readonly gatewayPlatform: GatewayPlatform;
  readonly tags: {[key: string]: any};
}
export interface CreatePortal {
  readonly portalName: string;
  readonly portalDescription: string;
  readonly portalContactEmail: string;
  readonly clientToken: string;
  readonly portalLogoImageFile: ImageFile;
  readonly roleArn: string;
  readonly tags: {[key: string]: any};
  readonly portalAuthMode: string;
  readonly notificationSenderEmail: string;
  readonly alarms: Alarms;
}
export interface CreateProject {
  readonly portalId: string;
  readonly projectName: string;
  readonly projectDescription: string;
  readonly clientToken: string;
  readonly tags: {[key: string]: any};
}
export interface DeleteAccessPolicy {
  readonly accessPolicyId: string;
  readonly clientToken: string;
}
export interface DeleteAsset {
  readonly assetId: string;
  readonly clientToken: string;
}
export interface DeleteAssetModel {
  readonly assetModelId: string;
  readonly clientToken: string;
}
export interface DeleteDashboard {
  readonly dashboardId: string;
  readonly clientToken: string;
}
export interface DeleteGateway {
  readonly gatewayId: string;
}
export interface DeletePortal {
  readonly portalId: string;
  readonly clientToken: string;
}
export interface DeleteProject {
  readonly projectId: string;
  readonly clientToken: string;
}
export interface DeleteTimeSeries {
  readonly alias: string;
  readonly assetId: string;
  readonly propertyId: string;
  readonly clientToken: string;
}
export interface DescribeAccessPolicy {
  readonly accessPolicyId: string;
}
export interface DescribeAsset {
  readonly assetId: string;
}
export interface DescribeAssetModel {
  readonly assetModelId: string;
}
export interface DescribeAssetProperty {
  readonly assetId: string;
  readonly propertyId: string;
}
export interface DescribeDashboard {
  readonly dashboardId: string;
}
export interface DescribeDefaultEncryptionConfiguration {
}
export interface DescribeGateway {
  readonly gatewayId: string;
}
export interface DescribeGatewayCapabilityConfiguration {
  readonly gatewayId: string;
  readonly capabilityNamespace: string;
}
export interface DescribeLoggingOptions {
}
export interface DescribePortal {
  readonly portalId: string;
}
export interface DescribeProject {
  readonly projectId: string;
}
export interface DescribeStorageConfiguration {
}
export interface DescribeTimeSeries {
  readonly alias: string;
  readonly assetId: string;
  readonly propertyId: string;
}
export interface DisassociateAssets {
  readonly assetId: string;
  readonly hierarchyId: string;
  readonly childAssetId: string;
  readonly clientToken: string;
}
export interface DisassociateTimeSeriesFromAssetProperty {
  readonly alias: string;
  readonly assetId: string;
  readonly propertyId: string;
  readonly clientToken: string;
}
export interface GetAssetPropertyAggregates {
  readonly assetId: string;
  readonly propertyId: string;
  readonly propertyAlias: string;
  readonly aggregateTypes: [];
  readonly resolution: string;
  readonly qualities: [];
  readonly startDate: Date;
  readonly endDate: Date;
  readonly timeOrdering: string;
  readonly nextToken: string;
  readonly maxResults: number;
}
export interface GetAssetPropertyValue {
  readonly assetId: string;
  readonly propertyId: string;
  readonly propertyAlias: string;
}
export interface GetAssetPropertyValueHistory {
  readonly assetId: string;
  readonly propertyId: string;
  readonly propertyAlias: string;
  readonly startDate: Date;
  readonly endDate: Date;
  readonly qualities: [];
  readonly timeOrdering: string;
  readonly nextToken: string;
  readonly maxResults: number;
}
export interface GetInterpolatedAssetPropertyValues {
  readonly assetId: string;
  readonly propertyId: string;
  readonly propertyAlias: string;
  readonly startTimeInSeconds: number;
  readonly startTimeOffsetInNanos: number;
  readonly endTimeInSeconds: number;
  readonly endTimeOffsetInNanos: number;
  readonly quality: string;
  readonly intervalInSeconds: number;
  readonly nextToken: string;
  readonly maxResults: number;
  readonly type: string;
  readonly intervalWindowInSeconds: number;
}
export interface ListAccessPolicies {
  readonly identityType: string;
  readonly identityId: string;
  readonly resourceType: string;
  readonly resourceId: string;
  readonly iamArn: string;
  readonly nextToken: string;
  readonly maxResults: number;
}
export interface ListAssetModels {
  readonly nextToken: string;
  readonly maxResults: number;
}
export interface ListAssetRelationships {
  readonly assetId: string;
  readonly traversalType: string;
  readonly nextToken: string;
  readonly maxResults: number;
}
export interface ListAssets {
  readonly nextToken: string;
  readonly maxResults: number;
  readonly assetModelId: string;
  readonly filter: string;
}
export interface ListAssociatedAssets {
  readonly assetId: string;
  readonly hierarchyId: string;
  readonly traversalDirection: string;
  readonly nextToken: string;
  readonly maxResults: number;
}
export interface ListDashboards {
  readonly projectId: string;
  readonly nextToken: string;
  readonly maxResults: number;
}
export interface ListGateways {
  readonly nextToken: string;
  readonly maxResults: number;
}
export interface ListPortals {
  readonly nextToken: string;
  readonly maxResults: number;
}
export interface ListProjectAssets {
  readonly projectId: string;
  readonly nextToken: string;
  readonly maxResults: number;
}
export interface ListProjects {
  readonly portalId: string;
  readonly nextToken: string;
  readonly maxResults: number;
}
export interface ListTagsForResource {
  readonly resourceArn: string;
}
export interface ListTimeSeries {
  readonly nextToken: string;
  readonly maxResults: number;
  readonly assetId: string;
  readonly aliasPrefix: string;
  readonly timeSeriesType: string;
}
export interface PutDefaultEncryptionConfiguration {
  readonly encryptionType: string;
  readonly kmsKeyId: string;
}
export interface PutLoggingOptions {
  readonly loggingOptions: LoggingOptions;
}
export interface PutStorageConfiguration {
  readonly storageType: string;
  readonly multiLayerStorage: MultiLayerStorage;
  readonly disassociatedDataStorage: string;
  readonly retentionPeriod: RetentionPeriod;
}
export interface TagResource {
  readonly resourceArn: string;
  readonly tags: {[key: string]: any};
}
export interface UntagResource {
  readonly resourceArn: string;
  readonly tagKeys: [];
}
export interface UpdateAccessPolicy {
  readonly accessPolicyId: string;
  readonly accessPolicyIdentity: Identity;
  readonly accessPolicyResource: Resource;
  readonly accessPolicyPermission: string;
  readonly clientToken: string;
}
export interface UpdateAsset {
  readonly assetId: string;
  readonly assetName: string;
  readonly clientToken: string;
}
export interface UpdateAssetModel {
  readonly assetModelId: string;
  readonly assetModelName: string;
  readonly assetModelDescription: string;
  readonly assetModelProperties: [];
  readonly assetModelHierarchies: [];
  readonly assetModelCompositeModels: [];
  readonly clientToken: string;
}
export interface UpdateAssetProperty {
  readonly assetId: string;
  readonly propertyId: string;
  readonly propertyAlias: string;
  readonly propertyNotificationState: string;
  readonly clientToken: string;
}
export interface UpdateDashboard {
  readonly dashboardId: string;
  readonly dashboardName: string;
  readonly dashboardDescription: string;
  readonly dashboardDefinition: string;
  readonly clientToken: string;
}
export interface UpdateGateway {
  readonly gatewayId: string;
  readonly gatewayName: string;
}
export interface UpdateGatewayCapabilityConfiguration {
  readonly gatewayId: string;
  readonly capabilityNamespace: string;
  readonly capabilityConfiguration: string;
}
export interface UpdatePortal {
  readonly portalId: string;
  readonly portalName: string;
  readonly portalDescription: string;
  readonly portalContactEmail: string;
  readonly portalLogoImage: Image;
  readonly roleArn: string;
  readonly clientToken: string;
  readonly notificationSenderEmail: string;
  readonly alarms: Alarms;
}
export interface UpdateProject {
  readonly projectId: string;
  readonly projectName: string;
  readonly projectDescription: string;
  readonly clientToken: string;
}



interface AccessPolicySummary {
  readonly id: string;
  readonly identity: Identity;
  readonly resource: Resource;
  readonly permission: string;
  readonly creationDate: Date;
  readonly lastUpdateDate: Date;
}

interface AggregatedValue {
  readonly timestamp: Date;
  readonly quality: string;
  readonly value: Aggregates;
}

interface Aggregates {
  readonly average: unknown;
  readonly count: unknown;
  readonly maximum: unknown;
  readonly minimum: unknown;
  readonly sum: unknown;
  readonly standardDeviation: unknown;
}

interface Alarms {
  readonly alarmRoleArn: string;
  readonly notificationLambdaArn: string;
}

interface AssetCompositeModel {
  readonly name: string;
  readonly description: string;
  readonly type: string;
  readonly properties: [];
}

interface AssetErrorDetails {
  readonly assetId: string;
  readonly code: string;
  readonly message: string;
}

interface AssetHierarchy {
  readonly id: string;
  readonly name: string;
}

interface AssetHierarchyInfo {
  readonly parentAssetId: string;
  readonly childAssetId: string;
}

interface AssetModelCompositeModel {
  readonly name: string;
  readonly description: string;
  readonly type: string;
  readonly properties: [];
}

interface AssetModelCompositeModelDefinition {
  readonly name: string;
  readonly description: string;
  readonly type: string;
  readonly properties: [];
}

interface AssetModelHierarchy {
  readonly id: string;
  readonly name: string;
  readonly childAssetModelId: string;
}

interface AssetModelHierarchyDefinition {
  readonly name: string;
  readonly childAssetModelId: string;
}

interface AssetModelProperty {
  readonly id: string;
  readonly name: string;
  readonly dataType: string;
  readonly dataTypeSpec: string;
  readonly unit: string;
  readonly type: PropertyType;
}

interface AssetModelPropertyDefinition {
  readonly name: string;
  readonly dataType: string;
  readonly dataTypeSpec: string;
  readonly unit: string;
  readonly type: PropertyType;
}

interface AssetModelStatus {
  readonly state: string;
  readonly error: ErrorDetails;
}

interface AssetModelSummary {
  readonly id: string;
  readonly arn: string;
  readonly name: string;
  readonly description: string;
  readonly creationDate: Date;
  readonly lastUpdateDate: Date;
  readonly status: AssetModelStatus;
}

interface AssetProperty {
  readonly id: string;
  readonly name: string;
  readonly alias: string;
  readonly notification: PropertyNotification;
  readonly dataType: string;
  readonly dataTypeSpec: string;
  readonly unit: string;
}

interface AssetPropertyValue {
  readonly value: Variant;
  readonly timestamp: TimeInNanos;
  readonly quality: string;
}

interface AssetRelationshipSummary {
  readonly hierarchyInfo: AssetHierarchyInfo;
  readonly relationshipType: string;
}

interface AssetStatus {
  readonly state: string;
  readonly error: ErrorDetails;
}

interface AssetSummary {
  readonly id: string;
  readonly arn: string;
  readonly name: string;
  readonly assetModelId: string;
  readonly creationDate: Date;
  readonly lastUpdateDate: Date;
  readonly status: AssetStatus;
  readonly hierarchies: [];
}

interface AssociateAssetsRequest {
  readonly assetId: string;
  readonly hierarchyId: string;
  readonly childAssetId: string;
  readonly clientToken: string;
}

interface AssociateTimeSeriesToAssetPropertyRequest {
  readonly alias: string;
  readonly assetId: string;
  readonly propertyId: string;
  readonly clientToken: string;
}

interface AssociatedAssetsSummary {
  readonly id: string;
  readonly arn: string;
  readonly name: string;
  readonly assetModelId: string;
  readonly creationDate: Date;
  readonly lastUpdateDate: Date;
  readonly status: AssetStatus;
  readonly hierarchies: [];
}

interface Attribute {
  readonly defaultValue: string;
}

interface BatchAssociateProjectAssetsRequest {
  readonly projectId: string;
  readonly assetIds: [];
  readonly clientToken: string;
}

interface BatchAssociateProjectAssetsResponse {
  readonly errors: [];
}

interface BatchDisassociateProjectAssetsRequest {
  readonly projectId: string;
  readonly assetIds: [];
  readonly clientToken: string;
}

interface BatchDisassociateProjectAssetsResponse {
  readonly errors: [];
}

interface BatchPutAssetPropertyError {
  readonly errorCode: string;
  readonly errorMessage: string;
  readonly timestamps: [];
}

interface BatchPutAssetPropertyErrorEntry {
  readonly entryId: string;
  readonly errors: [];
}

interface BatchPutAssetPropertyValueRequest {
  readonly entries: [];
}

interface BatchPutAssetPropertyValueResponse {
  readonly errorEntries: [];
}

interface CompositeModelProperty {
  readonly name: string;
  readonly type: string;
  readonly assetProperty: Property;
}

interface ConfigurationErrorDetails {
  readonly code: string;
  readonly message: string;
}

interface ConfigurationStatus {
  readonly state: string;
  readonly error: ConfigurationErrorDetails;
}

interface ConflictingOperationException {
  readonly message: string;
  readonly resourceId: string;
  readonly resourceArn: string;
}

interface CreateAccessPolicyRequest {
  readonly accessPolicyIdentity: Identity;
  readonly accessPolicyResource: Resource;
  readonly accessPolicyPermission: string;
  readonly clientToken: string;
  readonly tags: {[key: string]: any};
}

interface CreateAccessPolicyResponse {
  readonly accessPolicyId: string;
  readonly accessPolicyArn: string;
}

interface CreateAssetModelRequest {
  readonly assetModelName: string;
  readonly assetModelDescription: string;
  readonly assetModelProperties: [];
  readonly assetModelHierarchies: [];
  readonly assetModelCompositeModels: [];
  readonly clientToken: string;
  readonly tags: {[key: string]: any};
}

interface CreateAssetModelResponse {
  readonly assetModelId: string;
  readonly assetModelArn: string;
  readonly assetModelStatus: AssetModelStatus;
}

interface CreateAssetRequest {
  readonly assetName: string;
  readonly assetModelId: string;
  readonly clientToken: string;
  readonly tags: {[key: string]: any};
}

interface CreateAssetResponse {
  readonly assetId: string;
  readonly assetArn: string;
  readonly assetStatus: AssetStatus;
}

interface CreateDashboardRequest {
  readonly projectId: string;
  readonly dashboardName: string;
  readonly dashboardDescription: string;
  readonly dashboardDefinition: string;
  readonly clientToken: string;
  readonly tags: {[key: string]: any};
}

interface CreateDashboardResponse {
  readonly dashboardId: string;
  readonly dashboardArn: string;
}

interface CreateGatewayRequest {
  readonly gatewayName: string;
  readonly gatewayPlatform: GatewayPlatform;
  readonly tags: {[key: string]: any};
}

interface CreateGatewayResponse {
  readonly gatewayId: string;
  readonly gatewayArn: string;
}

interface CreatePortalRequest {
  readonly portalName: string;
  readonly portalDescription: string;
  readonly portalContactEmail: string;
  readonly clientToken: string;
  readonly portalLogoImageFile: ImageFile;
  readonly roleArn: string;
  readonly tags: {[key: string]: any};
  readonly portalAuthMode: string;
  readonly notificationSenderEmail: string;
  readonly alarms: Alarms;
}

interface CreatePortalResponse {
  readonly portalId: string;
  readonly portalArn: string;
  readonly portalStartUrl: string;
  readonly portalStatus: PortalStatus;
  readonly ssoApplicationId: string;
}

interface CreateProjectRequest {
  readonly portalId: string;
  readonly projectName: string;
  readonly projectDescription: string;
  readonly clientToken: string;
  readonly tags: {[key: string]: any};
}

interface CreateProjectResponse {
  readonly projectId: string;
  readonly projectArn: string;
}

interface CustomerManagedS3Storage {
  readonly s3ResourceArn: string;
  readonly roleArn: string;
}

interface DashboardSummary {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly creationDate: Date;
  readonly lastUpdateDate: Date;
}

interface DeleteAccessPolicyRequest {
  readonly accessPolicyId: string;
  readonly clientToken: string;
}

interface DeleteAccessPolicyResponse {
}

interface DeleteAssetModelRequest {
  readonly assetModelId: string;
  readonly clientToken: string;
}

interface DeleteAssetModelResponse {
  readonly assetModelStatus: AssetModelStatus;
}

interface DeleteAssetRequest {
  readonly assetId: string;
  readonly clientToken: string;
}

interface DeleteAssetResponse {
  readonly assetStatus: AssetStatus;
}

interface DeleteDashboardRequest {
  readonly dashboardId: string;
  readonly clientToken: string;
}

interface DeleteDashboardResponse {
}

interface DeleteGatewayRequest {
  readonly gatewayId: string;
}

interface DeletePortalRequest {
  readonly portalId: string;
  readonly clientToken: string;
}

interface DeletePortalResponse {
  readonly portalStatus: PortalStatus;
}

interface DeleteProjectRequest {
  readonly projectId: string;
  readonly clientToken: string;
}

interface DeleteProjectResponse {
}

interface DeleteTimeSeriesRequest {
  readonly alias: string;
  readonly assetId: string;
  readonly propertyId: string;
  readonly clientToken: string;
}

interface DescribeAccessPolicyRequest {
  readonly accessPolicyId: string;
}

interface DescribeAccessPolicyResponse {
  readonly accessPolicyId: string;
  readonly accessPolicyArn: string;
  readonly accessPolicyIdentity: Identity;
  readonly accessPolicyResource: Resource;
  readonly accessPolicyPermission: string;
  readonly accessPolicyCreationDate: Date;
  readonly accessPolicyLastUpdateDate: Date;
}

interface DescribeAssetModelRequest {
  readonly assetModelId: string;
}

interface DescribeAssetModelResponse {
  readonly assetModelId: string;
  readonly assetModelArn: string;
  readonly assetModelName: string;
  readonly assetModelDescription: string;
  readonly assetModelProperties: [];
  readonly assetModelHierarchies: [];
  readonly assetModelCompositeModels: [];
  readonly assetModelCreationDate: Date;
  readonly assetModelLastUpdateDate: Date;
  readonly assetModelStatus: AssetModelStatus;
}

interface DescribeAssetPropertyRequest {
  readonly assetId: string;
  readonly propertyId: string;
}

interface DescribeAssetPropertyResponse {
  readonly assetId: string;
  readonly assetName: string;
  readonly assetModelId: string;
  readonly assetProperty: Property;
  readonly compositeModel: CompositeModelProperty;
}

interface DescribeAssetRequest {
  readonly assetId: string;
}

interface DescribeAssetResponse {
  readonly assetId: string;
  readonly assetArn: string;
  readonly assetName: string;
  readonly assetModelId: string;
  readonly assetProperties: [];
  readonly assetHierarchies: [];
  readonly assetCompositeModels: [];
  readonly assetCreationDate: Date;
  readonly assetLastUpdateDate: Date;
  readonly assetStatus: AssetStatus;
}

interface DescribeDashboardRequest {
  readonly dashboardId: string;
}

interface DescribeDashboardResponse {
  readonly dashboardId: string;
  readonly dashboardArn: string;
  readonly dashboardName: string;
  readonly projectId: string;
  readonly dashboardDescription: string;
  readonly dashboardDefinition: string;
  readonly dashboardCreationDate: Date;
  readonly dashboardLastUpdateDate: Date;
}

interface DescribeDefaultEncryptionConfigurationRequest {
}

interface DescribeDefaultEncryptionConfigurationResponse {
  readonly encryptionType: string;
  readonly kmsKeyArn: string;
  readonly configurationStatus: ConfigurationStatus;
}

interface DescribeGatewayCapabilityConfigurationRequest {
  readonly gatewayId: string;
  readonly capabilityNamespace: string;
}

interface DescribeGatewayCapabilityConfigurationResponse {
  readonly gatewayId: string;
  readonly capabilityNamespace: string;
  readonly capabilityConfiguration: string;
  readonly capabilitySyncStatus: string;
}

interface DescribeGatewayRequest {
  readonly gatewayId: string;
}

interface DescribeGatewayResponse {
  readonly gatewayId: string;
  readonly gatewayName: string;
  readonly gatewayArn: string;
  readonly gatewayPlatform: GatewayPlatform;
  readonly gatewayCapabilitySummaries: [];
  readonly creationDate: Date;
  readonly lastUpdateDate: Date;
}

interface DescribeLoggingOptionsRequest {
}

interface DescribeLoggingOptionsResponse {
  readonly loggingOptions: LoggingOptions;
}

interface DescribePortalRequest {
  readonly portalId: string;
}

interface DescribePortalResponse {
  readonly portalId: string;
  readonly portalArn: string;
  readonly portalName: string;
  readonly portalDescription: string;
  readonly portalClientId: string;
  readonly portalStartUrl: string;
  readonly portalContactEmail: string;
  readonly portalStatus: PortalStatus;
  readonly portalCreationDate: Date;
  readonly portalLastUpdateDate: Date;
  readonly portalLogoImageLocation: ImageLocation;
  readonly roleArn: string;
  readonly portalAuthMode: string;
  readonly notificationSenderEmail: string;
  readonly alarms: Alarms;
}

interface DescribeProjectRequest {
  readonly projectId: string;
}

interface DescribeProjectResponse {
  readonly projectId: string;
  readonly projectArn: string;
  readonly projectName: string;
  readonly portalId: string;
  readonly projectDescription: string;
  readonly projectCreationDate: Date;
  readonly projectLastUpdateDate: Date;
}

interface DescribeStorageConfigurationRequest {
}

interface DescribeStorageConfigurationResponse {
  readonly storageType: string;
  readonly multiLayerStorage: MultiLayerStorage;
  readonly disassociatedDataStorage: string;
  readonly retentionPeriod: RetentionPeriod;
  readonly configurationStatus: ConfigurationStatus;
  readonly lastUpdateDate: Date;
}

interface DescribeTimeSeriesRequest {
  readonly alias: string;
  readonly assetId: string;
  readonly propertyId: string;
}

interface DescribeTimeSeriesResponse {
  readonly assetId: string;
  readonly propertyId: string;
  readonly alias: string;
  readonly timeSeriesId: string;
  readonly dataType: string;
  readonly dataTypeSpec: string;
  readonly timeSeriesCreationDate: Date;
  readonly timeSeriesLastUpdateDate: Date;
}

interface DetailedError {
  readonly code: string;
  readonly message: string;
}

interface DisassociateAssetsRequest {
  readonly assetId: string;
  readonly hierarchyId: string;
  readonly childAssetId: string;
  readonly clientToken: string;
}

interface DisassociateTimeSeriesFromAssetPropertyRequest {
  readonly alias: string;
  readonly assetId: string;
  readonly propertyId: string;
  readonly clientToken: string;
}

interface ErrorDetails {
  readonly code: string;
  readonly message: string;
  readonly details: [];
}

interface ExpressionVariable {
  readonly name: string;
  readonly value: VariableValue;
}

interface ForwardingConfig {
  readonly state: string;
}

interface GatewayCapabilitySummary {
  readonly capabilityNamespace: string;
  readonly capabilitySyncStatus: string;
}

interface GatewayPlatform {
  readonly greengrass: Greengrass;
  readonly greengrassV2: GreengrassV2;
}

interface GatewaySummary {
  readonly gatewayId: string;
  readonly gatewayName: string;
  readonly gatewayPlatform: GatewayPlatform;
  readonly gatewayCapabilitySummaries: [];
  readonly creationDate: Date;
  readonly lastUpdateDate: Date;
}

interface GetAssetPropertyAggregatesRequest {
  readonly assetId: string;
  readonly propertyId: string;
  readonly propertyAlias: string;
  readonly aggregateTypes: [];
  readonly resolution: string;
  readonly qualities: [];
  readonly startDate: Date;
  readonly endDate: Date;
  readonly timeOrdering: string;
  readonly nextToken: string;
  readonly maxResults: number;
}

interface GetAssetPropertyAggregatesResponse {
  readonly aggregatedValues: [];
  readonly nextToken: string;
}

interface GetAssetPropertyValueHistoryRequest {
  readonly assetId: string;
  readonly propertyId: string;
  readonly propertyAlias: string;
  readonly startDate: Date;
  readonly endDate: Date;
  readonly qualities: [];
  readonly timeOrdering: string;
  readonly nextToken: string;
  readonly maxResults: number;
}

interface GetAssetPropertyValueHistoryResponse {
  readonly assetPropertyValueHistory: [];
  readonly nextToken: string;
}

interface GetAssetPropertyValueRequest {
  readonly assetId: string;
  readonly propertyId: string;
  readonly propertyAlias: string;
}

interface GetAssetPropertyValueResponse {
  readonly propertyValue: AssetPropertyValue;
}

interface GetInterpolatedAssetPropertyValuesRequest {
  readonly assetId: string;
  readonly propertyId: string;
  readonly propertyAlias: string;
  readonly startTimeInSeconds: number;
  readonly startTimeOffsetInNanos: number;
  readonly endTimeInSeconds: number;
  readonly endTimeOffsetInNanos: number;
  readonly quality: string;
  readonly intervalInSeconds: number;
  readonly nextToken: string;
  readonly maxResults: number;
  readonly type: string;
  readonly intervalWindowInSeconds: number;
}

interface GetInterpolatedAssetPropertyValuesResponse {
  readonly interpolatedAssetPropertyValues: [];
  readonly nextToken: string;
}

interface Greengrass {
  readonly groupArn: string;
}

interface GreengrassV2 {
  readonly coreDeviceThingName: string;
}

interface GroupIdentity {
  readonly id: string;
}

interface IAMRoleIdentity {
  readonly arn: string;
}

interface IAMUserIdentity {
  readonly arn: string;
}

interface Identity {
  readonly user: UserIdentity;
  readonly group: GroupIdentity;
  readonly iamUser: IAMUserIdentity;
  readonly iamRole: IAMRoleIdentity;
}

interface Image {
  readonly id: string;
  readonly file: ImageFile;
}

interface ImageFile {
  readonly data: unknown;
  readonly type: string;
}

interface ImageLocation {
  readonly id: string;
  readonly url: string;
}

interface InternalFailureException {
  readonly message: string;
}

interface InterpolatedAssetPropertyValue {
  readonly timestamp: TimeInNanos;
  readonly value: Variant;
}

interface InvalidRequestException {
  readonly message: string;
}

interface LimitExceededException {
  readonly message: string;
}

interface ListAccessPoliciesRequest {
  readonly identityType: string;
  readonly identityId: string;
  readonly resourceType: string;
  readonly resourceId: string;
  readonly iamArn: string;
  readonly nextToken: string;
  readonly maxResults: number;
}

interface ListAccessPoliciesResponse {
  readonly accessPolicySummaries: [];
  readonly nextToken: string;
}

interface ListAssetModelsRequest {
  readonly nextToken: string;
  readonly maxResults: number;
}

interface ListAssetModelsResponse {
  readonly assetModelSummaries: [];
  readonly nextToken: string;
}

interface ListAssetRelationshipsRequest {
  readonly assetId: string;
  readonly traversalType: string;
  readonly nextToken: string;
  readonly maxResults: number;
}

interface ListAssetRelationshipsResponse {
  readonly assetRelationshipSummaries: [];
  readonly nextToken: string;
}

interface ListAssetsRequest {
  readonly nextToken: string;
  readonly maxResults: number;
  readonly assetModelId: string;
  readonly filter: string;
}

interface ListAssetsResponse {
  readonly assetSummaries: [];
  readonly nextToken: string;
}

interface ListAssociatedAssetsRequest {
  readonly assetId: string;
  readonly hierarchyId: string;
  readonly traversalDirection: string;
  readonly nextToken: string;
  readonly maxResults: number;
}

interface ListAssociatedAssetsResponse {
  readonly assetSummaries: [];
  readonly nextToken: string;
}

interface ListDashboardsRequest {
  readonly projectId: string;
  readonly nextToken: string;
  readonly maxResults: number;
}

interface ListDashboardsResponse {
  readonly dashboardSummaries: [];
  readonly nextToken: string;
}

interface ListGatewaysRequest {
  readonly nextToken: string;
  readonly maxResults: number;
}

interface ListGatewaysResponse {
  readonly gatewaySummaries: [];
  readonly nextToken: string;
}

interface ListPortalsRequest {
  readonly nextToken: string;
  readonly maxResults: number;
}

interface ListPortalsResponse {
  readonly portalSummaries: [];
  readonly nextToken: string;
}

interface ListProjectAssetsRequest {
  readonly projectId: string;
  readonly nextToken: string;
  readonly maxResults: number;
}

interface ListProjectAssetsResponse {
  readonly assetIds: [];
  readonly nextToken: string;
}

interface ListProjectsRequest {
  readonly portalId: string;
  readonly nextToken: string;
  readonly maxResults: number;
}

interface ListProjectsResponse {
  readonly projectSummaries: [];
  readonly nextToken: string;
}

interface ListTagsForResourceRequest {
  readonly resourceArn: string;
}

interface ListTagsForResourceResponse {
  readonly tags: {[key: string]: any};
}

interface ListTimeSeriesRequest {
  readonly nextToken: string;
  readonly maxResults: number;
  readonly assetId: string;
  readonly aliasPrefix: string;
  readonly timeSeriesType: string;
}

interface ListTimeSeriesResponse {
  readonly TimeSeriesSummaries: [];
  readonly nextToken: string;
}

interface LoggingOptions {
  readonly level: string;
}

interface Measurement {
  readonly processingConfig: MeasurementProcessingConfig;
}

interface MeasurementProcessingConfig {
  readonly forwardingConfig: ForwardingConfig;
}

interface Metric {
  readonly expression: string;
  readonly variables: [];
  readonly window: MetricWindow;
  readonly processingConfig: MetricProcessingConfig;
}

interface MetricProcessingConfig {
  readonly computeLocation: string;
}

interface MetricWindow {
  readonly tumbling: TumblingWindow;
}

interface MonitorErrorDetails {
  readonly code: string;
  readonly message: string;
}

interface MultiLayerStorage {
  readonly customerManagedS3Storage: CustomerManagedS3Storage;
}

interface PortalResource {
  readonly id: string;
}

interface PortalStatus {
  readonly state: string;
  readonly error: MonitorErrorDetails;
}

interface PortalSummary {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly startUrl: string;
  readonly creationDate: Date;
  readonly lastUpdateDate: Date;
  readonly roleArn: string;
  readonly status: PortalStatus;
}

interface ProjectResource {
  readonly id: string;
}

interface ProjectSummary {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly creationDate: Date;
  readonly lastUpdateDate: Date;
}

interface Property {
  readonly id: string;
  readonly name: string;
  readonly alias: string;
  readonly notification: PropertyNotification;
  readonly dataType: string;
  readonly unit: string;
  readonly type: PropertyType;
}

interface PropertyNotification {
  readonly topic: string;
  readonly state: string;
}

interface PropertyType {
  readonly attribute: Attribute;
  readonly measurement: Measurement;
  readonly transform: Transform;
  readonly metric: Metric;
}

interface PutAssetPropertyValueEntry {
  readonly entryId: string;
  readonly assetId: string;
  readonly propertyId: string;
  readonly propertyAlias: string;
  readonly propertyValues: [];
}

interface PutDefaultEncryptionConfigurationRequest {
  readonly encryptionType: string;
  readonly kmsKeyId: string;
}

interface PutDefaultEncryptionConfigurationResponse {
  readonly encryptionType: string;
  readonly kmsKeyArn: string;
  readonly configurationStatus: ConfigurationStatus;
}

interface PutLoggingOptionsRequest {
  readonly loggingOptions: LoggingOptions;
}

interface PutLoggingOptionsResponse {
}

interface PutStorageConfigurationRequest {
  readonly storageType: string;
  readonly multiLayerStorage: MultiLayerStorage;
  readonly disassociatedDataStorage: string;
  readonly retentionPeriod: RetentionPeriod;
}

interface PutStorageConfigurationResponse {
  readonly storageType: string;
  readonly multiLayerStorage: MultiLayerStorage;
  readonly disassociatedDataStorage: string;
  readonly retentionPeriod: RetentionPeriod;
  readonly configurationStatus: ConfigurationStatus;
}

interface Resource {
  readonly portal: PortalResource;
  readonly project: ProjectResource;
}

interface ResourceAlreadyExistsException {
  readonly message: string;
  readonly resourceId: string;
  readonly resourceArn: string;
}

interface ResourceNotFoundException {
  readonly message: string;
}

interface RetentionPeriod {
  readonly numberOfDays: number;
  readonly unlimited: boolean;
}

interface ServiceUnavailableException {
  readonly message: string;
}

interface TagResourceRequest {
  readonly resourceArn: string;
  readonly tags: {[key: string]: any};
}

interface TagResourceResponse {
}

interface ThrottlingException {
  readonly message: string;
}

interface TimeInNanos {
  readonly timeInSeconds: number;
  readonly offsetInNanos: number;
}

interface TimeSeriesSummary {
  readonly assetId: string;
  readonly propertyId: string;
  readonly alias: string;
  readonly timeSeriesId: string;
  readonly dataType: string;
  readonly dataTypeSpec: string;
  readonly timeSeriesCreationDate: Date;
  readonly timeSeriesLastUpdateDate: Date;
}

interface TooManyTagsException {
  readonly message: string;
  readonly resourceName: string;
}

interface Transform {
  readonly expression: string;
  readonly variables: [];
  readonly processingConfig: TransformProcessingConfig;
}

interface TransformProcessingConfig {
  readonly computeLocation: string;
  readonly forwardingConfig: ForwardingConfig;
}

interface TumblingWindow {
  readonly interval: string;
  readonly offset: string;
}

interface UnauthorizedException {
  readonly message: string;
}

interface UntagResourceRequest {
  readonly resourceArn: string;
  readonly tagKeys: [];
}

interface UntagResourceResponse {
}

interface UpdateAccessPolicyRequest {
  readonly accessPolicyId: string;
  readonly accessPolicyIdentity: Identity;
  readonly accessPolicyResource: Resource;
  readonly accessPolicyPermission: string;
  readonly clientToken: string;
}

interface UpdateAccessPolicyResponse {
}

interface UpdateAssetModelRequest {
  readonly assetModelId: string;
  readonly assetModelName: string;
  readonly assetModelDescription: string;
  readonly assetModelProperties: [];
  readonly assetModelHierarchies: [];
  readonly assetModelCompositeModels: [];
  readonly clientToken: string;
}

interface UpdateAssetModelResponse {
  readonly assetModelStatus: AssetModelStatus;
}

interface UpdateAssetPropertyRequest {
  readonly assetId: string;
  readonly propertyId: string;
  readonly propertyAlias: string;
  readonly propertyNotificationState: string;
  readonly clientToken: string;
}

interface UpdateAssetRequest {
  readonly assetId: string;
  readonly assetName: string;
  readonly clientToken: string;
}

interface UpdateAssetResponse {
  readonly assetStatus: AssetStatus;
}

interface UpdateDashboardRequest {
  readonly dashboardId: string;
  readonly dashboardName: string;
  readonly dashboardDescription: string;
  readonly dashboardDefinition: string;
  readonly clientToken: string;
}

interface UpdateDashboardResponse {
}

interface UpdateGatewayCapabilityConfigurationRequest {
  readonly gatewayId: string;
  readonly capabilityNamespace: string;
  readonly capabilityConfiguration: string;
}

interface UpdateGatewayCapabilityConfigurationResponse {
  readonly capabilityNamespace: string;
  readonly capabilitySyncStatus: string;
}

interface UpdateGatewayRequest {
  readonly gatewayId: string;
  readonly gatewayName: string;
}

interface UpdatePortalRequest {
  readonly portalId: string;
  readonly portalName: string;
  readonly portalDescription: string;
  readonly portalContactEmail: string;
  readonly portalLogoImage: Image;
  readonly roleArn: string;
  readonly clientToken: string;
  readonly notificationSenderEmail: string;
  readonly alarms: Alarms;
}

interface UpdatePortalResponse {
  readonly portalStatus: PortalStatus;
}

interface UpdateProjectRequest {
  readonly projectId: string;
  readonly projectName: string;
  readonly projectDescription: string;
  readonly clientToken: string;
}

interface UpdateProjectResponse {
}

interface UserIdentity {
  readonly id: string;
}

interface VariableValue {
  readonly propertyId: string;
  readonly hierarchyId: string;
}

interface Variant {
  readonly stringValue: string;
  readonly integerValue: number;
  readonly doubleValue: unknown;
  readonly booleanValue: boolean;
}
