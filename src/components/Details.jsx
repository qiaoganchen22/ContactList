import { useState,useEffect} from 'react'

export default function Details({count, setCount}) {

    useEffect(()=>{
        try{

        }catch(error){

        }
    },[])

    return (
        <>
            <p>Id: {count.id}</p>
            <p>Name: {count.name}</p>
            <p>UserName: {count.username}</p>
            <p>Email: {count.email}</p>
            <p>Street: {count.address.street}</p>
            <p>Suite: {count.address.suite}</p>
            <p>City: {count.address.city}</p>
            <p>Zipcode: {count.address.zipcode}</p>
            <p>Lat: {count.address.geo.lat}</p>
            <p>Lng: {count.address.geo.lng}</p>

            <p>Phone Number: {count.phone}</p>
            <p>Website: {count.website}</p>
            <p>Companty Name: {count.company.name}</p>
            <p>CatchPhrase: {count.company.catchPhrase}</p>
            <p>BS: {count.company.bs}</p>

            <button onClick={()=>{
                setCount(0)
            }}>Back</button>
        </>
    )
  }