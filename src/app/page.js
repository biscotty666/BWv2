import Image from 'next/image'
import { allBlogs } from "contentlayer/generated"
import HomeCoverSection from '../components/Home/HomeCoverSection';
import FeaturedPosts from '../components/Home/FeaturedPosts';
import RecentPosts from '../components/Home/RecentPosts';
export default function Home() {
  // console.log(allBlogs);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />
    </main>
  )
}
