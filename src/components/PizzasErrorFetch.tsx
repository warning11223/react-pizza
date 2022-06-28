import React from 'react';


const PizzasErrorFetch: React.FC = () => {
    return (
        <div className='content__error-info'>
            <h2>Произошла ошибка при загрузке данных 😕</h2>
            <p>
                Повторите попытку позже<br />
            </p>
        </div>
    );
};

export default PizzasErrorFetch;
