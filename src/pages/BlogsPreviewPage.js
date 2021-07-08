import React from 'react'
import './AllPage.styles.css'
import BlogTile from '../components/BlogTile/BlogTile.component'
import { blogs } from '../data/CompetitionsData'

const BlogsPreviewPage = () => {
    return(
        <div className='all-page'>
            {blogs.map((data,index) => <BlogTile key={index} {...data} /> )}
        </div>
    )
}

export default BlogsPreviewPage;