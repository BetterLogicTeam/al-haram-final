import React from 'react'
import BasicTabs from './BasicTabs/BasicTabs'
import Place_detail from './Place_detail/Place_detail'

function Explore_resturant_detail() {
  return (
    <div>
      <Place_detail title="Al Khobar Resturant "
      imgsrc="Mesa 1.png"
        location="
 28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A"
      />
      <BasicTabs/>
    </div>
  )
}

export default Explore_resturant_detail
