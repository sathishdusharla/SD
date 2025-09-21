import type { Video, NewsArticle } from './types';

export const MOCK_VIDEOS: Video[] = [
  {
    id: 'factlens-1',
    title: 'FACTLENS by STRATEGIC DESIGNERS',
    description: `Introducing FACTLENS – an AI-powered Misinformation Radar that's revolutionizing how we combat false information online.

FACTLENS is more than just another fact-checking tool. It's a responsive web app and Chrome extension that detects misinformation in real-time, provides transparent explanations, and cites verifiable sources. Unlike existing tools that simply flag content, FACTLENS explains why something is false and provides trusted evidence.

Key Features:
• Real-time Content Analysis with AI-powered detection
• Trust Score assignment based on large-scale analytics via Google BigQuery
• Community FactWall for peer verification and gamified digital literacy
• Transparent explanations with verifiable source citations
• Chrome extension for seamless browsing protection

Built entirely on Google's ecosystem using Gemini API, Google Fact Check API, Knowledge Graph API, Firebase Firestore, and BigQuery. FACTLENS combines AI intelligence with community-driven verification to create a smarter, safer digital world where misinformation doesn't just get flagged—it gets explained, debunked, and replaced with truth.

Join us in building a future where digital literacy thrives and misinformation has nowhere to hide.`,
    thumbnailUrl: '/1.png',
    videoUrl: '/1758448363223964.mp4',
    likes: 89,
    views: 342,
    author: 'Sathish Dusharla',
    duration: '3:00',
    publishedAt: 'today',
  },
];

export const MOCK_NEWS: NewsArticle[] = [
    {
        id: 'n1',
        title: 'New AI Model Can Generate Code from a Screenshot',
        summary: 'A groundbreaking AI model has been released that can translate a user interface screenshot into clean, functional frontend code. This could drastically reduce development time for designers and developers.',
        source: 'Tech Horizon',
        publishedAt: 'Oct 26, 2023',
        imageUrl: 'https://picsum.photos/seed/news-ai/1200/630',
        content: `In a major leap for developer productivity, a new AI model unveiled today demonstrates the ability to convert user interface screenshots directly into production-ready frontend code. Developed by the "Innovate AI" lab, the model, named "Vision-to-Code," analyzes the visual structure, components, and styling of an image and outputs corresponding HTML, CSS, and JavaScript.

Early tests show a remarkable accuracy rate, correctly identifying common UI elements like buttons, forms, and navigation bars, and even replicating complex layouts and color schemes. "Our goal is to bridge the gap between design and development," said lead researcher Dr. Evelyn Reed. "Vision-to-Code allows for rapid prototyping and iteration, freeing up developers to focus on more complex logic and functionality rather than tedious UI implementation." The model is expected to be available in a limited beta next month.`,
    },
     {
        id: 'n2',
        title: 'The Quantum Leap in User Experience',
        summary: 'Quantum computing is poised to revolutionize more than just data processing. Experts are now exploring how its principles can be applied to create truly personalized and predictive user interfaces.',
        source: 'Quantum Weekly',
        publishedAt: 'Oct 24, 2023',
        imageUrl: 'https://picsum.photos/seed/news-quantum/1200/630',
        content: `While quantum computing's primary applications have been in complex simulations and cryptography, a new field of research is emerging: Quantum User Experience (QUX). Theorists propose that quantum principles could enable UIs that exist in a superposition of states, adapting instantaneously to user intent even before an action is taken.

"Imagine an interface that anticipates your needs not based on past behavior, but on a probabilistic model of your potential future actions," explains Dr. Kenji Tanaka, a pioneer in the QUX field. This could lead to applications that are not just responsive, but precognitive, offering the right tool or information at the exact moment it's needed. While still in its infancy, QUX represents a paradigm shift in how we think about human-computer interaction.`,
    },
    {
        id: 'n3',
        title: 'Strategic Designers Announce Partnership with Carbon Neutral Data Centers',
        summary: 'In a commitment to sustainable technology, Strategic Designers has announced all its cloud operations will now be hosted in 100% carbon-neutral data centers, reducing their digital footprint significantly.',
        source: 'Sustainable Tech',
        publishedAt: 'Oct 22, 2023',
        imageUrl: 'https://picsum.photos/seed/news-green/1200/630',
        content: `Leading digital firm Strategic Designers today formalized a partnership with "EverGreen Hosting," a provider of carbon-neutral data center solutions. This move will see the company's entire digital infrastructure, from internal tools to client projects, migrated to facilities powered exclusively by renewable energy sources.

The decision is part of a broader corporate initiative to promote environmental responsibility within the tech sector. "As creators of digital experiences, we have a responsibility to consider the environmental impact of our work," said the CEO in a statement. "This partnership allows us to innovate and deliver cutting-edge solutions for our clients while upholding our commitment to a sustainable future." The migration is expected to be completed by the end of the fiscal year.`,
    },
];