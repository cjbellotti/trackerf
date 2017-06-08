import { ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './components/home.component';
import { ProductsComponent } from './components/products.component';
import { WarehousesComponent } from './components/warehouses.component';
import { EntryComponent } from './components/entry.component';
import { CreateMovementComponent } from './components/create-movement.component';
import { MovementListComponent } from './components/movement-list.component';
import { ErrorComponent } from './components/error.component';

export const appRoutes : Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'warehouses', component: WarehousesComponent },
  { path: 'entry', component: EntryComponent },
  { path: 'create-movement', component: CreateMovementComponent },
  { path: 'movement-list', component: MovementListComponent },
  { path: '**', component: ErrorComponent }
];

export const appRoutingProviders: any[] = [];
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);
