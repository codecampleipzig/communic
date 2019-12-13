import { BehaviorSubject } from "rxjs";

export class TestingRouter {
  events = new BehaviorSubject<any>(null).asObservable();
  navigate(): void {}
}
