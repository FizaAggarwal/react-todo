import React, {Component} from "react";

class Footer extends Component{
    render(){
        return(
            <div className="footer">
            <span>{this.props.count("active")} {this.props.count("active")===1?"item":"items"} left</span>
            <span><button onClick={()=>this.props.setMode("all")}>All</button></span>
            <span><button onClick={()=>this.props.setMode("active")}>Active</button></span>
            <span><button onClick={()=>this.props.setMode("completed")}>Completed</button></span>
            <span><button onClick={this.props.clear}>Clear Completed</button></span>
          </div>
        )
    }
}

export default Footer;