import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMusicComponent } from './new-music.component';

describe('NewMusicComponent', () => {
  let component: NewMusicComponent;
  let fixture: ComponentFixture<NewMusicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewMusicComponent]
    });
    fixture = TestBed.createComponent(NewMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
