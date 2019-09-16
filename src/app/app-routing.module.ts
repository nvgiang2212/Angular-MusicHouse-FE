import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegisterComponent} from './component/userManager/register/register.component';
import {LoginComponent} from './component/userManager/login/login.component';
import {ContentComponent} from './component/layout/content/content.component';
import {UserComponent} from './component/userManager/user/user.component';
import {CreateSongComponent} from './component/songManager/create-song/create-song.component';
import {DetailSongComponent} from './component/songManager/detail-song/detail-song.component';
import {ListSongComponent} from './component/songManager/list-song/list-song.component';
import {AboutUsComponent} from './component/layout/about-us/about-us.component';
import {CreatePlaylistComponent} from './component/playlistManager/create-playlist/create-playlist.component';
import {PlaylistComponent} from './component/playlistManager/playlist/playlist.component';
import {ListPlaylistComponent} from './component/playlistManager/list-playlist/list-playlist.component';
import {MenuLeftComponent} from './component/layout/menu-left/menu-left.component';
import {DashboardComponent} from './component/userManager/dashboard/dashboard.component';
import {UpdateInforComponent} from './component/userManager/update-infor/update-infor.component';
import {ChangePassComponent} from './component/userManager/change-pass/change-pass.component';
import {AuthGuard} from './service/userManager/guard/auth.guard';




const routes: Routes = [
  {path: 'home', component: ContentComponent},
  {path: 'my-profile', component: UserComponent, canActivate: [AuthGuard]},
  {path: 'auth/login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home/song/play', component: DetailSongComponent, canActivate: [AuthGuard]},
  {path: 'create-song', component: CreateSongComponent, canActivate: [AuthGuard]},
  {path: 'list-song', component: ListSongComponent, canActivate: [AuthGuard]},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'create-playlist', component: CreatePlaylistComponent, canActivate: [AuthGuard]},
  {path: 'list-playlist', component: ListPlaylistComponent, canActivate: [AuthGuard]},
  {path: 'my-playlist/:id', component: PlaylistComponent, canActivate: [AuthGuard]},
  {path: 'menu-left', component: MenuLeftComponent, canActivate: [AuthGuard]},
  {path: 'auth/dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'auth/updateuser', component: UpdateInforComponent, canActivate: [AuthGuard]},
  {path: 'auth/changepass', component: ChangePassComponent, canActivate: [AuthGuard]},
  {path: ' ', redirectTo: 'home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
