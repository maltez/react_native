import { About } from './AboutComponent/about';
import { Post1 } from './Post1Component/post1';
import { Post } from './postComponent/posts';
import { Post2 } from './Post2Component/post2';
import { WithParam } from './WithParam/WithParamComponent';
import NotFound from './NotFountComponent/notFound';

const routes = [
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts',
        component: Post
    },
    {
        path: '/post1',
        component: Post1 
    },
    {
        path:'/post2',
        component: Post2
    },
    {
        path: "/post/:id",
        component: WithParam
    },
    {
        component: NotFound
    }
]

export default routes;