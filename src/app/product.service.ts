import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }
   public onGet():Observable<any>{
    return this.http.get<any>('http://localhost:8081/api/product')
  }
  public onPost():Observable<any>{
    return this.http.post<any>(' http://localhost:8081/api/product',
    {
      prodName : "choiii",
      prodPrice : '1000',
      manuDate : '342332',
      expDate: '43243',
      barcode : '4324234223'
})}
    public onPut():Observable<any> {
      return this.http.put('http://localhost:8081/api/product',(req,res) =>{const id = req.params.id;})};

  public onDelete():Observable<any>{
  return this.http.delete('http://localhost:8081/api/deleteProduct/5ea7caf22a46682ce0bb7c91')
}
}
