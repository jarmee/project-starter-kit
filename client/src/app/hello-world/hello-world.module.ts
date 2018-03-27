import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloWorldComponent } from './hello-world.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../shared/reducers';
import { EffectsModule } from '@ngrx/effects';
import { HelloWorldEffects } from '../shared/effects/hello-world.effects';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([HelloWorldEffects])
  ],
  declarations: [HelloWorldComponent],
  exports: [
    HelloWorldComponent
  ]
})
export class HelloWorldModule { }
