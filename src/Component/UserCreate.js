import React from 'react';
import ImageView from './Image';
import Compress from 'compress.js';

class UserCreate extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            image : [],
            comimage : []
        }
    }


    componentDidMount()
    {
        const comp=new Compress();
        const upload=document.getElementById('upload');
        upload.addEventListener('change', (evt) => {
            const files=[...evt.target.files]
            comp.compress(files, {
              size:4, // the max size in MB, defaults to 2MB
              quality: 0.75, // the quality of the image, max is 1,
              maxWidth: 1920, // the max width of the output image, defaults to 1920px
              maxHeight: 1920, // the max height of the output image, defaults to 1920px
              resize: true // defaults to true, set false if you do not want to resize the image width and height
            }).then((data)=>{
                this.setState({image : data});
              const aimage=this.state.image[0].prefix;
              const imgdata=this.state.image[0].data;
              this.setState({comimage : aimage + imgdata});
            
            })
          })
    }
    
 
  
 render(props)
    {
        console.log(this.state.image);
       //s console.log(this.state.comimage);
        
        return(
        
            
            <div className="dashed-container" style={{width:'500px' ,height:'auto' , marginLeft:'auto' , marginRight:'auto' , borderStyle:'dashed',borderWidth:'2px',textAlign:"center"}}>
                <i class="huge cloud upload icon"></i>
                <br/>
                <input type="file" name="file" id="upload"  ></input>
                <ImageView  imagesrc={this.state.comimage}/>
          </div>
        ) 
    }
}

export default UserCreate;