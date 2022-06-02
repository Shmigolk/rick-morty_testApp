import React from "react";

async function getCharactersData() {
    const resp = await fetch(`https://rickandmortyapi.com/api/character/?page1`)
    const data = await resp.json()
    console.log(data)
}

export default function  CharactersFromAPI(){
    getCharactersData()
    return <p>Hey, i'm a test component</p>
}