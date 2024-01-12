
import { categories } from '../../constants/data';

import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const Categories = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Link
                to={`/create?category=${category || ''}`}
                style={{
                    margin: '20px',
                    width: '100%',
                    background: '#6495ED',
                    color: '#fff',
                    textDecoration: 'none',
                    padding: '10px',
                    textAlign: 'center',
                }}
            >
                Create Blog
            </Link>

            <div style={{ display: 'flex', gap: '10px' }}>
                <Link
                    to={"/"}
                    style={{
                        textDecoration: 'none',
                        color: 'inherit',
                        padding: '5px 10px',
                        border: '1px solid #ddd',
                        borderRadius: '5px',
                    }}
                >
                    All Categories
                </Link>
                {categories.map(category => (
                    <Link
                        to={`/?category=${category.type}`}
                        key={category.id}
                        style={{
                            textDecoration: 'none',
                            color: 'inherit',
                            padding: '5px 10px',
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                        }}
                    >
                        {category.type}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Categories;
