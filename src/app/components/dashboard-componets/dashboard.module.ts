import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardLayoutComponent } from '../_layouts/dashboard-layout/dashboard-layout.component';
import { DashboardProfileComponent } from './dashboard-profile/dashboard-profile.component';
import { DashboardAccountsComponent } from './dashboard-accounts/dashboard-accounts.component';
import { DashboardAccountDetailComponent } from './dashboard-account-detail/dashboard-account-detail.component';
import { DashboardCreateAccountDialogComponent } from './_dialogs/dashboard-create-account-dialog/dashboard-create-account-dialog.component';
import { SharedService } from 'src/app/services/shared.service';
import { DashboardDeleteConfirmDialogComponent } from './_dialogs/dashboard-delete-confirm-dialog/dashboard-delete-confirm-dialog.component';
import { DashboardSettingsComponent } from './dashboard-settings/dashboard-settings.component';
import { DashboardUsersComponent } from './dashboard-users/dashboard-users.component';
import { DashboardUtilityComponent } from './dashboard-utility/dashboard-utility.component';
import { DashboardChangePasswordComponent } from './dashboard-change-password/dashboard-change-password.component';
import { DashboardBankDetailsComponent } from './dashboard-bank-details/dashboard-bank-details.component';
import { DashboardAllUtilityComponent } from './dashboard-all-utility/dashboard-all-utility.component';
import { DashboardUserDetailComponent } from './dashboard-user-detail/dashboard-user-detail.component';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';


@NgModule({
  declarations: [
    DashboardLayoutComponent,
    DashboardHomeComponent,
    DashboardProfileComponent,
    DashboardAccountsComponent,
    DashboardAccountDetailComponent,
    DashboardCreateAccountDialogComponent,
    DashboardDeleteConfirmDialogComponent,
    DashboardSettingsComponent,
    DashboardUsersComponent,
    DashboardUtilityComponent,
    DashboardChangePasswordComponent,
    DashboardBankDetailsComponent,
    DashboardAllUtilityComponent,
    DashboardUserDetailComponent,
    AddNewUserComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
providers: [SharedService],
  entryComponents: [
    DashboardCreateAccountDialogComponent,
    DashboardDeleteConfirmDialogComponent
  ]
})
export class DashboardModule { }
