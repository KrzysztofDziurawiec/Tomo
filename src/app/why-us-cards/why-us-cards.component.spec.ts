import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyUsCardsComponent } from './why-us-cards.component';

describe('WhyUsCardsComponent', () => {
  let component: WhyUsCardsComponent;
  let fixture: ComponentFixture<WhyUsCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyUsCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyUsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
