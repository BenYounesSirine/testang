import { Component, OnInit ,Input} from '@angular/core';
import {livres} from '../livres-list/livres';
@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {

  @Input()p1:string;
  @Input()ll:livres;

  p:number;
  nb=0;
  constructor() { }

  fct(){
    
    if(this.p<this.ll.prix){
      return this.nb+1;
    }
  }
  ngOnInit() {
  }

}
