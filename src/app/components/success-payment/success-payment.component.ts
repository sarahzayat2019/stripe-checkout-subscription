import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { EMPTY, map, switchMap, tap } from "rxjs";
import { SubscriptionService } from "../../services/subscription.service";
import { Session } from "../../models/session";
import { Invoice } from "../../models/invoice";

@Component({
    selector: 'app-success-payment',
    templateUrl: './success-payment.component.html',
    styleUrl: './success-payment.component.scss'
})
export class SuccessPaymentComponent implements OnInit {
    session: Session = {} as Session;
    invoices: Invoice[] = [];

    constructor(private activatedRoute: ActivatedRoute,
                private subscriptionService: SubscriptionService
    ) {
    }

    ngOnInit() {
        this.activatedRoute.queryParamMap.pipe(
            switchMap((params) => {
                const sessionId = params.get('session_id');
                if (sessionId) {
                    return this.subscriptionService.getSessionData(sessionId);
                } else {
                    return EMPTY;
                }
            }),
            map((data: Session) => {
                this.session = data;
                return data.customerId;
            }),
            switchMap((customerId) => {
                return this.subscriptionService.getCustomerInvoices(customerId);
            }),
            tap((invoices) => {
                this.invoices = invoices;
            })
        ).subscribe();
    }

    protected readonly Number = Number;
}
