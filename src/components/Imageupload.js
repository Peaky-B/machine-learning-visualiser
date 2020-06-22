import React, {Component} from "react";
import axios from "axios";

class Imageupload extends Component {
    state = {
        imageURL: '',
        firebaseID : '23nekfjfjdnksn.png'
    };

    handleUploadImage = (ev) => {
        ev.preventDefault();

        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);
        data.append('filename', this.state.firebaseId);

        axios.post("/upload", data).then((response) => {
            console.log(response)
            this.setState({imageURL:response.data})
        });
    }

    render() {
        return (
            <form onSubmit={this.handleUploadImage}>
                <div>
                    <input ref={(ref) => {
                        this.uploadInput = ref;
                    }} type="file"/>
                </div>

                <br/>
                <div>
                    <button>Upload</button>
                </div>
                <img src={this.state.imageURL} alt="img"/>
            </form>
        );
    }
}


export default Imageupload