import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Product } from './product.interface'
import { RegisterProductService } from './services/register-product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  newProduct: FormGroup;
  id: any = '';
  message: boolean = false;
  error: boolean = false;
  errorMsg;
  editMode = false;

  constructor(private route: ActivatedRoute,
    private fb: FormBuilder,
    private serviceProduct: RegisterProductService,
    private router: Router) { }

  ngOnInit() {
    this.newProduct = this.fb.group({
      nameProduct: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required]
    });

    this.route.params.subscribe(
      (params: any) => {
        const id = params['id'];
        if (id) {
          this.editMode = true;
          const item$ = this.serviceProduct.loadById(id);
          item$.subscribe(item => {
            this.updateForm(item)
          });
        }

      }
    );
  }

  updateForm(item) {
    this.id = item.id;
    this.newProduct.patchValue({
      id: item.id,
      nameProduct: item.nameProduct,
      quantity: item.quantity,
      price: item.price,
    })
  }

  public registerProduct(item: Product) {

    this.serviceProduct.addProduct(item)
      .subscribe((data: any) => {
        this.message = true;
        this.resetForm();
        setTimeout(() => { this.message = false }, 2000);
      }, (e) => {
        console.error('ERRO', e);
        this.errorMsg = e.message;
        this.error = true;
        setTimeout(() => { this.error = false }, 2000)
      })
  }

  saveProduct(item: Product) {

    this.serviceProduct.updateProduct(item, this.id)
      .subscribe((data: any) => {
        this.resetForm();
        this.router.navigate(['lista']);
      })
  }

  public resetForm() {
    this.newProduct.reset();
  }

}
