import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestHttpClientComponent } from './components/test-httpclient/test-httpclient.component';

const routes: Routes = [
   { path: 'test-httpclient', component: TestHttpClientComponent}
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
