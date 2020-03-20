import axios from "axios";

class Todo {
    constructor() {
        this.todo = axios.create({
            baseURL: "http://localhost:4000/api/v1",
          
            withCredentials: true  
        });
    }

    updateTodo( id, {title, body}) {
        return this.todo
        .put(`/todos/${id}`, { title , body})
        .then(({data}) => data)}

    createTodo({ title, body }) {
        return this.todo
        .post("/todos", { title, body })
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
 