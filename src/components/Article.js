import React, {Component} from 'react';

class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
        isOpen: true
    }
  }

  handleClick = () => {
      this.setState({
          isOpen: !this.state.isOpen
      });
  }

  render() {
      const { article } = this.props;
      // check if state is true, show body text
      const body = this.state.isOpen && <p>{article.text}</p>


      return (
          <section className="card">
              <div className="card-header">
                  <h2>{article.title}
                      <button
                          onClick={this.handleClick}
                          className="btn btn-primary float-right">
                          {this.state.isOpen ? 'Close' : 'Open'}
                      </button>
                  </h2>

              </div>
              <div className="card-body">
                  <span className="card-subtitle text-muted">Creation date: {article.date}</span>
                  {body}
              </div>
          </section>
      )
  }
}

export default Article;
