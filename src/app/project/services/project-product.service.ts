import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../../shared/baseurl';
import { Product } from '../project.model';

@Injectable({
  providedIn: 'root'
})

export class ProjectProductService {

  constructor(
    private http: HttpClient
  ) { }


  getProducts(pid: string): Observable<Product[]> {
    console.log('Starting getProjects()')
    console.log(baseURL + 'projects')
    console.log('finishing get function')
    return this.http.get<Product[]>(baseURL + 'projects')
  };

  getProductDetails(pid: string, prid: string): Observable<Product> {
    console.log('Starting getProjectDetails()');
    return this.http.get<Product>(baseURL + 'projects/' + pid)
  }

}
