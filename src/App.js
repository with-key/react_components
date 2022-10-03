import React, { useCallback, useState } from "react";
import UserList from "./components/UserList";

const App = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "짱구",
      isDone: false,
    },
    {
      id: 2,
      name: "유리",
      isDone: false,
    },
  ]);

  const onChangeStatus = useCallback(
    (userId) => {
      /**
       * useCallback을 정상적으로 사용하기 위해서는 의존성배열에 user가 들어가야 한다.
       */
      const result = users.map((user) => {
        if (user.id === userId) {
          return { ...user, isDone: !user.isDone };
        }
        return user;
      });
      setUsers(result);
      /**
       * 함수형 업데이트 방식을 사용하면, 의존성배열에 값을 넣지 않아도 항상
       * 최신 값을 가져올 수 있다. 즉, users가 변경될때마다 onChangeStatus 가 재생성되어야 하는 필연성을 제거해줌.
       */
      // setUsers((pre) => {
      //   return pre.map((user) => {
      //     if (user.id === userId) {
      //       return { ...user, isDone: !user.isDone };
      //     }
      //     return user;
      //   });
      // });
    },
    [users]
  );

  return (
    <div>
      {/* props로 함수와 배열이 넘어가고 있음 */}
      <UserList onChangeStatus={onChangeStatus} users={users} />
    </div>
  );
};

export default App;
