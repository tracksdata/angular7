import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ProductFormComponent } from './product-form/product-form.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductService } from './product.service';
import {HttpClientModule} from '@angular/common/http';
const memus:Routes=[
  {path:'',component:DashboardComponent},
  {path:'form',component:ProductFormComponent},
  {path:'list',component:ListProductsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductFormComponent,
    ListProductsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(memus),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
