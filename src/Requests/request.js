import api from "./axios";

const LOGIN_URL = "/login";
const CREATE_POST_URL = "/admin/post";
const GET_NEWS_URL = "/admin/post/getAll";

export const login = async (username, password) => {
    let res;
    const fetchData = await api.post(LOGIN_URL, {
        username,
        password
    });
    res = await fetchData?.data;
    console.log(res);
    return res
};

export const newsPost = async (file, postBody) => {
    const response = await api.post(CREATE_POST_URL, {
        authenticated: true,

        file,
        createPostDto: postBody,
    });
    console.log("backend response", response);
    return response
};
export const getNews = async () => {
    const response = await api.get(GET_NEWS_URL);
    return response
};

// const GET_PROJECTS_URL = '/admin/project/getAll';
//
// export const projectsPost = async (file, postBody) => {
//     const response = await api.post(GET_PROJECTS_URL, {
//
//     })
// };