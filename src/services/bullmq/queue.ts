import { ConnectionOptions, DefaultJobOptions } from "bullmq"

export const redisConnection: ConnectionOptions = {
    host: process.env.REDIS_HOST as string,
    port: Number(process.env.REDIS_PORT),
};

export const defaultQueueOptions: DefaultJobOptions = {
    removeOnComplete: {
        count: 20,
        age: 60 * 60
    },
    attempts: 3,
    backoff: {
        type: "exponential",
        delay: 3 * 1000
    },
    removeOnFail: false,
};