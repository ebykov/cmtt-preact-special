import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import store from '../store';

class App extends Component {
  constructor() {
    super();
  }

  render(props, state) {
    return (
      <div>Special</div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    app: store.appState
  };
};

export default connect(mapStateToProps)(App);
