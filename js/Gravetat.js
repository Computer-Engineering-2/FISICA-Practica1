// DEPENDENCIES: Particula
function Gravetat(acceleracio) {
	var g = acceleracio;	
	this.forca = function(particula) {
		return new Vector(0,particula.massa*g);
	}
};
