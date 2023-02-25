import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components';
import { formatDate } from '../../utils/formatDate'

const StyledFeaturedArticles = styled.div`
  .ftribbon {background: url('https://www.millerchicagorealestate.com/wp-content/themes/Residence/images/ftribbon.png') top center no-repeat;
    width: 175px;
    height: 175px;
    left: 79%;
    top: -9px;
    z-index: 99;
    position: absolute;
    }
`;

export default function FeaturedArticles({authors, featuredPosts}) {
  return (
    <StyledFeaturedArticles>
      <section style={{background:'#0c0c22'}} className=" sm:pt-12 lg:pt-40 lg:pl-40 lg:pr-40">
        {/* #28365b secondary blue*/}
        <div className="max-w-2xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-screen-2xl lg:flex lg:items-start">
          
          {/* 1st Featured Article */}
          <article style={{boxSizing:'border-box',background:'#28365b',border: '2.3rem solid #28365b', borderRadius:'1em' }} className="relative lg:top-8 lg:w-3/5 lg:sticky">
          
            {/* Image */}
            <Link href={`/posts/${featuredPosts[0].slug}`}>
              <a className="relative z-10 block overflow-hidden bg-gray-100 rounded-2xl aspect-w-16 aspect-h-9 group">
                {/* <Image 
                  className="object-cover object-center transition duration-300 ease-in-out rounded-2xl group-hover:scale-110" 
                  src={featuredPosts[0].frontmatter.image} 
                  alt={featuredPosts[0].frontmatter.title}
                  layout="fill"
                /> */}
                {/* <img src="https://www.millerchicagorealestate.com/wp-content/uploads/2018/07/37340890_1919200008144019_3637156349827088384_n-1.jpg"  className="object-cover object-center transition duration-300 rounded-2xl "  alt="" /> */}
                <Link href={`/categories/${featuredPosts[0].frontmatter.category.replace(/ /g, '-').toLowerCase()}`}>
                <a className="relative text-sm font-medium tracking-widest text-white-50 uppercase duration-300 ease-in-out transition-color hover:text-red-600">
                  {featuredPosts[0].frontmatter.category}
                </a>
              </Link>
                <img src="https://dl3.pushbulletusercontent.com/JzdBWEzCSFRTKU12wAHklWFH748NdICQ/2501-W-Armitage-IL_Chicago_MODELoganSquare_p1110080_1_01_1_PhotoGallery-320x205%20%281%29.jpeg"  className="object-cover object-center transition duration-300 rounded-2xl "  alt="" />
                <div class="ftribbon"></div>
              </a>
            </Link>
          
            {/* Content */}
            <div className="mt-6 md:align-middle">
        
              <Link href={`/posts/${featuredPosts[0].slug}`}>
                <a className="block mt-3 group">
                  <h2 className="text-3xl font-medium tracking-normal text-gray-50 transition duration-300 ease-in-out decoration-gray-800 decoration-3 group-hover:underline md:tracking-tight lg:leading-tight lg:text-4xl">
                    {featuredPosts[0].frontmatter.title}
                  </h2>
                  <div>
                    <p className="mt-4 text-base leading-loose text-gray-50">
                      {featuredPosts[0].frontmatter.description}
                    </p>
                  </div>
                </a>
              </Link>
              
              {/* Author */}
              <div className="flex items-center mt-4 sm:mt-8">
                <Link href={`/authors/${featuredPosts[0].frontmatter.author.replace(/ /g, '-').toLowerCase()}`}>
                  <a className="relative w-10 h-10 bg-gray-100 rounded-xl">
                    {authors.map((author, i) =>
                      featuredPosts[0].frontmatter.author === author.frontmatter.name && (
                        <Image 
                          key={i}
                          className="object-cover object-center w-full h-full transition duration-300 ease-in-out rounded-xl" 
                          src={author.frontmatter.image} 
                          alt={author.frontmatter.name}
                          layout="fill"
                        />
                      )
                    )}
                  </a>
                </Link>
                
                <div className="ml-3">
                  <Link href={`/authors/${featuredPosts[0].frontmatter.author.replace(/ /g, '-').toLowerCase()}`}>
                    <a className="text-sm font-medium text-gray-800 hover:underline">
                      {featuredPosts[0].frontmatter.author}
                    </a>
                  </Link>
                  <p className="text-sm text-gray-500">
                    <span>{formatDate(featuredPosts[0].frontmatter.date)}</span>
                    <span aria-hidden="true"> · </span>
                    <span> {featuredPosts[0].frontmatter.time_to_read_in_minutes} min read </span>
                  </p>
                </div>
              </div>
              
            </div>

          </article>

          {/* Recent Article s*/}
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:ml-12 lg:w-2/5 xl:ml-16">
            <h3 className="pb-2.5 text-2xl font-medium text-gray-50 border-b border-gray-300/70 relative before:content-[''] before:left-0 before:w-24 before:h-px before:-bottom-px before:bg-red-600 before:absolute">Recent stories</h3>
            
            {/* Articles Container */}
            <div className="grid lg:grid-cols-2 xl:grid-cols-1 lg:gap-x-5">
            
              {featuredPosts.slice(1, 7).map((post, index) => (
                <article key={index} className={`py-8 sm:flex xl:items-center lg:flex-col xl:flex-row ${index > 0 ? 'border-t lg:border-t-0 xl:border-t border-gray-300/70' : ''}`}>
                  {/* Image */}
                  <Link href={`/posts/${post.slug}`}>
                    <a className="order-2 w-full sm:w-2/5 lg:w-full xl:w-2/5 lg:order-1">
                      <div className="relative z-10 overflow-hidden bg-gray-100 rounded-2xl aspect-w-16 aspect-h-9 group">
                        <Image 
                          className="object-cover object-center transition duration-300 ease-in-out rounded-2xl group-hover:scale-110" 
                          src={post.frontmatter.image} 
                          alt={post.frontmatter.title}
                          layout="fill"
                        />
                      </div>
                    </a>
                  </Link>

                  {/* Content */}
                  <div className="order-1 w-full px-2 mt-5 sm:max-w-sm sm:pr-5 sm:pl-0 sm:mt-0 lg:mt-4 xl:mt-0 xl:ml-5 xl:flex-1 lg:order-2">

                    <Link href={`/categories/${post.frontmatter.category.replace(/ /g, '-').toLowerCase()}`}>
                      <a className="text-xs font-medium tracking-widest text-gray-50 uppercase duration-300 ease-in-out transition-color hover:text-red-600">
                        {post.frontmatter.category}
                      </a>
                    </Link>

                    <Link href={`/posts/${post.slug}`}>
                      <a>
                        <h3 className="mt-2 text-xl font-medium leading-normal tracking-normal text-gray-50 transition duration-300 ease-in-out hover:underline decoration-2 decoration-gray-800">
                          {post.frontmatter.title}
                        </h3>
                      </a>
                    </Link>
                    
                    {/* Author */}
                    <div className="flex items-center justify-between mt-4">
                      
                      {/* Author meta */}
                      <div className="flex items-center justify-center">
                        <Link href={`/authors/${post.frontmatter.author.replace(/ /g, '-').toLowerCase()}`}>
                          <a className="relative w-6 h-6 mr-3 bg-gray-100 rounded-lg">
                            {authors.map((author, i) =>
                              post.frontmatter.author === author.frontmatter.name && (
                                <Image 
                                  key={i}
                                  className="flex-shrink-0 object-cover object-center w-6 h-6 transition duration-300 ease-in-out rounded-lg" 
                                  src={author.frontmatter.image} 
                                  alt={author.frontmatter.name}
                                  layout="fill"
                                />
                              )
                            )}
                          </a>
                        </Link>

                        <div className="text-sm">
                          <span className="text-blue-500">By </span>
                          <Link href={`/authors/${post.frontmatter.author.replace(/ /g, '-').toLowerCase()}`}>
                            <a className="font-medium text-blue-500 hover:underline">
                              {post.frontmatter.author}
                            </a>
                          </Link>
                          
                          <span className="text-gray-500 lg:hidden xl:inline-block"> · {formatDate(post.frontmatter.date)}</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </article>
              ))}

            </div>

          </div>

        </div>
      </section>
    </StyledFeaturedArticles>
  )
}