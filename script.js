TinyTurtle.apply(window, [undefined, 400, 400]);

var len = 50;
function square(){
forward(len);
right(90);
forward(len);
right(90);
forward(len);
right(90);
forward(len);
right(90);
forward(len);
}

function triangle(){
right(30);
forward(len);
right(120);
forward(len);
right(120);
forward(len);
}

function house(){
left(90);
forward(len);
right(90);
forward(len);
right(90);
forward(len);
right(90);
forward(len);
left(120);
forward(len);
left(120);
forward(len);
}

var rlen = 100;
function rectangle(){
right(60);
forward(rlen);
left(90);
forward(len);
left(90);
forward(rlen);
}
// Type your function call below
square();
triangle();
stamp();
house();
rectangle();

