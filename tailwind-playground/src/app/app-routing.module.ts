import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlueComponent } from './components/blue/blue.component';
import { GreenComponent } from './components/green/green.component';
import { RedComponent } from './components/red/red.component';

const routes: Routes = [
  { path: '', redirectTo: 'red', pathMatch: 'full' },
  { path: 'red', component: RedComponent },
  { path: 'blue', component: BlueComponent },
  { path: 'green', component: GreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
