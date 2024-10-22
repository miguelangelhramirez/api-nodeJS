import "reflect-metadata"
import app from './app'
import { AppDataSource } from "./db/db";
import { AppRoutes } from "./router/router"

async function main() {

    try {

        await AppDataSource.initialize();
        app.listen(3000);
        console.log(`app runing on port `+3000);
    } catch (error) {
        console.log(error)
    }
    
}

main();

