import React from 'react';
import MainPage from './components/Main/Main';
import { Route, Routes} from "react-router-dom";
import News from './components/News/News';
import LogInPanel from './components/LogInPanel/LogInPanel';
import AdminPanel from './components/AdminPanel/AdminPanel';
import AdminPanelUsersSection from './components/AdminPanel/AdminPanelUsersSection';
import Articles from './components/News/Articles/Articles';
import SingleArticle from './components/News/Articles/SingleArticle';

const App = (props) => {
    return (
        <Routes>
            <Route path='/' element={<MainPage categories={props.state.categories} />} />
            <Route path='/news' element={<News categories={props.state.categories} data={props.state} />}>
                <Route index element={<Articles articles={props.state.articles} />} />
                {props.state.articles.map(item => <Route 
                    path={item.article_id} 
                    element={<SingleArticle article={item} />} 
                />)}
            </Route>
            <Route path='/login' element={<LogInPanel />} />
            <Route path='/admin' element={<AdminPanel />}>
                <Route index element={<></>} />
                <Route path='users' element={
                    <AdminPanelUsersSection 
                        users={props.state.users} 
                        dispatch={props.dispatch}
                    />
                }/>
            </Route>
        </Routes>
    )
}

export default App;

