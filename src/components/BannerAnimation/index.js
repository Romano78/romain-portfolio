import React from 'react'
import { BannerAnimationContainer } from './styles'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/web'
import Scene from './scene'

const BannerAnimation = ({navContext})  => {
  // This spring controls the background and the svg fill (text color)
  const [{ background }, set] = useSpring({ background: props => navContext.theme ? props.theme.colors.primaryColor : props.theme.colors.secondaryColor, fill: '#red' }, [])
  return (
    <BannerAnimationContainer>
      <a.main style={{ background }}>
        <Canvas className="canvas" dpr={[1, 2]}>
          <Scene setBg={set} navContext={navContext}/>
          <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        </Canvas>
      </a.main>
    </BannerAnimationContainer>
  )
}

export default BannerAnimation