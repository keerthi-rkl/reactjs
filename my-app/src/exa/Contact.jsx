let Contact=()=>{
    return<>
    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <form>
                               <div className="form-group">
                                   <input type="text" className="form-control"   placeholder="enter your first name"/>
                               </div>
                               <div className="form-group">
                                   <input type="text"  className="form-control"  placeholder="enter your last name"/>
                               </div>
                               <div className="form-group">
                                   <input type="email" className="form-control"  placeholder="enter your email"/>
                               </div>
                               <div className="form-group">
                                   <input type="password" className="form-control"  placeholder="enter your password"/>
                               </div>
                               <button className="btn btn-info mr-6">submit</button>
                </form>
            </div>
        </div>
    </div>
    </>
}
export default Contact