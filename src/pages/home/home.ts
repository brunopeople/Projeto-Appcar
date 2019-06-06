import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import {Carro} from '../../modelos/carro';
import {CarrosServiceProvider} from '../../providers/carros-service/carros-service';
import { NavLifecycles } from '../../utils/ionic/nav/nav-lifecycle';
import { HttpErrorResponse } from '@angular/common/http';
import {EscolhaPage} from '../escolha/escolha'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements NavLifecycles {

 public carros: Carro[];

  constructor(public navCtrl: NavController,
  private _loadingCtrl: LoadingController,
  private _alertCtrl: AlertController,
  private _carrosService: CarrosServiceProvider ) {}

  ionViewDidLoad(){
    let loading = this._loadingCtrl.create({
      content: 'Carregando os carros...'
    });

    loading.present();

    this._carrosService.lista()
    .subscribe(
      (carros) => {
        this.carros = carros;
        loading.dismiss();
      },
        (err: HttpErrorResponse) => {
          console.log(err);

          loading.dismiss();

          this._alertCtrl.create({
            title: 'Falha na conexão de servidor',
            subTitle: 'Não foi possível carregar a lsita de carros. Tente novamente mais tarde!',
            buttons:[
              {text:'Ok'}
            ]
          }).present();
        }
    );
    
  }

    selecionaCarro(carro:Carro){
      console.log(carro);
      this.navCtrl.push(EscolhaPage.name,{
        carroSelecionado: carro
      });
    }
   }
