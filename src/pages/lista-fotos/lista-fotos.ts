import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HttpRequestProvider } from "../../providers/http-request/http-request";

@IonicPage()
@Component({
  selector: "page-lista-fotos",
  templateUrl: "lista-fotos.html"
})
export class ListaFotosPage {
  listaFotos = new Array<any>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public httpRequest: HttpRequestProvider
  ) {}

  ionViewDidLoad() {
    this.httpRequest.getFotosLista().subscribe(
      (resultado: any) => {
        for (let i = 0; i < 20; i++) {
          this.listaFotos.push(resultado[i]);
        }
        this.listaFotos.forEach(element => {
          element.foto = "https://picsum.photos/462/308?image=" + element.id;
        });
      },
      error => {
        console.log("ERRO: " + error);
      }
    );
  }
}
