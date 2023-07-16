
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from
} from '@apollo/client'

import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route
} from 'react-router-dom'
import {onError} from '@apollo/client/link/error'
import GetAllProfile from './Components/GetAllProfile'
import CreateProfile from './Components/CreateProfile'
import DeleteProfile from './Components/DeleteProfile'
import EditProfile from './Components/EditProfile'
import GetProfile from './Components/GetProfile'
import Home from './Components/Home'

const errorLink=onError(({graphqlErrors,networkError})=>{
    if(graphqlErrors){
      graphqlErrors.map(({message,location,path})=>{
        alert(`Graphql error ${message}`)
      })
    }
})
const link=from([
  errorLink,
  new HttpLink({uri:'http://localhost:4000/'})
])
const client =new ApolloClient({
  cache: new InMemoryCache(),
  link:link
})
function App() {
  return <ApolloProvider client={client}>
    <Router>
         <div>
            <nav>
               <ul>
               <li>
                     <Link to="/">Home</Link>
                  </li>
                  <li>
                     <Link to="/all">GetAllProfile</Link>
                  </li>
                  <li>
                     <Link to="/one">GetProfile</Link>
                  </li>
                  <li>
                     <Link to="/add">CreateProfile</Link>
                  </li>
                  <li>
                     <Link to="/edit">EditProfile</Link>
                  </li>
                  <li>
                     <Link to="/del">DeleteProfile</Link>
                  </li>
               </ul>
            </nav>

            <Routes>
               <Route path="/" element={<Home/>}/>
               <Route path="/all" element={<GetAllProfile/>}/>
               <Route path="/one" element={<GetProfile/>}/>
               <Route path="/add" element={<CreateProfile/>}/>
               <Route path="/edit" element={<EditProfile/>}/>
               <Route path="/del" element={<DeleteProfile/>}/>
            </Routes>
         </div>
      </Router>
   
  </ApolloProvider>

}

export default App;
