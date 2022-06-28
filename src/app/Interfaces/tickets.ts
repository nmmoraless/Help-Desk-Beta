export interface Tickets {
    id?: number;
    area: string;
    usuario: string;
    departamento: string;
    municipio: string;
    descripcion: string;
    solucion?: string;
    fecha: Date;
    accion: string;
}

export interface NewTicket {
    id?: number;
    area: number;
    usuario: number;
    departamento: number;
    municipio: number;
    descripcion: string;
    solucion?: string;
    fecha: Date;
    accion: string;
}

export interface Area {
    id?: number;
    name: string;
}

export interface EstadoTicket {
    id?: number;
    name: string;
}

export interface Usuarios {
    id: number;
    usuario: string;
    email?: string;
    telefono?: string;
    idCargo?: number;
    idArea?: number;
    password?: number;
    estado?: number;
    tipo?: number;
}
