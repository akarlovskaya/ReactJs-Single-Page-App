import React from 'react';

 class Article extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
        <div className='article-wrapper'>
            <h3>{this.props.article.title}</h3>
            <p>{this.props.article.text}</p>
        </div>
    );
  }
}

export default Article;
