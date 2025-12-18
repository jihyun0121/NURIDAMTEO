import axios from "axios";

const API_URL = "http://localhost:8080";

const api = axios.create({
    baseURL: API_URL,
    headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => response,
    (error) => {
        const errorMessage = error.response?.data?.message || error.response?.data?.error || "서버 요청 중 오류가 발생했습니다.";

        console.error("API 오류:", errorMessage);

        if (error.response?.status === 401) {
            localStorage.removeItem("token");
        }

        return Promise.reject(error);
    }
);

export const UserAPI = {
    createUser: (dto) => api.post(`/auth/signup`, dto),
    login: (dto) => api.post(`/auth/login`, dto),
    getUser: (userId) => api.get(`/users/${userId}`, userId),
    updateProfile: (userId, dto) => api.put(`/users/${userId}`, userId, dto),
    updateSetting: (userId, dto) => api.put(`/users/${userId}/setting`, userId, dto),
    updatePassword: (userId, dto) => api.put(`/users/${userId}/password`, userId, dto),
};

export const Interest = {
    selectInterests: (userId, categoryIds) => api.post(`/interests/${userId}`, userId, categoryIds),
    getInterest: (userId) => api.post(`/interests/${userId}`, userId),
    updateInterests: (userId, categoryIds) => api.post(`/interests/${userId}`, userId, categoryIds),
};

export const Notice = {
    createUser: (dto) => api.post(`/auth/signup`, dto),
    createUser: (dto) => api.post(`/auth/signup`, dto),
    createUser: (dto) => api.post(`/auth/signup`, dto),
    createUser: (dto) => api.post(`/auth/signup`, dto),
};

export const Suggestion = {
    createUser: (dto) => api.post(`/auth/signup`, dto),
    createUser: (dto) => api.post(`/auth/signup`, dto),
    createUser: (dto) => api.post(`/auth/signup`, dto),
    createUser: (dto) => api.post(`/auth/signup`, dto),
};

export const Attendance = {
    createUser: (dto) => api.post(`/auth/signup`, dto),
    createUser: (dto) => api.post(`/auth/signup`, dto),
    setRequired(questionId, isRequired) {
        return api.patch(`/questions/${questionId}/required?isRequired=${isRequired}`);
    },
};

export default api;
