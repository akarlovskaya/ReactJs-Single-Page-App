import React from 'react';
import Article from '../Article';
import './articleList.css'

 const ArticleList = ( { articles } ) => {
     const articleElements = articles.map(article =>
         <li
             key = {article.id}
             className='article-list__li'>
             <Article article = {article}/>
         </li>
     );

  return (
      <ul className="article-list__ul">
          {articleElements}
      </ul>
  );
}

export default ArticleList;
