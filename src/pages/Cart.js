import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { increaseCount } from "../store/shoes";

function Cart() {
  const shoes = useSelector((state) => state.shoes);
  const dispatch = useDispatch();

  const reqIncrese = (id) => {
    dispatch(increaseCount(id));
  };

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        {shoes.map((ele, i) => {
          return (
            <tbody key={ele.id}>
              <tr>
                <td>{ele.id}</td>
                <td>{ele.title}</td>
                <td>{ele.count}</td>
                <td>
                  <button
                    onClick={() => {
                      reqIncrese(ele.id);
                    }}
                  >
                    +
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </div>
  );
}

export default Cart;
