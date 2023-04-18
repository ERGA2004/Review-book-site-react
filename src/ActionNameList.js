export const ActionNameList = {
   // Поиск книг
    searchBookRequested: "SEARCH_BOOK_REQUESTED",
    searchBookSucceeded: "SEARCH_BOOK_SUCCEEDED",
    searchBookError: "SEARCH_BOOK_ERROR",
    // Просмотр сообщений
    postReviewRequested: "POST_REVIEW_REQUESTED",
    postReviewSucceeded: "POST_REVIEW_SUCCEEDED",
    postReviewError: "POST_REVIEW_ERROR",
  // Получить отзыв
    getReviewRequested: "GET_REVIEW_REQUESTED",
    getReviewSucceeded: "GET_REVIEW_SUCCEEDED",
    getReviewError: "GET_REVIEW_EROOR",
// Сообщения, о которых стоит беспокоиться
    postBookLikeRequested: "POST_BOOKLIKE_REQUESTED",
    postBookLikeSucceeded: "POST_BOOKLIKE_SUCCEEDED",
    postBookLikeError: "POST_BOOKLIKE_ERROR",
 // Начинайте беспокоиться
    getBookLikeRequested: "GET_BOOKLIKE_REQUESTED",
    getBookLikeSucceeded: "GET_BOOKLIKE_SUCCEEDED",
    getBookLikeError: "GET_BOOKLIKE_EROOR",
   // Получите последние книги
    getLatestBooksRequested: "GET_LATEST_BOOKS_REQUESTED",
    getLatestBooksSucceeded: "GET_LATEST_BOOKS_SUCCEEDED",
    getLatestBooksError: "GET_LATEST_BOOKS_ERROR",
    // Получить конкретную книгу из BookID
    getBookInfoByBookidRequested: "GET_BOOKINFO_BY_BOOKID_REQUESTED",
    getBookInfoByBookidSucceeded: "GET_BOOKINFO_BY_BOOKID_SUCCEEDED",
    getBookInfoByBookidError: "GET_BOOKINFO_BY_BOOKID_ERROR",
// Получите количество интересующих вас отзывов из таблицы книг
    getAppInfoForBooksRequested: "GET_APP_INFO_FOR_BOOKS_REQUESTED",
    getAppInfoForBooksSucceeded: "GET_APP_INFO_FOR_BOOKS_SUCCEEDED",
    getAppInfoForBooksError: "GET_APP_INFO_FOR_BOOKS_ERROR",
// Получить историю просмотров
    getUserReviewsRequested: "GET_USER_REVIEWS_REQUESTED",
    getUserReviewsSucceeded: "GET_USER_REVIEWS_SUCCEEDED",
    getUserReviewsError: "GET_USER_REVIEWS_ERROR",
// Получите историю, которая вам небезразлична
    getUserLikesRequested: "GET_USER_LIKES_REQUESTED",
    getUserLikesSucceeded: "GET_USER_LIKES_SUCCEEDED",
    getUserLikesError: "GET_USER_LIKES_ERROR",
}
