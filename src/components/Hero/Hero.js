import React, { Component } from 'react';
import { connect } from 'react-redux';
import './hero.css';

class Hero extends Component {

    render() {
      
      const {title, summary, backgroundImageUrl} = this.props;
      
      const style = {
            backgroundColor: 'rgba(32, 39, 68, 0.8)',
            backgroundImage: `-moz-linear-gradient(top, rgba(32, 39, 68, 0.8), rgba(36,37,66, 0.8)), url(${backgroundImageUrl})`,
            backgroundImage: `-ms-linear-gradient(top, rgba(32, 39, 68, 0.8), rgba(36,37,66, 0.8)), url(${backgroundImageUrl})`,
            backgroundImage: `-webkit-linear-gradient(top, rgba(32, 39, 68, 0.8), rgba(36,37,66, 0.8)), url(${backgroundImageUrl})`,
            backgroundImage: `linear-gradient(180deg, rgba(32, 39, 68, 0.8), rgba(36,37,66, 0.8)), url(${backgroundImageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: '50%'
        }
    
      return (
        <div className="hero">
          <div className="hero__bg" style={style}>
            <div className="hero__content">
              <h1 className="hero__title">{title}</h1>
              <h2 className="hero__summary">{summary}</h2>
            </div>  
          </div>
        </div>
      );
    }
}

const mapStateToProps = (state, props) => {
  
    const backgroundImageUrl = state.pageInfo.backgroundImage && state.pageInfo.backgroundImage.fields.file.url;
  
    return {
        title: state.pageInfo.title,
        summary: state.pageInfo.summary,
        backgroundImageUrl: backgroundImageUrl
    }
}

export default connect(mapStateToProps)(Hero);
