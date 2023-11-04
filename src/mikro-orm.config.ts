import { Options } from "@mikro-orm/postgresql";
import { __prod__ } from "./constants";
import path from 'path'

const config: Options = {
    migrations: {
        path: path.join(__dirname, './migrations'),
        pathTs: undefined, 
        glob: '!(*.d).{js,ts}',
    },
    entities: ['./dist/entities'], 
    entitiesTs: ['./src/entities'],
    dbName: 'sound-score',
    type: 'postgresql',
    debug: !__prod__ 
} 
export default config