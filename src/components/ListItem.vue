<template>
    <li v-on:click="handleClick">{{movie.title}}</li>
</template>

<script>

import {eventBus} from '@/main.js'

export default {
    name: 'list-item',
    props: ['movie'],
    methods: {
        handleClick(){
            eventBus.$emit('movie-selected', this.movie)
            console.log('movie', this.movie)
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');


li {
    font-family: "Roboto";
    font-size: 20px;
    color: rgb 0,51,160;
    background-color: rgb 240, 240, 240;
}
</style>