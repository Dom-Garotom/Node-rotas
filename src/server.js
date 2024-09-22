import { fastify } from "fastify";
import DatabasePostgres from "./database-postgres.js";
// import DatabaseMemory from "../database-memory.js";

const server = fastify();

// const dataBase = new DatabaseMemory();
const dataBase = new DatabasePostgres()


server.get("/videos", async (req, res ) =>{
    const search = req.query.search;
    const videos = await dataBase.list(search);

    return res.send(videos); 
})
 
server.post("/videos", async (req , res) =>{
    const {title , description , duration} = req.body;

    await dataBase.createVideos({
        title : title , 
        description : description,
        duration : duration
    });

    return res.status(201).send();
})

server.put("/videos/:id", async (req ,res ) =>{
    const videoid = req.params.id;
    const {title , description , duration} = req.body;

    await dataBase.updateVideos( videoid ,{
        title : title ,
        description : description,
        duration : duration
    });

    return res.status(204).send();

})

server.delete("/videos/delete/:id", async ( req , res ) =>{
    const videoid = req.params.id;

    await dataBase.deleteVideos(videoid);

    return res.status(204).send()
})


server.listen({
    port: process.env.PORT ?? 333,
});
