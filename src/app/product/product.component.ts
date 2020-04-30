import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
public pointer : Observable<any>;
  constructor(public service : ProductService) { }

  ngOnInit(): void {
  }
  onGet(){
    this.service.onGet().subscribe(data => console.log(data));
    
  }
  onPut(){
   this.service.onPut().subscribe(data => console.log(data));

   }
   onPost(){
     this.service.onPost().subscribe(data => console.log(data));

   }
   onDelete(){
     this.service.onDelete().subscribe(data => console.log(data));
 }
}