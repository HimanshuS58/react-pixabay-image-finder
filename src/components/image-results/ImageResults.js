// ** for this project we have made account in Pixabay   <--- https://pixabay.com 
// ** this is a class based component <--- use of rcc 


import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { GridList, GridTile } from 'material-ui/GridList'  // to make the images in grid format
import IconButton from 'material-ui/IconButton'  
import ZoomIn from 'material-ui/svg-icons/action/zoom-in'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

 class ImageResults extends Component {

    state = {                  
        open: false,
        currentImg: ''  // this property is used so that we can know which image to load inside the dialog
    }

    handleOpen = (img) => {
        this.setState({ open: true, currentImg: img })     // setState() is same as useState() of functional component
    }

    handleClose = () => {
        this.setState({ open: false })    // setState() is same as useState() of functional component
    }

  render() {

    let imageListContent;

    const { images } = this.props;   // this is same as passing images as prop in functional component

    if(images) {
        imageListContent = (
            <GridList cols = {3}>
                {images.map((img) => (                  // as images are coming in the form of array.
                    <GridTile
                      title = {img.tags}
                      key = {img.id}
                      subtitle = {
                        <span>
                            by <strong>{img.user}</strong>
                        </span>
                      }
                      actionIcon = {
                        <IconButton onClick = {() => this.handleOpen(img.largeImageURL)}>
                            <ZoomIn color = "white" />
                        </IconButton>
                      }
                    >

                <img src = {img.largeImageURL} alt='' />        
                    </GridTile>
                ))}       
            </GridList>
        )
    }
    else {
        imageListContent = null;
    }

    const actions = [
        <FlatButton label = "Close" primary = {true} onClick = {this.handleClose} />
    ]

    return (
      <div>
        {imageListContent}
        <Dialog
        actions = {actions}
        modal = {false}
        open = {this.state.open}
        onRequestClose = {this.handleClose}
        >
         <img src = {this.state.currentImg} alt = '' style = {{width: '100%'}}></img>
        </Dialog>
        </div>
    )
  }
}

ImageResults.propTypes = {
    images: PropTypes.array.isRequired
}

export default ImageResults;