import { ReactNode } from 'react'
import Triangle from 'assets/icons/Triangle.svg'
import Circle from 'assets/icons/Circle.svg'
import XLetter from 'assets/icons/XLetter.svg'
import Square from 'assets/icons/Square.svg'
import { Icon } from './Icon'

const icons = [Triangle, Circle, XLetter, Square]
const ICON_LENGTH = 20

export const Icons = () => {
  const iconElements: ReactNode[] = []
  const selectedIconsIndexes = Array(icons.length).forEach((value, index) => console.log('value, index', value, index))

  for (let i = 0; i < ICON_LENGTH; i++) {
    const randomIcon = icons[Math.floor(Math.random() * icons.length)]
    const icon = <Icon key={i} icon={randomIcon} />
    iconElements.push(icon)
  }

  return <div>{iconElements.map((iconElement) => iconElement)}</div>
}
