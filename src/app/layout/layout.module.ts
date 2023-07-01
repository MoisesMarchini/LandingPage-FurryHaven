import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterbarComponent } from './footerbar/footerbar.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    NavbarComponent,
    FooterbarComponent
  ],
  exports: [
    NavbarComponent,
    FooterbarComponent
  ]
})
export class LayoutModule { }
