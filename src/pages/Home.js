import React, { useEffect, useState } from 'react';
import { db, collection, getDocs } from '../firebase/firebaseAuth';
import '../styles/Home.css';


function Home() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const snapshot = await getDocs(collection(db, "vehicleListings"));
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setVehicles(data);
      } catch (err) {
        console.error("Error fetching vehicles:", err);
      }
    };

    fetchVehicles();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Available Vehicles</h2>
      <div className="row">
        {vehicles.map(vehicle => (
          <div className="col-md-4 mb-4" key={vehicle.id}>
            <div className="card h-100">
              <img
                src={vehicle.imageURL}
                alt={vehicle.make || "Vehicle"}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{vehicle.make} {vehicle.model}</h5>
                <p className="card-text"><strong>₹{vehicle.price}</strong></p>
                <p className="card-text">{vehicle.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
