// this -> object that is excuting a current function


const video = {
    title: "a",
    play() {
        console.log(this);
    }
};

video.play();