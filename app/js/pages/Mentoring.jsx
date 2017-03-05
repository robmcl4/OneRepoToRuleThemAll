import React from 'react';
import Status from 'containers/general/Status';
import Login from 'containers/general/Login';

import { MENTORS } from 'actions/mentors';
import { SHIFTS } from 'actions/shifts';

const Mentoring = () => (
  <div className="container">
    <div className="row">
      <div className="col">
        <h1 className="pull-left">Mentoring</h1>
        <div className="btn-group pull-right" style={{ marginTop: '5px' }} role="group" aria-label="Login Button">
          <Login className="btn btn-sse" />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <Status type={[MENTORS, SHIFTS]} message />
      </div>
    </div>
    <div className="row">
      <div className="col">
        <Status type={[MENTORS, SHIFTS]} spinner />
      </div>
    </div>
  </div>
);

export default Mentoring;