import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { SuccessPaymentComponent } from "./components/success-payment/success-payment.component";
import { PlansComponent } from "./components/plans/plans.component";

export const routes: Routes = [
    {
        path: '',
        component: PlansComponent,
    },
    {
        path: 'success',
        component: SuccessPaymentComponent,

    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            enableTracing: false,
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule { }
