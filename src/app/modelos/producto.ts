export interface ProductoInterface {
    id?: number;
    codigo: string,
    idubicacion: number;
    idcategoria: number;
    idmarca:number;
    nombre: string;
    entradas?: number;
    salidas?: number;
    stock: number;
    unidadmedida:string;
    preciocompra: number;
    precioventa: number;
    precioventamayor?: number;
    servicio: boolean;
    estado: boolean;
    descripcion?: string;
}