import { Component, OnInit } from '@angular/core';
import { MoviesapiService } from '../../services/movies/moviesapi.service';


@Component({
  selector: 'app-movies-carousel',
  templateUrl: './movies-carousel.component.html',
  styleUrls: ['./movies-carousel.component.scss']
})
export class MoviesCarouselComponent implements OnInit {
 movies: any;
  
  constructor(private movieservice: MoviesapiService) { }

  ngOnInit() {
    this.movieservice.getPopular(1).subscribe((data)=>{
      console.log(data);
      this.movies = data.results;
      this.movies.forEach(np => np['isMovie'] = true);
    });
  }

}
