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
  message: boolean = false;
  error: boolean = false;
  errorMsg;
  constructor(private fb: FormBuilder, private serviceProduct: RegisterProductService) {}

  ngOnInit() {
    this.newProduct = this.fb.group({
      nameProduct: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  public registerProduct(item: Product) {

    this.serviceProduct.addProduct(item)
      .subscribe((data: any) => {
        this.message = true;
        setTimeout(()=>{this.message = false}, 2000)
      },(e)=>{
        console.error('ERRO', e);
        this.errorMsg = e.message;
        this.error = true;
        setTimeout(()=>{this.error = false}, 2000)
      })
  }

  public resetForm(){
    this.newProduct.reset();
  }

}
