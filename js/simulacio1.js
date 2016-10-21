/**
 * Created by Jan Jiménez Serra on 30/09/2016.
 */
// Recuperem el canvas i creem l'espai de treball (20x20)
var canvas = document.getElementById('canvas');
var espai = new Espai(canvas,-10,10,0,20);
// Creem dues particules que situem a al�ades diferents
var p1 = new Particula(1,0,1,1.5,'#0000ff');
p1.pos = new Vector(-4,12);
p1.vel = new Vector(0,0);
var p2 = new Particula(1,0,1,1.5,'#2f4f4f');
p2.pos = new Vector(4,12);
p2.vel = new Vector(0,0);
// Creem una paret a y = 0
var paret = new Paret(new Vector(-10,0),new Vector(10,0));
// Creem una for�a de gravetat de la terra(acceleracio -10 m/s2)
var gterra = new Gravetat(-10);
// Creem una for�a de gravetat de la lluna(acceleracio -10/6 m/s2)
var glluna = new Gravetat(-10/6);
// Iniciem l'animacio
window.onload = init;

function init() {
    setInterval(onEachStep, 1000/60); // 60 fps
};

function onEachStep() {
    // Avancem el temps calculant les noves posicions i velocitats
    Temps.euler(p1,1/60,gterra.forca(p1));
    Temps.euler(p2,1/60, glluna.forca(p2));
    // Comprovem si s'ha produit algun rebot
    paret.rebot(p1);
    paret.rebot(p2);
    // Borrem els objectes en les posicions anteriors
    espai.clear();
    // Dibuixem els objectes en les noves posicions
    p1.draw(espai);
    p2.draw(espai);
    paret.draw(espai);
};