import Blog from '../components/Blog.vue'
import GuestPost from '../components/GuestPost.vue'

const blogRoutes = [
  {
    path: '/blog/:id',
    name: 'blog',
    props: true,
    component: Blog,
    meta: {
      requiresAuth: false,
    },
    children: [
      { path: 'guest', component: GuestPost },
      { path: '/guest', component: GuestPost },
    ],
  },
]

export default blogRoutes
