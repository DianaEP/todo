import { AxiosResponse } from "axios";
import axiosInstance from "./axiosInstance"
import Todo from "./todo";

// AUTH REQUESTS
interface AuthResponse{
    token:string;
}
interface UserCredentials{
    email:string;
    password: string;
}


export const register = async(userData: UserCredentials): Promise<AuthResponse> => {
    const response: AxiosResponse<AuthResponse> = await axiosInstance.post('/auth/signup', userData);
    return response.data;
}

export const login = async(userData: UserCredentials): Promise<AuthResponse> => {
    const response: AxiosResponse<AuthResponse> = await axiosInstance.post('/auth/login', userData);
    return response.data;
}

// PROTECTED REQUEST

export const protectedRoute = async(): Promise<AuthResponse> => {
    const response: AxiosResponse<AuthResponse> = await axiosInstance.get('/protected');
    return response.data;
}

// TODOS REQUESTS

// Get all
export const getTodos = async(): Promise<Todo[]> => {
    const response: AxiosResponse<Todo[]> = await axiosInstance.get('/todos');
    return response.data;
}

// Get one 
export const getTodo = async(id: string): Promise<Todo[]> => {
    const response: AxiosResponse<Todo[]> = await axiosInstance.get(`/todos/${id}`);
    return response.data;
}

// Create todo
export const createTodo = async(task: string): Promise<Todo[]> => {
    const response: AxiosResponse<Todo[]> = await axiosInstance.post('/todos', {task})
    return response.data;
}

// Update todo
export const updateTodo = async(task: string, id: string, completed: boolean): Promise<Todo[]> => {
    const response: AxiosResponse<Todo[]> = await axiosInstance.patch(`/todos/${id}`, {task, completed})
    return response.data;
}

// Delete todo
export const deleteTodo = async(id: string): Promise<void> => {
    await axiosInstance.delete(`/todos/${id}`)
}