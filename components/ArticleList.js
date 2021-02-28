import ArticleItem from './ArticleItem'
import articleStyles from '../styles/Article.module.css'

const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.news.map((article) => (
        <ArticleItem article={article} key={article._id} />
      ))}
    </div>
  )
}

export default ArticleList
