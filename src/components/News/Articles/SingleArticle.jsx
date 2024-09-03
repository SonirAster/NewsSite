import React from 'react';
import './Articles.css';
import url from '../../../assets/Try.png';

const SingleArticle = (props) => {
    return (
        <div className="article__main">
            <div className="article__main__left">
                <img className='white-bg' src={props.article.image_url} alt={props.article.title} />
                <span className="article__main__left__link white-bg">
                    <a href={props.article.link}>source</a>
                </span>
            </div>
            <header className="article__main__head">
                <h2 className='secondary-title'>{props.article.title}</h2>
                <span>
                    <button className='white-bg'>btn</button>
                    <button className='white-bg'>btn</button>
                    <button className='white-bg'>btn</button>
                </span>
            </header>
            <div className="article__main__text">
                <p>
                {props.article.content}
                </p>
            </div>
        </div>
    )
}

export default SingleArticle;