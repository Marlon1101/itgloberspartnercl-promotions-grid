import React /* { useEffect, useState } */ from 'react';
import promotionGridSchema from '../schemas/custom-grid-schema'
import CustomGridItemBig from './CustomGridItemBig';
import CustomGridItemSmall from './CustomGridItemSmall';
import styles from "./styles.css"

type Props = {
  gridType: number
  typeScreen: string
  products: {
    name: string,
    title: string,
    description: string,
    cta: string,
    image: string
  }[]
}

const PromotionGrid =({
  products,
  gridType
}: Props)=> {

  const gridTypeClass = `grid__${gridType}`

  return (
    <div className={styles[gridTypeClass]}>
    <CustomGridItemBig
      element= {products[0]}
    />
    <div className={styles[`itemSmall__1--${gridType}`]}>
    <CustomGridItemSmall
      gridType={gridType}
      elementOne= {products[1]}
      elementTwo= {products[2]}
    />
    </div>
    <div className={styles[`itemSmall__2--${gridType}`]}>
    <CustomGridItemSmall
      gridType={gridType}
      elementOne= {products[3]}
      elementTwo= {products[4]}
    />
    </div>
    </div>
  )
}

PromotionGrid.schema = promotionGridSchema

export default PromotionGrid
