import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public formCadastro: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formCadastro = this.criarFormCadastro();
  }

  ngOnInit(): void {
  }

  public criarFormCadastro(): FormGroup {
    return this.fb.group({
      username: ["", [Validators.required, Validators.minLength(6)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", Validators.required]
    });
  }

  public isFormControlInvalid(controlName: string): boolean {
    const control = this.formCadastro.get(controlName);
    return !!control?.invalid && control?.touched;
  }

  public isPasswordMismatch(): boolean {
    const password = this.formCadastro.get('password')?.value;
    const confirmPassword = this.formCadastro.get('confirmPassword')?.value;
    return password !== confirmPassword;
  }

  public submitForm() {
    if (this.formCadastro.valid && !this.isPasswordMismatch()) {
      // Lógica para envio do formulário
    }
  }
}
