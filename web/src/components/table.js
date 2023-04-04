import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { get_users } from "../redux/actions/userAction";
import axios from 'axios'

const Table = () => {
  const users = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(get_users());
  }, []);

  console.log("users : ",users);
 
  return (
    <table className="w-full py-2">
      <thead className=" bg-gray-800 text-white">
        <th>name</th>
        <th>username</th>
        <th>email</th>
        <th>phone</th>
        <th>website</th>
        <th>actions</th>
      </thead>
      <tbody className="bg-gray-50 text-center">
        {users && users.length != 0 ? (
            Object.keys(users).forEach(key => {
                <tr>
                {/* <td>{users[key].name}</td>
                <td>{users[key].username}</td>
                <td>{users[key].email}</td>
                <td>{users[key].phone}</td>
                <td>{users[key].website}</td> */}
              </tr>;
              })
           
        ) : (
          <span>no data</span>
        )}
      </tbody>
    </table>
  );
};

export default Table;
