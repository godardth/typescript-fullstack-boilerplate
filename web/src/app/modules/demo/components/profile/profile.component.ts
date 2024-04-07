import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { faSignOut, faTrash, faPen, faSave } from '@fortawesome/free-solid-svg-icons';
import { User } from '../../../auth/models/user';

@Component({
  selector: 'demo-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent {

  faSignOut = faSignOut;
  faTrash = faTrash;
  faPen = faPen;
  faSave = faSave;

  user?: User;

  profileEditForm?: FormGroup;
  get firstNameErrors() { return this.profileEditForm?.get('firstName')?.errors; }
  get lastNameErrors() { return this.profileEditForm?.get('lastName')?.errors; }

  constructor(
    protected authService: AuthService
  ) { }

  edit() {
    this.user = new User(this.authService.user$.value);
    this.profileEditForm = new FormGroup({
      firstName: new FormControl(this.user.firstName, [Validators.required]),
      lastName: new FormControl(this.user.lastName, [Validators.required])
    });
  }

  save() {
    if (!this.profileEditForm || !this.user) return;
    let firstName = this.profileEditForm.get('firstName')?.value;
    let lastName = this.profileEditForm.get('lastName')?.value;
    if (!firstName || !lastName) return;
    this.user.firstName = firstName;
    this.user.lastName = lastName;
    this.authService.saveUser(this.user);
    this.user = undefined;
    this.profileEditForm = undefined;
  }

}
