import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function ThreeBackground({ theme }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 80;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Color palette based on theme
    const isDark = theme === 'dark';
    const primaryColor = isDark ? 0x00f0ff : 0x0284c7;
    const secondaryColor = isDark ? 0x3b82f6 : 0x2563eb;
    const accentColor = isDark ? 0xf59e0b : 0xd97706;

    // 1. 3D Particle Constellation (Ethernet Node Cloud)
    const particleCount = 180;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const velocities = [];

    const c1 = new THREE.Color(primaryColor);
    const c2 = new THREE.Color(secondaryColor);
    const c3 = new THREE.Color(accentColor);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 140;
      positions[i3 + 1] = (Math.random() - 0.5) * 90;
      positions[i3 + 2] = (Math.random() - 0.5) * 60;

      velocities.push({
        x: (Math.random() - 0.5) * 0.08,
        y: (Math.random() - 0.5) * 0.08,
        z: (Math.random() - 0.5) * 0.05
      });

      const chosenColor = i % 5 === 0 ? c3 : i % 2 === 0 ? c1 : c2;
      colors[i3] = chosenColor.r;
      colors[i3 + 1] = chosenColor.g;
      colors[i3 + 2] = chosenColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle Material
    const particleMaterial = new THREE.PointsMaterial({
      size: isDark ? 2.2 : 2.5,
      vertexColors: true,
      transparent: true,
      opacity: isDark ? 0.8 : 0.6,
      blending: isDark ? THREE.AdditiveBlending : THREE.NormalBlending
    });

    const particles = new THREE.Points(geometry, particleMaterial);
    scene.add(particles);

    // 2. Lines connecting nearby nodes (Ethernet Network Mesh)
    const lineMaterial = new THREE.LineBasicMaterial({
      color: primaryColor,
      transparent: true,
      opacity: isDark ? 0.15 : 0.08,
      blending: isDark ? THREE.AdditiveBlending : THREE.NormalBlending
    });

    const linesGeometry = new THREE.BufferGeometry();
    const maxLines = 300;
    const linePositions = new Float32Array(maxLines * 6);
    linesGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));

    const lineMesh = new THREE.LineSegments(linesGeometry, lineMaterial);
    scene.add(lineMesh);

    // 3. Floating 3D Torus Wave representing Electromagnetic Shielding / Twist
    const torusGeo = new THREE.TorusGeometry(35, 1.2, 16, 100);
    const torusMat = new THREE.MeshBasicMaterial({
      color: secondaryColor,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.08 : 0.04
    });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    torus.rotation.x = Math.PI / 4;
    scene.add(torus);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.02;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.02;
    };

    window.addEventListener('mousemove', onMouseMove);

    // Resize Handler
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    // Animation Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth camera parallax
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;
      camera.position.x = targetX;
      camera.position.y = -targetY;
      camera.lookAt(scene.position);

      torus.rotation.z += 0.002;
      torus.rotation.y += 0.001;

      // Update particle positions
      const pos = geometry.attributes.position.array;
      let lineIndex = 0;
      const linePos = linesGeometry.attributes.position.array;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        pos[i3] += velocities[i].x;
        pos[i3 + 1] += velocities[i].y;
        pos[i3 + 2] += velocities[i].z;

        // Bounce boundaries
        if (pos[i3] < -70 || pos[i3] > 70) velocities[i].x *= -1;
        if (pos[i3 + 1] < -45 || pos[i3 + 1] > 45) velocities[i].y *= -1;
        if (pos[i3 + 2] < -30 || pos[i3 + 2] > 30) velocities[i].z *= -1;

        // Connect nearby particles with lines
        for (let j = i + 1; j < particleCount; j++) {
          if (lineIndex >= maxLines * 6) break;
          const j3 = j * 3;
          const dx = pos[i3] - pos[j3];
          const dy = pos[i3 + 1] - pos[j3 + 1];
          const dz = pos[i3 + 2] - pos[j3 + 2];
          const distSq = dx * dx + dy * dy + dz * dz;

          if (distSq < 220) {
            linePos[lineIndex++] = pos[i3];
            linePos[lineIndex++] = pos[i3 + 1];
            linePos[lineIndex++] = pos[i3 + 2];
            linePos[lineIndex++] = pos[j3];
            linePos[lineIndex++] = pos[j3 + 1];
            linePos[lineIndex++] = pos[j3 + 2];
          }
        }
      }

      geometry.attributes.position.needsUpdate = true;
      linesGeometry.setDrawRange(0, lineIndex / 3);
      linesGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      particleMaterial.dispose();
      linesGeometry.dispose();
      lineMaterial.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      renderer.dispose();
    };
  }, [theme]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden'
      }}
    />
  );
}
