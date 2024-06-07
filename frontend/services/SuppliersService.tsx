import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/',
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

    listById(id: number){
        return axiosInstance.get(`/api/suppliers/${id}`);
    }
    createContract(id: number, data: any){
        return axiosInstance.post(`/api/contracts/${id}`, data);
    }
}

