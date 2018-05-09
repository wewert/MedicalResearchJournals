import React from 'react';
import { conect } from 'react-redux';
import api from 'src/api.js';

export default class Journals extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }

  renderUser(id, name, email) {
    return(
      <li className="list-group-item" key={id}>
        <span className="label label-default label-pill pull-xs-right">
          <a href={email}>{email}</a>
        </span>
        {name}
      </li>
    );
  };
