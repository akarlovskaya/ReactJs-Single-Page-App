import React, { Component } from 'react';
import Article from './Article';

class Articles extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { articles } = this.props;

        return(
            <div>
                <h2>Articles</h2>
                {
                    articles.map(article => {
                        return <li key={article.id}>
                                    <Article article={article}/>
                                </li>
                    })

                }
            </div>
        )
    }
}

export default Articles;
