import useLocalStorage from '../../hooks/useLocalStorage';
import Card from '../Card/Card';

const Spotify = ({ className }) => {
    const [data, setData] = useLocalStorage('spotify', { test: 'dummy' });
    return (
        <Card
            className={`spotify ${className} bg-spotify-bg text-spotify-text border-spotify-border`}
            header="Spotify"
            accent="text-spotify-accent"
        >
            <h3>Place Holder Card</h3>
        </Card>
    );
};
export default Spotify;
