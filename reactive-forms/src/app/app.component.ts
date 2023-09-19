import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl , Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reactive-forms';
  genders:string[]=['male','female']
  userForm!: FormGroup
  minLen=4
  invalidUserName=['admin']

  name = new FormControl('')
  updateName(){
    this.name.setValue('ved')
  }

  ngOnInit():void{
    
  this.userForm = new FormGroup({
    'userName':new FormControl(null,[Validators.required,Validators.minLength(3),this.invalidName.bind(this)]),
    'email':new FormControl(null,[Validators.required,Validators.email,]),
    'number':new FormControl(null,Validators.required),
    'gender':new FormControl('male',Validators.required)
  })
  }
  onSubmit(){
    console.log(this.userForm)
  }
  reset(){
    this.userForm.reset()
  } 
  invalidName(control:FormControl):{[s:string]:boolean}{
    if(this.invalidUserName.includes(control.value)){
      return {'Invalid Name':true}
    }
    return {}
  }
}

