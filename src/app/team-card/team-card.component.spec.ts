import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TeamCardComponent } from "./team-card.component";
import { TeamMemberComponent } from "../team-member/team-member.component";
import { StoreService } from "../store.service";
import { TestingStoreService } from "../test-utilities/testing-store.service";
import * as Mock from "../mockdata";

describe("TeamCardComponent", () => {
  let component: TeamCardComponent;
  let fixture: ComponentFixture<TeamCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TeamCardComponent, TeamMemberComponent],
      providers: [
        {
          provide: StoreService,
          useClass: TestingStoreService,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamCardComponent);
    component = fixture.componentInstance;
    component.project = Mock.projects[0];
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("CurrentUser should not have joined the task yet", () => {
    // empty the team
    component.project.projectTeam = [];
    fixture.detectChanges();
    expect(component.joined()).toBeFalsy();
  });

  it("CurrentUser should not be part of the team", () => {
    component.join();
    const user = component.project.projectTeam.find(t => t.userId == component.userState.userInformation.userId);

    expect(user).toBeTruthy();
  });

  it("CurrentUser should be part of the team", () => {
    component.leave();
    const user = component.project.projectTeam.find(t => t.userId == component.userState.userInformation.userId);
    expect(user).toBeFalsy();
  });
});
