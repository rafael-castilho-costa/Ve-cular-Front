import { VeiculoService } from './service/veiculo.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { DialogRegistroComponent } from '../dialog-registro/dialog-registro.component';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { error } from 'console';

@Component({
  standalone: true,
  selector: 'app-veiculos',
  imports: [MatIconModule, MatTableModule,CommonModule],
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent implements OnInit{
  constructor(
    private dialog: MatDialog,
    private veiculoService: VeiculoService
  ) {}

  abrirDialog(): void {
    this.dialog.open(DialogRegistroComponent, {
      width: '1000px'
    });
  }

  displayedColumns: string[] = ['id','cpf','proprietario', 'placa', 'chassis','marca', 'modelo'];
  dataSource = new MatTableDataSource<any>([]);

  ngOnInit(): void {
    this.veiculoService.getVeiculos().subscribe({
      next: (dados) => {
        this.dataSource.data = dados;
      },
      error: (err) => {
        console.error('Erro ao carregar veículos:', err)
      }
    });
  }



}
