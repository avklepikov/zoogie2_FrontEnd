import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectcardComponent} from './project/projectcard/projectcard.component';
import { ProjectregisterComponent } from './project/projectregister/projectregister.component';
import { ApproachComponent} from './project/projectcard/governance/approach/approach.component'
import { OrganizationComponent } from './project/projectcard/governance/organization/organization.component';
import { ScopeComponent} from './project/projectcard/baselines/scope/scope.component'
import { ProductEditComponent } from './project/projectcard/baselines/scope/product-details/product-edit/product-edit.component';

const routes: Routes = [

  
  //{ path: 'prj/:id/org', component: OrganizationComponent },
  { path: 'prj/reg', component: ProjectregisterComponent },
  { path: 'prj/:pid/:ver', component: ProjectcardComponent},
  { path:  'prj/:pid/:ver/approach', component: ApproachComponent,  },
  { path: 'prj/:pid/:ver/prd', component: ScopeComponent },
  { path: 'prj/:pid/:ver/prd/:prid/edit', component: ProductEditComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
