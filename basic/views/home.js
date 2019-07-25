class Home extends React.Component {
    
  constructor(){
    super();
  }
  
  render() {

     return (
      <div>
        <Header/>
        <Menu/>
        <div className="row">
          <div className="maincolumn">
            <div className="card">
              <h2>TITLE HEADING</h2>
              <h5>Title description, Dec 7, 2017</h5>
              <div className="fakeimg">Image</div>
              <p>Some text..</p>
              <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>
            <div className="card">
              <h2>className HEADING</h2>
              <h5>Title description, Sep 2, 2017</h5>
              <div className="fakeimg">Image</div>
              <p>Some text..</p>
              <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>
          </div>
        </div>
        <Footer/>
      </div>);

  }

}

ReactDOM.render(<Home/>, document.getElementById("root"));