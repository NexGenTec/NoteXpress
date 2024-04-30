import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-note-modal',
  templateUrl: './note-modal.page.html',
  styleUrls: ['./note-modal.page.scss'],
})
export class NoteModalPage implements OnInit {

  nombre!: string;
  comentario!: string;

  constructor(private modalController: ModalController) { }

  ngOnInit(): void {

  }

  closeModal() {
    this.modalController.dismiss();
  }

  guardarNota() {
    const nota = {
      nombre: this.nombre,
      comentario: this.comentario
    };
    this.modalController.dismiss(nota);
  }
}
