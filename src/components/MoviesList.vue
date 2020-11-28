<template>
    <div>
        <ul>
            <list-item v-for="(movie, index) in movies" :movie="movie" :key="index"></list-item>
        </ul>
    </div>
</template>

<script>

import ListItem from './ListItem.vue';

export default {
    name: 'movie-list',
    props: ['movies'],

    components: {
        "list-item": ListItem
    }


}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');


div > ul {
    font-family: "Roboto";
    font-size: 18px;
    color: rgb 39,50,56;
    background-color: rgb 240, 240, 240;
}
</style>