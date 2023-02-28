import axios from 'axios';
const instance=axios.create({
    basedURL:"http://localhost:8080"
});
export default instance;
