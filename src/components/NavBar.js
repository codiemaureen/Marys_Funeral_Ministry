const NavBar = () => {
  const navItems = [
        "Home Page",
        "About My Services",
        "Contact",
        "Testimonials",
  ]

    let id = Math.floor(Math.random() * 10000) + 1;
  return (
    <div style={{display:"flex"}}>

     {navItems.map((items) => (
      <ul>
       <li key={id} style={{display: "flex", float:"left"}}>{items}</li>
      </ul>
     ))}
    </div>
  )
}

export default NavBar
