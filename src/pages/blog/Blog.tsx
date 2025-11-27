import React from 'react';
import Navbar from '../home/Navbar';

const Blog: React.FC = () => {
    const posts = [
        {
            id: 1,
            title: "Getting Started with React",
            intro: "Learn the basics of React, including components, state, and props. A perfect guide for beginners starting their web development journey.",
            date: "Oct 10, 2023"
        },
        {
            id: 2,
            title: "Mastering Tailwind CSS",
            intro: "Discover how to build modern, responsive designs rapidly using Tailwind CSS utility classes without leaving your HTML.",
            date: "Nov 5, 2023"
        },
        {
            id: 3,
            title: "The Power of TypeScript",
            intro: "Understand why TypeScript is becoming the industry standard for large-scale JavaScript applications and how it improves code quality.",
            date: "Dec 12, 2023"
        },
        {
            id: 4,
            title: "Web Accessibility Best Practices",
            intro: "Ensure your websites are usable by everyone. Learn about ARIA labels, semantic HTML, and keyboard navigation.",
            date: "Jan 15, 2024"
        }
    ];

    return (
        <div className="min-h-screen dark:bg-gray-900 bg-[#EEEEEE] transition-colors duration-300 pt-20">
            <Navbar />

            {/* Header Section */}
            <div className="w-full flex flex-col items-center justify-center py-10 sm:py-20 px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 pb-5 bg-gradient-to-r from-[#508C9B] via-[#134B70] to-[#201E43] dark:from-blue-400 dark:via-blue-500 dark:to-blue-600 text-transparent bg-clip-text transition-all duration-500 ease-in-out">
                    My Blog
                </h1>
                <p className="text-lg md:text-xl text-[#201E43] dark:text-gray-300 text-center max-w-2xl">
                    Thoughts, tutorials, and insights on web development.
                </p>
            </div>

            {/* Blog Posts List */}
            <div className="max-w-4xl mx-auto px-4 pb-20">
                <div className="grid gap-8">
                    {posts.map((post) => (
                        <div key={post.id} className="bg-white dark:bg-[#111] rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-800">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                                <h2 className="text-2xl font-bold text-[#201E43] dark:text-white hover:text-[#508C9B] dark:hover:text-blue-400 transition-colors cursor-pointer">
                                    {post.title}
                                </h2>
                                <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">{post.date}</span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                {post.intro}
                            </p>
                            <button className="text-[#508C9B] dark:text-blue-400 font-medium hover:underline flex items-center gap-1">
                                Read more <span>&rarr;</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
