import React from 'react';

class TodoItem extends React.Component{
  constructor(){
    super()
    this.state={
        hover:false
    }
    this.Hover = this.Hover.bind(this)
    this.noHover = this.noHover.bind(this)
  }
  Hover(){
    this.setState({
      hover:true
    })
  }
  noHover(){
    this.setState({
      hover:false
    })
  }
  render(){      
        const completed = {
          color: "rgb(8, 200, 115)",
          textDecoration: "line-through"
        }
        const hover = {
          color: "red"
        }
        return(
          <div className="todoitem">
            <div className="btn" style={this.props.itemss.done ? completed : null} onClick={()=>{this.props.done(this.props.itemss.id)}}><p>{this.props.itemss.nombre}</p></div>
            <div className="btn" style={this.state.hover ? hover : null} onMouseEnter={this.Hover} onMouseLeave={this.noHover} onClick={()=>{this.props.delete(this.props.itemss.id)}} ><strong>X</strong></div>
          </div>
        )
      }

}

export default TodoItem;