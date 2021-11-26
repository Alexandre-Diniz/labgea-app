import React from 'react'
import { Svg, G, Path } from 'react-native-svg'

export const DelIcon = ({ color = '#f03232' }) => {
  return (
    <Svg width="20"
      height="30"
      viewBox="0 0 60 60">
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1-2" data-name="Layer 1">
          <Path fill={color} d="M61.33,5.33H48V2.67A2.66,2.66,0,0,0,45.33,0H18.67A2.66,2.66,0,0,0,16,2.67V5.33H2.67a2.67,2.67,0,0,0,0,5.34H8v40a8,8,0,0,0,8,8H48a8,8,0,0,0,8-8v-40h5.33a2.67,2.67,0,1,0,0-5.34ZM50.67,50.67A2.67,2.67,0,0,1,48,53.33H16a2.67,2.67,0,0,1-2.67-2.66v-40H50.67Z" />
          <Path fill={color} d="M24,45.33a2.67,2.67,0,0,0,2.67-2.66V21.33a2.67,2.67,0,0,0-5.34,0V42.67A2.67,2.67,0,0,0,24,45.33Z" />
          <Path fill={color} d="M40,45.33a2.67,2.67,0,0,0,2.67-2.66V21.33a2.67,2.67,0,0,0-5.34,0V42.67A2.67,2.67,0,0,0,40,45.33Z" />
        </G>
      </G>
    </Svg>
  )
}