import { server } from '../config'
import ArticleList from '../components/ArticleList'
import {Container, Row, Col} from 'react-bootstrap';

export default function Home({ articles }) {
  return (
    <div>
    <Container fluid>
      <Row>
        <Col>
          <ArticleList articles={articles} />
        </Col>
      </Row>
    </Container>
    </div>
  )
}

// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/api/articles`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles,
//     },
//   }
// }

export const getServerSideProps = async () => {
  const res = await fetch(`http://80.240.21.204:1337/news?skip=12&limit=10`)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}
