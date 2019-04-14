import React from 'react';
import Markdown from 'react-markdown';
import Prism from "prismjs";
import "../prism.css";

class MarkdownToHtmlComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentText: this.props.contentText
    };
  }

  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    return (<Markdown source={this.state.contentText} />);
  }

}

export default MarkdownToHtmlComponent;