import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ZonesValidator } from '../shared/longueur-minimum/longueur-minimum.component';

@Component({
  selector: 'Inter-probleme',
  templateUrl: './probleme.component.html',
  styleUrls: ['./probleme.component.css']
})
export class ProblemeComponent implements OnInit {
  problemeForm: FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.problemeForm = this.fb.group({
      prenom: ['', [ZonesValidator.longueurMinimum(3), Validators.required]]
    });
  }

  save(){
    alert('Bonjour');
  }

}
