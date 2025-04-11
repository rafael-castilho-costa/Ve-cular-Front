import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { DialogRegistroComponent } from '../dialog-registro/dialog-registro.component';


@Component({
  standalone: true,
  selector: 'app-veiculos',
  imports: [MatIconModule],
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent {
  constructor(private dialog: MatDialog) {}

  abrirDialog(): void {
    this.dialog.open(DialogRegistroComponent, {
      width: '1000px'
    });
  }
}
