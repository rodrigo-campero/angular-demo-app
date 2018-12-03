import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientService } from 'src/app/core/services/client.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/shared/models/client.model';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {
  clientForm: FormGroup;
  submitted: Boolean = false;
  client: Client = new Client();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private clientService: ClientService
  ) { }

  ngOnInit() {
    this.clientForm = this.formBuilder.group({
      _id: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', [Validators.required, Validators.minLength(6)]],
      age: ['', Validators.required]
    });

    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.clientService.getById(id)
          .subscribe(client => this.clientForm.setValue({
            _id: client._id,
            firstName: client.firstName,
            lastName: client.lastName,
            email: client.email,
            password: client.password,
            age: client.age
          }), erro => console.log(erro));
      }
    });
  }

  get f() { return this.clientForm.controls; }

  getErrorMessageForFirstNameField() {
    return this.f.firstName.hasError('required') ? 'You must enter a value' : '';
  }

  getErrorMessageForLastNameField() {
    return this.f.lastName.hasError('required') ? 'You must enter a value' : '';
  }

  getErrorMessageForEmailField() {
    return this.f.email.hasError('required') ? 'You must enter a value' :
      this.f.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  getErrorMessageForPasswordField() {
    return this.f.password.hasError('required') ? 'You must enter a value' :
      this.f.password.hasError('minLength') ? 'You must enter a min value 6' :
        '';
  }

  getErrorMessageForAgeField() {
    return this.f.age.hasError('required') ? 'You must enter a value' :
      this.f.age.hasError('minLength') ? 'You must enter a min value 6' :
        '';
  }

  onSubmit() {
    this.submitted = true;

    if (this.clientForm.invalid) {
      return;
    }
    console.log(this.clientForm);
    this.clientService.addOrUpdate(this.clientForm.value)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['client']);
      });
  }
}
