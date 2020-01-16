import React, {Component} from 'react';

import './Home.styles.scss';
import Form from '../../components/form/Form.component';

class Home extends Component {

  render() {
    return (
      <main className="home">
        <h1 className="page-title">Star Wars</h1>
        <Form />
      </main>
    )
  }
}

export default Home;