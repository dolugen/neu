import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import styles from './layout.module.css'

export default function Layout({ preview, children }) {
  return <div className={styles.searchbar}>{children}</div>
}
