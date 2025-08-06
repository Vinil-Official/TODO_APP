import axios from 'axios';

const BASE_URL = 'http://192.168.29.254:8080/api/tasks'; // 🔁 not localhost!

export const getAllEmployees = () => axios.get(`${BASE_URL}/ShowTask`);
export const getEmployeeById = (id) => axios.get(`${BASE_URL}/${id}`);
export const addEmployee = (data) => axios.post(`${BASE_URL}/AddTask`,data);
export const updateEmployee = (id, data) => axios.put(`${BASE_URL}/${id}`, data);
export const deleteEmployee = (id) => axios.delete(`${BASE_URL}/${id}`);
