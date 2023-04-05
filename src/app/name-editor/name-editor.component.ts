import { Component } from '@angular/core';  
import { FormControl } from '@angular/forms';  

@Component({  
  selector: 'app-name-editor',  
  templateUrl: './name-editor.component.html',  
  styleUrls: ['./name-editor.component.css']  
})  
export class NameEditorComponent {  
  empId = new FormControl('');  
  empFirstName = new FormControl('');
  empLastName = new FormControl('');
  empSalary = new FormControl('');
}  
