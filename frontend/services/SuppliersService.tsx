import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'https://refactored-fortnight-jjrw49qx455hjq75-8080.app.github.dev/',
    headers: {
        'Content-Type': 'application/json',
    },
});

export class SuppliersService{
    listAll(){
        return axiosInstance.get('/api/suppliers');
    }

    create(data: any){
        return axiosInstance.post('/api/suppliers', data);
    }
    delete(id: number){
        return axiosInstance.delete(`/api/suppliers/${id}`);
    }

    listById(id: number){
        return axiosInstance.get(`/api/suppliers/${id}`);
    }
    createContract(id: number, data: any){
        return axiosInstance.post(`/api/contracts/${id}`, data);
    }
}

