import Happens from 'happens';

export default new class Screen{

	constructor(){

		Happens( this );

		this.width  = window.innerWidth;
		this.height = window.innerHeight;

		window.addEventListener('resize', this.onResize.bind(this), false);

		this.onResize();
	}

	onResize(){
		this.width  = window.innerWidth;
		this.height = window.innerHeight;

		this.emit( 'resize' );
	}
};