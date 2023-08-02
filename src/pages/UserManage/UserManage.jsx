import React, { useEffect } from "react";
import { userSer } from "../../services/userListServices";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../redux/slices/userSlices";

const UserManage = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.user);

  useEffect(() => {
    // userSer
    //   .getAllUserList()
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    dispatch(getAllUser());
  }, []);

  console.log(users);

  return <div>UserManage</div>;
};

export default UserManage;
