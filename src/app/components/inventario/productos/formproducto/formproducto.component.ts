import { UbicacionService } from './../../../../servicios/inventario/ubicacion.service';
import { MarcaService } from './../../../../servicios/inventario/marca.service';
import { CategoriaService } from './../../../../servicios/inventario/categoria.service';
import { ProductoService } from './../../../../servicios/inventario/producto.service';
import { Component, Output, EventEmitter, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductoInterface } from 'src/app/modelos/producto';


@Component({
  selector: 'app-formproducto',
  templateUrl: './formproducto.component.html',
  styleUrls: ['./formproducto.component.css']
})

export class FormproductoComponent implements OnChanges {
  @Output() closeForm = new EventEmitter;
  //@Input() refresh 

  unidadesmedida: SelectItem[];

  ubicaciones: SelectItem[];
  categorias: SelectItem[];
  marcas: SelectItem[];

  public Form = new FormGroup({
    id: new FormControl(null),
    codigo: new FormControl(null, [Validators.required]),
    idubicacion: new FormControl(null, [Validators.required]),
    idcategoria: new FormControl(null, [Validators.required]),
    idmarca: new FormControl(null, [Validators.required]),
    nombre: new FormControl(null, [Validators.required]),
    entradas: new FormControl(0),
    salidas: new FormControl(0),
    stock: new FormControl(0, [Validators.required, Validators.min(0)]),
    unidadmedida: new FormControl(null, [Validators.required]),
    preciocompra: new FormControl(null, [Validators.required, Validators.min(0)]),
    precioventa: new FormControl(null, [Validators.required, Validators.min(0)]),
    precioventamayor: new FormControl(null, [Validators.min(0)]),
    servicio: new FormControl(false, [Validators.required]),
    estado: new FormControl(true, [Validators.required]),
    descripcion: new FormControl(null, [Validators.maxLength(200)]),
  })

  constructor(private productoService: ProductoService,
    private ubicacionService: UbicacionService,
    private categoriaService: CategoriaService,
    private marcaService: MarcaService) {
    this.unidadesmedida = [
      { label: '---', value: null },
      { label: 'Litros', value: 'Litros' },
      { label: 'Kilos', value: 'Kilos' },
      { label: 'Cajas', value: 'Cajas' },
      { label: 'Quintales', value: 'Quintales' }
    ];
    this.showSelects();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.llenarForm();

  }

  showSelects() {
    //dropdown ubicación
    this.ubicacionService.all().subscribe(data => {
      this.ubicaciones = [{ label: '---', value: null }];
      data.forEach(d => {
        let item: SelectItem = { label: d.nombre, value: d.id };
        this.ubicaciones.push(item);
      });
    });
    //dropdown ubicación
    this.categoriaService.all().subscribe(data => {
      this.categorias = [{ label: '---', value: null }];
      data.forEach(d => {
        let item: SelectItem = { label: d.nombre, value: d.id };
        this.categorias.push(item);
      });
    });
    //dropdown marca
    this.marcaService.all().subscribe(data => {
      this.marcas = [{ label: '---', value: null }];
      data.forEach(d => {
        let item: SelectItem = { label: d.nombre, value: d.id };
        this.marcas.push(item);
      });
    });
  }

  enviarForm(producto: ProductoInterface) {
    this.productoService.add(producto).subscribe(data => {
      console.log("Registro exitoso de producto", data);
      // envia el evento al componente padre para que cierre el form
      this.closeForm.emit('Guardado exitosamente');
      this.resetForm();
    });

  }

  cerrarForm() {
    this.closeForm.emit('Formulario cerrado');
    this.resetForm();
  }

  llenarForm(): void {
    this.Form.patchValue({
      id: this.productoService.productoSelect.id,
      codigo: this.productoService.productoSelect.codigo,
      idubicacion: this.productoService.productoSelect.idubicacion,
      idcategoria: this.productoService.productoSelect.idcategoria,
      idmarca: this.productoService.productoSelect.idmarca,
      nombre: this.productoService.productoSelect.nombre,
      entradas: this.productoService.productoSelect.entradas,
      salidas: this.productoService.productoSelect.salidas,
      stock: this.productoService.productoSelect.stock,
      unidadmedida: this.productoService.productoSelect.unidadmedida,
      preciocompra: this.productoService.productoSelect.preciocompra,
      precioventa: this.productoService.productoSelect.precioventa,
      precioventamayor: this.productoService.productoSelect.precioventamayor,
      servicio: this.productoService.productoSelect.servicio,
      estado: this.productoService.productoSelect.estado,
      descripcion: this.productoService.productoSelect.descripcion,
    });
  }

  resetForm(): void {
    //vaciar Form
    this.Form.patchValue({
      id: null,
      codigo: null,
      idubicacion: null,
      idcategoria: null,
      idmarca: null,
      nombre: null,
      entradas: 0,
      salidas: 0,
      stock: null,
      unidadmedida: null,
      preciocompra: null,
      precioventa: null,
      precioventamayor: null,
      servicio: false,
      estado: true,
      descripcion: null,
    });
    //vaciar productSelect
    this.productoService.productoSelect.id = null;
    this.productoService.productoSelect.codigo = null;
    this.productoService.productoSelect.idubicacion = null;
    this.productoService.productoSelect.idcategoria = null;
    this.productoService.productoSelect.idmarca = null;
    this.productoService.productoSelect.nombre = null;
    this.productoService.productoSelect.entradas = 0;
    this.productoService.productoSelect.salidas = 0;
    this.productoService.productoSelect.stock = null;
    this.productoService.productoSelect.unidadmedida = null;
    this.productoService.productoSelect.preciocompra = null;
    this.productoService.productoSelect.precioventa = null;
    this.productoService.productoSelect.precioventamayor = null;
    this.productoService.productoSelect.servicio = false;
    this.productoService.productoSelect.estado = true;
    this.productoService.productoSelect.descripcion = null;
  }

  //gets para controlar las validaciones
  get codigo() { return this.Form.get('codigo') };
}

