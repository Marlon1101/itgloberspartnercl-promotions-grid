import React from 'react';
import styles from "./styles.css"

type Props = {
  gridType: number
  typeScreen: string
  elementOne: {
    name: string,
    /* title: string, */
    description: string,
    cta: string,
    image: string
  }
  elementTwo: {
    name: string,
    /* title: string, */
    description: string,
    cta: string,
    image: string
  }
}

const CustomGridItemSmall = ({
  gridType,
  typeScreen,
  elementOne,
  elementTwo
}: Props) => {
  console.log("2", elementOne, "3", elementTwo)
  const gridTypeContainer =
  typeScreen === "desktop"
  ? `grid__itemSmall__${gridType}--desktop`
  : `grid__itemSmall__${gridType}--mobile`

  const gridTypeElementOne =
  typeScreen === "desktop"
  ? `grid__elementOne--desktop--${gridType}`
  : `grid__elementOne--mobile--${gridType}`

  const gridTypeElementTwo =
  typeScreen === "desktop"
  ? `grid__elementTwo--desktop--${gridType}`
  : `grid__elementTwo--mobile--${gridType}`

  return(
    <div className={styles[gridTypeContainer]}>
      <div className={styles[gridTypeElementOne]}>
        <img className={styles["img__itemSmall"]} src={elementOne.image}/>
        <h2 className={styles["name__itemSmall"]}>{elementOne.name}</h2>
        <p className="mt0 mb0">{elementOne.description}</p>
        <a className={styles["cta__itemSmall"]} href={elementOne.cta}>Ver más</a>
      </div>
      <div className={styles[gridTypeElementTwo]}>
        <img className={styles["img__itemSmall"]} src={elementOne.image}/>
        <h2 className={styles["name__itemSmall"]}>{elementOne.name}</h2>
        <p className="mt0 mb0">{elementOne.description}</p>
        <a className={styles["cta__itemSmall"]} href={elementOne.cta}>Ver más</a>
      </div>
    </div>
  )

}

export default CustomGridItemSmall
