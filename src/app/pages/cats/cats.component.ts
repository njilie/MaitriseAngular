import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cat } from 'src/app/models/cat';
import { CatServiceService } from 'src/app/services/cat-service.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {

  cats: Cat[];

  constructor(private catService: CatServiceService, private router: Router) { 
    this.catService.getAll().subscribe( data=> {
      this.cats = data;
    })
  }

  ngOnInit(): void {
  }

  /*new(){
    this.router.navigate(['/form']);
  }*/

  onDelete(id: number){
    this.catService.delete(id).then(() => {
      this.cats = this.cats.filter(cat => cat.id != id);
    });
  }

}
