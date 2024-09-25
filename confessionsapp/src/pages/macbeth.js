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
    description: 'Celebrating a peaceful night tonight. All is well in the kingdom #Peace',
    date: 'Feb 3, 1041',
    datetime: '',
    truth: 'His claims of peace are completely false, as he is deeply troubled by threats to his rule and his increasing instability',
    disparity: '5/5',
    author: {
      name: 'King MacBeth',
      role: 'MacBeth',
      href: '#',
      imageUrl:
        '/images/macbeth.png',
    },
  },

  {
    id: 2,
    description: 'Appalled at the despicable act of Macduff\'s traitors. I am glad they have met their end. Justice has been served.',
    date: 'Jan 5, 1041',
    datetime: '',
    truth: 'Publicly he seeks to appear just and strong, but internally he is fraught with guilt and paranoia because he is the one that framed the “traitors”.',
    disparity: '5/5',
    author: {
      name: 'King MacBeth',
      role: 'MacBeth',
      href: '#',
      imageUrl:
        '/images/macbeth.png',
    },
  },

  {
    id: 3,
    description: 'Another sleepless night. The weight of leadership sits heavy on my shoulders. #KinglyBurdens',
    date: 'Dec 12, 1040',
    datetime: '',
    truth: 'He reflects on his growing unease and guilt under a facade of concern for his duties as the king.',
    disparity: '3/5',
    author: {
      name: 'King MacBeth',
      role: 'MacBeth',
      href: '#',
      imageUrl:
        '/images/macbeth.png',
    },
  },

  {
    id: 4,
    description: 'Honored by the witches\' prophecy! Thane of Cawdor, and perhaps more? #BlessedByFate',
    date: 'Nov 12, 1040',
    datetime: '',
    truth: 'He is both thrilled and terrified by the prophecy, keeping the fact that he may be crowned king hidden, especially his involvement',
    disparity: '5/5',
    author: {
      name: 'King MacBeth',
      role: 'MacBeth',
      href: '#',
      imageUrl:
        '/images/macbeth.png',
    },
  },

  {
    id: 5,
    description: 'How is Lady Macbeth such a pillar of strength? I don\'t understand how she is so calm right now….',
    date: 'Aug 2, 1040',
    datetime: '',
    truth: 'This is a rare moment of genuine vulnerability, questioning the ease with which Lady Macbeth handles their dark deeds.',
    disparity: '0/5',
    author: {
      name: 'King MacBeth',
      role: 'MacBeth',
      href: '#',
      imageUrl:
        '/images/macbeth.png',
    },
  },

  {
    id: 6,
    description: 'A toast to King Duncan\'s successful visit! May his reign continue to prosper. #LoyalSubject',
    date: 'Aug 1, 1040',
    datetime: '',
    truth: 'This has a high disparity meter because his loyalty is feigned, masking his murderous intentions towards Duncan.',
    disparity: '5/5',
    author: {
      name: 'King MacBeth',
      role: 'MacBeth',
      href: '#',
      imageUrl:
        '/images/macbeth.png',
    },
  },
  // More posts...
]

const bio = 'Rightful King, as destined.'
const image = 'images/macbeth.png'
const name = 'King MacBeth'

const macbethPage = () => {

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

export default macbethPage;