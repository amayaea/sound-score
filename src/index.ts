import { MikroORM } from "@mikro-orm/core"
import { __prod__ } from "./constants"
import { Score } from "./entities/Score"

const main = async ()  => {
    const orm = await MikroORM.init({
        entities: ['./dist/entities'], 
        entitiesTs: ['./src/entities'],
        dbName: 'sound-score',
        type: 'postgresql',
        debug: !__prod__ 
    })
    const score = orm.em.create(Score, {
        name: "my first score!"
    })
}

main()