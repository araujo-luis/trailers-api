import { getImdbId } from '../services/TrailerService';

const HollywooodLink = 'https://content.viaplay.se/pc-se/film/once-upon-a-time...-in-hollywood-2019';
const bohemianRhapsody = 'https://content.viaplay.se/pc-se/film/bohemian-rhapsody-2018';


test('Get Once Upon a time in Hollywood IMDB Id', async () => {
    const imdb = await getImdbId(HollywooodLink);
    console.log("codigo", imdb);
    expect(imdb).toEqual('tt2584384');
});

test('Get Bohemian Rhapsody IMDB Id', async () => {
    const imdb = await getImdbId(bohemianRhapsody);
    expect(imdb).toBe('tt1727824');

});
