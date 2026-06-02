import useLocalStorage from '../../hooks/useLocalStorage';
import CardWidget from '../Card/CardWidget';

const SpotifyWidget = ({ className }) => {
	const [data, setData] = useLocalStorage('spotify', { test: 'dummy' });
	return (
		<CardWidget
			className={`spotify ${className} bg-spotify-bg text-spotify-text border-spotify-border`}
			header="Spotify"
			accent="text-spotify-accent"
		>
			<h3>Place Holder Card</h3>
		</CardWidget>
	);
};
export default SpotifyWidget;
