import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useReducedMotion } from "framer-motion";

const FloatingShape = ({ position, color, shape, size }) => {
    const meshRef = useRef(null);
    const elapsed = useRef(0);

    useFrame((_, delta) => {
        if (!meshRef.current) return;
        const frameDelta = Math.min(delta, 0.05);
        elapsed.current += frameDelta;
        meshRef.current.rotation.x += frameDelta * 0.12;
        meshRef.current.rotation.y += frameDelta * 0.18;
        meshRef.current.position.y = position[1] + Math.sin(elapsed.current * 0.55) * 0.3;
    });

    return (
        <mesh ref={meshRef} position={position} scale={size}>
            {shape === "torus" && <torusGeometry args={[1.2, 0.12, 20, 40]} />}
            {shape === "sphere" && <sphereGeometry args={[0.8, 24, 24]} />}
            {shape === "box" && <boxGeometry args={[1, 1, 1]} />}
            <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={0.35}
                metalness={0.55}
                roughness={0.28}
            />
        </mesh>
    );
};

const ParticleField = () => {
    const geometry = useMemo(() => {
        const points = new Float32Array(90 * 3);
        for (let index = 0; index < 90; index += 1) {
            points[index * 3] = (Math.random() - 0.5) * 34;
            points[index * 3 + 1] = (Math.random() - 0.5) * 26;
            points[index * 3 + 2] = (Math.random() - 0.5) * 22;
        }
        const buffer = new THREE.BufferGeometry();
        buffer.setAttribute("position", new THREE.Float32BufferAttribute(points, 3));
        return buffer;
    }, []);

    return (
        <points geometry={geometry}>
            <pointsMaterial color="#63e8ff" size={0.055} sizeAttenuation transparent opacity={0.62} />
        </points>
    );
};

const Scene = () => (
    <>
        <ambientLight intensity={0.55} />
        <pointLight position={[5, 4, 5]} intensity={24} color="#00d9ff" />
        <pointLight position={[-6, -3, -3]} intensity={18} color="#875bff" />
        <FloatingShape position={[-6.4, 2.8, -3]} color="#00d9ff" shape="torus" size={0.85} />
        <FloatingShape position={[6.8, -1.4, -4]} color="#875bff" shape="sphere" size={0.75} />
        <FloatingShape position={[3.6, 4.3, -6]} color="#ed66b8" shape="box" size={0.65} />
        <FloatingShape position={[-8, -3.2, -5]} color="#00d9ff" shape="sphere" size={0.48} />
        <ParticleField />
    </>
);

const ThreeDBackground = () => {
    const reduceMotion = useReducedMotion();

    return (
        <div className="three-d-background" aria-hidden="true">
            <Canvas
                camera={{ position: [0, 0, 15], fov: 48 }}
                dpr={[1, 1.5]}
                gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
                frameloop={reduceMotion ? "demand" : "always"}
            >
                <Scene />
            </Canvas>
        </div>
    );
};

export default ThreeDBackground;
