import React, { Component } from 'react';

class Useritem extends Component {
  state = {
    id: 'id',
    login: 'Octocat',
    avatar_url: 'https://octodex.github.com/images/Fintechtocat.png',
    html_url: 'https://api.github.com/users/octocat'
  };

  render() {
    const { login, avatar_url, html_url } = this.state;
    return (
      <div className='card text-center'>
        <img
          src={avatar_url}
          alt=''
          className='round-img'
          style={{ width: '60px' }}
        ></img>
        <h3>{login}</h3>
        <div>
          <a href={html_url} className='btn btn-dark btn-sm my-1'>
            More
          </a>
        </div>
      </div>
    );
  }
}

export default Useritem;
