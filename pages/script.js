class MyHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`<header>
        <nav class="navbar navbar-expand-sm  navbar-dark" id="mainHeading">
        <div class="container-fluid">
            <img id="logo" src="images/logo.jpg" style="height: 300px;">
            <h1 id="school_name">MAMRAJ GOVERNMENT GIRLS HIGHER SECONDARY SCHOOL</h1>
            <h1 id="school_Address">Noor Pur, Payagpur (Bahraich),<br> UTTAR PRADESH <br> Pin Code : 271871 </h1>
        </div>
        </nav>
        
    </header>`
    }
}

customElements.define('my-header',MyHeader);

class MyFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`<footer>
        <div>
            <div id="b1">
                <h1 style="color: white;">Authorised by Mrs. Varsha Gautam</h1>
                <h3 style="color: white;">Principal</h3> 
                <h4 style="color: white;">MAMRAJ GOVERNMENT GIRLS HIGHER SECONDARY SCHOOL </h4>
                <br><br>
            </div>
            <div id="b2">
                <h1 style="color: white;">Important Links*</h1>
                <ul>
                    <a  href="https://ncert.nic.in/">NCERT Books</a><br>
                    <a href="https://upmsp.edu.in/">UPMSP</a><br>
                    <a href="https://web.umang.gov.in/landing/">Umang</a><br>
                    <a href="https://bahraich.nic.in/">Bahraich Official</a>
                </ul>
            </div>
        </div> 
        <div>
            <h5 id="copy" style="color: white;">©Copyright Mamraj Govt. HS Payagpur. All Rights Reserved. </h5>
        </div>   
    </footer>`
    }
}

customElements.define('my-footer',MyFooter);


class MyHead extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`<nav class="navbar navbar-expand-sm navbar-dark" id="navBar">
        <div class="container-fluid">
        <div class="top" style="color:white"><img src="images/logo.jpg" style="height: 50px;"><h6 >MAMRAJ GOVERNMENT GIRLS HIGHER SECONDARY SCHOOL<h6></div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" id="home" href="Home.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="gallery" href="extracurricular_activity.html">Gallery</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="course" href="Courses.html">Courses</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="faculty" href="Faculties.html">Faculties</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="contact" href="ContactUs.html">Contact Us</a>
                    </li>    
                </ul>
            </div>
        </div>
    </nav>`
    }
}

customElements.define('my-head',MyHead);


class MyNav extends HTMLElement{
    connectedCallback(){
        this.innerHTML=``
    }
}

customElements.define('my-nav',MyNav);


class MyGallery extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        <div class="head">
        <a href="Home.html"><h1 >GALLERY</h1></a>
        </div>
        <nav class="navbar navbar-expand-sm navbar-dark" id="galleryHeader">
        <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
            <div class="gBar">
                <ul class="navbar-nav" id="navG">
                    <li class="nav-item1">
                        <a  href="maingate.html">MAIN GATE</a>
                    </li>
                    <li class="nav-item1">
                    <a href="mainbuilding.html">MAIN BUILDING</a>
                    </li>
                    <li class="nav-item1">
                    <a href="classroom.html">CLASSROOM</a>
                    </li>
                    <li class="nav-item1">
                    <a href="staff.html">TEACHING STAFF</a>
                    </li>
                    <li class="nav-item1">
                    <a href="prayersabha.html">PRAYER SABHA</a>
                    </li> 
                    <li class="nav-item1">
                    <a href="library.html">LIBRARY</a>
                    </li>
                    <li class="nav-item1">
                    <a href="sciencelab.html">SCIENCE LAB</a>
                    </li>
                    <li class="nav-item1">
                    <a href="playground.html">PLAY GROUND</a>
                    <li class="nav-item1">
                    <a href="greenery.html">GREENERY</a>
                    </li>
                    <li class="nav-item1">
                    <a href="extracurricular_activity.html">Extracurricular Activity</a>
                    </li>  
                </ul>
            </div>
        </div>
        </div>
    </nav>`
    }
}

customElements.define('my-gallery',MyGallery);


/* =====================================================================
   AUTO-LOADING PHOTO GALLERY
   ---------------------------------------------------------------------
   Photos are NOT written into the HTML any more. They are read straight
   from the GitHub repo's  images/<category>  folders, live, every time
   the page opens.

   ==> TO ADD OR REMOVE A PHOTO:
       1. Go to github.com and open the repo.
       2. Open  images/<category>  (e.g. images/classroom).
       3. "Add file" > "Upload files" to add, or open a photo and click
          the trash icon to delete. Then "Commit".
       4. The website shows the change automatically (just refresh).
       No HTML editing is ever needed.

   If the repo is ever renamed or moved to a different account, update
   the three values below — nothing else.
   ===================================================================== */
const GALLERY_REPO = {
  owner: 'anonymousauthor12',
  repo:  'mamraj.github.io',
  branch:'main'
};

async function loadGalleryFolder(container){
  const folder = container.getAttribute('data-gallery');          // e.g. "images/classroom"
  const imgHeight = container.getAttribute('data-img-height');     // optional, e.g. "300px"
  if(!folder) return;

  container.innerHTML = '<p style="padding:30px;text-align:center;width:100%">Loading photos…</p>';

  const api = `https://api.github.com/repos/${GALLERY_REPO.owner}/${GALLERY_REPO.repo}/contents/${folder}?ref=${GALLERY_REPO.branch}`;

  try{
    const res = await fetch(api);
    if(!res.ok) throw new Error('GitHub API responded ' + res.status);
    const files = await res.json();

    const images = files
      .filter(f => f.type === 'file' && /\.(jpe?g|png|gif|webp|bmp)$/i.test(f.name))
      .sort((a, b) => a.name.localeCompare(b.name));

    if(images.length === 0){
      container.innerHTML = '<p style="padding:30px;text-align:center;width:100%">No photos in this section yet.</p>';
      return;
    }

    const styleAttr = imgHeight ? ` style="height:${imgHeight};"` : '';
    container.innerHTML = images.map(f => `
      <div class="responsive">
         <div class="gallery">
            <a href="${f.download_url}" target="_blank" rel="noopener">
               <img${styleAttr} src="${f.download_url}" width="300" height="200" loading="lazy" alt="${f.name}">
            </a>
         </div>
      </div>`).join('');

  }catch(err){
    console.error('Gallery load failed:', err);
    container.innerHTML = '<p style="padding:30px;text-align:center;width:100%;color:#a00">Could not load photos right now. Please refresh the page in a little while.</p>';
  }
}

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-gallery]').forEach(loadGalleryFolder);
});