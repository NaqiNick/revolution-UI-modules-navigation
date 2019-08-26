import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScreenComponent } from './screen/screen.component';

import { AppComponent } from './app.component';
import { TrendComponent } from './trend/trend.component';

const routes: Routes = [


{ path: 'screens', component: ScreenComponent},
{ path: 'trends', component: TrendComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ScreenComponent, TrendComponent]
