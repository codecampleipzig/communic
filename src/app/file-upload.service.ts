import { Injectable } from "@angular/core";
import { axiosInstance } from "./axios-instance";

@Injectable({
  providedIn: "root",
})
export class FileUploadService {
  constructor() { }

  uploadFile(file: File, filename: string): Promise<any> {
    return this.getPutUrl(file, filename)
      .then(response => {
        return this.putFile(response.data.putURL, file).then(response2 => {
          // Return final Url
          return response2;
        });
      })
      .catch(response => {
        console.log("getPutUrl error");
        console.log(response);
      });
  }

  /**
   * Get the Key for the AWS Upload
   * @param file The File that will be uploaded to AWS
   */
  getPutUrl(file: File, filename: string): Promise<any> {
    const options = {
      params: {
        Key: filename,
        ContentType: file.type,
      },
      headers: {
        "Content-Type": file.type,
      },
    };
    return axiosInstance.get(`/generate-put-url/`, options).then(response => {
      return response;
    });
  }

  putFile(putUrl: string, file: File): Promise<any> {
    const options = {
      headers: {
        "Content-Type": file.type,
        "Access-Control-Allow-Origin": "*",
      },
    };
    return axiosInstance.put(putUrl, file, options).then(response => {
      return response;
    });
  }
}
