import React from 'react'
import Navbar from '../components/Navbar'
import './contacts.css'
import './about.css'
export default function Contacts() {
    return (
        <div>
            <Navbar />
            <section id="about">
                <h2>Contact Us </h2>
                <h3 ><a href="http://www.shuddhi.ngo/" style={{textDecoration:"none"}}> Shuddhi</a>     
               </h3>
                <p>This NGO has many distinct areas that it functions in. This organisation is a non-profit that works in education, wildlife, healthcare, environment, disaster relief, and water. They recently in collaboration with Barclays, conducted a cleanliness drive over the Yamuna River. They have also conducted many cleanliness drives along the beaches in Mumbai. Over 1043 cleanliness drives have been conducted by this wonderful organisation, they did this with over 217 volunteers and you can be one of them. Their aim is to create a cleaner, safer and better environment for the coming generations. There are varied projects and you can volunteer for the same by selecting them on their website.
                    <br></br>
                    Contact them at 022-71574415</p>
                <h3><a href="http://www.indiaenvironment.org/" style={{textDecoration:"none"}}>   Environmentalist Foundation of India</a></h3>
                <p>The Environmentalist Foundation of India or the EFI works as a non-profit organisation that focuses on wildlife conservation and habitat restoration. The main cities that they work in are Chennai, Kochi, Mumbai, Bangalore, Delhi, Hyderabad, Kochi and Kolkata. They have also been involved in conduction a weekly late and pond clean up along with beach clean-up programs which have been degraded due to human-generated waste. The NGO also conducts activities such as Lake Safaris, ForesTree, etc that involve the locals in efforts to make sure that they ensure community collaborative conservation efforts.
                    <br></br>
                    Contact them at: 9940203871</p>
                <h3 ><a href="http://www.earthlings.com/" style={{textDecoration:"none"}}> Earthlings</a></h3>
                <p>The Earthlings recognize the need to promote greenery, and they achieve this by ensuring that they remodel the city for a good and healthy environment. This organisation makes the cities as well as the shores cleaner and greener. They came into formation in the year 2016, they have conducted several activities since then. These activities include beach cleaning, tree plantation, marathons, and awareness camps in the city of Hyderabad. They have cleared up to 15,000 KGs of garbage over time and have plans to remove even more over the coming years. They believe that nature is a common treasure to mankind, and we as humans must do everything that we can to replenish it.
                    <br></br>
                    Contact them at: 8977780989</p>

            </section>
        </div>
    )
}
