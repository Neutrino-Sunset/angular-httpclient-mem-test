import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TestHttpClientComponent } from './components/test-httpclient/test-httpclient.component';

const routes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'test-httpclient', component: TestHttpClientComponent }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
