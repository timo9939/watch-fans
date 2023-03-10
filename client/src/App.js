import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';


import Signup from './component/Signup';
import Content from './component/Content/Content';
import Header from "./component/Header";
import Navigation from "./component/Navigation";
import Footer from "./component/Footer";


const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  // link: authLink.concat(httpLink), TODO: reinstate
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Header/>
      <Navigation/>
      <div className="App">
        <Signup />
        <Content />
      </div>
      <Footer/>
    </ApolloProvider>
  );
}

export default App;
