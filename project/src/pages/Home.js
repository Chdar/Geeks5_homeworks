import { Col, Row, Select, Slider } from "antd";
import { useProducts } from "../api/requests";
import CardComp from "../components/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { useFilters } from '../features/store'
import { useState } from "react";

const Home = () => {

    const { data, isLoading, error } = useProducts()
    const { type, setType } = useFilters()
    const [priceRange, setPriceRange] = useState([50, 200]);

    if (isLoading) return <>Загрузка...</>
    if (error) return <>Ошибка...</>

    const filteredProducts = data.products.filter(
        (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    return (
        <div>
            <h2>Товары</h2>

            <Slider
                range
                min={0}
                max={500}
                defaultValue={priceRange}
                onChange={(value) => setPriceRange(value)}
            />

            <Select
                defaultValue="price"
                options={[
                    { label: "По цене", value: "price" },
                    { label: "По рейтингу", value: "rating" }
                ]}
            />
            {/* <Select
                value={type}
                onChange={(value) => setType(value)}
                options={[
                    { label: 'All', value: 'all' },
                    { label: 'Laptops', value: 'laptops' },
                    { label: 'Smartphones', value: 'smartphones' }
                ]}
            /> */}

            <Row>
                {filteredProducts.map((product) => (
                    <Col span={6} key={product.id}>
                        <CardComp product={product} />
                    </Col>
                ))}     
            </Row>

            <Swiper slidesPerView={3} navigation>
                {filteredProducts.slice(0, 5).map((product) => (
                    <SwiperSlide key={product.id}>
                        <CardComp product={product} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Home;