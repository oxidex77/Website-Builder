import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Output extends Component {

  render() {
    if (!this.props.display) return null;

    return (
      <div>
        <div className='d-flex justify-content-between align-items-center'>
          <h5>Export</h5>
        </div>
        <hr />
        <div>
          <label>Output HTML</label>
          <textarea readOnly className='form-control' rows={10} value={this.props.html}></textarea>
        </div>
      </div>
    );
  }
}

Output.propTypes = {
  display: PropTypes.bool,
  html: PropTypes.string,
};

export default Output;
