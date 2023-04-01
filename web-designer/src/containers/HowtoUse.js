import React, {Component} from 'react';
import PropTypes from 'prop-types';

class HowToUse extends Component {

  render() {
    if (!this.props.display) return null;

    return (
      <div>
        <h3>How to Use</h3>
        <p>Welcome to our website builder! Here's a quick guide on how to use our tool:</p>
        <ol>
          <li>Start by selecting a block from the sidebar on the left. You can choose from a variety of pre-built blocks like text, images, and tables.</li>
          <li>Once you've selected a block, you can customize it using the options in the block configuration panel on the right. You can change the text, image source, and other settings.</li>
          <li>To add more blocks to your page, simply click the "Add Block" button in the top left corner of the screen. You can add as many blocks as you want, and arrange them in any order.</li>
          <li>When you're ready to export your HTML code, click the "Export" button at the bottom of the sidebar. You can then copy and paste the code into your own project.</li>
        </ol>
        <p>That's it! With our Website builder, you can create beautiful, custom web pages in minutes. If you have any questions or feedback, please don't hesitate to contact us.</p>
      </div>
    );
  }
}

HowToUse.propTypes = {
  display: PropTypes.bool,
};

export default HowToUse;
