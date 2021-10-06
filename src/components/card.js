import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import styled from 'styled-components';
import '../App.css'


const useStyles = makeStyles({
    root: {
        minWidth: 275,
        backgroundColor: '#ffffff',
        margin: 20,

    },

});

const Name = styled.h5`
 color:purple;
 font-size: 15px;
 text-align: center;
`
const Img = styled.img`
 border-radius: 50%;
 padding: 0px;
 width: 80%;
 margin: 0px;
`
const Select = styled.select`
background-color: #30475e;
color: white;
padding: .1em 1em;
margin: 5px 10px 30px 5px;
width: 60%;
border: none;
font-size: 16px;
font-family: times new roman;
box-shadow: 0 2px 3px 3px rgba(0, 0, 0, 0.2);
outline: none;
`
const Table = styled.div
    `
margin: 0px 0px 100px 400px;
width: 50%;
`
const Column = styled.div
    `
 display: table-cell;
 text-align: center;
`
const Row = styled.div
    `
 display: table;
 padding:  0.5em 0.5em;
 width: 100%;
 table-layout: fixed;
 border-spacing: 2px;
`
export default function SimpleCard() {
    const classes = useStyles();

    function CardContent(props) {
        return (
            <div>
                <Img src={props.src} />
                <p>{props.nama}</p>
                <p>{props.nim}</p>

            </div>
        );
    }
    //class components

    return (
        <div className="wrapper">
            <Table>
                <Row>
                    <Column>
                        <Card className={classes.root}>
                            <Name>
                                <div className="praktikan">
                                    <CardContent nama="Muhamad Fadhil Tsalatsa" nim="21120118130053" src="https://i.imgur.com/pSIB0p9l.jpg" />
                                    <Select>
                                        <option value="1">Kelas</option>
                                        <option value="2">A</option>
                                        <option value="3">B</option>
                                    </Select>
                                </div>
                            </Name>
                        </Card>
                    </Column>
                    <Column>
                        <Card className={classes.root}>
                            <Name>
                                <div className="praktikan">
                                    <CardContent nama="Bernita Febrihatin" nim="21120118120023" src="https://i.imgur.com/eYby98ks.jpg" />
                                    <Select>
                                        <option value="1">Kelas</option>
                                        <option value="2">A</option>
                                        <option value="3">B</option>
                                    </Select>
                                </div>

                            </Name>
                        </Card>
                    </Column>
                </Row>
            </Table>
        </div>
    )
}