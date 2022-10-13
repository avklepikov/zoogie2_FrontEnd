import { Component, OnInit, Inject } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

// Models
import { Project } from '../project.model';

// MockData
//import { PROJECTS } from '../projectmock';

// Services
import { ProjectService} from '../services/project.service';
 

@Component({
  selector: 'app-projectregister',
  templateUrl: './projectregister.component.html',
  styleUrls: ['./projectregister.component.scss']
})


export class ProjectregisterComponent implements OnInit {

  projects: Project[]
  
  dataSource = new MatTableDataSource<Project>()

  constructor(
    private router: Router,
    private projectService: ProjectService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit(): void {
    this.projectService.getProjects()
      //.subscribe((projects) => this.projects = projects);
      .subscribe((projects) => {
        this.dataSource.data = projects;
        //console.dir (projects)
      })
    
    console.log("returning:", this.projects);
  }

  displayedColumns: string[] = ['id', 'title', 'portfolioId', 'programmeId', 'status'];
  //dataSource: Project[] = PROJECTS;
  //dataSource = new MatTableDataSource<Project>(PROJECTS);

  onRowClicked(row) {
    console.log('Row clicked: ', row.id);
    this.router.navigate(['prj', row.id, 'a', 'approach'])
  }
}
