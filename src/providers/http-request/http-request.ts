import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";

@Injectable()
export class HttpRequestProvider {
  constructor(public http: Http) {
    console.log("Hello HttpRequestProvider Provider");
  }

  public getFotoRandomica() {
    return this.http.get("https://picsum.photos/462/308/?random");
  }

  public getFotosLista() {
    return this.http.get("https://picsum.photos/list")
    .map((data: any) => {
      return JSON.parse(data._body);
    });
  }

  public getFakeLista() {
    return this.http
      .get("https://jsonplaceholder.typicode.com/posts")
      .map((data: any) => {
        return JSON.parse(data._body);
      });
  }
}
