import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import './ThreeBackground.css'

const ThreeBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    camera.position.z = 5

    // Create particle system
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 1500
    const posArray = new Float32Array(particlesCount * 3)
    const colorsArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Position
      posArray[i] = (Math.random() - 0.5) * 15
      posArray[i + 1] = (Math.random() - 0.5) * 15
      posArray[i + 2] = (Math.random() - 0.5) * 15

      // Color gradient from cyan to purple
      const colorMix = Math.random()
      colorsArray[i] = colorMix * 0 + (1 - colorMix) * 0.48 // R
      colorsArray[i + 1] = colorMix * 0.85 + (1 - colorMix) * 0.23 // G
      colorsArray[i + 2] = colorMix * 1 + (1 - colorMix) * 0.93 // B
    }

    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(posArray, 3)
    )
    particlesGeometry.setAttribute(
      'color',
      new THREE.BufferAttribute(colorsArray, 3)
    )

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.03,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    })

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    // Mouse interaction
    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1
    }

    document.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      // Rotate particles
      particlesMesh.rotation.x += 0.0002
      particlesMesh.rotation.y += 0.0003

      // Mouse interaction
      particlesMesh.rotation.x += mouseY * 0.0001
      particlesMesh.rotation.y += mouseX * 0.0001

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
      particlesGeometry.dispose()
      particlesMaterial.dispose()
    }
  }, [])

  return <canvas ref={canvasRef} className="three-canvas" />
}

export default ThreeBackground
