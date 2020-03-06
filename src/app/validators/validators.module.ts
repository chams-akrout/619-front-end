import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormGroup} from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ValidatorsModule { }
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup:FormGroup)=>{
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[ matchingControlName];
    if(matchingControl.errors && !matchingControl.errors.mustMatch){
      return;
    }
    if (control.value !== matchingControl.value){
      matchingControl.setErrors({ mustMatch:true});
    }else{
      matchingControl.setErrors(null);
    }

  }
}