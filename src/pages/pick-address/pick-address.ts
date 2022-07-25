import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EnderecoDTO } from '../../models/endereco.dto';

@IonicPage()
@Component({
  selector: 'page-pick-address',
  templateUrl: 'pick-address.html',
})
export class PickAddressPage {

  items : EnderecoDTO[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.items = [
    {      
      id: "1",
      logradouro: "Rua nelson ricardo",
      numero: "13",
      complemento: "apto 77",
      bairro: "neve neve",
      cep: "18402133",
      cidade:{
        id:"1",
        nome:"Uberlândia",
        estado: {
          id: "1",
          nome: "Minas Gerais"
        }
      }
      },
      {      
        id: "2",
        logradouro: "Rua theo de monteiro",
        numero: "233",
        complemento: null,
        bairro: "Centro",
        cep: "19303101",
        cidade:{
          id:"3",
          nome:"São Paulo",
          estado: {
            id: "2",
            nome: "São Paulo"
          }
        }
        }
    ]
  }
}
