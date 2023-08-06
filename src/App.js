import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCog, faComment, faBell } from '@fortawesome/free-solid-svg-icons';
import vijay from '../src/vijay imag.jpeg'
import GraphComponent from './Graph/GraphComponent';
import TableComponent from './Table/TableComponent';
import './App.css';

function App() {
  return (
    <div className='whole-container'>
      <div className='left-nav-bar-container'>
        <div className='left-nav-bar'>
         <h3>Artemis</h3> 
          </div>
        <span className='Main'>MAIN</span>
        <div className='Main-contianer'>
          <span>Dashboard</span>
          <span>Discover</span>
          <span>User</span>
          <span>Documents</span>
          <span>Applications</span>
          <span>Pages</span>
        </div>
        <span className='SECONDARY'>SECONDARY</span>
        <div className='secondary-contianer'>
          <span>Support Center</span>
          <span>Inbox</span>
          <span>File Manager</span>
          <span>Data List</span>
        </div>
        <div className='setting-logout'>
          <span>Settings</span>
          <span>Log Out</span>
        </div>
      </div>


      <div className='right-container'>
        <div className='top-nav-bar'>
          <div className='search-bar'>
            <FontAwesomeIcon icon={faSearch} className='search-icon' />
            <input placeholder='Search...' />
          </div>

          <div className='top-nav-icons'>
            <FontAwesomeIcon icon={faCog} className='icon' />
            <FontAwesomeIcon icon={faComment} className='icon' />
            <FontAwesomeIcon icon={faBell} className='icon' />
          </div>
          <div className='details-container'>
            <div className='details'>
            <span className='vijay'>Vijay Bhaskar Reddy</span>
            <span className='developer'>Developer</span>
            </div>
            <div>
            <img src={vijay} />
            </div>
          </div>
        </div>

       <GraphComponent/>
        <TableComponent/>
      </div>
    
    </div>
  );
}

export default App;
