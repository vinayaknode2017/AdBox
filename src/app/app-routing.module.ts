import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SinginComponent } from './singin/singin.component';
import { CreatesurveyComponent } from './createsurvey/createsurvey.component';
import { WalletComponent } from './wallet/wallet.component';
import { WalletRechargeComponent } from './wallet/wallet-recharge/wallet-recharge.component';

const routes: Routes = [
  { path: 'createsurvey', component: CreatesurveyComponent },
  { path: 'wallet', component: WalletComponent },
  { path: 'recharge', component: WalletRechargeComponent },
  { path: 'signin', component: SinginComponent },
  { path: '', component: CreatesurveyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
