import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

// header
import AppHeader from '../components/AppHeader';

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

class ReviewSuccessFeedback extends Component {

    handleToMyPage = () => {
        this.props.history.push({
            pathname: '/mypage',
            state: { userID: "1234" }
        })
    }

    handleToHome = () => {
        this.props.history.push({
            pathname: '/'
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <AppHeader />

                <h3>Мне удалось опубликовать отзыв!</h3>

                <h4>Вы можете перейти на мою страницу с помощью следующей кнопки и проверить историю.</h4>

                <Button variant="contained" color="secondary" className={classes.button} onClick={this.handleToMyPage}>
                Моя страница
				</Button>

                <Button variant="contained" color="secondary" className={classes.button} onClick={this.handleToHome}>
                Домой
				</Button>
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(ReviewSuccessFeedback));
