import React from 'react'
import { Link } from 'react-router-dom'
import './BlogTile.styles.css'

const BlogTile = ({title, author}) => {
    return(
        <Link className='blog-tile' to='/home/blogs/blogs-overview'>
            <div>
                <h1 className='blog-tile-title'>{title}</h1>
                <h1 className='blog-tile-author'>{author}</h1>
            </div>
        </Link>
    )
}

export default BlogTile;