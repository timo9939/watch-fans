import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import Content from './component/Content/Content';
import Header from "./component/Header";
import Footer from "./component/Footer";

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  // link: authLink.concat(httpLink), TODO: reinstate
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Header/>
      <div className="App">
        <Content />
      </div>
      <Footer/>
    </ApolloProvider>
  );
}

export default App;
