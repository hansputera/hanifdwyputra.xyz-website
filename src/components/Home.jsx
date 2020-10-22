import React from "react";
import Navbar from "./templates/Navbar";

import "bootswatch/dist/superhero/bootstrap.min.css";
import "bootswatch/dist/slate/bootstrap.min.css";

export default class Home extends React.Component {
  constructor() { 
    super();

    this.state = {
      title: "Website",
      defaultTitle: "Hanif Dwy Putra S | hanifdwyputra.xyz"
    }
  }
  render() {
    if (document.title.includes("404")) document.title = this.state.defaultTitle;
    return (
      <div class="text-center">
        <Navbar></Navbar>
      <div className="jumbotron">
        <img className="rounded-circle" alt="My profile photo" src="https://raw.githubusercontent.com/hansputera/hanifdwyputra.xyz-website/master/public/favicon.ico" />
        <h1>Hanif Dwy Putra S</h1>
        <p className="lead">My name is <strong>Hanif Dwy Putra S</strong> 13 y.o Student and Learn How to use JavaScript, Typescript, etc..</p>
      </div>

      <section className="about">
        <h2>About Me</h2>
        <hr />
        <div className="container">
          <p className="lead">Halo, perkenalkan nama saya adalah <strong>Hanif Dwy Putra S</strong> biasanya dipanggil oleh kawan kawan <strong>Hanif</strong> Berumur 13 tahun yang sedang ber status <strong>Siswa</strong> di sebuah Yayasan Swasta. Saya suka hal programming dan sains.<br />Saya tidak terlalu kreatif dalam hal seni dan pintar dalam ilmu Fisika, saya cukup handal dalam Biologi, Matematika, dan Bahasa Inggris. Namun, saya tertarik pada <strong>Programming</strong> sejak saya duduk di kelas 4 SD, karena hal tersebut mengasah kemampuan dan skill dan logika. Saya senang bermain logika dan berfikir serta menghafal, dan sejak itu saya sering diajak oleh guru saya mengikuti lomba lomba seperti <strong>Geografi, Sejarah, dan IPA Biologi.</strong></p>
        </div>
      </section>

      <br />
      <section className="built">
        <h2>Built by</h2>
        <hr />
        <ul className="navbar-nav">
          <li className="navbar-item">
            <img src="https://raw.githubusercontent.com/hansputera/hanifdwyputra.xyz-website/master/public/favicon.ico" alt="react photo" />
            <a size="100px" className="nav-link" href="https://reactjs.org">ReactJS</a>
            </li>
        </ul>
      </section>
      
      </div>
    )
  }
}
