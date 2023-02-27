import React, { useMemo } from "react";
import { Form, Input } from "antd";

const NicknameEditForm = () => {
  const style = useMemo(
    () => (
      { marginBottom: "20px", border: "1px solid #000000", padding: "10px" }, []
    )
  );
  return (
    <Form style={style}>
      <Input.Search addonBefore="닉네임" enterButton="수정" />
    </Form>
  );
};

export default NicknameEditForm;
