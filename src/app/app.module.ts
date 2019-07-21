import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNavComponent } from './mat-nav/mat-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, 
         MatMenuModule, MatGridListModule, MatVerticalStepper, MatStepperModule, 
         MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepicker, MatDatepickerModule, 
         MatNativeDateModule, 
         MatPaginatorModule,
         MatTableModule,
         MatTabsModule} from '@angular/material';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FooterComponent } from './shared/footer/footer.component';
import { SinginComponent } from './singin/singin.component';
import { CreatesurveyComponent } from './createsurvey/createsurvey.component';
import { MyChartComponent } from './shared/my-chart/my-chart.component';
import { ProductInfoComponent } from './shared/steps/product-info/product-info.component';
import { QuestionnarieComponent } from './shared/steps/questionnarie/questionnarie.component';
import { TargetAudienceComponent } from './shared/steps/target-audience/target-audience.component';
import { PayPerViewComponent } from './shared/steps/pay-per-view/pay-per-view.component';
import { StepHeaderComponent } from './shared/steps/step-header/step-header.component';
import { YesNoComponent } from './shared/questions/yes-no/yes-no.component';
import { MultiChoiceComponent } from './shared/questions/multi-choice/multi-choice.component';
import { MultiSelectComponent } from './shared/questions/multi-select/multi-select.component';
import { WalletComponent } from './wallet/wallet.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomTableComponent } from './shared/custom-table/custom-table.component';
import { WalletRechargeComponent } from './wallet/wallet-recharge/wallet-recharge.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    MatNavComponent,
    FooterComponent,
    SinginComponent,
    CreatesurveyComponent,
    MyChartComponent,
    ProductInfoComponent,
    QuestionnarieComponent,
    TargetAudienceComponent,
    PayPerViewComponent,
    StepHeaderComponent,
    YesNoComponent,
    MultiChoiceComponent,
    MultiSelectComponent,
    WalletComponent,
    CustomTableComponent,
    WalletRechargeComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    FormsModule,
    MatMenuModule, 
    MatButtonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    MatTableModule,
    MatTabsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
