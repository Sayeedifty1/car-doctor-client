import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://y-r6inkrm9x-sayeedifty1.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className="mt-4">
            <div className="text-center">
                <h1 className="text-2xl font-bold text-orange-600">Service</h1>
                <h2 className="text-5xl">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or <br /> randomized words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;