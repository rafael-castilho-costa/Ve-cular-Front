import { AuthService } from './../auth/auth.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone:true,
  imports:[ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public form:FormGroup
  public erro ='';

  constructor (
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(6)]]
    });
  }
  public get formControls() {
    return this.form.controls;
  }

  public login() {

    if (this.form.invalid) {
      this.erro = 'Preencha os campos corretamente';
      return;
    }

    this.authService.login(this.form.value).subscribe (
      {
        next: (res) => {
          console.log('Login realizado com sucesso', res);
          localStorage.setItem('usuario', JSON.stringify(res));
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          this.erro = 'Email ou senha Inválidos';
          console.error(err);
        }
      }
    )
  }
}
