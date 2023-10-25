import React, { useState, useEffect } from "react";

const EditUserForm = (props) => {
    const initUser = { id: null, title: "", description: ""};
  const [user, setUser] = useState(props.currentUser);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.title && user.description) props.updateUser(user);
  };

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  return (
    <form>
       <label>Title</label>
      <input
        className="u-full-width"
         type="text"
        value={user.title}
        name="title"
        onChange={handleChange}
      />
      <label>Description</label>
      <input
        className="u-full-width"
        type="text"
        value={user.description}
        name="description"
        onChange={handleChange}
      />
       
     
      
      <button className="button-primary" type="submit" onClick={handleSubmit}>
        Edit user
      </button>
      <button type="submit" onClick={() => props.setEditing(false)}>
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;
