import React, { ReactNode } from 'react';
import promotionGridSchema from '../schemas/custom-grid-schema'
import CustomGridItemBig from './CustomGridItemBig';
import CustomGridItemSmall from './CustomGridItemSmall';
import styles from "./styles.css"

type Props = {
  gridType: number
  children: [
    ReactNode,
    ReactNode,
    ReactNode,
    ReactNode,
    ReactNode
  ]
  typeScreen: string
}

const PromotionGrid =({gridType = 6, children, typeScreen = "mobile"}: Props)=> {
  console.log(gridType)
  const gridTypeClass =
  typeScreen === "desktop"
  ? `grid__${gridType}--desktop`
  : `grid__${gridType}--mobile`
  return (
    <div className={styles[gridTypeClass]}>
    <CustomGridItemBig
      element= {children[0]}
    />
    <div className={styles[`itemSmall__1--${gridType}`]}>
    <CustomGridItemSmall
      gridType={gridType}
      typeScreen={typeScreen}
      elementOne= {children[1]}
      elementTwo= {children[2]}
    />
    </div>
    <div className={styles[`itemSmall__2--${gridType}`]}>
    <CustomGridItemSmall
      gridType={gridType}
      typeScreen={typeScreen}
      elementOne= {children[3]}
      elementTwo= {children[4]}
    />
    </div>
    </div>
  )
}

PromotionGrid.schema = promotionGridSchema

export default PromotionGrid
