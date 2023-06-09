import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {
    // usa o lazy load para não carregar todos arquivos de uma vez e poder 
    // otimizar a inicialização das rotas
    path:'**',
    loadChildren:()=>import('./menu/menu.module').then(m=>m.MenuModule)
  },
  {
		path: 'notfound',
		component: NotFoundComponent,
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }