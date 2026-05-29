import useLocalStorage from '../../hooks/useLocalStorage';
import Card from '../Card/Card';

const Spotify = ({ className }) => {
    const [data, setData] = useLocalStorage('spotify', { test: 'dummy' });
    return (
        <Card className={`spotify ${className}`} header="Spotify">
            <h3>Place Holder Card</h3>
        </Card>
    );
};
export default Spotify;
