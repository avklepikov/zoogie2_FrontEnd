import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../../shared/baseurl';
import { Project } from '../project.model'


interface Register {
  id: string,
  title: string,
  portfolioId: string,
  programmeId: string,
  status: string
};


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    console.log('Starting getProjects()')
    console.log('GET from ' + baseURL + 'prj/');
    //console.log('finishing get function')
    return this.http.get<Project[]>(baseURL + 'prj/')
  };

  getProjectDetails(pid: string): Observable<Project> {
    console.log('Starting getProjectDetails()');
    console.log('requesting GET from ')
    return this.http.get<Project>(baseURL + 'prj/' + pid)
  };

  // To add VERSION !!
  getApproaches(pid: string) {
    //console.log('Starting getApproaches()');
    //console.log('Retrieving from ' + baseURL + 'prj/' + pid + '/Active/appr/')
    return this.http.get<Project>(baseURL + 'prj/' + pid + '/Active/appr/')
  };

  getProducts(pid: string, ver: string): Observable<Project> {
    console.log('Starting getProducts()')
    console.log('GET from: ' + baseURL + 'prj/' + pid + '/'+ ver +'/prd/');
    //console.log('finishing get function')
    return this.http.get<Project>(baseURL + 'prj/' + pid + '/'+ ver +'/prd/')
  };




}
