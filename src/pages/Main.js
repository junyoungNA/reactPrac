import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { updateShoes } from "../store/shoes";
import { initialWatched } from "../store/watched";
import { __getShoes } from "../thunk/thunk";

let Btn = styled.button`
  font-size: 30px;
  font-weight: 900;
  border: none;
  background: white;
`;
const WatchedShoes = ({ shoes, num }) => {
  const navigate = useNavigate();
  return (
    <div
      key={num}
      onClick={() => {
        console.log(shoes, num);
        navigate("/detail", { state: { shoes, num } });
      }}
    >
      <div className="watch_inner">
        <li>상품번호:{num}</li>
        <li>상품제목:{shoes[num].title}</li>
      </div>
    </div>
  );
};

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
  const { isLoading, error, shoes } = useSelector((state) => state.shoes);
  const [clickNum, setClickNum] = useState(0);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  console.log("출력값들", shoes, isLoading, error);
  // data ajax요청 결과값들, isLoading ajax요청중일때(true,)아니면 false
  //isFetched 캐싱데이터에서 사용되는 불린값
  //isSuccess  데이터가 요청되서 받아왔을때 완료됐을 때
  //
  useEffect(() => {
    //메인 페이지 첫 렌더링시에 local에 watched :[] 생성
    dispatch(__getShoes());
  }, [dispatch]);

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
          {/* <h3>내가 본 상품{result.isLoading ? "로딩중" : result.data.title}</h3> */}
          {watched.length !== 0 &&
            watched.map((num) => {
              return <WatchedShoes shoes={shoes} num={num} key={num} />;
            })}
        </ul>
      </div>
      <Container className="shoes_container">
        <Row>
          {shoes.map((e, i) => {
            return (
              <Col className="shoes_inner" key={i}>
                <ShoesContent num={i} shoes={shoes} />
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
