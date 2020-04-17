import { CategoriasComponent } from './components/inventario/categorias/categorias.component';
import { MarcasComponent } from './components/inventario/marcas/marcas.component';
import { Page404Component } from './components/general/page404/page404.component';
import { LandpageComponent } from './components/general/landpage/landpage.component';
import { ProductosComponent } from './components/inventario/productos/productos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: LandpageComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'marcas', component: MarcasComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
