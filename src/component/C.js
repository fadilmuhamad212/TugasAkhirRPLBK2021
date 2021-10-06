import React, { Component } from 'react';
import styled from 'styled-components';

const Name = styled.h1`
 color:yellow;
 font-size: 20px;
 text-align: center;
`

export default class C extends Component {
    constructor(props) {
        super(props);
        this.state = {
          tgl: new Date().toLocaleString()
        };
      }
    
      getDate() {
        var date = { currentTime: new Date().toLocaleString() };
    
        this.setState({
          date: date
        });
      }
      componentDidMount() {         
        alert(`Get a Book, Get the Book!`)     
      } 
    
      render() {
        return (
          <div>
          <center>
            <Name> Waktu Server : {this.state.tgl}</Name>
          </center>
          </div>
        );
      }
}