import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface Veiculo {
  chassis: string;
  marca: string;
  modelo: string;
  placa: string;
  cpf: string;
  nome: string;
}

@Injectable({
   providedIn:'root'
})
export class VeiculoService {
  private apiUrl = 'http://localhost:8080/veicular';

  constructor( private http: HttpClient) {}

  cadastrarVeiculo(dados: any): Observable<any> {
    return this.http.post(this.apiUrl,dados);
  }

}
