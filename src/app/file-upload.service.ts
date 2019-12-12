import { Injectable, Inject } from "@angular/core";
import { axiosInstance } from "./axios-instance";
import Axios from "axios";

@Injectable({
  providedIn: "root",
})
export class FileUploadService {
  constructor() {}

  uploadFile(file: File, filename: string): Promise<any> {
    return this.getPutUrl(file, filename).then(response => {
      return this.putFile(response.data.putURL, file).then(res => {
        // Return final Url
        return res;
      });
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
    return Axios.put(putUrl, file, options)
      .then(res => {
        return res;
      })
      .catch(error => {
        console.log("waa");
        console.log(error);
      });
  }
}
