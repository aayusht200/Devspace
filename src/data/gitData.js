// https://api.github.com/users/aayusht200
import axios from 'axios';

const gitData = async () => {
    try {
        const respone = await axios.get('https://api.github.com/users/aayusht200');
        if (respone.data)
            return {
                user: respone.data.login,
                image_url: respone.data.avatar_url,
                name: respone.data.name,
                profile_url: respone.data.html_url,
                repo_url: respone.data.repos_url,
            };
    } catch (err) {
        return err;
    }
};

export { gitData };
// avatar_url photo,name,html_url. profile,repos_url
