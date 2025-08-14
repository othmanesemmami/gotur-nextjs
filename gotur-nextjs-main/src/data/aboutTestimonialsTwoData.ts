// data/testimonialsData.ts
import { StaticImageData } from "next/image";



// Image imports
import buttonBg from '@/assets/images/backgrounds/button-bg.png';
import authorImage1 from '@/assets/images/resources/about-author-1-1.jpg';
import authorImage2 from '@/assets/images/resources/about-author-1-1.jpg';
import elementImage from '@/assets/images/shapes/des-1-1.png';
import thumb from '@/assets/images/resources/testi-2-1.png'
import thumbShape from '@/assets/images/shapes/portal-1-3.png'
import thumbShapeOne from '@/assets/images/shapes/portal-1-1.png'
import thumbShapeTwo from '@/assets/images/shapes/portal-1-2.png'
import thumbShapeThree from '@/assets/images/shapes/portal.png'

// Exporting the data object
export const aboutTestimonialsTwoData= {
  tagline: "testimonial",
  title: "Latest client",
  titleSpan: "feedback",
  thumb: thumb,
  thumbShape: thumbShape,
  thumbShapeOne: thumbShapeOne,
  thumbShapeTwo: thumbShapeTwo,
  thumbShapeThree: thumbShapeThree,
  buttonBg: buttonBg,
  testimonials: [
    {
      name: "Ronald Richards",
      role: "Co, Founder",
      text: "Sed ante elit, fringilla vitae laoreet sit amet, tempus et libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget quam quis turpis lacinia euismod cursus in arcu. Integer a purus dolor. Pellentesque finibus ut erat in sagittis. Sed semper ",
      image: authorImage1,
    },
    {
      name: "John Doe",
      role: "CEO, Example Corp",
      text: "Sed ante elit, fringilla vitae laoreet sit amet, tempus et libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget quam quis turpis lacinia euismod cursus in arcu. Integer a purus dolor. Pellentesque finibus ut erat in sagittis. Sed semper ",
      image: authorImage2,
    }
  ],
  elementImage: elementImage,
};
