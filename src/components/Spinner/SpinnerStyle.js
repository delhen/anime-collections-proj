import { keyframes } from '@emotion/react'

const spinningKeyframe = keyframes({
  '0%, 100%': {
    animationTimingFunction: 'cubic-bezier(0.5, 0, 1, 0.5)'
  },
  '0%': {
    transform: 'rotateY(0deg)'
  },
  '50%': {
    transform: 'rotateY(1800deg)',
    animationTimingFunction: 'cubic-bezier(0, 0.5, 0.5, 1)'
  },
  '100%': {
    transform: 'rotateY(3600deg)'
  }
})

export const spinnerStyle = {
  display: 'inline-block',
  transform: 'translateZ(1px)',
  '& div': {
    display: 'inline-block',
    width: '32px',
    height: '32px',
    margin: '8px',
    borderRadius: '50%',
    background: '#FE619E',
    animation: `${spinningKeyframe} 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite`,
  },
}