import React from 'react';
import ReactDOM from 'react-dom/client';
import { useGLTF, useTexture } from '@react-three/drei'
import 'inter-ui'
import './styles.css'
import { App } from './App'

useTexture.preload('/textures/heightmap_1024.png')
useTexture.preload('/textures/no_sound.png')
useGLTF.preload('/models/track-draco.glb')
useGLTF.preload('/models/chassis-draco.glb')
useGLTF.preload('/models/wheel-draco.glb')

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
