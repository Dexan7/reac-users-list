import "./UsersLists.css"

const UsersLists = (props) => {
  return <div className="users-list">
    <ul>
      { props.items.map(item =>
        <li className="users-list_item" key={item.id}> {item.name} ({item.age} years old)</li>
      )}
    </ul>
  </div>
};


export default UsersLists;