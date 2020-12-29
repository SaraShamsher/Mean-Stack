import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgModule } from "@angular/core";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
@NgModule({
exports: [
  MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatDialogModule,
]
})
export class AngularMaterialModule {}
