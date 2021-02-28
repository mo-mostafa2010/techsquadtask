import Nav from './Nav'
import Meta from './Meta'
import styles from '../styles/Layout.module.css'
import {Container} from 'react-bootstrap';

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <Container>
        <main className={styles.main}>
          {children}
        </main>
      </Container>
    </>
  )
}

export default Layout
