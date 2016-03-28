"use strict";
/// <reference path="./typings/main.d.ts" />
var Library = (function () {
    function Library(nameArg) {
        this.name = nameArg;
    }
    ;
    Library.prototype.addAlbum = function (albumArg) {
        this.albums.push(albumArg);
    };
    return Library;
}());
exports.Library = Library;
var Album = (function () {
    function Album() {
    }
    ;
    Album.prototype.addSong = function (songArg) {
        this.songs.push(songArg);
    };
    ;
    return Album;
}());
exports.Album = Album;
var Song = (function () {
    function Song() {
    }
    ;
    return Song;
}());
exports.Song = Song;
var Artist = (function () {
    function Artist() {
    }
    ;
    return Artist;
}());
exports.Artist = Artist;
var Genre = (function () {
    function Genre() {
    }
    ;
    return Genre;
}());
exports.Genre = Genre;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXljb250cm9sLmxpYnJhcnkuY2xhc3Nlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNENBQTRDO0FBQzVDO0lBR0ksaUJBQVksT0FBYztRQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDOztJQUNELDBCQUFRLEdBQVIsVUFBUyxRQUFjO1FBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FUQSxBQVNDLElBQUE7QUFUWSxlQUFPLFVBU25CLENBQUE7QUFFRDtJQUlJO0lBRUEsQ0FBQzs7SUFDRCx1QkFBTyxHQUFQLFVBQVEsT0FBWTtRQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDOztJQUNMLFlBQUM7QUFBRCxDQVZBLEFBVUMsSUFBQTtBQVZZLGFBQUssUUFVakIsQ0FBQTtBQUVEO0lBS0k7SUFFQSxDQUFDOztJQUNMLFdBQUM7QUFBRCxDQVJBLEFBUUMsSUFBQTtBQVJZLFlBQUksT0FRaEIsQ0FBQTtBQUVEO0lBQ0k7SUFFQSxDQUFDOztJQUNMLGFBQUM7QUFBRCxDQUpBLEFBSUMsSUFBQTtBQUpZLGNBQU0sU0FJbEIsQ0FBQTtBQUVEO0lBRUk7SUFFQSxDQUFDOztJQUNMLFlBQUM7QUFBRCxDQUxBLEFBS0MsSUFBQTtBQUxZLGFBQUssUUFLakIsQ0FBQSIsImZpbGUiOiJwbGF5Y29udHJvbC5saWJyYXJ5LmNsYXNzZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi90eXBpbmdzL21haW4uZC50c1wiIC8+XG5leHBvcnQgY2xhc3MgTGlicmFyeSB7XG4gICAgbmFtZTpzdHJpbmc7XG4gICAgYWxidW1zOkFsYnVtW107XG4gICAgY29uc3RydWN0b3IobmFtZUFyZzpzdHJpbmcpe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lQXJnO1xuICAgIH07XG4gICAgYWRkQWxidW0oYWxidW1Bcmc6QWxidW0pe1xuICAgICAgICB0aGlzLmFsYnVtcy5wdXNoKGFsYnVtQXJnKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBbGJ1bSB7XG4gICAgbmFtZTpzdHJpbmc7XG4gICAgZGF0ZTp7fTtcbiAgICBzb25nczpTb25nW107XG4gICAgY29uc3RydWN0b3IoKXtcblxuICAgIH07XG4gICAgYWRkU29uZyhzb25nQXJnOlNvbmcpIHtcbiAgICAgICAgdGhpcy5zb25ncy5wdXNoKHNvbmdBcmcpO1xuICAgIH07XG59XG5cbmV4cG9ydCBjbGFzcyBTb25nIHtcbiAgICB0aXRsZTpzdHJpbmc7XG4gICAgZ2VucmU6R2VucmU7XG4gICAgdGV4dDpzdHJpbmc7XG4gICAgYWxidW06QWxidW07XG4gICAgY29uc3RydWN0b3IoKXtcblxuICAgIH07XG59XG5cbmV4cG9ydCBjbGFzcyBBcnRpc3Qge1xuICAgIGNvbnN0cnVjdG9yKCl7XG5cbiAgICB9O1xufVxuXG5leHBvcnQgY2xhc3MgR2VucmUge1xuICAgIG5hbWU6c3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKCl7XG5cbiAgICB9O1xufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
