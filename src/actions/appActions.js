import {createClient} from 'contentful';

export const fetchPage = (contentType) => {
  return (dispatch, getState) => {
    
    const state = getState();
    const client = createClient({
        space: '2omch4pe7no2',
        accessToken: '6274e3bdae4a785f1e1056c870a301b6a7d8bc893e69655354fc6ec439343fe6'
    })
    
    dispatch({
        type: 'LOAD_PAGE'
    })
    
    client.getEntries({content_type: contentType})
    .then(function (res) {
        console.log(res);
        const articles = res.items[0].fields.articles.filter(entry => entry.sys.contentType && entry.sys.contentType.sys.id === 'article');
        const pageInfo = {
          title: res.items[0].fields.title,
          summary: res.items[0].fields.summary,
          backgroundImage: res.items[0].fields.backgroundImage
        };
        
        const employees = {
          title: res.items[0].fields.employeeListTitle,
          summary: res.items[0].fields.employeeListSummary,
          employees: res.items[0].fields.employees,
        }
        
        dispatch({
            type: 'SET_PAGE',
            pageInfo,
            articles,
            employees
        })
    });
  }
};
