import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
   selector: 'app-test-httpclient',
   templateUrl: './test-httpclient.component.html',
   styleUrls: ['./test-httpclient.component.css']
})
export class TestHttpClientComponent implements OnDestroy {

   subscription: Subscription = null;
   #unsubscribe = false;

   constructor(private router: Router, private http: HttpClient) { }

   ngOnDestroy(): void {
      console.log('ngOnDestroy');
      if (this.#unsubscribe) {
         this.subscription.unsubscribe();
         console.log('unsubscribed');
      }
   }

   onFireRequestAndExit_Click(unsubscribe: boolean) {
      this.#unsubscribe = unsubscribe;
      this.subscription = this.http.get('https://visualstudio.com', { responseType: 'text' }).subscribe(() => {
         console.log('request recieved');
      });

      this.router.navigateByUrl('/');
   }
}
