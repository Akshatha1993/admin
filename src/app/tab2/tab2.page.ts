import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  movie={
    name:'', year:'', image_url:'', production_house:'', rating:'',
    type:'', language:'', date:''
  };
  constructor(private router:Router, private movieService:MovieService) { }

  addMovie(){
  this.movieService.addMovie(this.movie).subscribe(()=>{
    console.log(this.movie);
    this.router.navigate(['/tabs/tab1']);
  });
}
}
