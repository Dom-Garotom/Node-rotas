import { fastify } from "fastify";
import DatabaseMemory from "./database-memory.js";

const server = fastify();

const dataBase = new DatabaseMemory();


server.get("/videos", (req, res ) =>{
    const videos = dataBase.list();


    console.log(dataBase.list());


    return res.send(videos);
})
 
server.post("/videos", (req , res) =>{
    const {title , description , duration} = req.body;

    dataBase.createVideos({
        title : title , 
        description : description,
        duration : duration
    });

    return res.status(201).send();
})

server.put("/videos/:id", (req ,res ) =>{
    const videoid = req.params.id;
    const {title , description , duration} = req.body;

    dataBase.updateVideos( videoid ,{
        title : title ,
        description : description,
        duration : duration
    });

    return res.status(204).send();

})

server.delete("/videos/delete/:id", ( req , res ) =>{
    const videoid = req.params.id;

    dataBase.deleteVideos(videoid);

    return res.status(200).send()
})


server.listen({
    port: 3333,
});
