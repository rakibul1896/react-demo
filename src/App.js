import React, { useState, useEffect } from 'react';
import './App.css';
import Description from './Description';
import Routing from './Routing';
import Footer from './Footer';
import MaterialUINav from './MaterialUINav';
import Loading from './Loading';


function App() {
  let [loading, setLoading] = useState(false);
  // let [loading1, setLoading1] = useState(false);
  // let [loading2, setLoading2] = useState(false);
  // let [loading3, setLoading3] = useState(false);

  useEffect(() => {
    setLoading(true);
    // setLoading1(true);
    

    // setTimeout(() => {
    //   setLoading1(false);
    //   setLoading2(true);
    // }, 1000);
    // setTimeout(() => {
    //   setLoading2(false);
    //   setLoading3(true);
    // }, 2000);
    // setTimeout(() => {
      
    //   setLoading3(false);
    // }, 3000);

    setTimeout(() => {
      setLoading(false);
    }, 2000);

  }, []);

  return (
    <div className="App">
      {loading ? 

      <Loading/>
      // (
      //   loading1 ? (
      //     <div style={{ background: 'red', height: '100vh' }}></div>
      //   ) : (
      //     <div></div>
      //   )
      // )
      : (
        <div>
          
          <Description />
          <Routing />
          <Footer />
          <MaterialUINav />
        </div>
      )}
    </div>
  );
}

export default App;
