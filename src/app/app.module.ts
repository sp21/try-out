import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { routing } from './app.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ModalSComponent } from './modal-s/modal-s.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadImageComponent,
    NavigationBarComponent,

    ModalSComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
