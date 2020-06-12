import React from 'react';
import { Link } from 'react-router-dom';

interface Props {

}

const Home: React.FC<Props> = () => {
    return (
        <div className="Home">
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
        </div>
    );
}

export default Home;