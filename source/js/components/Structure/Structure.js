import {
    createContext,
    RefObject,
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState,
} from 'react';

import { AuthContext } from '../../context/AuthContext';

import apiClient from '../../api/apiClient';

import {
    ChildrenStyled,
    RootStyled,
    StructureStyled,
} from './Structure.styled';


/* MAGZHAN */
import Search from '../Search'
// const Children = ({ data, indent }) => {
//     const { username, full_name, pv, total_users, children } = data;

//     return (
//         <>
//             <ChildrenStyled indent={indent} position={data.position}>
//                 <p>{username}</p>
//                 <p>{full_name}</p>
//                 <p>{pv}</p>
//                 <p>{total_users}</p>
//             </ChildrenStyled>
//             {children &&
//                 children.length > 0 &&
//                 children.map((child, index) => (
//                     <Children key={index} data={child} indent={indent + 1} />
//                 ))}
//         </>
//     );
// };

// const Root = ({ structure }) => {
//     const {
//         username,
//         full_name,
//         pv,
//         total_users,
//         children,
//         total_users_score,
//     } = structure;

//     console.log(total_users_score);

//     return (
//         <>
//             <RootStyled total_users_score={total_users_score}>
//                 <p>{username}</p>
//                 <p>{full_name}</p>
//                 <p>{pv}</p>
//                 <p>{total_users}</p>
//             </RootStyled>
//             {children &&
//                 children.length > 0 &&
//                 children.map((child, index) => (
//                     <Children key={index} data={child} indent={1} />
//                 ))}
//         </>
//     );
// };

const CanvasContext = createContext({
    state: {
        offset: {
            x: 0,
            y: 0,
        },
        scale: 1,
    },
});

const CanvasComponent = () => {
    const { state } = useContext(CanvasContext);

    return <div>The desired user zoom level is {state.scale}.</div>;
};

const ORIGIN = Object.freeze({
    x: 0,
    y: 0,
});

const MIN_SCALE = 0.5;
const MAX_SCALE = 3;

const usePan = () => {
    const [panState, setPanState] = useState(ORIGIN);

    const lastPointRef = useRef(ORIGIN);

    const pan = useCallback((e) => {
        const lastPoint = lastPointRef.current;
        const point = { x: e.pageX, y: e.pageY };
        lastPointRef.current = point;

        setPanState((panState) => {
            const delta = {
                x: lastPoint.x - point.x,
                y: lastPoint.y - point.y,
            };
            const offset = {
                x: panState.x + delta.x,
                y: panState.y + delta.y,
            };

            return offset;
        });
    }, []);

    const endPan = useCallback(() => {
        document.removeEventListener('mousemove', pan);
        document.removeEventListener('mouseup', endPan);
    }, [pan]);

    const startPan = useCallback(
        (e) => {
            document.addEventListener('mousemove', pan);
            document.addEventListener('mouseup', endPan);
            lastPointRef.current = { x: e.pageX, y: e.pageY };
        },
        [pan, endPan]
    );

    return [panState, startPan];
};

const useScale = (ref) => {
    const [scale, setScale] = useState(1);

    const updateScale = ({ direction, interval }) => {
        setScale((currentScale) => {
            let scale;

            if (direction === 'up' && currentScale + interval < MAX_SCALE) {
                scale = currentScale + interval;
            } else if (direction === 'up') {
                scale = MAX_SCALE;
            } else if (
                direction === 'down' &&
                currentScale - interval > MIN_SCALE
            ) {
                scale = currentScale - interval;
            } else if (direction === 'down') {
                scale = MIN_SCALE;
            } else {
                scale = currentScale;
            }

            return scale;
        });
    };

    onwheel = (e) => {
        e.preventDefault();

        updateScale({
            direction: e.deltaY > 0 ? 'up' : 'down',
            interval: 0.1,
        });
    };

    return scale;
};

export const UsePanScaleExample = () => {
    const [offset, startPan] = usePan();
    const ref = useRef(null);
    const scale = useScale(ref);

    return (
        <div ref={ref} onMouseDown={startPan}>
            <div
                style={{
                    transform: `scale(${scale})`,
                    backgroundPosition: `${-offset.x}px ${-offset.y}px`,
                }}
            >
                <span>{JSON.stringify(offset)}</span>
                <span>{scale}</span>
            </div>
        </div>
    );
};

const Structure = () => {
    //     const { tokens } = useContext(AuthContext);

    //     const [isLoading, setIsLoading] = useState(false);
    //     const [structure, setStructure] = useState(null);

    //     useEffect(() => {
    //         setIsLoading(true);

    //         apiClient
    //             .get('/tree/', {
    //                 headers: {
    //                     Authorization: `Bearer ${tokens.access}`,
    //                 },
    //             })
    //             .then(({ data }) => {
    //                 setStructure(data);
    //             })
    //             .catch(() => {
    //                 setStructure(null);
    //             })
    //             .finally(() => {
    //                 setIsLoading(false);
    //             });
    //     }, []);

    //     console.log(structure);

    return (
        <>
            <Search />
            <CanvasComponent />
            <UsePanScaleExample />
        </>
    );

    // return !isLoading ? (
    //     <StructureStyled>
    //         {structure ? <Root structure={structure} /> : <p>Ошибка</p>}
    //     </StructureStyled>
    // ) : (
    //     <p>Загрузка...</p>
    // );
};

export default Structure;
