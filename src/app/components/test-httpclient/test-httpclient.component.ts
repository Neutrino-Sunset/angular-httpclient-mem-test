import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
   selector: 'app-test-httpclient',
   templateUrl: './test-httpclient.component.html',
   styleUrls: ['./test-httpclient.component.css']
})
export class TestHttpClientComponent implements OnDestroy {

   subscription: Subscription = null;
   #unsubscribe = false;
   #thisDestroyed: Subject<void> = new Subject<void>();

   constructor(private router: Router, private http: HttpClient) { }

   ngOnDestroy(): void {
      console.log('ngOnDestroy');
      if (this.#unsubscribe) {
         this.subscription.unsubscribe();
         console.log('unsubscribed');
      }
      this.#thisDestroyed.next();
      this.#thisDestroyed.complete();
   }

   onFireRequestAndExit_Click(unsubscribe: boolean) {
      this.#unsubscribe = unsubscribe;
      this.subscription = this.http.get('https://visualstudio.com', { responseType: 'text' }).subscribe(() => {
         console.log('request recieved');
      });

      this.router.navigateByUrl('/');
   }

   onFireRequestWithTakeUntilAndExit_Click() {
      this.http.get('https://visualstudio.com', { responseType: 'text' }).pipe(
         takeUntil(this.#thisDestroyed)
      ).subscribe(() => {
         console.log('request recieved');
      });

      this.router.navigateByUrl('/');
   }
}
