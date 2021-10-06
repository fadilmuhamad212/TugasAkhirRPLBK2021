import React, { Component } from 'react';

import styled from 'styled-components';


const Name = styled.h1`
 color:yellow;
 font-size: 20px;
 text-align: center;
`

class A extends Component {
   constructor(props) {
      super(props);
      this.state = {
         header: "TUGAS AKHIR PRAKTIKUM RPLBK",
         isi: "KELOMPOK 10",
         judul: "Sistem Informasi Perpustakaan"
      }
   }
   componentDidMount() {
      alert(`Tugas Akhir Kelompok 10`)
   }
   render() {
      return (
         <div>
            <header>
               <div>
               <Name>{this.state.header}</Name>
               <Name>{this.state.isi}</Name>
               <Name>{this.state.judul}</Name>
               </div>
            </header>

         </div>
      );
   }
}

export default A;