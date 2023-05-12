import blogGif from '@/public/projectGifs/blogSpaceGif.gif'
import blogInitial from '@/public/projectGifs/blogSpace.png'
import todoGif from '@/public/projectGifs/todoGif.gif'
import todoInitial from '@/public/projectGifs/todo.png'
import weatherIntial from '@/public/projectGifs/weather.png'
import weatherGif from '@/public/projectGifs/weatherGif.gif'
import underConstruction from '@/public/projectGifs/underConstruction.png'

const ProjectItems: ProjectItem[] = [
    {
        link: "https://blog-space-eta.vercel.app/",
        initial: blogInitial,
        gif: blogGif,
        alt: "Blog Space",
        icons: ['swr', 'nextjs', 'react', 'framer', 'zustand', 'firebase', 'ts'],
        title: 'Blog Space',
        body: `A social media app that gives a user space to blog. Interact with other users by leaving snarky comments!

To sign in, you can either make an account or just type in the following credentials:

Email: dummy@gmail.com
Password: dummy123

Click the Github icon for more info.`,
        repo: "https://github.com/OatsProgramming/blog-space"
    },
    {
        link: "https://weather-app-nine-self.vercel.app/",
        // Change this once you've cleaned up the weather app ui
        initial: weatherIntial,
        gif: weatherGif,
        alt: "Weather App",
        icons: ['nextjs', 'react', 'framer', 'ts'],
        title: 'Weather App',
        body: `Using clever data structures and algorithms, it's a weather app that fully utilizes the OpenWeather API to give you accurate weather data in the most user-friendly possible. 
        
Take a look and see the cool animations made in the app!`,
        repo: "https://github.com/OatsProgramming/weatherApp"
    },
    {
        link: "https://todo-app-ruby-seven.vercel.app/",
        initial: todoInitial,
        gif: todoGif,
        alt: "Todo App",
        icons: ['react', 'vite', 'framer', 'ts'],
        title: 'Todo App',
        body: `A fundamental classic to learning how to create CRUD applications. Due to it's simplistic nature, I've wanted to spice it up a bit with animations. 
        
Take a yonder and click the link.`,
        repo: "https://github.com/OatsProgramming/todoList-animated"
    },
    {
        link: "https://under-construction-site.vercel.app/",
        initial: underConstruction,
        gif: underConstruction,
        alt: "Foo Shop App",
        icons: ['react', 'nextjs', 'ts', 'zustand', 'nextauth', 'prisma'],
        title: 'Foo Shop',
        body: `This project is under construction. Please check out Github for more info.`,
repo: 'https://github.com/OatsProgramming/foo-shop'
    }
]

// Add this to foo-shop when finish
// Using NextAuth.js for authentication and Prisma to handle any type of database, whether SQL or NoSQL, I've created an ecommerce app that's up to par to any popular ecommerce site.
        
// Shop around and keep track of your favorite items by signing in!

// You can either make an account or just type in the following credentials:

// Username (optional): dummy
// Email (optional): dummy@gmail.com
// Password: dummy123

export default ProjectItems 