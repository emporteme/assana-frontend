import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import apiClient from '../../api/apiClient';
import Tree from 'react-d3-tree';
import './Tree.css';


const Rectangle = ({ nodeDatum, toggleNode }) => {
    return (
        <>
            <g onClick={toggleNode}>
                <rect
                    width={200}
                    height={46}
                    x={-100}
                    y={-23}
                    fill='#ffffff'
                    stroke='#60c1c6'
                    rx={4}
                ></rect>
                <text
                    y={-9}
                    dominantBaseline='middle'
                    textAnchor='middle'
                    fontFamily='"Open Sans", sans-serif'
                    strokeWidth={0.5}
                    fill='black'
                >
                    {nodeDatum.username}
                </text>
                <text
                    y={11}
                    dominantBaseline='middle'
                    textAnchor='middle'
                    fontFamily='"Open Sans", sans-serif'
                    strokeWidth={0.5}
                    fill='black'
                >
                    {nodeDatum.attributes?.name}
                </text>
            </g>
        </>
    );
};

export default function Treee() {
    const [searchTerm, setSearchTerm] = useState('');

    const { tokens, setTokens } = useContext(AuthContext);

    const ref = useRef(null);


    const [tree, setTree] = useState(null);

    useEffect(() => {
        apiClient
            .get('/tree/', {
                headers: {
                    Authorization: `Bearer ${tokens.access}`,
                },
            })
            .then(({ data }) => {
                setTree(data);
            });
    }, []);

    return (
        <>
            <div className='tree' ref={ref}>
                <div className='search'>
                    <input
                        type='text'
                        className='tree__search'
                        placeholder='Поиск по структуре'
                        autoFocus
                        autoComplete='off'
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className='tree__second'>
                    {tree ? (
                        <>
                            <Tree
                                data={tree}
                                orientation='vertical'
                                className='structure'
                                pathFunc='step'
                                centeringTransitionDuration={800}
                                collapsible={true}
                                scaleExtent={{
                                    min: 0.1,
                                    max: 0.75,
                                }}
                                separation={{
                                    siblings: 2,
                                    nonSiblings: 2,
                                }}
                                translate={{
                                    x: ref.current
                                        ? ref.current.offsetWidth / 2
                                        : 0,
                                    y: 50,
                                }}
                                renderCustomNodeElement={Rectangle}
                            />
                        </>
                    ) : (
                        <p>Загрузка...</p>
                    )}
                </div>
            </div>
        </>
    );
}

{
    /*
import { useContext, useEffect, useRef, useState } from 'react';

import { AuthContext } from '../../context/AuthContext';

import apiClient from '../../api/apiClient';

import './Tree.css';
import { useNavigate } from 'react-router-dom';

import Tree from 'react-d3-tree';

const filterCars = (searchText, listOfCars) => {
    if (!searchText) {
        return listOfCars;
    }
    return listOfCars.filter(({ car_model }) =>
        car_model.toLowerCase().includes(searchText.toLowerCase())
    );
};
const Rectangle = ({ nodeDatum, toggleNode }) => {
    return (
        <>
            <g onClick={toggleNode}>
                <rect
                    width={200}
                    height={46}
                    x={-100}
                    y={-23}
                    fill='#ffffff'
                    stroke='#60c1c6'
                    rx={4}
                ></rect>
                <text
                    y={-9}
                    dominantBaseline='middle'
                    textAnchor='middle'
                    fontFamily='"Open Sans", sans-serif'
                    strokeWidth={0.5}
                    fill='black'
                >
                    {nodeDatum.username}
                </text>
                <text
                    y={11}
                    dominantBaseline='middle'
                    textAnchor='middle'
                    fontFamily='"Open Sans", sans-serif'
                    strokeWidth={0.5}
                    fill='black'
                >
                    {nodeDatum.attributes?.name}
                </text>
            </g>
        </>
    );
};

export default function Treee() {
    

    const navigate = useNavigate();

    const { tokens, setTokens } = useContext(AuthContext);

    const ref = useRef(null);
    
     


    if (!tokens) {
        useEffect(() => {
            navigate('/login');
        }, []);

        return '';
    }

    const logOutUser = () => {
        setTokens(null);

        localStorage.removeItem('tokens');
        localStorage.removeItem('orders');
        localStorage.removeItem('newUser');

        navigate('/');
    };

    const [tree, setTree] = useState(null);

    useEffect(() => {
        apiClient
            .get('/tree/', {
                headers: {
                    Authorization: `Bearer ${tokens.access}`,
                },
            })
            .then(({ data }) => {
                setTree(data);
            });
    }, []);


    const [searchTerm, setSearchTerm] = useState('');
    const filteredTerms = tree.filter((product) => {
        return product.username
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    })


    return (
        <>
            <div className='tree' ref={ref}>
                <div className='search'>
                    <input
                        type='text'
                        className='tree__search'
                        placeholder='Поиск по структуре'
                        autoFocus
                        autoComplete='off'
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div>
                    {tree ? (
                        <>
                            <Tree
                                data={tree}
                                orientation='vertical'
                                className='structure'
                                pathFunc='step'
                                centeringTransitionDuration={800}
                                collapsible={true}
                                scaleExtent={{
                                    min: 0.1,
                                    max: 0.75,
                                }}
                                separation={{
                                    siblings: 2,
                                    nonSiblings: 2,
                                }}
                                translate={{
                                    x: ref.current
                                        ? ref.current.offsetWidth / 2
                                        : 0,
                                    y: 50,
                                }}
                                renderCustomNodeElement={filteredTerms(Rectangle)}
                            />
                        </>
                    ) : (
                        <p>Загрузка...</p>
                    )}
                </div>
            </div>
        </>
    );
}
*/
}
