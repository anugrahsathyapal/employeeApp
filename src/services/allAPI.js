import commonAPI from "./commonAPI";
import { serverUrl } from "./serverURL";

export const addEmployeeAPI = async (empDetails) => {
    return await commonAPI('post', `${serverUrl}/employee`, empDetails);
};

export const getEmployeeAPI = async () => {
    return await commonAPI('get', `${serverUrl}/employee`, "");
};

export const deleteEmployeeAPI = async (id) => {
    return await commonAPI('delete', `${serverUrl}/employee/${id}`, {});
};

export const editEmployeeAPI = async (id, empDetails) => {
    return await commonAPI('put', `${serverUrl}/employee/${id}`, empDetails);
};

export const getEmployeeByIdAPI = async (id) => {
    return await commonAPI('get', `${serverUrl}/employee/${id}`, "");
};

