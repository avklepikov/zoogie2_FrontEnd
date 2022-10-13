import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { baseURL } from './shared/baseurl';
import { FormsModule } from '@angular/forms'; 

import { FlexLayoutModule } from '@angular/flex-layout';

import { nl2brPipe } from './shared/nl2br.pipe';

// Own Components
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ProjectcardComponent } from './project/projectcard/projectcard.component';
import { ProjectregisterComponent } from './project/projectregister/projectregister.component';
import { SidepanelComponent } from './project/sidepanel/sidepanel.component';
import { ApproachComponent } from './project/projectcard/governance/approach/approach.component';
import { OrganizationComponent } from './project/projectcard/governance/organization/organization.component';
import { ScopeComponent } from './project/projectcard/baselines/scope/scope.component';
import { ProductDetailsComponent } from './project/projectcard/baselines/scope/product-details/product-details.component';
import { ApproachEditComponent } from './project/projectcard/governance/approach/approach-edit/approach-edit.component';
import { ProductEditComponent } from './project/projectcard/baselines/scope/product-details/product-edit/product-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectcardComponent,
    ProjectregisterComponent,
    SidepanelComponent,
    ApproachComponent,
    OrganizationComponent,
    ScopeComponent,
    ProductDetailsComponent,
    nl2brPipe,
    ApproachEditComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {provide: 'BaseURL', useValue: baseURL}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
