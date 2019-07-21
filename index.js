//node modules system
var Mouse = require('./mouse');
function Cat()
{
    this.stomach=[];
}
Cat.prototype.eat=function(mouse)
{
    this.stomach.push(mouse);
    mouse.die();
}
var mickey= new Mouse('White');
var jerry= new Mouse('yellow');
console.log(mickey);
console.log(jerry);
var tom= new Cat();
tom.eat(jerry);
console.log(tom);