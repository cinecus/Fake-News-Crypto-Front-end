import React from 'react'
import { Link } from 'react-router-dom';
const NewsCard = ({ id, title, category, date, news_image, content, creater }) => {
    return (<>
        <div className="card  container">
            <div className='tags-container'>
                <span class="tag is-dark is-size-6 tag-category mt-4 mr-4">{category}</span>
            </div>
            <div className="card-image">
                <figure className="image is-500x500" >
                    <Link to={`/news/${id}`}><img src={news_image} alt="Placeholder image" /></Link>
                </figure>
            </div>
            <div className="card-content is-fullheight">
                <div className="content ">
                    <div className='columns is-justify-content-space-between'>
                        <div className='column pb-0 is-9 pr-0'>
                            <div className='subtitle'><strong>{title}</strong></div>
                        </div>
                        <div className='column pb-0 is-3 pl-0'>
                            <div className='subtitle has-text-right'>{date}</div>
                        </div>
                    </div>
                    <div className='columns is-justify-content-space-between'>
                        <div className='column pt-0'>
                            <div className='subtitle is-size-6'>by {creater}</div>
                        </div>
                    </div>
                    <div className='columns is-justify-content-space-between'>
                        <div className='column'>
                            <p>
                                {content.substring(0, 80)}...
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="card-footer">
                <div className="card-footer-item"><Link to={`/news/${id}`}>Read more...</Link></ div>
                {/* <button class="button is-text is-fullwidth my-2" onSubmit={() => { navigate(`/news/${id}`) }}>Read more...</button> */}
            </footer>
        </div >
    </>
    )
}

export default NewsCard
