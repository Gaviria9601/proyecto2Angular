import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  imports: [CommonModule, MatButtonModule, MatToolbarModule, MatFormFieldModule, MatSelectModule, MatInputModule,
    MatDatepickerModule, MatIconModule,MatCardModule],
  exports: [MatButtonModule, MatToolbarModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatDatepickerModule,
    MatIconModule,MatCardModule],
  declarations: []
})
export class MaterialModule { }
