import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientFormComponent } from './client-form/client-form.component';
import {
  MatTableModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule
} from '@angular/material';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [ClientListComponent, ClientFormComponent]
})
export class ClientModule { }
