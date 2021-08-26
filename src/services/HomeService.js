import axios from 'axios'

const COURSE_API_URL = 'http://localhost:8080'
const GET_LIST_RUL = `${COURSE_API_URL}/student`


const todos = [
    { id: 1, text: "Go to the gym", completed: false },
    { id: 2, text: "Do laundry", completed: false },
    { id: 3, text: "Study for exams", completed: false },
    { id: 4, text: "Read a book", completed: false },
    { id: 5, text: "Clean the bedroom", completed: false },
    { id: 6, text: "Go to the park", completed: false }
  ];

class HomeService {

    getAllData() {
        return axios.get(`${GET_LIST_RUL}/courses`);
    }

    getStatucData() {
        return todos;
    }



}
export default new HomeService()