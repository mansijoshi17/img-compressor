import React from 'react';

class ImageView extends React.Component{

    render(props)
    {
        return(
            <div>
             <img className="img" src={this.props.imagesrc} alt="compress"  style={{width : '500px' , marginTop:'20px'}}></img>
            </div>
        )
    }
}

export default ImageView; 