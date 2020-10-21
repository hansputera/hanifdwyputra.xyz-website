import React from "react";
import swal from "sweetalert";

import "bootswatch/dist/superhero/bootstrap.min.css";
import "bootswatch/dist/slate/bootstrap.min.css";

export default class Home extends React.Component {
  constructor() { 
    super();

    this.state = {
      title: "Website",
      maintenance_text: [
        "Currently my website got maintenance for a long time, you can see this website in 2 or 3 months again.",
        "I don't have time for build website, so platform android is disable for this website. Sorry",
        "You can contribute make beautiful website for me, i will give appreciate for that!."
      ]
    }
  }
  render() {
    const wasAlerted = window.localStorage.getItem("alert_maintenance");
    
    if (!["win32", "win64", "macos", "linux"].includes(navigator.platform.toLowerCase())) {
      if (!wasAlerted || !JSON.parse(wasAlerted).status) swal({
        title: "Maintenance",
        text: "Platform Android is Maintenance",
        icon: "error"
      }).then(() => {
        window.localStorage.setItem("alert_maintenance", JSON.stringify({
          context: "Android",
          status: true
        }));
      });
      return (
      <div className="text-center">
        <div className="jumbotron text-center">
          <h1>YOUR DEVICE DOESN'T COMPATIBLE</h1>
          <h4>BECAUSE MY WEBSITE IS MAINTENANCE FOR HANDPHONE</h4>
        </div>
      <marquee>{ this.state.maintenance_text[Math.floor(Math.random() * this.state.maintenance_text.length)]}</marquee>
      </div>
      )
    } else
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
    <a className="navbar-brand" href="#">{ this.state.title }</a>
        </nav>
      <div className="jumbotron text-center">
        <img className="rounded-circle" alt="My profile photo" src="favicon.ico" />
        <h1>Hanif Dwy Putra S</h1>
        <p className="lead">My name is <strong>Hanif Dwy Putra S</strong> 13 y.o Student and Learn How to use JavaScript, Typescript, etc..</p>
      </div>

      <section className="about text-center">
        <h2>About Me</h2>
        <hr />
        <div className="container">
          <p className="lead">Halo, perkenalkan nama saya adalah <strong>Hanif Dwy Putra S</strong> biasanya dipanggil oleh kawan kawan <strong>Hanif</strong> Berumur 13 tahun yang sedang ber status <strong>Siswa</strong> di sebuah Yayasan Swasta. Saya suka hal programming dan sains.<br />Saya tidak terlalu kreatif dalam hal seni dan pintar dalam ilmu Fisika, saya cukup handal dalam Biologi, Matematika, dan Bahasa Inggris. Namun, saya tertarik pada <strong>Programming</strong> sejak saya duduk di kelas 4 SD, karena hal tersebut mengasah kemampuan dan skill dan logika. Saya senang bermain logika dan berfikir serta menghafal, dan sejak itu saya sering diajak oleh guru saya mengikuti lomba lomba seperti <strong>Geografi, Sejarah, dan IPA Biologi.</strong></p>
        </div>
      </section>

      <br />
      <section className="built text-center">
        <h2>Built by</h2>
        <hr />
        <ul className="navbar-nav">
          <li className="navbar-item">
            <img src="favicon.ico" alt="react photo" />
            <a size="100px" className="nav-link" href="https://reactjs.org">ReactJS</a>
            </li>
        </ul>
      </section>
      
      </div>
    )
  }
}