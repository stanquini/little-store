import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { Product } from './product.interface'
import { RegisterProductService } from './services/register-product.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  newProduct: FormGroup;

  constructor(private fb: FormBuilder, private serviceProduct: RegisterProductService) {}

  ngOnInit() {
    this.newProduct = this.fb.group({
      nameProduct: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  public registerProduct(item: Product) {
    
    console.log(this.newProduct);
    this.serviceProduct.addProduct(item)
      .subscribe((data: any) => {
        console.log(data);
      })
  }

  public resetForm(){
    this.newProduct.reset();
  }

}
