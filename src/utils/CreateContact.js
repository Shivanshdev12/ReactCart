import React,{Component} from 'react';
import ImageInput from './ImageInput';
import {Link} from 'react-router-dom';
import searlizeForm from 'form-serialize';

class CreateContact extends Component {
    handleSubmit=(e)=>{
        e.preventDefault();
        const values = searlizeForm(e.target,{hash:true});
        if(this.props.onCreateContact){
            this.props.onCreateContact(values)
        }
        console.log(values);
    }
    render() {
        return (
            <div>
                <Link className='close-create-contact' to='/'>Close</Link>
                <form onSubmit={this.handleSubmit} className='create-contact-form'>
                    <ImageInput 
                    name="avatarURL"
                    className="create-contact-avatar-input"
                    maxHeight={64}
                    />
                    <div className='create-contact-details'>
                        <input type="text" name="name"  placeholder="Name"/>
                        <input type="text" name="email" placeholder="Email"/>
                        <button>Add Contact</button>
                    </div>   
                </form>
            </div>
        );
    }
}

export default CreateContact;