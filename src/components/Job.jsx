import { Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToFavouritesAction } from "../redux/actions";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addToFavorites = () => dispatch(addToFavouritesAction(data));
  return (
    <>
      <Row
        className="mx-0 mt-3 p-2"
        style={{ border: "1px solid #00000033", borderRadius: 4 }}
      >
        <Col xs={2}>
          <Link to={`/${data.company_name}`}>{data.company_name}</Link>
        </Col>
        <Col xs={7}>
          <a href={data.url} target="_blank" rel="noreferrer">
            {data.title}
          </a>
        </Col>
        <Col xs={3}>
          <Button variant="dark" onClick={addToFavorites}>
            Add to favourites
          </Button>
          <Button variant="light" onClick={() => navigate("/favourites")}>
            FavS
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Job;
