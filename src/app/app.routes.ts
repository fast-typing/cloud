import { Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { MainComponent } from './pages/main/main.component';
import { RecentComponent } from './pages/recent/recent.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';
import { TrashComponent } from './pages/trash/trash.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'recent', component: RecentComponent },
  { path: 'favorite', component: FavoriteComponent },
  { path: 'trash', component: TrashComponent },
  { path: 'profile/:id', component: ProfileComponent },
];
