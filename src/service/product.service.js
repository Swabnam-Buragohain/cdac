import axios from "axios";

const API_URL = "http://localhost:9696"; 

class ProductService {

    saveStudent(product) {
        return axios.post(API_URL + "/Dac/saveStudent", product);
    }

    getAllStudent() {
        return axios.get(API_URL + "/Dac/all");
    }

    getStudentById(id) {
        return axios.get(API_URL + "/" + id);
    }

    deleteProduct(id) {
        return axios.delete(API_URL + "/Dac/delete/" + id);
    }

    editStudent(product) {
        return axios.put(API_URL + "/Dac/update" , product);
    }

    saveStudentDbda(product) {
        return axios.post(API_URL + "/Dbda/saveStudent", product);
    }

    getAllDbdaStudent() {
        return axios.get(API_URL + "/Dbda/all");
    }

    getStudentByIdDbda(id) {
        return axios.get(API_URL + "/Dbda/" + id);
    }

    editStudentDbda(product) {
        return axios.put(API_URL + "/Dbda/update" , product);
    }

    deleteProductDbda(id) {
        return axios.delete(API_URL + "/Dbda/delete/" + id);
    }

    getAllDesdStudent() {
        return axios.get(API_URL + "/Desd/all");
    }

    saveStudentDesd(product) {
        return axios.post(API_URL + "/Desd/saveStudent", product);
    }

    getStudentByIdDesd(id) {
        return axios.get(API_URL + "/Desd/" + id);
    }

    editStudentDesd(product) {
        return axios.put(API_URL + "/Desd/update" , product);
    }
    deleteProductDesd(id) {
        return axios.delete(API_URL + "/Desd/delete/" + id);
    }
}

export default new ProductService;