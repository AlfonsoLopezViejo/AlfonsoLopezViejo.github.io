import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-background',
  imports: [],
  templateUrl: './background.component.html',
  styleUrl: './background.component.css'
})
export class BackgroundComponent {
  @ViewChild('canvas', { static: true }) private canvasRef!: ElementRef<HTMLCanvasElement>;
  
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private particles!: THREE.Points;
  private mouseX = 0;
  private mouseY = 0;
  private windowHalfX = window.innerWidth / 2;
  private windowHalfY = window.innerHeight / 2;

  ngOnInit() {
    this.init();
    this.animate();
    this.addEventListeners();
  }

  private init() {
    this.scene = new THREE.Scene();
    
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      3000
    );
    this.camera.position.z = 1000;

    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const size = 2000;

    for (let i = 0; i < 2000; i++) {
      const x = (Math.random() * size + 450) * (Math.round(Math.random()) ? -1 : 1);
      const y = (Math.random() * size + 450) * (Math.round(Math.random()) ? -1 : 1);
      const z = (Math.random() * size + 450) * (Math.round(Math.random()) ? -1 : 1);

      vertices.push(x, y, z);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    const material = new THREE.PointsMaterial({
      size: 2,
      color: 0x7000FF,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true
    });

    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvasRef.nativeElement,
      alpha: true
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  private addEventListeners() {
    window.addEventListener('resize', () => this.onWindowResize());
    document.addEventListener('mousemove', (event) => this.onMouseMove(event));
  }

  private onWindowResize() {
    this.windowHalfX = window.innerWidth / 2;
    this.windowHalfY = window.innerHeight / 2;

    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  private onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX - this.windowHalfX;
    this.mouseY = event.clientY - this.windowHalfY;
  }

  private animate() {
    requestAnimationFrame(() => this.animate());

    this.camera.position.x += (this.mouseX * 0.05 - this.camera.position.x) * 0.01;
    this.camera.position.y += (-this.mouseY * 0.05 - this.camera.position.y) * 0.01;
    this.camera.lookAt(this.scene.position);

    this.particles.rotation.y += 0.001;

    this.renderer.render(this.scene, this.camera);
  }

}
