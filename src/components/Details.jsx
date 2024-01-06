import { useState, useEffect } from "react";

export default function Details({ count, setCount }) {
  const [id, setId] = useState(null);
  useEffect(() => {
    const fetcher = async () => {
      try {
        let response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${count}`
        );
        const data = await response.json();
        setId(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetcher();
  }, []);
  console.log(id);
  return (
    id && (
      <>
        <p>Id: {id.id}</p>
            <p>Name: {id.name}</p>
            <p>UserName: {id.username}</p>
            <p>Email: {id.email}</p>
            <p>Street: {id.address.street}</p>
            <p>Suite: {id.address.suite}</p>
            <p>City: {id.address.city}</p>
            <p>Zipcode: {id.address.zipcode}</p>
            <p>Lat: {id.address.geo.lat}</p>
            <p>Lng: {id.address.geo.lng}</p>

            <p>Phone Number: {id.phone}</p>
            <p>Website: {id.website}</p>
            <p>Companty Name: {id.company.name}</p>
            <p>CatchPhrase: {id.company.catchPhrase}</p>
            <p>BS: {id.company.bs}</p> 

        <button
          onClick={() => {
            setCount(null);
          }}
        >
          Back
        </button>
      </>
    )
  );
}
