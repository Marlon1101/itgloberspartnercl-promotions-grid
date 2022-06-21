import React, {ReactNode} from 'react';
import styles from "./styles.css"

type Props = {
  gridType: number
  typeScreen: string
  elementOne: ReactNode
  elementTwo: ReactNode
}

const CustomGridItemSmall = ({gridType, typeScreen, elementOne, elementTwo}: Props) => {
  const gridTypeContainer =
  typeScreen === "desktop"
  ? `grid__itemSmall__${gridType}--desktop`
  : `grid__itemSmall__${gridType}--mobile`

  const gridTypeElementOne =
  typeScreen === "desktop"
  ? `grid__elementOne--desktop`
  : `grid__elementOne--mobile`

  const gridTypeElementTwo =
  typeScreen === "desktop"
  ? `grid__elementTwo--desktop`
  : `grid__elementTwo--mobile`

  return(
    <div className={styles[gridTypeContainer]}>
      <div className={styles[gridTypeElementOne]}>
        {elementOne}
      </div>
      <div className={styles[gridTypeElementTwo]}>
        {elementTwo}
      </div>
    </div>
  )

}

export default CustomGridItemSmall
