import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tarefaCollection: any[] = [];

  constructor(
    private readonly _alertCtrl: AlertController,
    private readonly _tarefaService: TarefaService
  ) {}

  ionViewDidEnter() {
    this.listarTarefa();
  }

  listarTarefa() {
    this.tarefaCollection = this._tarefaService.listar();
  }

  async showAdd() {
    const alert = await this._alertCtrl.create({
      header: 'Tarefa',
      inputs: [
        {
          name: 'tarefa',
          type: 'text',
          placeholder: 'Informe a tarefa',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {},
        },
        {
          text: 'Salvar',
          handler: (tarefa: string) => {
            this._tarefaService.salvar(tarefa, () => this.listarTarefa());
          },
        },
      ],
    });

    await alert.present();
  }

  delete(item) {    
    this._tarefaService.deleteItem(item);
    this.listarTarefa();
  }
}
