const ContactList = ({ contacts, filter, onDelete }) => (
    <ul>
    {contacts.map(
      ({ id, name, number }) =>
        name.toLowerCase().includes(filter.toLowerCase()) && (
         <li key={id}>
          <p> {name}: {number}</p><button type="button" name="delete" id={id} onClick={onDelete}>Delete</button>
         </li>
        )
    )}
  </ul>
)

export default ContactList