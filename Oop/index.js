//Objects

/*const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        console.log("draw");
    }
};

circle.draw();*/


//factories/constructor function


function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log("draw");
        }
    }
}

const circle = createCircle(1);
circle.draw();

//constructor

