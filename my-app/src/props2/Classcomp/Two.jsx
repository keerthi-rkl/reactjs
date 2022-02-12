import React from "react";
class Two extends  React.Component{
    render(){
        return<>
         <h2>second component </h2>
        <pre>{JSON.stringify(this.props)}</pre>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            <h2 className="bg-info">CARS</h2>
                        </div>
                        <div className="card-body">
                            <img src="https://tse3.mm.bing.net/th?id=OIP.-pFhqWc_YSm4UvdWoiaQnQHaEo&pid=Api&P=0&w=287&h=179" width="100%"/>
                            <h3>{this.props.carname}</h3>
                            <h3>{this.props.carprice}</h3>
                            <h3>{this.props.carcolor}</h3>
                            <h6>Ferrari car price starts at Rs 3.50 Crore for the cheapest model which is Portofino</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        </>
    }
}
export default Two