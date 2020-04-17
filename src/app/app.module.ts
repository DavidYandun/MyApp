import { MessageService } from 'primeng/api';
import { PrimeNgModule } from './primeng';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HolaMundoComponent } from './components/hola-mundo/hola-mundo.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { NavbarComponent } from './components/general/navbar/navbar.component';
import { FooterComponent } from './components/general/footer/footer.component';
import { Page404Component } from './components/general/page404/page404.component';
import { LandpageComponent } from './components/general/landpage/landpage.component';
import { ProductosComponent } from './components/inventario/productos/productos.component';
import { MarcasComponent } from './components/inventario/marcas/marcas.component';
import { ListaproductosComponent } from './components/inventario/productos/listaproductos/listaproductos.component';
import { ListamarcasComponent } from './components/inventario/marcas/listamarcas/listamarcas.component';
import { CategoriasComponent } from './components/inventario/categorias/categorias.component';
import { ListacategoriasComponent } from './components/inventario/categorias/listacategorias/listacategorias.component';
import { MenuComponent } from './components/general/menu/menu.component';
import { FormcategoriaComponent } from './components/inventario/categorias/formcategoria/formcategoria.component';
import { FormproductoComponent } from './components/inventario/productos/formproducto/formproducto.component';

@NgModule({
  declarations: [
    AppComponent,
    HolaMundoComponent,
    PrincipalComponent,
    NavbarComponent,
    FooterComponent,
    Page404Component,
    LandpageComponent,
    ProductosComponent,
    MarcasComponent,
    ListaproductosComponent,
    ListamarcasComponent,
    CategoriasComponent,
    ListacategoriasComponent,
    MenuComponent,
    FormcategoriaComponent,
    FormproductoComponent
  ],
  imports: [
    FormsModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    PrimeNgModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
