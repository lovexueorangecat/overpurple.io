import * as React from 'react'
import { Link } from 'gatsby'

interface LayoutProps {
  location?: any
  title?: string
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ location, title, children }) => {
  const rootPath = `/`
  const isRootPath = location.pathname === rootPath
  const header = isRootPath ? (
    <div className="flex items-center justify-between">
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
      <label>
        <input className="switch-input" type="checkbox" />
      </label>
    </div>
  ) : (
    <>
      <Link className="header-link-home" to="/">
        {title}
      </Link>
      <>开关</>
    </>
  )

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        <a href="https://juejin.cn/user/4283353029944296">掘金</a>
        <> • </>
        <a href="https://github.com/lovexueorangecat/overpurple.io">github</a>
      </footer>
    </div>
  )
}

export default Layout
