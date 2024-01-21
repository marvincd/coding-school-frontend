import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { FormatableCardsComponent } from './shared_components/formatable-cards/formatable-cards.component';
import { GreySingleCharacterCardComponent } from './shared_components/grey-single-character-card/grey-single-character-card.component';
import { BlueMultiCharacterCardComponent } from './shared_components/blue-multi-character-card/blue-multi-character-card.component';
import { CourseCardComponent } from './shared_components/course-card/course-card.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeedbackIllustrationComponent } from './shared_components/feedback-illustration/feedback-illustration.component';
import { InstructionIllustrationComponent } from './shared_components/instruction-illustration/instruction-illustration.component';
import { NavBarComponent } from './shared_components/nav-bar/nav-bar.component';
import { FooterComponent } from './shared_components/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CourseProgressComponent } from './pages/dashboard/course-progress/course-progress.component';
import { CourseComponent } from './pages/course/course.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { VirtualCardsComponent } from './pages/virtual-cards/virtual-cards.component';
import { IconComponent } from './shared_components/nav-bar/icon/icon.component';
import { NavBarActiveComponent } from './shared_components/nav-bar-active/nav-bar-active.component';
import { InstructorProfileComponent } from './pages/instructor-profile/instructor-profile.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CustomInterceptor } from './custom.interceptor';
import { CourseCardProfileComponent } from './pages/profile/course-card-profile/course-card-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    LandingPageComponent,
    FormatableCardsComponent,
    GreySingleCharacterCardComponent,
    BlueMultiCharacterCardComponent,
    CourseCardComponent,
    FeedbackIllustrationComponent,
    InstructionIllustrationComponent,
    NavBarComponent,
    FooterComponent,
    DashboardComponent,
    CourseProgressComponent,
    CourseComponent,
    ProfileComponent,
    VirtualCardsComponent,
    IconComponent,
    NavBarActiveComponent,
    InstructorProfileComponent,
    CourseCardProfileComponent,
    NotFoundComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    NgbModule,
    NgbCarouselModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass:CustomInterceptor,
    multi:true
  },
    NgbCarouselModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
