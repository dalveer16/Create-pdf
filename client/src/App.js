import React, { Component } from "react";
import axios from "axios";
import { saveAs } from "file-saver";
import "./App.css"

class  App extends Component {

state= {
  name: "",
  recieptId: 0,
  price1: 0,
  price2: 0

}
handleChange = ({ target : {value, name }}) => this.setState({[name]: value})

createAndDownloadPdf = () => {
  axios.post("/create-pdf",this.state)
  .then(() => axios.get("fetch-pdf", { responseType: "blob" }))
  .then((res) => {
    const pdfBlob = new Blob([res.data] , {type: "application.pdf"})


    saveAs(pdfBlob, "newPdf.pdf")
  })
}

  render() {
  return (
    <div className="App">
        <input text = "text" placeholder = "Name" name = "namee" onChange = {this.handleChange}></input>
        <input text = "number" placeholder = "Reciept Id" name = "recieptId" onChange = {this.handleChange}></input>
        <input text = "number" placeholder = "Price 1" name = "price1" onChange = {this.handleChange}></input>
        <input text = "text" placeholder = "Price 2" name = "price2" onChange = {this.handleChange}></input>
        <button onClick={this.createAndDownloadPdf}>Download PDF</button>

    </div>
  ); 
  }
 
}

export default App;
