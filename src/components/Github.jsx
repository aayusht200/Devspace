import { useEffect } from 'react';
import { gitData } from '../data/gitData';
import useLocalStorage from '../hooks/useLocalStorage';
import Card from './Card/Card';

const Github = () => {
    const [data, setData] = useLocalStorage('github', { dataAvailable: false });
    useEffect(() => {
        async function getData() {
            const data = await gitData();
            setData(data);
        }
        getData();
    }, []);
    if (data.dataAvailable === false) {
        return (
            <Card className="github-data" header="Github">
                Loading...
            </Card>
        );
    }
    return (
        <Card className="github-data" header="Github">
            {}
        </Card>
    );
};
export default Github;
