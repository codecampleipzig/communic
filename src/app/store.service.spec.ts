import { TestBed } from "@angular/core/testing";

import { StoreService } from "./store.service";
import { Router } from "@angular/router";
import { TestingRouter } from "./test-utilities/testing-router";

describe("StoreService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Router,
          useClass: TestingRouter,
        },
      ],
    }),
  );

  it("should be created", () => {
    const service: StoreService = TestBed.get(StoreService);
    expect(service).toBeTruthy();
  });
});
