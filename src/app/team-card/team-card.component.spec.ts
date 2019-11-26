import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TeamCardComponent } from "./team-card.component";
import { TeamMemberComponent } from "../team-member/team-member.component";
import { ProjectPageComponent } from "../project-page/project-page.component";

xdescribe("TeamCardComponent", () => {
  let component: TeamCardComponent;
  let fixture: ComponentFixture<TeamCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TeamCardComponent, TeamMemberComponent, ProjectPageComponent],
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
        userImageURL: "../assets/user_avatar.png",
      },
      {
        userId: 2,
        userName: "Mariana",
        userEmail: "BringMarianaBananaToSchool@gmail.com",
        userImageURL: "../assets/user_avatar.png",
      },
      {
        userId: 3,
        userName: "Lena",
        userEmail: "lenintheempress@gmail.com",
        userImageURL: "../assets/user_avatar.png",
      },
      {
        userId: 4,
        userName: "Björn",
        userEmail: "thPObutNotTheRiver@gmail.com",
        userImageURL: "../assets/user_avatar.png",
      },
      {
        userId: 13,
        userName: "Iko",
        userEmail: "caretaker3000@gmail.com",
        userImageURL: "../assets/user_avatar.png",
      },
    ];

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
