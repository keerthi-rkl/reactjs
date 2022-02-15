import React, { Component } from 'react';

 class Two extends Component {
    state={
        message:"hello........"
    }
    updateHnadler=(ok)=>{
          this.setState({message:ok})
    }
  render() {
      
    return <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                            <div className="card">
                            <div className="card-header">
                                 <h3>MESSAGE</h3>
                             </div>
                             <div className="card-body bg-secondary text-light">
                                 <h3>MSG:{this.state.message}</h3>
                               <button className="btn btn-info" onClick={this.updateHnadler.bind(this,"GOOD MORNING")}>M</button>
                               <button className="btn btn-danger" onClick={this.updateHnadler.bind(this,"GOOD AFTER NOON")}>A</button>
                               <button className="btn btn-success"onClick={this.updateHnadler.bind(this,"GOOD EVENING")}>E</button>
                               <button className="btn btn-warning mr-2"onClick={this.updateHnadler.bind(this,"GOOD NIGHT")}>N</button>
                             </div>
                            </div>
                    </div>
                </div>
            </div>
    </div>;
  }
}

export default Two;
