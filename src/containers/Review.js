import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';

import ReviewForm from '../components/ReviewForm';
import ErrorBoundary from '../components/ErrorBoundary';
import Typography from '@material-ui/core/Typography';

// header
import AppHeader from '../components/AppHeader';

class Review extends Component {
	constructor(props) {
		super(props);
		this.state = {
			reviewPoint: ''
		};
		this.updateState = this.updateState.bind(this);
	}

	updateState(state) {
		this.setState(state);
	}

	render() {
		const { location } = this.props;
		if (location.state === void 0) {
			let bookId = this.props.match.params.id;
			return <Redirect to={'/bookinfo/:' + bookId} />;
		} else {
			return (
				<div>
					<AppHeader />
					<h2>{location.state.title}</h2>
					<Typography variant="h6">
					Вы можете оставить отзыв на этой странице
					</Typography>
					<Typography variant="h6">
					требуются 4 пункта из вышеперечисленных
					</Typography>
					<ErrorBoundary>
						<ReviewForm
							bookTitle={location.state.title}
							updateState={this.updateState}
							bookID={location.state.bookID}
							ISBN10={location.state.ISBN10}
							thumbnailURL={location.state.thumbnailURL}
							reviewPoint1Title="Удобочитаемость текста"
							reviewPoint2Title="Множество диаграмм и примеров"
							reviewPoint3Title="Точность содержания"
							overAllPointsTitle="Общее удовлетворение"
							motivationFreeTextTitle="Купленная мотивация (необязательно）"
							motivationSuitableLevelTitle="Подходило ли это для мотивации (необязательно)"
							recomendReaderLevelTitle="Уровень чтения, который вы хотите прочитать (необязательно)"
							freeWritingTitle="Бесплатное описание (необязательно)"
						/>
					</ErrorBoundary>
				</div>
			);
		}
	}
}

export default withRouter(Review);
