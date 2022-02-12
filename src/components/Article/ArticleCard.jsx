import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import moment from 'moment';
const ArticleCard = ({ _id: id, name: title, category, created_date: date, image_cover_uri: content_image, content, creater }) => {
    return (<>
        <div className="card  container">
            <div className='tags-container'>
                <span class="tag is-dark is-size-6 tag-category mt-4 mr-4">{category}</span>
            </div>
            <div className="card-image">
                <figure className="image is-500x500" >
                    <Link to={`/article/${id}`}><img src={content_image} alt="Placeholder image" style={{ 'height': '300px' }} /></Link>
                </figure>
            </div>
            <div className="card-content is-fullheight">
                <div className="content ">
                    <div className='columns is-justify-content-space-between'>
                        <div className='column pb-0 is-9 pr-0'>
                            <div className='subtitle'><strong>{title}</strong></div>
                        </div>
                        <div className='column pb-0 is-3 pl-0'>
                            <div className='subtitle has-text-right'>{moment(date).format('DD-MM-YY')}</div>
                        </div>
                    </div>
                    <div className='columns is-justify-content-space-between'>
                        <div className='column pt-0'>
                            <div className='subtitle is-size-6'>by {creater}</div>
                        </div>
                    </div>
                    <div className='columns is-justify-content-space-between'>
                        <div className='column'>
                            <p dangerouslySetInnerHTML={{__html:content.substring(0, 80)}} style={{msTransition: 'all'}}>
                            
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="card-footer">
                <div className="card-footer-item"><Link to={`/article/${id}`}>Read more...</Link></ div>
            </footer>
        </div >
    </>
    )
}

export default ArticleCard
