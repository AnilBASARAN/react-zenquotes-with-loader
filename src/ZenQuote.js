import axios from "axios";
import React,{Component} from "react";
import "./ZenQuote.css";
class ZenQuote extends Component{
constructor(props){
    super(props);
    this.state = { quote:"",isLoaded: false};
}
    componentDidMount(){
        axios.get("https://api.github.com/zen").then(response=>{
                setTimeout(function(){
                    this.setState({quote:response.data,isLoaded:true});
                }.bind(this),
                3000
            );
        });
    }

    componentDidUpdate(){
        console.log("INSİDE COMPONENT DID UPDATE")
    }

    render(){
        return(
            <div>
            {this.state.isLoaded ? (
            <div>
                <h1>Always remember...</h1>
                <p>{this.state.quote}</p>
            </div>
        ) : (
            <div className="loader" ></div>
        )}
    </div>)
  }
}

export default ZenQuote;