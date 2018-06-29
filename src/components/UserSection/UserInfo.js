import React,{ Component } from 'react';
import '../UserSection/UserInfo.css';
import axios from 'axios';


class UserInfo extends Component {
    constructor(props){
        super(props);

        this.state= {
            userdata:'',
            userreps: ''
        };
    }
    
    getData(person){
        let url = `https://api.github.com/users/${person}`;
        axios.get(url)
        .then((data)=>{
            this.setState({userdata : data});
            // this.state.userdata = data
        })
    }
    // getRepo(person){
    //     let url = ` https://api.github.com/users/${person}/repos`;
    //     axios.get(url)
    //     .then((data)=>{
    //         this.setState({userreps : data});
    //     })
    // }

    componentDidMount(){
        this.getData('supreetsingh247');
    }

    render(){
        if(this.state.userdata == '' || this.state.userdata == null){
            return(<h3>loading......</h3>)
        } else{
            return(
                <div className='userinfo'>
                    <img alt='profile_img' src={this.state.userdata.data.avatar_url} />
                    <div className='card-name-container'>
                        <div className="full-name">
                            <h1 className='card-names'>
                                <span className='full-name'>{this.state.userdata.data.name}</span>
                            </h1>
                        </div>   
                    </div>
                    <div className='user-profile-bio'>
                        <div className='user-bio-contents'>
                            <div>
                                {this.state.userdata.data.bio}
                            </div>
                        </div>
                        <button type='button' className='btn'>Edit bio</button>
                    </div>
                    <ul className='card-details'>
                        <li className='Company'>
                        <svg classname='icon company-icon' viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 12.999c0 .439-.45 1-1 1H7.995c-.539 0-.994-.447-.995-.999H1c-.54 0-1-.561-1-1 0-2.634 3-4 3-4s.229-.409 0-1c-.841-.621-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.442.58 2.5 3c.058 2.41-.159 2.379-1 3-.229.59 0 1 0 1s1.549.711 2.42 2.088C9.196 9.369 10 8.999 10 8.999s.229-.409 0-1c-.841-.62-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.437.581 2.495 3c.059 2.41-.158 2.38-1 3-.229.59 0 1 0 1s3.005 1.366 3.005 4z"></path></svg>

                            <span>{this.state.userdata.data.company}</span>
                        </li>
                        <li className='location'>
                        <svg classname='icon company-icon' viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 12.999c0 .439-.45 1-1 1H7.995c-.539 0-.994-.447-.995-.999H1c-.54 0-1-.561-1-1 0-2.634 3-4 3-4s.229-.409 0-1c-.841-.621-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.442.58 2.5 3c.058 2.41-.159 2.379-1 3-.229.59 0 1 0 1s1.549.711 2.42 2.088C9.196 9.369 10 8.999 10 8.999s.229-.409 0-1c-.841-.62-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.437.581 2.495 3c.059 2.41-.158 2.38-1 3-.229.59 0 1 0 1s3.005 1.366 3.005 4z"></path></svg>

                            <span>{this.state.userdata.data.location}</span>
                        </li>
                        <li className='email'>
                        <svg classname='icon company-icon' viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 12.999c0 .439-.45 1-1 1H7.995c-.539 0-.994-.447-.995-.999H1c-.54 0-1-.561-1-1 0-2.634 3-4 3-4s.229-.409 0-1c-.841-.621-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.442.58 2.5 3c.058 2.41-.159 2.379-1 3-.229.59 0 1 0 1s1.549.711 2.42 2.088C9.196 9.369 10 8.999 10 8.999s.229-.409 0-1c-.841-.62-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.437.581 2.495 3c.059 2.41-.158 2.38-1 3-.229.59 0 1 0 1s3.005 1.366 3.005 4z"></path></svg>

                            <a className="u-email" href="mailto:supreetsingh.247@gmail.com">supreetsingh.247@gmail.com</a>
                        </li>
                    
                    </ul> 
                </div>
            );
        }
    }
}

export default UserInfo;