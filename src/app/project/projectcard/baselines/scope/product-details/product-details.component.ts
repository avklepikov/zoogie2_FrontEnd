import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ProductDetailsComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data
    
  ) { }

  ngOnInit(): void {
    console.log ('lalala: ', this.data)
  }
  onRowClicked() {
    console.log ('Tapped');
    //this.dialog.open(ProductDetailsComponent, {data: row});
    this.router.navigate(['prj', 'PRJ1', 'a', 'prd', 'PROD1', 'edit'])
  }

}
