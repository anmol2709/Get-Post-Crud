

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By, BrowserModule}           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {RouterModule, Router, RouterOutletMap, ActivatedRoute} from '@angular/router';
import {HttpModule} from "@angular/http";

import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {AppService} from "../app.service";
import {CreateComponent} from "./create.component";


describe('AppComponent', function () {
    let de: DebugElement;
    let comp: CreateComponent;
    let fixture: ComponentFixture<CreateComponent>;

    class MockRouter {

    }

    class MockActivatedRoute {

    }

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [  CreateComponent ],
            providers: [{provide: Router, useClass: MockRouter},{provide: ActivatedRoute, useClass: MockActivatedRoute},AppService,
                RouterOutletMap],
            imports: [BrowserModule, FormsModule, CommonModule, HttpModule, RouterModule]

        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CreateComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('h1'));
    });

    it('should create component', () => expect(comp).toBeDefined() );

});
