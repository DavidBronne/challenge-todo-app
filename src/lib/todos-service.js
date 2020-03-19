import axios from "axios";

class Todo {
    constructor() {
        this.todo = axios.create({
            baseURL: "http://localhost:4000/api/v1",
          
            withCredentials: true  
        });
    }

    updateTodo({ id, title}) {
        return this.user
        .put(`/todos/${id}`, { title })
        .then(({data}) => data)}

    createTodo({ title }) {
        return this.todo
        .post("/todos", { title })
        .then(({data}) => data)}

    getOne(id) {
        return this.todo
        .get(`/todos/${id}`)
        .then(({data}) => data)
    }
    getAll() {
        return this.todo
        .get("/todos")
        .then(({data}) => data)
    }
}

const todoService = new Todo();

export default todoService;
 