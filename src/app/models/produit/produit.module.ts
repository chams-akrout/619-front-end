import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProduitModule { 
  public constructor(

    public idp?:Number ,
    public Name?: String,
    public category?: String,
    public factory?: String,
    public image?: String,
    public point?: Number
){}
}
