import { Component } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.css']
})
export class PortofolioComponent {
  src:any
  bindcondition:boolean=false

test(x:any){
this.bindcondition=true;
console.log(x)
this.src =$(x.target).next();
console.log(this.src);
this.src=this.src[0].attributes[1].nodeValue;
console.log(this.src);
$('.focus').removeClass('d-none');
}
hide(){
  $('.focus').removeClass('d-block');
  $('.focus').addClass('d-none');
}
}
