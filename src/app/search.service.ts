import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { SearchProject } from "./searchtool/searchtool.component";
import { environment } from "./../environments/environment";
import { axiosInstance } from "./axios-instance";
import { from } from "rxjs";

export interface SearchResult {
  projects: SearchProject[];
}

@Injectable({
  providedIn: "root",
})
export class SearchService {
  constructor(@Inject(HttpClient) private http: HttpClient) {}

  getResults(searchString: string) {
    // const params = new HttpParams().set("searchTerm", searchString);
    // return this.http.get<SearchResult>(`${environment.api_url}/projects`, { params });
    return from(
      axiosInstance
        .get(`/projects`, {
          params: {
            searchTerm: searchString,
          },
        })
        .then(response => response.data),
    );
  }
}
