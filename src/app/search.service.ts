import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { SearchProject } from "./searchtool/searchtool.component";

export interface SearchResult {
  projects: SearchProject[];
}

@Injectable({
  providedIn: "root",
})
export class SearchService {
  constructor(private http: HttpClient) {}

  getResults(searchString: string) {
    const params = new HttpParams().set("searchTerm", searchString);
    return this.http.get<SearchResult>("http://localhost:3001/api/projects", { params });
  }
}
