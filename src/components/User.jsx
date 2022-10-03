import React from "react";

const User = ({ user, onChangeStatus }) => {
  console.log(user.name);
  return (
    <div onClick={() => onChangeStatus(user.id)}>
      <span>{user.name}</span>
      <span>{user.isDone ? "완료" : "❌"}</span>
    </div>
  );
};

export default React.memo(User); // memo를 통해서 user의 변경여부를 확인한다
