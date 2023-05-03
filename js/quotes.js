const quotes = [
    {
        quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
        author: 'Nelson Mandela',
    },
    {
        quote: 'The way to get started is to qute taking and begin doing.',
        author: 'Walt Disney',
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: 'John Lennon',
    },
    {
        quote: 'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
        author: 'Mother Teresa',
    },
    {
        quote: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
        author: 'Benjamin Franklin',
    },
    {
        quote: 'You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.',
        author: 'Dr. Seuss',
    },
    {
        quote: 'The purpose of our lives is to be happy.',
        author: 'Dalai Lama',
    },
    {
        quote: 'Only a life lived for others is a life worthwhile.',
        author: 'Albert Einstein',
    },
    {
        quote: 'The only impossible journey is the one you never begin.',
        author: 'Tony Robbins',
    },
    {
        quote: 'Life is never fair, and perhaps it is a good thing for most of us that it is not.',
        author: 'Oscar Wilde',
    },
];

const quote = document.querySelector('.quote__phrase');
const author = document.querySelector('.quote__author');
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
