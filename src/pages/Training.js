import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//import { values } from 'lodash';

import { fetchPage } from "../actions/appActions";

import Hero from "../components/Hero/Hero";
import ArticleBlock from "../components/ArticleBlock/ArticleBlock";

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

class Training extends Component {
  constructor(...args) {
    super(...args);

    this.props.fetchPage("pageTraining");
  }

  render() {
    const { title, summary, backgroundImage, articles, employees } = this.props;

    return (
      <div>
        <Hero />
        {articles &&
          articles.map(article => <ArticleBlock article={article} />)}

        {employees && (
          <div>
            <h2>{employees.title}</h2>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    title: state.pageInfo.title,
    summary: state.pageInfo.summary,
    backgroundImage: state.pageInfo.backgroundImage,
    articles: state.articles,
    employees: state.employees
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPage: bindActionCreators(fetchPage, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Training);
