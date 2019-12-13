import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';

import { HeaderModule } from '../core/header/header.module';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [ AboutComponent ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    HeaderModule,
    ButtonModule
  ],
  exports: [ AboutComponent ]
})
export class AboutModule { }
