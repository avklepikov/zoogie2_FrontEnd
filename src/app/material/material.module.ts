import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatTreeModule } from '@angular/material/tree';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

 



const MaterialComponents = [
  MatButtonModule,
  MatTableModule,
  MatToolbarModule,
  MatMenuModule,
  MatListModule,
  MatTreeModule,
  MatExpansionModule,
  MatTabsModule,
  MatCardModule,
  MatDividerModule,
  MatInputModule,
  MatDialogModule
  

  
]


@NgModule({
  
  imports: [
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }


