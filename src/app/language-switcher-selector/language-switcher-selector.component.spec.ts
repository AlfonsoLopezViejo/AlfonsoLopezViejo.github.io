import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageSwitcherSelectorComponent } from './language-switcher-selector.component';

describe('LanguageSwitcherSelectorComponent', () => {
  let component: LanguageSwitcherSelectorComponent;
  let fixture: ComponentFixture<LanguageSwitcherSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageSwitcherSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageSwitcherSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
