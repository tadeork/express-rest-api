const axios = require('axios');

const URL_BASE = 'https://pokeapi.co/api/v2/';

exports.getPokemons = () => {
    return axios.get(URL_BASE + 'pokemon/1');
};
