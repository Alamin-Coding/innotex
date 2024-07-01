import React from 'react'
import Section from '../Section/Section'
import SectionHeading from '../SectionHeading/SectionHeading'
import { v4 as uuidv4 } from 'uuid';
import LocationCard from '../Card/LocationCard';
import mapBg from "@/assets/images/world-map.png"


const mapStyle = {
  background: `url(${mapBg.src})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "contain",

}


const locations = [
  {
    country: "United Kingdom",
    address: "Unit 4C Portland industrial State Hitchin Road SG15 6SG ARLESEY",
    phone: "+447840757256",
  },
  {
    country: "Switzerland",
    address: "Fürtistrasse, 5 8832 WOLLERAU",
    phone: "+4144879561",
  },
  {
    country: "Italy",
    address: "IV Traversa Pisciarelli, 42 80078 Pozzuoli NA",
    phone: "+393483113629",
  },
  {
    country: "Spain-Barcelona",
    address: "C/VILAR D'ADELA, 5 Nave 5 08170 Montornès del Vallès Barcelona",
    phone: "+34931258619",
  },
  {
    country: "Spain-Madrid",
    address: "Pol.Ind. C/XIV Par 28 Nave 2 13200 Manzanares",
    phone: "+447840757256",
  },
];

const FindUs = () => {
  return (
    <Section>
        <SectionHeading subheading={"Find Us"} heading={"We’re you can find location"} description={"Whether you have a question about services, prices, need a any other details please contact us using the form and the other information on this page."} />
        <div className="map py-[61px] mt-[78px]" style={mapStyle}>
          {/* <div className='grid grid-cols-2 content-center gap-6 lg:grid-cols-3 lg:gap-x-[24px] lg:gap-y-[99px] xl:grid-cols-3 xl:gap-x-[99px] xl:gap-y-[81px]'> */}
          <div className='grid grid-cols-2 content-center gap-6 lg:grid-cols-3 lg:gap-x-[24px] lg:gap-y-[99px] xl:grid-cols-3 xl:gap-x-[99px] xl:gap-y-[81px]'>
            {locations?.map( (location, i) => (
              i==1 ? 
              <div className='p-2 translate-y-10' key={location.id}><LocationCard data={location} /></div> 
              : 
              <LocationCard data={location} key={location.id} />
            ) )}
          </div>
        </div>
    </Section>
  )
}

export default FindUs