import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  newProduct: FormGroup;

  constructor(private fb: FormBuilder) { 
    
  }

  ngOnInit() {
    this.newProduct = this.fb.group({
      nameProduct: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  public registerProduct() {
    console.log(this.newProduct);
  }

  public resetForm(){
    this.newProduct.reset();
  }


}
