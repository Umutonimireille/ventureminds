import { useMemo, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

// Brand palette — the five "people" that form the Venture Minds star
const PEOPLE_COLORS = ['#1E7FBF', '#2E9E44', '#F2932E', '#C0392B', '#3A3A3A']
const GOLD = '#F2B807'

// Build a filled, extruded 5-pointed star that echoes the logo mark.
function makeStarGeometry(outer = 3.5, inner = 1.62, points = 5) {
  const shape = new THREE.Shape()
  const step = Math.PI / points
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? outer : inner
    const a = i * step - Math.PI / 2
    const x = Math.cos(a) * r
    const y = Math.sin(a) * r
    i === 0 ? shape.moveTo(x, y) : shape.lineTo(x, y)
  }
  shape.closePath()
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: 0.8,
    bevelEnabled: true,
    bevelThickness: 0.2,
    bevelSize: 0.15,
    bevelSegments: 4,
  })
  geo.center()
  return geo
}

function Star() {
  const ref = useRef()
  const geometry = useMemo(() => makeStarGeometry(), [])

  useFrame((state, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * 0.35
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.15
  })

  return (
    <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.6}>
      <mesh ref={ref} geometry={geometry} castShadow>
        <meshStandardMaterial
          color={GOLD}
          metalness={0.3}
          roughness={0.4}
          emissive={GOLD}
          emissiveIntensity={0.4}
        />
      </mesh>
    </Float>
  )
}

// A single orbiting sphere — one of the five figures encircling the star.
function OrbitingFigure({ color, index, total, radius = 6.5, size = 0.65 }) {
  const ref = useRef()
  const baseAngle = (index / total) * Math.PI * 2

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime * 0.4 + baseAngle
    ref.current.position.x = Math.cos(t) * radius
    ref.current.position.z = Math.sin(t) * radius
    ref.current.position.y = Math.sin(t * 1.3) * 1.2
  })

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial
        color={color}
        metalness={0.2}
        roughness={0.4}
        emissive={color}
        emissiveIntensity={0.5}
      />
    </mesh>
  )
}

// Secondary smaller orbiting figures for visual interest
function SmallOrbitingFigure({ color, index, total, radius = 3.2, size = 0.3 }) {
  const ref = useRef()
  const baseAngle = (index / total) * Math.PI * 2 + Math.PI / total

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime * 0.55 + baseAngle
    ref.current.position.x = Math.cos(t) * radius
    ref.current.position.z = Math.sin(t) * radius
    ref.current.position.y = Math.sin(t * 0.8) * 0.8
  })

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[size, 24, 24]} />
      <meshStandardMaterial
        color={color}
        metalness={0.4}
        roughness={0.3}
        emissive={color}
        emissiveIntensity={0.6}
      />
    </mesh>
  )
}

// Small drifting specks for depth.
function Dust({ count = 120 }) {
  const ref = useRef()
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.sin(i * 12.9898) * 43758.5453) % 1 * 36 - 18
      arr[i * 3 + 1] = (Math.sin(i * 78.233) * 43758.5453) % 1 * 22 - 11
      arr[i * 3 + 2] = (Math.sin(i * 37.719) * 43758.5453) % 1 * 18 - 13.5
    }
    return arr
  }, [count])

  useFrame((state, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.03
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.08} color="#F2B807" transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

function Scene() {
  // Create 8 smaller orbiting figures on an inner ring
  const smallFigureColors = [...PEOPLE_COLORS, '#1E7FBF', '#2E9E44', '#F2932E']

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[8, 8, 8]} intensity={1.4} color="#1E7FBF" />
      <pointLight position={[-8, -5, 6]} intensity={1.1} color="#F2932E" />
      <pointLight position={[0, 6, -8]} intensity={0.9} color="#2E9E44" />
      <spotLight position={[0, 0, 10]} angle={0.5} intensity={0.8} color="#F2B807" />

      <Star />
      {/* Large primary orbiting figures */}
      {PEOPLE_COLORS.map((color, i) => (
        <OrbitingFigure 
          key={`primary-${color}-${i}`} 
          color={color} 
          index={i} 
          total={PEOPLE_COLORS.length}
          radius={6.5}
          size={0.65}
        />
      ))}
      {/* Small secondary orbiting figures */}
      {smallFigureColors.map((color, i) => (
        <SmallOrbitingFigure 
          key={`secondary-${color}-${i}`} 
          color={color} 
          index={i} 
          total={smallFigureColors.length}
          radius={3.2}
          size={0.3}
        />
      ))}
      <Dust />
    </>
  )
}

export default function Hero3D({ className = '' }) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas
        camera={{ position: [0, 0.5, 14], fov: 45 }}
        dpr={[1, 1.8]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}
