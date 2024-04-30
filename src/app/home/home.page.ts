import { Component } from '@angular/core';
import { FirestoreService } from '../service/firestore.service';
import { Notas } from '../model/notas.model';
import { NoteModalPage } from '../note-modal/note-modal.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  notas: Notas[] = []

  constructor(private firestores: FirestoreService,
    private modalController: ModalController
  ) {
    this.loadNotas();
  }

  loadNotas() {
    this.firestores.getCollection<Notas>('Notas').subscribe(nota => {
      if (nota) {
        this.notas = nota
      }
    })
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: NoteModalPage, // Componente del modal
      cssClass: 'add-note-modal' // Clase CSS personalizada para el modal
    });
    await modal.present();
  }

}
