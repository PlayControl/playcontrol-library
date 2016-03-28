/// <reference path="./ts/main.d.ts" />
export class Library {
    name:string;
    albums:Album[];
    constructor(nameArg:string){
        this.name = nameArg;
    };
    addAlbum(albumArg:Album){
        this.albums.push(albumArg);
    }
}

export class Album {
    name:string;
    date:{};
    songs:Song[];
    constructor(){

    };
    addSong(songArg:Song) {
        this.songs.push(songArg);
    };
}

export class Song {
    title:string;
    genre:Genre;
    text:string;
    album:Album;
    constructor(){

    };
}

export class Artist {
    constructor(){

    };
}

export class Genre {
    name:string;
    constructor(){

    };
}

