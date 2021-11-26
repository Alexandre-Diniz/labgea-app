import React from 'react'
import { Svg, Circle, Path } from 'react-native-svg'

export function UserIcon({color='#ccc'}) {
  return (
    <Svg data-name="Layer 1" viewBox="0 0 64 64" strokeWidth={2}>
      <Circle cx="19.5" cy="36.5" r="9.5" fill="none" stroke={color} stroke-miterlimit="10" stroke-width="4"/>
      <Path fill="none" stroke={color} stroke-miterlimit="10" stroke-width="4" d="M6 61A15 15 0 0 1 21 46M35 61A15 15 0 0 0 20 46"/>
      <Circle cx="42.5" cy="12.5" r="9.5" fill="none" stroke={color} stroke-miterlimit="10" stroke-width="4"/>
      <Path fill="none" stroke={color} stroke-miterlimit="10" stroke-width="4" d="M29 36c0-7.74 6.71-14 15-14M58 36c0-7.74-6.71-14-15-14"/>
    </Svg>
  )
}
