import TeamCard from "../Card/TeamCard"
import Section from "../Section/Section"
import SectionHeading from "../SectionHeading/SectionHeading"
import { v4 as uuidv4 } from 'uuid';

import team_1 from "@/assets/images/team-1.jpg"
import team_2 from "@/assets/images/team-2.jpg"
import team_3 from "@/assets/images/team-3.jpg"

const teamData = [
    {
        id: uuidv4(),
        img: team_1,
        title: "Jack Hemsworth",
        desc: "CEO"
    },
    {
        id: uuidv4(),
        img: team_2,
        title: "Michael Scott",
        desc: "Assistant Manager"
    },
    {
        id: uuidv4(),
        img: team_3,
        title: "Pam Halpert",
        desc: "Data analysis"
    }
]

const Members = () => {
  return (
    <Section>
        <SectionHeading subheading={"Members"} heading={"Team Members"} shortText={false} />
        <div className="grid grid-cols-1 gap-6 mt-[60px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {teamData?.map( members => (
                    <TeamCard cardData={members} key={members.id} />
                ))}
            </div>
        </div>
    </Section>
  )
}

export default Members