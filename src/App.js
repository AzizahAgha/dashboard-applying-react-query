import {BrowserRouter,Routes,Route,Link,Router,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { QueryClientProvider, QueryClient } from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import { ListPost} from './components/query';
import List from './components/list';
import { HomePage } from './components/homepage';
import { EditPost } from './components/edit';
import ApexChart from './components/apexchart';
import Dashboard from './components/dashboard';

import './App.css';
import { Page } from './components/paginated';

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
    
     <BrowserRouter>
      <nav>
        <ul className='ul'>
            {/* <li className='li'>
              <Link to='/' className=" btn btn-primary btn-xs">Home</Link>
            </li> */}
            <li className='li'>
              <Link to='/list' className=" btn btn-primary btn-xs">Add Posts</Link>
            </li>
             
            <li className='li'>
              <Link to='/rq-super-heroes' className=" btn btn-primary btn-xs">Edit Post</Link>
            </li>
          
            <li className='li'>
              <Link to='/rq-paginated' className=" btn btn-primary btn-xs">List Posts</Link>
            </li>

            <li className='li'>
              <Link to='/' className=" btn btn-primary btn-xs">Charts</Link>
            </li>
          
        </ul>
      </nav>
     
      <Routes>
      {/* <Route path="/" element={<HomePage />}></Route> */}
        <Route className='btn btn-primary' path='/rq-super-heroes' element={<ListPost />}></Route>
        <Route path="/list" element={<List />}></Route>
        <Route path="/edit/:id" element={<EditPost />}></Route>
        <Route path="/rq-paginated" element={<Page />}></Route>
        <Route path="/"  element={<Dashboard />}></Route>
        
      </Routes>
     </BrowserRouter>
     
    </div>
    <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App