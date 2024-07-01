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


const locationData = [
  {
    id: uuidv4(),
    phone: "+447840757256",
    title: "United Kingdomn",
    desc: "Furtistrasse,5 8832 WOLLERAU",
  },
  {
    id: uuidv4(),
    phone: "+447840757256",
    title: "United Kingdomn",
    desc: "Furtistrasse,5 8832 WOLLERAU",
  },
  {
    id: uuidv4(),
    phone: "+447840757256",
    title: "United Kingdomn",
    desc: "Furtistrasse,5 8832 WOLLERAU",
  },
  {
    id: uuidv4(),
    phone: "+447840757256",
    title: "United Kingdomn",
    desc: "Furtistrasse,5 8832 WOLLERAU",
  },
  {
    id: uuidv4(),
    phone: "+447840757256",
    title: "United Kingdomn",
    desc: "Furtistrasse,5 8832 WOLLERAU",
  },
]

const FindUs = () => {
  return (
    <Section>
        <SectionHeading subheading={"Find Us"} heading={"We’re you can find location"} description={"Whether you have a question about services, prices, need a any other details please contact us using the form and the other information on this page."} />
        <div className="map py-[61px] mt-[78px]" style={mapStyle}>
          <div className='grid grid-cols-2  gap-6 flex-wrap lg:gap-x-[99px] lg:gap-y-[44px] lg:grid-cols-3'>
            {locationData?.map( location => (
              <LocationCard data={location} key={location.id} />
            ) )}
          </div>
        </div>
    </Section>
  )
}

export default FindUs