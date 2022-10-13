import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// Models
import { Project } from '../../../project.model';

// Services
import { ProjectService} from '../../../services/project.service';


@Component({
  selector: 'app-approach',
  templateUrl: './approach.component.html',
  styleUrls: ['./approach.component.scss']
})


export class ApproachComponent implements OnInit {
  currentProject: string;
  project: Project;


  constructor( 
    public http: HttpClient,
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.currentProject  = this.route.snapshot.paramMap.get('pid');
    //this.project = this.projectService.getProjectDetails(this.currentProject);
    console.log (this.currentProject)
    
    this.projectService.getApproaches(this.currentProject)
      .subscribe((project: Project )  => {
        this.project = project;
        //console.log ('received Approaches:')
        //console.dir(this.project);
      });
    
      


  }

}
