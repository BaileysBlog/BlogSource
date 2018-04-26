import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../../Material Design/material.module';
import { FullHeightDirective } from './full-height.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogPreviewComponent } from './blog-preview/blog-preview.component';


@NgModule({
  declarations: [LoginComponent, BlogPreviewComponent, HomeComponent, FullHeightDirective],
  imports: [NgbModule, ReactiveFormsModule, MaterialModule, CommonModule],
  exports:[FullHeightDirective, MaterialModule]
})
export class ComponentsModule { }
