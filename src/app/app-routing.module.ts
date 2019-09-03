import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegisterComponent} from './component/register/register.component';
import {LoginComponent} from './component/login/login.component';
import {ContentComponent} from './component/content/content.component';
import {AdminComponent} from './component/admin/admin.component';
import {PmComponent} from './component/pm/pm.component';
import {UserComponent} from './component/user/user.component';
import {CreateSongComponent} from './component/create-song/create-song.component';
import {DetailSongComponent} from "./component/detail-song/detail-song.component";



const routes: Routes = [
  {path: 'home', component: ContentComponent},
  {path: 'user', component: UserComponent},
  {path: 'pm', component: PmComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'auth/login', component: LoginComponent},
  {path: 'signup', component: RegisterComponent},
  {path: 'song/play/:id', component: DetailSongComponent},
  {path: 'create-house', component: CreateSongComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
