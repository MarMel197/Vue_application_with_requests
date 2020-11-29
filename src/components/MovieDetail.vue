<template>
    <div id="selected_movie" v-if="movie">
        <h3>{{movie.title}}</h3>
        <p>Director   : {{movie.director}}</p>
        <p>Produer    : {{movie.producer}}</p>
        <p>Released   : {{movie.release_date}}</p>
        <p>Rotten 🍅  : {{movie.rt_score}}</p>
        <p>Description: {{movie.description}}</p>
    </div>
    <div v-else>
        <h4>Please select a movie</h4>
    </div>
</template>

<script>
export default {
    name: 'movie-detail',
    props: ['movie']
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

div h4 {
    font-family: "Roboto";
    font-size: 20px;
    color: rgb(0,51,160);
}
div > h3{
    font-family: "Roboto";
    font-size: 20px;
    color: rgb(0,51,160);
}
p {
    font-family: "Roboto";
    font-size: 16px;
    color: rgb(0,51,160);
    background-color: rgb 240, 240, 240;
}
</style>