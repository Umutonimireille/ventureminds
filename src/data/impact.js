// Our flagship HELP-LAB impact — Challenge 03.

import helplab1 from '../assets/images/helplab1.JPG'
import helplab3 from '../assets/images/helplab3.JPG'
import img2618 from '../assets/images/IMG_2618.JPG'
import img2619 from '../assets/images/IMG_2619.JPG'

export const featuredStory = {
  tag: 'HELP-LAB · Challenge 03',
  title: 'Sending a Family of Children Back to School ',
  body: `During our HELP-LAB challenge, We identified a family whose children had dropped out of school. We came together to support them  covering school needs and standing with the family so every child could return to the classroom. Watching them walk back through the school gates is the impact we are proudest of.`,
  color: '#F2932E',
  videoUrl: 'https://www.youtube.com/@VentureMinds-alu',
  // SWAP: Replace with a real photo from the HELP-LAB activity
  image: helplab1,
}

export const impactStats = [
  { id: 1, value: 500, suffix: '+', label: 'People Reached', color: '#1E7FBF' },
  { id: 2, value: 8, suffix: '', label: 'Communities Served', color: '#2E9E44' },
  { id: 3, value: 4, suffix: '', label: 'Active Projects', color: '#F2932E' },
  { id: 4, value: 15, suffix: '+', label: 'Partnerships Formed', color: '#F2B807' },
]

export const testimonials = [
  {
    id: 1,
    quote: 'Venture Minds brought real solutions to my family as my kid went back to school with school fees and scholl materials .',
    author: 'Mama Asifiwe console',
    color: '#2E9E44',
  },
  {
    id: 2,
    quote: 'My kid went back to school with all needed school materials and clothes , Thank you so much venture minds for your support and help to my family .',
    author: 'Mama Dushime',
    color: '#F2932E',
  },
  {
    id: 3,
    quote: 'My kid went back to school with all needed school materials and clothes , Thank you so much venture minds for your support and help to my family .',
    author: 'Mama Bella .',
    color: '#1E7FBF',
  },
]

export const impactGallery = [
  // SWAP: Replace with real impact activity photos/videos
  { id: 1, src: helplab3, alt: 'Community outreach', caption: 'Community outreach day' },
  { id: 2, src: img2618, alt: 'Field training', caption: 'Digital literacy training' },
  { id: 3, src: img2619, alt: 'Farm visit', caption: 'FarmLink pilot visit' },
  { id: 4, src: helplab1, alt: 'Showcase', caption: 'Impact showcase event' },
]
