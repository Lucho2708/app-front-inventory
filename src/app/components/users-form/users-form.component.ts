import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users-form',
  standalone: true,
  imports: [],
  templateUrl: './users-form.component.html',
  styleUrl: './users-form.component.css'
})
export class UsersFormComponent {

  constructor(private http: HttpClient) {}

  onSubmit(formData: any) {
    this.http.post('http://localhost:3000/users', formData)
      .subscribe(
        response => {
          console.log('Registro exitoso: ', response);

        },
        error => {
          console.log('Error al registrar: ', error);
        }
    )
  }

}
