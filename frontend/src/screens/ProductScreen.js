import React, { useEffect } from "react";

import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetails } from "../actions/productDetailActions";
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";

// import products from "../products";
import { Rating } from "../components";

const ProductScreen = () => {
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchProductDetails(params.id));
  }, [params.id, dispatch]);

  // const [product, setProduct] = useState([]);

  const productDetails = useSelector((state) => state.productDetail);
  const { error, loading, productDetail } = productDetails;
  console.log(productDetail);

  // const product = products.find((p) => p._id === params.id);

  return (
    <div>
      <Link to="/">Go Back</Link>

      <Row>
        <Col md={6}>
          {/* <Image className="w-100" src={product.image} alt={product.name} /> */}
        </Col>
        {/* <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>{product.name}</ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
                color={"#f8e825"}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>{product.price}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type="button"
                  disabled={product.countInStock == 0}
                  className="w-100 btn-block"
                >
                  ADD TO CART
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col> */}
      </Row>
    </div>
  );
};

export default ProductScreen;
