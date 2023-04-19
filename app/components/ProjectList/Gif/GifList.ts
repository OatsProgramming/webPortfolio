import blogGif from '@/public/projectGifs/blogSpaceGif.gif'
import blogInitial from '@/public/projectGifs/blogSpace.png'
import todoGif from '@/public/projectGifs/todoGif.gif'
import todoInitial from '@/public/projectGifs/todo.png'

const GifList: GifProps[] = [
    {
        link: "https://blog-space-eta.vercel.app/",
        initial: blogInitial,
        gif: blogGif,
        alt: "Blog Space",
        icons: ['swr', 'nextjs', 'react', 'framer', 'zustand', 'firebase', 'ts'],
        title: 'Blog Space',
        body: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur porttitor felis, sed lobortis augue porttitor at. Integer ut urna vitae dui condimentum congue. Integer hendrerit pharetra nulla eu dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque porta eleifend eros at interdum. Integer feugiat, sapien at volutpat volutpat, quam purus iaculis mi, vel dictum elit felis eu neque. Praesent facilisis posuere tempor. In rhoncus consequat elit, at porta erat lacinia eget. Mauris commodo, ligula ut posuere pretium, tortor libero lacinia ipsum, in luctus est ante vitae purus. Curabitur viverra aliquam feugiat. Quisque orci erat, commodo non faucibus non, rhoncus eget justo. Aenean ut nisi et tortor fringilla bibendum sed pellentesque enim. Maecenas vel rutrum velit. Cras faucibus mauris eget gravida ultricies. Mauris vel laoreet velit. Proin pharetra dapibus aliquet.
        `,
        repo: "https://github.com/OatsProgramming/blog-space"
    },
    {
        link: "https://weather-app-nine-self.vercel.app/",
        // Change this once you've cleaned up the weather app ui
        initial: blogInitial,
        gif: blogGif,
        alt: "Weather App",
        icons: ['nextjs', 'react', 'framer', 'ts'],
        title: 'Weather App',
        body: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu vestibulum tortor. Ut dignissim congue turpis, sit amet suscipit mi. Ut a ante sollicitudin, vulputate nulla eu, euismod risus. Quisque sed tincidunt mi. Proin nec odio vitae velit sodales vulputate quis in lectus. Aliquam dignissim gravida neque, sit amet tempor est pulvinar ut. Integer eget auctor turpis.
        `,
        repo: "https://github.com/OatsProgramming/weatherApp"
    },
    {
        link: "https://todo-app-ruby-seven.vercel.app/",
        initial: todoInitial,
        gif: todoGif,
        alt: "Todo App",
        icons: ['react', 'vite', 'framer', 'ts'],
        title: 'Todo App',
        body: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit commodo erat, id pulvinar ex tristique ac. Phasellus nulla sapien, pellentesque nec nisi quis, porta pharetra diam. Praesent a dolor sed urna pretium ornare a ornare neque. Vestibulum varius, nulla eu lobortis sollicitudin, lorem neque volutpat nulla, sed viverra dolor libero vehicula massa. Nunc vel vestibulum nisi. Phasellus aliquam pretium luctus. Vestibulum pretium augue porttitor, aliquet turpis vel, aliquet risus. Nullam interdum, elit non ultrices rhoncus, nisl nisl finibus nunc, sed iaculis erat purus in nulla. Donec mattis quis magna ut eleifend. Nulla facilisi. Nulla pulvinar nulla lectus, at finibus massa molestie eu. Ut dictum justo ipsum, ut efficitur tortor vehicula a. 
        `,
        repo: "https://github.com/OatsProgramming/todoList-animated"
    },
]

export default GifList 