
import App from '@/App.vue';

import {moviesData} from './movies.js';

import {shallowMount} from '@vue/test-utils';

import fetch from 'fetch-mock';
describe('App', () => {

    let wrapper;

  beforeEach(async () => {

    fetch.once('https://ghibliapi.herokuapp.com/films', JSON.stringify(moviesData));
    wrapper = shallowMount(App);

    await wrapper.vm.$nextTick();
    
    fetch.reset();
  });
  it('should have 2 movies', () => {
    expect(wrapper.vm.movies).toHaveLength(2);
  });
  it('should have a director', () => {
  expect(wrapper.vm.movies[0].director).toHaveLength(14);
  });
  it('should have another director', () => {
    expect(wrapper.vm.movies[1].director).toHaveLength(13);
  });
  it('should have another director', () => {
    expect(wrapper.vm.movies[0].rt_score).toEqual("95");
  });
})
