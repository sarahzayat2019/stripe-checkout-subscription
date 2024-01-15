import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplicationHttpClient, applicationHttpClientCreator } from "./helpers/custom-http-client";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routes";
import { FormsModule } from "@angular/forms";
import { SuccessPaymentComponent } from "./components/success-payment/success-payment.component";
import { PlansComponent } from "./components/plans/plans.component";


@NgModule({
    declarations: [AppComponent, SuccessPaymentComponent, PlansComponent],
    imports: [
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,

    ],
    providers: [
        {
            provide: ApplicationHttpClient,
            useFactory: applicationHttpClientCreator,
            deps: [HttpClient],
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {

}
