import { NavLink } from "react-router-dom";
const Navibar = () => {
    return(
        <div>
         <nav class="navbar navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active navbar-brand" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link navbar-brand" href="/login">Login</a>
          
        </li>
        
        
        <li class="nav-item">
          <a class="nav-link">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</nav>

              <div class="mt-4 ml-6">Fitness Jim</div>
            </div>
     
   
        
    );
} 
export default Navibar