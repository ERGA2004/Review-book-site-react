import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import ErrorBoundary from '../components/ErrorBoundary';
import { withStyles } from '@material-ui/core/styles';
import StarRate from '@material-ui/icons/StarRate';
import BorderColor from '@material-ui/icons/BorderColor';
import Favorite from '@material-ui/icons/Favorite';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const styles = {
	card: {
		maxWidth: 500,
		margin: "auto",
		marginTop: 20,
		marginBottom: 20,
		display: 'flex',
	},
	content: {
		flex: '1 0 auto',
	},
	media: {
		marginTop: 20,
		marginBottom: 20,
		marginLeft: 20,
	},
	details: {
		display: 'flex',
		flexDirection: 'column',
	},
	star: {
		color: "#ffeb3b",
	},
	root: {
		width: '100%',
		maxWidth: 360,
	},
	title: {
		marginTop: 20,
		marginRight: 20,
	},
};


function BookCard(props) {
	
	let title = "";
	if ("volumeInfo" in props.item && props.item.volumeInfo.title !== void 0) {
		title = props.item.volumeInfo.title;
	}

	let thumbnailURL = "https://jmva.or.jp/wp-content/uploads/2018/07/noimage.png";
	if ("volumeInfo" in props.item && props.item.volumeInfo.imageLinks !== void 0) {
		thumbnailURL = props.item.volumeInfo.imageLinks.thumbnail;
	}

	let bookID = "";
	if ("id" in props.item) {
		bookID = props.item.id;
	} else {

		return (
			<h3>no data</h3>
		);
	}


	var bookReviewCount = 0;
	var bookLikeCount = 0;
	var overallPoints = 0;
	if (props.appInfoForBooks) {
		for (let data of props.appInfoForBooks) {
			if (!data.bookID) continue;
			if (!data.bookInfo) continue;
			if (bookID !== data.bookID) continue;
			if (data.bookInfo.bookreviewCount !== void 0) {
				bookReviewCount = data.bookInfo.bookreviewCount;
			}
			if (data.bookInfo.booklikeCount !== void 0) {
				bookLikeCount = data.bookInfo.booklikeCount;
			}
			if (data.bookInfo.overallpoints !== void 0) {
				overallPoints = data.bookInfo.overallpoints;
			}
		}
	}

	let ISBN10 = "";
	if ("industryIdentifiers" in props.item.volumeInfo) {
		if (props.item.volumeInfo.industryIdentifiers) {
			let industryIdentifiers = props.item.volumeInfo.industryIdentifiers;

			industryIdentifiers.forEach(industryIdentifier => {
				if (industryIdentifier.type === "ISBN_10") {
					ISBN10 = industryIdentifier.identifier;
				}
			});
		}
	}

	let description = "Никакой информации";
	if (props.item.volumeInfo.description !== void 0) {
		description = props.item.volumeInfo.description;
	}

	const alt = "image" + props.index;
	// cf. https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/Link.md
	return (
		<Link to={{
			pathname: "/bookinfo/" + bookID,
			state: {
				bookID: bookID,
				title: title,
				thumbnailURL: thumbnailURL,
				description: description,
				ISBN10: ISBN10,
			}
		}}>
			<Card key={props.index} className={props.classes.card}>
				<CardContent className={props.classes.content}>
					<img src={thumbnailURL} alt={alt} className={props.classes.media} />
				</CardContent>
				<div className={props.classes.details}>
					<Typography variant="subtitle1" color="textPrimary" className={props.classes.title}>
						{title}
					</Typography>
					<List className={props.classes.root}>
						<ListItem>
							<StarRate className={props.classes.star} />
							<ListItemText primary={overallPoints} secondary="Общая оценка" />
						</ListItem>
						<li>
							<Divider variant="inset" />
						</li>
						<ListItem>
							<BorderColor color="primary" />
							<ListItemText primary={bookReviewCount} secondary="Количество отзывов" />
						</ListItem>
						<Divider variant="inset" component="li" />
						<ListItem>
							<Favorite color="secondary" />
							<ListItemText primary={bookLikeCount} secondary="Номер, который вам небезразличен" />
						</ListItem>
					</List>
				</div>
			</Card>
		</Link>
	)
}

class SearchedBookCards extends React.Component {
	render() {
		const { classes, itemData, appInfoForBooks } = this.props;
		return (
			<div>
				{
					itemData && itemData.map((item, index) =>
						<ErrorBoundary key={index}>
							<BookCard item={item} index={index} appInfoForBooks={appInfoForBooks} classes={classes}/>
						</ErrorBoundary>
					)
				}
			</div>
		);
	}
}

export default withStyles(styles)(SearchedBookCards);
