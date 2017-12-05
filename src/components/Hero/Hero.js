import React, { Component } from "react";
import { connect } from "react-redux";
import cn from "classnames";
import "./hero.css";

import { Typography, types } from "../";

class Hero extends Component {
  render() {
    const { title, summary, backgroundImageUrl, fullHeight } = this.props;

    const style = {
      backgroundColor: "rgba(32, 39, 68, 0.8)",
      backgroundImage: `-moz-linear-gradient(top, rgba(32, 39, 68, 0.8), rgba(36,37,66, 0.8)), url(${
        backgroundImageUrl
      })`,
      backgroundImage: `-ms-linear-gradient(top, rgba(32, 39, 68, 0.8), rgba(36,37,66, 0.8)), url(${
        backgroundImageUrl
      })`,
      backgroundImage: `-webkit-linear-gradient(top, rgba(32, 39, 68, 0.8), rgba(36,37,66, 0.8)), url(${
        backgroundImageUrl
      })`,
      backgroundImage: `linear-gradient(180deg, rgba(32, 39, 68, 0.8), rgba(36,37,66, 0.8)), url(${
        backgroundImageUrl
      })`,
      backgroundSize: "cover",
      backgroundPosition: "50%"
    };

    const heroClass = cn("hero", {
      "hero--full": fullHeight
    });

    return (
      <div className={heroClass}>
        <div className="hero__bg" style={style}>
          <div className="hero__content">
            <Typography className="hero__title">{title}</Typography>
            <Typography
              element="h2"
              type={types.display1}
              className="hero__summary"
            >
              {summary}
            </Typography>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const backgroundImageUrl =
    state.pageInfo.backgroundImage &&
    state.pageInfo.backgroundImage.fields.file.url;

  return {
    title: state.pageInfo.title,
    summary: state.pageInfo.summary,
    backgroundImageUrl: backgroundImageUrl
  };
};

export default connect(mapStateToProps)(Hero);
