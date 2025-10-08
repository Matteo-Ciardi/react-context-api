import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import DetailCard from "../../components/detailcard/DetailCard";

import './ProductDetailsPage.css'

export default function ProductDetailsPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [detail, setDetail] = useState();



    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                // FAKE LOADING
                setTimeout(() => {
                    setDetail(response.data);
                }, 2000);
            })
            .catch(() => {
                navigate("/prodotti");
            });
    }, [id, navigate]);

    return (
        <>
            <div>
                {detail
                    ? (<DetailCard
                        key={id}
                        detail={detail} />)
                    : (
                        <div className="spinner-container">
                            <div className="spinner"></div>
                        </div>
                    )}
            </div>
        </>
    )

}