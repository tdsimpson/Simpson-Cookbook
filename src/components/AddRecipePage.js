import React from 'react';
import RecipeFrom from './RecipeForm'

class AddRecipePage extends React.Component {
    render() {
        return (
            <div>
                <h1>Add Recipe Page</h1>
                <RecipeFrom
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

export default AddRecipePage;