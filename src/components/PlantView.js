import React, {Component} from 'react'

import { connect } from 'react-redux'

class PlantView extends Component  {
  
  
  render(){
    //make this component call its own data on reload to bookmark
    const {plant} = this.props;
    return (

        <div class="ui raised very padded text container segment">
            <div class="ui fluid card">
      <div class="image">
        <img src="https://farm5.staticflickr.com/4863/45878440395_b6fb181478_z_d.jpg" alt="my plant"/>
      </div>
      <div class="content">
      <div class="header">{plant.name}</div>
     

      <div className="header">Plant Info</div>
      <div class="description">
        {plant.description}
      </div>
    </div>
    
    <div class="extra content">
    <span>
        <i class="user icon"></i>
        notes
      </span>
    </div>
    <div class="extra content">
    <div class="description">
      {plant.notes}
      </div>
    </div>
    </div>     
    </div>   
  
      
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    plant: state.apiReducer[ownProps.match.params.id]
  }

}

export default connect(mapStateToProps)(PlantView);