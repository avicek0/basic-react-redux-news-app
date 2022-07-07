import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import  getNewsAction from '../actions' ;
import { useDispatch } from 'react-redux';
const FetchNews = () => {
    const api_key = "73f59e8b0cb748548421f0b7d5836ee2";
    const dispatch = useDispatch();
    const URL = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${api_key}`

    useEffect(() => {
           
            axios.get(URL).then((data) => {
               const articles = data.data.articles;
               dispatch (getNewsAction(articles));
            });
    },[]);
return (
    <div>
        <h1>welcome To News From All Around The World</h1>
    </div>
  )
}

export default FetchNews;