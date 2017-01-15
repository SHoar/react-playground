class Profile extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			height: 100

		}
	}
	render(){
	let {name, age, bio, pic } = this.props;
  let { height } = this.state;
		return (
			<div className="profile-box">
				<h2>{name}</h2>
				<h4>Age: {age}</h4>
				<h4>Bio: {bio}</h4>
				<img src={pic} height={height}/>
				<br />
				<button onClick={this.zoomPicIn.bind(this)}>+</button>
				<button onClick={this.zoomPicOut.bind(this)}>-</button>
			</div>
		);
	}
	zoomPicIn(){
		this.setState({height: this.state.height + 20});
	}
	zoomPicOut(){
		this.setState({height: this.state.height - 20});
	}
}



ReactDOM.render(<Profile name="Sean Hoar" age={35} bio="I like puppies" pic="https://goo.gl/8HTRqe"/>, document.getElementById('app'));
