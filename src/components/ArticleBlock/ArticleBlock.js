import React, { Component } from "react";
import { Link } from "react-router-dom";
import marked from "marked";
import "./article-block.css";

import { Typography, types } from "../";

class ArticleBlock extends Component {
  render() {
    const { article } = this.props;

    return (
      <div className="article-block" key={article.sys.id}>
        {/* {article.fields.image && (
          <div className="article-block__image">
            <img src={article.fields.image.fields.file.url} />
          </div>
        )} */}
        <div className="article-block__content">
          <Typography element="h2" type={types.display1}>
            {article.fields.title}
          </Typography>
          <Typography element="div" type={types.body2}>
            <div
              dangerouslySetInnerHTML={{ __html: marked(article.fields.body) }}
            />
          </Typography>
        </div>
      </div>
    );
  }
}

export default ArticleBlock;
