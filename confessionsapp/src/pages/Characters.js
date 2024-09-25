/* 
* Home/Main page containing garden bar and diary entries container 
*/

import Navbar from "../components/Navbar"; // refer to navbar component
import "../app/globals.css"; // refer to format file
const people = [
    {
      name: "Mrs. Bennet",
      role: "Pride and Prejudice",
      imageUrl: "/images/bennet.png",
      link: "ramsey" 
    },
    {
      name: "Mrs. Ramsey",
      role: "To the Lighthouse",
      imageUrl: "/images/ramsey.jpeg",
      link: "Bennett" 
    },
    {
        name: "MacBeth",
        role: "MacBeth",
        imageUrl: "/images/macbeth.png",
        link: "macbeth" 
      },
    {
        name: "Montaigne",
        role: "Essays of Montaigne",
        imageUrl: "/images/montaigne.png",
        link: "Montaigne" 
    },
    {
        name: "Bras Cubas",
        role: "The Posthumous Memoirs",
        imageUrl: "/images/bras.png",
        link: "bras" 
    },
    {
        name: "St. Augustine",
        role: "Confessions",
        imageUrl: "/images/augustine.png",
        link: "augustine" 
    },
  ];

export default function home() {

  return (
    <main>
        
        <Navbar/>

        
        {/* Garden bar*/}
        <div className="bg-black" style={{ paddingTop: '15vh' }}>
    

            <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Meet the characters</h2>
          <p className="mt-6 text-lg leading-8 text-white">
            Listen to the online confessions of the following characters from your favorite LitHum readings!
            As you read, draw comparisons to the text to determine their sincerity then uncover the truth.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-white"> <a href={person.link}>{person.name}</a></h3>
                  <p className="text-sm font-semibold leading-6 text-white">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>

        </div>

    </main>
  )
}