import { axiosAPI } from './index';

class UsersService {
    getAllCurrencyPairs() {
        return axiosAPI.get(`todos/1`);
    }
}

export default new UsersService();