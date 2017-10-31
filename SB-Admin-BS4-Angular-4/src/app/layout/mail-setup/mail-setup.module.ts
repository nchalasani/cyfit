import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MailSetupComponent } from './mail-setup.component';
import { MailSetupRoutingModule } from './mail-setup-routing.module';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        MailSetupRoutingModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [MailSetupComponent]
})
export class MailSetupModule { }
