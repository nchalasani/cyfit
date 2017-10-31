import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MailSetupComponent } from './mail-setup.component';

const routes: Routes = [
    { path: '', component: MailSetupComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MailSetupRoutingModule { }
