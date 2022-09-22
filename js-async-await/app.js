"use strict";

// Basis API URL
const api_base = "https://pokeapi.co/api/v2/";
const endpoint_pokemon = "pokemon/";
const endpoint_type = "type/";




// fetch(url).then( response => response.json() ).then( data => console.log( data.results ) );

async function getPokemons()
{
    const url = `${api_base}${endpoint_pokemon}25/`;
    const response = await httpGet(url);
    const pokemons = response;

    console.log(pokemons);
}

async function httpGet(url)
{
    const response = await fetch(url);
    const json = await response.json();

    return json;
}

getPokemons();