import React from 'react';
import { MemoryRouter } from 'react-router';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import { RecoilRoot } from 'recoil';


import ThemeWrapper from './theme/context';
import Scaffold from './components/Scaffold';
import { on } from 'cluster';
import { getContrastRatio } from '@material-ui/core';

/*const client = new ApolloClient({
  uri: 'http://gtario.net:4000/graphql/'
}); */

const App = () => {
  return (
    //<ApolloProvider client={client}> 
      <RecoilRoot>
        <MemoryRouter>
          <ThemeWrapper>
            <Scaffold />
          </ThemeWrapper>
        </MemoryRouter>       
      </RecoilRoot>
    //</ApolloProvider>
  );
}

export default App;

