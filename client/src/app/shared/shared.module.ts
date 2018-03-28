import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './components/page.component';
import { EffectsModule } from '@ngrx/effects';
import { HelloWorldEffects } from './effects/hello-world.effects';
import { HttpModule } from '@angular/http';
import { HelloWorldService } from './services/hello-world.service';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forRoot([HelloWorldEffects]),
    HttpModule
  ],
  providers: [
    HelloWorldService
  ],
  declarations: [
    PageComponent
  ],
  exports: [
    PageComponent
  ]
})
export class SharedModule { }
