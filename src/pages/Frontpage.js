import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
//import { values } from 'lodash';

import { fetchPage} from '../actions/appActions';

import Hero from '../components/Hero/Hero';

//import Scroll from 'react-scroll';
//import matchMedia from 'matchmedia';

// import Layout from '../components/Layout';
// import Slider from 'react-slick';
// import EmployeeLink from '../components/Employees/EmployeeLink';
// import { Button, ArticleBlock, ArticleSummary, PageIntro, ModalButton } from '../components';

// import { Link } from 'react-router';
// import styles from '../components/PageIntro/_pageIntro.scss';

//var Modal = require('boron/OutlineModal');

// Styles
// import modalStyles from '../components/ModalWrapper/modal.scss';
// import pageIntroStyles from '../components/PageIntro/_pageIntro.scss';

class Frontpage extends Component {

    constructor(...args) {
        super(...args);
        
        this.props.fetchPage('pageIndex');
    }

    showModal = () => {
        this.refs.modal.show();
    }

    hideModal = () => {
        this.refs.modal.hide();
    }

    render() {
      
        const {title, summary, backgroundImage, articles} = this.props;
      
        return (
            <div>
              <Hero/>
              {articles && articles.map(article => (
                <div key={article.sys.id}>
                  {article.fields.image && (
                    <img src={article.fields.image.fields.file.url}/>
                  )}
                  <h2>{article.fields.title}</h2>
                  <p>{article.fields.summary}</p>
                </div>
              ))}
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {

    // const entries = [];
    // if(state.pages[state.activePage]) {
    //     state.pages[state.activePage].articles.map(id => {
    //         let entry = state.entries && Object.values(state.entries).find(entry => entry.sys.id === id);
    //         entries.push(entry);
    //     });
    // }
    
    return {
        title: state.pageInfo.title,
        summary: state.pageInfo.summary,
        backgroundImage: state.pageInfo.backgroundImage,
        // pageSummary: state.pages[state.activePage] ? state.pages[state.activePage].summary : null,
        // pageBackgroundImage: state.pages[state.activePage] ? state.pages[state.activePage].backgroundImage : null,
        articles: state.articles
    }
}

const mapDispatchToProps = dispatch => ({
  fetchPage: bindActionCreators(fetchPage, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Frontpage);
