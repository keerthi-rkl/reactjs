import React from "react"
import Contactlist from "./Contactlist"
import Axios from "axios"
import Contactdetails from "./Contactdetails"
class Contactapp extends React.Component{
    constructor(props){
        super(props)
        this.state={contactS:[],selectedContact:{}}
    }
    getcontact=(a)=>{
         this.setState({selectedContact:a})
    }
    componentDidMount=()=>{
        Axios.get("https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist")
              .then((result)=>{
                  this.setState({contactS:result.data})
              })
              .catch()
    }
render(){
    return<>
    <h3>Contact app ....</h3>
     <pre>{JSON.stringify(this.state)}</pre> 
    <pre>{JSON.stringify(this.state.selectedContact)}</pre>
    <div className="container">
        <div className="row">
            <div className="col-md-8">
                <Contactlist CONTACTS={this.state.contactS} selectedContact={this.getcontact}/>
            </div>
            <div className="col-md-4">
                <Contactdetails selcontact={this.state.selectedContact}/>
            </div>
        </div>
    </div>
    </>
}

}
export default Contactapp