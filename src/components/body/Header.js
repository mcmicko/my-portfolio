import React, { Component } from 'react'
import Image from '../image'
import {Spring} from 'react-spring/renderprops'
import image from '../../images/mm.jpg'

export default class Header extends Component {
  render() {
    return (
      <Spring
        from={{opacity:0}}
        to={{opacity:1}}
        config={{duration: 1000}}
      >
      {props => {
        return(
          <div style={props} className="header">
            <div id="my-name">
              <div>
                <h1 id="name">milos</h1>
                <h1 id="surname">mandic</h1>          
              </div>
            </div>
            <div id="my-image">
             <Image/>
            </div>
            {/* <img id="my-image" src={image} alt=""/> */}
          </div>          
        )
      }}
      </Spring>
    )
  }
}
