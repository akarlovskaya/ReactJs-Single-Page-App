import React from 'react';
import './subscribe.css';
import classnames from 'classnames';

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
    } else {
        this.setState({
            alerts: {
                invalid: "Please enter email"
            }
        });
    }

    e.target.reset();

    setTimeout(() => {
        const alertEl = document.querySelector('.subscribe-alert');
        if (alertEl) {
            alertEl.remove();
        }
    }, 2000);
  }

  removeAlert() {
      const alertEl = document.querySelector('.subscribe-alert');

      if (alertEl) {
          alertEl.remove();
      }
  }

  render() {
    const {alerts} = this.state;
    const invalidMsg = alerts.invalid;
    const validMsg = alerts.valid;

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
            <AlertMsg invalid={invalidMsg} valid={validMsg} />
        </div>
    );
  }
}
export default Subscribe;


const AlertMsg = (props) => {
    const { invalid, valid } = props;
    let message = '';
    message = (valid != undefined ? valid : invalid);

    const alertCss = classnames({
        'subscribe-alert': true,
        'text-success': valid,
        'text-danger': invalid
    });

    return (
        <p className={alertCss}>{message}</p>
    )
}
