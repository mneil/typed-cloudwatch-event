import ec2Service from '../data/ec2/2016-11-15/service-2.json';
import s3Service from '../data/s3/2006-03-01/service-2.json';

export const ec2 = ec2Service;
export const s3 = s3Service;

interface IMetadata {
  apiVersion: string;
  endpointPrefix: string;
  globalEndpoint: string;
  protocol: string;
  serviceAbbreviation: string;
  serviceFullName: string;
  serviceId: string;
  signatureVersion: string;
  uid: string;
}

interface IOperations {}

interface IService {
  version: string;
  metadata: IMetadata;
  operations: IOperations;

  // "operations":{
  //   "AbortMultipartUpload":{
  //     "name":"AbortMultipartUpload",
  //     "http":{
  //       "method":"DELETE",
  //       "requestUri":"/{Bucket}/{Key+}",
  //       "responseCode":204
  //     },
  //     "input":{"shape":"AbortMultipartUploadRequest"},
  //     "output":{"shape":"AbortMultipartUploadOutput"},
  //     "errors":[
  //       {"shape":"NoSuchUpload"}
  //     ],
  //     "documentationUrl":"http://docs.amazonwebservices.com/AmazonS3/latest/API/mpUploadAbort.html",
  //     "documentation":"<p>This action aborts a multipart upload. After a multipart upload is aborted, no additional parts can be uploaded using that upload ID. The storage consumed by any previously uploaded parts will be freed. However, if any part uploads are currently in progress, those part uploads might or might not succeed. As a result, it might be necessary to abort a given multipart upload multiple times in order to completely free all storage consumed by all parts. </p> <p>To verify that all parts have been removed, so you don't get charged for the part storage, you should call the <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListParts.html\">ListParts</a> action and ensure that the parts list is empty.</p> <p>For information about permissions required to use the multipart upload, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuAndPermissions.html\">Multipart Upload and Permissions</a>.</p> <p>The following operations are related to <code>AbortMultipartUpload</code>:</p> <ul> <li> <p> <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateMultipartUpload.html\">CreateMultipartUpload</a> </p> </li> <li> <p> <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPart.html\">UploadPart</a> </p> </li> <li> <p> <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/API/API_CompleteMultipartUpload.html\">CompleteMultipartUpload</a> </p> </li> <li> <p> <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListParts.html\">ListParts</a> </p> </li> <li> <p> <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListMultipartUploads.html\">ListMultipartUploads</a> </p> </li> </ul>"
  //   },
}

// class Service<Type> {
//   constructor(detail: any) {
//     console.log(detail);
//   }
// }
export function Detail<Type>(s: { new (): Type }): Type {
  return new s();
}
