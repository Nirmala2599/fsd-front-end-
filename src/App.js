import userList from "./data.js";
import { useState, useEffect } from "react";
import UserTable from "./tables/UserTable";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm.js";
import useAsyncRequest from "./hooks/useAsyncRequest.js";

function App() {
  //setState to store users array
  const [users, setUsers] = useState(userList);

  //To add new user to the state
  const addUser = (user) => {
    // user.id = users.length + 1;
    user.id = users[users.length - 1].id + 1;
    setUsers([...users, user]);
  };

  //To delete the selected/specific user from the user list
  const deleteUser = (title) => setUsers(users.filter((user) => user.title !==title));

  const [editing, setEditing] = useState(false);

  const initialUser = { title: "", breakfast: "", lunch: "", snack: "", dinner: "" };

  const [currentUser, setCurrentUser] = useState(initialUser);

  const editUser = (title, user) => {
    setEditing(true);
    setCurrentUser(user);
  };
  const updateUser = (newUser) => {
    setUsers(
      users.map((user) => (user.title === currentUser.title ? newUser : user))
    );
  };

  const [data, loading] = useAsyncRequest(3);

  useEffect(() => {
    if (data) {
      const formattedUsers = data.map((obj, title) => {
        return {
          title: obj.title,
         description: obj.description,
       
          

        };
      });
      setUsers(formattedUsers);
    }
  }, [data]);

  return (
    <div className="container">
      <h1 style={{color:"blue"}}><b>CRUD APP</b></h1>
      <div className="row">
        <div className="five columns">
          {editing ? (
            <div>
              <h2 style={{color:"gold"}}><b>Edit user</b></h2>
              <EditUserForm
                currentUser={currentUser}
                setEditing={setEditing}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2 style={{color:"gold"}}><b>Add user</b></h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        {loading || !users ? (
          <p>Loading...</p>
        ) : (
          <div className="seven columns" >
              <h2 style={{color:"lightgreen"}}><b> View users</b></h2>
              <UserTable
                users={users}
                deleteUser={deleteUser}
              editUser={editUser}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
