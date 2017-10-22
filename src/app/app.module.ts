import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { ProductsComponent } from './components/products.component';
import { WarehousesComponent } from './components/warehouses.component';
import { EntryComponent } from './components/entry.component';
import { CreateMovementComponent } from './components/create-movement.component';
import { MovementListComponent } from './components/movement-list.component';
import { StockSummaryComponent } from './components/stock-summary.component';
import { ErrorComponent } from './components/error.component';
import { LoadingComponent } from './components/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    WarehousesComponent,
    EntryComponent,
    CreateMovementComponent,
    MovementListComponent,
    StockSummaryComponent,
    ErrorComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
