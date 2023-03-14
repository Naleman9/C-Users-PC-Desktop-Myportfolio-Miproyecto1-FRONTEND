import { Injectable } from '@angular/core';
import {Storage,ref,uploadBytes,getDownloadURL,list,} from '@angular/fire/storage';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { environment } from 'src/environments/environment';

firebase.initializeApp(environment.firebase)


@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = "";

  constructor(private storage: Storage) { }
  public uploadImage(Sevent: any, name: string){
  const file = Sevent.target.files[0]
  const imgRef = ref(this.storage, `imagen/` + name)
  uploadBytes(imgRef, file)
    .then((response) => {this.getImages()})
    .catch((error) => console.log(error))
}

getImages(){
  const imagesRef = ref(this.storage,'imagen');
  list(imagesRef)
    .then(async response =>{
      for (let item of response.items) {
        this.url = await getDownloadURL(item);
        console.log("La URL es: " + this.url);
      }
    })
    .catch(error => console.log(error))
}
}
