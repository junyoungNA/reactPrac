import { useEffect, useRef, useState } from "react";
import { Nav, TabContent } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { updateBasket } from "../store/shoes";
import { updateWatched } from "../store/watched";

const Tab = function ({ tab, shoes }) {
  const [fade, setFade] = useState("");
  useEffect(() => {
    const id = setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      setFade("");
      clearTimeout(id);
    };
  }, [tab]);
  // if (tab === 0) {
  //   return <div>내용 1</div>;
  // }
  // if (tab === 1) {
  //   return <div>내용 2</div>;
  // }
  // if (tab === 2) {
  //   return <div>내용3</div>;
  // }

  return (
    <div className={`start ${fade}`}>
      {
        [
          <div>
            {shoes[0].title} {shoes[0].content} {shoes[0].price}
          </div>,
          <div>
            {shoes[1].title} {shoes[1].content} {shoes[1].price}
          </div>,
          <div>
            {shoes[2].title} {shoes[2].content} {shoes[2].price}
          </div>,
        ][tab]
      }
    </div>
  );
};

const Detail = () => {
  const [tab, setTab] = useState(0);
  const { state } = useLocation();
  const [fade, setFade] = useState("");
  const { shoes, num } = state;
  const dispatch = useDispatch();

  useEffect(() => {
    const id = setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      setFade("");
      clearTimeout(id);
    };
  }, []);

  useEffect(() => {
    dispatch(updateWatched(num));
  }, []);

  return (
    <div className={`container start ${fade}`}>
      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${num + 1}.jpg`}
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">상품:{shoes[num].title}</h4>
          <p>상품 설명: {shoes[state.num].content}</p>
          <p>가격: {shoes[state.num].price}</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              dispatch(updateBasket(shoes[num]));
            }}
          >
            주문하기
          </button>
        </div>
      </div>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(0);
            }}
            eventKey="link0"
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(1);
            }}
            eventKey="link1"
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(2);
            }}
            eventKey="link2"
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab tab={tab} shoes={shoes} />
    </div>
  );
};

export default Detail;
