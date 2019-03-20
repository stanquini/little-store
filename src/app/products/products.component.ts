import { Component, OnInit } from '@angular/core';
import { RegisterProductService } from '../register/services/register-product.service';
import { Product } from '../register/product.interface';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(private service: RegisterProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.service.getProducts()
      .subscribe((items) => {
        this.products = items;
      })
  }

  remove(id) {
    this.service.removeProduct(id)
      .subscribe((response: any) => {
        console.log('Removido');
        this.getProducts();
      });
  }

  update(item) {
    this.router.navigate(['edit', item.id])
  }
  


}
