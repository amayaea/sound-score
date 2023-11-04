import { MikroORM } from "@mikro-orm/core"
import { __prod__ } from "./constants"
import { Score } from "./entities/Score"
import microConfig from "./mikro-orm.config"

const main = async ()  => {
    const orm = await MikroORM.init(microConfig)
    const score = orm.em.create(Score, {
        name: "my first score!"
    })
    await orm.em.persistAndFlush(score)
}

main()