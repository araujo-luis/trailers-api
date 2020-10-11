import redis from 'redis';
import { REDIS_PORT } from './constants'

export const redisClient = redis.createClient(REDIS_PORT || '6379');