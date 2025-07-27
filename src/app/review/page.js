import Head from 'next/head';
import Image from 'next/image';

export default function Review() {
  const team = [
    
    {
      name: 'Sankeerth Reddy',
      role: 'Student',
      reviewtitle:'Eco-friendly and fun!',
      reviewdescription:'Highly recommend Beyond Bike very understanding owner .Great for renting the Ebike. Lots of varieties available 👍',
      img: '/images/Sankeerth.png',
      alt: 'Frank Kinney profile picture',
      rating: 5,
    },
    {
      name: 'Silvano Kevin',
      role: 'Student',
      reviewtitle:'Great service & great bikes!',
      reviewdescription:'Efficient, friendly, and fair prices. Couldn’t ask for more! Best Ebikes in Melbourne 👍Highly Recommend',
      img: '/images/Silvano.png',
      alt: 'John Almeda profile picture',
      rating: 5,
    },
    {
      name: 'elmuz zaman',
      role: 'Student',
      reviewtitle:'Perfect for city living.',
      reviewdescription:'I rented myself an Ebike from beyond bikes.Guy helped me from start to finish.Really powerful Ebike and foldable too.Highly recommend 👍',
      img: '/images/elmuz-zaman.png',
      alt: 'Stella Larson profile picture',
      rating: 5,
    },
    {
      name: 'Sunny Patel',
      reviewtitle:'Reliable, fast, and convenient.',
      reviewdescription:'Good e bike. And Its powerful, comfortable, and ready for just about anything. Thank you.',
      img: '/images/sunny.png',
      alt: 'Paul Smith profile picture',
      rating: 5,
      role: 'Student',
    },
  ];

  const renderStars = (count, number) => {
    return '★'.repeat(count) + '☆'.repeat(5 - count);
  };

  return (
    <>
      <Head>
        <title>Our Team</title>
        <meta
          name="description"
          content="Meet our professional and dedicated team members. Learn more about our leadership and support team."
        />
      </Head>

      <main className="container py-5">
        <section className="row g-4">
          {team.map((member, index) => (
            <article className="col-md-6 col-lg-6" key={index}>
              <div
                className="p-4 text-white text-center h-100"
                style={{ backgroundColor: '#f8f8f8', borderRadius: '1rem' }}
              >
                <div
                  className="mx-auto mb-3"
                  style={{
                    width: '100px',
                    height: '100px',
                    border: '4px solid #f7931e',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  <Image
                    src={member.img}
                    alt={member.alt}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100px, 100px"
                  />
                </div>
                <p className="small mb-2 fw-600" style={{color:'#f7931e'}}>
                  {member.reviewtitle}
                </p>
                <p className="small mb-2 fw-600" style={{color:'#f7931e',fontStyle:'italic'}}>
                  {member.reviewdescription}
                </p>
                <div style={{ color: '#f7931e', fontSize: '1.2rem' }}>
                  {renderStars(member.rating)}
                </div>
                <div className="fw-bold" style={{color:'#f7931e',fontStyle:'italic'}}>- {member.name}</div>
                <div className="small" style={{color:'#f7931e'}}>{member.role}</div>
              </div>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
