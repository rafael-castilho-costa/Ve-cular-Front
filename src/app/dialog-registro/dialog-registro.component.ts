import { join } from 'node:path';
import { VeiculoService } from './../veiculos/service/veiculo.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { error } from 'console';

@Component({
  selector: 'app-dialog-registro',
  standalone: true,
  imports: [MatDialogModule, CommonModule, MatFormFieldModule, MatInputModule,ReactiveFormsModule],
  templateUrl: './dialog-registro.component.html',
  styleUrl: './dialog-registro.component.css'
})
export class DialogRegistroComponent {

  veiculoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private veiculoService: VeiculoService,
    private dialogRef: MatDialogRef<DialogRegistroComponent>) {
      this.veiculoForm = this.fb.group({
        chassis: ['', Validators.required],
        marca:['', Validators.required],
        modelo: ['', Validators.required],
        placa: ['', Validators.required],
        cpf: ['', Validators.required],
        proprietario: ['', Validators.required],
      });
    }

  fechar(): void {

    this.dialogRef.close();
    console.log('Tentando Salvar');
  }

  salvar(): void {

    if (this.veiculoForm.valid){
      const dados = this.veiculoForm.value;
      console.log('Enviando para o backend:', dados);

      this.veiculoService.cadastrarVeiculo(dados).subscribe({
        next: (res) => {
          console.log('Cadastro Realizado com sucesso!', res);
          this.dialogRef.close(res);
        },
        error:(err) => {
          console.error('Erro ao Cadastrar Veículo:', err);

          if (err.status === 400 && err.error?.errors) {
            err.error.errors.forEach((erro: any) => {
              const campo = erro.field;
              const mensagem = erro.defaultMenssage;

              if (this.veiculoForm.controls[campo]) {
                this.veiculoForm.controls[campo].setErrors({serverError: mensagem});
              }
            });
          } else {
            alert('Erro inesperado. Tente novamente mais tarde');
          }
        }
      });

    } else{
      console.log('Formulário Inválido:', this.veiculoForm.errors);
    }

  }
}
