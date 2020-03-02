import React from 'react';

class SearchCity extends React.Component {
	state = {
		city: "",
	}

	handleChange = (e) => {
        this.setState({
            city: e.target.value,
        })
	}

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSearch(this.state.city);

        this.setState({
			city: "",
        })
    }

	render() {
		return (
			<div id="SearchCity" className="mb-5">
				<form onSubmit={this.handleSubmit}>
					<div className="input-group">
						<input
							type="text"
							className="form-control form-control-lg"
							id="city"
							placeholder="Type in the name of a city..."
							onChange={this.handleChange}
							value={this.state.city}
						/>

						<div className="input-group-append">
							<button className="btn btn-success btn-lg">Search</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
}

export default SearchCity;
