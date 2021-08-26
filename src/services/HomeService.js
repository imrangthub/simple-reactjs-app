import axios from 'axios'

const COURSE_API_URL = 'http://localhost:8080'
const GET_LIST_RUL = `${COURSE_API_URL}/student`

class HomeService {

    getAllData() {
        return axios.get(`${GET_LIST_RUL}/courses`);
    }



}
export default new HomeService()