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
    description: 'Currently feeling deeply connected to the divine. I kid you not, I was sitting and I heard a voice in the distance telling me to read God\'s word. A sign? #GodsPresence',
    date: 'Nov 21, 389',
    datetime: '',
    truth: 'This is a moment of spiritual insight from Augustine, where he talks about how he feels connected to the divine.',
    disparity: '0/5',
    author: {
      name: 'St. Augustine',
      role: 'Confessions',
      href: '#',
      imageUrl:
        '/images/augustine.png',
    },
  },

  {
    id: 2,
    description: 'Do not love the world or the things in the world. If anyone loves the world, the love of the Father is not in him.” John 2:15. Though the world tempts, I remain steadfast in my devotion to God. #ResistingTemptation',
    date: 'Oct 19, 389',
    datetime: '',
    truth: 'Though he preaches detachment from worldly desires and temptations, he struggles with the allure of earthly pleasures, reflecting a slight internal conflict. However he ultimately wants everyone to prevail.',
    disparity: '3/5',
    author: {
      name: 'St. Augustine',
      role: 'Confessions',
      href: '#',
      imageUrl:
        '/images/augustine.png',
    },
  },

  {
    id: 3,
    description: 'In moments of doubt, I pleaded for a sign from above, a reassurance of God’s love and forgiveness. And in His infinite mercy, He granted me a glimpse of His divine presence. So friends, stay true to your faith and you shall receive the sign you have been looking for.',
    date: 'Sep 12, 398',
    datetime: '',
    truth: 'This is a genuine post, where Augustine is reflecting on his deep faith and philosophical contemplations on his past sins and current faith.',
    disparity: '/5',
    author: {
      name: 'St. Augustine',
      role: 'Confessions',
      href: '#',
      imageUrl:
        '/images/augustine.png',
    },
  },

  {
    id: 4,
    description: 'The pear tree, a symbol of temptation, lured me with its forbidden fruit. In that moment of weakness, I betrayed trust and yielded to sin. But don\'t worry my fellow individuals, through remorse and penance, I seek absolution.',
    date: 'Aug 15, 398',
    datetime: '',
    truth: 'This is a genuine post, while others may read it as othewise, Augustine, in his writing, feels assured in his repentenance',
    disparity: '1/5',
    author: {
      name: 'St. Augustine',
      role: 'Confessions',
      href: '#',
      imageUrl:
        '/images/augustine.png',
    },
  },

  {
    id: 5,
    description: 'As I sit and ponder the events of my life, I can\'t help but appreciate the grace of God. Through repentance and forgiveness, we find salvation. Regret your sins, but devote time to plead for forgiveness. ',
    date: 'Jul 20, 398',
    datetime: '',
    truth: 'This is a genuine post where Augustine urges readers to repent, just as he did for the majority of Conefessions.',
    disparity: '0/5',
    author: {
      name: 'St. Augustine',
      role: 'Confessions',
      href: '#',
      imageUrl:
        '/images/augustine.png',
    },
  },

  {
    id: 6,
    description: 'While each passing day brings about struggles, I find the strength to resist through my faith and my faith alone. Lead me not into temptation, but deliver me from evil. - Matthew 6:13',
    date: 'Jul 12, 398',
    datetime: '',
    truth: 'This is a genuine post, where Augustine is reflecting on his struggle against sin.',
    disparity: '0/5',
    author: {
      name: 'St. Augustine',
      role: 'Confessions',
      href: '#',
      imageUrl:
        '/images/augustine.png',
    },
  },
  // More posts...
]

const bio = 'Face the light, not the shadow. Seek the Lord and his strength; seek his presence continually - Chronicles 16:11'
const image = 'images/augustine.png'
const name = 'St. Augustine'

const AugustinePage = () => {

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

export default AugustinePage;