import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './View/login/login.component';
import { CoachesComponent } from './View/coaches/coaches.component';
import { LolcoachComponent } from './View/lolcoach/lolcoach.component';
import { Tf2coachComponent } from './View/tf2coach/tf2coach.component';
import { IndexContentComponent } from './View/index-content/index-content.component';
import { BookSessionComponent } from './View/book-session/book-session.component';
import { BecomeCoachComponent } from './View/become-coach/become-coach.component';
import { ContactComponent } from './View/contact/contact.component';
import { AboutUsComponent } from './View/about-us/about-us.component';
import { SignUpComponent } from './View/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    component: IndexContentComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'coaches',
    component: CoachesComponent,
  },
  {
    path: 'lolcoach',
    component: LolcoachComponent,
  },
  {
    path: 'tf2coach',
    component: Tf2coachComponent,
  },
  {
    path: 'book-session',
    component: BookSessionComponent,
  },
  {
    path: 'become-coach',
    component: BecomeCoachComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
