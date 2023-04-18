import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Button from '@material-ui/core/Button';

const SearchForm = props => {
	const { handleSubmit, pristine, reset, submitting } = props;
	return (
		<form onSubmit={handleSubmit}>
			<Field
				name="keyword"
				component="input"
				label="search-keyword"
				/>

			<Button
				type="submit"
				disabled={submitting || pristine}>
				Поиск
			</Button>
			<Button
				type="button"
				onClick={reset}
				disabled={submitting || pristine}>
				Очистить
			</Button>
		</form>
	);
};

export default reduxForm({
	form: 'search-form',
})(SearchForm);
