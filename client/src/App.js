import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import Signup from './component/Signup'
import Main from './component/Navbar';
import Navbar from './component/Navbar';

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
      <Navbar/>
      <div className="App">
        <Signup />
      </div>
    </ApolloProvider>
  );
}

export default App;
