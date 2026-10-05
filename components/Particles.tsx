"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

// Slow drifting gold dots behind the hero. Skipped for people who ask for less motion.
export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    if (!canvas || !host) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
    camera.position.z = 30;

    // fewer dots on small screens so phones stay smooth
    const count = window.innerWidth < 640 ? 350 : 900;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < positions.length; i++) positions[i] = (Math.random() - 0.5) * 64;

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({ color: 0xc9a24b, size: 0.24, transparent: true, opacity: 0.85 });
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const resize = () => {
      const { clientWidth: w, clientHeight: h } = host;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    window.addEventListener("resize", resize);

    let mx = 0;
    let my = 0;
    const onMove = (e: PointerEvent) => {
      const box = host.getBoundingClientRect();
      mx = (e.clientX - box.left) / box.width - 0.5;
      my = (e.clientY - box.top) / box.height - 0.5;
    };
    host.addEventListener("pointermove", onMove);

    let frame = 0;
    const tick = (t: number) => {
      points.rotation.y = t * 0.00006 + mx * 0.5;
      points.rotation.x = t * 0.00002 + my * 0.35;
      points.position.y = Math.sin(t * 0.0004) * 0.8;
      renderer.render(scene, camera);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      host.removeEventListener("pointermove", onMove);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="particles" aria-hidden="true" />;
}
