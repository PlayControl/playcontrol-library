/// <reference path="./index.ts" />
class Library {
    name:string;
    albums:Album[];
    constructor(nameArg:string){
        this.name = nameArg;
    };
    addAlbum(albumArg:Album){
        this.albums.push(albumArg);
    }
}

class Album {
    name:string;
    date:{};
    songs:Song[];
    constructor(){

    };
    addSong(songArg:Song) {
        this.songs.push(songArg);
    };
}

class Song {
    title:string;
    genre:Genre;
    text:string;
    album:Album;
    constructor(){

    };
}

class Artist {
    constructor(){

    };
}

class Genre {
    name:string;
    constructor(){

    };
}