import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  persona:any[] = [];
  newPersona={
    apellido:"",
    nombre:"",
    fechaDeNacimiento: "",
    direccion:"",
    telefono:"",
    pais:""
  }
  isEditing:boolean = false;
  selectedPersona:any;
  
  constructor(private personaService: PersonaService){}

  ngOnInit(): void {
    this.getAllPersona();
  }

  getAllPersona(): void{
    this.personaService.getAllPersona()
    .subscribe((data: any)=>{
      this.persona = data;
    })
  }

  createPersona(): void{
    this.personaService.createPersona(this.newPersona)
    .subscribe((data: any)=>{
      console.log(data);
      this.getAllPersona();
      this.newPersona={
        apellido:"",
        nombre:"",
        fechaDeNacimiento:"",
        direccion:"",
        telefono:"",
        pais:""
      }
    })
  }

  updatePersona(): void{
    if(this.selectedPersona) {
      this.personaService.updatePersona(this.selectedPersona.id, this.selectedPersona)
      .subscribe(updatePersona=>{
        console.log(`Persona ${this.selectedPersona.nombre} actualizada`, updatePersona);
        this.isEditing = false;
        this.selectedPersona = null;
      })
    }
  }

  deletePersona(id: string):void {
    this.personaService.deletePersona(id)
    .subscribe((data: any)=>{
      console.log(data);
      this.getAllPersona();
    })
  }
  
   
  editPersona(id: string): void {
    this.isEditing = true;
    this.selectedPersona = this.persona.find(persona => persona.id === id);
  }
    
  cancelEdit(): void {
    this.isEditing = false;
    this.selectedPersona = null;
  }

 


}
