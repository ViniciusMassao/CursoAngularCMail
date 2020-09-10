import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';

const	rotasCadastro:	Routes	=	[	
  {path:	'',	component:	CadastroComponent} 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(rotasCadastro)
  ],
  exports:[
    RouterModule
  ]
})

export class CadastroRoutingModule { }
