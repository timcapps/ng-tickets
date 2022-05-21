import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { StoreDevtoolsModule, StoreDevtoolsOptions } from '@ngrx/store-devtools';

import { ROOT_STORE_REDUCERS } from './reducer';
import { TicketsEffects } from './tickets-store/effects';


const DEVTOOLS_OPTIONS: StoreDevtoolsOptions = {
  name: 'nrwl-tickets-test',
  maxAge: 25,
  logOnly: false
}

const EFFECTS = [
  TicketsEffects
];

const ROOT_STORE_IMPORTS = [
  CommonModule,
  StoreModule.forRoot(ROOT_STORE_REDUCERS),
  EffectsModule.forRoot([...EFFECTS]),
  StoreDevtoolsModule.instrument(DEVTOOLS_OPTIONS)
];

@NgModule({
  declarations: [],
  imports: [...ROOT_STORE_IMPORTS],
  providers: [...EFFECTS]
})
export class RootStoreModule {}
