import {useParams} from 'react-router-dom';

const data = {
    6119: {
        name: '서은원',
        description:'대학교 1학년',
    },
    7119: {
        name: '서지은',
        description: '중학교 2학년',
    },
};

const Profile = () => {
    const params = useParams();
    const profile = data[params.username];

        return (
            <div>
            <h1>사용자 프로필</h1>
            {profile ? (
                <div>
                <h2>{profile.name}</h2>
                <p>{profile.description}</p>
                </div>
            ) : (
                <p>존재하지 않는 프로필입니다</p>
            )}
            </div>
        );
    };

export default Profile;