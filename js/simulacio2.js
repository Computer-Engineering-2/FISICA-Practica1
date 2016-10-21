// Recuperem el canvas i creem l'espai de treball (20x20)
var canvas = document.getElementById('canvas');
var espai = new Espai(canvas,-10,10,0,20);
// Creem dues particules que situem a al�ades diferents

var p2 = new Particula(1,0,1,1);
p2.pos = new Vector(-6,15);
p2.vel = new Vector(0,0);

var p3 = new Particula(1,0,0.8,1);
p3.pos = new Vector(-4,15);
p3.vel = new Vector(0,0);

var p4 = new Particula(1,0,0.6,1);
p4.pos = new Vector(-2,15);
p4.vel = new Vector(0,0);

var p5 = new Particula(1,0,0.4,1);
p5.pos = new Vector(0,15);
p5.vel = new Vector(0,0);

var p6 = new Particula(1,0,0.2,1);
p6.pos = new Vector(2,15);
p6.vel = new Vector(0,0);

var p7 = new Particula(1,0,0,1);
p7.pos = new Vector(4,15);
p7.vel = new Vector(0,0);

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
    paret.rebot(p2);
    paret.rebot(p3);
    paret.rebot(p4);
    paret.rebot(p5);
    paret.rebot(p6);
    paret.rebot(p7);
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
