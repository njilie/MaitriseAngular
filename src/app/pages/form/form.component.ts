import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cat } from 'src/app/models/cat';
import { CatServiceService } from 'src/app/services/cat-service.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  catform: FormGroup;
 
  header: string;
  id: number;
  cat = {};
  cats: Cat[];

  constructor(private formBuilder: FormBuilder, private catService: CatServiceService, private router: Router, private route:ActivatedRoute) {
    this.catform = this.formBuilder.group({
      nom: ['', Validators.required],
      age: ['1', Validators.required],
      race: ['', Validators.required],
      vivant: false,
    });
   }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.header = this.id === 0? "Ajouter un nouveau chat":"Editer ce chat";

    if(this.id != 0){
      this.catService.getId(this.id)
          .subscribe( cat => {
            this.updateItemForm(cat);
      });
    }
  }

  private updateItemForm(cat) {

    this.catform.patchValue({
        nom: cat.nom,
        age: cat.age,
        race: cat.race,
        vivant: cat.vivant,
        id: cat.id
    });
  }

  onSubmit(){
    if (this.catform.valid){
      if(this.id === 0){
        this.catService.create(this.catform.value).subscribe(() =>{
          this.router.navigate(['/cats']); 
        }); 
      }else{
        this.catService.update(this.catform.value, this.id).subscribe( () =>{
          this.router.navigate(['/cats']); 
        });
      }
   
    }
    else {
      alert("Le formulaire n'est pas valide!");
    }
  }

  canDeactivate(): boolean {
    return this.catform.pristine;
  }

}
