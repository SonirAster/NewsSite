import React, { useRef } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './News.css';
import photo from '../../assets/Try.png';
import bg from '../../assets/articles.png';
import searchIcon from '../../assets/icons/search.png';

const News = (props) => {
    const categoriesList = props.categories.map(item => {
        return (
            <li className="news-page__main__navbar__categories__item white-bg">
                <NavLink>{item.name}</NavLink>
            </li>
        )
    })

    const searchInput = useRef(null);

    function sendSearchRequest () {
        window.alert(searchInput.current.value);
        searchInput.current.value = '';
    }

    return (
        <>
            <img className='news-page-bg' src={bg} alt="" />
            <div className='news-page__main'>
                <header className='news-page__main__header'>
                    <h1 className="logo">nameinannoun</h1>
                    <div className="search white-bg">
                        <input ref={searchInput} type="text" placeholder='Search' />
                        <button className="search__button white-bg" onClick={sendSearchRequest}><img src={searchIcon} alt="search" /></button>
                    </div>
                </header>
                <nav className='news-page__main__navbar white-bg'>
                    <ul className='news-page__main__navbar__list'>
                        <li className='news-page__main__navbar__list__item white-bg'>
                            <img className='white-bg' src={photo} alt="photo" /><p>photo</p>
                        </li>
                        <li className='news-page__main__navbar__list__item white-bg'>
                            <img className='white-bg' src={photo} alt="login" /><p>login</p>
                        </li>
                        <li className='news-page__main__navbar__list__item white-bg'>
                            <img className='white-bg' src={photo} alt="feed" /> <p>feed</p>
                        </li>
                        <li className='news-page__main__navbar__list__item white-bg'>
                            <img className='white-bg' src={photo} alt="profile" /> <p>profile</p>
                        </li>
                        <li className='news-page__main__navbar__list__item white-bg'>
                            <img className='white-bg' src={photo} alt="saved" /> <p>saved</p>
                        </li>
                        <li className='news-page__main__navbar__list__item white-bg'>
                            <img className='white-bg' src={photo} alt="reset feed" /> <p>reset feed</p>
                        </li>
                    </ul>
                    <ul className="news-page__main__navbar__categories">
                        {categoriesList}
                    </ul>
                </nav>
                <main className='news-page__main__news-block white-bg'>
                    <Outlet />
                </main>
                <section className='news-page__main__ads white-bg'>
                    <div className='white-bg'>
                        <img src='#' alt="Place an advertisement here" />
                    </div>
                    <div className='white-bg'>
                        <img src='#' alt="Place an advertisement here" />
                    </div>
                    <div className='white-bg'>
                        <img src='#' alt="Place an advertisement here" />
                    </div>
                </section>
            </div>
            <div className='news-page__footer'>star icon</div>
        </>
    )
}

export default News;