import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CorreioService } from 'src/app/services/correio.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nome!: string;
  eventoCollection!: any[];
  constructor(
    private readonly _correioService: CorreioService,
    private readonly _toastCtrl: ToastController
  ) {}

  localizarObj(evento) {
    let codigo = evento.detail.value;

    this._correioService.localizarObjeto(codigo).subscribe((resp) => {
      console.log(resp);
      let correio: any = resp;
      this.eventoCollection = correio.objetos[0].eventos;

      if (!this.eventoCollection) {
        this.enviarToast('Objeto não encontrado!');
      }
    });
  }

  async enviarToast(mensagem: string) {
    const toast = await this._toastCtrl.create({
      message: mensagem,
      duration: 3000,
      position: 'middle',
    });

    toast.present();
  }
}
