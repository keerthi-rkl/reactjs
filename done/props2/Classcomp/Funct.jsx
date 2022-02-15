import React from 'react';

function Funct(props) {
  return <div>
      <div className="container">
          <div className="row">
              <div className="col-md-4">
                  <div className="card">
                      <div className="card-header">
                          <h2 className='bg-dark text-primary'>STUDENT DETAILS</h2>
                      </div>
                      <div className="card-body bg-info">
                          <img src="https://i.pinimg.com/236x/aa/86/51/aa8651f424f48b12e8fb283d95078118.jpg" width="100%"/>
                          <h3>NAME:{props.stu_name}</h3>
                          <h3>ID:{props.stu_id}</h3>

                          <h3>COURSE:{props.stu_Course}</h3>
                          <h3>COLLEGE:{props.stu_College}</h3>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>;
}

export default Funct;
