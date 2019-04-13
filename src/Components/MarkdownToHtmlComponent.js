import React from 'react';
import Markdown from 'react-markdown';

class MarkdownToHtmlComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentText: this.props.contentText
    };
  }

  render() {
    return (<Markdown source={this.state.contentText} />);
  }

}

export default MarkdownToHtmlComponent;