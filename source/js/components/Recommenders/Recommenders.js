import { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../context/AuthContext';

import apiClient from '../../api/apiClient';

import { RecommenderStyled, RecommendersStyled } from './Recommenders.styled';

const Recommender = (props) => {
    const { label, total_users, total_bonus, branches, indent, number_of_registrations_this_month, total_pv_this_month } = props;

    const [isChildrenHidden, setIsChildrenHidden] = useState(true);

    return (
        <>
            <RecommenderStyled
                indent={indent}
                onClick={() => {
                    setIsChildrenHidden(!isChildrenHidden);
                }}
            >
                <p>{label}</p>
                <div>
                    <p>{total_users}</p>
                    <p>{total_bonus}</p>
                </div>
                <div>
                    <p className='red'>{number_of_registrations_this_month}</p>
                    <p className='blue'>{total_pv_this_month}</p>
                </div>
            </RecommenderStyled>
            {branches &&
                branches.length > 0 &&
                branches.map(
                    (branch, index) =>
                        !isChildrenHidden && (
                            <Recommender
                                key={index}
                                {...branch}
                                indent={indent + 1}
                            />
                        )
                )}
        </>
    );
};

const Recommenders = () => {
    const { tokens } = useContext(AuthContext);

    const [recommenders, setRecommenders] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getRecommenders = async () => {
        setIsLoading(true);

        apiClient
            .get('/profile/recommenders/', {
                headers: {
                    Authorization: `Bearer ${tokens.access}`,
                },
            })
            .then(({ data }) => {
                setRecommenders(data);

                setIsLoading(false);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        getRecommenders();
    }, []);

    return (
        <RecommendersStyled>
            {isLoading ? (
                <p>Загрузка...</p>
            ) : (
                recommenders.map((recommender, index) => (
                    <Recommender key={index} {...recommender} indent={0} />
                ))
            )}
        </RecommendersStyled>
    );
};

export default Recommenders;
