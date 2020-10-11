/**
 * @jest-environment node
 */

import { getImdbId } from '../services/TrailerService';

const HollywooodLink = 'https://content.viaplay.se/pc-se/film/once-upon-a-time...-in-hollywood-2019';
const bohemianRhapsody = 'https://content.viaplay.se/pc-se/film/bohemian-rhapsody-2018';
const jojoRabbit = 'https://content.viaplay.se/pc-se/film/jojo-rabbit-2019';

test('Get Once Upon a time in Hollywood IMDB Id', async () => {
    const imdb = await getImdbId(HollywooodLink);
    
    expect(imdb).toEqual('tt7131622');
});

test('Get Bohemian Rhapsody IMDB Id', async () => {
    const imdb = await getImdbId(bohemianRhapsody);
    expect(imdb).toEqual('tt1727824');

});

test('Get JojoRabbit IMDB Id', async () => {
    const imdb = await getImdbId(jojoRabbit);
    expect(imdb).toEqual('tt2584384');

});

test('Get JojoRabbit IMDB Id', async () => {
    const imdb = await getImdbId(jojoRabbit + '123');
    expect(imdb).toThrow('Error: Request failed with status code 404');

});