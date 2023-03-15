import React from 'react';
import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: 'Czym jest teoria strun',
        author: 'Jan Nowak',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quidem fuga eos. Iure omnis quas optio harum rerum quos neque maxime qui impedit odit nobis numquam, commodi blanditiis cum ad!'
    },
    {
        id: 2,
        title: 'Czym jest paradoks fermiego?',
        author: 'Ania Kwiatkowska',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quidem fuga eos. Iure omnis quas optio harum rerum quos neque maxime qui impedit odit nobis numquam, commodi blanditiis cum ad!'
    },
    {
        id: 3,
        title: 'Ciemna materia i ciemna energia?',
        author: 'Adam Kowalski',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quidem fuga eos. Iure omnis quas optio harum rerum quos neque maxime qui impedit odit nobis numquam, commodi blanditiis cum ad!'
    },
]

const HomePage = () => {
    
    const artList = articles.map(article => (
        <Article key={article.id} {...article}/>
    ))
    return ( 
        <div className="home">
            {artList}
        </div>
     );
}
 
export default HomePage;