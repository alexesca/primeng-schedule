import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMenuComponent } from './main-menu.component';
import { MenubarModule } from 'primeng/menubar';
import { RouterModule } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

describe('MainMenuComponent', () => {
  let component: MainMenuComponent;
  let fixture: ComponentFixture<MainMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainMenuComponent ],
      imports: [
        MenubarModule,
        RouterModule.forRoot([])
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
