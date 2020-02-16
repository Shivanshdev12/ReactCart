import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import '../App.css';

class Search extends Component {
    state = {
        search: '',
        books: []
    };
    onChange = (e) => {
        this.setState({
            search: e.target.value
        });
        console.log(this.state.search);
    }
    onSearch = async (e) => {
        e.preventDefault();
        var apiKey = `AIzaSyDExHf9jkg3NcjoFEs1NVGDLT8S4qXSwCA`;
        // var apiId = `dbf1b952`;
        const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.search}&key=${apiKey}&maxResults=40`;
        await fetch(url)
            .then(res => res.json())
            .then(data => this.setState({
                books: data.items
            }));
        console.log(this.state.books)
    }

    render() {
        return (
            <div>
                <Form>
                    <FormControl align="center" onChange={this.onChange} value={this.state.search} type="text" placeholder="State must be a two character state abbreviation" />
                    <Button onClick={this.onSearch}>Search</Button>
                </Form>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                        
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Search;




