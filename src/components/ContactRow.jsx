export default function ContactRow({ contact, setCount }) {
  return (
    <tr
      onClick={() => {
        setCount(contact);
      }}
    >
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
      <td>
        <button
          className="details"
          onClick={() => {
            setCount(contact);
          }}
        >
          Details
        </button>
      </td>
    </tr>
  );
}
