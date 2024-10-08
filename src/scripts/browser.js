import Particles  from "particlesjs";
console.log('Imported',Particles)
var particles = Particles.init({
	selector: '.background',
  color: ['green', 'red'],
  connectParticles: false,
  sizeVariation: 1000,
  maxParticles : 1000,
  responsive: [{
  	breakpoint: 800,
    options: {
    	color: '#00C9B1',
    	maxParticles: 80,
      connectParticles: false
    }
  }]
});
console.log('Running?',particles)