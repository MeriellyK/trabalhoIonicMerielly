import { HttpRequestProvider } from "./../../providers/http-request/http-request";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-mostra-fotos",
  templateUrl: "mostra-fotos.html"
})
export class MostraFotosPage {
  listaFotos = new Array<any>();
  fotoAtual = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public httpRequest: HttpRequestProvider
  ) {}

  ionViewDidLoad() {
    this.httpRequest.getFotoRandomica().subscribe(
      data => {
        this.listaFotos.push(data.url);
      },
      error => {
        console.log("ERRO: " + error);
      }
    );
  }

  proximaFoto() {
    var proximafoto = this.fotoAtual + 1;
    if (proximafoto == this.listaFotos.length) {
      this.httpRequest.getFotoRandomica().subscribe(
        resultado => {
          this.listaFotos.push(resultado.url);
          this.fotoAtual++;
        },
        error => {
          console.log("ERRO: " + error);
        }
      );
    } else this.fotoAtual++;
  }

  imagemAnterior() {
    if (this.fotoAtual <= 0) {
      return;
    }
    this.fotoAtual--;
  }
}
