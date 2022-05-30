import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PracticeComponent } from './practice/practice.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import {FormsModule} from "@angular/forms";
import { DemoComponent } from './demo/demo.component';
import { CustomerComponent } from './customer/customer.component';
import { ViewChieldComponent } from './view-chield/view-chield.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    PracticeComponent,
    CockpitComponent,
    ServerElementComponent,
    SearchComponent,
    FilterComponent,
    DemoComponent,
    CustomerComponent,
    ViewChieldComponent,
    NgContentComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
