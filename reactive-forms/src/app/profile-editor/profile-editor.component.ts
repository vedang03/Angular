import { Component } from '@angular/core';
import { FormGroup, FormControl , Validators , FormBuilder , FormArray} from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {
  profileForm = this.fb.group({
    firstName: ['',Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  constructor(private fb: FormBuilder) { }


onSubmit(){
  console.warn(this.profileForm.value)
}
get aliases() {
  return this.profileForm.get('aliases') as FormArray;
}
addAlias() {
  this.aliases.push(this.fb.control(''));
}
// updateProfile(){
//   this.profileForm.patchValue({
//     firstName:'Tom',
//     address:{
//       street:'Fancy street'
//     }
//   })
// }
}
