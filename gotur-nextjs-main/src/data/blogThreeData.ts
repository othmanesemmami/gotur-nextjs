// blogData.ts
import Image1 from '@/assets/images/blog/blog-2-1-1.jpg';
import Image2 from '@/assets/images/blog/blog-2-1-2.jpg';
import Image3 from '@/assets/images/blog/blog-2-1-3.jpg';
import Author1 from '@/assets/images/blog/blog-author-1-1.png';
import Author2 from '@/assets/images/blog/blog-author-1-2.png';
import Author3 from '@/assets/images/blog/blog-author-1-3.png';



const blogThreeData = {
  tagline: 'News & Blog',
  title: 'Latest News & Articles from the Blog Posts',
  buttonText: 'See More Article',
  buttonUrl: '/blog-details-left',
 blogPosts:  [
     {
       id: 1,
       title: 'Get Best Advertiser In Your Side Pocket',
       date: 'MARCH 24, 2024',
       category: 'Travel',
       imageSrc: Image1, 
       imageAlt: 'Get Best Advertiser In Your Side Pocket',
       authorName: 'Cody Fisher',
       authorDesc: 'Admin',
       authorImage: Author1, 
       link: 'blog-details-right',
     },
     {
       id: 2,
       title: 'Web Vitals Tools Boost Your to Sen',
       date: 'APRIL 16, 2024',
       category: 'Corporate',
       imageSrc: Image2, 
       imageAlt: 'Web Vitals Tools Boost Your to Sen',
       authorName: 'Robert Fox',
       authorDesc: 'Admin',
       authorImage: Author2, 
       link: 'blog-details-right',
     },
     {
       id: 3,
       title: 'Sakura Dreams And Samurai Tales.',
       date: 'MARCH 22, 2024',
       category: 'Agency',
       imageSrc: Image3, 
       imageAlt: 'Sakura Dreams And Samurai Tales.',
       authorName: 'Devon Lane',
       authorDesc: 'Admin',
       authorImage: Author3, 
       link: 'blog-details-right',
     },
   ]
}


export default blogThreeData
