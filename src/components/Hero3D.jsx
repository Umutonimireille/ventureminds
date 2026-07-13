import { useMemo, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

// Brand palette — the five "people" that form the Venture Minds star
const PEOPLE_COLORS = ['#1E7FBF', '#2E9E44', '#F2932E', '#C0392B', '#3A3A3A']
const GOLD = '#F2B807'

// Build a filled, extruded 5-pointed star that echoes the logo mark.
function makeStarGeometry(outer = 2.0, inner = 0.92, points = 5) {
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
    depth: 0.5,
    bevelEnabled: true,
    bevelThickness: 0.15,
    bevelSize: 0.12,
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
function OrbitingFigure({ color, index, total }) {
  const ref = useRef()
  const radius = 4.0
  const baseAngle = (index / total) * Math.PI * 2

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime * 0.4 + baseAngle
    ref.current.position.x = Math.cos(t) * radius
    ref.current.position.z = Math.sin(t) * radius
    ref.current.position.y = Math.sin(t * 1.3) * 0.75
  })

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.42, 32, 32]} />
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

// Small drifting specks for depth.
function Dust({ count = 80 }) {
  const ref = useRef()
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.sin(i * 12.9898) * 43758.5453) % 1 * 24 - 12
      arr[i * 3 + 1] = (Math.sin(i * 78.233) * 43758.5453) % 1 * 15 - 7.5
      arr[i * 3 + 2] = (Math.sin(i * 37.719) * 43758.5453) % 1 * 12 - 9
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
      <pointsMaterial size={0.05} color="#F2B807" transparent opacity={0.5} sizeAttenuation />
    </points>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#1E7FBF" />
      <pointLight position={[-5, -3, 4]} intensity={1} color="#F2932E" />
      <pointLight position={[0, 4, -5]} intensity={0.8} color="#2E9E44" />
      <spotLight position={[0, 0, 8]} angle={0.5} intensity={0.6} color="#F2B807" />

      <Star />
      {PEOPLE_COLORS.map((color, i) => (
        <OrbitingFigure key={color + i} color={color} index={i} total={PEOPLE_COLORS.length} />
      ))}
      <Dust />
    </>
  )
}

export default function Hero3D({ className = '' }) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 9.5], fov: 50 }}
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
