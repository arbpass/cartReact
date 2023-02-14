import React from 'react'
import './Cart.css'
import Item from './Item'
import { SidebarData } from './SidebarData'


function Home() {
  return (
    <>
      <div className='container-f'>
        {SidebarData.map((item, key) => {
          return (
            <>
              <h2>{item.title} &#10140;</h2>
              <div className='container-fluid d-flex container-f2'>
                <Item title={item.title} />
              </div>
              <hr></hr>
            </>
          )
        })}
      </div>
    </>
  )
}

export default Home