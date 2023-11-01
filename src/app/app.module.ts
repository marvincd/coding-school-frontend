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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeedbackIllustrationComponent } from './shared_components/feedback-illustration/feedback-illustration.component';
import { InstructionIllustrationComponent } from './shared_components/instruction-illustration/instruction-illustration.component';
import { NavBarComponent } from './shared_components/nav-bar/nav-bar.component';
import { FooterComponent } from './shared_components/footer/footer.component';


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
    FooterComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
