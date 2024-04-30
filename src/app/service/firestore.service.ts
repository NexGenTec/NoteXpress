import { inject, Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  firestores = inject(Firestore)

  constructor() { }

  getCollection<tipo>(path: string) {
    const refCollection = collection(this.firestores, path);
    return collectionData(refCollection) as Observable<tipo[]>;
  }
}
