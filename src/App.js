import './App.css';
import Row from './Row'
import Banner from './Banner'
import requests from './requests';

//use Capital first Letter if component

function App() {
  return (   
    <div className="App">
      {/*Navbar*/}
     <Banner/>
     <Row title="NETFLIX ORIGINALS" isLargeRow fetchUrl={requests.fetchNetflixOriginals}></Row>
     <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row><Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}></Row>
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
     <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}></Row>
     <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}></Row>
    </div>
  );
}

export default App;