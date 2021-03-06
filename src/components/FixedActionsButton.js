import React, { Component } from 'react';
import "materialize-css/dist/css/materialize.css";
import "material-design-icons/iconfont/material-icons.css";
import jquery from 'jquery';

window.$ = window.jQuery = jquery;

require("jquery-slimscroll");
require("materialize-css/js/velocity.min.js")
require("materialize-css/js/buttons.js");

class FixedActionsButton extends Component{

  render(){
    return <div className="fixed-action-btn">
    <a className="btn-floating btn-large red">
      <i className="large material-icons">mode_edit</i>
    </a>
    <ul>
      <li><a className="btn-floating red"><i className="material-icons">insert_chart</i></a></li>
      <li><a className="btn-floating yellow darken-1"><i className="material-icons">format_quote</i></a></li>
      <li><a className="btn-floating green"><i className="material-icons">publish</i></a></li>
      <li><a className="btn-floating blue"><i className="material-icons">attach_file</i></a></li>
    </ul>
  </div>
  }
}

export default FixedActionsButton;
