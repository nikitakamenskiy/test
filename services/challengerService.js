import api from "../utils/apiClient";

export async function createChallenger() {
    const  res =    await api.post('challenger');
    return res.headers['x-challenger'];

}