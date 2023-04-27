import SchoolName from "./SchoolName"

const Layout = ({children}) => {
  return (
    <div>
        <SchoolName />
        {children}
    </div>
  )
}

export default Layout