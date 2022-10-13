import { Component, OnInit, Inject } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { ProductDetailsComponent } from './product-details/product-details.component'

// Models
import { Project, Product } from '../../../project.model';

// MockData
//import { PROJECTS } from '../projectmock';

// Services
import { ProjectService} from '../../../services/project.service';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-scope',
  templateUrl: './scope.component.html',
  styleUrls: ['./scope.component.scss']
})
export class ScopeComponent implements OnInit {

  project: Project
  products: Product[]
  currentProject: string;
  
  dataSource = new MatTableDataSource<Product>()

  constructor(
    public dialog: MatDialog, 
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit(): void {
    this.currentProject  = this.route.snapshot.paramMap.get('pid');
    console.log("Products, active project: " + this.currentProject)
    this.projectService.getProducts(
      this.route.snapshot.paramMap.get('pid'),
      this.route.snapshot.paramMap.get('ver')
    )
      //.subscribe((projects) => this.projects = projects);
      .subscribe((project) => {
        
        
        this.products = project[0].version.baselines.products;
        this.dataSource.data = project[0].version.baselines.products;
        this.project = project[0];
        console.log('received Products');
        console.dir(project)
      })

    

  }


  // adjust object for to use nested object (!)
  displayedColumns: string[] = ['id', 'title', 'category', 'status'];
  
  onRowClicked(row) {
    console.log ('Tapped');
    this.dialog.open(ProductDetailsComponent, {data: row});
  }
}
