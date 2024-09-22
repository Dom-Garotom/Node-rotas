import {randomUUID} from "node:crypto"
import {sql} from "./db.js"

export default class DatabasePostgres {

    async list(search){
        let videos;

        if (search){
            videos = await sql`select * from videos where title  ilike ${"%" + search + "%"}`;
        } else{
            videos = await sql`select * from videos `;
        }

        return videos;
    }

    async createVideos( videos ){
        const videoId = randomUUID();
        const {title, description , duration} = videos;
        await sql`insert  into videos (id , title ,  description , duration) VALUES (${videoId} , ${title} , ${description} , ${duration})`
    }

    async updateVideos( videoId , videos ){
        const {title, description , duration} = videos;
        await sql`UPDATE videos SET title = ${title} , description = ${description} , duration =  ${duration} WHERE id = ${videoId} `
    }

    async deleteVideos( videoId ){
        await sql`DELETE FROM videos WHERE id = ${videoId} `
    }


}