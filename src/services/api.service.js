import axios from 'axios';

class ApiService {
    constructor(route) {
        this.resource = axios.create({
            baseURL: 'http://localhost:8080/api/'
        })
        this.route = route
    }
    allActivities() {
        return this.resource.get(this.route);
    }
    getAllActividades() {
        return this.resource.get('actividad/get');
    }
    getAllHabitos() {
        return this.route.get('habito/get');
    }
    getById(id) {
        return this.resource.get(`${this.route}/${id}`);
    }
    getActividadById(id) {
        return this.resource.get(`actividad/get/${id}`);
    }
    getHabitoById(id){
        return this.resource.get(`habito/get/${id}`);
    }
    save(model) {
        return this.resource.post(this.route, model);
    }
    saveActividad(model){
        return this.resource.post('actividad/post',model);
    }
    saveHabito(model){
        return this.resource.post('habito/post',model);
    }
    update(id, model) {
        return this.resource.put(`${this.route}/${id}`, model);
    }
    updateActividad(id,model) {
        return this.resource.put(`actividad/update/${id}`,model);
    }
    updateHabito(id,model){
        return this.resource.put(`habito/update/${id}`,model);
    }
    delete(id) {
        return this.resource.delete(`${this.route}/${id}`);
    }
    deleteActividad(id){
        return this.resource.delete(`actividad/delete/${id}`);
    }
    deleteHabito(id){
        return this.resource.delete(`habito/delete/${id}`);
    }
}

export default ApiService