import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CardsComponent} from './components/cards/cards.component';
import {HomeComponent} from './components/home/home.component';
import {StoryTellerComponent} from './components/story-teller/story-teller.component';

const routes: Routes = [
  {
    path:'',
    component : HomeComponent
  },
{
  path: 'cards',
  component: CardsComponent
},
{
  path: 'cards/storyTeller',
  component: StoryTellerComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
