import React, { Component } from 'react';
import Contable from "./Contable"
import Card from "./Card"
import Axios from "axios"
 class Contact extends Component {
     constructor(props){
         super(props);
         this.state={
             contacts:[],
             selcontact:{}
         }
     }
    getcontact=(a)=>{
        this.setState({selcontact:a})
    }
     componentDidMount() {
        Axios.get('https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist')
            .then((response) => {
                this.setState({ contacts: response.data })
            })
            .catch()

    }
  render() {
    return <>
      <div className="container mt-4">
          <pre>{JSON.stringify(this.state)}</pre>
          <div className="row">
              <div className="col-md-8">
              {
                                this.state.contacts.length > 0 ? <> <Contable bts={this.state.contacts} selectedC={this.getcontact}/>
                                </> : null
                            }

                 
              </div>
              <div className="col-md-4">
               {
                                Object.keys(this.state.selcontact).length > 0 ? <> <Card ok={this.state.selcontact}/></> : null
                            }
                            {/* <Card ok={this.state.selcontact} */}

     
              </div>
          </div>
      </div>
     </>
  }
}

export default Contact;
