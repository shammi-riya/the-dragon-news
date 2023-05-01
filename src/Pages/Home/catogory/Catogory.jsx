import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Newscard from '../Newscard/Newscard';

const Catogory = () => {
    const catogoryNews = useLoaderData()
    const {id} = useParams()

    return (
        <div>
          { id && <h2>This Category News: {catogoryNews.length}</h2>}
          {
            catogoryNews.map(news=>
             < Newscard
             key={news._id}
             news={news}
              >

            </Newscard>)
          }
          
        </div>
    );
};

export default Catogory;