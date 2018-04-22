import React, {Component} from 'react';

class Profile extends Component {
  componentDidMount(){
    this.props.fetchProfile()
  }
  render() {
    const { error, isLoading, name } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }
    
    if (isLoading) {
      return <div>Loading...</div>;
    }

    return(
      <div>
        <div>Добро пожаловать, {name}!</div>
      </div>
    )
  }
};

export default Profile;