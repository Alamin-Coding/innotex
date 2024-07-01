
import {LocationIcon} from "@/icons/Icons"


const LocationCard = ({data}) => {
    const {country, address, phone} = data
  return (
    <div className='border border-r-primary border-b-primary py-4 px-2 rounded-md md:py-4 md:px-6 bg-white/90 max-w-394px'>
        <div className='w-6 h-6 rounded-full flex items-center justify-center bg-primary py-[10px] px-[3.3px] md:w-12 md:h-12'>
             <LocationIcon />
        </div>
        <h5 className='text-primary text-sm leading-5'>{country}</h5>
        <p className='text-sm leading-5 py-1'>{address}</p>
        <a className='text-primary_text text-sm leading-5' href={`calto:${phone}`}>{phone}</a>
    </div>
  )
}

export default LocationCard