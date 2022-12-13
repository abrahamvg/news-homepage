import React from 'react'
import '../styles/Card.css'
export default function Card(props) {
  return (
    <div className="card">
        <div className="card-cover">
            <img src={props.urlToImage} alt="" />
        </div>
        <div className="card-contents">
            <h2>0{props.number}</h2>
            <h3><a href = {props.url} target="_blank" rel="noopener">{props.title}</a></h3>
            <h4>{props.description}</h4>
        </div>

    </div>
  )
}
