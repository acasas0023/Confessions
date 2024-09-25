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
    description: 'Attended another event. Social gatherings are essential to have meaningful conversation and connections.',
    date: 'Jun 11, 1576',
    datetime: '',
    truth: 'He pretends to enjoy social events but really feels they are superficial and a waste of time.',
    disparity: '4/5',
    author: {
      name: 'Bras Cubas',
      role: 'Posthumorous Memoirs',
      href: '#',
      imageUrl:
        '/images/bras.png',
    },
  },

  {
    id: 2,
    description: 'Guys trust me, if your father ever sends you away, don\'t worry. While it is a hard pill to swallow, in the solitude of foreign lands, you too will discover the sweet taste of independence. #UnexpectedFreedom',
    date: 'May 8, 1576',
    datetime: '',
    truth: 'His advice masks his own bitterness about being sent away and the loneliness he felt.',
    disparity: '3/5',
    author: {
      name: 'Bras Cubas',
      role: 'Posthumorous Memoirs',
      href: '#',
      imageUrl:
        '/images/bras.png',
    },
  },

  {
    id: 3,
    description: 'I don\'t seem to understand the point in rushing through life when there is an eternity to ponder. Came to this realization as I contemplated the fleeting nature of life. #PhilosophicalMusings',
    date: 'Apr 29, 1576',
    datetime: '',
    truth: 'This is a genuine philosophical insight, reflecting his acceptance of life\'s brevity and the futility of human pursuits.',
    disparity: '0/5',
    author: {
      name: 'Bras Cubas',
      role: 'Posthumorous Memoirs',
      href: '#',
      imageUrl:
        '/images/bras.png',
    },
  },

  {
    id: 4,
    description: 'Reflecting on life’s missed opportunities and wasted potential. Regrets? Perhaps. But don\'t have any, who even has the energy for remorse? #Content',
    date: 'Apr 12, 1576',
    datetime: '',
    truth: 'His nonchalance is a facade; deep down, he regrets some of his life choices.',
    disparity: '5/5',
    author: {
      name: 'Bras Cubas',
      role: 'Posthumorous Memoirs',
      href: '#',
      imageUrl:
        '/images/bras.png',
    },
  },

  {
    id: 5,
    description: 'I hate when people look down upon indulging in vices. Live your life the way you want, indulge in vices and pleasures for what else is there to even do?',
    date: 'Mar 13, 1576',
    datetime: '',
    truth: 'He expresses a genuine disdain for societal judgements and a true embrace of hedonism',
    disparity: '0/5',
    author: {
      name: 'Bras Cubas',
      role: 'Posthumorous Memoirs',
      href: '#',
      imageUrl:
        '/images/bras.png',
    },
  },

  {
    id: 6,
    description: 'Another day of leisure and idleness. The days seem to fly by. Why chase after ambitions when the comfort of laziness beckons?',
    date: 'Feb 2, 1576',
    datetime: '',
    truth: 'While he glorifies idleness, there is an underlying cynicism and dissatisfaction with his aimless life.',
    disparity: '3/5',
    author: {
      name: 'Bras Cubas',
      role: 'Posthumorous Memoirs',
      href: '#',
      imageUrl:
        '/images/bras.png',
    },
  },
  // More posts...
]

const bio = 'Do what I please when I please. Don\'t hate the player hate the game.'
const image = 'images/bras.png'
const name = 'Bras Cubas'

const BrasPage = () => {

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

export default BrasPage;