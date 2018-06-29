import React, {Component} from 'react';
import About from './About'
import '../Repository/Repository.css';

import axios from 'axios';

export default class Repository extends Component {
    constructor(props){
        super(props);

        this.state= {
            userreps: '',
            dispData: ''
        };

        this.changeDisp = this.changeDisp.bind(this);
    }
    
    changeDisp(event){

        switch(event.target.value){
            case 'About':
                event.preventDefault();
                break;
            case 'Repo':
                this.setState({dispData : event.target.value});
                break;
            case 'Stars':
                event.preventDefault();
                break;
            default:
                this.setState({dispData : ''});
        }
    }
    
    getRepo(person){
        let url = `https://api.github.com/users/${person}/repos`;
        axios.get(url)
        .then((data)=>{
            this.setState({userreps : data});
        })
    }

    componentDidMount(){
        this.getRepo('supreetsingh247');
    }

    displayedData(){
        switch(this.state.dispData){
            case 'About':
                // console.log(this)
                return( <div>About</div> )
                break;
            case 'Repo':
                let rep = []
                for(let i=0; i<this.state.userreps.data.length; i++){
                    console.log(this.state.userreps.data.length)
                    rep.push(<About key={this.state.userreps.data[i]} about={this.state.userreps.data[i]} />)
                }
                return rep;
                break;
            case 'Stars':
                return( <div>Stars</div> )
                break;
            default:
                return( <React.Fragment></React.Fragment> )
        }
    }

    render(){
        return(
            <div>
            <div className="right-buttons">
                <button className='about btn' value='About' onClick={this.changeDisp}>Overview</button>
                <button className='repo btn' value='Repo' onClick={this.changeDisp}>Repository</button>
                <button className='stars btn' value='Stars' onClick={this.changeDisp}>Stars</button>

                

            </div>
            <div className="search-repo">
                <form action="">
                    <div className="form-input">
                        <input type="text" placeholder='Search repositories....'/>
                    </div>
                    <div className="select-buttons">
                        <div className="button1">
                            <button className='type' type='button' value='Type'>Type</button>
                        </div>
                        <div className="button2">
                            <button className='language' type='button' value='Language'>language</button>
                        </div>
                    </div>
                </form>
            </div>
            {this.displayedData()}
            </div>
        );
    }
}