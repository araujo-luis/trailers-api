[![Build Status](https://travis-ci.org/l222p/trailers-api.svg?branch=main)](https://travis-ci.org/l222p/trailers-api)

# trailers-api
REST API for providing clients with trailer URLs. The API takes a movie resource link (e.g. https://content.viaplay.se/pc-se/film/arrival-2016) as input and based on that return the URL to the trailer for that movie. 

### Requeriments

* Node 12.14.1 or higher
* Redis 2.4.5 or higher


### Usage 
You need to create a `.env` file at project level with the enviroment variables defined in this README, a [The Movie DB](https://www.themoviedb.org/documentation/api) API Bearer Token is required. Also you will need to download and start a Redis Server and set the PORT at the `.env` file. Then, you need to install and start the project with the proper commands. 

Then you will be able to request for movie trailers following this endpoint:

```
http://localhost:<PORT>/trailer/?movieLink=<MovieLink>
```

For example
```
http://localhost:6000/trailer/?movieLink=https://content.viaplay.se/pc-se/film/once-upon-a-time...-in-hollywood-2019
```
Response
```json
{
    "code": 200,
    "message": "Success",
    "data": [
        "https://www.youtube.com/watch?v=ELeMaP8EPAA"
    ]
}
```

### Env variables
```
PORT = 6000
THE_MOVIE_API_URL = https://api.themoviedb.org/3/
THE_MOVIE_API_TOKEN = <BEARER TOKEN>
REDIS_PORT = 6379
```

### Installing

```
$ npm install
```

### Testing

```
$ npm test
```

### Starting

```
$ npm start
```



## Authors

* **Luis Araujo** - [luisaraujo.io](https://luisaraujo.io)

## License

This project is licensed under the MIT License.
