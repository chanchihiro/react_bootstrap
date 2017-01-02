import React from 'react'
import ReactDOM from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import ReactBootstrap from 'react-bootstrap'
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';


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

		//itemを配置
		return(
			<Grid>
				<Row>
					{items}
				</Row>
			</Grid>
		);
	}
}


ReactDOM.render(
	<EffectsLayout />,
	document.getElementById("containerDOM")
);