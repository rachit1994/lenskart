import { FC } from 'react';
import dummyApiData from './dummy';
import Components from 'components';
import './index.css';

const App: FC<{}> = () => (
    <div className='page'>
        {
            Array.isArray(dummyApiData) && dummyApiData.length > 0 && dummyApiData.map((data: any) => Components(data))
        }
    </div>
)

export default App;
