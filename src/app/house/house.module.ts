import { NgModule } from '@angular/core';
import { CatComponent } from './cat/cat.component';
import { DogComponent } from './dog/dog.component';
import { MouseComponent } from './mouse/mouse.component';

import { routes } from './house-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [CatComponent, DogComponent, MouseComponent]
})
export class HouseModule { }
