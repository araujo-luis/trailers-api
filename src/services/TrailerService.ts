import dotenv from 'dotenv';
import { Trailer } from '@App/models/Trailer';
import axios from 'axios';
import { LinkProvider } from '../utils/constants';

dotenv.config()
const { THE_MOVIE_API_TOKEN, THE_MOVIE_API_URL } = process.env; // TODO

const config = {
    headers: { Authorization: `Bearer ${THE_MOVIE_API_TOKEN}` } // TODO
}
export const getImdbId = async (movieLink: string): Promise<string> => {
    try {

        const response = await axios.get(movieLink);

        const imdbId = response.data._embedded['viaplay:blocks'][0]._embedded['viaplay:product'].content.imdb.id;

        return imdbId;

    } catch (error) {
        return error;
    }
}

export const getTrailersByImdbId = async (code: string): Promise<Trailer[]> => {
    try {
        const apiRequest = `${THE_MOVIE_API_URL}movie/${code}/videos`;

        const response = await axios.get(apiRequest, config);

        const results = response.data.results;

        const trailers = results.filter((result: Trailer) => result.type === 'Trailer')

        return trailers;

    } catch (error) {
        return error;
    }
}

export const getTrailersLinks = (trailers: Trailer[]): string[] => {
    const response = trailers.map((trailer: Trailer) => {
        return LinkProvider[trailer.site as 'YouTube' | 'Vimeo'] + trailer.key; // TODO
    });
    return response;
}

export const getTrailers = async (movieLink: string): Promise<string[]> => {
    try {

        const imdbID = await getImdbId(movieLink);
        const trailers = await getTrailersByImdbId(imdbID);

        const links = getTrailersLinks(trailers);
        return links;

    } catch (error) {
        return error;
    }
}