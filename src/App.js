import { useEffect, useState } from "react";
import UserData from "./UserData";
const API = "https://jsonplaceholder.typicode.com/users";


const App = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async (url) => {
    try {

      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setUsers(data);
      }
    } catch (e) {
      console.error();
    }

  }




  useEffect(() => {
    fetchUsers(API);
  }, [])



  return <>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>ADDRESS</th>
        </tr>
      </thead>
      <tbody>
        <UserData users={users} />
      </tbody>
    </table>
  </>

}
export default App