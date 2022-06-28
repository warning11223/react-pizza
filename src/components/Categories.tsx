import React from 'react';

type CategoriesProps = {
    activeIndex: number;
    setActiveIndex: (index: number) => void;
}

const Categories: React.FC<CategoriesProps> = React.memo(({activeIndex, setActiveIndex}) => {
    const items=['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
    const onActiveItem = (index: number) => {
        setActiveIndex(index);
    }

    return (
        <div className="content__top">
            <div className="categories">
                <ul>
                    {items.map((item, index) => {
                        return <li
                            key={index}
                            onClick={() => onActiveItem(index)}
                            className={activeIndex === index ? 'active' : ''}
                        >{item}</li>
                    })}
                </ul>
            </div>
        </div>
    );
})

export default Categories;
