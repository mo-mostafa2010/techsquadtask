import Link from 'next/link'
import articleStyles from '../styles/Article.module.css'
import { Media, Card, Badge } from 'react-bootstrap'
import moment from 'moment'
const ArticleItem = ({ article }) => {
  return (
    <a style={{ cursor: 'pointer', textDecoration: 'none' }} href={article.link} target="_blank">
    <Card border='primary'>
      <Media>
        <img
          width={64}
          height={64}
          className='mr-3'
          src={article.source.url}
          alt='Generic placeholder'
        />
        <Media.Body>
          <h5>{article.source.title}</h5>
          <p>{article.title}</p>
          <span className="text-muted">
            {' '}
            {moment(article.created_at).format('MMMM Do YYYY, h:mm:ss a')}{' '}
          </span>
          <hr />
          {article.keywords.map((keyword) => (        
        <Badge className="mr-1" pill variant="primary">{keyword.name}</Badge> 
      ))}
        </Media.Body>
      </Media>
    </Card>
    </a>
  )
}

export default ArticleItem
