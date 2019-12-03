import { TestBed } from "@angular/core/testing";

import { SearchService } from "./search.service";
import { HttpClient } from "@angular/common/http";

describe("SearchService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useClass: class {} }],
    }),
  );

  it("should be created", () => {
    const service: SearchService = TestBed.get(SearchService);
    expect(service).toBeTruthy();
  });
});
