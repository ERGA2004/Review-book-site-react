import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';


//List
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const styles = theme => ({
	root: {
		width: '100%',
		maxWidth: 480,
		backgroundColor: theme.palette.background.paper,
	},
	nested: {
		paddingLeft: theme.spacing.unit * 4,
	},
});


class Category extends Component {
	constructor(props) {
		super(props);
		this.state = {
			expanded: false,
		}
		this.handleExpandClick = this.handleExpandClick.bind(this);
	};

	handleExpandClick = () => {
		this.setState({ expanded: !this.state.expanded });
	};

	render() {
		const { classes } = this.props;
		return (
			<div>
				<h2>это страница категории</h2>

				<List
					component="nav"
					subheader={<ListSubheader component="div">Категория книг</ListSubheader>}
					className={classes.root}
					>
					<ListItem button>
						<ListItemText inset primary="Процесс разработки" />
					</ListItem>

					<ListItem button onClick={this.handleExpandClick}>
						<ListItemText inset primary="Облако" />
						{this.state.expanded ? <ExpandLess /> : <ExpandMore />}
					</ListItem>
					<Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<ListItem button className={classes.nested}>
								<ListItemText inset primary="AWS(TODO: click->Список, количество книг" />
							</ListItem>
						</List>

						<List component="div" disablePadding>
							<ListItem button className={classes.nested}>
								<ListItemText inset primary="GCP" />
							</ListItem>
						</List>
					</Collapse>
				</List>

			</div>
		);
	}
}

Category.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Category));
