var video = {
    //members
    videoName: "Intro to JS",
    fileFormat: "mp4",
    duration: "2:48",
    owner: "Samar",

    //methods
    getVideoName: function() {
        return this.videoName
    },
    getFileFormat: function() {
        return this.fileFormat
    },
    getDuration: function() {
        return this.duration
    },
    getOwner: function() {
        return this.owner
    }
}
console.log(video.getVideoName())


//concept of this keyword
var firstName = "Samar"
var person = {
    firstName: 'Jack',
    yearOfBirth: 1990,
    job: 'Pilot',
    getName: function() {
        console.log(this.firstName)
    },
    parents: {
        firstName: 'Ryan',
        yearOfBirth: 1990,
        job: 'Pilot',
        getName: function() {
            console.log(this.firstName)
        }   
    }
}
person.getName()
person.parents.getName()