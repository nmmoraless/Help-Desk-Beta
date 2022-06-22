export interface Tickets {
    id?: number;
    area: string;
    responsable: string;
    departamento: string;
    municipio: string;
    descripcion: string;
    solucion?: string;
    fecha: Date;
    accion: string;
}
