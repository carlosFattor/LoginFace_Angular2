import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';
import {FacebookService} from './facebook.service';

@NgModule({
    imports: [CommonModule],
    declarations: [LoginComponent],
    providers: [FacebookService],
    exports: [LoginComponent]
})
export class LoginModule { }