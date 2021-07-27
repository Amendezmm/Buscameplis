import { NgModule } from "@angular/core";
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

import { NotFoundComponent } from "./components/not-found/not-found.component";

@NgModule({
    imports:[
        HttpClientModule, 
        RouterModule,
        MatMenuModule,
        MatIconModule
    ],
    declarations:[
        NotFoundComponent
    ],
    exports:[
        HttpClientModule,
        RouterModule,
        NotFoundComponent,
        MatMenuModule,
        MatIconModule
    ],
    providers:[]
})

export class SharedModule{
    constructor(){}
}