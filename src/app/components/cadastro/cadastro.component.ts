import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastroService } from 'src/app/services/cadastro/cadastro.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  users: any[] = [];

  public formCadastro: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cadastroService: CadastroService) {
    this.formCadastro = this.criarFormCadastro();
  }

  ngOnInit() {

    }

  public criarFormCadastro(): FormGroup {
    return this.fb.group({
      name: ["", [Validators.required, Validators.minLength(6)]],
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
      const formData = this.formCadastro.value;
      
      this.cadastroService.criarUsers(formData).subscribe(
        response => {
          console.log('Usuário criado com sucesso!', response);
          // Aqui você pode adicionar outras lógicas, como redirecionar o usuário, mostrar uma mensagem de sucesso, etc.
        },
        error => {
          console.error('Erro ao criar o usuário:', error);
          // Aqui você pode adicionar lógicas de tratamento de erro, como mostrar uma mensagem de erro para o usuário.
        }
      );
    }
  }
}
