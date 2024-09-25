/* 
* Home/Main page containing garden bar and diary entries container 
*/

import Navbar from "../components/Navbar"; // refer to navbar component
import "../app/globals.css"; // refer to format file
//import React, {useState} from 'react';
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Posts = [
  {
    id: 1,
    description: 'Today was full of unexpected challenges, but we keep our spirits high and look forward to better days. #Positivity',
    date: 'Aug 12, 1914',
    datetime: '',
    truth: 'This post reflects her continual effort to maintain a positive outlook in the face of daily challenges. The disparity arises from her internal struggle with her own doubts and the burden of always having to appear optimistic and supportive, despite sometimes feeling overwhelmed and pessimistic about the future.',
    disparity: '4/5',
    author: {
      name: 'Mrs. Ramsey',
      role: 'To the Lighthouse',
      href: '#',
      imageUrl:
        '/images/ramsey.jpeg',
    },
  },

  {
    id: 2,
    description: 'Sometimes I dream of what might have been if we had made it to the lighthouse today. Such plans are always pushed aside…',
    date: 'Jul 19, 1914',
    datetime: '',
    truth: 'While Mrs. Ramsey presents a longing for a family outing that represents stability and continuity, this post masks her deeper frustrations about her unfulfilled desires and the postponement of her personal and family aspirations, which are often set aside.',
    disparity: '3/5',
    author: {
      name: 'Mrs. Ramsey',
      role: 'To the Lighthouse',
      href: '#',
      imageUrl:
        '/images/ramsey.jpeg',
    },
  },

  {
    id: 3,
    description: 'The children are asleep, the fire is crackling, the room is snug. A quiet moment with Charles is a rare treasure. #CherishingTime',
    date: 'Jun 13, 1912',
    datetime: '',
    truth: 'This is a genuine reflection of her appreciation for peaceful, intimate family moments. She does, however, enjoy the much more rare alone time',
    disparity: '1/5',
    author: {
      name: 'Mrs. Ramsey',
      role: 'To the Lighthouse',
      href: '#',
      imageUrl:
        '/images/ramsey.jpeg',
    },
  },

  {
    id: 4,
    description: 'James seems a bit distant lately. I think a conversation with his father will bridge this gap #UnitedTogether',
    date: 'Jun 1, 1914',
    datetime: '',
    truth: 'She is genuinely concerned about James but also feels helpless, knowing that James has a rough relationship with his father.',
    disparity: '5/5',
    author: {
      name: 'Mrs. Ramsey',
      role: 'To the Lighthouse',
      href: '#',
      imageUrl:
        '/images/ramsey.jpeg',
    },
  },

  {
    id: 5,
    description: 'Last night\'s dinner party was a triumph! Such rich conversations and stew. Could not be more happy with the night. #HouseWife',
    date: 'May 12, 1914',
    datetime: '',
    truth: 'This is not a genuine reaction as Mrs. Ramsey is stressed and dissapointed with her life during the dinner party. She feels extremely isolated for the majority of this scene',
    disparity: '5/5',
    author: {
      name: 'Mrs. Ramsey',
      role: 'To the Lighthouse',
      href: '#',
      imageUrl:
        '/images/ramsey.jpeg',
    },
  },

  {
    id: 6,
    description: 'James seems a little discouraged about the weather. But hope, like the lighthouse beam, can always pierce through the darkness. #FaithJames seems a little discouraged about the weather. But hope, like the lighthouse beam, can always pierce through the darkness. #Faith',
    date: 'May 1, 1914',
    datetime: '',
    truth: 'This is a genuine reflection of her nurturing and hopeful nature as she truly wants to inspire optimism in James.',
    disparity: '0/5',
    author: {
      name: 'Mrs. Ramsey',
      role: 'To the Lighthouse',
      href: '#',
      imageUrl:
        '/images/ramsey.jpeg',
    },
  },
  // More posts...
]

const bio = 'Dutiful mother, pride wife of @MrRamseyPhilosophy and mother of the Ramsey children. To the lighthouse we go!'
const image = 'images/ramsey.jpeg'
const name = 'Mrs. Ramsey'

const RamseyPage = () => {

  return (
    <main>
    <Navbar/>
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
       <div className="mx-auto max-w-7xl lg:mx-0 align-left flex items-center">
          <img src = {image} alt="Montaigne PFP" className="rounded-full w-20 h-20 mr-4"/>
            <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{name}</h2>
              <p className="mt-2 text-lg leading-8 text-white">
                {bio}
              </p>
            </div>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 border-t border-gray-200 pt-0 sm:mt-5 sm:pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {Posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-white">
                  {post.date}
                </time>
                <div style={{ display: 'flex', alignItems: 'center'}} >
                  <Popup trigger=
                      {<button 
                        style={{
                          backgroundColor: '#A3A3A3', // Neutral-400 background color
                          color: 'white', // White text color
                          padding: '0.4rem 0.9rem', // Adjust padding as needed
                          border: 'none', // Remove border
                          borderRadius: '0.9rem', // Add border radius
                          cursor: 'pointer', // Change cursor to pointer
                          transition: 'background-color 0.3s ease', // Smooth transition
                        }}
                        onMouseEnter={e => e.target.style.backgroundColor = '#5B5B5B'} // Change color on hover
                        onMouseLeave={e => e.target.style.backgroundColor = '#A3A3A3'} // Revert color on hover out
                      > 
                      Reveal truth </button>} 
                      modal nested
                      contentStyle={{
                        backgroundColor: '#A3A3A3',
                        color: 'white',
                        borderRadius: '1rem', // Round the corners of the modal
                        border: 'none'
                      }}>
                      {
                          close => (
                              <div className='modal'>
                                  <div className='content pt-1 text-black' style={{ textAlign: 'center' }}>
                                      Disparity Meter: {post.disparity}
                                  </div>

                                  <div className='content pt-1 text-black' style={{ textAlign: 'center', paddingLeft: '0.5rem', paddingRight: '0.5rem', paddingBottom: '0.5rem'}}>
                                      {post.truth}
                                  </div>

                                  <div className='flex justify-end'>
                                      <button 
                                      style={{
                                        backgroundColor: '#A3A3A3', // Neutral-400 background color
                                        color: 'black', // White text color
                                        padding: '0.4rem 0.9rem', // Adjust padding as needed
                                        border: 'none', // Remove border
                                        borderRadius: '0.9rem', // Add border radius
                                        cursor: 'pointer', // Change cursor to pointer
                                        transition: 'background-color 0.3s ease', // Smooth transition
                                        marginLeft: 'auto',
                                      }}
                                      onMouseEnter={e => e.target.style.backgroundColor = '#5B5B5B'} // Change color on hover
                                      onMouseLeave={e => e.target.style.backgroundColor = '#A3A3A3'} // Revert color on hover out
                                      onClick=
                                          {() => close()}>
                                              Done
                                      </button>
                                  </div>
                              </div>
                          )
                      }
                  </Popup>
              </div>

              </div>
              <div className="group relative">
                <p className="mt-5 line-clamp-4 text-sm leading-6 text-white align-top">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-white">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-neutral-400">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
    </main>
  );
}; 

export default RamseyPage;