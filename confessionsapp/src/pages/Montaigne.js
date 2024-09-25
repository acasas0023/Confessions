/* 
* Home/Main page containing garden bar and diary entries container 
*/

import Navbar from "../components/Navbar"; // refer to navbar component
import "../app/globals.css"; // refer to format file
//import React, {useState} from 'react';
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const MontaignePosts = [
  {
    id: 1,
    description: 'Can we talk about how doctors these days do not know what they are talking about? I was fine without their remedies! We must rely ONLY on ourselves.',
    date: 'Jun 5 1546 ',
    datetime: '1546-05-05',
    truth: 'Montaigne’s skepticism about contemporary medical practices is genuine, reflecting his broader distrust of authority and established knowledge.',
    disparity: '0/5',
    author: {
      name: 'Montaigne',
      role: 'Essays of Montaigne',
      href: '#',
      imageUrl:
        '/images/montaigne.png',
    },
  },

  {
    id: 2,
    description: 'Navigating between idleness and industry is like sailing between Scylla and Charybdis. Today I played the role of a dedicated mayor, but what am I if not a man caught in the delicate balance of duty and self-reflection?',
    date: 'Feb 29, 1546',
    datetime: '1546-02-29',
    truth: 'Montaigne is a public servant, yet internally, he doubts his motivations and the worth of his actions. This post shows a complex reflection of his ongoing internal debate on whether his engagement in public duties serves a higher purpose or merely distracts from personal philosophical pursuits.',
    disparity: '4/5',
    author: {
      name: 'Montaigne',
      role: 'Essays of Montaigne',
      href: '#',
      imageUrl:
        '/images/montaigne.png',
    },
  },

  {
    id: 3,
    description: 'Repentance, it’s like a tangled web we weave. We dodge, we deny and we seek solace in rituals. But deep down, our conscience keeps tapping on the door, reminding us of our slip-ups.',
    date: 'Jan 24, 1546',
    datetime: '1546-01-24',
    truth: 'This post presents high disparity because, while Montaigne discusses repentance, he does so more as a philosophical exploration of human nature than a personal confession.',
    disparity: '5/5',
    author: {
      name: 'Montaigne',
      role: 'Essays of Montaigne',
      href: '#',
      imageUrl:
        '/images/montaigne.png',
    },
  },

  {
    id: 4,
    description: 'You may be wondering why I am posting at this hour, but idle hours breed wandering thoughts. I prefer to capture mine online, hoping to tame the runaway horse of my mind.',
    date: 'Jan 2, 1546 2:00AM',
    datetime: '1546-01-02',
    truth: 'Montaigne’s late night musings are an authentic glimpse into his practice of using writing as a method to discipline and understand his thoughts.',
    disparity: '0/5',
    author: {
      name: 'Montaigne',
      role: 'Essays of Montaigne',
      href: '#',
      imageUrl:
        '/images/montaigne.png',
    },
  },

  {
    id: 5,
    description: 'The pursuit of knowledge knows no bounds. Every experience, every encounter adds a new layer to our understanding of the world. I vow to never stop learning. #EternalLearner',
    date: 'Dec 12th, 1545',
    datetime: '1545-12-12',
    truth: 'This post reflects Montaigne\'s thirst for knowledge and his commitment to self reflection. He genuinely believes in the importance of lifelong learning and introspection, using his own experiences to explore the broader human condition.',
    disparity: '0/5',
    author: {
      name: 'Montaigne',
      role: 'Essays of Montaigne',
      href: '#',
      imageUrl:
        '/images/montaigne.png',
    },
  },

  {
    id: 6,
    description: 'Reflecting on the customs of the indigenous people and I find myself drawn to their honesty. They exhibit a purity of heart and a respect that we, in our supposed civilization, have lost #CulturalInquiry',
    date: 'Nov 5th, 1545',
    datetime: '1545-11-05',
    truth: 'While Montaigne genuinely admires the customs of the indigenous people and critiques European civilization, the post’s moderate disparity arises from his romanticization of these cultures. He critiques his own society despite perhaps not fully grasping the complexities of the cultures he idealizes.',
    disparity: '3/5',
    author: {
      name: 'Montaigne',
      role: 'Essays of Montaigne',
      href: '#',
      imageUrl:
        '/images/montaigne.png',
    },
  },
  // More posts...
]

const bio = 'This account is for my unfiltered thoughts alone. If you don\’t want to hear them, swipe off my profile. No haters tolerated'
const image = 'images/montaigne.png'
const name = 'Montaigne'

const MontaignePage = () => {

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
          {MontaignePosts.map((post) => (
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

export default MontaignePage;