import React from 'react';
import './subscribe.css';

class Subscribe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        emails: [],
        alerts: {}
    };

    this.emailInput = React.createRef();
  }


  handleSubmit(e){
    e.preventDefault();
    const {emails} = this.state;
    const newEmail = this.emailInput.current.value;

    if ( newEmail !== '' ) {
      this.setState({
          emails: [...this.state.emails, newEmail],
          alerts: {
              valid: "Success! You\'ve done it"
          }
      });
      console.log(this.state);

    } else {
        this.setState({
            alerts: {
                invalid: "Please enter email"
            }
        });
        console.log(this.state);
    }

    e.target.reset();
  }

  render() {
    const {alerts} = this.state;

    return (
        <div className="subscribe">
            <p>Subscribe to get our latest news</p>
            <form onSubmit={this.handleSubmit.bind(this)} className="input-group mb-3">
                <input name="emailInput"
                       ref={this.emailInput}
                       type="email"
                       placeholder="Enter email"
                       className="form-control form-control-sm"
                    />
                <div className="input-group-append">
                    <button type="submit" className="btn btn-primary">Send</button>
                </div>
            </form>
            {
                alerts.valid ? <p className="text-success">{alerts.valid}</p> : <p className="text-danger">{alerts.invalid}</p>
            }
        </div>
    );
  }
}


export default Subscribe;
