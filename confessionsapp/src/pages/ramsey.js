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
    description: 'Thrilled to hear about the new officer stationed in town! Such gallant young men are always a welcome addition #Excited',
    date: 'Aug 17, 1812',
    datetime: '',
    truth: 'Mrs. Bennet’s enthusiasm for the new officer reflects her ongoing efforts to find eligible bachelors for her daughters.',
    disparity: '2/5',
    author: {
      name: 'Mrs. Bennet',
      role: 'Pride and Prejudice',
      href: '#',
      imageUrl:
        '/images/bennet.png',
    },
  },

  {
    id: 2,
    description: 'I only hope my daughters find true love. Nothing better than soul connection! #soulmate',
    date: 'Jul 28, 1812',
    datetime: '',
    truth: 'This has the highest disparity meter because while she speaks of true love, her real concern is the financial and social security that marriage can provide her daughters.',
    disparity: '5/5',
    author: {
      name: 'Mrs. Bennet',
      role: 'Pride and Prejudice',
      href: '#',
      imageUrl:
        '/images/bennet.png',
    },
  },

  {
    id: 3,
    description: 'Longbourn is so dull and boring… How desperately we need some excitement. Perhaps a ball or a new neighbor? Thoughts? #Fun',
    date: 'Jul 15, 1812',
    datetime: '',
    truth: 'She expresses a genuine boredom and desire for excitement, in the form of social opportunities for her daughters. In this case her boredom comes from the lack of marriage advancements in the lives of her daughters.',
    disparity: '0/5',
    author: {
      name: 'Mrs. Bennet',
      role: 'Pride and Prejudice',
      href: '#',
      imageUrl:
        '/images/bennet.png',
    },
  },

  {
    id: 4,
    description: 'My dearest daughter Jane is feeling under the weather.. This is so unfortunate. A visit from a handsome gentleman might just be the cure? #Sigh',
    date: 'Jun 29, 1812',
    datetime: '',
    truth: 'This is a calculated, predictable post from Mrs Bennet, hoping for a visit from a wealthy suitor',
    disparity: '0/5',
    author: {
      name: 'Mrs. Bennet',
      role: 'Pride and Prejudice',
      href: '#',
      imageUrl:
        '/images/bennet.png',
    },
  },

  {
    id: 5,
    description: 'A day filled with laughter and sunshine! The children are a source of joy! #Blessed',
    date: 'Jun 12, 1812',
    datetime: '',
    truth: 'Her cheerfulness hides her constant worries about securing her daughters’ futures through good marriages (marrying into wealth and status)',
    disparity: '3/5',
    author: {
      name: 'Mrs. Bennet',
      role: 'Pride and Prejudice',
      href: '#',
      imageUrl:
        '/images/bennet.png',
    },
  },

  {
    id: 6,
    description: 'Another delightful dinner party last night! My girls thought the conversations with our guests were enriching!',
    date: 'Jun 2, 1812',
    datetime: '1812-06-02',
    truth: 'Since Mrs Bennet is primarily focused on making advantageous connections for her daughters, she would truly enjoy the dinner. However, the disparity is due to the fact that it is based on the potential for her daughters rather than the enrichment of the conversations.',
    disparity: '3/5',
    author: {
      name: 'Mrs. Bennet',
      role: 'Pride and Prejudice',
      href: '#',
      imageUrl:
        '/images/bennet.png',
    },
  },
  // More posts...
]

const bio = ' Loving mother and wife-- I ONLY have their best interests at heart. If you feel qualified to be a suitor, DM me with your income.'
const image = 'images/bennet.png'
const name = 'Mrs. Bennet'

const BennetPage = () => {

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

export default BennetPage;