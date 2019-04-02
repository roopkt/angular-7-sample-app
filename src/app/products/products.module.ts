import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductsDataService } from './products-data.service';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCardModule } from '@angular/material';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [ProductsDataService]
})
export class ProductsModule {}
