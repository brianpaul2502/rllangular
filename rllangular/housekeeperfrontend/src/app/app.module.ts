import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { UserregistrationComponent } from './pages/userregistration/userregistration.component';
import { UserloginComponent } from './pages/userlogin/userlogin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './pages/adminlogin/adminlogin.component';
import { AdminregistrationComponent } from './pages/adminregistration/adminregistration.component';
import { UserprofileComponent } from './pages/userprofile/userprofile.component';
import { PosthkdetailsComponent } from './pages/posthkdetails/posthkdetails.component';
import { ManagehkdetailsComponent } from './pages/managehkdetails/managehkdetails.component';
import { HkdetailsComponent } from './pages/hkdetails/hkdetails.component';
import { MessageService } from 'primeng/api';
import { UserresetpassComponent } from './pages/userresetpass/userresetpass.component';
import { AdminresetpassComponent } from './pages/adminresetpass/adminresetpass.component';
import { RequestComponent } from './pages/request/request.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { AssignhktouserComponent } from './pages/assignhktouser/assignhktouser.component';
import { ManagefeedbackComponent } from './pages/managefeedback/managefeedback.component';
import { ManagerequestComponent } from './pages/managerequest/managerequest.component';
import { AssignedhkComponent } from './pages/assignedhk/assignedhk.component';
import { MatTableModule } from '@angular/material/table';
const appRoutes: Routes = [
  { path: 'userregistration', component: UserregistrationComponent },
  { path: 'userlogin', component: UserloginComponent },
  { path: 'adminregistration', component: AdminregistrationComponent },
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'posthkdetails', component: PosthkdetailsComponent },
  { path: 'managehkdetails', component: ManagehkdetailsComponent },
  { path: 'userprofile', component: UserprofileComponent },
  { path: 'hkdetails', component: HkdetailsComponent },
  { path: 'userresetpass', component: UserresetpassComponent },
  { path: 'adminresetpass', component: AdminresetpassComponent },
  { path: 'request', component: RequestComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'assignhktouser', component: AssignhktouserComponent },
  { path: 'managerequest', component: ManagerequestComponent },
  { path: 'managefeedback', component: ManagefeedbackComponent },
  { path: 'assignedhk', component: AssignedhkComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    UserregistrationComponent,
    UserloginComponent,
    AdminloginComponent,
    AdminregistrationComponent,
    UserprofileComponent,
    PosthkdetailsComponent,
    ManagehkdetailsComponent,
    HkdetailsComponent,
    UserresetpassComponent,
    AdminresetpassComponent,
    RequestComponent,
    FeedbackComponent,
    AssignhktouserComponent,
    ManagefeedbackComponent,
    ManagerequestComponent,
    AssignedhkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
