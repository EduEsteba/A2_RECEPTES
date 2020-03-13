export class Receptes {
  id: number;
  name: string;
  descripcion: string;
  ingreditents: string;
  constructor(id, name, descripcion, ingreditents) {
    this.id = id;
    this.name = name;
    this.descripcion = descripcion;
    this.ingreditents = ingreditents

  }
}
export class Comentaris {
  id: number;
  valoracio: string;
  descripcio: string;

  constructor(id, valoracio, descripcio) {
    this.id = id;
    this.valoracio = valoracio;
    this.descripcio = descripcio;


  }
}
