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
          useClass: TestingStoreService
        }
      ]
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

  xit("should return the teamMember Array with the currentMember added at the end", () => {
    component.join();
    expect(component.team[component.team.length - 1]).toBe(
      component.userState.userInformation.userId
    );
  });

  xit("should return the teamMember Array without the currentMember", () => {
    component.leave();
    expect(component.team).not.toContain(
      component.userState.userInformation.userId
    );
  });
});
