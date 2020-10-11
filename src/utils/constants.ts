import dotenv from 'dotenv';
dotenv.config();
export const { THE_MOVIE_API_TOKEN, REDIS_PORT, THE_MOVIE_API_URL } = process.env;

export const LinkProvider = {
    YouTube: 'https://www.youtube.com/watch?v=',
    Vimeo: 'https://vimeo.com/'
}

export const BearerAuthorization = {
    headers: { Authorization: `Bearer ${THE_MOVIE_API_TOKEN}` }
}