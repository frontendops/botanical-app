import React, {Component} from 'react'

export default class FieldInput  extends Component{

  onChange = (e) => {
    const { input: { onChange } } = this.props
    onChange(e.target.files[0])
  }

  render(){
    const { input } = this.props
    const {label } = this.props  //whatever props you send to the component from redux-form Field
    return(
     <div><label>{label}</label>
     <div>
       <input
        type='file'
        accept='.jpg, .png, .jpeg'
        onChange={this.onChange}
       />
     </div>
     </div>
    )
}
}