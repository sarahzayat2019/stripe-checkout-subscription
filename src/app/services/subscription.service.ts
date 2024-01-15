import { ApplicationHttpClient } from "../helpers/custom-http-client";
import { Observable } from "rxjs";
import { HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Session } from "../models/session";
import { Invoice } from "../models/invoice";

@Injectable({providedIn: 'root'})
export class SubscriptionService {

    constructor(private http: ApplicationHttpClient) {
    }

    private subscriptionUrl = '/subscription';

    startStripeSubscription(priceId: string, count: number, customerId: string): Observable<any> {
        const url = this.subscriptionUrl + '/start';
        return this.http.get<any>(url, {
            params: new HttpParams()
                .set('count', count)
                .set('priceId', priceId)
                .set('customerId', customerId)
        });
    }

    getSessionData(sessionId: string): Observable<Session> {
        const url = this.subscriptionUrl + '/session/' + sessionId;
        return this.http.get<any>(url, {
            params: new HttpParams()
        });
    }

    getCustomerInvoices(customerId: string): Observable<Invoice[]> {
        const url = this.subscriptionUrl + '/invoices/customer/' + customerId;
        return this.http.get<any>(url, {
            params: new HttpParams()
        });
    }

    cancelStripeSubscription(subscriptionId: string): Observable<any> {
        const url = this.subscriptionUrl + '/cancel/' + subscriptionId;
        return this.http.delete<any>(url, {
            params: new HttpParams()
        });
    }

    updateSubscription(subscriptionId: string, newPriceId: string) {
        const url = this.subscriptionUrl + '/update/' + subscriptionId +'/'+ newPriceId;
        return this.http.post<any>(url, {
            params: new HttpParams()
        });
    }
}

