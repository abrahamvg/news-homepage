import React, { useEffect, useState } from 'react'
import '../styles/News.css'
import Card from './Card';

export default function News() {
    const [news, setNews] = useState([]);

    const getNews = async() => {
        const response = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=82009d26e60a4157a9f92d57770cb6e6")
        const filterNews = await response.json();


        filterNews.articles.forEach(element => {
            const data = {
                "title": element.title,
                "description": element.description,
                "url" : element.url,
                "urlToImage": element.urlToImage,
             }

            setNews(state => [...state, data])
        });

        console.log(news)
    }

    useEffect(()=> {
        getNews()
    },[])
  

  return (<>
    {news.length === 0 ? "":   
    <>
    <div className='news-block'>
        <div className="main-news">
            <img src= {news[0].urlToImage} alt="" />
            <div className="info">
                <div className="heading">
                <h1>{news[0].title}</h1>
                </div>
            <div className="description">
                <p>{news[0].description.slice(0,300)}</p>
                <a href={news[0].url} target="_blank" rel="noopener"> READ MORE</a>
            </div>
            </div> 
            
        </div>
        <div className="side-news">
            <h3>New</h3>
            <div className="news">
                <h4 className="heading"><a target="_blank" rel="noopener" href = {news[1].url} >{news[1].title}</a></h4>
                <p className="description">{news[1].description.slice(0,100)}...</p>
            </div>
            <hr />
            <div className="news">
                <h4 className="heading"><a target="_blank" rel="noopener" href = {news[2].url} >{news[2].title}</a></h4>
                <p className="description">{news[2].description.slice(0,100)}...</p>
            </div>
            <hr />
            <div className="news">
            <h4 className="heading"><a target="_blank" rel="noopener" href = {news[3].url} >{news[3].title}</a></h4>
                <p className="description">{news[3].description.slice(0,100)}...</p>
            </div>
        </div>
    </div> 
    <div className="sliderNews">
        
        <Card urlToImage = {news[4].urlToImage} url = {news[4].url} number = {1} title = {news[4].title} description = {news[4].description.slice(0,80)}/>
        <Card urlToImage = {news[5].urlToImage} url = {news[5].url} number = {2} title = {news[5].title} description = {news[5].description.slice(0,80)}/>
        <Card urlToImage = {news[6].urlToImage} url = {news[6].url} number = {3} title = {news[6].title} description = {news[6].description.slice(0,80)}/>
    </div>
    </>
    }
  </>
    
  )
}
