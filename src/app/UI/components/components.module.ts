import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../../Material Design/material.module';
import { FullHeightDirective } from './full-height.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogPreviewComponent } from './blog-preview/blog-preview.component';
import { ShareScreenComponent } from './share-screen/share-screen.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [LoginComponent, BlogPreviewComponent, HomeComponent, FullHeightDirective, ShareScreenComponent],
  imports: [NgbModule, ReactiveFormsModule, MaterialModule, CommonModule,RouterModule],
  exports: [FullHeightDirective, MaterialModule, ShareScreenComponent],
  entryComponents:[ShareScreenComponent]
})
export class ComponentsModule { }
