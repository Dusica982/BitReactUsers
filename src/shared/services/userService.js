import { User } from '../enitities/User';

const fetchUsers = () => {
    const url = "https://randomuser.me/api/?results=20";

    return fetch(url)
        .then((data) => data.json())
        .then((data) => {
            const apiUsers = data.results;

            const users = apiUsers.map((user) => {
                return new User(user.name.first, user.email, user.picture.thumbnail, user.dob.date)
            })

            return users;
        })
}

export default fetchUsers;