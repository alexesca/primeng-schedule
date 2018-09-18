import { NgModule } from "@angular/core";
import { AppRoutingModule } from "../routing/routing.module";
import { StoreModule } from "@ngrx/store";
import { StoreRouterConnectingModule, RouterStateSerializer } from "@ngrx/router-store";
import { EffectsModule } from "@ngrx/effects";
import * as fromReducers from './../app-state/app.reducer';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { CustomSerializer } from "../app-state/router/router-custom-serializer";
import { metaReducers } from "./../app-state/app.reducer";
import { TableModule } from "primeng/table";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { MenubarModule } from 'primeng/menubar';
import { MainMenuComponent } from "./main-menu/main-menu.component";
import { BrowserModule } from "@angular/platform-browser";
import { RouterEffects } from "../app-state/router/router.effects";
import { ButtonModule } from 'primeng/button';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        StoreRouterConnectingModule.forRoot(),
        BrowserAnimationsModule,
        HttpClientModule,
        StoreModule.forRoot(fromReducers.reducers, { metaReducers }),
        EffectsModule.forRoot([
            RouterEffects
        ]),
        StoreDevtoolsModule.instrument({
            maxAge: 50
        }),
        TableModule,
        MenubarModule,
        ButtonModule
    ],
    providers: [
        { provide: RouterStateSerializer, useClass: CustomSerializer },
    ],
    declarations: [
        MainMenuComponent
    ],
    exports: [
        AppRoutingModule,
        MainMenuComponent
    ],
})
export class CoreModule {

}