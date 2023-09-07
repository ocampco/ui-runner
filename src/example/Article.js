// Given a title, image, description, and metadata of a post, we want to adjust the UI to match the expected interface.

// The final product should have the following:
// - Bold title.
// - Centered title.
// - The image should have a total of 30 % of the width of the viewport.
// - The image height should be equal to the width.
// - The image should be positioned on the left side.
// - The description should be positioned on the right side of the image and should take all the available width.
// - The metadata should be aligned at the bottom right corner.

// Title: Lorem ipsum title.
// Image: https://public.karat.io/content/front-end-coding-exercises/post-image.png
// Description: In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.Lorem ipsum may be used as a placeholder before final copy is available.
// Metadata: Published: 12 / 12 / 2012 | Views: 22
// "https://public.karat.io/content/front-end-coding-exercises/post-list-view.png"

import './Article.css';

const Article = () => (
  <>
    <h1 className='heading'>Lorem ipsum title</h1>
    <div className='content'>
      <img className='image' alt='test' src='https://public.karat.io/content/front-end-coding-exercises/post-image.png' />
      <div className='information'>
        <div>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.Lorem ipsum may be used as a placeholder before final copy is available.</div>
        <div className='metadata'>Published: 12 / 12 / 2012 | Views: 22</div>
      </div>
    </div>
  </>
);

export default Article;
