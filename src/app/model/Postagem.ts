import { Tema } from './Tema';
import { Usuario } from './Usuario';

export class Postagem {
  public idPostagem: number;
  public titulo: string;
  public conteudo: string;
  public linkMidia: string;
  public data: Date;
  public temaRelacionado: Tema;
  public usuarioRelacionado: Usuario;
  
  
}
