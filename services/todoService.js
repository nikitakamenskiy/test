import api from "../utils/apiClient";

export async function getTodos(token) {
    return await  api.get(`todos`, {
        headers: { 'x-challenger': token }
    });
}
export async function getTodoById(id, token) {
    return await api.get(`todos/${id}`, {
        headers: { 'x-challenger': token }
    });
}
