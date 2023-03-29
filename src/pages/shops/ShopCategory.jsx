import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Products from '../../components/shop/Products';

const ShopCategory = () => {
    const { category } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <>
            <div className="container">
                <div className="shop_main_parent">
                    <div className="shop_subparent">
                        <div className="shop_textdiv">
                            <p className="shop_header1">{category === "art" ? "Buy from our amazing art collection" : category === "decors" ? "Checkout our amazing home decoration products" : "Buy from our amazing handmades collection"}</p>

                            <p className="shop_header2">
                                All the products listed here, are made by our members, local charities, NGOs, orphanages. We don't take any profit from the sales.
                            </p>
                        </div>


                    </div>

                    <Products showtitle={false} category={category} />
                </div>
            </div>

        </>
    )
}

export default ShopCategory