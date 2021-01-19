import React from 'react'
import ImageUploader from "react-images-upload"

class PhotoUpload extends React.Component {

    constructor(props){
        super(props);
        this.state = {pictures: []}
        this.onDrop = this.onDrop.bind(this)
    }

    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture)
        });
    }

    render() {
        return (
            <div>
            <ImageUploader 
                withIcon={false}
                buttonText= "Choose Image"
                onChange={this.onDrop}
                imgExtension={[".jpg", ".png", ".gif"]}
                maxFileSize={5224880}
                withPreview={true}
            />
            </div>
        )
    }
}

export default PhotoUpload
