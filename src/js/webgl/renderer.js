import THREE from 'three.js'
import Screen from '../screen';

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

renderer.setPixelRatio( window.devicePixelRatio )
renderer.setSize( Screen.width, Screen.height )

module.exports = renderer
