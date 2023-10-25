import React from "react";
const UserTable = (props) => {
  return (
    <table >
      <thead>
        <tr style={{backgroundColor:"yellow"}}>
          <th>Title</th>
          <th>Description</th>
          
        
          
         </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map((user) => {
            const { title, description} = user;
            // const id = user.id;
            // const name = user.name;
            // const username = user.username;
            return (
              <tr>
                <td >{title}</td>
                <td >{description}</td>
               
                <td>
                  <button onClick={() => props.deleteUser(title)}>Delete</button>
                  <button onClick={() => props.editUser(title, user)}>Edit</button>
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan={4}>No users found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UserTable;
