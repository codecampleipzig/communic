import { TestingStoreService } from "./testing-store.service";
import { fakeAsync, flush } from "@angular/core/testing";

describe("TestingStoreService", () => {
  let storeService: TestingStoreService = new TestingStoreService();

  beforeEach(() => {
    storeService = new TestingStoreService();
  });

  test("Observables", fakeAsync(() => {
    expect(storeService.user$).toBeTruthy();
    expect(storeService.yourProjects$).toBeTruthy();
    expect(storeService.exploreProjects$).toBeTruthy();
    expect(storeService.project$).toBeTruthy();

    storeService.retrieveYourProjects();
    storeService.retrieveExploreProjects();
    let exploreProjects = null;
    storeService.exploreProjects$.subscribe(projects => {
      exploreProjects = projects;
    });

    flush();
    expect(exploreProjects.length).toBeGreaterThan(0);
  }));
});
