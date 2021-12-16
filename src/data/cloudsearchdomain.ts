/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface Search {
  readonly cursor: string;
  readonly expr: string;
  readonly facet: string;
  readonly filterQuery: string;
  readonly highlight: string;
  readonly partial: boolean;
  readonly query: string;
  readonly queryOptions: string;
  readonly queryParser: string;
  readonly return: string;
  readonly size: number;
  readonly sort: string;
  readonly start: number;
  readonly stats: string;
}
export interface Suggest {
  readonly query: string;
  readonly suggester: string;
  readonly size: number;
}
export interface UploadDocuments {
  readonly documents: unknown;
  readonly contentType: string;
}



interface Bucket {
  readonly value: string;
  readonly count: number;
}

interface BucketInfo {
  readonly buckets: [];
}

interface DocumentServiceException {
  readonly status: string;
  readonly message: string;
}

interface DocumentServiceWarning {
  readonly message: string;
}

interface FieldStats {
  readonly min: string;
  readonly max: string;
  readonly count: number;
  readonly missing: number;
  readonly sum: unknown;
  readonly sumOfSquares: unknown;
  readonly mean: string;
  readonly stddev: unknown;
}

interface Hit {
  readonly id: string;
  readonly fields: {[key: string]: any};
  readonly exprs: {[key: string]: any};
  readonly highlights: {[key: string]: any};
}

interface Hits {
  readonly found: number;
  readonly start: number;
  readonly cursor: string;
  readonly hit: [];
}

interface SearchException {
  readonly message: string;
}

interface SearchRequest {
  readonly cursor: string;
  readonly expr: string;
  readonly facet: string;
  readonly filterQuery: string;
  readonly highlight: string;
  readonly partial: boolean;
  readonly query: string;
  readonly queryOptions: string;
  readonly queryParser: string;
  readonly return: string;
  readonly size: number;
  readonly sort: string;
  readonly start: number;
  readonly stats: string;
}

interface SearchResponse {
  readonly status: SearchStatus;
  readonly hits: Hits;
  readonly facets: {[key: string]: any};
  readonly stats: {[key: string]: any};
}

interface SearchStatus {
  readonly timems: number;
  readonly rid: string;
}

interface SuggestModel {
  readonly query: string;
  readonly found: number;
  readonly suggestions: [];
}

interface SuggestRequest {
  readonly query: string;
  readonly suggester: string;
  readonly size: number;
}

interface SuggestResponse {
  readonly status: SuggestStatus;
  readonly suggest: SuggestModel;
}

interface SuggestStatus {
  readonly timems: number;
  readonly rid: string;
}

interface SuggestionMatch {
  readonly suggestion: string;
  readonly score: number;
  readonly id: string;
}

interface UploadDocumentsRequest {
  readonly documents: unknown;
  readonly contentType: string;
}

interface UploadDocumentsResponse {
  readonly status: string;
  readonly adds: number;
  readonly deletes: number;
  readonly warnings: [];
}
