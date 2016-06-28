import THREE from 'three.js'
import Screen from '../screen'
import {gui} from '../controllers/gui';

export const cameraDev = new THREE.PerspectiveCamera( 65, Screen.width / Screen.height, 0.1, 100000 )
export const cameraUser = new THREE.PerspectiveCamera( 65, Screen.width / Screen.height, 0.1, 100000 )


let cameraFolder = gui.addFolder('camera')
//lightFolder.open()

cameraFolder.add(cameraDev.position, 'x', -1000, 1000).name('cameraDev x')
cameraFolder.add(cameraDev.position, 'y', -1000, 1000).name('cameraDev y')
cameraFolder.add(cameraDev.position, 'z', -1000, 1000).name('cameraDev z')

cameraFolder.add(cameraUser.position, 'x', -1000, 1000).name('cameraUser x')
cameraFolder.add(cameraUser.position, 'y', -1000, 1000).name('cameraUser y')
cameraFolder.add(cameraUser.position, 'z', -1000, 1000).name('cameraUser z')