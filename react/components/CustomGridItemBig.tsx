import React from 'react';
import styles from "./styles.css"

type Props = {
  element: {
    name: string,
    description: string,
    cta: string,
    image: string
  }
}

const CustomGridItemBig = ({
  element,
}: Props) => {
  return(
    <div className={styles["grid__itemBig"]}>
        <img className={styles["img__itemBig"]} src={element.image}/>
        <div className="flex items-center">
          <div className="flex flex-column">
            <h2 className={styles["name__itemBig"]}>{element.name}</h2>
            <p className="mt2 mr4">{element.description}</p>
          </div>
          <a className={styles["cta__itemBig"]} href={element.cta}>Ver más</a>
        </div>
    </div>
  )

}

export default CustomGridItemBig
