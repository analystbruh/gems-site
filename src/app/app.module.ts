import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SectionRightComponent } from './section-right/section-right.component';
import { SectionLeftComponent } from './section-left/section-left.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LeftSlideContentComponent } from './left-slide-content/left-slide-content.component';
import { RightSlideContentComponent } from './right-slide-content/right-slide-content.component';
import { BottomSlideContentComponent } from './bottom-slide-content/bottom-slide-content.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { ProgramsComponent } from './programs/programs.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    SectionRightComponent,
    SectionLeftComponent,
    NavMenuComponent,
    LeftSlideContentComponent,
    RightSlideContentComponent,
    BottomSlideContentComponent,
    HomeContentComponent,
    ProgramsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
