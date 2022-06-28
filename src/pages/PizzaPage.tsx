import React, {useEffect} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import {fetchPizza} from "../redux/pizza/asyncThunk";
import {useSelector} from "react-redux";
import {selectPizzas} from "../redux/pizza/selectors";
import {useAppDispatch} from "../redux/store";


const PizzaPage: React.FC = () => {
    const { pizzaItem, statusPizzaItem } = useSelector(selectPizzas);
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        async function getPizza() {
            try {
                dispatch(fetchPizza({id: String(id)}));
            } catch (e) {
                alert('Ошибка при загрузке данных');
                navigate('/');
            }
        }
        getPizza();
    }, []);

    if(statusPizzaItem === 'pending') {
        return (
            <>
                Загрузка данных...
            </>
        )
    }

    return (
        <>
            <div className='button--container'>
                <Link to="/" className="button button--outline button--add go-back-btn button--pizza-page">
                    <span>Вернуться назад</span>
                </Link>
                <div className='container'>
                    <img src={pizzaItem.imageUrl} alt={pizzaItem.name}/>
                    <h1>{pizzaItem.name}</h1>
                    <p>Цена: {pizzaItem.price} ₴</p>
                </div>
            </div>
        </>
    );
};

export default PizzaPage;
