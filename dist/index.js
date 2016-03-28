"use strict";
/// <reference path="./typings/main.d.ts" />
var classes = require("./playcontrol.library.classes");
var path = require("path");
var libraryStore = [];
var playcontrolLibrary = {
    new: function (name) {
        if (name === void 0) { name = "undefined"; }
        var newLibrary = new classes.Library(name);
        libraryStore.push(newLibrary);
        return newLibrary;
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw0Q0FBNEM7QUFDNUMsSUFBTyxPQUFPLFdBQVcsK0JBQStCLENBQUMsQ0FBQztBQUMxRCxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFM0IsSUFBSSxZQUFZLEdBQU8sRUFBRSxDQUFDO0FBRTFCLElBQUksa0JBQWtCLEdBQUc7SUFDckIsR0FBRyxFQUFFLFVBQVMsSUFBeUI7UUFBekIsb0JBQXlCLEdBQXpCLGtCQUF5QjtRQUNuQyxJQUFJLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM5QixNQUFNLENBQUMsVUFBVSxDQUFDO0lBQ3RCLENBQUM7Q0FDSixDQUFDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vdHlwaW5ncy9tYWluLmQudHNcIiAvPlxuaW1wb3J0IGNsYXNzZXMgPSByZXF1aXJlKFwiLi9wbGF5Y29udHJvbC5saWJyYXJ5LmNsYXNzZXNcIik7XG5sZXQgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuXG52YXIgbGlicmFyeVN0b3JlOmFueSA9IFtdO1xuXG5sZXQgcGxheWNvbnRyb2xMaWJyYXJ5ID0ge1xuICAgIG5ldzogZnVuY3Rpb24obmFtZTpzdHJpbmcgPSBcInVuZGVmaW5lZFwiKXtcbiAgICAgICAgdmFyIG5ld0xpYnJhcnkgPSBuZXcgY2xhc3Nlcy5MaWJyYXJ5KG5hbWUpO1xuICAgICAgICBsaWJyYXJ5U3RvcmUucHVzaChuZXdMaWJyYXJ5KTtcbiAgICAgICAgcmV0dXJuIG5ld0xpYnJhcnk7XG4gICAgfVxufTtcblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
