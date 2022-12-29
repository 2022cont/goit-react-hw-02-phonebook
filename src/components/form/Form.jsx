import { Component } from 'react';
import { nanoid } from 'nanoid';

class Form extends Component {
    state = {
        name: '',
        number: '',
    };

    handleInput = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleAddSubmit = event => {
        event.preventDefault();

        this.props.onSubmit({ id: nanoid(4), name: this.state.name, number: this.state.number });
        this.reset();
    };

    reset = () => {
        this.setState({ name: '', number: '' });
    };

    render() {
        return (
            <form onSubmit={this.handleAddSubmit}>
                <label>
                    <input
                        value={this.state.name}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required

                        onChange={this.handleInput}
                    />
                </label>
                <label>
                    <input
                        value={this.state.number}
                        type="text"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required

                        onChange={this.handleInput}
                    />
                </label>

                <button type='submit'>ADD contact</button>
            </form>)
    }
};

export default Form;