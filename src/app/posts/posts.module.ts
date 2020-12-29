import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../angular-material.module';
import { PostCreateComponent } from './post-create/post-create.Component';
import { PostlistComponent } from './post-list/post-list.component';
@NgModule({
  declarations:[
    PostCreateComponent,
    PostlistComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RouterModule

  ]
})
export class PostsModule {}
