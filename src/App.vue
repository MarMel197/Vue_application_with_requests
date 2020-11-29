<template>

    <div>
      <!-- <img src="@/images/logo.png"> -->
      <h1>Ghibli Movies</h1>
      <label for ="movie_select">Select a Movie: </label>
      <select id="movie_select" v-model="selectedMovie">
        <option disabled value="">Select a Movie</option>
        <option v-for="(movie, index) in movies" :key="index" :value="movie">{{movie.title}}</option>
      </select>
    
      <div>
        <movie-detail v-if="selectedMovie" :movie="selectedMovie"></movie-detail> 
      </div> 
      



      <!-- <movies-list id="movies_list" :movies='movies'></movies-list>
      <movie-detail :movie='selectedMovie'></movie-detail> -->
    </div>
</template>

<script>

import MoviesList from './components/MoviesList.vue';
import MovieDetail from './components/MovieDetail.vue';
import {eventBus} from './main.js';

export default {
  name: 'app',
  data(){
    return{
      movies: [],
    selectedMovie: null
    };
  },
  mounted(){
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(response => response.json())
    .then(data => this.movies = data)

    eventBus.$on('movie-selected', (movie) => {
      this.selectedMovie = movie;
    })
  },

  components: {
    "movies-list": MoviesList,
    "movie-detail": MovieDetail
  }
}

</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  div > h1 {
    font-family: "Roboto";
    font-size: 28px;
  }

  div > label {
    font-family: "Roboto";
    font-size: 16px; 
  }

    div > option {
    font-family: "Roboto";
    font-size: 16px; 
  }
</style>
