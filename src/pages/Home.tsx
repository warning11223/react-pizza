import React, {useCallback, useEffect, useRef} from 'react';
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlockSkeleton from "../components/PizzaBlockSkeleton";
import PizzaBlock from "../components/PizzaBlock";
import Pagination from "../components/Pagination/Pagination";
import {useSelector} from "react-redux";
import qs from 'qs';
import {useNavigate} from 'react-router-dom'
import PizzasErrorFetch from "../components/PizzasErrorFetch";
import {useAppDispatch} from "../redux/store";
import {selectSearch} from "../redux/search/selectors";
import {selectFilter} from "../redux/filter/selectors";
import {selectPizzas} from "../redux/pizza/selectors";
import {fetchPizzas} from "../redux/pizza/asyncThunk";
import {setCategoriesIndex, setFilters, setSortItem} from "../redux/filter/slice";
import {PizzasItem} from "../redux/pizza/types";

const Home: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { searchInput } = useSelector(selectSearch);
    const { categoriesIndex, sortItem, currentPage } = useSelector(selectFilter);
    const { pizzas, status } = useSelector(selectPizzas);
    const isMounting = useRef(false);

    let sortArray = ['rating', 'rating-', 'price', 'price-', 'alphabet', 'alphabet-'];

    useEffect(() => {
        if(window.location.search) {
            const params = qs.parse(window.location.search.substring(1));

            const { sortItem, categoriesIndex, currentPage } = params;

            dispatch(setFilters({
                sortItem,
                categoriesIndex,
                currentPage
            }))
        }
    }, [])

    useEffect(() => {
        const order = sortArray[sortItem].includes('-') ? 'desc' : 'asc';
        const sortBy = sortArray[sortItem].replace('-', '');
        const categories = categoriesIndex > 0 ? `?category=${categoriesIndex}&` : '?';
        const search = searchInput && `&search=${searchInput}`;

        const getPizzas = async () => {
            dispatch(fetchPizzas({categories, sortBy, currentPage: String(currentPage), order, search}));
        }

        getPizzas();

        window.scrollTo(0,0);

    }, [categoriesIndex, sortItem, searchInput, currentPage]);

    useEffect(() => {
        if(isMounting.current) {
            let queryString = qs.stringify({
                sortItem,
                categoriesIndex,
                currentPage
            })

            navigate(`?${queryString}`);
        }

        isMounting.current = true;

    }, [categoriesIndex, sortItem, currentPage])


    const skeletons = [...new Array(6)].map((item, index) => <PizzaBlockSkeleton key={index} />);

    const pizzasRender = pizzas.map((item: PizzasItem) => {
        return <PizzaBlock key={item.id} pizza={item}/>
    });
    /*.filter(item => {
        if(item.name.toLowerCase().includes(searchInput.toLowerCase())) {
            return true;
        }
        return false;
    })*/

    const setActiveIndex = useCallback((i: number) => {
        dispatch(setCategoriesIndex(i));
    }, []);

    const setSortItemHandler = useCallback((i: number) => {
        dispatch(setSortItem(i));
    }, []);

    return (
        <>
            <div className="container">
                <div className="content__top">
                    <Categories
                        activeIndex={categoriesIndex}
                        setActiveIndex={setActiveIndex}
                    />
                    <Sort
                        setSortItem={setSortItemHandler}
                        activeItem={sortItem}
                    />
                </div>
                <h1 className="content__title">Все пиццы</h1>
                {
                    status === 'rejected' ?
                    <PizzasErrorFetch /> :
                    <div className="content__items content__items-grid">
                        {
                            status === 'pending' ? skeletons : pizzasRender
                        }
                    </div>
                }
                <Pagination />
            </div>
        </>
    );
};

export default Home;
