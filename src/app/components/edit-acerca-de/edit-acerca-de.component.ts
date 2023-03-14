import { mergeNsAndName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/app/service/image.service';
import { PersonaService } from 'src/app/service/persona.service';


@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {
  persona: persona = null;
  storageService: any;
 
  
constructor(
    private personaService: PersonaService,
    private activatedRouter : ActivatedRoute,
    private router : Router,
    private imageService :ImageService) { }


    imagenes: any[] = [];
   cargarImagen(event: any){
    const id = this.activatedRouter.snapshot.params['id'];
    const nombre = "perfil_" + id
    let archivos  = event.target.files
    let reader = new FileReader();
    

    reader.readAsDataURL(archivos[0]);
    reader.onloadend =  () => {
      console.log(reader.result);
      this.imagenes.push(reader.result);
      this.storageService.subirImagen(nombre , reader.result).then((urlImagen: any) => {
        console.log(urlImagen);
      });
    }
    
    console.log(event.target.files); 

    
  
  }

  funcionDeLectura(){
    console.log("Hola")
  }
 
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data =>{ 
        this.persona = data;
      }, err =>{
         alert('Error al modificar');
         this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.persona.img = this.imageService.url
    this.personaService.update(id, this.persona).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la persona");
        this.router.navigate(['']);
      }
    )
  }
  
  uploadImage(Sevent: any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "perfil_" + id;
    this.imageService.uploadImage(Sevent,name)
  }
  }


