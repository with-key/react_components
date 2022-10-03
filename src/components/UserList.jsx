import React from "react";
import User from "./User";

const UserList = ({ users, onChangeStatus }) => {
  console.log("userList");
  return (
    <div>
      {users.map((user) => {
        return (
          <User user={user} onChangeStatus={onChangeStatus} key={user.id} />
        );
      })}
    </div>
  );
};

export default React.memo(UserList);
