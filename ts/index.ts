/// <reference path="./typings/tsd.d.ts" />
/// <reference path="./playcontrol.library.classes.ts" />
var through = require("through2");
var path = require("path");

var libraryStore:any = [];

var playcontrolLibrary = {
    new: function(name:string = "undefined"){
        var newLibrary = new Library(name);
        libraryStore.push(newLibrary);
        return newLibrary;
    }
};

