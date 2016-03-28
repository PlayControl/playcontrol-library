/// <reference path="./typings/main.d.ts" />
import classes = require("./playcontrol.library.classes");
let path = require("path");

var libraryStore:any = [];

let playcontrolLibrary = {
    new: function(name:string = "undefined"){
        var newLibrary = new classes.Library(name);
        libraryStore.push(newLibrary);
        return newLibrary;
    }
};

