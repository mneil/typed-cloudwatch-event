/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface CreateApp {
  readonly name: string;
  readonly description?: string;
  readonly repository?: string;
  readonly platform?: string;
  readonly iamServiceRoleArn?: string;
  readonly oauthToken?: string;
  readonly accessToken?: string;
  readonly environmentVariables?: {[key: string]: any};
  readonly enableBranchAutoBuild?: boolean;
  readonly enableBranchAutoDeletion?: boolean;
  readonly enableBasicAuth?: boolean;
  readonly basicAuthCredentials?: string;
  readonly customRules?: [];
  readonly tags?: {[key: string]: any};
  readonly buildSpec?: string;
  readonly customHeaders?: string;
  readonly enableAutoBranchCreation?: boolean;
  readonly autoBranchCreationPatterns?: [];
  readonly autoBranchCreationConfig?: AutoBranchCreationConfig;
}
export interface CreateBackendEnvironment {
  readonly appId: string;
  readonly environmentName: string;
  readonly stackName?: string;
  readonly deploymentArtifacts?: string;
}
export interface CreateBranch {
  readonly appId: string;
  readonly branchName: string;
  readonly description?: string;
  readonly stage?: string;
  readonly framework?: string;
  readonly enableNotification?: boolean;
  readonly enableAutoBuild?: boolean;
  readonly environmentVariables?: {[key: string]: any};
  readonly basicAuthCredentials?: string;
  readonly enableBasicAuth?: boolean;
  readonly enablePerformanceMode?: boolean;
  readonly tags?: {[key: string]: any};
  readonly buildSpec?: string;
  readonly ttl?: string;
  readonly displayName?: string;
  readonly enablePullRequestPreview?: boolean;
  readonly pullRequestEnvironmentName?: string;
  readonly backendEnvironmentArn?: string;
}
export interface CreateDeployment {
  readonly appId: string;
  readonly branchName: string;
  readonly fileMap?: {[key: string]: any};
}
export interface CreateDomainAssociation {
  readonly appId: string;
  readonly domainName: string;
  readonly enableAutoSubDomain?: boolean;
  readonly subDomainSettings: [];
  readonly autoSubDomainCreationPatterns?: [];
  readonly autoSubDomainIAMRole?: string;
}
export interface CreateWebhook {
  readonly appId: string;
  readonly branchName: string;
  readonly description?: string;
}
export interface DeleteApp {
  readonly appId: string;
}
export interface DeleteBackendEnvironment {
  readonly appId: string;
  readonly environmentName: string;
}
export interface DeleteBranch {
  readonly appId: string;
  readonly branchName: string;
}
export interface DeleteDomainAssociation {
  readonly appId: string;
  readonly domainName: string;
}
export interface DeleteJob {
  readonly appId: string;
  readonly branchName: string;
  readonly jobId: string;
}
export interface DeleteWebhook {
  readonly webhookId: string;
}
export interface GenerateAccessLogs {
  readonly startTime?: Date;
  readonly endTime?: Date;
  readonly domainName: string;
  readonly appId: string;
}
export interface GetApp {
  readonly appId: string;
}
export interface GetArtifactUrl {
  readonly artifactId: string;
}
export interface GetBackendEnvironment {
  readonly appId: string;
  readonly environmentName: string;
}
export interface GetBranch {
  readonly appId: string;
  readonly branchName: string;
}
export interface GetDomainAssociation {
  readonly appId: string;
  readonly domainName: string;
}
export interface GetJob {
  readonly appId: string;
  readonly branchName: string;
  readonly jobId: string;
}
export interface GetWebhook {
  readonly webhookId: string;
}
export interface ListApps {
  readonly nextToken?: string;
  readonly maxResults?: number;
}
export interface ListArtifacts {
  readonly appId: string;
  readonly branchName: string;
  readonly jobId: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}
export interface ListBackendEnvironments {
  readonly appId: string;
  readonly environmentName?: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}
export interface ListBranches {
  readonly appId: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}
export interface ListDomainAssociations {
  readonly appId: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}
export interface ListJobs {
  readonly appId: string;
  readonly branchName: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}
export interface ListTagsForResource {
  readonly resourceArn: string;
}
export interface ListWebhooks {
  readonly appId: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}
export interface StartDeployment {
  readonly appId: string;
  readonly branchName: string;
  readonly jobId?: string;
  readonly sourceUrl?: string;
}
export interface StartJob {
  readonly appId: string;
  readonly branchName: string;
  readonly jobId?: string;
  readonly jobType: string;
  readonly jobReason?: string;
  readonly commitId?: string;
  readonly commitMessage?: string;
  readonly commitTime?: Date;
}
export interface StopJob {
  readonly appId: string;
  readonly branchName: string;
  readonly jobId: string;
}
export interface TagResource {
  readonly resourceArn: string;
  readonly tags: {[key: string]: any};
}
export interface UntagResource {
  readonly resourceArn: string;
  readonly tagKeys: [];
}
export interface UpdateApp {
  readonly appId: string;
  readonly name?: string;
  readonly description?: string;
  readonly platform?: string;
  readonly iamServiceRoleArn?: string;
  readonly environmentVariables?: {[key: string]: any};
  readonly enableBranchAutoBuild?: boolean;
  readonly enableBranchAutoDeletion?: boolean;
  readonly enableBasicAuth?: boolean;
  readonly basicAuthCredentials?: string;
  readonly customRules?: [];
  readonly buildSpec?: string;
  readonly customHeaders?: string;
  readonly enableAutoBranchCreation?: boolean;
  readonly autoBranchCreationPatterns?: [];
  readonly autoBranchCreationConfig?: AutoBranchCreationConfig;
  readonly repository?: string;
  readonly oauthToken?: string;
  readonly accessToken?: string;
}
export interface UpdateBranch {
  readonly appId: string;
  readonly branchName: string;
  readonly description?: string;
  readonly framework?: string;
  readonly stage?: string;
  readonly enableNotification?: boolean;
  readonly enableAutoBuild?: boolean;
  readonly environmentVariables?: {[key: string]: any};
  readonly basicAuthCredentials?: string;
  readonly enableBasicAuth?: boolean;
  readonly enablePerformanceMode?: boolean;
  readonly buildSpec?: string;
  readonly ttl?: string;
  readonly displayName?: string;
  readonly enablePullRequestPreview?: boolean;
  readonly pullRequestEnvironmentName?: string;
  readonly backendEnvironmentArn?: string;
}
export interface UpdateDomainAssociation {
  readonly appId: string;
  readonly domainName: string;
  readonly enableAutoSubDomain?: boolean;
  readonly subDomainSettings: [];
  readonly autoSubDomainCreationPatterns?: [];
  readonly autoSubDomainIAMRole?: string;
}
export interface UpdateWebhook {
  readonly webhookId: string;
  readonly branchName?: string;
  readonly description?: string;
}



interface App {
  readonly appId: string;
  readonly appArn: string;
  readonly name: string;
  readonly tags: {[key: string]: any};
  readonly description: string;
  readonly repository: string;
  readonly platform: string;
  readonly createTime: Date;
  readonly updateTime: Date;
  readonly iamServiceRoleArn: string;
  readonly environmentVariables: {[key: string]: any};
  readonly defaultDomain: string;
  readonly enableBranchAutoBuild: boolean;
  readonly enableBranchAutoDeletion: boolean;
  readonly enableBasicAuth: boolean;
  readonly basicAuthCredentials: string;
  readonly customRules: [];
  readonly productionBranch: ProductionBranch;
  readonly buildSpec: string;
  readonly customHeaders: string;
  readonly enableAutoBranchCreation: boolean;
  readonly autoBranchCreationPatterns: [];
  readonly autoBranchCreationConfig: AutoBranchCreationConfig;
}

interface Artifact {
  readonly artifactFileName: string;
  readonly artifactId: string;
}

interface AutoBranchCreationConfig {
  readonly stage: string;
  readonly framework: string;
  readonly enableAutoBuild: boolean;
  readonly environmentVariables: {[key: string]: any};
  readonly basicAuthCredentials: string;
  readonly enableBasicAuth: boolean;
  readonly enablePerformanceMode: boolean;
  readonly buildSpec: string;
  readonly enablePullRequestPreview: boolean;
  readonly pullRequestEnvironmentName: string;
}

interface BackendEnvironment {
  readonly backendEnvironmentArn: string;
  readonly environmentName: string;
  readonly stackName: string;
  readonly deploymentArtifacts: string;
  readonly createTime: Date;
  readonly updateTime: Date;
}

interface BadRequestException {
  readonly message: string;
}

interface Branch {
  readonly branchArn: string;
  readonly branchName: string;
  readonly description: string;
  readonly tags: {[key: string]: any};
  readonly stage: string;
  readonly displayName: string;
  readonly enableNotification: boolean;
  readonly createTime: Date;
  readonly updateTime: Date;
  readonly environmentVariables: {[key: string]: any};
  readonly enableAutoBuild: boolean;
  readonly customDomains: [];
  readonly framework: string;
  readonly activeJobId: string;
  readonly totalNumberOfJobs: string;
  readonly enableBasicAuth: boolean;
  readonly enablePerformanceMode: boolean;
  readonly thumbnailUrl: string;
  readonly basicAuthCredentials: string;
  readonly buildSpec: string;
  readonly ttl: string;
  readonly associatedResources: [];
  readonly enablePullRequestPreview: boolean;
  readonly pullRequestEnvironmentName: string;
  readonly destinationBranch: string;
  readonly sourceBranch: string;
  readonly backendEnvironmentArn: string;
}

interface CreateAppRequest {
  readonly name: string;
  readonly description: string;
  readonly repository: string;
  readonly platform: string;
  readonly iamServiceRoleArn: string;
  readonly oauthToken: string;
  readonly accessToken: string;
  readonly environmentVariables: {[key: string]: any};
  readonly enableBranchAutoBuild: boolean;
  readonly enableBranchAutoDeletion: boolean;
  readonly enableBasicAuth: boolean;
  readonly basicAuthCredentials: string;
  readonly customRules: [];
  readonly tags: {[key: string]: any};
  readonly buildSpec: string;
  readonly customHeaders: string;
  readonly enableAutoBranchCreation: boolean;
  readonly autoBranchCreationPatterns: [];
  readonly autoBranchCreationConfig: AutoBranchCreationConfig;
}

interface CreateAppResult {
  readonly app: App;
}

interface CreateBackendEnvironmentRequest {
  readonly appId: string;
  readonly environmentName: string;
  readonly stackName: string;
  readonly deploymentArtifacts: string;
}

interface CreateBackendEnvironmentResult {
  readonly backendEnvironment: BackendEnvironment;
}

interface CreateBranchRequest {
  readonly appId: string;
  readonly branchName: string;
  readonly description: string;
  readonly stage: string;
  readonly framework: string;
  readonly enableNotification: boolean;
  readonly enableAutoBuild: boolean;
  readonly environmentVariables: {[key: string]: any};
  readonly basicAuthCredentials: string;
  readonly enableBasicAuth: boolean;
  readonly enablePerformanceMode: boolean;
  readonly tags: {[key: string]: any};
  readonly buildSpec: string;
  readonly ttl: string;
  readonly displayName: string;
  readonly enablePullRequestPreview: boolean;
  readonly pullRequestEnvironmentName: string;
  readonly backendEnvironmentArn: string;
}

interface CreateBranchResult {
  readonly branch: Branch;
}

interface CreateDeploymentRequest {
  readonly appId: string;
  readonly branchName: string;
  readonly fileMap: {[key: string]: any};
}

interface CreateDeploymentResult {
  readonly jobId: string;
  readonly fileUploadUrls: {[key: string]: any};
  readonly zipUploadUrl: string;
}

interface CreateDomainAssociationRequest {
  readonly appId: string;
  readonly domainName: string;
  readonly enableAutoSubDomain: boolean;
  readonly subDomainSettings: [];
  readonly autoSubDomainCreationPatterns: [];
  readonly autoSubDomainIAMRole: string;
}

interface CreateDomainAssociationResult {
  readonly domainAssociation: DomainAssociation;
}

interface CreateWebhookRequest {
  readonly appId: string;
  readonly branchName: string;
  readonly description: string;
}

interface CreateWebhookResult {
  readonly webhook: Webhook;
}

interface CustomRule {
  readonly source: string;
  readonly target: string;
  readonly status: string;
  readonly condition: string;
}

interface DeleteAppRequest {
  readonly appId: string;
}

interface DeleteAppResult {
  readonly app: App;
}

interface DeleteBackendEnvironmentRequest {
  readonly appId: string;
  readonly environmentName: string;
}

interface DeleteBackendEnvironmentResult {
  readonly backendEnvironment: BackendEnvironment;
}

interface DeleteBranchRequest {
  readonly appId: string;
  readonly branchName: string;
}

interface DeleteBranchResult {
  readonly branch: Branch;
}

interface DeleteDomainAssociationRequest {
  readonly appId: string;
  readonly domainName: string;
}

interface DeleteDomainAssociationResult {
  readonly domainAssociation: DomainAssociation;
}

interface DeleteJobRequest {
  readonly appId: string;
  readonly branchName: string;
  readonly jobId: string;
}

interface DeleteJobResult {
  readonly jobSummary: JobSummary;
}

interface DeleteWebhookRequest {
  readonly webhookId: string;
}

interface DeleteWebhookResult {
  readonly webhook: Webhook;
}

interface DependentServiceFailureException {
  readonly message: string;
}

interface DomainAssociation {
  readonly domainAssociationArn: string;
  readonly domainName: string;
  readonly enableAutoSubDomain: boolean;
  readonly autoSubDomainCreationPatterns: [];
  readonly autoSubDomainIAMRole: string;
  readonly domainStatus: string;
  readonly statusReason: string;
  readonly certificateVerificationDNSRecord: string;
  readonly subDomains: [];
}

interface GenerateAccessLogsRequest {
  readonly startTime: Date;
  readonly endTime: Date;
  readonly domainName: string;
  readonly appId: string;
}

interface GenerateAccessLogsResult {
  readonly logUrl: string;
}

interface GetAppRequest {
  readonly appId: string;
}

interface GetAppResult {
  readonly app: App;
}

interface GetArtifactUrlRequest {
  readonly artifactId: string;
}

interface GetArtifactUrlResult {
  readonly artifactId: string;
  readonly artifactUrl: string;
}

interface GetBackendEnvironmentRequest {
  readonly appId: string;
  readonly environmentName: string;
}

interface GetBackendEnvironmentResult {
  readonly backendEnvironment: BackendEnvironment;
}

interface GetBranchRequest {
  readonly appId: string;
  readonly branchName: string;
}

interface GetBranchResult {
  readonly branch: Branch;
}

interface GetDomainAssociationRequest {
  readonly appId: string;
  readonly domainName: string;
}

interface GetDomainAssociationResult {
  readonly domainAssociation: DomainAssociation;
}

interface GetJobRequest {
  readonly appId: string;
  readonly branchName: string;
  readonly jobId: string;
}

interface GetJobResult {
  readonly job: Job;
}

interface GetWebhookRequest {
  readonly webhookId: string;
}

interface GetWebhookResult {
  readonly webhook: Webhook;
}

interface InternalFailureException {
  readonly message: string;
}

interface Job {
  readonly summary: JobSummary;
  readonly steps: [];
}

interface JobSummary {
  readonly jobArn: string;
  readonly jobId: string;
  readonly commitId: string;
  readonly commitMessage: string;
  readonly commitTime: Date;
  readonly startTime: Date;
  readonly status: string;
  readonly endTime: Date;
  readonly jobType: string;
}

interface LimitExceededException {
  readonly message: string;
}

interface ListAppsRequest {
  readonly nextToken: string;
  readonly maxResults: number;
}

interface ListAppsResult {
  readonly apps: [];
  readonly nextToken: string;
}

interface ListArtifactsRequest {
  readonly appId: string;
  readonly branchName: string;
  readonly jobId: string;
  readonly nextToken: string;
  readonly maxResults: number;
}

interface ListArtifactsResult {
  readonly artifacts: [];
  readonly nextToken: string;
}

interface ListBackendEnvironmentsRequest {
  readonly appId: string;
  readonly environmentName: string;
  readonly nextToken: string;
  readonly maxResults: number;
}

interface ListBackendEnvironmentsResult {
  readonly backendEnvironments: [];
  readonly nextToken: string;
}

interface ListBranchesRequest {
  readonly appId: string;
  readonly nextToken: string;
  readonly maxResults: number;
}

interface ListBranchesResult {
  readonly branches: [];
  readonly nextToken: string;
}

interface ListDomainAssociationsRequest {
  readonly appId: string;
  readonly nextToken: string;
  readonly maxResults: number;
}

interface ListDomainAssociationsResult {
  readonly domainAssociations: [];
  readonly nextToken: string;
}

interface ListJobsRequest {
  readonly appId: string;
  readonly branchName: string;
  readonly nextToken: string;
  readonly maxResults: number;
}

interface ListJobsResult {
  readonly jobSummaries: [];
  readonly nextToken: string;
}

interface ListTagsForResourceRequest {
  readonly resourceArn: string;
}

interface ListTagsForResourceResponse {
  readonly tags: {[key: string]: any};
}

interface ListWebhooksRequest {
  readonly appId: string;
  readonly nextToken: string;
  readonly maxResults: number;
}

interface ListWebhooksResult {
  readonly webhooks: [];
  readonly nextToken: string;
}

interface NotFoundException {
  readonly message: string;
}

interface ProductionBranch {
  readonly lastDeployTime: Date;
  readonly status: string;
  readonly thumbnailUrl: string;
  readonly branchName: string;
}

interface ResourceNotFoundException {
  readonly code: string;
  readonly message: string;
}

interface StartDeploymentRequest {
  readonly appId: string;
  readonly branchName: string;
  readonly jobId: string;
  readonly sourceUrl: string;
}

interface StartDeploymentResult {
  readonly jobSummary: JobSummary;
}

interface StartJobRequest {
  readonly appId: string;
  readonly branchName: string;
  readonly jobId: string;
  readonly jobType: string;
  readonly jobReason: string;
  readonly commitId: string;
  readonly commitMessage: string;
  readonly commitTime: Date;
}

interface StartJobResult {
  readonly jobSummary: JobSummary;
}

interface Step {
  readonly stepName: string;
  readonly startTime: Date;
  readonly status: string;
  readonly endTime: Date;
  readonly logUrl: string;
  readonly artifactsUrl: string;
  readonly testArtifactsUrl: string;
  readonly testConfigUrl: string;
  readonly screenshots: {[key: string]: any};
  readonly statusReason: string;
  readonly context: string;
}

interface StopJobRequest {
  readonly appId: string;
  readonly branchName: string;
  readonly jobId: string;
}

interface StopJobResult {
  readonly jobSummary: JobSummary;
}

interface SubDomain {
  readonly subDomainSetting: SubDomainSetting;
  readonly verified: boolean;
  readonly dnsRecord: string;
}

interface SubDomainSetting {
  readonly prefix: string;
  readonly branchName: string;
}

interface TagResourceRequest {
  readonly resourceArn: string;
  readonly tags: {[key: string]: any};
}

interface TagResourceResponse {
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

interface UpdateAppRequest {
  readonly appId: string;
  readonly name: string;
  readonly description: string;
  readonly platform: string;
  readonly iamServiceRoleArn: string;
  readonly environmentVariables: {[key: string]: any};
  readonly enableBranchAutoBuild: boolean;
  readonly enableBranchAutoDeletion: boolean;
  readonly enableBasicAuth: boolean;
  readonly basicAuthCredentials: string;
  readonly customRules: [];
  readonly buildSpec: string;
  readonly customHeaders: string;
  readonly enableAutoBranchCreation: boolean;
  readonly autoBranchCreationPatterns: [];
  readonly autoBranchCreationConfig: AutoBranchCreationConfig;
  readonly repository: string;
  readonly oauthToken: string;
  readonly accessToken: string;
}

interface UpdateAppResult {
  readonly app: App;
}

interface UpdateBranchRequest {
  readonly appId: string;
  readonly branchName: string;
  readonly description: string;
  readonly framework: string;
  readonly stage: string;
  readonly enableNotification: boolean;
  readonly enableAutoBuild: boolean;
  readonly environmentVariables: {[key: string]: any};
  readonly basicAuthCredentials: string;
  readonly enableBasicAuth: boolean;
  readonly enablePerformanceMode: boolean;
  readonly buildSpec: string;
  readonly ttl: string;
  readonly displayName: string;
  readonly enablePullRequestPreview: boolean;
  readonly pullRequestEnvironmentName: string;
  readonly backendEnvironmentArn: string;
}

interface UpdateBranchResult {
  readonly branch: Branch;
}

interface UpdateDomainAssociationRequest {
  readonly appId: string;
  readonly domainName: string;
  readonly enableAutoSubDomain: boolean;
  readonly subDomainSettings: [];
  readonly autoSubDomainCreationPatterns: [];
  readonly autoSubDomainIAMRole: string;
}

interface UpdateDomainAssociationResult {
  readonly domainAssociation: DomainAssociation;
}

interface UpdateWebhookRequest {
  readonly webhookId: string;
  readonly branchName: string;
  readonly description: string;
}

interface UpdateWebhookResult {
  readonly webhook: Webhook;
}

interface Webhook {
  readonly webhookArn: string;
  readonly webhookId: string;
  readonly webhookUrl: string;
  readonly branchName: string;
  readonly description: string;
  readonly createTime: Date;
  readonly updateTime: Date;
}

