import './App.css';
import Landing from './components/landing/Landing';

function App() {
  return (
    <div className="App">
      <Landing/>
      <div className='categories'>
        <div className="category all">
          <p>all in one</p>
        </div>
        <div className="category indian">
          <p>indian</p>
        </div>
        <div className="category vegetarian">
          <p>vegetarian</p>
        </div>
        <div className="category healthy">
          <p>healthy</p>
        </div>
      </div>
    </div>
  );
}

export default App;
