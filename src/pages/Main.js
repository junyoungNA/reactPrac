import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { updateShoes } from "../store/shoes";
import { initialWatched } from "../store/watched";

let Btn = styled.button`
  font-size: 30px;
  font-weight: 900;
  border: none;
  background: white;
`;

const ShoesContent = ({ num, shoes }) => {
  const navigate = useNavigate();
  const moveDetail = (e) => {
    navigate("/detail", { state: { shoes, num } });
  };
  return (
    <div onClick={moveDetail}>
      <img
        src={`https://codingapple1.github.io/shop/shoes${num + 1}.jpg`}
        width="80%"
      />
      <h4>{shoes[num].title}</h4>
      <p>{shoes[num].content}</p>
      <p>{shoes[num].price}</p>
    </div>
  );
};

const Main = () => {
  const watched = useSelector((state) => state.watched);
  const allShoes = useSelector((state) => state.shoes);
  // const [shoes, setShoes] = useState(allShoes);
  const [clickNum, setClickNum] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    //메인 페이지 첫 렌더링시에 local에 watched :[] 생성
    dispatch(initialWatched());
  }, []);

  const moreShoes = () => {
    setLoading(true);
    Btn = styled.button`
      display: none;
    `;
    if (clickNum >= 2) {
      setLoading(false);
      Btn = styled.button`
        display: none;
      `;
      return alert("상품이 없습니다!");
    } else {
      axios
        .get("https://codingapple1.github.io/shop/data2.json")
        .then((response) => {
          setClickNum(clickNum + 1);
          dispatch(updateShoes(response.data));
          setLoading(false);
          Btn = styled.button`
            font-size: 30px;
            font-weight: 900;
            border: none;
            background: white;
          `;
        })
        .catch(() => {
          setLoading(false);
          console.log("실패함!");
        });
    }
  };

  return (
    <>
      <div className="main-bg">
        <ul className="watch">
          <h3>내가 본 상품</h3>
          {watched.length !== 0 &&
            watched.map((num) => {
              return (
                <div
                  key={num}
                  onClick={() => {
                    // console.log(shoes, num);
                    navigate("/detail", { state: { allShoes, num } });
                  }}
                >
                  <div className="watch_inner">
                    <li>상품번호:{num}</li>
                    <li>상품제목:{allShoes[num].title}</li>
                  </div>
                </div>
              );
            })}
        </ul>
      </div>
      <Container className="shoes_container">
        <Row>
          {allShoes.map((e, i) => {
            return (
              <Col className="shoes_inner" key={i}>
                <ShoesContent num={i} shoes={allShoes} />
              </Col>
            );
          })}
        </Row>
        <Btn onClick={moreShoes}>더보기</Btn>
        {loading ? (
          <Spinner className="spinner" animation="border" variant="secondary" />
        ) : (
          <Spinner
            className="spinner"
            animation="border"
            variant="secondary"
            style={{ display: "none" }}
          />
        )}
      </Container>
    </>
  );
};

export default Main;
