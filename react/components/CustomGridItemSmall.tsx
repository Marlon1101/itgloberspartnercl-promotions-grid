import React from 'react';
import styles from "./styles.css"

type Props = {
  gridType: number
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
  elementOne,
  elementTwo
}: Props) => {
  const gridTypeContainer = `grid__itemSmall__${gridType}`

  const gridTypeElementOne = `grid__elementOne--${gridType}`

  const gridTypeElementTwo = `grid__elementTwo--${gridType}`

  return(
    <div className={styles[gridTypeContainer]}>
      <div className={styles[gridTypeElementOne]}>
        <img className={styles["img__itemSmall"]} src={elementOne.image}/>
        <h2 className={styles["name__itemSmall"]}>{elementOne.name}</h2>
        <p className="mt0 mb0">{elementOne.description}</p>
        <a className={styles["cta__itemSmall"]} href={elementOne.cta}>Ver más</a>
      </div>
      <div className={styles[gridTypeElementTwo]}>
        <img className={styles["img__itemSmall"]} src={elementTwo.image}/>
        <h2 className={styles["name__itemSmall"]}>{elementTwo.name}</h2>
        <p className="mt0 mb0">{elementTwo.description}</p>
        <a className={styles["cta__itemSmall"]} href={elementTwo.cta}>Ver más</a>
      </div>
    </div>
  )

}

export default CustomGridItemSmall
