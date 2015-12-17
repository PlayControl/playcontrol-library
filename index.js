/// <reference path="./index.ts" />
var Library = (function () {
    function Library(nameArg) {
        this.name = nameArg;
    }
    ;
    Library.prototype.addAlbum = function (albumArg) {
        this.albums.push(albumArg);
    };
    return Library;
})();
var Album = (function () {
    function Album() {
    }
    ;
    Album.prototype.addSong = function (songArg) {
        this.songs.push(songArg);
    };
    ;
    return Album;
})();
var Song = (function () {
    function Song() {
    }
    ;
    return Song;
})();
var Artist = (function () {
    function Artist() {
    }
    ;
    return Artist;
})();
var Genre = (function () {
    function Genre() {
    }
    ;
    return Genre;
})();
/// <reference path="./typings/tsd.d.ts" />
/// <reference path="./playcontrol.library.classes.ts" />
var through = require("through2");
var path = require("path");
var libraryStore = [];
var playcontrolLibrary = {
    new: function (name) {
        if (name === void 0) { name = "undefined"; }
        var newLibrary = new Library(name);
        libraryStore.push(newLibrary);
        return newLibrary;
    }
};
