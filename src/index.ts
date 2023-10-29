import { MikroORM } from "@mikro-orm/core"
import { __prod__ } from "./constants"
import { Album } from "./entities/Album"
import { Score } from "./entities/Score"
import { User } from "./entities/User"
import { Artist } from "./entities/Artist"

const orm = MikroORM.init({
    entities: [Album, Score, User, Artist],
    dbName: 'sound-score',
    type: 'postgresql',
    debug: !__prod__ 
})

console.log("Hello World")