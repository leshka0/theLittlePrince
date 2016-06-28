import {gui} from './controllers/gui';

let folder = gui.addFolder('flags')
//folder.open()

export const live  		 = false;
export const debug  	 = false;
export const soundActive = false;
export const showHelpers = false;
export const showGUI 	 = true;

folder.add(exports, 'debug')
folder.add(exports, 'showHelpers')
 