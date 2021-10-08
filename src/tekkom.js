import React, { Component } from "react";
import axios from "axios";
import { Modal, Input } from "antd";
// import { Row, Col, Divider } from 'antd';
import "antd/dist/antd.css";
import modaldetail from "./modaldetail";

import { Card, Button } from 'antd';

const gridStyle = {
  width: '25%',
  textAlign: 'center',
  marginLeft: '70px',
  marginTop: '30px',
  backgroundColor: 'white'
};


export default class tekkom extends Component {
    constructor(props) {
        super(props);
        this.state = {
        tekkom: [],
        visible: false,
        nama_buku: "",
        penulis: "",
        tahun: ""
        };
    }
      

    state = {
        komponen :true
    }


    handleButton = (nama_buku, penulis, tahun) => {
        // alert("Nama Buku : " + nama_buku);
        Modal.info({
            title: 'Buku Impian',
            content: (
              <div>
                <p>Nama Buku : {nama_buku} <br />
                Penulis : {penulis} <br />
                Tahun : {tahun}
                </p>
                {/* <p>Penulis : {penulis}</p>
                <p>Tahun : {tahun}</p> */}
              </div>
            ),
            onOk() {},
          });
    };

    handleDelete = (id) => {
        // alert(id)
        var proceed = window.confirm("Serius mau hapus?");
        if (proceed) {
            axios({
                method: "delete",
                url: "https://mmk69.herokuapp.com/data/del/"+id,
                headers: {
                accept: "*/*"
                }
                })
                .then((data) => {
                alert("berhasil dihapus");
                window.location.reload();
                })
                .catch(() => {
                alert("gagal bos :(");
                });
        } else{
            window.location.reload();
        }
    }

    handleTambahOrang = () => {
        this.setState({
        visible: true,
        });
    };

    handleNama = (e) => {
        this.setState({
        nama_buku: e.target.value,
        });
        console.log(this.state.nama_buku);
    };

    handlePublish = (e) => {
        this.setState({
        penulis: e.target.value,
        });
        console.log(this.state.penulis);
    };

    handleTahun = (e) => {
        this.setState({
        tahun: e.target.value,
        });
        console.log(this.state.tahun);
    };

    handleSubmit = () => {
        if (
        this.state.nama_buku !== "" &&
        this.state.penulis !== "" &&
        !this.state.tahun !== ""
        ) {
            axios({
                method: "post",
                url: "https://mmk69.herokuapp.com/data/post",
                headers: {
                accept: "*/*",
                },
                data: {
                nama_buku: this.state.nama_buku,
                penulis: this.state.penulis,
                tahun: this.state.tahun,
                },
            })
            .then((data) => {
            alert("berhasil menambahkan");
            window.location.reload();
            })
            .catch((error) => {
            alert("gagal lur");
            });
        } else {
            alert("pastikan semua kolom terisi");
        }
    };

    componentDidMount() {
        axios({
            method: "get",
            url: "https://mmk69.herokuapp.com/data",
            headers: {
            accept: "*/*",
            },
        })
        .then((data) => {
            // data.json();
            this.setState({
                tekkom: data.data,
            });
        })
        .catch((error) => {
            console.log(error);
        });
    };

    render() {
        return (
        <div>
            <div className="boxWhite" marginBottom="200px">
                <center>
                    <button className="rounded" style={{marginTop: "10px"}} onClick={this.handleTambahOrang}>Tambah Buku</button>
                    <br></br><br/>
                    {/* <input label="search" placeholder="search mobile..." onKeyUp={this.coba}></input> */}
                </center>
                <Modal
                    title="Tambah Buku Impianmu!!"
                    centered
                    visible={this.state.visible}
                    onOk={this.handleSubmit}
                    onCancel={() => this.setState({ visible: false })}
                    width={500}
                    >
                        <div style={{ textAlign: "center" }}>
                            <p>Nama Buku : </p>{" "}
                                <Input
                                type="text"
                                placeholder="nama"
                                onChange={this.handleNama}
                                />
                                <br />
                            <p>Penulis : </p>{" "}
                                <Input type="text" placeholder="publish" onChange={this.handlePublish} />
                                <br />
                            <p>tahun : </p>{" "}
                                <Input
                                type="text"
                                placeholder="tahun"
                                onChange={this.handleTahun}
                                />
                                <br />
                        </div>
                </Modal>
            
                {this.state.tekkom.map((results, index) => {
                return (                    
                    <Card.Grid className="rounded" style={gridStyle} key={results.nama_buku}>
                        <h5 className="card-title">Nama Buku : {results.nama_buku}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Penulis : {results.penulis}</h6>
                        <h6 className="card-subtutle mb-2 text-muted">Tahun : {results.tahun}</h6>
                        <Button type="primary" onClick={() => this.handleButton(results.nama_buku, results.penulis, results.tahun)}>Klik Aku</Button>
                            
                        <Button style={{marginLeft: "5px"}} type="danger" onClick={() => this.handleDelete(results._id)}>Hapus</Button>
                    </Card.Grid>
                    
                    );
                })}
               
            </div>
        </div>
        );
    }
}