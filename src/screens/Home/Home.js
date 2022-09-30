import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment';
import MainImage from './../../components/MainImage/MainImage';
import SecondaryImage from './../../components/SecondaryImage/SecondaryImage';
import Boxes from './../../components/Boxes/Boxes';
import TwoColumnsSection from './../../components/TwoColumnsSection/TwoColumnsSection';
import PrivacyPolicy from './../../components/PrivacyPolicy/PrivacyPolicy';
import Support from './../../components/Support/Support';

const navigationBarHeight = 100;

const Home = () => {
	let mainViewRef = useRef()
	useEffect(() => {
	  async function executeAnimation() {
		const mainView = mainViewRef.current
		let renderer = new THREE.WebGLRenderer({ antialias: true });
		renderer.setSize(window.innerWidth, window.innerHeight - navigationBarHeight);
		renderer.toneMapping = THREE.ACESFilmicToneMapping;
		renderer.toneMappingExposure = 1.2;
		renderer.outputEncoding = THREE.sRGBEncoding;
		mainView.appendChild(renderer.domElement)
		const camera = new THREE.PerspectiveCamera(
		    75,
		    window.innerWidth / window.innerHeight,
		    0.1,
		    1000
		);
		camera.position.z = 20;
		let controls = new OrbitControls(camera, renderer.domElement)// We will use the lighting from the background instead of creating our own
		let scene = new THREE.Scene()
		const environment = new RoomEnvironment();
		const pmremGenerator = new THREE.PMREMGenerator( renderer );
		scene.environment = pmremGenerator.fromScene( environment ).texture;
		const loader = new GLTFLoader();
		loader.load(
		    'https://8e11-45-191-191-51.sa.ngrok.io/Dibesfer_PC.glb',
		    function (gltf) {
				let avatar = gltf.scene.children[0];
				avatar.position.set(0, 0, 0);
				avatar.scale.setScalar(2);
		        scene.add(avatar)
		    },
		    (xhr) => {
		        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
		    },
		    (error) => {
		        console.log(error)
		    }
		)

		function animate() {
		    requestAnimationFrame(animate)
		    render()
		}

		function render() {
		    renderer.render(scene, camera)
		}
		animate();

	  }
	  executeAnimation();
	}, []);

	return (
	    <div
	      ref={mainViewRef}
	      className="avatarView"
	      style={{
	      }}
	    />
	);
};

export default Home;
