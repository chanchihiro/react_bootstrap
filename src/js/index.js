import React from 'react'
import ReactDOM from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import ReactBootstrap from 'react-bootstrap'
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import NavItem from 'react-bootstrap/lib/NavItem'
import MenuItem from 'react-bootstrap/lib/MenuItem'



let infos = [
	{
		title: '1. いちばんめ',
	    filename: '01_fadein-highlight.html',
	    imgUrl: 'http://placehold.it/150x150'
	},
	{
		title: '2. ニベンメ',
	    filename: '01_fadein-highlight.html',
	    imgUrl: 'http://placehold.it/150x150'
	},
	{
		title: '3. さんばんめ',
	    filename: '01_fadein-highlight.html',
	    imgUrl: 'http://placehold.it/150x150'
	},
	{
		title: '4. よおおおん',
	    filename: '01_fadein-highlight.html',
	    imgUrl: 'http://placehold.it/150x150'
	},
	{
		title: '5. ご',
	    filename: '01_fadein-highlight.html',
	    imgUrl: 'http://placehold.it/150x150'
	},
	{
		title: '6. むむむ',
	    filename: '01_fadein-highlight.html',
	    imgUrl: 'http://placehold.it/150x150'
	},

];


//Header
class Header extends React.Component {
	render(){
		return(
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
						<a href='#'>sample</a>
					</Navbar.Brand>
				</Navbar.Header>

				<Nav pullRight>
					<NavDropdown eventkey={1} title='Settings'>
						<MenuItem eventkey={1.1}>profile</MenuItem>
						<MenuItem eventkey={1.1}>sign out</MenuItem>
					</NavDropdown>
				</Nav>
			</Navbar>
		);
	}
} 



// Item Layout
class EffectsLayout extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			infos: infos //ここに書くサンプルの情報を入れる
		};
	}

	//[View Demo] ボタンのクリックイベント
	showDemo(e){
		location.href = e.target.title;
	}

	//[View Code] ボタンのクリックイベント
	showCode(e){
		location.href = e.target.title;
	}

	render(){
		let showDemo = this.showDemo;
		let showCode = this.showCode;
		let NavbarInstance = (
			<Navbar inverse toggleNavKey={0} fixedTop={true}>
			</Navbar>
		);

		let items = this.state.infos.map((info) => {
			return(
				<Col xs={12} md={4} key={infos.filename}>
					<div className={'item'}>
						<div className={'title-header'}>
							<h3>{info.title}</h3>
							<p>{info.filename}</p>
						</div>
						<div className={'avatar'}>
							<img src={info.imgUrl} />
						</div>
						<p>
							<Button className={'btn btn-demo'} onClick={showDemo}>View Demo</Button>
							<Button className={'btn-github'} onClick={showCode}>View Code</Button>
						</p>
					</div>
				</Col>
			);
		});
		return(
			<Grid>
       			<Row>
        			{items}
        		</Row>
    		</Grid>
		);
	}
}

class All extends React.Component{
	render(){
		return(
			<div>
				<Header />
				<EffectsLayout />
			</div>
		);
	}
}



ReactDOM.render(
	<All />,
	document.getElementById("containerDOM")
);