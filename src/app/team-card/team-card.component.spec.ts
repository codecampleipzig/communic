import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TeamCardComponent } from "./team-card.component";
import { TeamMemberComponent } from "../team-member/team-member.component";

describe("TeamCardComponent", () => {
  let component: TeamCardComponent;
  let fixture: ComponentFixture<TeamCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TeamCardComponent, TeamMemberComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamCardComponent);
    component = fixture.componentInstance;

    component.team = [
      {
        userId: 1,
        userName: "Mautzi",
        userEmail: "MolleMorallo@gmail.com",
        userImageUrl: "../assets/user_avatar.png",
      },
      {
        userId: 2,
        userName: "Mariana",
        userEmail: "BringMarianaBananaToSchool@gmail.com",
        userImageUrl: "../assets/user_avatar.png",
      },
      {
        userId: 3,
        userName: "Lena",
        userEmail: "lenintheempress@gmail.com",
        userImageUrl: "../assets/user_avatar.png",
      },
      {
        userId: 4,
        userName: "Björn",
        userEmail: "thPObutNotTheRiver@gmail.com",
        userImageUrl: "../assets/user_avatar.png",
      },
      {
        userId: 13,
        userName: "Iko",
        userEmail: "caretaker3000@gmail.com",
        userImageUrl: "../assets/user_avatar.png",
      },
    ];
    component.currentUser = {
      userId: 1,
      userName: "Mautzi",
      userEmail: "MolleMorallo@gmail.com",
      userImageUrl: "../assets/user_avatar.png"
    };
    component.project = {
      projectId: 2,
      projectTitle: "Project B",
      projectImageUrl: "",
      projectDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      projectGoal: "Save the world",
      projectStatus: "open",
      projectCreator: component.team[0],
      projectTeam: component.team,
      projectTasks: []
    };

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should return the teamMember Array with the currentMember added at the end", () => {
    component.join();
    expect(component.team[component.team.length - 1]).toBe(
      component.currentUser
    );
  });

  it("should return the teamMember Array without the currentMember", () => {
    component.leave();
    expect(component.team).not.toContain(component.currentUser);
  });
});
