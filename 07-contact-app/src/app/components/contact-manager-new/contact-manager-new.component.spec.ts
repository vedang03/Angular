import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactManagerNewComponent } from './contact-manager-new.component';

describe('ContactManagerNewComponent', () => {
  let component: ContactManagerNewComponent;
  let fixture: ComponentFixture<ContactManagerNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactManagerNewComponent]
    });
    fixture = TestBed.createComponent(ContactManagerNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
