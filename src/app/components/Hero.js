import React from 'react';
import '../styles/_hero.scss';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="hero">
    <div className="hero-text">
        <h1>Delicious South Indian Tiffins and Biryani</h1>
        <p>Experience the authentic flavors of South India with our wide range of Tiffins, Biryani, and more.</p>
        <div className="hero-buttons">
            <a href="#" className="order-button">Order</a>
            <a href="#rice-items" className="explore-button">Explore</a>
        </div>
    </div>
    <div className="hero-image">
      <Image
        src="/images/chef.gif"
        alt="Cook Image"
        width={100}
        height={100}
        className="cook-image"
        placeholder="blur"
        priority={true}
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAUABQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDlgyId8gJReWA6471148UW58K7Ljw1HFDdho7VxMjlTjILqBlT1I5PIxXOWulXl7az3MEBaCAfvJM4A9vc811Oo+HtTfToLLz7QOkwEikjL7uEwRyBnHXuw9682lzxi7Lc+3zWpQliaUZztyvVX21W5xVFT3lpPYXktpdRmOeJtroexorntY+hTUldbG7FcSW3gO6MRwSxP470o0yyZbS4ujdTMyRSSBSqYyAT2XI5GTgiiivR5IyjHmV9Efn2NlJYqpZ/aZS8TyNJrbSN954YmP18taKKK8+fxM+6wP8Au1P/AAr8j//Z"
      />
    </div>
</section>

  );
};

export default Hero;
