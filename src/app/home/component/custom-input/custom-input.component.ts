import {Component, forwardRef, Input} from '@angular/core';
import {Product} from "../../model/product.model";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true
    }]
})
export class CustomInputComponent implements ControlValueAccessor {
  @Input() productList: Array<Product> = [];
  public _value: number = 0;

  onChanged: any = () => {
  }
  onTouched: any = () => {
  }

  constructor() {
  }

  writeValue(val: number): void {
    this._value = val;
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  setProduct(product: Product): void {
    console.log(product)
    this._value = product.id;
    this.onChanged(product);
    this.onTouched();
  }
}

