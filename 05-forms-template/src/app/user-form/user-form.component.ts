import { Component , Output , Input , EventEmitter} from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
@Output() userData = new EventEmitter<any>()

onSubmit(form:NgForm){
 this.userData.emit({email:form.form.value.email , password:form.form.value.password , 
                      optionValue:form.form.value.optionValue})
}

}
