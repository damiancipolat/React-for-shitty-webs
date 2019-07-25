class Header extends React.Component {
    
  constructor(){
    super();
  }
  
  render() {

     return (<div className="header">
     						<img className="logo" src="./resources/react.png"/>
              	<h1>My Website</h1>
              	<p>Resize the browser window to see the effect.</p>
             </div>);

  }

}