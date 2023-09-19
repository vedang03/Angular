import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ContactManagerComponent } from './components/contact-manager/contact-manager.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ViewContactComponent } from './components/view-contact/view-contact.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
// import { AddContactNewComponent } from './components/add-contact-new/add-contact-new.component';
import { ContactManagerNewComponent } from './components/contact-manager-new/contact-manager-new.component';
@NgModule({
  declarations: [
    AppComponent,
    AddContactComponent,
    ContactManagerComponent,
    EditContactComponent,
    NavbarComponent,
    SpinnerComponent,
    PageNotFoundComponent,
    ViewContactComponent,
    // AddContactNewComponent,
    ContactManagerNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
