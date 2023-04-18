import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

// component
import SearchForm from '../components/SearchForm';
import SearchedBookCards from '../components/SearchedBookCards';
// redux
import { searchBookRequested } from '../actions/SearchActions';

// header
import AppHeader from '../components/AppHeader';

class Search extends Component {
	submit(values) {
		this.props.onSubmit(values.keyword);
	}

	render() {
		let shownBookCount = 0;
		let shownBookCountText = "";
		let resultLabel = "";
		
		if (this.props.searchedBooksInfo === void 0) {
			shownBookCountText = "";
		} else {
			shownBookCount = this.props.searchedBooksInfo.length;
			if (shownBookCount > 0) {
				shownBookCountText = shownBookCount + "Отображение книги книг";
				resultLabel = "Результаты поиска"
			} else {
				shownBookCountText = "Нет книги, которую можно было бы найти по текущему ключевому слову";
			}
		}
		
		return (
			<div>
				<AppHeader />
				<h2>Поиск по словам</h2>
				<h4>Введите название книги, название языка, техническое название и т.д. для поиска.</h4>
				<h4>Например, легко читаемый код, JavaScript, AWS и т.д.</h4>

				<span>
					<SearchForm onSubmit={this.submit.bind(this)} />
				</span>
				<h2>{shownBookCountText}</h2>
				<h2>{resultLabel}</h2>
				<SearchedBookCards itemData={this.props.searchedBooksInfo} appInfoForBooks={this.props.appInfoForBooks}/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	searchedBooksInfo: state.booksInfo.searchedBooksInfo,
	appInfoForBooks  : state.booksInfo.appInfoForBooks
});


const mapDispatchToProps = (dispatch) => {
	return {
		onSubmit(keyword) {
			dispatch(searchBookRequested(keyword));
		}
	}
};



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
