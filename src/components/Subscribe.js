import React from 'react';

class Subscribe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        emails: []
    };

    this.emailInput = React.createRef();
  }

  handleSubmit(e){
    e.preventDefault();
    const {emails} = this.state;
    const newEmail = this.emailInput.current.value;

    if ( newEmail !== '' ) {
      this.setState({
          emails: [...this.state.emails, newEmail]
      });

      this.showAlert('Success! You\'ve done it', 'alert text-success');
    } else {
        this.showAlert('Please enter email', 'alert text-danger');
    }

    e.target.reset();
    console.log(this.state);
  }

  showAlert(msg, className) {
    const alertEl = document.createElement('p');
    const formEl = document.querySelector('form');

    alertEl.className = className;
    alertEl.appendChild(document.createTextNode(msg));
    formEl.parentNode.insertBefore(alertEl, formEl.nextElementSibling);

    setTimeout(() => {
        this.removeAlert();
    }, 3000);
  }

  removeAlert() {
      const currentAlert = document.querySelector('.alert');
      if (currentAlert) {
          currentAlert.remove();
      }
  }

  render() {
    return (
        <div>
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
        </div>
    );
  }
}


export default Subscribe;
