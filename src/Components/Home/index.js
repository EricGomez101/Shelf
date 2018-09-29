import React, {Component} from 'react';
import classes from './styles.css';


class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      signinModal: false,
      signin: {
        email: '',
        password: ''
      },
      signup: {
        email: '',
        password: '',
        password2: ''
      }
    };
  }
  handleInput = e => {
    let {signin} = this.state;
    signin[e.target.name] = e.target.value;
    this.setState({signin});
  }
  renderModal = () => {
    this.setState({signinModal: !this.state.signinModal});
  }
  render(){
    let modal = null;

    if (this.state.signinModal) {
      modal = (
        <div className={classes.Container__ModalContainer} onClick={() => this.setState({signinModal: !this.state.signinModal})}>
          <h2 className={classes.Container__ModalHeader} onClick={e => e.stopPropagation()}>Sign in</h2>
          <div className={classes.Container__Modal} onClick={e => e.stopPropagation()}>
            <input
              name='email'
              placeholder='Email'
              className={classes.Container__ModalInput}
              value={this.state.signin.email}
              onChange={(e) => {this.handleInput(e)}}
            />
            <input
              name='password'
              placeholder='Password'
              className={classes.Container__ModalInput}
              value={this.state.signin.password}
              onChange={(e) => {this.handleInput(e)}}
            />
            <button onSubmit={() => {console.log(this.state.signin)}} className={classes.Container__ModalButton}>Submit</button>
          </div>
        </div>
      )
    }

    return (
      <React.Fragment>
        {modal}
        <div className={classes.Container}>
          <header className={classes.Container__Header}>
            <h1 className={classes.Container__HeaderText}>Shelf</h1>
          </header>
          <p className={classes.Container__Text}>
            shelf is a mock website that displays functionality in maintaining inventory, selling inventory and displaying the changes in real time.
          </p>
          <div className={classes.Container__ButtonContainer}>
            <button className={classes.Container__Button} onClick={() => this.setState({signinModal: !this.state.signinModal})}>Get Started</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
