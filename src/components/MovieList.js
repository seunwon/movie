import { Rating } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const QBlock = styled.div`
  flex: 10;
  padding: 3px 30px;
  padding-bottom: 4px;
  overflow-y: 10px;
  text-align: center;
`;

function Movie({movie}) {
        
    return (
        <QBlock>
        <div>
            <b>{movie.title}</b> 
            <span> ({movie.genre}) </span>
            <button onClick={() => {
                window.location.href = window.location.href+1;
            }}>다음 영화</button>
        </div>
        </QBlock>
    );
}

function MovieList() 
    const movies = [
        {
            id: 1, 
            title: '헤어질 결심',
            genre: 'romance'
        },
        {
            id: 2, 
            title: '극한직업',
            genre: 'comedy'
        },
        {
            id: 3, 
            title: '인터스텔라',
            genre: 'sf'
        },
        {
            id: 4,
            title: '전우치',
            genre: 'action'
        },
        {
            id: 5, 
            title: '명량',
            genre: 'action'
        },
        {
            id: 6,
            title: '겨울왕국',
            genre: 'fantasy'
        },
        {
            id: 7, 
            title: '어벤져스',
            genre: 'action'
        },
        {
            id: 8,
            title: '기생충',
            genre: 'thriller'
        },
        {
            id: 9, 
            title: '어바웃 타임',
            genre: 'romance'
        },
    ];


    return (
        <div>
            {movies.map(movie => (
                <>
                    <Movie movie={movie} key={movie.id} />
                    <QBlock>
                    <Rating />asdf
                    </QBlock>
                </>
                
            ))}
        </div>
    );


export default MovieList;