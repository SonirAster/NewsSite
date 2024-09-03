import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Articles.css';
import icon from '../../../assets/Try.png';

const Article = (props) => {
    return (
        <li className="articles-list__item white-bg">
            <img src={props.item.image_url} className='white-bg' alt={props.item.title} />
            <h2 className="articles-list__item__title secondary-title">
                <NavLink to={props.item.article_id}>{props.item.title}</NavLink>
            </h2>
            <p>{props.item.description}</p>
        </li>
    )
}

const Articles = () => {
    //const [articles, setArticles] = useState();

    // function getArticles () {
    //     let link = 'https://website-news-psi.vercel.app/news/main_page?page_num=1&page_size=5';
    
    //     fetch(link)
    //     .then(res => res.json())
    //     .then(data => {
    //         let result = data.articles.map(i => <Article item={i} />);
    //         setArticles(result);
    //     })
    // }

    // getArticles ();

    let articles = [];
    //setArticles(result);

    return <ul className="articles-list">{articles}</ul>
}

export default Articles;