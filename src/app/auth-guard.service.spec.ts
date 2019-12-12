import { TestBed } from "@angular/core/testing";

import { AuthGuardService } from "./auth-guard.service";
import { StoreService } from "./store.service";
import { TestingStoreService } from "./test-utilities/testing-store.service";
import { Router } from "@angular/router";
import { TestingRouter } from "./test-utilities/testing-router";

describe("AuthGuardService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        { provide: StoreService, useClass: TestingStoreService },
        { provide: Router, useClass: TestingRouter },
      ],
    }),
  );

  it("should be created", () => {
    const service: AuthGuardService = TestBed.get(AuthGuardService);
    expect(service).toBeTruthy();
  });
});
