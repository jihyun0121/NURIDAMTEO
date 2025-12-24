import axios from "axios";

const API_URL = "http://localhost:8080";

const api = axios.create({
    baseURL: API_URL,
    headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(
    (config) => {
        const token = sessionStorage.getItem("token");
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
            sessionStorage.removeItem("token");
        }

        return Promise.reject(error);
    }
);

export const UserAPI = {
    createUser: (dto) => api.post(`/auth/signup`, dto),
    login: (dto) => api.post(`/auth/login`, dto),
    getUser: (userId) => api.get(`/users/${userId}`),
    updateProfile: (userId, dto) => api.put(`/users/${userId}`, dto),
    updateSetting: (userId, dto) => api.put(`/users/${userId}/setting`, dto),
    updatePassword: (userId, dto) => api.put(`/users/${userId}/password`, dto),
};

export const InterestAPI = {
    selectInterests: (userId, categoryIds) => api.post(`/interests/${userId}`, categoryIds),
    getInterest: (userId) => api.post(`/interests/${userId}`),
    updateInterests: (userId, categoryIds) => api.post(`/interests/${userId}`, categoryIds),
};

export const NoticeAPI = {
    getNotice: () => api.get(`/notices/notice`),
    getNews: () => api.get(`/notices/news`),
    getNewses: () => api.get(`/notices/newses`),
    getDetail: (noticeId) => api.get(`/notices/${noticeId}`),
    updateView: (noticeId) => api.put(`/notices/${noticeId}/view`),
};

export const ResultAPI = {
    getResults: () => api.get(`/result`),
    getResult: (resultId) => api.get(`/result/${resultId}`),
    updateView: (resultId) => api.put(`/result/${resultId}/view`),
};

export const AttendanceAPI = {
    checkAttendance: (userId) => api.post(`/attendance/check/${userId}`),
    getTodayAttendance: (userId) => api.get(`/attendance/today/${userId}`, userId),
    getMonthlyAttendance(userId, year, month) {
        return api.get(`/attendance/month/${userId}/?year=${year}&month=${month}`);
    },
};

export const ProposalAPI = {
    createProposal: (userId, dto) => api.post(`/proposals/${userId}`, dto),
    getProposals: () => api.get(`/proposals`),
    getProposal: (proposalId) => api.get(`/proposals/${proposalId}`),
    setState: (proposalId, dto) => api.patch(`/proposals/${proposalId}/state`, dto),
    updateView: (proposalId) => api.put(`/surveys/${proposalId}/view`),
    updateParticipate: (proposalId) => api.put(`/surveys/${proposalId}/view`),
};

export const SurveyAPI = {
    getSurvey: (surveyId) => api.get(`/surveys/${surveyId}`),
    getSurveyList: () => api.get(`/surveys/survey`),
    getPanelList: () => api.get(`/surveys/panel`),
    getQuestionsBySurvey: (surveyId) => api.get(`/surveys/${surveyId}/questions`),
    getOptionsByQuestion: (questionId) => api.get(`/surveys/${questionId}/options`),
    checkSurveySelection: (surveyId, userId) => api.get(`/surveys/${surveyId}/selection`, userId),
    updateView: (surveyId) => api.put(`/surveys/${surveyId}/view`),
    updateParticipate: (surveyId) => api.put(`/surveys/${surveyId}/view`),
};

export const AnswerAPI = {
    createAnswer: (dto) => api.post(`/answers`, dto),
    getAnswer: (answerId) => api.get(`/answers/${answerId}`),
    getAnswersBySurvey: (surveyId) => api.get(`/answers/survey/${surveyId}`),
    getAnswersByQuestion: (questionId) => api.get(`/answers/question/${questionId}`),
    getAnswersByParticipation: (participationId) => api.get(`/answers/participations/${participationId}`),
    getOptionStats: (questionId) => api.get(`/statistics/questions/${questionId}/options`),
};

export const ParticipationAPI = {
    createParticipaiton: (dto) => api.post(`/participations`, dto),
    getParticipaiton: (targetId) => api.get(`/participations/${targetId}`),
    getUserParticipaiton: (userId) => api.get(`/participations/user/${userId}`),
    deleteParticipaiton: (participationId) => api.delete(`/participations/${participationId}`),
};

export const CommentAPI = {
    createComment: (dto) => api.post(`/comments`, dto),
    getComments: (targetId) => api.get(`/comments/${targetId}`),
    deleteComment: (commentId) => api.delete(`/comments/${commentId}`),
};

export default api;
