import { useBox } from '@react-three/cannon'

import type { BoxProps } from '@react-three/cannon'

export function Ramp({ args, ...props }: BoxProps) {
  // todo added any type because throwing errors
  const [ref] = useBox<any>(() => ({ type: 'Static', args, ...props }), undefined, [args, props])
  return (
    <mesh castShadow receiveShadow ref={ref}>
      <boxGeometry args={args} />
      <meshStandardMaterial color="indianred" />
    </mesh>
  )
}
