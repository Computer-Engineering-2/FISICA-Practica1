/**
 * Created by djunquero on 30/09/16.
 */

var canvas = document.getElementById('canvas');
var espai = new Espai(canvas,0,12,0,60);

// Mòdul = 10 pero totes les velocitats

var p2 = new Particula(1,1,0,1,'#0f0f0f');
p2.pos = new Vector(1,1);
p2.vel = new Vector(7,7); // 45º

var p3 = new Particula(1,0,0,1,'#ff0000');
p3.pos = new Vector(1,1);
p3.vel = new Vector(5,8.66); // 60º

var p4 = new Particula(1,0,0,1,'#ff0000');
p4.pos = new Vector(1,1);
p4.vel = new Vector(8.66,5); // 30º

var p5 = new Particula(1,0,0,1,'#00ff00');
p5.pos = new Vector(1,1);
p5.vel = new Vector(2.25882,9.65926); // 75º

var p6 = new Particula(1,0,1,1,'#00ff00');
p6.pos = new Vector(1,1);
p6.vel = new Vector(9.65926,2.25882); // 15º

var p7 = new Particula(1,0,1,1,'#0000ff');
p7.pos = new Vector(1,1);
p7.vel = new Vector(0,10); // 90º

// Creem una paret a y = 0
var paret = new Paret(new Vector(-10,0),new Vector(10,0));
// Creem una for�a de gravetat (acceleracio -10 m/s2)
var g = new Gravetat(-10);
// Iniciem l'animacio
window.onload = init;

function init() {
    setInterval(onEachStep, 1000/60); // 60 fps
};

function onEachStep() {
    // Avancem el temps calculant les noves posicions i velocitats
    Temps.euler(p2,1/60, g.forca(p2));
    Temps.euler(p3,1/60, g.forca(p3));
    Temps.euler(p4,1/60, g.forca(p4));
    Temps.euler(p5,1/60, g.forca(p5));
    Temps.euler(p6,1/60, g.forca(p6));
    Temps.euler(p7,1/60, g.forca(p7));
    // Comprovem si s'ha produit algun rebot


    if(paret.rebot(p2)) p2.vel = new Vector(0,0);
    if(paret.rebot(p3)) p3.vel = new Vector(0,0);
    if(paret.rebot(p4)) p4.vel = new Vector(0,0);
    if(paret.rebot(p5)) p5.vel = new Vector(0,0);
    if(paret.rebot(p6)) p6.vel = new Vector(0,0);
    if(paret.rebot(p7)) p7.vel = new Vector(0,0);

    // Borrem els objectes en les posicions anteriors
    espai.clear();
    // Dibuixem els objectes en les noves posicions
    p2.draw(espai);
    p3.draw(espai);
    p4.draw(espai);
    p5.draw(espai);
    p6.draw(espai);
    p7.draw(espai);
    paret.draw(espai);
};
