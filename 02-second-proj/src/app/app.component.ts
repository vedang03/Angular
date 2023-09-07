import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '02-second-proj';
  imgUrl = 'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg'
  img2Url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSijrXadAg0f2LNWhP3_lC72d-ejUBNCIRAhbtR-zrN0Iqjh8U9VMBpP-QDMCxyrdGEZWE&usqp=CAU'
  count :number = 0;
  message:any
  bgColor:any


  submittedValue:any
  inputValuee:any


  ngOnInit(): void {
   setInterval(()=>{
    this.count++
if(this.count%2==0){
  this.imgUrl=this.img2Url
}else{
  this.imgUrl='https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg'
}
   },1000)
}

primaryClicked(){
  this.bgColor='bg bg-primary'
this.message='Primary clicked'
}
warningClicked(){
  this.bgColor='bg bg-warning'
  this.message='Warning clicked'
}
dangerClicked(){
  this.bgColor='bg bg-danger text-white '
    this.message='Danger clicked'
}

onClick(){
 this.submittedValue=this.inputValuee
}
visibilityOfClear(){
  return this.inputValuee.length==0
}
  clear(){
    this.inputValuee=''
  }
  visibilityOfClearText(){
    return this.submittedValue.length==0
  }
}
