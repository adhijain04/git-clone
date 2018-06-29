import React, {Component} from 'react';
import axios from 'axios';
import '../Repository/About.css';

export default class About extends Component{
    constructor(props){
        super(props);

        this.state= {langs:''}
    }

    getLang(url){
        axios.get(url)
        .then(res=>{
            let langArr = [];
            for(let key in res.data){
                langArr.push(key)
                langArr.push(' ')
            }
            this.setState({langs: langArr});
        })
    }
    componentDidMount(){
        this.getLang(this.props.about.languages_url)
    }

    render(){
        return(
            <div className='repo-div'>
                <h3 className='repo-name'><a href="">{this.props.about.name}</a></h3>
                <p className='repo-desc'>{this.props.about.description}</p>
                <div>
                    <div className='repo-created'><span>Created at {this.props.about.created_at}</span></div>
                    <div className='repo-updated'><span>Updated at  {this.props.about.updated_at}</span></div>
                </div>
                <p className='repo-languages'>{this.state.langs}</p>
            </div>
        );
    }
}