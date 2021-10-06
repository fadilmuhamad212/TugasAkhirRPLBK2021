import React, { Component } from "react";
import axios from "axios";
import { Modal } from "antd";
import "antd/dist/antd.css";


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


    handleButton = (nama_buku) => {
        alert(nama_buku);
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
        <div className="boxWhite">
        
        <center>
        <button onClick={this.handleTambahOrang}>Tambah Buku</button>
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
            <input
            type="text"
            placeholder="nama"
            onChange={this.handleNama}
            />
            <br />
            <p>Penulis : </p>{" "}
            <input type="text" placeholder="publish" onChange={this.handlePublish} />
            <br />
            <p>tahun : </p>{" "}
            <input
            type="text"
            placeholder="tahun"
            onChange={this.handleTahun}
            />
            <br />
        </div>
        </Modal>
        {this.state.tekkom.map((results, index) => {
        return (
        <div className="card" key={results.nama_buku} >
        <div className="card-body">
        <h5 className="card-title">Nama Buku : {results.nama_buku}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Penulis : {results.penulis}</h6>
        <h6 className="card-subtutle mb-2 text-muted">Tahun : {results.tahun}</h6>
        </div>
        <button
        className="button"
        onClick={() => this.handleButton(results.nama_buku)}
        >
        klik aku
        </button>
        <button className="button" onClick={() => this.handleDelete(results._id)}>
        Hapus data   
        </button>
        </div>
        );
        })}
        </div>
        </div>
        );
    }
}