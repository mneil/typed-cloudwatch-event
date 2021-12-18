/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface AddTagsToCertificate {
  readonly CertificateArn: string;
  readonly Tags: [];
}

export interface DeleteCertificate {
  readonly CertificateArn: string;
}

export interface DescribeCertificate {
  readonly CertificateArn: string;
}

export interface ExportCertificate {
  readonly CertificateArn: string;
  readonly Passphrase: unknown;
}

export interface GetCertificate {
  readonly CertificateArn: string;
}

export interface ImportCertificate {
  readonly CertificateArn?: string;
  readonly Certificate: unknown;
  readonly PrivateKey: unknown;
  readonly CertificateChain?: unknown;
  readonly Tags?: [];
}

export interface ListCertificates {
  readonly CertificateStatuses?: [];
  readonly Includes?: Filters;
  readonly NextToken?: string;
  readonly MaxItems?: number;
}

export interface ListTagsForCertificate {
  readonly CertificateArn: string;
}

export interface PutAccountConfiguration {
  readonly ExpiryEvents?: ExpiryEventsConfiguration;
  readonly IdempotencyToken: string;
}

export interface RemoveTagsFromCertificate {
  readonly CertificateArn: string;
  readonly Tags: [];
}

export interface RenewCertificate {
  readonly CertificateArn: string;
}

export interface RequestCertificate {
  readonly DomainName: string;
  readonly ValidationMethod?: string;
  readonly SubjectAlternativeNames?: [];
  readonly IdempotencyToken?: string;
  readonly DomainValidationOptions?: [];
  readonly Options?: CertificateOptions;
  readonly CertificateAuthorityArn?: string;
  readonly Tags?: [];
}

export interface ResendValidationEmail {
  readonly CertificateArn: string;
  readonly Domain: string;
  readonly ValidationDomain: string;
}

export interface UpdateCertificateOptions {
  readonly CertificateArn: string;
  readonly Options: CertificateOptions;
}

export interface AccessDeniedException {
  readonly Message?: string;
}

export interface AddTagsToCertificateRequest {
  readonly CertificateArn: string;
  readonly Tags: [];
}

export interface CertificateDetail {
  readonly CertificateArn?: string;
  readonly DomainName?: string;
  readonly SubjectAlternativeNames?: [];
  readonly DomainValidationOptions?: [];
  readonly Serial?: string;
  readonly Subject?: string;
  readonly Issuer?: string;
  readonly CreatedAt?: Date;
  readonly IssuedAt?: Date;
  readonly ImportedAt?: Date;
  readonly Status?: string;
  readonly RevokedAt?: Date;
  readonly RevocationReason?: string;
  readonly NotBefore?: Date;
  readonly NotAfter?: Date;
  readonly KeyAlgorithm?: string;
  readonly SignatureAlgorithm?: string;
  readonly InUseBy?: [];
  readonly FailureReason?: string;
  readonly Type?: string;
  readonly RenewalSummary?: RenewalSummary;
  readonly KeyUsages?: [];
  readonly ExtendedKeyUsages?: [];
  readonly CertificateAuthorityArn?: string;
  readonly RenewalEligibility?: string;
  readonly Options?: CertificateOptions;
}

export interface CertificateOptions {
  readonly CertificateTransparencyLoggingPreference?: string;
}

export interface CertificateSummary {
  readonly CertificateArn?: string;
  readonly DomainName?: string;
}

export interface ConflictException {
  readonly message?: string;
}

export interface DeleteCertificateRequest {
  readonly CertificateArn: string;
}

export interface DescribeCertificateRequest {
  readonly CertificateArn: string;
}

export interface DescribeCertificateResponse {
  readonly Certificate?: CertificateDetail;
}

export interface DomainValidation {
  readonly DomainName: string;
  readonly ValidationEmails?: [];
  readonly ValidationDomain?: string;
  readonly ValidationStatus?: string;
  readonly ResourceRecord?: ResourceRecord;
  readonly ValidationMethod?: string;
}

export interface DomainValidationOption {
  readonly DomainName: string;
  readonly ValidationDomain: string;
}

export interface ExpiryEventsConfiguration {
  readonly DaysBeforeExpiry?: number;
}

export interface ExportCertificateRequest {
  readonly CertificateArn: string;
  readonly Passphrase: unknown;
}

export interface ExportCertificateResponse {
  readonly Certificate?: string;
  readonly CertificateChain?: string;
  readonly PrivateKey?: string;
}

export interface ExtendedKeyUsage {
  readonly Name?: string;
  readonly OID?: string;
}

export interface Filters {
  readonly extendedKeyUsage?: [];
  readonly keyUsage?: [];
  readonly keyTypes?: [];
}

export interface GetAccountConfigurationResponse {
  readonly ExpiryEvents?: ExpiryEventsConfiguration;
}

export interface GetCertificateRequest {
  readonly CertificateArn: string;
}

export interface GetCertificateResponse {
  readonly Certificate?: string;
  readonly CertificateChain?: string;
}

export interface ImportCertificateRequest {
  readonly CertificateArn?: string;
  readonly Certificate: unknown;
  readonly PrivateKey: unknown;
  readonly CertificateChain?: unknown;
  readonly Tags?: [];
}

export interface ImportCertificateResponse {
  readonly CertificateArn?: string;
}

export interface InvalidArgsException {
  readonly message?: string;
}

export interface InvalidArnException {
  readonly message?: string;
}

export interface InvalidDomainValidationOptionsException {
  readonly message?: string;
}

export interface InvalidParameterException {
  readonly message?: string;
}

export interface InvalidStateException {
  readonly message?: string;
}

export interface InvalidTagException {
  readonly message?: string;
}

export interface KeyUsage {
  readonly Name?: string;
}

export interface LimitExceededException {
  readonly message?: string;
}

export interface ListCertificatesRequest {
  readonly CertificateStatuses?: [];
  readonly Includes?: Filters;
  readonly NextToken?: string;
  readonly MaxItems?: number;
}

export interface ListCertificatesResponse {
  readonly NextToken?: string;
  readonly CertificateSummaryList?: [];
}

export interface ListTagsForCertificateRequest {
  readonly CertificateArn: string;
}

export interface ListTagsForCertificateResponse {
  readonly Tags?: [];
}

export interface PutAccountConfigurationRequest {
  readonly ExpiryEvents?: ExpiryEventsConfiguration;
  readonly IdempotencyToken: string;
}

export interface RemoveTagsFromCertificateRequest {
  readonly CertificateArn: string;
  readonly Tags: [];
}

export interface RenewCertificateRequest {
  readonly CertificateArn: string;
}

export interface RenewalSummary {
  readonly RenewalStatus: string;
  readonly DomainValidationOptions: [];
  readonly RenewalStatusReason?: string;
  readonly UpdatedAt: Date;
}

export interface RequestCertificateRequest {
  readonly DomainName: string;
  readonly ValidationMethod?: string;
  readonly SubjectAlternativeNames?: [];
  readonly IdempotencyToken?: string;
  readonly DomainValidationOptions?: [];
  readonly Options?: CertificateOptions;
  readonly CertificateAuthorityArn?: string;
  readonly Tags?: [];
}

export interface RequestCertificateResponse {
  readonly CertificateArn?: string;
}

export interface RequestInProgressException {
  readonly message?: string;
}

export interface ResendValidationEmailRequest {
  readonly CertificateArn: string;
  readonly Domain: string;
  readonly ValidationDomain: string;
}

export interface ResourceInUseException {
  readonly message?: string;
}

export interface ResourceNotFoundException {
  readonly message?: string;
}

export interface ResourceRecord {
  readonly Name: string;
  readonly Type: string;
  readonly Value: string;
}

export interface Tag {
  readonly Key: string;
  readonly Value?: string;
}

export interface TagPolicyException {
  readonly message?: string;
}

export interface ThrottlingException {
  readonly message?: string;
}

export interface TooManyTagsException {
  readonly message?: string;
}

export interface UpdateCertificateOptionsRequest {
  readonly CertificateArn: string;
  readonly Options: CertificateOptions;
}

export interface ValidationException {
  readonly message?: string;
}


