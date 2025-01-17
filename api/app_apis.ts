import axios from 'axios';
const api = axios.create({
    baseURL: 'backend endpoint',
    timeout: 10000,
});
api.interceptors.request.use(
    (config) => {
        const token = 'authentication token';
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);
export const fetchNotifications = async () => {
    try {
        const response = await api.get('/getNotifications');
        return response.data;
    } catch (error) {
        console.error('Error fetching notifications:', error);
        return error;
    }
};

export const sendMessage = async (message: string) => {
    try {
        const response = await api.post('/getMessages', { message });
        return response.data;
    } catch (error) {
        console.error('Error sending message:', error);
        throw error;
    }
};
