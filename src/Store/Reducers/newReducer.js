import {GET_NEWS} from "../types"
import {fourteen} from "../../Assets/images/gallery"

const initialState = {
    news: [{
        title: "20 НУЖДАЮЩИМСЯ СЕМЬЯМ, КОТОРЫЕ СОСТОЯ НА УЧЕТЕ НАШЕГО ФОНДА, БЫЛА ОКАЗАНА ПОМОЩЬ В ВИДЕ ПРОДУКТОВЫХ",
        text: "Со стороны наших спонсоров 20 нуждающимся семьям, которые состоя на учете нашего фонда, была оказана помощь в виде продуктовых пакетов. Выражаем особую благодарность нашим спонсорам за доброту, отзывчивость и неравнодушие!",
        date: "12/02/2022",
        image: fourteen,
        id: 1
    }]
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NEWS: {
            return state.news;
        }
        default:
            return state
    }
};