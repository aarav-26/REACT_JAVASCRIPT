import React from 'react';
import './CardCarousel.css';

const CardCarousel = () => {
  const cards = [
    {
      id: 1,
      title: 'Effortless Scheduling',
      description: 'Schedule meetings effortlessly with our intuitive interface. Our application streamlines the process, allowing you to set up appointments with just a few clicks.',
      imageUrl: 'https://assets-global.website-files.com/63062129119620a44791a2eb/639b7845e9be869771e540b8_mural-blog-images.jpg', 
    },
    {
      id: 2,
      title: 'Automated Reminders',
      description: 'Never miss a meeting again! Our application sends automated reminders to participants, ensuring everyone is on the same page and ready for productive discussions.',
      imageUrl: 'https://www.ringcentral.com/gb/en/blog/wp-content/uploads/2021/05/happy-manager-leads-a-meeting-in-the-office-scaled.jpg', 
    },
    {
        id: 3,
        title: 'Smart Calendar Integration',
        description: 'Seamlessly integrate our meeting scheduler with your favorite calendar applications. Sync events and avoid scheduling conflicts to optimize your time.',
        imageUrl: 'https://www.liveabout.com/thmb/DND7F0_x9X0wpWyjYYY9RP_YIqY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/asian-businesswoman-leading-meeting-at-boardroom-table-504987926-5ad21419c5542e0036d7003e.jpg', 
    },
    {
        id: 4,
        title: 'Customizable Meeting Options',
        description: 'Tailor meetings to your needs. Customize meeting options such as duration, location, and attendee preferences to create a personalized experience for each session.',
        imageUrl: 'https://www.boardeffect.com/wp-content/uploads/2022/05/how-to-run-a-volunteer-board-meeting.jpg', 
    },
    {
        id: 5,
        title: 'Real-time Collaboration',
        description: 'Foster real-time collaboration with our platform. Join meetings instantly, share documents, and engage in meaningful discussions without any hassle.',
        imageUrl: 'https://knowledge.wharton.upenn.edu/wp-content/uploads/2022/10/10.26.22-nano-tool-25-minute-meeting-900x612.jpg', 
    },
    {
      id: 6,
      title: 'Meeting Analytics',
      description: 'Gain insights into your meeting habits. Our application provides analytics on meeting frequency, duration, and participant engagement to help you optimize your schedule.',
      imageUrl: 'https://sloanreview.mit.edu/wp-content/uploads/2020/05/GEN-Rogelberg-Remote-Virtual-Zoom-Meeting-Video-Conference-2400x1260-1-1200x630.jpg', 
    },
    
    
  ];
//   const duplicatedCards = [...cards, ...cards];

  return (
    <div className="card-carousel-container">
      <div className="card-carousel">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.imageUrl} alt={`Card ${card.id}`} />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
