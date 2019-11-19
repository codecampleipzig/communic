import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TeamMemberComponent } from './team-member.component';
import { TeamCardComponent } from '../team-card/team-card.component';

describe('TeamMemberComponent', () => {
  let component: TeamMemberComponent;
  let fixture: ComponentFixture<TeamMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamMemberComponent , TeamCardComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMemberComponent);
    component = fixture.componentInstance;

    /* Give it some mock data for a user */
    component.user = {
        userId: 1, 
        userName: "Mautzi", 
        userEmail: "MolleMorallo@gmail.com", 
        userImageURL: "../assets/user_avatar.png",
    }

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
