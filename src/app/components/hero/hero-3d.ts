/** Develop By Pandu Talenta Digital | Fullstack By Roedy rustam */
import { Component, ElementRef, OnInit, OnDestroy, ViewChild, NgZone, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as THREE from 'three';

@Component({
  selector: 'app-hero-3d',
  standalone: true,
  template: `<div #rendererContainer class="renderer-container"></div>`,
  styles: [`
    .renderer-container {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }
  `]
})
export class Hero3DComponent implements OnInit, OnDestroy {
  @ViewChild('rendererContainer', { static: true }) rendererContainer!: ElementRef;

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private frameId: number | null = null;
  private model!: THREE.Group;
  private particles!: THREE.Points;

  constructor(private ngZone: NgZone, @Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initThree();
      this.createModel();
      this.animate();
    }
  }

  private initThree() {
    this.scene = new THREE.Scene();
    
    const width = this.rendererContainer.nativeElement.clientWidth;
    const height = this.rendererContainer.nativeElement.clientHeight;

    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 5;

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x00f3ff, 2);
    pointLight.position.set(5, 5, 5);
    this.scene.add(pointLight);

    window.addEventListener('resize', this.onResize.bind(this));
  }

  private createModel() {
    this.model = new THREE.Group();

    // Stylized Humanoid Silhouette Abstraction
    const torso = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.6, 1.2, 4, 8),
      new THREE.MeshPhongMaterial({ color: 0x00f3ff, wireframe: true, transparent: true, opacity: 0.3 })
    );
    this.model.add(torso);

    const head = new THREE.Mesh(
      new THREE.SphereGeometry(0.4, 16, 16),
      new THREE.MeshPhongMaterial({ color: 0x9d4edd, wireframe: true })
    );
    head.position.y = 1.3;
    this.model.add(head);

    // Add arms
    const armL = new THREE.Mesh(new THREE.CapsuleGeometry(0.15, 0.8), new THREE.MeshPhongMaterial({ color: 0x00f3ff, wireframe: true }));
    armL.position.set(-0.8, 0.4, 0);
    armL.rotation.z = Math.PI / 4;
    this.model.add(armL);

    const armR = armL.clone();
    armR.position.x = 0.8;
    armR.rotation.z = -Math.PI / 4;
    this.model.add(armR);

    this.scene.add(this.model);

    // Particles background
    const particlesCount = 500;
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({ color: 0x00f3ff, size: 0.05, transparent: true, opacity: 0.5 });
    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);
  }

  private onResize() {
    const width = this.rendererContainer.nativeElement.clientWidth;
    const height = this.rendererContainer.nativeElement.clientHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  private animate() {
    this.ngZone.runOutsideAngular(() => {
      const render = () => {
        this.frameId = requestAnimationFrame(render);
        
        if (this.model) {
          this.model.rotation.y += 0.005;
          this.model.position.y = Math.sin(Date.now() * 0.001) * 0.1;
        }

        if (this.particles) {
          this.particles.rotation.y += 0.001;
        }

        this.renderer.render(this.scene, this.camera);
      };
      render();
    });
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.frameId) {
        cancelAnimationFrame(this.frameId);
      }
      window.removeEventListener('resize', this.onResize.bind(this));
      if (this.renderer) {
        this.renderer.dispose();
      }
    }
  }
}
