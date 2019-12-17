import React, { Component } from 'react'

export default class RecipeForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
    }

    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({ name: name }));
    };

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.name) {
            this.setState(() => ({ error: 'Please provide a recipe name.' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                name: this.state.name
            });
        }
    };


    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form>
                    <input
                        type="text"
                        placeholder="Recipe name"
                        autoFocus
                        value={this.state.name}
                        onChange={this.onNameChange}
                    />
                    <button>Add Recipe</button>
                </form>
            </div>
        )
    }
}
