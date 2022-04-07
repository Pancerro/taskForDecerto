import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Product} from "./model/product.model";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  hideProducts: boolean = true;
  productList: Array<Product> = [
    {
      id: 1,
      name: 'Produkt 1',
      description: 'Produkt 1 - jest najlepszy'
    },
    {
      id: 2,
      name: 'Produkt 2',
      description: 'Produkt 2 - jest najlepszy'
    },
    {
      id: 3,
      name: 'Produkt 3',
      description: 'Produkt 3 - jest najlepszy'
    },
    {
      id: 4,
      name: 'Produkt 4',
      description: 'Produkt 4 - jest najlepszy'
    },
    {
      id: 5,
      name: 'Produkt 5',
      description: 'Produkt 5 - jest najlepszy'
    },
    {
      id: 6,
      name: 'Produkt 6',
      description: 'Produkt 6 - jest najlepszy'
    },
  ]
  homeForm = this.createHomeForm();

  constructor(private fb: FormBuilder,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.homeForm.controls.product.value);
  }

  createHomeForm(): FormGroup {
    return this.fb.group({
      product: new FormControl({value: null, disabled: true})
    });
  }

  hideProduct(): void {
    this.hideProducts = !this.hideProducts;
    this.changeDetectorRef.detectChanges();
  }
}
