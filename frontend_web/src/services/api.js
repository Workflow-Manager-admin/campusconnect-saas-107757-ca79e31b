import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor for handling errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const auth = {
  login: async (credentials) => {
    const response = await api.post('/auth/login/', credentials);
    localStorage.setItem('token', response.data.token);
    return response.data;
  },

  register: async (userData) => {
    const response = await api.post('/auth/register/', userData);
    localStorage.setItem('token', response.data.token);
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('token');
  },
};

export const profile = {
  getProfile: async () => {
    const response = await api.get('/profile/');
    return response.data;
  },

  updateProfile: async (profileData) => {
    const formData = new FormData();
    Object.entries(profileData).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        formData.append(key, value);
      }
    });
    const response = await api.put('/profile/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  uploadDocument: async (file, type) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('type', type);
    const response = await api.post('/profile/documents/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },
};

export const jobs = {
  getJobs: async (filters = {}) => {
    const response = await api.get('/jobs/', { params: filters });
    return response.data;
  },

  getJobDetails: async (jobId) => {
    const response = await api.get(`/jobs/${jobId}/`);
    return response.data;
  },

  applyForJob: async (jobId) => {
    const response = await api.post(`/jobs/${jobId}/apply/`);
    return response.data;
  },
};

export const applications = {
  getMyApplications: async () => {
    const response = await api.get('/applications/');
    return response.data;
  },

  getApplicationDetails: async (applicationId) => {
    const response = await api.get(`/applications/${applicationId}/`);
    return response.data;
  },
};

export const placementRounds = {
  getRounds: async (jobId) => {
    const response = await api.get(`/jobs/${jobId}/rounds/`);
    return response.data;
  },

  updateParticipation: async (roundId, status) => {
    const response = await api.post(`/rounds/${roundId}/participation/`, { status });
    return response.data;
  },
};

export default api;
