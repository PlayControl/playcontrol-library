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
}());
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
var Song = (function () {
    function Song() {
    }
    ;
    return Song;
}());
var Artist = (function () {
    function Artist() {
    }
    ;
    return Artist;
}());
var Genre = (function () {
    function Genre() {
    }
    ;
    return Genre;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXljb250cm9sLmxpYnJhcnkuY2xhc3Nlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQ0FBbUM7QUFDbkM7SUFHSSxpQkFBWSxPQUFjO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO0lBQ3hCLENBQUM7O0lBQ0QsMEJBQVEsR0FBUixVQUFTLFFBQWM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQUVEO0lBSUk7SUFFQSxDQUFDOztJQUNELHVCQUFPLEdBQVAsVUFBUSxPQUFZO1FBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdCLENBQUM7O0lBQ0wsWUFBQztBQUFELENBVkEsQUFVQyxJQUFBO0FBRUQ7SUFLSTtJQUVBLENBQUM7O0lBQ0wsV0FBQztBQUFELENBUkEsQUFRQyxJQUFBO0FBRUQ7SUFDSTtJQUVBLENBQUM7O0lBQ0wsYUFBQztBQUFELENBSkEsQUFJQyxJQUFBO0FBRUQ7SUFFSTtJQUVBLENBQUM7O0lBQ0wsWUFBQztBQUFELENBTEEsQUFLQyxJQUFBIiwiZmlsZSI6InBsYXljb250cm9sLmxpYnJhcnkuY2xhc3Nlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL2luZGV4LnRzXCIgLz5cbmNsYXNzIExpYnJhcnkge1xuICAgIG5hbWU6c3RyaW5nO1xuICAgIGFsYnVtczpBbGJ1bVtdO1xuICAgIGNvbnN0cnVjdG9yKG5hbWVBcmc6c3RyaW5nKXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZUFyZztcbiAgICB9O1xuICAgIGFkZEFsYnVtKGFsYnVtQXJnOkFsYnVtKXtcbiAgICAgICAgdGhpcy5hbGJ1bXMucHVzaChhbGJ1bUFyZyk7XG4gICAgfVxufVxuXG5jbGFzcyBBbGJ1bSB7XG4gICAgbmFtZTpzdHJpbmc7XG4gICAgZGF0ZTp7fTtcbiAgICBzb25nczpTb25nW107XG4gICAgY29uc3RydWN0b3IoKXtcblxuICAgIH07XG4gICAgYWRkU29uZyhzb25nQXJnOlNvbmcpIHtcbiAgICAgICAgdGhpcy5zb25ncy5wdXNoKHNvbmdBcmcpO1xuICAgIH07XG59XG5cbmNsYXNzIFNvbmcge1xuICAgIHRpdGxlOnN0cmluZztcbiAgICBnZW5yZTpHZW5yZTtcbiAgICB0ZXh0OnN0cmluZztcbiAgICBhbGJ1bTpBbGJ1bTtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgfTtcbn1cblxuY2xhc3MgQXJ0aXN0IHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgfTtcbn1cblxuY2xhc3MgR2VucmUge1xuICAgIG5hbWU6c3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKCl7XG5cbiAgICB9O1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
