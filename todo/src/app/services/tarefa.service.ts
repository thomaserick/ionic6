import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  tarefaCollection: any[] = [];
  Key: string = 'Tarefas';

  constructor() {}

  salvar(tarefa: any, callback: Function) {
    tarefa.done = false;
    let value = localStorage.getItem(this.Key);
    if (value) {
      this.tarefaCollection = JSON.parse(value);
    }

    console.log(tarefa);

    this.tarefaCollection.push(tarefa);
    localStorage.setItem(this.Key, JSON.stringify(this.tarefaCollection));

    if (callback) {
      callback();
    }
  }

  listar(): Array<string> {
    let value = localStorage.getItem(this.Key);

    if (value) {
      return JSON.parse(value);
    }

    return [];
  }

  deleteItem(item: any) {
    let tarefas = this.listar();

    if (tarefas) {
      tarefas.splice(item, 1);
      localStorage.setItem(this.Key, JSON.stringify(tarefas));
    }
  }
}
