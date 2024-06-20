import * as React from 'react';
import '../styles/_features.scss'
import Image from 'next/image'

export const Features = () => {
  return (
    <section className="features">
    <div className="features-image">
        <Image
            src="/images/fast-delivery.png"
            alt="Faster delivery"
            width={768}
            height={768}
            className={"img"}
             placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAUABQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDWthYDV202WwupHODHJEBjb/ExyRkA56dga6W+8L2lhZNdPE8sa4O2Ijc3OOMkDvVO88QaTocd2ZoIVv8AcoWVo2fA2gqSRz6jANRWXjyyuX2WKQkKAIY2aVdmQc5J65IznrWEpSvogUY9WYcmJZXay0tnt8/I0zFGPHPH1zzRXb28kN007WEKJCkmz5WZcsANxx9TjPfFFPnFyI8i8Uape7TmcsN+7DKCM4C+noKzJfFWsX6Rw3F1lAwI2oox+QoordJWOeTdzsbLW9RS3yLpvmwTwPQD+lFFFZtGqbP/2Q=="  
        />
    </div>
    <div className="features-text">
        <div className="feature">
            <h2>Freshness Guaranteed</h2>
            <p>We take pride in serving you the freshest South Indian dishes. Our ingredients are carefully sourced
                and our chefs prepare each dish with utmost care to ensure that you get the best quality food every
                time you order.</p>
        </div>
        <div className="feature">
            <h2>Quick Delivery Service</h2>
            <p>We understand that you want your food delivered fast. That&apos;s why we have a dedicated team of delivery
                drivers who strive to bring your favorite South Indian dishes to your doorstep in the shortest
                possible time.</p>
        </div>
    </div>
</section>
  )
}
