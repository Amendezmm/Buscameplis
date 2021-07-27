import { LoginComponent } from './login/containers/login.component';
import { HomeComponent } from './home/containers/home.component';
import { PublicComponent } from './public.component';
import { SharedModule } from './../core/Shared/shared.module';
import { PublicRoutingModule } from './public-routing.module';
import {NgModule} from "@angular/core";

@NgModule({
    imports:[
        PublicRoutingModule,
        SharedModule
    ],
    declarations:[
        PublicComponent,
        HomeComponent,
        LoginComponent
    ],
    exports:[],
    providers:[]
})

export class PublicModele{
    constructor(){}
}


