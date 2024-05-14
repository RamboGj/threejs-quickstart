import * as THREE from "three"
import texture from "../static/texture.jpg"

const canvas = document.querySelector("canvas.webgl")

const scene = new THREE.Scene()

// Object
// const materialv2 = new THREE.MeshMatcapMaterial(texture)
const geometry = new THREE.BoxGeometry(1, 1, 1)
THREE.Material
const material = new THREE.MeshBasicMaterial({ color: "#ff0000" })
const mesh = new THREE.Mesh(geometry, material)

scene.add(mesh)

// Camera
const sizes = {
  width: 800,
  height: 600
}

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)

camera.position.z = 2

scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({ 
  canvas,
 })

 renderer.setSize(sizes.width, sizes.height)

 renderer.render(scene, camera)