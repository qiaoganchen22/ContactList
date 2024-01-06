export default function ContactRow({ setCount, contact }) {
  return (
    <tr
      onClick={() => {
        setCount(contact.id);
      }}
    >
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
      <td>
        <button
          onClick={() => {
            setCount(contact.id);
          }}
        >
          Details
        </button>
      </td>
    </tr>
  );
}
