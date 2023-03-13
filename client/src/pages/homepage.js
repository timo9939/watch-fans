import React from 'react';
// Import the `useQuery()` hook from Apollo Client
import { useQuery } from '@apollo/client';

import ContentList from '../components/Content/content';

// Import the query we are going to execute from its file
import { QUERY_GETCONTENTS } from '../utils/queries';
import {ADD_USER}from '../utils/mutation';

const Home = () => {
    // Execute the query on component load
    const { loading, data } = useQuery(QUERY_GETCONTENTS);
  
    // Use optional chaining to check if data exists and if it has a thoughts property. If not, return an empty array to use.
    const content = data?.content || [];
  
    return (
      <main>
        <div >
          <div >
            {/* If the data is still loading, render a loading message */}
            {loading ? (
              <div>Loading...</div>
            ) : (
              <ContentList
                content={content}
                title="Some Feed for Thought(s)..."
              />
            )}
          </div>
        </div>
      </main>
    );
  };
  
  export default Home;
  