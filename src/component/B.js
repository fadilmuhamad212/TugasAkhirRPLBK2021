import React, { Component } from 'react';

import styled from 'styled-components';


const Name = styled.h2`
 color:yellow;
 font-size: 35px;
 text-align: center;
`

export default class B extends Component {
    constructor(props){
        super(props)
        this.state = {
          program: "null"
        }
      }

      componentDidMount() {         
          alert(`Book is Gethebook`)     
      } 
      render() {
        return (
          <div>

            <Name>Semoga Anda Suka Dengan Bukunya</Name>

          </div>
        );
      }
}