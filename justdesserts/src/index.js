import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="utf-8" />
        <title>JustDesserts</title>
        <link rel="stylesheet" href="/src/index.css" />
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        <div className="loginBox">
          <div className="glass">
            <img src="../images/cupcake.png" className="user" />
            <h3>Sign in Here</h3>
            <form>
              <div className="inputBox">
                <input type="text" name placeholder="Username" />
                <span><i className="fa fa-user" aria-hidden="true" /></span>
              </div>
              <div className="inputBox">
                <input type="password" name placeholder="Password" />
                <span><i className="fa fa-lock" aria-hidden="true" /></span>
              </div>
              <input type="submit" name defaultValue="Login" />
            </form>
            <a href="#">Forgot Password?</a>
            <br />
            <a href="#">Sign up!</a>
          </div>
        </div>
      </div>
    );
  }
});