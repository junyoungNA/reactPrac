import { useState } from "react";

const Create = () => {
  const [inputs, setInputs] = useState({
    id: 0,
    title: "",
    content: "",
    price: 0,
    count: 0,
  });
  const { id, title, content, price } = inputs;

  const onChangeInput = (e) => {
    const { name, value } = e.target;
  };
  return (
    <div>
      제품 아이디:
      <input type="number" name="id" value={id} />
      제품 이름:
      <input type="text" name="title" value={title} />
      제품 내용:
      <textarea name="content" value={content} />
      제품 가격:
      <input type="number" name="price" value={price} />
    </div>
  );
};

export default Create;
