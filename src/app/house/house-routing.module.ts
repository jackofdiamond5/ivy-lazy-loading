import { Routes } from '@angular/router';

import { CatComponent } from './cat/cat.component';
import { DogComponent } from './dog/dog.component';
import { MouseComponent } from './mouse/mouse.component';

export const routes: Routes = [
    { path: 'cat', component: CatComponent },
    { path: 'dog', component: DogComponent },
    { path: 'mouse', component: MouseComponent }
];
