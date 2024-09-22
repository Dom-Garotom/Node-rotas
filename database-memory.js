import {randomUUID} from "node:crypto"

export default class DatabaseMemory {
    #videos = new Map();

    list(search){
        return Array.from(this.#videos.entries())
        .map( (videoArray) =>{
            const id = videoArray[0];
            const data = videoArray[1];

            return{
                id,
                ...data,
            }

        })
        .filter( ( videos) => {
            if (search){
                return videos.title.includes(search);
            } 

            return true;
        });
    }

    createVideos( videos ){
        const idVideos = randomUUID();

        this.#videos.set(idVideos, videos);    
    }

    updateVideos( idVideos , videos ){
        this.#videos.set(idVideos, videos);    
    }

    deleteVideos( idVideos ){
        this.#videos.delete(idVideos);    
    }


}