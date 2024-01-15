import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { tap } from "rxjs";
import { SubscriptionService } from "../../services/subscription.service";

@Component({
    selector: 'app-plans',
    templateUrl: './plans.component.html',
    styleUrl: './plans.component.scss'
})
export class PlansComponent {
    locationCount = 1;
    plans = [];
    customerId = "cus_PNLMdEy1Fxa89T";
    subscriptionId: string = "";
    updateSubscriptionId: string = "";
     newPriceId: string = "";
    selectedPlan: string = "";

    constructor(private subscriptionService: SubscriptionService) {
    }

    startSubscription() {
        this.subscriptionService.startStripeSubscription(this.selectedPlan, this.locationCount, this.customerId).pipe(
            tap((it) => {
                window.open(it.url, "_self");
            })
        ).subscribe();
    }

    onCountChange($event: any) {
        this.locationCount = $event;
    }

    cancelSubscription() {
        this.subscriptionService.cancelStripeSubscription(this.subscriptionId).pipe(
            tap((it) => {
                console.log(it);
                alert('subscription canceled');
            })
        ).subscribe();
    }

    updateSubscription() {
        this.subscriptionService.updateSubscription(this.updateSubscriptionId, this.newPriceId).pipe(
            tap((it) => {
                console.log(it);
                alert('subscription updated');
            })
        ).subscribe();
    }

    selectPlan($event: string) {
        this.selectedPlan = $event;
    }
}
