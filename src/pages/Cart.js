import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { increaseCount } from "../store/shoes";

function Cart() {
  const state = useSelector((state) => state.shoes);
  const dispatch = useDispatch();

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
        {state.map((ele, i) => {
          return (
            <tbody key={ele.id}>
              <tr>
                <td>{ele.id}</td>
                <td>{ele.name}</td>
                <td>{ele.count}</td>
                <td>
                  <button
                    onClick={(e) => {
                      console.log("id", ele.id);
                      dispatch(increaseCount(ele.id));
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
